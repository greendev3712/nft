import React, { useEffect, useState } from "react"
import axios from "axios"
import {
  Button,
  ButtonsContainer,
  ButtonsContainerBottom,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  IconsContainer,
  LeftSideContainer,
  MainContainer,
  NftCardImage,
  NftCardName,
  PriceTitle,
  PriceValue,
  PriceValueContainer,
  RightFirstInnerContainer,
  RightSideContainer,
  SalesInfo,
  SalesInfoContainer,
  SalesInfoValueContainer,
  SpecCard,
  SpecsContainer,
  SpecTitle,
  StatsContainer,
  StatsInnerContainer,
  Tags,
  TokenImage,
  TopInnerContainer,
  TopSection,
  ViewCollectionBtn,
} from "./styles/NftDetailsStyles"
import image from "../../images/marketplace/offerCards/players/Denise_Lango_unique.webp"
import tokenImage from "../../images/yourlife_black.png"
import { IconImg, StatItem, WeightText } from "./styles/NftCardStyling"
import {
  ExportOutlined,
  EyeOutlined,
  FieldTimeOutlined,
  HeartOutlined,
  MoreOutlined,
  RedoOutlined,
  ShareAltOutlined,
  TableOutlined,
  TeamOutlined,
} from "@ant-design/icons"
import { HistoryExpandable } from "./HistoryExpandable"
import { ListingsExpandable } from "./ListingsExpandable"
import { OffersExpandable } from "./OffersExpandable"
import ItemActivity from "./ItemActivity"
import { OffersFullExpandable } from "./OffersFullExpandable"
import { useMoralis } from "react-moralis"

const data = {
  name: "madisen manning",
  info: [
    {
      id: "1",
      iconType: <TeamOutlined />,
      title: "231 owners",
    },
    {
      id: "2",
      iconType: <TableOutlined />,
      title: "1.0k TOTAL",
    },
    {
      id: "3",
      iconType: <EyeOutlined />,
      title: "9.5k views",
    },
    {
      id: "4",
      iconType: <HeartOutlined />,
      title: "107 FAVORITES",
    },
  ],
  price: "0.011",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consequuntur temporibus iusto laborum optio quos eius ipsum veniam. Laudantium provident repudiandae fuga vero, iste unde accusantium minima, maxime corrupti est aliquid. Aliquam modi ut nisi. Unde aliquid, dolorum rem quam rerum placeat culpa. Delectus debitis natus error quidem a voluptatibus!",
  image: image,
  specs: [
    {
      id: "1",
      iconType: "Run_black",
      weight: "2",
    },
    {
      id: "2",
      iconType: "Stamina_black",
      weight: "2",
    },
    {
      id: "3",
      iconType: "Wheel_black",
      weight: "2",
    },
    {
      id: "4",
      iconType: "Run_black",
      weight: "2",
    },
    {
      id: "5",
      iconType: "Stamina_black",
      weight: "2",
    },
  ],
}
const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
      />
      <WeightText>{weight}</WeightText>
    </StatItem>
  )
}

export const NftDetails = ({ moralis }) => {
  const { user, isAuthenticated } = useMoralis()
  const [nftDetail, setNFTDetail] = useState({})
  useEffect(() => {
    if (moralis?.fn) {
      const url = document.URL.split("/")
      const owner = url[url.length - 3]
      const address = url[url.length - 2]
      const id = url[url.length - 1]
      moralis?.fn.Web3API.account
        .getNFTs({
          chain: "bsc testnet",
          token_addresses: [address],
          address: owner,
        })
        .then(async (nft) => {
          await Promise.all(
            nft.result.map(async (i) => {
              if (i.token_id === id) {
                const metaTokenUri =
                  i.token_uri.substring(8, 12) == "ipfs"
                    ? i.token_uri.replace(
                        /^.{28}/g,
                        "https://gateway.moralisipfs.com",
                      )
                    : i.token_uri
                const meta = await axios.get(metaTokenUri)
                const imgSrc = meta.data.image
                const price = "1 BNB"
                const dprice = "300"
                setNFTDetail({
                  id: i.token_id,
                  imgSrc: imgSrc,
                  sport: "Basketball",
                  title: meta.data.name,
                  description: meta.data.description,
                  price: price, //BNB
                  priceUSD: dprice,
                  speed: 77,
                  dexterity: 55,
                  stamina: 22,
                  dribbling: 36,
                  finishing: 25,
                  brickColor: "blue",
                  address: i.token_address,
                })
              }
            }),
          )
        })
    }
  }, [moralis?.fn, isAuthenticated])
  return (
    <MainContainer>
      <TopInnerContainer>
        {/* Left Column */}
        <LeftSideContainer>
          <NftCardImage src={nftDetail.imgSrc} alt="image" />
          <DescriptionWrapper>
            <DescriptionTitle>DESCRIPTION</DescriptionTitle>
            <DescriptionText>{nftDetail.description}</DescriptionText>
            <SpecTitle>Specifications</SpecTitle>
            <SpecsContainer>
              {nftDetail.speed !== undefined && (
                <PlayerStat iconType="Run" weight={nftDetail.speed} />
              )}
              {nftDetail.dexterity !== undefined && (
                <PlayerStat iconType="Wheel" weight={nftDetail.dexterity} />
              )}
              {nftDetail.stamina !== undefined && (
                <PlayerStat iconType="Stamina" weight={nftDetail.stamina} />
              )}
              {nftDetail.dribbling !== undefined && (
                <PlayerStat iconType="Run" weight={nftDetail.dribbling} />
              )}
              {nftDetail.finishing !== undefined && (
                <PlayerStat iconType="Wheel" weight={nftDetail.finishing} />
              )}
            </SpecsContainer>
          </DescriptionWrapper>
        </LeftSideContainer>

        {/* Right Column */}
        <RightSideContainer>
          {/* Top Section */}
          <TopSection>
            <Tags>Some tag</Tags>
            <IconsContainer>
              <RedoOutlined
                style={{
                  fontSize: "1rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              />
              <ExportOutlined
                style={{
                  fontSize: "1rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              />
              <ShareAltOutlined
                style={{
                  fontSize: "1rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              />
              <MoreOutlined
                style={{
                  fontSize: "1rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  padding: "0.5rem",
                  borderRadius: "5px",
                }}
              />
            </IconsContainer>
          </TopSection>
          <NftCardName>{nftDetail.title}</NftCardName>
          <StatsContainer>
            {data.info.map((item) => (
              <StatsInnerContainer key={item.id}>
                <div>{item.iconType}</div>
                <div>{item.title}</div>
              </StatsInnerContainer>
            ))}
          </StatsContainer>

          {/* 1st card */}
          <RightFirstInnerContainer>
            <SalesInfoContainer>
              <FieldTimeOutlined />
              <SalesInfo>Sales end October 23, 2022 at 2:28pm GMT+3</SalesInfo>
            </SalesInfoContainer>
            <SalesInfoValueContainer>
              <PriceTitle>current price</PriceTitle>
              <PriceValueContainer>
                <TokenImage src={tokenImage} alt="tokenImage" />
                <PriceValue>{nftDetail.price}</PriceValue>
              </PriceValueContainer>
            </SalesInfoValueContainer>
            <ButtonsContainer>
              <Button>buy now</Button>
              <Button>make offer</Button>
            </ButtonsContainer>
          </RightFirstInnerContainer>

          {/* 2nd card */}
          <HistoryExpandable />

          {/* 3rd card */}
          <ListingsExpandable />

          {/* 4th Card */}
          <OffersExpandable />
        </RightSideContainer>
      </TopInnerContainer>

      {/* 5th Card */}
      <ItemActivity />

      {/* 6th Card */}
      <OffersFullExpandable />
      <ButtonsContainerBottom>
        <ViewCollectionBtn>view collection</ViewCollectionBtn>
      </ButtonsContainerBottom>
    </MainContainer>
  )
}
