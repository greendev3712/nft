import React, {
  useState,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from "react"
import axios from "axios"
import { toast } from "react-toastify"
import NFTGeometricCard from "components/NFTGeometricCard"
import {
  InfoContainer,
  InnerHeaderContainer,
  BackButton,
  Heading,
  NftCardContainer,
} from "./styles/InfoElements"
import "./st.css"
import { OfferBox } from "./components"
import BoosterSlider from "./components/BoosterSlider"
import Buttons from "./components/Buttons"
import { CssDiv } from "components/CssStyledComponent/CssStyledComponent"
import { Button, Input, Space, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { DappContext } from "context"
import { MarketPlaceFilters } from "components/Sidebar/MarketPlaceFilters"
import { fetchMarketItems } from "utils/helpers/marketplace"
import { fetchAuctionItems } from "utils/helpers/auction"
import { tokenURI as getTotkenURI721, tokenURI } from "utils/helpers/ylnft721"
import { tokenURI as getTotkenURI1155 } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"

/** description of marketplace */
const Marketplace = ({ moralis }) => {
  const {
    flag_offerAuction,
    setOpenSidebar,
    setSidebarContent,
    onCloseSidebar,
  } = useContext(DappContext)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const { isAuthenticated } = useMoralis()
  const [onceLoad, setOnceLoad] = useState(false)
  const [offers, setOffers] = useState([])
  const [nfts, setNfts] = useState([])
  const [auctionNFTs, setAuctionNFTs] = useState([])
  const loadNTFs = useCallback(async () => {
    if (moralis && isAuthenticated) {
      const marketNFT = await moralis?.fn.executeFunction(fetchMarketItems())
      if (marketNFT) {
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
            return {
              id: item.tokenId,
              itemId: item.itemId,
              imgSrc: meta.data.image,
              title: meta.data.name,
              price: moralis?.fn.Units.FromWei(item.price.toString()), //BNB
              priceUSD: moralis?.fn.Units.FromWei(item.price.toString()),
              brickColor: "#3985f5",
              address:
                meta.data.personal === null
                  ? process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS
                  : process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
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
        setNfts(listedNFT)
      }
    }
  }, [moralis, isAuthenticated])
  const loadAuctionNTFs = useCallback(async () => {
    if (moralis && isAuthenticated) {
      const marketNFT = await moralis?.fn.executeFunction(fetchAuctionItems())
      if (marketNFT) {
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
            return {
              id: item.tokenId,
              itemId: item.auctionId,
              imgSrc: meta.data.image,
              title: meta.data.name,
              price: moralis?.fn.Units.FromWei(item.highestBid.toString()), //BNB
              priceUSD: moralis?.fn.Units.FromWei(item.limitPrice.toString()),
              brickColor: "#3985f5",
              address:
                meta.data.personal === null
                  ? process.env.REACT_APP_YLNFT1155_CONTRACT_ADDRESS
                  : process.env.REACT_APP_YLNFT721_CONTRACT_ADDRESS,
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
        setAuctionNFTs(listedNFT)
      }
    }
  }, [moralis, isAuthenticated])
  const loadOffers = useCallback(async () => {
    moralis?.fn.Cloud.run("getOffers", { isFullOffer: true }).then(
      async (result) => {
        const value = await Promise.all(
          result.map(async (item) => {
            const attr = item.attributes
            const erc721Arr = await Promise.all(
              attr.ERC721.map(async (id) => {
                const tokenURI = await moralis?.fn.executeFunction(
                  getTotkenURI721(id),
                )
                const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
                  url: tokenURI,
                })
                return meta.data.image
              }),
            )
            const erc1155Arr = await Promise.all(
              attr.ERC1155.map(async (id) => {
                const tokenURI = await moralis?.fn.executeFunction(
                  getTotkenURI1155(id),
                )
                const meta = await moralis?.fn.Cloud.run("fetchNFTMetadata", {
                  url: tokenURI,
                })
                return meta.data.image
              }),
            )
            return {
              discount: attr.discount,
              endAt: attr.endAt,
              name: attr.name,
              fullPrice: attr.fullPrice,
              images: erc1155Arr.concat(erc721Arr),
            }
          }),
        )
        setOffers(value)
      },
    )
  }, [moralis, isAuthenticated])
  useEffect(() => {
    if (moralis && !onceLoad && isAuthenticated) {
      loadOffers()
      loadNTFs()
      loadAuctionNTFs()
      setOnceLoad(true)
    }
  }, [moralis, onceLoad, isAuthenticated, loadNTFs, loadOffers])
  const subscribeHandler = () => {
    axios
      .put("/api/add-contact", {
        email: newsletterEmail,
      })
      .then((res) => {
        toast.success("🦄 We send you email! Check your email address", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setNewsletterEmail("")
      })
      .catch((e) =>
        toast.error("🦄 Something wrong try again later!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      )
  }

  const onClickFilters = (e) => {
    setSidebarContent(<MarketPlaceFilters closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  return (
    <>
      <InfoContainer>
        <InnerHeaderContainer>
          <BackButton>Previous</BackButton>
          <Heading>Marketplace</Heading>
        </InnerHeaderContainer>

        <BoosterSlider />

        <OfferBox result={offers} />

        <CssDiv pb={"50px"}>
          <Buttons />
          <CssDiv pl={"40px"} pr="40px" m="50px auto" display="flex">
            {flag_offerAuction == "offer" && (
              <Typography.Title style={{ flexGrow: 1, marginBottom: 0 }}>
                OFFICIAL OFFER
              </Typography.Title>
            )}
            {flag_offerAuction == "auction" && (
              <Typography.Title style={{ flexGrow: 1, marginBottom: 0 }}>
                AUCTION
              </Typography.Title>
            )}
            <Input
              suffix={<SearchOutlined />}
              bordered={false}
              placeholder="Search"
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                width: "30%",
                height: "37px",
                marginRight: "20px",
              }}
            />
            <Button
              type="primary"
              ghost
              style={{ width: "90px", height: "37px", marginRight: "20px" }}
              onClick={onClickFilters}
            >
              FILTERS
            </Button>
            {flag_offerAuction == "auction" && (
              <Button type="primary" style={{ width: "90px", height: "37px" }}>
                BUY
              </Button>
            )}
          </CssDiv>
          {flag_offerAuction == "offer" && (
            <NftCardContainer>
              {nfts.map((card, index) => (
                <NFTGeometricCard
                  key={index}
                  id={card.id}
                  brickColor={card.brickColor}
                  text={card.sport}
                  playerName={card.title}
                  usdValue={card.priceUSD}
                  imageUrl={card.imgSrc}
                  cryptoValue={card.price}
                  personal={card.personal}
                  owner={card.owner}
                  address={card.address}
                  amount={card.amount}
                  itemId={card.itemId}
                />
              ))}
            </NftCardContainer>
          )}
          {flag_offerAuction == "auction" && (
            <NftCardContainer>
              {auctionNFTs.map((card, index) => (
                <NFTGeometricCard
                  key={index}
                  id={card.id}
                  brickColor={card.brickColor}
                  text={card.sport}
                  playerName={card.title}
                  usdValue={card.priceUSD}
                  imageUrl={card.imgSrc}
                  cryptoValue={card.price}
                  personal={card.personal}
                  owner={card.owner}
                  address={card.address}
                  amount={card.amount}
                  itemId={card.itemId}
                />
              ))}
            </NftCardContainer>
          )}
        </CssDiv>
      </InfoContainer>
    </>
  )
}

export default Marketplace
