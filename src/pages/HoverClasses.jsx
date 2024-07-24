import React from "react";
export function HoverClasses(){

    return(
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
        <button className="ser-btn-primary-small-outlined ser-primary-hover">
          {" "}
          ser-btn-primary-small-outlined ser-primary-hover
        </button>{" "}
        <button className="ser-btn-secondary-small-outlined ser-secondary-hover">
          {" "}
          ser-btn-secondary-small-outlined ser-secondary-hover
        </button>{" "}
      </div>
    )
}