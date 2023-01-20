import { DappContext } from "context"
import React, { useContext, useEffect, useState } from "react"
import {
  LeftButton,
  OfficialOfferAuctionButtonsContainer,
  RightButton,
} from "../styles/ButtonsStyling"

const Buttons = () => {
  const { flag_offerAuction, setFlagOfferAuction } = useContext(DappContext)
  const [active, setActive] = useState("")
  useEffect(() => {
    if (flag_offerAuction == "offer") {
      setActive("left")
    } else {
      setActive("right")
    }
  }, [flag_offerAuction])
  return (
    <OfficialOfferAuctionButtonsContainer>
      <LeftButton
        active={active}
        type="button"
        onClick={(e) => {
          setActive("left")
          setFlagOfferAuction("offer")
        }}
      >
        official offer
      </LeftButton>
      <RightButton
        active={active}
        type="button"
        onClick={(e) => {
          setActive("right")
          setFlagOfferAuction("auction")
        }}
      >
        auction
      </RightButton>
    </OfficialOfferAuctionButtonsContainer>
  )
}

export default Buttons
