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
        <button className="btn small primary outlined hover">
          {" "}
          btn small primary outlined hover{" "}
        </button>{" "}
        <button className="btn small secondary outlined hover">
          {" "}
          btn small secondary outlined hover{" "}
        </button>{" "}
      </div>
    )
}