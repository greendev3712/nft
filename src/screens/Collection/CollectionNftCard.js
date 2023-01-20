import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ActionBtn,
  ButtonContainer,
  ButtonIcon,
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

export const CollectionNftCard = ({
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
}) => {
  const onClickSwap = (event) => {}

  const onClickAuction = (event) => {}

  const onClickUp = (event) => {}

  return (
    <GeometricCard isTeam={isTeam}>
      {/* <TopHeaderText isSell={isSell}>{status}</TopHeaderText> */}
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
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{sport}</TextBrick>
      </TextBrickContainer>
      <ButtonContainer>
        <ActionBtn onClick={onClickSwap}>
          <ButtonIcon src="/swap_icon.png" />
        </ActionBtn>
        <ActionBtn onClick={onClickAuction}>
          <ButtonIcon src="/auction_icon.png" />
        </ActionBtn>
        <ActionBtn onClick={onClickUp}>
          <ButtonIcon src="/upArrow_icon.png" />
        </ActionBtn>
      </ButtonContainer>
    </GeometricCard>
  )
}
