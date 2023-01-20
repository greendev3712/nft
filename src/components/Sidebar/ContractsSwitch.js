import React, { useState, useEffect } from "react"
import { Switch } from "antd"
import {
  CloseButton,
  ContractIcon,
  ContractInnerContainer,
  ContractListContainer,
  ContractListInnerContainer,
  ContractTitle,
  MainContainer,
  SetSumBtn,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
  UserInfoContainer,
  UserName,
  UserProfileImage,
} from "./styles/SidebarStyling"
import {
  DeliveredProcedureOutlined,
  ExportOutlined,
  IssuesCloseOutlined,
  RadiusSettingOutlined,
  StopOutlined,
} from "@ant-design/icons"
import profileImage from "../../images/avatar.png"
import {
  changePermissionsFunc,
  mintableAccounts,
  pausableAccounts,
  burnableAccounts,
  transferableAccounts,
} from "utils/helpers/proxy"
import { useMoralis } from "react-moralis"

const contracts = [
  { id: 1, name: "access mint", icon: <DeliveredProcedureOutlined /> },
  { id: 2, name: "access transfer", icon: <ExportOutlined /> },
  { id: 3, name: "access pause", icon: <IssuesCloseOutlined /> },
  { id: 4, name: "access burn", icon: <StopOutlined /> },
]

export const ContractsSwitch = ({ user, closeSidebar }) => {
  const { Moralis } = useMoralis()
  const [permission, setPermission] = useState([])
  useEffect(() => {
    const fetchFn = async () => {
      let arr = []
      arr.push(
        await Moralis.executeFunction(mintableAccounts(user?.ethAddress)),
      )
      arr.push(
        await Moralis.executeFunction(transferableAccounts(user?.ethAddress)),
      )
      arr.push(
        await Moralis.executeFunction(pausableAccounts(user?.ethAddress)),
      )
      arr.push(
        await Moralis.executeFunction(burnableAccounts(user?.ethAddress)),
      )
      console.log(arr)
      setPermission(arr)
    }
    // try {
    fetchFn()
    // }
    // catch (error) {
    //   let arr = error.data.message.split(":")
    //   alert(arr[arr.length - 1].trim())
    // }
  }, [user?.ethAddress, Moralis])
  const onChange = (checked, e) => {
    const index = Number(e.target.closest("button").getAttribute("index"))
    setPermission((select) =>
      select.map((value, i) => (i === index ? checked : value)),
    )
  }
  const submit = async () => {
    const permissionList = {
      accessMint: permission[0],
      accessTransfer: permission[1],
      accessPause: permission[2],
      accessBurn: permission[3],
    }
    for (let funcName in permissionList) {
      const transaction = await Moralis.executeFunction(
        changePermissionsFunc(
          user?.ethAddress,
          funcName,
          permissionList[funcName],
        ),
      )
      await transaction.wait(3)
    }
  }
  return (
    <SidebarContainer>
      <TitleContainer>
        <SidebarTitle>EDIT ADMIN</SidebarTitle>
      </TitleContainer>
      <ContractListContainer>
        <UserInfoContainer>
          <UserProfileImage src={user?.profile_picture || profileImage} />
          <UserName>{user?.nickname || "Hello"}</UserName>
        </UserInfoContainer>
        {contracts.map((contract, index) => (
          <ContractInnerContainer key={contract.id}>
            <ContractListInnerContainer>
              <ContractIcon>{contract.icon}</ContractIcon>
              <ContractTitle>{contract.name}</ContractTitle>
            </ContractListInnerContainer>
            <Switch
              onChange={onChange}
              index={index}
              checked={permission[index]}
            />
          </ContractInnerContainer>
        ))}
      </ContractListContainer>
      <SetSumBtn onClick={submit}>SAVE</SetSumBtn>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
