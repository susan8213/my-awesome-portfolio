import { useStaticQuery, graphql } from "gatsby"
import { flattenPost } from "../utils/dataNormalizer"

export const useLatestBlogPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query LatestBlogPosts {
        allMdx(
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
  return flattenPost(allMdx.edges.map(({ node }) => node))
}
