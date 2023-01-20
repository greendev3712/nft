import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  margin-right: 5rem;
  margin-left: 5rem;
`

export const TopInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
`

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
`

export const NftCardImage = styled.img`
  width: 100%;
  height: 100%;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
`

export const DescriptionTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
`

export const DescriptionText = styled.p`
  font-size: 0.7rem;
  color: #242424;
  font-weight: 300;
  line-height: 1rem;
  letter-spacing: 3px;
`

export const SpecsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`

export const SpecTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const RightSideContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const Tags = styled.p`
  font-size: 0.7rem;
  color: #242424;
  font-weight: 300;
  text-transform: uppercase;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`

export const NftCardName = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
  text-align: left;
`

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const StatsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightFirstInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const SalesInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const SalesInfo = styled.p`
  font-size: 0.8rem;
  color: #242424;
  font-weight: 500;
  margin-left: 0.5rem;
`

export const SalesInfoValueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.8rem;
  flex-direction: column;
`

export const PriceTitle = styled.p`
  font-size: 0.7rem;
  color: #242424;
  font-weight: 300;
  text-transform: uppercase;
`

export const PriceValueContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const TokenImage = styled.img`
  width: 2rem;
  height: 2.5rem;
  border-radius: 40%;
`

export const PriceValue = styled.p`
  font-size: 2rem;
  color: #242424;
  font-weight: 600;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;
`

export const Button = styled.button`
  width: 48%;
  height: 2.5rem;
  border: 1px solid #3985f5;
  border-radius: 5px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: #3985f5;

  &:hover {
    background-color: #3985f5;
    color: #fff;
  }
`

export const ButtonsContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const ViewCollectionBtn = styled.button`
  width: 25%;
  height: 2.5rem;
  border: 1px solid #3985f5;
  border-radius: 5px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  color: #3985f5;
  margin: 0 auto;
`
