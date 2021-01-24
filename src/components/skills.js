import React from "react"

const Skills = () => {
  return (
    <section>
      <h1>Skills</h1>
      <article
        style={{
          display: "flex",
          flexWrap: "wrap",
          // gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "2em",
        }}
      >
        <button>Web Development</button>
        <button>Machine Learning</button>
        <button>Python</button>
        <button>Django</button>
        <button>JavaScript</button>
        <button>React.js</button>
      </article>
    </section>
  )
}

export default Skills
