import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { useFlexSearch } from "react-use-flexsearch"
import CardGrid from "../components/cardGrid"
import TagCloud from "../components/tagCloud"

const Tags = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMarkdownRemark.group

  const query = new URLSearchParams(location.search).get("tag")
  const [selected, setSelected] = useState()
  // const searchOptions = {limit: 2, page: true}; // TODO: waiting for react-use-flexsearch "rawResult.map is not a function" bug fixed
  const posts = useFlexSearch(
    selected,
    data.localSearchTags.index,
    data.localSearchTags.store
  )

  useEffect(() => {
    setSelected(query || "")
  }, [query])

  return (
    <Layout title={siteTitle}>
      <h1>Tags</h1>
      <TagCloud tags={tags} selected={selected} setSelected={setSelected} />
      <CardGrid cards={posts} />
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
    localSearchTags {
      store
      index
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

export default Tags
