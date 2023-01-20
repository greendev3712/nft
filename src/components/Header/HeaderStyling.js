import styled, { css } from "styled-components"
import DT from "../../static/design-token.json"

export const HeaderStyling = styled.header`
  position: fixed;
  z-index: 11;
  width: 100%;
  max-width: 90rem;
  display: flex;
  padding: 10px 0 10px 0;
  justify-content: space-around;
  align-items: center;
  font-family: Roboto, sans-serif;
  background-color: #fff;
  top: 0.5rem;
  border-radius: 5px;
  margin: auto;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    width: 100vw;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    box-shadow: none;
  }
`

export const LogoContainer = styled.div`
  background-color: #242424;
  width: 10%;
  border-radius: 5px;
  clip-path: polygon(0 0, 100% 0%, 79% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  height: 100%;
`

export const NavLogo = styled.img`
  width: 50%;
  position: absolute;
  left: 1.5rem;
  height: 100%;
`

export const NavText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 1rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 1rem;
  }
`

export const HeaderItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  margin-left: 5rem;

  @media screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 55%;
    padding-left: 5rem;
    margin-left: 4rem;

    /* a {
      font-size: 0.8rem;
    } */
  }
  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 40%;

    a {
      // font-size: 0.5rem;
    }
  }

  @media (max-width: ${DT.breakpoints.lg}) {
    // display: none;
  }
`

export const HeaderItemText = styled.p`
  color: #242424;
  padding-bottom: 3px;
  cursor: pointer;
  margin-right: 30px;
  width: 100%;
  text-align: left;

  @media screen and (min-width: ${DT.breakpoints.xl2}) {
    margin-right: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    // font-size: 0.5rem;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    // font-size: 0.5rem;
    color: #242424;
  }

  @media (max-width: ${DT.breakpoints.md}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`

export const BurgerMenuContainer = styled.div`
  top: 0.5rem;
  padding: 1rem;

  p {
    font-size: 1.2rem;

    &:hover {
      color: #ccc;
    }
  }

  @media screen and (max-width: 992px) {
    padding: 0;
  }
`

export const BurgerMenuInnerContainer = styled.div`
  text-align: center;
  position: absolute;
  backdrop-filter: blur(19px);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  border-radius: 5px;
`

export const CancelButton = styled.p`
  color: #242424;
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  font-size: 1rem;

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    right: 100px;
  }
`

export const SubscribeBtn = styled.button`
  background-color: #3985f5;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  outline: none;
  border: none;
  text-transform: uppercase;
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;

  @media (min-width: ${DT.breakpoints.xl2}) {
    width: 25%;
  }

  @media (max-width: ${DT.breakpoints.xl2}) {
    width: 25%;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 28%;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    // display: none;
  }
`

export const JoinBtn = styled.button`
  background-color: #3985f5;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-size: 1rem;
`
