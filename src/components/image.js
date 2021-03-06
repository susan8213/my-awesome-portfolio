import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              id
              fluid(maxWidth: 1360, maxHeight: 1020) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const fluid = data.allImageSharp.edges.find(
        element => element.node.id === src
      )?.node?.fluid
      return <>{fluid && <Img fluid={fluid} alt={fluid.src} />}</>
    }}
  />
)

export default Image
