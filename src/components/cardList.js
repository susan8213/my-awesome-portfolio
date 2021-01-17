import React from "react"
import "./cardList.css"

const CardList = ({ cardComponent, cards }) => {
  const Item = cardComponent

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Item key={index} content={card} />
      ))}
    </div>
  )
}

export default CardList
