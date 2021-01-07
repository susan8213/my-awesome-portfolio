import React from "react"
import Carousel from "react-multi-carousel"
import Card from "./card"
import "react-multi-carousel/lib/styles.css"
import "./cardCarousel.css"

const CardCarousel = props => {
  const { cards } = props

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <Carousel
      className="post-feed"
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={3000}
      draggable
      focusOnSelect={false}
      // infinite
      itemClass="card slide"
      // minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      removeArrowOnDeviceType={["mobile"]}
      responsive={responsive}
    >
      {cards.map(article => {
        return <Card key={article.slug} content={article} />
      })}
    </Carousel>
  )
}

export default CardCarousel
