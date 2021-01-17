import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./cardCarousel.css"

const CardCarousel = props => {
  const { cardComponent, cardClass, cards } = props
  const Item = cardComponent

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
      arrows={false}
      showDots
      autoPlay
      autoPlaySpeed={5000}
      draggable
      focusOnSelect={false}
      infinite
      itemClass={`${cardClass} slide`}
      // minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      // renderDotsOutside={true}
      // removeArrowOnDeviceType={["mobile"]}
      responsive={responsive}
    >
      {cards.map(article => {
        return <Item key={article.slug} content={article} />
      })}
    </Carousel>
  )
}

export default CardCarousel
