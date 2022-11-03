import React from "react";

export function Range() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      <label htmlFor="rangePrimary"> range primary </label>
      <input
        id="rangePrimary"
        className="range primary"
        min={0}
        max={10}
        type="range"
      />
      <label htmlFor="rangePrimary"> range secondary </label>
      <input
        id="rangeSecondary"
        className="range secondary"
        min={0}
        max={10}
        type="range"
      />
    </div>
  );
}
