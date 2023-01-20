import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const AdminInfoContainer = styled.div`
  height: auto;
  margin-bottom: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  padding: 5px;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
  }

  @media only screen and (max-width: ${DT.breakpoints.xl2}) {
  }
`

export const AdminInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  margin: 30px 0 30px 0;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    height: 45%;
  }
`
export const AdminInfoButtonIconsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`

export const CameraIcon = styled.img`
  height: 1.5rem;
  cursor: pointer;
  left: 4rem;
  opacity: 0.7;
  position: absolute;
  margin: auto;
  width: 1.5rem;
`

export const AdminInfoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    width: 70%;
    margin-left: 1rem;
  }
`

export const ProfileImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`

export const Role = styled.p`
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 200;
`

export const AdminUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
  width: 100%;
  overflow-wrap: anywhere;

  p {
    color: #fff;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.5rem;
  }
`

export const IconContainer = styled.div`
  align-self: flex-start;

  @media only screen and (min-width: ${DT.breakpoints.xl2}) {
    align-self: center;
  }
`
