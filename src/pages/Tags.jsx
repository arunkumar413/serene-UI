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
      <button className="tag primary"> tag primary</button>
      <button className="tag secondary"> tag secondary </button>
      <button className="tag primary outlined"> tag primary outlined </button>
      <button className="tag secondary outlined">
        {" "}
        tag secondary outlined{" "}
      </button>
    </div>
  );
}
