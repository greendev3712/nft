import React from "react"
import { ArrowRightOutlined } from "@ant-design/icons"
import { MainContainer, MainTitle } from "./styles/ManageContractsStyling"
import { List, Typography } from "antd"

const contractLinks = [
  {
    id: 1,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
  {
    id: 2,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
  {
    id: 3,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
  {
    id: 4,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
  {
    id: 5,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
  {
    id: 6,
    title: "Contracts #43242342442",
    link: "https://etherscan.io/address/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
  },
]

export const ManageContracts = ({ closeSidebar }) => {
  return (
    <MainContainer>
      <MainTitle>manage contracts</MainTitle>
      <List
        dataSource={contractLinks}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
        rowKey={(item) => item.id}
        //! loading indicator for when fetching the data
        // loading={true}
      />
    </MainContainer>
  )
}
