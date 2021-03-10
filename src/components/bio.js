/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { useAuthorMetadata } from "../hooks/useAuthorMetadata"

function Bio() {
  const author = useAuthorMetadata()
  return (
    <section>
      <article
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          fixed={author.avatar}
          alt={author.name}
          style={{ flexShrink: "0" }}
          className="avatar"
        />
        <div style={{ marginLeft: "2em" }}>
          <p style={{ display: "inline-block" }}>
            <Link to="/about" style={{ paddingRight: `1em` }}>
              {author.name}
            </Link>
            <a
              className="social-icon-links"
              href={`mailto:${author.email}`}
              title="email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <a
              className="social-icon-links"
              href={author.github}
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              className="social-icon-links"
              href={author.linkedin}
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
            </a>
            <a
              className="social-icon-links"
              href={author.resume}
              target="_blank"
              rel="noreferrer"
              title="resume"
            >
              <FontAwesomeIcon icon={faFileAlt} size="1x" />
            </a>
          </p>
          <p>{author.description}</p>
        </div>
      </article>
    </section>
  )
}

export default Bio
