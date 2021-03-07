import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus } from "gatsby-plugin-disqus"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Bio from "../components/bio"
import TableOfContents from "../components/TableOfContents"
import { useMediaQuery } from "react-responsive"
deckDeckGoHighlightElement()

const BlogPostTemplate = ({ location, data }) => {
  const post = data.mdx
  const slug = post.fields.slug
  const siteTitle = data.site.siteMetadata.title
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div>
        {isDesktop && post.tableOfContents.items && (
          <TableOfContents items={post.tableOfContents.items} />
        )}

        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p className="post-content-excerpt">
              {post.frontmatter.description}
            </p>
          )}

          <p style={{ textAlign: "center" }}>{`${
            post.frontmatter.date
          }・${post.timeToRead || 1} min read`}</p>

          {post.frontmatter.tags && (
            <div className="post-content-tags">
              {post.frontmatter.tags.map((tag, index) => {
                return (
                  <Link
                    key={index}
                    to={`/tags?tag=${tag}`}
                    className="post-content-tag"
                    style={{ textAlign: "center" }}
                  >
                    #{tag}
                  </Link>
                )
              })}
            </div>
          )}

          <Bio />

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div className="post-content-body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>

          <Disqus
            config={{
              /* Replace PAGE_URL with your post's canonical URL variable */
              url: slug,
              /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
              identifier: slug,
              /* Replace PAGE_TITLE with the title of the page */
              title: post.frontmatter.title,
            }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      tableOfContents(maxDepth: 3)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
