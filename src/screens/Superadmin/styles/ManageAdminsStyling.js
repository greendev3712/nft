import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 0 15px;
`

export const BackBtn = styled.button`
  width: 2%;
  height: 10%;
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

export const TopContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
`

export const RightContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 68%;
  border: none;
  background-color: #dedede;
  padding: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  color: #242424;
  border-radius: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const MakeAdminBtn = styled.button`
  width: 28%;
  border: 1px solid #3985f5;
  background-color: transparent;
  color: #3985f5;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 0.3rem;
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;
  :hover {
    background: #3985f5;
    color: white;
    border-color: #3985f5;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const MainInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  position: relative;
  padding-top: 3rem;
`

export const QuantityText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #242424;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
`

export const RightSideContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  .ant-select-selection-item,
  .ant-select-arrow {
    font-size: 1rem;
    font-weight: 600;
    color: #3985f5 !important;
  }
`

export const CardContainer = styled.div`
  width: 21rem;
  height: 18rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const CardInnerContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftBtn = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;

  a {
    color: #f14343;
  }
`

export const RightBtn = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #242424;
  font-size: 0.8rem;
`

export const AdminImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  align-self: flex-start;
`

export const InnerContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

export const AdminName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #242424;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const AdminAddress = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: #242424;
  text-align: center;
`

export const ActionsContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ActionBtn = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: transparent;
  border: none;
  outline: none;
`
