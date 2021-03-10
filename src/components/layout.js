import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useAuthorMetadata } from "../hooks/useAuthorMetadata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Layout = props => {
  const { children } = props
  const { title } = useSiteMetadata()
  const author = useAuthorMetadata()
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a className="nav-burger" onClick={() => setToggleNav(!toggleNav)}>
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/blog`}>Blog</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/portfolio`}>Portfolio</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href={`mailto:${author.email}`}
                title={"email"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
              <a href={author.github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={author.resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <Link
                to={`/rss.xml`}
                title="RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <div>
          &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
          &mdash; Built with{" "}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </div>
        <div>
          <a
            className="social-icon-links"
            href={`mailto:${author.email}`}
            title="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </a>
          <a
            className="social-icon-links"
            href={author.github}
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a
            className="social-icon-links"
            href={author.linkedin}
            target="_blank"
            rel="noreferrer"
            title="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
          </a>
          <a
            className="social-icon-links"
            href={author.resume}
            target="_blank"
            rel="noreferrer"
            title="resume"
          >
            <FontAwesomeIcon icon={faFileAlt} size="1x" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
