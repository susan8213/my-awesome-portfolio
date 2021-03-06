import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { flattenProject } from "../utils/dataNormalizer"

export const useSearchPortfolio = searchQuery => {
  const { localSearchPortfolio, allMdx } = useStaticQuery(
    graphql`
      query SearchPortfolio {
        localSearchPortfolio {
          store
          index
        }
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "portfolio" } } }
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

  // const searchOptions = {limit: 2, page: true}; // TODO: waiting for react-use-flexsearch "rawResult.map is not a function" bug fixed
  const searchResults = useFlexSearch(
    searchQuery,
    localSearchPortfolio.index,
    localSearchPortfolio.store
  )
  const posts = searchQuery
    ? searchResults
    : flattenProject(allMdx.edges.map(({ node }) => node))
  return posts
}
