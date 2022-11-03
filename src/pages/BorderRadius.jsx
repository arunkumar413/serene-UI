import React from "react";

export function BorderRadius() {
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
      <button className="btn primary medium round"> round</button>
      <button className="btn primary outlined medium rounder"> rounder </button>
      <button className="btn primary medium roundest"> roundest </button>

      <input className="input medium primary outlined round" value="round" />
      <input
        className="input medium primary outlined rounder"
        value="rounder"
      />
      <input
        className="input medium primary outlined roundest"
        value="roundest"
      />
    </div>
  );
}
