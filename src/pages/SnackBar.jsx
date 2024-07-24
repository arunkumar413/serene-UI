import React from "react";

export function SnackBar() {
  const snackBarClasses = [
    "ser-snackbar-success",
    "ser-snackbar-warning",
    "ser-snackbar-danger",
  ];

  const snackBarElements = snackBarClasses.map(function (item, index) {
    return <span key={index.toString()} className={item}> {item}</span>;
  });

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

      {snackBarElements}
    </div>
  );
}
