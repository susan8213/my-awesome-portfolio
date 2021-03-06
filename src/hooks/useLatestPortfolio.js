import { useStaticQuery, graphql } from "gatsby"
import { flattenProject } from "../utils/dataNormalizer"

export const useLatestPortfolio = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query LatestPorfolio {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "portfolio" } } }
          limit: 3
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                github
                demo
                thumbnail {
                  childImageSharp {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return flattenProject(allMdx.edges.map(({ node }) => node))
}
