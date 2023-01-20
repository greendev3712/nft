import { Button, Col, Divider, Image, Row, Space, Typography } from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import { DappContext } from "context"
import React, { useCallback, useContext } from "react"
import { useMoralis } from "react-moralis"
import { RaiseBid } from "./RaiseBid"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"
import { withdrawNFTInstant, editAuctionItems } from "utils/helpers/auction"

export const NftBuy = ({ option, closeSidebar }) => {
  const { Moralis } = useMoralis()
  const { setSidebarContent, setOpenSidebar, onCloseSidebar } =
    useContext(DappContext)
  console.log(option)
  const openRaiseBidSidebar = () => {
    setSidebarContent(<RaiseBid option={option} closeSidebar={onCloseSidebar} />)
    setOpenSidebar(true)
  }

  const editAuctionItem = async () => {
    let transaction
    let period = 2
    const value = Moralis.Units.Token(100, "18")
    try {
      transaction = await Moralis.executeFunction(
        editAuctionItems(option.itemId, period, value)
      )

      await transaction.wait(3)

      console.log(transaction)
    } catch(error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
  }

  const onClickBuyNow = async (e) => {
    let transaction
    try {
      transaction = await Moralis.executeFunction(
        withdrawNFTInstant(option.itemId, option.personal == null ? false : true)
      )
      await transaction.wait(3)

      console.log(transaction)
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
  }

  const onClickRaiseBid = (e) => {
    openRaiseBidSidebar()
  }
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>BUY</SidebarTitle>
        </TitleContainer>

        <Row
          split={<Divider type="vertical" />}
          style={{
            position: "relative",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "25px 0",
          }}
        >
          <Col span={12}>
            <Typography.Title
              level={5}
              style={{ color: "#242424", textAlign: "center" }}
            >
              current bid
            </Typography.Title>
            <Space>
              <Image width={60} src="/favicon.ico" />
              <Typography.Title level={3}>{option.price}</Typography.Title>
            </Space>
            <CssP fontSize="18px">13:56:12</CssP>
          </Col>
          <CssDiv
            position="absolute"
            left="50%"
            top="50%"
            width="0"
            height="80%"
            transform="translate(-50%, -50%)"
            border="1px solid #000"
          />
          <Col span={12}>
            <Typography.Title
              level={5}
              style={{ color: "#242424", textAlign: "center" }}
            >
              instant redemption
            </Typography.Title>
            <Space>
              <Image width={60} src="/favicon.ico" />
              <Typography.Title level={3}>{option.limit_price}</Typography.Title>
            </Space>
          </Col>
        </Row>

        <Button
          type="primary"
          block
          style={{
            marginTop: "30px",
          }}
          onClick={onClickBuyNow}
        >
          BUY NOW
        </Button>
        <Button
          type="primary"
          block
          style={{
            marginTop: "10px",
          }}
          onClick={onClickRaiseBid}
        >
          RAISE BID
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
