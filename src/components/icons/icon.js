import React from "react"
import ExternalIcon from "./external"
import GithubIcon from "./github"

const Icon = ({ name }) => {
  switch (name.toLowerCase()) {
    case "github":
      return <GithubIcon />
    case "external":
      return <ExternalIcon />
    default:
      return null
  }
}

export default Icon
