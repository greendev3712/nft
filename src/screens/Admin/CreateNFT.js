import { Button, Space } from "antd"
import { DappContext } from "context"
import { useCallback, useContext, useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { Link } from "react-router-dom"
import { FormNFTCard } from "./components/FormNFTCard"

import {
  LeftSide,
  MainContainer,
  MainHeading,
  RightSide,
  NftTypeButtonsContainer,
  NftTypeButton,
} from "./styles/CreateNFTStyles"

const CreateNFT = () => {
  const { user } = useMoralis()

  const { flagHeightAuto, setFlagHeightAuto } = useContext(DappContext)

  const [nftType, setNftType] = useState("Booster")

  useEffect(() => {
    setFlagHeightAuto(true)
  }, [setFlagHeightAuto])

  const selectNftType = useCallback((event, nft_type) => {
    setNftType(nft_type)
  }, [])

  return (
    <MainContainer>
      <LeftSide>
        <Link to={user?.attributes.isSuperAdmin ? "/admin/super" : "/admin"}>
          &#8592; Back
        </Link>
      </LeftSide>
      <RightSide>
        <MainHeading>Create NFT</MainHeading>
        <hr style={{ marginTop: "1rem", marginBottom: "2rem" }} />
        <NftTypeButtonsContainer>
          <NftTypeButton onClick={(event) => selectNftType(event, "Booster")}>
            Booster
          </NftTypeButton>
          <NftTypeButton onClick={(event) => selectNftType(event, "Player")}>
            Player
          </NftTypeButton>
          <NftTypeButton onClick={(event) => selectNftType(event, "Coach")}>
            Coach
          </NftTypeButton>
        </NftTypeButtonsContainer>
        <FormNFTCard propNftType={nftType} />
      </RightSide>
    </MainContainer>
  )
}

export default CreateNFT
