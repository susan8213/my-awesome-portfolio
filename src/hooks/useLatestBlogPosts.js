import { useStaticQuery, graphql } from "gatsby"
import { flattenPost } from "../utils/dataNormalizer"

export const useLatestBlogPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query LatestBlogPosts {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "blog" } } }
          limit: 5
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              timeToRead
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
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
  return flattenPost(allMarkdownRemark.edges.map(({ node }) => node))
}
