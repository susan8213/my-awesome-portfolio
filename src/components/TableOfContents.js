import React, { useEffect, useState } from "react"

const renderItems = items => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.url}>
          <a
            href={item.url}
            // style={{
            // color: activeId === item.url.slice(1) ? "tomato" : "green",
            // }}
          >
            {item.title}
          </a>
          {item.items && renderItems(item.items)}
        </li>
      ))}
    </ul>
  )
}

const getIds = items => {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

const useActiveId = itemIds => {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])

  return activeId
}

const TableOfContents = ({ items }) => {
  // const idList = getIds(items)
  // const activeId = useActiveId(idList)

  return (
    <aside className="post-content-toc">
      <header>Table of Contents</header>
      <div className="post-content-toc-content">{renderItems(items)}</div>
    </aside>
  )
}

export default TableOfContents
