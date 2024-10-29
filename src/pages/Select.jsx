import React from "react";

export function Select() {
  const rangeClasses = [
    "ser-select-primary-small",
    "ser-select-primary-medium",
    "ser-select-primary-large",
    "ser-select-secondary-small",
    "ser-select-secondary-medium",
    "ser-select-secondary-large"
  ];

  const rangeElements = rangeClasses.map(function (item, index) {
    return (
      <div key={index.toString()}>
        <select
          style={{ width: "100%" }}
          id={item}
          className={item}
        >
          <option>{item}</option>
          <option>James</option>
          <option>Jack</option>
        </select>
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

      <select className="ser-select">
        <option>ser-select</option>
      </select>

      <select className="ser-select-arrow">
        <option>ser-select-arrow</option>
      </select>

      <select className="ser-select-round">
        <option>ser-select-round</option>
      </select>
      
      {rangeElements}
    </div>
  );
}
