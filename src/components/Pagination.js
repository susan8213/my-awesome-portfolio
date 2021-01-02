import React, { useState, useEffect } from "react"
import "./Pagination.css"

const Pagination = props => {
  const { currentPage, totalPages, setCurrentPage } = props
  const [pages, setPages] = useState([1])

  useEffect(() => {
    let startPage, endPage
    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1
        endPage = 5
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4
        endPage = totalPages
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }

    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    )
    setPages(pages)
  }, [currentPage, totalPages])

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const isactive = target => {
    if (target === currentPage) {
      return true
    }
    return false
  }

  return (
    <div className={"actions pagination"}>
      <ul>
        <li className="button" onClick={prev} disabled={currentPage === 1}>
          {"Prev"}
        </li>
        {pages.map(no => {
          return (
            <li
              key={no}
              className={`button ${isactive(no) ? "primary" : ""}`}
              onClick={() => setCurrentPage(no)}
            >
              {no}
            </li>
          )
        })}
        <li
          className="button"
          onClick={next}
          disabled={currentPage === totalPages}
        >
          {"Next"}
        </li>
      </ul>
    </div>
  )
}

export default Pagination
