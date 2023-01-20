import {
  Button,
  Checkbox,
  Divider,
  Input,
  InputNumber,
  Slider,
  Space,
  Typography,
} from "antd"
import { DappContext } from "context"
import React, { useCallback, useContext, useEffect, useState } from "react"
import {
  CloseButton,
  MainContainer,
  SidebarContainer,
  SidebarTitle,
  TitleContainer,
} from "./styles/SidebarStyling"

export const AllNftFilter = ({ closeSidebar }) => {
  const { allNftFilteredItems, setAllNftFilteredItems, openSidebar } =
    useContext(DappContext)

  const [typeNft, setTypeNft] = useState([])
  const [kindSport, setKindSport] = useState([])
  const [rarity, setRarity] = useState([])
  const [fromCost, setFromCost] = useState(0)
  const [toCost, setToCost] = useState(0)
  const [costSlider, setCostSlider] = useState(allNftFilteredItems.costRange)

  useEffect(() => {
    console.log(allNftFilteredItems)
    setTypeNft(allNftFilteredItems.typeNft)
    setKindSport(allNftFilteredItems.kindSport)
    setRarity(allNftFilteredItems.rarity)
    setFromCost(allNftFilteredItems.costRange[0])
    setToCost(allNftFilteredItems.costRange[1])
    setCostSlider(allNftFilteredItems.costRange)
  }, [openSidebar, allNftFilteredItems])

  const onChangeFromCost = (value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setFromCost(value)
      setCostSlider((prev) => [value, prev[1]])
      setAllNftFilteredItems((prev) => ({
        ...prev,
        costRange: [value, prev.costRange[1]],
      }))
    }
  }

  const onChangeToCost = (value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setToCost(value)
      setCostSlider((prev) => [prev[0], value])
      setAllNftFilteredItems((prev) => ({
        ...prev,
        costRange: [prev.costRange[0], value],
      }))
    }
  }

  const onChangeCostSlider = (value) => {
    setFromCost(value[0])
    setToCost(value[1])
    setCostSlider(value)
    setAllNftFilteredItems((prev) => ({ ...prev, costRange: value }))
  }

  // const onAfterChangeCostSlider = useCallback((value)=>{
  //     console.log('onAfterChangeCostSlider', value);
  // }, []);

  return (
    <SidebarContainer>
      <MainContainer>
        <TitleContainer>
          <SidebarTitle>Filters</SidebarTitle>
        </TitleContainer>

        <hr style={{ width: "100%", marginBottom: "20px" }} />
        <>
          <Typography.Title level={4}>Type of NFT</Typography.Title>
          <Checkbox.Group
            value={typeNft}
            onChange={(checkedValues) => {
              setTypeNft(checkedValues)
              setAllNftFilteredItems((prev) => ({
                ...prev,
                typeNft: checkedValues,
              }))
            }}
          >
            <Checkbox value={"boosters"}>Boosters</Checkbox>
            <br />
            <Checkbox value={"players"}>Players</Checkbox>
            <br />
            <Checkbox value={"additionality"}>Additionality</Checkbox>
            <br />
            <Checkbox value={"coaches"}>Coaches</Checkbox>
            <br />
          </Checkbox.Group>
        </>

        <hr style={{ width: "100%", marginBottom: "20px" }} />
        <>
          <Typography.Title level={4}>Kind of sport</Typography.Title>
          <Checkbox.Group
            value={kindSport}
            onChange={(checkedValues) => {
              setKindSport(checkedValues)
              setAllNftFilteredItems((prev) => ({
                ...prev,
                kindSport: checkedValues,
              }))
            }}
          >
            <Checkbox value={"basketball"}>Basketball</Checkbox>
            <br />
            <Checkbox value={"americanfootball"}>American Football</Checkbox>
            <br />
            <Checkbox value={"soccer"}>Soccer</Checkbox>
            <br />
            <Checkbox value={"softball"}>Softball</Checkbox>
            <br />
            <Checkbox value={"hockey"}>Hockey</Checkbox>
            <br />
          </Checkbox.Group>
        </>

        <hr style={{ width: "100%", marginBottom: "20px" }} />
        <>
          <Typography.Title level={4}>Rarity</Typography.Title>
          <Checkbox.Group
            value={rarity}
            onChange={(checkedValues) => {
              setRarity(checkedValues)
              setAllNftFilteredItems((prev) => ({
                ...prev,
                rarity: checkedValues,
              }))
            }}
          >
            <Checkbox value={"common"}>Common</Checkbox>
            <br />
            <Checkbox value={"rare"}>Rare</Checkbox>
            <br />
            <Checkbox value={"unique"}>Unique</Checkbox>
            <br />
            <Checkbox value={"ledendary"}>Ledendary</Checkbox>
            <br />
          </Checkbox.Group>
        </>

        <hr style={{ width: "100%", marginBottom: "20px" }} />
        <>
          <Typography.Title level={4}>Cost</Typography.Title>
          <Space.Compact>
            <Input
              addonBefore={"From"}
              value={fromCost}
              onChange={(event) => onChangeFromCost(event.target.value)}
            />
            <Input
              addonBefore={"To"}
              value={toCost}
              onChange={(event) => onChangeToCost(event.target.value)}
            />
          </Space.Compact>
          <Slider
            range={{ draggableTrack: true }}
            value={costSlider}
            min={0}
            max={1500}
            onChange={onChangeCostSlider}
            // onAfterChange={onAfterChangeCostSlider}
          />
        </>

        <Button type="primary" onClick={closeSidebar}>
          APPLY
        </Button>
      </MainContainer>
      <CloseButton onClick={closeSidebar}>X</CloseButton>
    </SidebarContainer>
  )
}
