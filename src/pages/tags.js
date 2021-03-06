import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import CardGrid from "../components/cardGrid"
import TagCloud from "../components/tagCloud"
import { useBlogPostsByTags } from "../hooks/useBlogPostsByTag"

const Tags = ({ location }) => {
  const query = new URLSearchParams(location.search).get("tag")
  const [selected, setSelected] = useState()
  const { tags, posts } = useBlogPostsByTags(selected)

  useEffect(() => {
    setSelected(query || "")
  }, [query])

  return (
    <Layout>
      <h1>Tags</h1>
      <TagCloud tags={tags} selected={selected} setSelected={setSelected} />
      <CardGrid gridColumnNumber={3} cardComponent={Card} cards={posts} />
    </Layout>
  )
}

export default Tags
