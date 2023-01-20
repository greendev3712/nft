import React from "react"
import { Collapse } from "antd"
import "./styles/historyExpandable.css"
import {
  InnerContainer,
  MainContainer,
  NoOffersText,
  OuterContainer,
} from "./styles/OffersFullExpandableStyles"

export const OffersFullExpandable = () => {
  const { Panel } = Collapse
  return (
    <OuterContainer>
      <Collapse defaultActiveKey={["0"]} accordion expandIconPosition="end">
        <Panel header="OFFERS" key="1" className="historyExpandable">
          <MainContainer>
            <InnerContainer>
              <NoOffersText>No items to display</NoOffersText>
            </InnerContainer>
          </MainContainer>
        </Panel>
      </Collapse>
    </OuterContainer>
  )
}
