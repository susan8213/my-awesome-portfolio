import React, { useState } from "react"
import { graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import CardGrid from "../components/cardGrid"
import SearchBar from "../components/searchBar"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import { flattenPost } from "../utils/dataNormalizer"

const Blog = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const [currentPage, setCurrentPage] = useState(1)

  const [searchQuery, setSearchQuery] = useState()
  // const searchOptions = {limit: 2, page: true}; // TODO: waiting for react-use-flexsearch "rawResult.map is not a function" bug fixed
  const searchResults = useFlexSearch(
    searchQuery,
    data.localSearchBlog.index,
    data.localSearchBlog.store
  )
  const posts = searchQuery
    ? searchResults
    : flattenPost(data.allMarkdownRemark.nodes)

  return (
    <Layout title={siteTitle}>
      <h1>Blog</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <CardGrid cards={posts} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={7}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      store
      index
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
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
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

export default Blog
