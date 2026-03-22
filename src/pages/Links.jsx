import React from "react";

export function Links() {
  const linkClasses = [
    "ser-link-primary",
    "ser-link-btn-primary-small",
    "ser-link-btn-primary-medium",
    "ser-link-btn-primary-large",
    "ser-link-secondary",
    "ser-link-btn-secondary-small",
    "ser-link-btn-secondary-medium",
    "ser-link-btn-secondary-large",
  ];

  const linkElements = linkClasses.map(function (item) {
    return (
      <a href="/test" className={item}>
        {item}
      </a>
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      {linkElements}
    </div>
  );
}
