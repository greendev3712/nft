import { List, Switch } from "antd"
import React from "react"
import { useLocation } from "react-router"
import { actionsList } from "../components/ManageAdmins"
import {
  Btn,
  HeaderRow,
  Image,
  InnerContainer,
  MainTitle,
  Nickname,
  OptionsContainer,
} from "./styles/EditAdminStyling"
import profileImage from "../../../images/avatar.png"

export const EditAdmin = () => {
  const location = useLocation()
  const { user } = location.state
  console.log(user)
  return (
    <InnerContainer>
      <MainTitle>Edit Admin</MainTitle>

      <OptionsContainer>
        <List
          header={
            <HeaderRow>
              <Image src={user?.profile_picture || profileImage} />
              <Nickname>{user?.nickname}</Nickname>
            </HeaderRow>
          }
          dataSource={actionsList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              {item.icon} {item.title} {/* add state and handleChange */}
              <Switch defaultChecked className="switch" />{" "}
            </List.Item>
          )}
        />
      </OptionsContainer>
      <Btn>Save</Btn>
    </InnerContainer>
  )
}
