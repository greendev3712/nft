import { DappContext } from "context"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ActionBtn,
  ButtonContainer,
  ColorBrick,
  ColorBrickContainer,
  GeometricCard,
  Graphics,
  IconImg,
  MainCardContainer,
  NameBlock,
  PlayerImage,
  PlayerName,
  PlayerStats,
  StatItem,
  TextBrick,
  TextBrickContainer,
  TopHeaderText,
  USDValue,
  ValueWrapper,
  WeightText,
  YLTToken,
} from "./styles/NftCardStyling"

export const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
      />
      <WeightText>{weight}</WeightText>
    </StatItem>
  )
}

export const PlayerNftCard = ({
  brickColor,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
  action,
  status,
  address,
  id,
  owner,
  personal,
  sport,
  isERC721,
  amount,
  moralis,
  sportBg,
}) => {
  const [isSell, setIsSell] = useState(false)

  const onClickUp = (e) => {}

  return (
    <GeometricCard>
      <Graphics>
        <Link to={`/teams`}>
          <PlayerImage src="/player.png" alt="playerImage" />
        </Link>
        <NameBlock>
          <PlayerName>PAVEL GUZEEV</PlayerName>
          {isSell && (
            <ValueWrapper>
              {`${1290} YLT`}
              <USDValue>{` ($ ${3530})`}</USDValue>
            </ValueWrapper>
          )}
        </NameBlock>
        <PlayerStats>
          <PlayerStat iconType="Run" weight={321} />
          <PlayerStat iconType="Wheel" weight={32} />
          <PlayerStat iconType="Stamina" weight={8} />
        </PlayerStats>
      </Graphics>

      <ColorBrickContainer bgColor={sportBg}>
        <ColorBrick color="#F7A300" />
      </ColorBrickContainer>
      <TextBrickContainer bgColor={sportBg}>
        <TextBrick>{"american football"}</TextBrick>
      </TextBrickContainer>
      <ButtonContainer>
        <ActionBtn onClick={onClickUp}>&uarr;</ActionBtn>
        <ActionBtn onClick={onClickUp}>&#10005;</ActionBtn>
      </ButtonContainer>
    </GeometricCard>
  )
}
