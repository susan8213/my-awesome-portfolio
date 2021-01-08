import React, { useState } from "react"
import CardGrid from "../components/cardGrid"
import SearchBar from "../components/searchBar"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import { useSearchBlogPosts } from "../hooks/useSearchBlogPosts"

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const [searchQuery, setSearchQuery] = useState()
  const posts = useSearchBlogPosts(searchQuery)

  return (
    <Layout>
      <h1>Blog</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <CardGrid cards={posts} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={7}
      />
    </Layout>
  )
}

export default Blog
