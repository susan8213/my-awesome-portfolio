import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { flattenPost } from "../utils/dataNormalizer"

export const useSearchBlogPosts = searchQuery => {
  const { localSearchBlog, allMdx } = useStaticQuery(
    graphql`
      query SearchBlogPost {
        localSearchBlog {
          store
          index
        }
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "blog" } } }
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

  // const searchOptions = {limit: 2, page: true}; // TODO: waiting for react-use-flexsearch "rawResult.map is not a function" bug fixed
  const searchResults = useFlexSearch(
    searchQuery,
    localSearchBlog.index,
    localSearchBlog.store
  )
  const posts = searchQuery
    ? searchResults
    : flattenPost(allMdx.edges.map(({ node }) => node))
  return posts
}
