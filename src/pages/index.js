import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import Bio from "../components/bio"
import Card from "../components/card"
import CardCarousel from "../components/cardCarousel"
import PortfolioCard from "../components/portfolioCard"
import CardList from "../components/cardList"
import Contact from "../components/contact"
import Skills from "../components/skills"
import About from "../components/about"

import { useLatestBlogPosts } from "../hooks/useLatestBlogPosts"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useLatestPortfolio } from "../hooks/useLatestPortfolio"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = () => {
  const { description } = useSiteMetadata()
  const posts = useLatestBlogPosts()
  const projects = useLatestPortfolio()
  let postCounter = 0

  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {description && (
        <header className="page-head">
          <h2 className="page-head-title">{description}</h2>
        </header>
      )}

      <Bio />
      <section>
        <h1>Blog Posts</h1>
        <CardCarousel cardComponent={Card} cardClass="card" cards={posts} />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Link to="/blog" className="button large col-4 col-12-xsmall">
            Find more
          </Link>
        </div>
      </section>

      <About />

      <Skills />

      <section>
        <h1>Portfolio</h1>
        <CardList cardComponent={PortfolioCard} cards={projects} />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Link to="/portfolio" className="button large col-4 col-12-xsmall">
            Find more
          </Link>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}

export default BlogIndex
