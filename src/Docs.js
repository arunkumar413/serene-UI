import React, { useEffect } from "react";
import "./style.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { HashLink } from "react-router-hash-link";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Sidebar } from "./pages/sidebar";
import { Text } from "./pages/Text";
import { Colors } from "./pages/Colors";
import { SnackBar } from "./pages/SnackBar";
import { Range } from "./pages/Range";
import { HoverClasses } from "./pages/HoverClasses";
import { RadioButtons } from "./pages/RadioButtons";
import { CheckBoxes } from "./pages/checkBoxes";
import { Tags } from "./pages/Tags";
import { BorderRadius } from "./pages/BorderRadius";
import { UsageSteps } from "./utility/UsageSteps";

export default function Docs() {
  function handleChange(evt) {
    console.log(evt);
  }

  useEffect(function () {
    document.querySelectorAll("button").forEach(function (item) {
      item.addEventListener("click", function (evt) {
        console.log(evt.target.className); //copy the className
      });
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <h2
        className="text color primary"
        style={{ gridColumn: "1/10", margin: 0, textAlign: "center" }}
      >
        {" "}
        Serene UI
      </h2>
      <div style={{ gridColumn: "1/10" }}>
        <UsageSteps />
        <p> Example: </p>
        <SyntaxHighlighter language="html" style={docco}>
          {'<button class="btn primary large">Submit</button> '}
        </SyntaxHighlighter>
      </div>
      <div style={{ gridColumn: "1/10" }}>
        <h3 id="buttons"> Buttons </h3>
        <Buttons />
        <h3 id="inputs"> Inputs </h3>
        <Inputs />

        <h4 id="headings"> Headings </h4>
        <Text />

        <h4 id="paragraph"> Paragraph </h4>

        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
          }}
        >
          <p>
            {" "}
            I wish to speak a word for Nature, for absolute freedom and
            wildness, as contrasted with a freedom and culture merely civil, —
            to regard man as an inhabitant, or a part and parcel of Nature,
            rather than a member of society. <br /> <br />
            <cite> Walking </cite> by Henry David Thoreau
          </p>
        </div>

        <h4 id="border-radius"> Border radius </h4>

        <BorderRadius />

        {/* end of buttons    */}

        <h4 id="tags"> Tags</h4>

        <Tags />

        <h4 id="hover"> Hover classes</h4>

        <HoverClasses />

        <h4 id="checkboxes"> check boxes</h4>

        <CheckBoxes />

        <h4> Radio buttons</h4>
        <RadioButtons />

        <h4> Range</h4>
        <Range />

        <h4> Colors</h4>

        <Colors />

        <h4> Snack bars</h4>

        <SnackBar />
      </div>
      <Sidebar />
    </div>
  );
}
