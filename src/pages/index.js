import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import CardCarousel from "../components/cardCarousel"
import { useLatestBlogPosts } from "../hooks/useLatestBlogPosts"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = () => {
  const { description } = useSiteMetadata()
  const posts = useLatestBlogPosts()
  let postCounter = 0

  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {description && (
        <header className="page-head">
          <h2 className="page-head-title">{description}</h2>
        </header>
      )}
      <CardCarousel cards={posts} />
      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
    </Layout>
  )
}

export default BlogIndex
