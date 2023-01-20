import React from "react"
import svgMPlace from "../../images/svgMPlace.svg"
import logo from "../../images/yourlife_white.png"

import {
  FooterLinksContainer,
  LogoImage,
  NavLinks,
  Image,
  SocialLogo,
  ListItemWrapper,
  ListItemMarketplace,
  CopyrightText,
  Links,
  LinksContainer,
} from "./FooterElements"
import { footerLinks } from "./data"
import { useMedia } from "hooks/useMedia"

const FooterComponent = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  const isDesktop = useMedia("(min-width: 992px)")
  const isMobile = useMedia("(max-width: 992px)")

  return (
    <>
      {isDesktop && (
        <>
          <FooterLinksContainer>
            <SocialLogo to="/" onClick={toggleHome}>
              <LogoImage src={logo} />
            </SocialLogo>
            <LinksContainer>
              <ListItemWrapper>
                <Image src={svgMPlace} alt="React Logo" />
                <ListItemMarketplace
                  to="/nftMarket"
                  spy="true"
                  duration={500}
                  exact="true"
                  offset={0}
                >
                  marketplace
                </ListItemMarketplace>
              </ListItemWrapper>
              <Links>
                {footerLinks.map(({ id, to, name }) => (
                  <NavLinks
                    key={id}
                    to={to}
                    spy="true"
                    duration={500}
                    exact="true"
                    offset={0}
                  >
                    {name}
                  </NavLinks>
                ))}
              </Links>
            </LinksContainer>
          </FooterLinksContainer>
          <CopyrightText>YourLife. 2022</CopyrightText>
        </>
      )}
    </>
  )
}

export default FooterComponent
