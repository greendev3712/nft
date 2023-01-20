import React, { useState, useCallback } from "react"
import { Collapse, Input, Slider, Space } from "antd"
import { filtersOptions } from "../dummy-data"
import { CheckboxContainer, MainContainer } from "../styles/FiltersStyling"
import "../styles/filters.css"

const { Panel } = Collapse

const Filters = () => {
  const [fromCost, setFromCost] = useState(0)
  const [toCost, setToCost] = useState(0)
  const [costSlider, setCostSlider] = useState([0, 100])

  const onChangeFromCost = useCallback((value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setFromCost(value)
      setCostSlider((prev) => [value, prev[1]])
      //   setAllNftFilteredItems((prev) => ({
      //     ...prev,
      //     costRange: [value, prev.costRange[1]],
      //   }))
    }
  }, [])

  const onChangeToCost = useCallback((value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setToCost(value)
      setCostSlider((prev) => [prev[0], value])
      //   setAllNftFilteredItems((prev) => ({
      //     ...prev,
      //     costRange: [prev.costRange[0], value],
      //   }))
    }
  }, [])

  const onChangeCostSlider = useCallback((value) => {
    setFromCost(value[0])
    setToCost(value[1])
    setCostSlider(value)
    // setAllNftFilteredItems((prev) => ({ ...prev, costRange: value }))
  }, [])

  return (
    <MainContainer className="marketPlacePanelFilters">
      <Collapse expandIconPosition="end">
        <hr style={{ width: "100%", marginBottom: "0px" }} />
        <Panel header="Price" key={"1"}>
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
          />
        </Panel>

        {filtersOptions.map((filter) => (
          <>
            <hr style={{ width: "100%", marginBottom: "0px" }} />
            <Panel header={filter.name} key={filter.id}>
              {filter.options.map((option) => (
                <CheckboxContainer key={option.id}>
                  <p>{option.name}</p>
                  <input type="checkbox" name={option.name} id={option.name} />
                </CheckboxContainer>
              ))}
            </Panel>
          </>
        ))}
      </Collapse>
    </MainContainer>
  )
}

export default Filters
