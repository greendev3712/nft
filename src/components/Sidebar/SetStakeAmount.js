import React, { useEffect, useState, useRef, useCallback } from "react"
import { useMoralis } from "react-moralis"
import {
  BalanceInnerContainer,
  BalanceValue,
  TokenImage,
} from "screens/Superadmin/styles/BalanceStyling"
import {
  BalanceContainer,
  CloseButton,
  CurrentAmountText,
  MainContainer,
  MinAmountInput,
  MinAmountInputLabel,
  SetSumBtn,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import whiteLabel from "../../images/white_label.webp"
import { setSufficientAmount, sufficientstakeamount } from "utils/helpers/proxy"

export const SetStakeAmount = ({ closeSidebar }) => {
  const { Moralis } = useMoralis()
  const [suffAmount, getSufficientstakeamount] = useState(null)
  const depositAmountInput = useRef()

  const fetchAmount = useCallback(async () => {
    let value
    try {
      value = await Moralis.executeFunction(sufficientstakeamount())
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
    if (value) getSufficientstakeamount(Moralis.Units.FromWei(value))
  }, [Moralis])

  const setSufficientValue = async () => {
    const inputVal = depositAmountInput.current.value
    const transaction = await Moralis.executeFunction(
      setSufficientAmount(Moralis.Units.Token(inputVal, "18")),
    )
    await transaction.wait()
    fetchAmount()
  }

  useEffect(() => {
    fetchAmount()
  }, [Moralis, fetchAmount])

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>set stake value</SidebarTitle>
        </TitleContainer>
        <BalanceContainer>
          <BalanceInnerContainer>
            <TokenImage src={whiteLabel} />
            <BalanceValue>{suffAmount}</BalanceValue>
          </BalanceInnerContainer>
          <CurrentAmountText>current amount</CurrentAmountText>
        </BalanceContainer>
        <MinAmountInputLabel>Enter the minimum amount</MinAmountInputLabel>
        <MinAmountInput placeholder={suffAmount} ref={depositAmountInput} />
        <SetSumBtn onClick={setSufficientValue}>SET SUM</SetSumBtn>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
