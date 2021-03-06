const urljoin = require("url-join")
const siteConfig = require("./siteConfig")

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    description: siteConfig.description,
    author: siteConfig.author,
    authorDescription: siteConfig.authorDescription,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    social: {
      email: siteConfig.email,
      github: siteConfig.github,
      linkedin: siteConfig.linkedin,
      resume: siteConfig.resume,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "one-dark",
              lineNumbers: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blog`,
        engine: `flexsearch`,
        engineOptions: `speed`,
        query: `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { fields: { collection: { eq: "blog" } } }
            ) {
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
                      id
                    }
                  }
                }
              }
            }
          }`,
        ref: `slug`,
        index: ["title", "description", "tags"],
        store: ["slug", "date", "title", "description", "tags", "cover"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            slug: node.fields.slug,
            date: node.frontmatter.date,
            title: node.frontmatter.title,
            description: node.frontmatter.description || node.excerpt,
            tags: node.frontmatter.tags,
            cover:
              node.frontmatter.thumbnail &&
              node.frontmatter.thumbnail.childImageSharp.id,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `tags`,
        engine: `flexsearch`,
        engineOptions: `speed`,
        query: `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { fields: { collection: { eq: "blog" } } }
            ) {
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
                      id
                    }
                  }
                }
              }
            }
          }`,
        ref: `slug`,
        index: ["tags"],
        store: ["slug", "date", "title", "description", "tags", "cover"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            slug: node.fields.slug,
            date: node.frontmatter.date,
            title: node.frontmatter.title,
            description: node.frontmatter.description || node.excerpt,
            tags: node.frontmatter.tags,
            cover:
              node.frontmatter.thumbnail &&
              node.frontmatter.thumbnail.childImageSharp.id,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `portfolio`,
        engine: `flexsearch`,
        engineOptions: `speed`,
        query: `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { fields: { collection: { eq: "portfolio" } } }
            ) {
              nodes {
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
                      id
                    }
                  }
                }
              }
            }
          }`,
        ref: `slug`,
        index: ["title", "description", "tags"],
        store: [
          "slug",
          "date",
          "title",
          "description",
          "tags",
          "githubLink",
          "demoLink",
          "cover",
        ],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            slug: node.fields.slug,
            date: node.frontmatter.date,
            title: node.frontmatter.title,
            description: node.frontmatter.description || node.excerpt,
            tags: node.frontmatter.tags,
            githubLink: node.frontmatter.github,
            demoLink: node.frontmatter.demo,
            cover:
              node.frontmatter.thumbnail &&
              node.frontmatter.thumbnail.childImageSharp.id,
          })),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: [
          "node_modules/react-multi-carousel/",
          "src/components/cardGrid.css",
        ], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html.replace(
                        /(?<=\"|\,|\s)\/static\//g,
                        `${site.siteMetadata.siteUrl}\/static\/`
                      ),
                    },
                  ],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { fields: { collection: { eq: "blog" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Joellyn's Blog RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "http://feeds.feedburner.com/JoellynsRssFeed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `susan8213-personal-blog`,
      },
    },
  ],
}
