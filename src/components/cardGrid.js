import React from "react"
import Card from "./card"
import "./cardGrid.css"

const CardGrid = props => {
  const { gridColumnNumber = 1, cardComponent = Card, cards } = props
  const Item = cardComponent

  return (
    <div className={`gallery grid-${gridColumnNumber}`}>
      {cards.map(article => {
        return <Item key={article.slug} content={article} />
      })}
    </div>
  )
}

export default CardGrid
