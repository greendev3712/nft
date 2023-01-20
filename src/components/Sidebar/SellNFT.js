import React, { useEffect, useState } from "react"
import {
  ActionBtn,
  AuctionContainer,
  BottomContainer,
  ButtonsContainer,
  CardContainer,
  DetailsContainer,
  IconImg,
  InnerContainer,
  InnerTitle,
  Input,
  InputLabel,
  NFTImg,
  NftTitle,
  RightContainer,
  SidebarContainer,
  SportTitle,
  StatItem,
  TitleContainer,
  TopHeaderText,
  WeightText,
} from "./styles/SellNFTStyling"
import { CloseButton, SidebarTitle } from "./styles/SidebarStyling"
import { DatePicker } from "antd"
import {
  minterListedNFT,
  isMarketOwner,
} from "utils/helpers/marketplace"
import { MinterListNFT } from "utils/helpers/auction"
import { approve, ownerOf, getApproved } from "utils/helpers/ylnft721"
import { setApprovalForAll } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"

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

export const SellNFT = ({ options, closeSidebar }) => {
  const [steps, setSteps] = useState(0)
  const [sellPrice, setSellPrice] = useState("")
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [autoPrice, setAutoPrice] = useState(0)
  const [rate, setRate] = useState(0)
  const { Moralis, user } = useMoralis()

  useEffect(() => {
    setSellPrice("")
  }, [steps])

  const handleCloseSidebar = () => {
    closeSidebar()
    setSteps(0)
  }

  const handleMarketplaceClick = () => setSteps(1)
  const handleAuctionClick = () => setSteps(2)

  const handlePriceChange = (e) => {
    setSellPrice(e.target.value)
  }

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value)
  }

  const handleAutoPriceChange = (e) => {
    setAutoPrice(e.target.value)
  }

  const handleRateChange = (e) => {
    setRate(e.target.value)
  }

  const handleStartChange = (value) => {
    if (value !== null) setStartDate(value?._d.getTime())
  }

  const handleEndChange = (value) => {
    if (value !== null) setEndDate(value?._d.getTime())
  }

  const handleSum = async () => {
    let transaction
    const value = Moralis.Units.Token(sellPrice, "18")
    try {
      if (options.isERC721) {
        transaction = await Moralis.executeFunction(
          approve(
            process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS,
            options.id,
          ),
        )
        await transaction.wait(3)
      } else {
        transaction = await Moralis.executeFunction(
          setApprovalForAll(
            process.env.REACT_APP_YLMARKETPLACE_CONTRACT_ADDRESS,
            true,
          ),
        )
        await transaction.wait(3)
      }
      transaction = await Moralis.executeFunction(
        minterListedNFT(options.id, value, options.amount, options.isERC721),
      )
      await transaction.wait(3)
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
    // location.reload()
  }

  const handleAuction = async () => {
    let transaction
    const value = Moralis.Units.Token(sellPrice, "18")
    const limit = Moralis.Units.Token(autoPrice, "18")
    const period = parseInt((endDate - startDate) / 86400000)

    try {
      // transaction = await Moralis.executeFunction(isMarketOwner());
      // console.log(transaction, options.id);
      console.log(options.id);
      
      if (options.isERC721) {
        transaction = await Moralis.executeFunction(
          approve(process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS, options.id),
        )
        await transaction.wait(3)
      } else {
        transaction = await Moralis.executeFunction(
          setApprovalForAll(
            process.env.REACT_APP_YLAUCTION_CONTRACT_ADDRESS,
            true,
          ),
        )
        await transaction.wait(3)
      }

      // transaction = await Moralis.executeFunction(
      //   ownerOf(
      //     options.id,
      //   ),
      // )
      // console.log("<<<<<<<<<<<<<<<<<<<",transaction)
      // transaction = await Moralis.executeFunction(
      //   getApproved(options.id)
      // )
      // console.log(">>>>>>>>>>>>>>>>>>>",transaction)

      transaction = await Moralis.executeFunction(
        MinterListNFT(
          options.id,
          value,
          options.amount,
          limit,
          period,
          options.isERC721,
        ),
      )
      await transaction.wait(3)

      console.log(transaction)
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
    // location.reload()
  }
  return (
    <SidebarContainer>
      <TitleContainer>
        <SidebarTitle>{options.action[0]}</SidebarTitle>
      </TitleContainer>
      <CardContainer>
        <TopHeaderText>{options.status}</TopHeaderText>
        <InnerContainer>
          <NFTImg src={options.imageUrl} />
          <RightContainer>
            <SportTitle>{options.sport}</SportTitle>
            <NftTitle>{options.playerName}</NftTitle>
            <DetailsContainer>
              {options.personal !== null && (
                <>
                  <PlayerStat iconType="Run" weight={options.personal.speed} />
                  <PlayerStat
                    iconType="Wheel"
                    weight={options.personal.dexterity}
                  />
                  <PlayerStat
                    iconType="Stamina"
                    weight={options.personal.stamina}
                  />
                  <PlayerStat
                    iconType="Stamina"
                    weight={options.personal.dribbling}
                  />
                  <PlayerStat
                    iconType="Stamina"
                    weight={options.personal.dribbling}
                  />
                </>
              )}
            </DetailsContainer>
          </RightContainer>
        </InnerContainer>
      </CardContainer>
      {steps === 0 && (
        <>
          <ActionBtn onClick={handleMarketplaceClick}>
            sell on marketplace
          </ActionBtn>
          <ActionBtn onClick={handleAuctionClick}>sell on auction</ActionBtn>
        </>
      )}

      {steps === 1 && (
        <BottomContainer>
          <InnerTitle>sell on marketplace</InnerTitle>
          <InputLabel>
            Price (YLT)
            <Input
              placeholder="500"
              value={sellPrice}
              onChange={handlePriceChange}
            />
          </InputLabel>
          <ButtonsContainer>
            <ActionBtn onClick={() => setSteps(0)} outlined>
              back
            </ActionBtn>
            <ActionBtn tokenId={options.id} onClick={handleSum}>
              {options.action[0]}
            </ActionBtn>
          </ButtonsContainer>
        </BottomContainer>
      )}

      {steps === 2 && (
        <AuctionContainer>
          <InnerTitle>sell on auction</InnerTitle>
          <InputLabel>
            Price (YLT)
            <Input
              placeholder="500"
              value={sellPrice}
              onChange={handlePriceChange}
            />
          </InputLabel>
          <ButtonsContainer>
            <InputLabel>
              Start Date
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={handleStartChange}
              />
            </InputLabel>
            <InputLabel>
              End Date
              <DatePicker dateFormat="dd/MM/yyyy" onChange={handleEndChange} />
            </InputLabel>
          </ButtonsContainer>
          <InputLabel>
            Minimum purchase price
            <Input
              placeholder="500"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </InputLabel>
          <InputLabel>
            Auto sale price
            <Input
              placeholder="500"
              value={autoPrice}
              onChange={handleAutoPriceChange}
            />
          </InputLabel>
          <InputLabel>
            Rate step
            <Input placeholder="500" value={rate} onChange={handleRateChange} />
          </InputLabel>
          <ButtonsContainer>
            <ActionBtn outlined onClick={() => setSteps(0)}>
              back
            </ActionBtn>
            <ActionBtn onClick={handleAuction}>set sum</ActionBtn>
          </ButtonsContainer>
        </AuctionContainer>
      )}
      <CloseButton onClick={handleCloseSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
