import React from "react"
import Carousel from "react-grid-carousel"
import { boosterCards } from "../dummy-data"
import { ArrowBtn } from "../styles/SliderStyling"
import BoosterCard from "./BoosterCard"

const BoosterSlider = () => {
  return (
    <Carousel
      rows={1}
      cols={8}
      gap={20}
      showDots={false}
      arrowLeft={<ArrowBtn type="left" />}
      arrowRight={<ArrowBtn type="right" />}
    >
      {boosterCards.map((card) => (
        <Carousel.Item key={card.id}>
          <BoosterCard
            imageSrc={card.imgSrc}
            attribute={card.attribute}
            bgColor={card.bgColor}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default BoosterSlider
