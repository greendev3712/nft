import React from "react"
import net from "../../../images/marketplace/booster-cards/net.svg"
import net_white from "../../../images/marketplace/booster-cards/net_white.svg"

import {
  AttributeBox,
  AttributeImage,
  AttributeText,
  CardContainer,
  CardInnerContainer,
  NetImage,
} from "../styles/BoosterCardStyling"

const BoosterCard = ({ attribute, imageSrc, bgColor }) => {
  return (
    <CardContainer>
      <CardInnerContainer bgColor={bgColor}>
        {bgColor === "#271D9A" || bgColor === "#242424" ? (
          <NetImage src={net_white} alt="net" />
        ) : (
          <NetImage src={net} alt="net" />
        )}
        <AttributeImage src={imageSrc} />
      </CardInnerContainer>
      <AttributeBox bgColor={bgColor}>
        <AttributeText>{attribute}</AttributeText>
      </AttributeBox>
    </CardContainer>
  )
}

export default BoosterCard
