import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-right: 15px;
  padding-left: 15px;
`
export const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;

  &:hover {
    color: #3985f5;
    text-decoration: underline;
  }
`
export const PlayerAddBox = styled.div`
  border: 1px dashed #bebebe;
  width: 15rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ArrowBtn = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 10%;
  right: ${({ type }) => (type === "right" ? "7%" : "unset")};
  left: ${({ type }) => (type === "left" ? "7%" : "unset")};
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  z-index: 5;
  color: #3985f5;
  text-align: center;
  font-size: 28px;
  transition: 0.4s;

  &:hover {
    background-color: #242424;
    color: #ffffff;
  }
`
export const AddPlayerImg = styled.img`
  width: 100%;
  height: auto;
`

export const PlayerSalaryContainer = styled.div`
  background: #61616a;
  border-radius: 8px;
  padding: 0px 10px;
  margin-top: 20px;
`
