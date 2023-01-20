import { Button, Col, Input, Row } from "antd"
import { CssP } from "components/CssStyledComponent/CssStyledComponent"
import React, { useState } from "react"
import { useMoralis } from "react-moralis"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { userBidOffer } from 'utils/helpers/auction'

export const RaiseBid = ({ option, closeSidebar }) => {
  const [raiseValue, SetRaiseValue] = useState(0)
  const { Moralis } = useMoralis()

  const onClickBack = (e) => {}

  const onClickRaise = async (e) => {
    let transaction
    const value = Moralis.Units.Token(raiseValue, "18")

    try {
      transaction = await Moralis.executeFunction(
        userBidOffer(option.itemId, value, option.amount, option.personal == null ? false : true)
      )
      await transaction.wait(3)

      console.log(transaction)
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
  }

  const onChangeRaiseValue = (e) => {
    SetRaiseValue(e.target.value)
  }

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>RAISE BID</SidebarTitle>
        </TitleContainer>
        <CssP fontWeight={"400"} fontSize="16px" lineHeight="20px">
          Bid (YLT)
        </CssP>
        <Input
          placeholder={option.usdValue}
          style={{
            borderRadius: "8px",
            opacity: "0.5",
            backgroundColor: "#DEDEDE",
            height: "40px",
          }}
          bordered={false}
          value={raiseValue}
          onChange={onChangeRaiseValue}
        />

        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Button
              type="primary"
              block
              ghost
              style={{
                borderRadius: "4px",
              }}
              onClick={onClickBack}
            >
              BACK
            </Button>
          </Col>

          <Col span={12}>
            <Button
              type="primary"
              block
              style={{
                borderRadius: "4px",
              }}
              onClick={onClickRaise}
            >
              RAISE
            </Button>
          </Col>
        </Row>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
