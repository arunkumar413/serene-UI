import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { cssText } from "../utility/cssText";

export function Home() {
  const [cssValue, setCssValue] = useState("");
  useEffect(function () {
    console.log(cssText);
    setCssValue(cssText);
  }, []);

  function copyCss() {
    navigator.clipboard.writeText(cssValue).then(function () {
      alert("CSS copied");
    });
  }

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "teal",
        color: "white",
        textAlign: "center",
        display: "grid",
        height: "100vh",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
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

        <Link to="/serene-ui/docs">
          <button className="btn secondary medium"> Read the Docs</button>
        </Link>
        <div style={{ padding: 10, textAlign: "center" }}></div>

        <br />
      </div>
    </div>
  );
}
