import React from "react";

export function Colors() {
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
      {/* <label htmlFor="rangePrimary"> range primary </label>
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
        /> */}
      <h3 className="text color primary"> text color primary</h3>
      <h3 className="text color secondary"> text color secondary </h3>
      <h3 className="text color default"> text color default </h3>
      <h3 className="text color error"> text color error </h3>
      <h3 className="text color warning"> text color warning </h3>
      <h3 className="text color success"> text color success </h3>
    </div>
  );
}
