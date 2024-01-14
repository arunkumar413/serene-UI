import React from "react";

export function Range() {
  const rangeClasses = [
    "ser-range-primary-small",
    "ser-range-primary-medium",
    "ser-range-primary-large",
    "ser-range-secondary-small",
    "ser-range-secondary-medium",
    "ser-range-secondary-large",
  ];

  const rangeElements = rangeClasses.map(function (item, index) {
    return (
      <div key={index.toString()}>
        <label htmlFor={item}>{item}</label>
        <input
          style={{ width: "100%" }}
          id={item}
          className={item}
          min={0}
          max={10}
          type="range"
        />
      </div>
    );
  });

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
      {rangeElements}
    </div>
  );
}
