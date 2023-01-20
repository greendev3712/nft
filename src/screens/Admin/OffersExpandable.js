import React from "react"
import { Collapse } from "antd"
import "./styles/historyExpandable.css"
import {
  InnerContainer,
  MainContainer,
  NoOffersText,
} from "./styles/OffersExpandableStyles"

export const OffersExpandable = () => {
  const { Panel } = Collapse
  return (
    <Collapse defaultActiveKey={["0"]} accordion expandIconPosition="end">
      <Panel header="OFFERS" key="1" className="historyExpandable">
        <MainContainer>
          <InnerContainer>
            <NoOffersText>No offers yet</NoOffersText>
          </InnerContainer>
        </MainContainer>
      </Panel>
    </Collapse>
  )
}
