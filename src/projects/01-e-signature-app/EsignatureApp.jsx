import React from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={"Name"} />
      <Title classes={"main-title mb-4"} text={"Date"} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut
        debitis voluptatem, minima voluptate eligendi optio commodi totam
        tenetur quod ab repellendus omnis, laborum ipsum consequatur est
        repellat quo enim.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input type="date" value={""} style={inputStyle} />
        <input type="text" value={""} style={inputStyle} />
      </footer>
    </div>
  );
}
