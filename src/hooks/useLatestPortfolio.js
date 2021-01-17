import { useStaticQuery, graphql } from "gatsby"
import { flattenProject } from "../utils/dataNormalizer"

export const useLatestPortfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query LatestPorfolio {
        allMarkdownRemark(
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
                    fluid(maxWidth: 1360, maxHeight: 1020) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return flattenProject(allMarkdownRemark.edges.map(({ node }) => node))
}
