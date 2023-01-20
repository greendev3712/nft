import styled, { css } from "styled-components"

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100vh;
  background-color: #f2f3f5;
  padding: 2rem;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1rem;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 1.5px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.6rem;
`

export const InfoContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
`

export const SportsContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InnerTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  margin-bottom: 1rem;
  text-align: left;
  background-color: #dedede;
`

export const NftContainer = styled.div`
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const NftCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Checkbox = styled.input`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #242424;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const Button = styled.button`
  width: 48%;
  height: 100%;
  background-color: ${({ active }) => (active ? "#3985f5" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
`

export const AcceptBtn = styled.button`
  width: 50%;
  height: 2.5rem;
  background-color: #3985f5;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
`

export const DigitsContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: rgba(57, 133, 245, 0.12);
  border: 1px solid #3985f5;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    font-size: 6rem;
    color: #fff;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`

export const Digits = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  color: #3985f5;
  text-align: center;
`
