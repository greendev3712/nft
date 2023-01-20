import { Button, Col, Row } from "antd"
import React from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const Confirm = ({ closeSidebar }) => {
  const onClickBack = (event) => {}

  const onClickAccept = (event) => {}
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>CONFIRM</SidebarTitle>
        </TitleContainer>

        <Row gutter={16}>
          <Col span={12}>
            <Button
              block
              type="primary"
              ghost
              size="large"
              onClick={onClickBack}
            >
              BACK
            </Button>
          </Col>

          <Col span={12}>
            <Button block type="primary" size="large" onClick={onClickAccept}>
              ACCEPT
            </Button>
          </Col>
        </Row>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
