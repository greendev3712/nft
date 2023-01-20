import Carousel from "react-grid-carousel"
import { Button, Col, Divider, Image, Row, Space, Tabs, Typography } from "antd"
import { CssDiv, CssP } from "components/CssStyledComponent/CssStyledComponent"
import React, { useState, useEffect, useMemo, useCallback } from "react"
import { PlayerNftCard } from "./PlayerNftCard"
import {
  MainContainer,
  BackBtn,
  PlayerAddBox,
  ArrowBtn,
  AddPlayerImg,
  PlayerSalaryContainer,
} from "./styles/TeamsStyling"
import "./style.css"

const team_properties = [
  {
    id: 0,
    name: "POWER",
    value: 83,
  },
  {
    id: 1,
    name: "SPEED",
    value: 134,
  },
  {
    id: 2,
    name: "ENERGY",
    value: 111,
  },
]

const priceList = [
  {
    id: "gold",
    name: "#1",
    price: "100000",
    bgImg: "url(/price_bg_1.png)",
  },
  {
    id: "silver",
    name: "#2",
    price: "50000",
    bgImg: "url(/price_bg_2.png)",
  },
  {
    id: "copper",
    name: "#3",
    price: "15000",
    bgImg: "url(/price_bg_3.png)",
  },
]

const playerSalaryList = [
  {
    id: 0,
    salaryType: "12 HOURS",
    salaryAmount: "15000",
  },
  {
    id: 1,
    salaryType: "24 HOURS",
    salaryAmount: "30000",
  },
  {
    id: 2,
    salaryType: "3 DAYS",
    salaryAmount: "45000",
  },
  {
    id: 3,
    salaryType: "WEEK",
    salaryAmount: "90000",
  },
]

const Teams = ({ moralis }) => {
  const [activatedTabKey, setActivatedTabKey] = useState(0)

  const onChangeTab = (activatedKey) => {
    setActivatedTabKey(activatedKey)
  }

  return (
    <>
      <MainContainer className="teams">
        <Space
          align="center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
        >
          <BackBtn>previous</BackBtn>
          <CssDiv display="flex" alignItems="center">
            <Image src="/team_icon.png" width={80} preview={false} />
            <Typography.Title style={{ marginBottom: "0", marginLeft: "20px" }}>
              MY TEAM NAME
            </Typography.Title>
          </CssDiv>

          <CssDiv display="flex" alignItems="center" gap="30px">
            {team_properties.map((item, index) => (
              <React.Fragment key={index}>
                <Typography.Title
                  level={3}
                  style={{ marginTop: "0", marginBottom: "0" }}
                >
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      marginRight: "10px",
                    }}
                  >
                    {item.name}
                  </span>
                  {item.value}
                </Typography.Title>
              </React.Fragment>
            ))}
          </CssDiv>

          <Button
            type="primary"
            block
            style={{
              width: "200px",
            }}
          >
            DISBAND
          </Button>
        </Space>

        <CssDiv display="flex" mt="30px" overflow="auto">
          <CssDiv backgroundColor="#61616A" padding="20px" borderRadius="8px">
            <CssP textTransform="uppercase" color="#ffffff" mb="20px">
              trainer
            </CssP>
            <CssDiv display="flex" gap="15px">
              <PlayerNftCard sportBg={"#61616A"} />
            </CssDiv>
          </CssDiv>

          <CssDiv backgroundColor="#ffffff" padding="20px" borderRadius="8px">
            <CssP textTransform="uppercase" color="#61616A" mb="20px">
              soccer
            </CssP>
            <CssDiv display="flex" gap="15px" justifyContent="space-between">
              <PlayerNftCard sportBg={"#ffffff"} />
              <PlayerNftCard sportBg={"#ffffff"} />
              <PlayerNftCard sportBg={"#ffffff"} />

              <PlayerAddBox>
                <CssP color="#3985F5" fontSize="100px" fontWeight={100}>
                  &oplus;
                </CssP>
                <Typography.Title level={4}>ADD PLAYER</Typography.Title>
              </PlayerAddBox>

              <PlayerNftCard sportBg={"#ffffff"} />
            </CssDiv>
          </CssDiv>
        </CssDiv>

        <Row gutter={16} style={{ marginTop: "80px" }}>
          <Col span={12}>
            <Button
              type="primary"
              ghost
              style={{
                borderRadius: "8px",
                backgroundColor: "#90E040",
                border: "none",
                fontSize: "32px",
                color: "#242424",
                width: "100%",
                height: "65px",
              }}
              // onClick={onClickBack}
            >
              <span style={{ marginRight: "10px", fontWeight: "bolder" }}>
                &#9876;{" "}
              </span>
              QUICK MATCH
            </Button>

            <Typography.Title
              style={{ marginTop: "81px", marginBottom: "30px" }}
            >
              TOURNAMENTS
            </Typography.Title>

            <CssDiv borderRadius="8px">
              <Carousel
                rows={1}
                cols={1}
                showDots
                loop
                arrowLeft={<ArrowBtn type="left">&larr;</ArrowBtn>}
                arrowRight={<ArrowBtn type="right">&rarr;</ArrowBtn>}
                dotColorActive="#ffffff"
                dotColorInactive={"#F5F5F0"}
                autoplay={3000}
              >
                {[0, 1, 2, 3].map((item, index) => (
                  <Carousel.Item key={index}>
                    <CssDiv
                      height="260px"
                      background="linear-gradient(180deg, rgba(25, 25, 25, 0.8) 0%, rgba(25, 25, 25, 0) 100%)"
                      backgroundImage="url(/Tournaments.png)"
                      backgroundSize="cover"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      borderTopLeftRadius="8px"
                      borderTopRightRadius="8px"
                      padding="20px"
                    >
                      <CssDiv display="flex" justifyContent="space-between">
                        <CssP color="#fff" fontSize="14px" pt="6px">
                          19 april 2022
                        </CssP>
                        <CssP
                          color="#fff"
                          fontSize="14px"
                          padding="3px 20px"
                          border="1px solid #fff"
                          borderRadius="30px"
                        >
                          SOCCER
                        </CssP>
                      </CssDiv>

                      <CssP
                        textAlign="center"
                        fontWeight="700"
                        fontSize="40px"
                        lineHeight="54px"
                        color="#ffffff"
                        mt="20px"
                      >
                        Youth League Champions Tournament
                      </CssP>
                    </CssDiv>
                  </Carousel.Item>
                ))}
              </Carousel>

              <CssDiv
                backgroundColor="#ffffff"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                padding="20px"
                boxShadow="0 0 0.5rem rgba(0, 0, 0, 1)"
              >
                <Typography.Title level={3}>PRIZES</Typography.Title>
                <Row gutter={16}>
                  {priceList.map((item) => (
                    <Col key={item.id} span={8}>
                      <CssDiv
                        backgroundImage={item.bgImg}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        borderRadius="8px"
                        display="flex"
                        flexDirection="column"
                        gap="4px"
                        justifyContent="center"
                        alignItems="center"
                        pt="10px"
                        pb="10px"
                      >
                        <Typography.Title
                          level={3}
                          style={{ color: "white", marginBottom: "0rem" }}
                        >
                          {item.name}
                        </Typography.Title>
                        <CssDiv
                          border="none"
                          borderTop="1px solid white"
                          width="80%"
                        />
                        <Space>
                          <Image
                            width={25}
                            src="/yourlife.png"
                            preview={false}
                          />
                          <Typography.Title
                            level={3}
                            style={{ color: "white", marginBottom: "0rem" }}
                          >
                            {item.price}
                          </Typography.Title>
                        </Space>
                      </CssDiv>
                    </Col>
                  ))}
                </Row>

                <Button
                  type="primary"
                  size="large"
                  block
                  style={{ marginTop: "20px" }}
                >
                  ENROLL
                </Button>
              </CssDiv>
            </CssDiv>
          </Col>
          <Col span={12}>
            <CssDiv display="flex" flexDirection="column" gap="0">
              <CssDiv
                height="300px"
                backgroundColor="#3985F5"
                backgroundImage="url(/training_camp.png)"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                borderTopLeftRadius="8px"
                borderTopRightRadius="8px"
              >
                <Typography.Title
                  style={{
                    textAlign: "center",
                    color: "white",
                    marginTop: "30px",
                  }}
                >
                  TRAINING CAMP
                </Typography.Title>
              </CssDiv>

              <CssDiv
                backgroundColor="#ffffff"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                padding="20px"
                boxShadow="0 0 0.5rem rgba(0, 0, 0, 1)"
              >
                <CssDiv display="flex" gap="5px" overflow="auto">
                  <CssDiv flex="20%" maxWidth="20%">
                    <AddPlayerImg src="/player.png" alt="player image" />
                  </CssDiv>

                  <CssDiv flex="20%" maxWidth="20%">
                    <AddPlayerImg src="/player.png" alt="player image" />
                  </CssDiv>

                  <CssDiv flex="20%" maxWidth="20%">
                    <CssDiv
                      border="1px dashed #BFBFD1"
                      borderRadius="8px"
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image width={60} src="/addicon.png" preview={false} />
                      <Typography.Title level={5}>ADD PLAYER</Typography.Title>
                    </CssDiv>
                  </CssDiv>

                  <CssDiv flex="20%" maxWidth="20%">
                    <CssDiv
                      border="1px dashed #BFBFD1"
                      borderRadius="8px"
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image width={60} src="/addicon.png" preview={false} />
                      <Typography.Title level={5}>ADD PLAYER</Typography.Title>
                    </CssDiv>
                  </CssDiv>

                  <CssDiv flex="20%" maxWidth="20%">
                    <CssDiv
                      border="1px dashed #BFBFD1"
                      borderRadius="8px"
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image width={60} src="/addicon.png" preview={false} />
                      <Typography.Title level={5}>ADD PLAYER</Typography.Title>
                    </CssDiv>
                  </CssDiv>
                </CssDiv>

                <PlayerSalaryContainer>
                  <Tabs
                    defaultActiveKey={0}
                    items={playerSalaryList.map((item, index, arr) => ({
                      key: item.id,
                      label: (
                        <CssDiv
                          // width={`${(100/arr.length).toFixed(2)}%`}
                          color={
                            activatedTabKey == item.id ? "#242424" : "#ffffff"
                          }
                          backgroundColor={
                            activatedTabKey == item.id
                              ? "#ffffff"
                              : "transparent"
                          }
                          padding="8px 18px"
                          borderRadius="4px"
                        >
                          {item.salaryType}
                        </CssDiv>
                      ),
                      children: (
                        <CssDiv
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          gap="15px"
                          pt="5px"
                          pb="20px"
                        >
                          <Image
                            width={25}
                            src="/yourlife.png"
                            preview={false}
                          />
                          <Typography.Title
                            level={3}
                            style={{ color: "white", marginBottom: "0rem" }}
                          >
                            {item.salaryAmount}
                          </Typography.Title>
                        </CssDiv>
                      ),
                    }))}
                    onChange={onChangeTab}
                  />
                </PlayerSalaryContainer>

                <Button
                  type="primary"
                  size="large"
                  block
                  style={{ marginTop: "20px" }}
                >
                  ENROLL
                </Button>
              </CssDiv>
            </CssDiv>
          </Col>
        </Row>

        <CssDiv height="100px" />
      </MainContainer>
    </>
  )
}

export default Teams
