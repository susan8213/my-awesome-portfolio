import { useStaticQuery, graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

export const useBlogPostsByTags = tag => {
  const { localSearchTags, allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPostsByTag {
        localSearchTags {
          store
          index
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "blog" } } }
        ) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  )

  const tags = allMarkdownRemark.group
  // const searchOptions = {limit: 2, page: true}; // TODO: waiting for react-use-flexsearch "rawResult.map is not a function" bug fixed
  const posts = useFlexSearch(tag, localSearchTags.index, localSearchTags.store)
  return { tags, posts }
}
