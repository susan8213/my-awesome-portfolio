export const flattenPost = nodes => {
  return nodes.map(node => ({
    slug: node.fields.slug,
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    description: node.frontmatter.description || node.excerpt,
    timeToRead: node.timeToRead,
    tags: node.frontmatter.tags,
    cover:
      node.frontmatter.thumbnail &&
      node.frontmatter.thumbnail.childImageSharp.id,
  }))
}

export const flattenProject = nodes => {
  return nodes.map(node => ({
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
  }))
}
