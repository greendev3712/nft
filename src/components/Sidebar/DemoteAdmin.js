import React from "react"
import { useMoralis, useMoralisCloudFunction } from "react-moralis"
import {
  Address,
  CloseButton,
  DemoteAdminInfoContainer,
  DemoteButton,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
  UserName,
  UserProfileImage,
} from "./styles/SidebarStyling"
import profileImage from "../../images/avatar.png"

export const DemoteAdmin = ({ user, closeSidebar }) => {
  const { Moralis } = useMoralis()
  const withdrawToSuperAdmin = async () => {
    alert("withdrawToSuperAdmin")
  }

  const withdrawToBack = async () => {
    alert("withdrawToBack")
  }
  return (
    <SidebarContainer>
      <TitleContainer>
        <SidebarTitle>demote admin</SidebarTitle>
      </TitleContainer>
      <DemoteAdminInfoContainer>
        <UserProfileImage src={user?.profile_picture || profileImage} />
        <UserName>{user?.nickname}</UserName>
        <Address>{user?.ethAddress}</Address>
      </DemoteAdminInfoContainer>
      <DemoteButton onClick={withdrawToSuperAdmin}>
        resend deposit to super-admin
      </DemoteButton>
      <DemoteButton onClick={withdrawToBack}>resend deposit back</DemoteButton>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
