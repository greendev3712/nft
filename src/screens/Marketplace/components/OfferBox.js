import Countdown from "react-countdown"
import soccerBg from "../../../images/marketplace/soccerBg.svg"
import netImg from "../../../images/marketplace/rectangles.png"
import {
  NavBtnLink,
  NavBtn,
  BgImage,
  OfferBgImage,
  OfferBoxContainer,
  OfferImage,
  OfferImageContainer,
  OfferTimerBox,
  OfferImage2,
  OfferImage3,
  OfferImage4,
  OfferImage5,
  OfferTimeTextHeading,
  OfferTimerDiscountBox,
  OfferPrice,
  BlankImag,
  BlankText,
  OfferTimerInnerBox,
  ResultOfferBoxContainer,
} from "../styles/OfferBoxStyling"
import { CssDiv } from "components/CssStyledComponent/CssStyledComponent"
import { Button, Divider } from "antd"
import { abc } from "utils/helpers/ylnft721"

export const OfferBox = ({ result }) => {
  return (
    <>
      {result.length > 0 ? (
        result.map((item, index) => {
          const d = new Date(item.endAt)
          return (
            <ResultOfferBoxContainer key={index}>
              <OfferImageContainer>
                <BgImage src={soccerBg} alt="bg image" />
                <OfferImage src={item.images[0]} alt="offer card" />
                <OfferImage2 src={item.images[1]} alt="offer card" />
                <OfferImage3 src={item.images[2]} alt="offer card" />
                <OfferImage4 src={item.images[3]} alt="offer card" />
                <OfferImage5 src={item.images[4]} alt="offer card" />
              </OfferImageContainer>

              <OfferTimerBox>
                <OfferTimeTextHeading>
                  {item.name}
                </OfferTimeTextHeading>
               <CssDiv
                  backgroundColor="#F3F4F6"
                  padding="10px"
                  borderRadius="8px"
                  mt="20px"
                  mb="20px"
                >
                  <OfferPrice right="true">-{item.discount}%</OfferPrice>
                  <OfferPrice center="true">
                    $
                    {item.fullPrice -
                      Math.floor((item.fullPrice * item.discount) / 100)}
                  </OfferPrice>
                  <OfferPrice left="true">{item.fullPrice}</OfferPrice>
                  <hr style={{ width: "90%", margin: "10px auto 0px auto" }} />
                  <OfferTimerInnerBox>
                    <Countdown date={d.getTime()} />
                    <p>until the end of the promotion</p>
                  </OfferTimerInnerBox>
                </CssDiv>
                <Button type="primary" block>
                  BUY
                </Button>
              </OfferTimerBox>
            </ResultOfferBoxContainer>
          )
        })
      ) : (
        <OfferBoxContainer>
          <BlankImag src={"/empty_nft.png"} alt="bg image" />
          <BlankText>COMMING SOON NEW OFFERS!</BlankText>
        </OfferBoxContainer>
      )}
    </>
  )
}
