import styled from "styled-components"

export const AccountInfoDetailsStyling = styled.div`
  border: 1px solid white;
  border-radius: 20px;
  height: 100%;
  margin-right: 2rem;
  padding: 1.4rem;
  position: relative;
  width: 90%;
`
export const BackgroundImage = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

// 1st row
export const FirstRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-left: 0.8rem;
  width: 97%;
`

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 100%;
  justify-content: space-between;
  position: relative;
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 2.2rem;
  width: 2.2rem;
`
export const Camera = styled.img`
  height: 1rem;
  cursor: pointer;
  left: 0.5rem;
  opacity: 0.7;
  position: absolute;
  margin: auto;
  width: 1rem;
`

export const ProfileName = styled.div`
  color: #000;
  font-size: 2rem;
  display: flex;
  gap: 5px;
  font-weight: bold;
  align-items: center;
  text-transform: uppercase;
`

export const RightSide = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #3e4628;
  display: flex;
  height: 100%;
  padding: 0.8rem;
`

export const SettingsIcon = styled.img`
  color: #b9fd02;
  height: 1rem;
  margin-right: 0.2rem;
  width: 1.5rem;
`

export const SettingsText = styled.p`
  color: #b9fd02;
  font-size: 1rem;
  text-transform: uppercase;
`

// 2nd row
export const SecondRow = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 80%;
  justify-content: space-between;
  padding: 0rem 0.5rem;
  width: 100%;
`

export const AccountBalance = styled.div`
  align-self: flex-start;
  background-color: #242424;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  width: 49%;
`

export const BalanceContainer = styled.div`
  align-items: center;
  display: flex;
  padding-top: 0.8rem;
`

export const TokenSymbol = styled.img`
  background-color: #b9fd02;
  border-radius: 50%;
  height: 1.5rem;
  margin-right: 1rem;
  width: 1.5rem;
`

export const TokenBalance = styled.p`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`

export const CashBalance = styled.p`
  color: #646464;
  font-size: 1rem;
  font-weight: 500;
  height: 100%;
  width: 45%;
`

export const ButtonTopUp = styled.a`
  background-color: #b9fd02;
  border-radius: 8px;
  color: #3b3b3b;
  font-size: 1rem;
  margin: auto;
  margin-bottom: 0.8rem;
  padding: 0.2rem 0.6rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  z-index: 100;
`
export const MyNFTCardsContainer = styled.div`
  background: rgb(14, 81, 254);
  background: linear-gradient(
    9deg,
    rgba(14, 81, 254, 1) 0%,
    rgba(171, 2, 218, 1) 63%,
    rgba(100, 77, 207, 1) 100%
  );
  border-radius: 20px;
  height: 100%;
  position: relative;
  width: 48%;
`

export const MyNFTCardsImage = styled.img`
  height: 75%;
  left: 0;
  position: absolute;
  bottom: 15px;
  width: auto;
`

export const NFTTitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
`

export const NFTCardsTitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem 1.5rem;
  text-transform: uppercase;
`

export const ArrowRight = styled.img`
  color: white;
`
