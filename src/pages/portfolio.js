import React, { useState } from "react"
import CardGrid from "../components/cardGrid"
import SearchBar from "../components/searchBar"
import Pagination from "../components/Pagination"
import Layout from "../components/layout"
import { useSearchPortfolio } from "../hooks/useSearchPortfolio"
import PortfolioCard from "../components/portfolioCard"

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const [searchQuery, setSearchQuery] = useState()
  const posts = useSearchPortfolio(searchQuery)

  return (
    <Layout>
      <h1>Portfolio</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <CardGrid
        girdColumnNumber={1}
        cardComponent={PortfolioCard}
        cards={posts}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={7}
      />
    </Layout>
  )
}

export default Portfolio
