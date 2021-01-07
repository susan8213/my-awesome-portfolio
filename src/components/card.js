import React from "react"
import { Link } from "gatsby"
import "./card.css"

const CardHeader = props => {
  const { image } = props
  var style = {
    backgroundImage: "url(" + image + ")",
  }
  return (
    <div className="card-cover" id={image} style={style}>
      <img src={image} style={{ opacity: 0 }} />
    </div>
  )
}

const CardBodyTags = ({ tags }) => {
  return (
    <ul className="card__body-tags">
      {tags &&
        tags.map((tag, index) => {
          if (index < 3) {
            return (
              <li key={tag} className="card__body-tag">
                <Link to={`/tags?tag=${tag}`}>{tag}</Link>
              </li>
            )
          }
        })}
    </ul>
  )
}

const CardBody = props => {
  const { content } = props

  return (
    <div className="card__body">
      <p className="card__body-date">{`${content.date}・${content.timeToRead ||
        1} min read`}</p>
      <h2 className="card__body-header">{content.title}</h2>
      <CardBodyTags tags={content.tags} />
      <p className="body-content">{content.description}</p>
      <Link to={content.slug} className="card__body-link">
        Read more
      </Link>
    </div>
  )
}

const Card = props => {
  const { content } = props
  return (
    <article className="card">
      <CardHeader image={content.cover} />
      <CardBody content={content} />
    </article>
  )
}

export default Card
