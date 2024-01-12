import React from "react";

export function Paragraph() {
  return (
    <div
      style={{
        // width: "60%",
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        alignItems: "center",
        // gap: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      <p>
        I wish to speak a word for Nature, for absolute freedom and wildness, as
        contrasted with a freedom and culture merely civil, — to regard man as
        an inhabitant, or a part and parcel of Nature, rather than a member of
        society.
        <br />
        <br />

        -<cite> walking</cite> by Henry David Thoreau
      </p>
    </div>
  );
}
