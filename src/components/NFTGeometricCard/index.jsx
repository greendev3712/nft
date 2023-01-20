import React, { useContext, useState, useCallback } from "react"
import { useMoralis } from "react-moralis"
import { Link } from "react-router-dom"
import greenLogo from "../../images/green_logo.webp"
import {
  ButtonGroup,
  ButtonSelector,
  ButtonText,
  ColorBrick,
  ColorBrickContainer,
  GeometricCard,
  Graphics,
  IconImg,
  NameBlock,
  PlayerImage,
  PlayerName,
  PlayerStats,
  StatItem,
  TextBrick,
  TextBrickContainer,
  USDValue,
  ValueWrapper,
  WeightText,
  YLTToken,
} from "./styles/CardElements"
import { minterListedNFT, MarketItemSale } from "utils/helpers/marketplace.js"
import { approve } from "utils/helpers/ylnft721"
import { DappContext } from "context"
import { NftBuy } from "components/Sidebar/NftBuy"
import { Button } from "antd"
import { Confirm } from "components/Sidebar/Confirm"

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

const NFTGeometricCard = ({
  brickColor,
  text,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
  personal,
  id,
  owner,
  address,
  amount,
  itemId,
}) => {
  const [activeButton, setActiveButton] = useState("")
  const { Moralis } = useMoralis()
  const {
    flag_offerAuction,
    setSidebarContent,
    setOpenSidebar,
    onCloseSidebar,
  } = useContext(DappContext)

  const openNftBuySidebar = () => {
    const option = {
      id,
      owner,
      amount,
      itemId,
      address,
      'price': cryptoValue,
      'limit_price': usdValue,
      personal
    }
    setSidebarContent(<NftBuy option={option} closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const removeFromAuction = () => {

  }

  const openConfirmSidebar = () => {
    setSidebarContent(<Confirm closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const onClickBuy = (e) => {
    switch (flag_offerAuction) {
      case "offer":
        openConfirmSidebar()
        break
      case "auction":
        openNftBuySidebar()
        break
      default:
        break
    }
  }

  // const buyNFT = useCallback(async () => {
  //   setActiveButton("Up")
  //   const isERC721 = personal !== null
  //   try {
  //     await Moralis?.executeFunction(MarketItemSale(itemId, amount, isERC721))
  //   }
  //   catch (error) {
  //     let arr = error.data.message.split(":")
  //     alert(arr[arr.length - 1].trim())
  //   }
  // }, [Moralis])

  return (
    <GeometricCard isTeam={isTeam} backgroundColor={"white"}>
      <Graphics isTeam={isTeam}>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat
                isTeam={isTeam}
                iconType="Run"
                weight={personal.speed}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Wheel"
                weight={personal.dexterity}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Stamina"
                weight={personal.stamina}
              />
            </PlayerStats>
          </>
        )}
        <Link to={`/admin/mintedNfts/${owner}/${address}/${id}`}>
          <PlayerImage src={imageUrl} alt="playerImage" />
        </Link>
        {personal !== null && (
          <>
            <PlayerStats isTeam={isTeam}>
              <PlayerStat
                isTeam={isTeam}
                iconType="Run"
                weight={personal.dribbling}
              />
              <PlayerStat
                isTeam={isTeam}
                iconType="Wheel"
                weight={personal.finishing}
              />
            </PlayerStats>
          </>
        )}
      </Graphics>
      <NameBlock>
        <PlayerName isTeam={isTeam}>{playerName}</PlayerName>
        <ValueWrapper>
          {`${cryptoValue} YLT`}
          <USDValue>{` ($${usdValue})`}</USDValue>
        </ValueWrapper>
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{text}</TextBrick>
      </TextBrickContainer>
      <ButtonGroup>
        {/* <ButtonSelector
          onClick={onClickBuy}
          leftCorner="20px"
          rightCorner="20px"
          buy
          activeButton={activeButton}
        >
          buy
        </ButtonSelector> */}
        <Button
          onClick={onClickBuy}
          block
          style={{
            width: "97%",
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
            background: "rgba(57, 133, 245, 0.2)",
            color: "#3985f5",
            borderRadius: "4px",
          }}
        >
          BUY
        </Button>
      </ButtonGroup>
    </GeometricCard>
  )
}

export default NFTGeometricCard
