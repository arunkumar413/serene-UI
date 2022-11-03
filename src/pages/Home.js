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

  const listStyleType = {
    listStyleType: "number",
  };

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
        <div style={{ padding: 10, textAlign: "center" }}>
          <ol>
            <li style={listStyleType}>
              Copy the serene UI CSS content from{" "}
              <a href="https://github.com/arunkumar413/serene-UI/blob/main/src/style.css">
                {" "}
                here
              </a>
            </li>
            <li style={listStyleType}>
              Create file named index.css or name it as per your choice.
            </li>
            <li style={listStyleType}>
              Paste the CSS content into index.css and save it.
            </li>
            <li style={listStyleType}>
              <a href="/serene-ui/docs">Read the docs </a>
            </li>
          </ol>

          <SyntaxHighlighter language="html" style={docco}>
            {`<link rel="stylesheet" href="mystyle.css"></link>`}
          </SyntaxHighlighter>
        </div>

        <br />
      </div>
    </div>
  );
}
