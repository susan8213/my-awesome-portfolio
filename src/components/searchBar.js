import React, { useState } from "react"
import "./searchBar.css"

const SearchBar = ({ setSearchQuery }) => {
  const [searchString, setSearchString] = useState("")
  const onChange = event => {
    setSearchString(event.target.value)
  }
  return (
    <div className="row search__bar">
      <div className="col-6">
        <input
          type="text"
          name="search"
          onChange={onChange}
          onKeyDown={e => {
            if (e.keyCode == 13) {
              setSearchQuery(searchString)
            }
          }}
        />
      </div>
      <div className="col-2">
        <button
          className="primary"
          onClick={() => setSearchQuery(searchString)}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
