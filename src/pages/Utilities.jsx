import React from "react";

export function Utilities() {
  let textClasses = [
    "ser-text-tiny",
    "ser-text-small",
    "ser-text-medium",
    "ser-text-large",
    "ser-text-xlarge",
  ];

  const textElements = textClasses.map(function (item, index) {
    return (
      <p key={item} className={item}>
        {item}
      </p>
    );
  });

  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "1rem" }}
    >
      {textElements}
    </div>
  );
}
