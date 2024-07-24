import React from "react";

export function Colors() {
  const textColors = [
    "ser-text-color-primary",
    "ser-text-color-secondary",
    "ser-text-color-success",
    "ser-text-color-warning",
    "ser-text-color-danger",
  ];

  const textElements = textColors.map(function (item, index) {
    return (
      <div key={index.toString()}>
        <h3 className={item}> {item}</h3>
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

        {textElements}
  
    </div>
  );
}
