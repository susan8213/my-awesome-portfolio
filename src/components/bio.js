/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <section>
            <article
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{ flexShrink: "0" }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <div style={{ marginLeft: "2em" }}>
                <p style={{ display: "inline-block" }}>
                  <Link to="/about" style={{ paddingRight: `1em` }}>
                    {author}
                  </Link>
                  <a
                    href="https://github.com"
                    target="_blank"
                    title="github"
                    style={{ color: "black", paddingRight: ".5em" }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    title="linkedin"
                    style={{ color: "black", paddingRight: ".5em" }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    title="resume"
                    style={{ color: "black" }}
                  >
                    <FontAwesomeIcon icon={faFileAlt} size="1x" />
                  </a>
                </p>
                <p>Here should be a brief intro of the author</p>
              </div>
            </article>
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
