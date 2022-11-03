import React from "react";

export function CheckBoxes() {
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
      <label htmlFor="pcheckbox">checkbox primary </label>{" "}
      <input
        checked={true}
        className="checkbox primary"
        id="pcheckbox"
        type="checkbox"
      />
      <label htmlFor="scheckbox">checkbox secondary </label>{" "}
      <input
        checked={true}
        className="checkbox secondary"
        id="scheckbox"
        type="checkbox"
      />
    </div>
  );
}
