import React from "react";

export function Inputs() {
  const inputClasses = [
    "ser-input-primary-small-filled",
    "ser-input-primary-medium-filled",
    "ser-input-primary-large-filled",

    "ser-input-secondary-small-filled",
    "ser-input-secondary-medium-filled",
    "ser-input-secondary-large-filled",

    "ser-input-primary-small-outlined",
    "ser-input-primary-medium-outlined",
    "ser-input-primary-large-outlined",

    "ser-input-secondary-small-outlined",
    "ser-input-secondary-medium-outlined",
    "ser-input-secondary-large-outlined",
  ];

  const inputElements = inputClasses.map(function (item, index) {
    return (
      <>
        <input value={item} className={item} type="text" />
      </>
    );
  });

  return (
    <div
      style={{
        // width: "60%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      {inputElements}
    </div>
  );
}
