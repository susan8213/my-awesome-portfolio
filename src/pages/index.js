import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import Card from "../components/card"
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
      <section>
        <h1>Blog Posts</h1>
        <CardCarousel cardComponent={Card} cardClass="card" cards={posts} />
        <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
          <Link to="/blog" className="button large col-4 col-12-xsmall">Find more</Link>
        </div>
      </section>
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
