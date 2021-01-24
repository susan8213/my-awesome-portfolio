import React from "react"

const Contact = () => {
  return (
    <section>
      <h1>Contact Me</h1>
      <article>
        <div style={{ marginBottom: "2em" }}>
          <p>
            Feel free to contact me. Or subscribe me. Just to longer the
            sentence.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2em",
          }}
        >
          <div
            style={{
              width: "20vmin",
              height: "20vmin",
              minWidth: "100px",
              minHeight: "100px",
              borderRadius: "50%",
              backgroundImage:
                "url(https://cdn.hk01.com/di/media/images/1186368/org/0f159a81ae0d8685ba8c8ee60f86d3b1.png/DavGjq-5uPw3kcm8DkRsn0eYnmLBU6Nb-iKp3_oiqd8?v=w1920)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div style={{ marginLeft: "2em" }}>
            <h5 style={{ marginTop: "0" }}>My name</h5>
            <h5 style={{ marginTop: "0" }}>My Email</h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gridGap: "2em",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <button>Resume</button>
          <button>LinkedIn</button>
          <button>Github</button>
        </div>
      </article>
    </section>
  )
}

export default Contact
