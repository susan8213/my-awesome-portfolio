import React from "react"
import Card from "./card"
import "./cardGrid.css"

const CardGrid = props => {
  const { cards } = props

  return (
    <div className="gallery">
      {cards.map(article => {
        return (
          <div key={article.slug} className="grid-card">
            <Card key={article.slug} content={article} />
          </div>
        )
      })}
    </div>
  )
}

export default CardGrid
