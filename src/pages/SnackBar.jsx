import React from "react";

export function SnackBar() {
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
      <div>
        <p> snack-bar error</p>
        <span className="snack-bar error"> This is an error message</span>
      </div>
      <div>
        <p> snack-bar warning</p>
        <span className="snack-bar warning"> This is a warning message</span>
      </div>
      <div>
        <p> snack-bar success</p>
        <span className="snack-bar success"> This is a success message</span>
      </div>
    </div>
  );
}
