import React from "react";
export function Tags() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      {" "}
      <button className="ser-tag-primary-filled "> ser-tag-primary-filled</button>
      <button className="ser-tag-secondary-filled"> tag secondary </button>
      <button className="ser-tag-primary-outlined"> tag primary outlined </button>
      <button className="ser-tag-secondary-outlined">
        {" "}
        tag secondary outlined{" "}
      </button>
    </div>
  );
}
