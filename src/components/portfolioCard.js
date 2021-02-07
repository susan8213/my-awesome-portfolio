import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
            <a
              href={content.githubLink}
              target="_blank"
              style={{ color: "black" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
          {content?.demoLink && (
            <a
              href={content.demoLink}
              target="_blank"
              style={{ color: "black" }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
            </a>
          )}
        </div>
      </article>
    </div>
  )
}

export default PortfolioCard
