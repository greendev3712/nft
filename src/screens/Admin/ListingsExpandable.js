import React from "react"
import { Collapse, Table } from "antd"
import "./styles/historyExpandable.css"
import { MainContainer, TableButton } from "./styles/ListingsExpandableStyles"
import { OuterContainer } from "./styles/HistoryExpandableStyles"

const tableData = [
  {
    key: "1",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "2",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "3",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "4",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
  {
    key: "5",
    unitPrice: "0.011",
    usdUnit: "$28.32",
    quantity: "1",
    Expiration: "3 months",
    from: "LauraMarieGeissfer",
  },
]

const columns = [
  {
    title: "Unit Price",
    dataIndex: "unitPrice",
    key: "unitPrice",
  },
  {
    title: "USD Price",
    dataIndex: "usdUnit",
    key: "usdUnit",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Expiration",
    dataIndex: "Expiration",
    key: "Expiration",
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "",
    key: "action",
    render: () => <TableButton>BUY</TableButton>,
  },
]

export const ListingsExpandable = () => {
  const { Panel } = Collapse
  return (
    <OuterContainer>
      <Collapse defaultActiveKey={["0"]} accordion expandIconPosition="end">
        <Panel header="LISTINGS" key="1" className="historyExpandable">
          <MainContainer>
            <Table
              dataSource={tableData}
              columns={columns}
              scroll={true}
              sticky={true}
              pagination={false}
            />
          </MainContainer>
        </Panel>
      </Collapse>
    </OuterContainer>
  )
}
