import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  overflow: auto;
`

export const SidebarOpacity = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

export const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  padding: 2.5rem;
  position: relative;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SidebarTitle = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const TitleButton = styled.a`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 200;
  text-decoration: underline;
`

export const SeachInput = styled.input`
  width: 100%;
  height: 5%;
  border: none;
  background-color: #dedede;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`

export const NotificationContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NotificationText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
`

export const TotalNotificationsText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
`

export const DateText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
  text-align: center;
  width: 100%;
  margin-bottom: 0.5rem;
`

export const CloseButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.5rem;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 8rem;
  left: -9rem;
  cursor: pointer;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 1);
`

export const ContractListItem = styled.a`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  font-size: 1rem;
  color: #242424;
  font-weight: 600;

  &:hover {
    background-color: #e5e6e8;
  }
`

export const BalanceContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 161, 255);
  background: linear-gradient(
    41deg,
    rgba(0, 161, 255, 1) 0%,
    rgba(41, 135, 182, 1) 46%,
    rgba(133, 128, 163, 1) 70%,
    rgba(176, 142, 212, 1) 100%
  );
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
`

export const CurrentAmountText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 70%;
`

export const MinAmountInputLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 300;
  color: #000;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 0.5rem;
`

export const MinAmountInput = styled.input`
  width: 100%;
  height: 5%;
  border: none;
  background-color: #dedede;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
`

export const SetSumBtn = styled.button`
  width: 50%;
  border: none;
  background-color: #3985f5;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  border-radius: 0.5rem;
  margin-top: 1rem;
`

export const ContractListContainer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.3rem;
`

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dedede;
  padding-bottom: 1rem;
`

export const UserProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`

export const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 1rem;
`

export const ContractInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;

  &:last-child {
    border-bottom: none;
  }
`

export const ContractListInnerContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const ContractIcon = styled.p`
  font-size: 1.5rem;
`

export const ContractTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #242424;
  text-transform: uppercase;
  margin-left: 1rem;
`

export const DemoteAdminInfoContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.3rem;
`

export const Address = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: #242424;
`

export const DemoteButton = styled.button`
  width: 100%;
  height: 5%;
  border: none;
  background-color: #3985f5;
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin-top: 1rem;
  border-radius: 0.3rem;
`

export const CustomHr = styled.hr`
  width: 100%;
  height: 3px;
  background-color: #dedede;
  border: none;
`

export const FiltersContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #242424;
  margin-bottom: 1rem;
`

export const CheckboxInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  color: #242424;
  margin-bottom: 1rem;
`
