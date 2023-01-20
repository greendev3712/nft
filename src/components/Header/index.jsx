/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react"
import { useMoralis } from "react-moralis"
import { Link, NavLink } from "react-router-dom"
import { BellOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Account from "../Account/Account"

import { MobileMenu } from "../MobileMenu"
import { Sidebar } from "../Sidebar/Sidebar"
import { DappContext } from "../../context"
import Events from "../Sidebar/Events"
import AirdropV1 from "../Sidebar/AirdropV1"
import logo from "../../images/yourlife_white.png"
import { useMedia } from "hooks/useMedia"
import {
  HeaderItemsContainer,
  HeaderItemText,
  HeaderStyling,
  LogoContainer,
  NavLogo,
  RightContainer,
  SubscribeBtn,
} from "./HeaderStyling"

function Header({
  notification,
  msgNum,
  setMsgNum,
  setShowChatBox,
  showChatBox,
}) {
  const [openMenu, setOpenMenu] = useState(false)
  const {
    openSidebar,
    setOpenSidebar,
    sidebarContent,
    setSidebarContent,
    onCloseSidebar,
  } = useContext(DappContext)
  const { user } = useMoralis()
  const isDesktop = useMedia("(min-width: 992px)")
  const isMobile = useMedia("(max-width: 992px)")

  const currentUrl = window.location.pathname

  const headerItems = [
    "MARKETPLACE",
    "TRANSFERS",
    "MY ACCOUNT",
    "COLLECTION",
    "SWAP",
    "CHAT",
    "GAME SETTINGS",
    "EVENTS",
  ]

  const handleClick = (e) => {
    setSidebarContent(
      currentUrl.includes("airdrop") ? (
        <AirdropV1 closeSidebar={onCloseSidebar} />
      ) : (
        <Events notification={notification} closeSidebar={onCloseSidebar} />
      ),
    )
    setOpenSidebar(true)
    setMsgNum(0)
  }

  return (
    <HeaderStyling>
      {isDesktop && (
        <>
          <LogoContainer>
            <NavLogo src={logo} />
          </LogoContainer>
          <HeaderItemsContainer className="shadow bottom">
            {headerItems.map((item, index) => {
              if (item === "MARKETPLACE") {
                return (
                  <NavLink to="/nftMarket" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (item === "TRANSFERS") {
                return (
                  <NavLink to="/transfers" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (item === "COLLECTION") {
                return (
                  <NavLink to="/collection" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (item === "MY ACCOUNT") {
                return (
                  <NavLink to="/myaccount" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (item === "SWAP") {
                return (
                  <Link
                    to={{
                      pathname:
                        "http://swap.yourlifegames.com/?token=" + user?.id,
                      state: { user: user },
                    }}
                    target="_blank"
                    key={index}
                  >
                    <HeaderItemText>{item}</HeaderItemText>
                  </Link>
                )
              }
              if (item === "CHAT") {
                return (
                  <NavLink to="/chat" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (item === "ADMIN" && user && user.attributes.isAdmin) {
                return (
                  <NavLink to="/admin" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              }
              if (
                item === "SUPER ADMIN" &&
                user &&
                user.attributes.isSuperAdmin
              ) {
                return (
                  <NavLink to="/admin/super" key={index}>
                    <HeaderItemText>{item}</HeaderItemText>
                  </NavLink>
                )
              } else {
                return null
              }
            })}
          </HeaderItemsContainer>
          <RightContainer>
            <div>
              <SubscribeBtn>Join Newsletter</SubscribeBtn>
            </div>
            <Account />
            <Button onClick={(e) => handleClick(e)} type="default">
              {msgNum === 0 ? <BellOutlined /> : msgNum}
            </Button>
            <Sidebar openSidebar={openSidebar}>{sidebarContent}</Sidebar>
          </RightContainer>
        </>
      )}
      {isMobile && (
        <>
          <MobileMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            headerItems={headerItems}
          />
        </>
      )}
    </HeaderStyling>
  )
}

export default Header
