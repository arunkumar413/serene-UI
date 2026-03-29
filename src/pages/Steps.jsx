import React from "react";

export function Steps() {
  return (
    <div>
      <ol>
        <li>
          {" "}
          Include normalise{" "}
          <a href="https://necolas.github.io/normalize.css/"> CSS file </a> in
          you project's index.html file to remove browser inconsistencies in
          rendering the HTML elements.{" "}
        </li>
        <li>
          Copy the bundled/minified CSS styles from the bundle.css file at
          <a
            href="https://github.com/arunkumar413/serene-UI/blob/main/public/styles/bundle.css"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://github.com/arunkumar413/serene-UI/blob/main/public/styles/bundle.css
          </a>
        </li>
        <li>
          {" "}
          In your project create file named index.css or name it as per your
          choice.{" "}
        </li>
        <li> Paste the bundle.css content into index.css and save it.</li>
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
