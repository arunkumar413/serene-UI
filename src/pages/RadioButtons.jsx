import React from "react";

export function RadioButtons() {
  const radioClasses = [
    "ser-radio-primary-small",
    "ser-radio-primary-medium",
    "ser-radio-primary-large",

    "ser-radio-secondary-small",
    "ser-radio-secondary-medium",
    "ser-radio-secondary-large",
  ];

  const radioElements = radioClasses.map(function (item, index) {
    return (
      <div key={index.toString()}>
        <label htmlFor={item}> {item}</label>
        <input
          checked={true}
          id={item}
          type="radio"
          className={item}
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
      {radioElements}
    </div>
  );
}
