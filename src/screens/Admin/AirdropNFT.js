import React from "react"
import { MainContainer } from "./styles/AirdropNFTStyles"

import madisen from "../../images/marketplace/offerCards/players/Madisen_Manning_common.webp"
import tokenImage from "../../images/green_logo.webp"
import { UserCard } from "./UserCard"
import { FirstInnerContainer } from "./styles/AdminScreenStyles"
import { airdropNftoptions } from "./utils/adminOptions"
import { AdminOptions } from "./AdminOptions"
import OptionsBox from "./OptionsBox"

const dummyData = {
  userImage: madisen,
  userName: "Madisen Manning",
  tokenValue: "0.055",
  tokenValueUSD: "$6 564,23",
}

export const AirdropNFT = ({
  userName = dummyData.userName,
  userImage = dummyData.userImage,
  tokenImg = tokenImage,
  tokenValue = dummyData.tokenValue,
  tokenValueUSD = dummyData.tokenValueUSD,
}) => {
  return (
    <MainContainer>
      <FirstInnerContainer>
        <UserCard
          userImage={userImage}
          userName={userName}
          tokenImg={tokenImg}
          tokenValue={tokenValue}
          tokenValueUSD={tokenValueUSD}
        />
        <AdminOptions options={airdropNftoptions} airdrop="true" />
      </FirstInnerContainer>
    </MainContainer>
  )
}
