import React from "react"
import Card from "./card"
import "./cardGrid.css"

const CardGrid = props => {
  const { cards } = props

  return (
    <div className="gallery">
      {cards.map(({ node }) => {
        const article = {
          title: node.frontmatter.title || node.fields.slug,
          slug: node.fields.slug,
          description: node.frontmatter.description,
          date: node.frontmatter.date,
          cover: node.frontmatter.thumbnail?.childImageSharp?.fluid.src,
          tags: node.frontmatter.tags,
        }
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
