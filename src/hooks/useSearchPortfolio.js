import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { flattenPost, flattenProject } from "../utils/dataNormalizer"

export const useSearchPortfolio = searchQuery => {
  const { localSearchPortfolio, allMarkdownRemark } = useStaticQuery(
    graphql`
      query SearchPortfolio {
        localSearchPortfolio {
          store
          index
        }
        allMarkdownRemark(
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
    localSearchPortfolio.index,
    localSearchPortfolio.store
  )
  const posts = searchQuery
    ? searchResults
    : flattenProject(allMarkdownRemark.edges.map(({ node }) => node))
  return posts
}
