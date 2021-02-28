import { useStaticQuery, graphql } from "gatsby"

export const useAuthorMetadata = () => {
  const { avatar, site } = useStaticQuery(
    graphql`
      query Author {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 70, height: 70, fit: COVER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
            authorDescription
            social {
              email
              github
              linkedin
              resume
            }
          }
        }
      }
    `
  )
  return {
    avatar: avatar.childImageSharp.fixed,
    name: site.siteMetadata.author,
    description: site.siteMetadata.authorDescription,
    email: site.siteMetadata.social.email,
    github: site.siteMetadata.social.github,
    linkedin: site.siteMetadata.social.linkedin,
    resume: site.siteMetadata.social.resume,
  }
}
