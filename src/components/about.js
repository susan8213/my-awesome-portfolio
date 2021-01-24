import React from "react"

const About = () => {
  return (
    <section>
      <h1>About Me</h1>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          alignItems: "stretch",
        }}
      >
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div style={{ alignSelf: "center", justifySelf: "center" }}>
          <img
            src="https://stickershop.line-scdn.net/stickershop/v1/product/11538395/LINEStorePC/main.png;compress=true"
            style={{ maxHeight: "480px" }}
          />
        </div>
      </article>
    </section>
  )
}

export default About
