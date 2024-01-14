import React, { Fragment } from "react";

export function CheckBoxes() {
  const checkboxColors = [
    "ser-checkbox-primary-small",
    "ser-checkbox-primary-medium",
    "ser-checkbox-primary-large",
    "ser-checkbox-secondary-small",
    "ser-checkbox-secondary-medium",
    "ser-checkbox-secondary-large"
  ];

  const checkboxElements = checkboxColors.map(function (item, index) {
    return (
      <div key={index.toString()}>
        <label htmlFor={item}>{item}</label>{" "}
        <input checked={true} className={item} id={item} type="checkbox" />
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
      {checkboxElements}
    </div>
  );
}
