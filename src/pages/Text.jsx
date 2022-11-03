import React from "react";

export function Text() {
  return (
    <div
      className="headings"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      <h1> Heading 1 </h1>
      <h2> Heading 2 </h2>
      <h3> Heading 3 </h3>
      <h4> heading 4 </h4> <h5> Heading 5 </h5>
      <h6> Heading 6 </h6>
      <p> Paragraph </p>
    </div>
  );
}
