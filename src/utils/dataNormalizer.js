export const flattenPost = nodes => {
  return nodes.map(node => ({
    slug: node.fields.slug,
    date: node.frontmatter.date,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    tags: node.frontmatter.tags,
    cover:
      node.frontmatter.thumbnail &&
      node.frontmatter.thumbnail.childImageSharp.fluid.src,
  }))
}
