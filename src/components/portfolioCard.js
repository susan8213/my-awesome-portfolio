import React from "react"
import Icon from "./icons/icon"
import "./portfolioCard.css"

const PortfolioCard = ({ content }) => {
  return (
    <div className="flatten-card">
      <div
        className="flatten-card__cover"
        style={{ backgroundImage: "url(" + content.cover + ")" }}
      ></div>
      <article className="flatten-card__content">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <p className="flatten-card__content__tags">
          {content.tags &&
            content.tags.map(tag => (
              <span className="flatten-card__content__tag">{tag}</span>
            ))}
        </p>
        <div className="flatten-card__content__link">
          {content?.githubLink && (
            <a href={content.githubLink} target="_blank">
              <Icon name="github" />
            </a>
          )}
          {content?.demoLink && (
            <a href={content.demoLink} target="_blank">
              <Icon name="external" />
            </a>
          )}
        </div>
      </article>
    </div>
  )
}

export default PortfolioCard
