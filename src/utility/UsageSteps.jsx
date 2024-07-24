import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export function UsageSteps() {
  const listStyleType = {
    // listStyleType: "number",
  };

  return (
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
        Link the index.css file in your HTML webpage.
        <SyntaxHighlighter language="html" style={docco}>
          {`<link rel="stylesheet" href="index.css"></link>`}
        </SyntaxHighlighter>{" "}
      </li>
      <li style={listStyleType}>
        Add the relevant classes to the HTML tags to style the components
      </li>
    </ol>
  );
}
