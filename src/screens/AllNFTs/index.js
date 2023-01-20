import React, { useContext, useState, useEffect, useCallback } from "react"
import { NftCard } from "screens/Admin/NftCard"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import {
  Button,
  ButtonContainer,
  FilterButton,
  Input,
  MainContainer,
  MainTitle,
  NftContainer,
  SearchButton,
  Select,
  StatContainer,
  StatCounter,
  TopContainer,
  TopInnerContainer,
  TopLeftContainer,
  TopRightContainer,
  BackBtn,
} from "./styles/AllNftStyling"
import { DappContext } from "context"
import { useHistory } from "react-router"
import { CreateOffer } from "components/Sidebar/CreateOffer"
import { fetchMarketItems } from "utils/helpers/marketplace"
import { fetchAuctionItems } from "utils/helpers/auction"
import { tokenURI as getTotkenURI721 } from "utils/helpers/ylnft721"
import { tokenURI as getTotkenURI1155 } from "utils/helpers/ylnft1155"
import { AllNftFilter } from "components/Sidebar/AllNftFilter"

export const AllNft = ({ moralis }) => {
  const history = useHistory()
  const [isLoading, setLoading] = useState(true)
  const [filterSelected, setFilterSelected] = useState("all")
  const [onceLoad, setOnceLoad] = useState(true)
  const [active, setActive] = useState("1")
  const [nfts, setNfts] = useState([])
  const [number, setNumber] = useState(0)
  const [isSort, setSort] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const [filterAction, setFilterAction] = useState(false)
  const { onCloseSidebar, setSidebarContent, setOpenSidebar } =
    useContext(DappContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  const loadNFTs = useCallback(async () => {
    if (moralis) {
      let options = {
        chain: "bsc testnet",
        token_addresses: [
          process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
          process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS,
        ],
      }
      const notListedNFT = await moralis?.fn.Cloud.run("getAllNFTs", {
        options,
        // list,
        marketAddress: process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS,
        superAdminAddress: process.env.REACT_APP_SUPER_ADMIN_WALLET_ADDRESS,
      })
      const marketNFT = await moralis?.fn.executeFunction(fetchMarketItems())
      const auctionNFT = await moralis?.fn.executeFunction(fetchAuctionItems())
      console.log(auctionNFT);
      const onlyMintedNFT = await Promise.all(
        notListedNFT?.map(async (item) => {
          const metaTokenUri =
            item?.token_uri.substring(8, 12) == "ipfs"
              ? item.token_uri.replace(
                  /^.{28}/g,
                  "https://gateway.moralisipfs.com",
                )
              : item.token_uri
          const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
            url: metaTokenUri,
          })
          const imgSrc = meta.data.image
          const price = "1 BNB"
          const dprice = "300"
          let status = "NOT LISTED"
          const isERC721 = item.contract_type === "ERC721"
          const data = { tokenId: item.token_id, isERC721 }
          const isOfferCard = await moralis?.fn.Cloud.run("isOfferNFT", data)
          const action = ["SELL", isOfferCard ? "REMOVE" : "ADD IN OFFER"]
          if (isOfferCard) status = "Offer"
          return {
            id: item.token_id,
            imgSrc: imgSrc,
            title: meta.data.name,
            price: price, //BNB
            priceUSD: dprice,
            brickColor: "#3985f5",
            address: item.token_address,
            status,
            action,
            isERC721,
            owner: item.owner_of,
            sport: meta.data.sport,
            date: item.last_metadata_sync,
            amount: item.amount,
            personal: meta.data.personal
              ? {
                  speed: meta.data.personal.speed,
                  dexterity: meta.data.personal.energy,
                  stamina: meta.data.personal.luck,
                  dribbling: meta.data.personal.power,
                  finishing: meta.data.personal.wizzardy,
                }
              : null,
          }
        }),
      )
      const listedNFT = await Promise.all(
        marketNFT?.map(async (item) => {
          const isERC721 = item.isERC721
          const getTokenURI = isERC721 ? getTotkenURI721 : getTotkenURI1155
          const token_uri = await moralis?.fn.executeFunction(
            getTokenURI(item.tokenId),
          )
          const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
            url: token_uri,
          })
          const status = "MARKETPLACE"
          const data = { tokenId: item.tokenId.toString(), isERC721 }
          const isOfferCard = await moralis?.fn.Cloud.run("isOfferNFT", data)
          const action = ["EDIT", isOfferCard ? "REMOVE" : "ADD IN OFFER"]
          return {
            id: item.tokenId.toString(),
            imgSrc: meta.data.image,
            title: meta.data.name,
            price: moralis?.fn.Units.FromWei(item.price.toString()), //BNB
            priceUSD: moralis?.fn.Units.FromWei(item.price.toString()),
            brickColor: "#3985f5",
            address:
              meta.data.personal === null
                ? process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS
                : process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
            status,
            action,
            owner: item.owner,
            sport: meta.data.sport,
            date: meta.data.date || Date.now(),
            amount: item.amount.toString(),
            personal: isERC721
              ? {
                  speed: meta.data.personal.speed,
                  dexterity: meta.data.personal.energy,
                  stamina: meta.data.personal.luck,
                  dribbling: meta.data.personal.power,
                  finishing: meta.data.personal.wizzardy,
                }
              : null,
          }
        }),
      )

      const listedAuctionNFT = await Promise.all(
        auctionNFT?.map(async (item) => {
          console.log(item)
          const isERC721 = item.isERC721
          const getTokenURI = isERC721 ? getTotkenURI721 : getTotkenURI1155
          const token_uri = await moralis?.fn.executeFunction(
            getTokenURI(item.tokenId),
          )
          const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
            url: token_uri,
          })
          const status = "Auction"
          const data = { tokenId: item.tokenId.toString(), isERC721 }
          const isOfferCard = await moralis?.fn.Cloud.run("isOfferNFT", data)
          const action = ["EDIT", "REMOVE"]
          return {
            id: item.tokenId.toString(),
            imgSrc: meta.data.image,
            title: meta.data.name,
            price: moralis?.fn.Units.FromWei(item.highestBid.toString()), //BNB
            priceUSD: moralis?.fn.Units.FromWei(item.limitPrice.toString()),
            brickColor: "#3985f5",
            address:
              meta.data.personal === null
                ? process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS
                : process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
            status,
            action,
            owner: item.owner,
            sport: meta.data.sport,
            date: meta.data.date || Date.now(),
            amount: item.amount.toString(),
            personal: isERC721
              ? {
                  speed: meta.data.personal.speed,
                  dexterity: meta.data.personal.energy,
                  stamina: meta.data.personal.luck,
                  dribbling: meta.data.personal.power,
                  finishing: meta.data.personal.wizzardy,
                }
              : null,
          }
        }),
      )
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", marketNFT)
      console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", notListedNFT)
      // console.log("------------------------------", listedAuctionNFT)
      let result
      switch (filterSelected) {
        case "all":
          result = onlyMintedNFT.concat(listedNFT)
          result = onlyMintedNFT.concat(listedAuctionNFT)
          break
        case "minted":
          result = onlyMintedNFT
          break
        case "marketplace":
          result = listedNFT
          break
        case "offer":
          result = listedNFT
          break
        case "auction":
          result = onlyMintedNFT.concat(listedAuctionNFT)
          break
      }
      if (searchKey !== "")
        result = onlyMintedNFT.filter((nft) => {
          const word = nft.title.toLowerCase()
          return word.search(searchKey.toLowerCase()) !== -1
        })
      result.sort((a, b) => {
        return isSort
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      })
      setNumber(result.length)
      setNfts(result)
      setLoading(false)
    }
  }, [moralis, filterSelected, isSort, searchKey])

  useEffect(() => {
    if (moralis && !onceLoad && filterAction) {
      setLoading(true)
      loadNFTs()
      setFilterAction(false)
    }
  }, [loadNFTs, moralis, onceLoad, filterAction])

  useEffect(() => {
    if (moralis && onceLoad) {
      setLoading(true)
      loadNFTs()
      setOnceLoad(false)
    }
  }, [moralis, filterSelected, onceLoad, loadNFTs])

  const handleButtonFilter = (e) => {
    if (isLoading) {
      alert("Loading...")
    } else {
      setFilterSelected(e.target.value)
      setActive(e.target.id)
      setFilterAction(true)
    }
  }

  const handleOfferClick = () => {
    setSidebarContent(
      <CreateOffer moralis={moralis} closeSidebar={onCloseSidebar} />,
    )
    setOpenSidebar(true)
  }

  const handleFilter = useCallback(
    (event) => {
      setSidebarContent(<AllNftFilter closeSidebar={onCloseSidebar} />)
      setOpenSidebar(true)
    },
    [onCloseSidebar, setOpenSidebar, setSidebarContent],
  )

  const handleSortChange = () => {
    setSort(!isSort)
    setFilterAction(true)
  }

  const handleSearchChange = (e) => {
    if (e.keyCode === 13 || e.target.value === "") {
      setSearchKey(e.target.value)
      setFilterAction(true)
    }
  }

  return (
    <MainContainer>
      <BackBtn
        onClick={() => {
          history.push("/admin")
        }}
      >
        back
      </BackBtn>
      <TopContainer>
        <MainTitle>all nft</MainTitle>
        <ButtonContainer>
          <Button>create set</Button>
          <Button onClick={handleOfferClick}>create offer</Button>
        </ButtonContainer>
      </TopContainer>
      <TopInnerContainer>
        <TopLeftContainer>
          <FilterButton
            id="1"
            active={active}
            onClick={handleButtonFilter}
            value="all"
            disabled={isLoading}
          >
            all
          </FilterButton>
          <FilterButton
            id="2"
            active={active}
            onClick={handleButtonFilter}
            value="minted"
            disabled={isLoading}
          >
            minted
          </FilterButton>
          <FilterButton
            id="3"
            active={active}
            onClick={handleButtonFilter}
            value="auction"
            disabled={isLoading}
          >
            auction
          </FilterButton>
          <FilterButton
            id="4"
            active={active}
            onClick={handleButtonFilter}
            value="marketplace"
            disabled={isLoading}
          >
            marketplace
          </FilterButton>
          <FilterButton
            id="5"
            active={active}
            onClick={handleButtonFilter}
            value="offer"
            disabled={isLoading}
          >
            offer
          </FilterButton>
        </TopLeftContainer>
        <TopRightContainer>
          <Input onKeyUp={handleSearchChange} placeholder="Search" />
          <SearchButton onClick={handleFilter}>filters</SearchButton>
        </TopRightContainer>
      </TopInnerContainer>
      <StatContainer>
        {isLoading ? (
          <Spin indicator={antIcon} />
        ) : (
          <StatCounter>{number} NFT</StatCounter>
        )}

        <Select
          defaultValue="FILTER NEW ONES"
          disabled={isLoading}
          onChange={handleSortChange}
        >
          <option value="filter new ones">FILTER NEW ONES</option>
          <option value="filter old ones">FILTER OLD ONES</option>
        </Select>
      </StatContainer>
      {!isLoading ? (
        <NftContainer>
          {nfts.map((card, index) => (
            <NftCard
              key={index}
              brickColor={card.brickColor}
              sport={card.sport}
              playerName={card.title}
              usdValue={card.priceUSD}
              imageUrl={card.imgSrc}
              cryptoValue={card.price}
              id={card.id}
              owner={card.owner}
              address={card.address}
              status={card.status}
              action={card.action}
              isERC721={card.isERC721}
              amount={card.amount}
              buy
              buyAndSell
              transfer
              personal={card.personal}
              moralis={moralis}
            />
          ))}
        </NftContainer>
      ) : (
        <Spin
          style={{ height: "500px", width: "100%", paddingTop: "150px" }}
          tip="Loading..."
        ></Spin>
      )}
    </MainContainer>
  )
}
