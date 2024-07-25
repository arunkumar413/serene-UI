import React from "react";

export function Steps() {
  return (
    <div>
      <ol>
        <li> Include normalise <a href="https://necolas.github.io/normalize.css/"> CSS file </a> in you project's index.html file to remove browser inconsistencies in rendering the HTML elements. </li>
        <li>
          Copy the serene UI CSS content from{" "}
          <a href="https://github.com/arunkumar413/serene-UI/blob/experiment/src/style.css">
            {" "}
            here
          </a>
        </li>
        <li> Create file named index.css or name it as per your choice. </li>
        <li> Paste the CSS content into index.css and save it.</li>
        <li> Link the index.css file in your HTML webpage.</li>
        <pre>
          <code className="language-html">
            {`<link rel="stylesheet" href="index.css"></link>`}
          </code>
        </pre>
        <li>
          Add the relevant classes to the HTML tags to style the components.
        </li>
        Example:
        <pre>{`<button class="ser-btn-primary-small">Submit</button>`}</pre>
      </ol>
    </div>
  );
}
