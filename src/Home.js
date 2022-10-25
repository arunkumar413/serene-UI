import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "teal",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1> Serene UI</h1>

      <p
        className="paragraph"
        style={{
          textAlign: "center",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        }}
      >
        Welcome to Serene UI. A simple CSS library to compose HTML components
        faster. A library made keeping in mind the ease of learning and
        intuitiveness
      </p>

      <Link to="/docs">
        <button className="btn secondary medium"> Read the Docs</button>
      </Link>
      
    </div>
  );
}
