import React from "react"

const TagCloud = ({ tags, selected, setSelected }) => {
  const onSelect = event => {
    const tag = event.target.value
    setSelected(tag)
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: "5rem",
      }}
    >
      {tags.map((tag, index) => {
        return (
          <button
            key={index}
            onClick={onSelect}
            value={tag.tag}
            className={`button small ${tag.tag === selected ? "primary" : ""}`}
            style={{ marginRight: "1rem", marginBottom: "1vmin" }}
          >{`${tag.tag} (${tag.totalCount})`}</button>
        )
      })}
    </div>
  )
}

export default TagCloud
