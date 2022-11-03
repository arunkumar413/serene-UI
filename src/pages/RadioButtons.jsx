import React from "react";

export function RadioButtons() {
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
      <label htmlFor="primaryRadio"> radio primary</label>
      <input
        checked={true}
        id="primaryRadio"
        type="radio"
        className="radio primary"
      />
      <label htmlFor="secondaryRadio"> radio secondary</label>

      <input
        checked={true}
        id="secondaryRadio"
        type="radio"
        className="radio secondary"
      />
    </div>
  );
}
