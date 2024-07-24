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
      <button className="ser-btn-primary-small ser-round">
        {" "}
        ser-btn-primary-small ser-round
      </button>
      <button className="ser-btn-primary-small ser-rounder">
        {" "}
        ser-btn-primary-small ser-rounder{" "}
      </button>
      <button className="ser-btn-primary-small ser-roundest">
        {" "}
        ser-btn-primary-small ser-roundest{" "}
      </button>

      <input
        className="ser-input-primary-small-outlined ser-round"
        value="ser-input-primary-small-outlined ser-round"
      />
      <input
        className="ser-input-primary-medium-outlined ser-rounder"
        value="ser-input-primary-medium-outlined ser-rounder"
      />
      <input
        className="ser-input-secondary-medium-outlined ser-roundest"
        value="ser-input-secondary-medium-outlined ser-roundest"
      />
    </div>
  );
}
