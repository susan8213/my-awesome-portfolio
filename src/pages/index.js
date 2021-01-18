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

      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            alignItems: "stretch",
          }}
        >
          <div style={{}}>
            <h1>About Me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div style={{ alignSelf: "center", justifySelf: "center" }}>
            <img
              src="https://stickershop.line-scdn.net/stickershop/v1/product/11538395/LINEStorePC/main.png;compress=true"
              style={{ maxHeight: "480px" }}
            />
          </div>
        </div>
      </section>

      <section>
        <h1>Skills</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: "2em",
            width: "80%",
          }}
        >
          <button>Web Development</button>
          <button>Machine Learning</button>
          <button>Python</button>
          <button>Django</button>
          <button>JavaScript</button>
          <button>React.js</button>
        </div>
      </section>

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

      <section>
        <h1>Contact Me</h1>
        <div style={{ marginLeft: "10%" }}>
          <div style={{ marginBottom: "2em" }}>
            <p>
              Feel free to contact me. Or subscribe me. Just to longer the
              sentence.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2em",
            }}
          >
            <div
              style={{
                width: "20vmin",
                height: "20vmin",
                minWidth: "100px",
                minHeight: "100px",
                borderRadius: "50%",
                backgroundImage:
                  "url(https://cdn.hk01.com/di/media/images/1186368/org/0f159a81ae0d8685ba8c8ee60f86d3b1.png/DavGjq-5uPw3kcm8DkRsn0eYnmLBU6Nb-iKp3_oiqd8?v=w1920)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div style={{ marginLeft: "2em" }}>
              <h5 style={{ marginTop: "0" }}>My name</h5>
              <h5 style={{ marginTop: "0" }}>My Email</h5>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <button style={{ marginRight: "2em" }}>Resume</button>
            <button style={{ marginRight: "2em" }}>LinkedIn</button>
            <button style={{ marginRight: "2em" }}>Github</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex
