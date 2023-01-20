/* eslint-disable prettier/prettier */
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { Loading } from "notiflix"
import { useHistory } from "react-router"
import "../styles/formNftCard.css"

import {
  DropFileStyle,
  FormStyling,
  SelectLabel,
  SubmitBtn,
  TitleField,
} from "../styles/CreateNFTStyles"
import attachSvg from "../../../images/attach.svg"
import { sports } from "../dummyData"
import { countries } from "../countries"
import { lazyMintNft, createToken } from "utils/helpers/ylnft721"
import { lazy1155MintNft, create1155Token } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"
import {
  Select,
  Input,
  DatePicker,
  Radio,
  Typography,
  Row,
  Col,
  Card,
} from "antd"

export const FormNFTCard = ({ propNftType }) => {
  const history = useHistory()
  const { Moralis } = useMoralis()
  const [files, setFiles] = useState([])
  const [selectedFields, setSelectedFields] = useState({
    network: null,
    mintType: null,
    sport: null,
    amount: "1",
    nftName: null,
    nftDesc: null,
    athleteBirthday: null,
    athleteCountry: null,
    athleteRegion: null,
    athleteTeam: null,
    biography: null,
    power: "",
    energy: "",
    luck: "",
    speed: "",
    wizzardy: "",
  })
  const {
    register,
    formState: { errors },
  } = useForm()
  const { TextArea } = Input
  const onSubmit = async (e) => {
    e.preventDefault()
    const {
      network,
      mintType,
      sport,
      amount,
      nftName,
      nftDesc,
      athleteBirthday,
      athleteCountry,
      athleteRegion,
      athleteTeam,
      biography,
      power,
      energy,
      luck,
      speed,
      wizzardy,
    } = selectedFields
    Loading.standard()

    const data = files[0]
    const image_ipfs = new Moralis.File(data.name, data)
    const img = await image_ipfs.saveIPFS()
    const image = "https://gateway.moralisipfs.com/ipfs/" + img._hash
    const personal =
      propNftType !== "Booster"
        ? {
            power,
            energy,
            luck,
            speed,
            wizzardy,
            athleteBirthday,
            athleteCountry,
            athleteRegion,
            athleteTeam,
            biography,
          }
        : null

    const options = JSON.stringify({
      name: nftName,
      description: nftDesc,
      type: propNftType,
      sport,
      image,
      amount,
      personal,
      date: Date.now(),
    })
    const file = new Moralis.File("file.json", {
      base64: btoa(options),
    })
    const response = await file.saveIPFS()
    const metadata_hash =
      "https://gateway.moralisipfs.com/ipfs/" + response._hash
    try {
      if (propNftType !== "Booster") {
        if (mintType == "Normal") {
          await Moralis.executeFunction(
            createToken(metadata_hash, sport, propNftType),
          )
        }

        if (mintType == "Lazy Mint") {
          await Moralis.executeFunction(
            lazyMintNft(metadata_hash, sport, propNftType),
          )
        }
      } else {
        if (mintType == "Normal") {
          await Moralis.executeFunction(
            create1155Token(metadata_hash, sport, propNftType, amount),
          )
        }

        if (mintType == "Lazy Mint") {
          await Moralis.executeFunction(
            lazy1155MintNft(metadata_hash, sport, propNftType, amount),
          )
        }
      }
    } catch (error) {
      let arr = error.data.message.split(":")
      alert(arr[arr.length - 1].trim())
    }
    Loading.remove()
  }

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  ))

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  return (
    <FormStyling id="createNFTForm" onSubmit={onSubmit}>
      <TitleField>Select Network</TitleField>
      <Radio.Group
        className="networkType"
        name="network"
        onChange={(e) => {
          setSelectedFields({ ...selectedFields, network: e.target.value })
        }}
        value={selectedFields.network}
      >
        {["Polygon", "Binance"].map((item, idx) => (
          <Radio key={idx} value={item} name="sportKind">
            {item}
          </Radio>
        ))}
      </Radio.Group>

      <>
        <TitleField>Type of mint</TitleField>
        <Select
          className="select-field"
          name="mintType"
          bordered={false}
          dropdownMatchSelectWidth={false}
          onChange={(value) => {
            setSelectedFields({ ...selectedFields, mintType: value })
          }}
        >
          <Select.Option value={"Normal"} name="mintType">
            Normal
          </Select.Option>
          <Select.Option value={"Lazy Mint"} name="mintType">
            Lazy Mint
          </Select.Option>
        </Select>
      </>

      <>
        <TitleField>Select kind of sport</TitleField>
        <Select
          className="select-field"
          name="sport"
          onChange={(value) => {
            setSelectedFields({ ...selectedFields, sport: value })
          }}
        >
          {sports.map(({ id, value }) => (
            <Select.Option key={id} value={value} name="sportKind">
              {value}
            </Select.Option>
          ))}
        </Select>
      </>

      {propNftType === "Booster" && (
        <SelectLabel>
          <TitleField>Amount of NFT</TitleField>
          <input
            className="select-field"
            type="number"
            placeholder="Amount of NFT"
            name="amount"
            onChange={(e) =>
              setSelectedFields({ ...selectedFields, amount: e.target.value })
            }
          />
        </SelectLabel>
      )}

      <>
        <TitleField>NFT name</TitleField>
        <input
          className="select-field"
          type="text"
          placeholder="NFT Name"
          name="nftName"
          onChange={(e) =>
            setSelectedFields({ ...selectedFields, nftName: e.target.value })
          }
        />
      </>

      <>
        <TitleField>NFT description</TitleField>
        <TextArea
          name="nftDesc"
          placeholder="Description"
          cols={10}
          rows={8}
          onChange={(e) =>
            setSelectedFields({ ...selectedFields, nftDesc: e.target.value })
          }
          style={{
            width: "70%",
            height: "300px",
            backgroundColor: "#242424",
            borderRadius: "0.8rem",
            color: "white",
            paddingTop: "20px",
            paddingBottom: "100px",
          }}
        />
      </>

      <>
        <TitleField>
          Enter media to upload to IPFS <br />
          <span>The file must be PNG, and no more than 3 MB</span>
        </TitleField>

        <DropFileStyle {...getRootProps()}>
          <input
            type="url"
            placeholder="Enter media to upload to IPFS"
            {...register("Enter media to upload to IPFS", {})}
            {...getInputProps()}
          />
          <p>Drop files here</p>
          <div>
            <img src={attachSvg} alt="attach" />
            <span>Attach file</span>
          </div>
          <aside>{thumbs}</aside>
        </DropFileStyle>
      </>

      {propNftType !== "Booster" && (
        <>
          <Typography.Title style={{ marginTop: "50px" }}>
            CHARACTERISTICS AND ATTRIBUTES
          </Typography.Title>
          <TitleField style={{ marginTop: "0" }}>
            Enter characteristics
          </TitleField>
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={12} md={8} xl={6}>
              <Card
                title={"Power"}
                bordered={false}
                bodyStyle={{
                  backgroundColor: "black",
                  padding: "8px 0 8px 30px",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                headStyle={{
                  backgroundColor: "#242424",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                style={{
                  borderRadius: "12px",
                }}
                hoverable
              >
                <Input
                  name="power"
                  className="custom-input"
                  allowClear
                  bordered={false}
                  placeholder={"---"}
                  type="number"
                  value={selectedFields.power}
                  onChange={(e) =>
                    setSelectedFields((prev) => ({
                      ...prev,
                      power: e.target.value,
                    }))
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} xl={6}>
              <Card
                title={"Energy"}
                bordered={false}
                bodyStyle={{
                  backgroundColor: "black",
                  padding: "8px 0 8px 30px",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                headStyle={{
                  backgroundColor: "#242424",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                style={{
                  borderRadius: "12px",
                }}
                hoverable
              >
                <Input
                  name="energy"
                  className="custom-input"
                  allowClear
                  bordered={false}
                  placeholder={"---"}
                  type="number"
                  value={selectedFields.energy}
                  onChange={(e) =>
                    setSelectedFields((prev) => ({
                      ...prev,
                      energy: e.target.value,
                    }))
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} xl={6}>
              <Card
                title={"Luck"}
                bordered={false}
                bodyStyle={{
                  backgroundColor: "black",
                  padding: "8px 0 8px 30px",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                headStyle={{
                  backgroundColor: "#242424",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                style={{
                  borderRadius: "12px",
                }}
                hoverable
              >
                <Input
                  name="luck"
                  className="custom-input"
                  allowClear
                  bordered={false}
                  placeholder={"---"}
                  type="number"
                  value={selectedFields.luck}
                  onChange={(e) =>
                    setSelectedFields((prev) => ({
                      ...prev,
                      luck: e.target.value,
                    }))
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} xl={6}>
              <Card
                title={"Speed"}
                bordered={false}
                bodyStyle={{
                  backgroundColor: "black",
                  padding: "8px 0 8px 30px",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                headStyle={{
                  backgroundColor: "#242424",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                style={{
                  borderRadius: "12px",
                }}
                hoverable
              >
                <Input
                  name="speed"
                  className="custom-input"
                  allowClear
                  bordered={false}
                  placeholder={"---"}
                  type="number"
                  value={selectedFields.speed}
                  onChange={(e) =>
                    setSelectedFields((prev) => ({
                      ...prev,
                      speed: e.target.value,
                    }))
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} xl={6}>
              <Card
                title={"Wizzardy"}
                bordered={false}
                bodyStyle={{
                  backgroundColor: "black",
                  padding: "8px 0 8px 30px",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                headStyle={{
                  backgroundColor: "#242424",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
                style={{
                  borderRadius: "12px",
                }}
                hoverable
              >
                <Input
                  name="wizzardy"
                  className="custom-input"
                  allowClear
                  bordered={false}
                  placeholder={"---"}
                  type="number"
                  value={selectedFields.wizzardy}
                  onChange={(e) =>
                    setSelectedFields((prev) => ({
                      ...prev,
                      wizzardy: e.target.value,
                    }))
                  }
                />
              </Card>
            </Col>
          </Row>
        </>
      )}

      {propNftType !== "Booster" && (
        <>
          <>
            <TitleField>Enter athlete's birthday</TitleField>
            <DatePicker
              className="select-field date"
              placeholder="Enter your birthday"
              name="athleteBirthday"
              format="DD/MM/YYYY"
              style={{ color: "#fff" }}
              required
              onChange={(value) =>
                setSelectedFields({ ...selectedFields, athleteBirthday: value })
              }
            />
          </>
          <>
            <TitleField>Select athlete's country</TitleField>
            <Select
              className="select-field"
              name="athleteCountry"
              required
              onChange={(value) =>
                setSelectedFields({ ...selectedFields, athleteCountry: value })
              }
            >
              {countries.map(({ value }) => (
                <Select.Option key={value} value={value}>
                  {value}
                </Select.Option>
              ))}
            </Select>
          </>
          <>
            <TitleField>Type athlete's region</TitleField>
            <Input
              className="select-field"
              required
              type="text"
              placeholder="Select your region"
              name="athleteRegion"
              onChange={(e) =>
                setSelectedFields({
                  ...selectedFields,
                  athleteRegion: e.target.value,
                })
              }
            />
          </>
          <>
            <TitleField>Enter team</TitleField>
            <Input
              className="select-field"
              type="text"
              placeholder="Enter team"
              name="athleteTeam"
              required
              onChange={(e) =>
                setSelectedFields({
                  ...selectedFields,
                  athleteTeam: e.target.value,
                })
              }
            />
          </>
        </>
      )}

      {selectedFields.athleteTeam && (
        <>
          <TitleField>
            {propNftType === "Player" && "Player biography"}
            {propNftType === "Coach" && "Coach biography"}
            {propNftType === "Additional information" &&
              "Additional information"}
          </TitleField>
          <TextArea
            name="biography"
            placeholder="Text..."
            required
            onChange={(e) =>
              setSelectedFields({
                ...selectedFields,
                biography: e.target.value,
              })
            }
            cols={10}
            rows={8}
            style={{
              width: "70%",
              height: "300px",
              backgroundColor: "#242424",
              borderRadius: "0.8rem",
              color: "white",
              paddingTop: "20px",
              paddingBottom: "100px",
            }}
          />
        </>
      )}
      <SubmitBtn type="submit" placeholder="PUBLISH" />
    </FormStyling>
  )
}
