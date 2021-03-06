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
              href={`mailto:${author.email}?subject=Feedback`}
              title="email"
              style={{ color: "black", paddingRight: "1em" }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <a
              href={author.github}
              target="_blank"
              rel="noreferrer"
              title="github"
              style={{ color: "black", paddingRight: "1em" }}
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noreferrer"
              title="linkedin"
              style={{ color: "black", paddingRight: "1em" }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
            </a>
            <a
              href={author.resume}
              target="_blank"
              rel="noreferrer"
              title="resume"
              style={{ color: "black" }}
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
