import { ArrowRightOutlined } from "@ant-design/icons"
import React from "react"
import {
  CloseButton,
  ContractListItem,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

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

export const Contracts = ({ closeSidebar }) => {
  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>manage contracts</SidebarTitle>
        </TitleContainer>
        {contractLinks.map(({ id, title, link }) => (
          <>
            <ContractListItem key={id} href={link}>
              {title}
              <ArrowRightOutlined />
            </ContractListItem>
          </>
        ))}
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
