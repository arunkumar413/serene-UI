import React, { useEffect } from "react";
import "./style.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { HashLink } from "react-router-hash-link";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Sidebar } from "./pages/sidebar";
import { Text } from "./pages/Text";

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
        <p> usage: </p>
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
          <button className="btn primary medium round"> round</button>
          <button className="btn primary outlined medium rounder">
            {" "}
            rounder{" "}
          </button>
          <button className="btn primary medium roundest"> roundest </button>

          <input
            className="input medium primary outlined round"
            value="round"
          />
          <input
            className="input medium primary outlined rounder"
            value="rounder"
          />
          <input
            className="input medium primary outlined roundest"
            value="roundest"
          />
        </div>
        {/* end of buttons    */}

        <h4 id="tags"> Tags</h4>
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
          {" "}
          <button className="tag primary"> tag primary</button>
          <button className="tag secondary"> tag secondary </button>
          <button className="tag primary outlined">
            {" "}
            tag primary outlined{" "}
          </button>
          <button className="tag secondary outlined">
            {" "}
            tag secondary outlined{" "}
          </button>
        </div>
        <h4 id="hover"> Hover classes</h4>

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
        <h4 id="checkboxes"> check boxes</h4>

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
          <label htmlFor="pcheckbox">checkbox primary </label>{" "}
          <input
            checked={true}
            className="checkbox primary"
            id="pcheckbox"
            type="checkbox"
          />
          <label htmlFor="scheckbox">checkbox secondary </label>{" "}
          <input
            checked={true}
            className="checkbox secondary"
            id="scheckbox"
            type="checkbox"
          />
        </div>

        <h4> Radio buttons</h4>
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
          <label htmlFor="primaryRadio"> radio primary</label>
          <input
            checked={true}
            id="primaryRadio"
            type="radio"
            className="radio primary"
          />
          <label htmlFor="secondaryRadio"> radio secondary</label>

          <input
            checked={true}
            id="secondaryRadio"
            type="radio"
            className="radio secondary"
          />
        </div>
        <h4> Range</h4>
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
          <label htmlFor="rangePrimary"> snack bar </label>
          <input
            id="rangePrimary"
            className="range primary"
            min={0}
            max={10}
            type="range"
          />
          <label htmlFor="rangePrimary"> range secondary </label>
          <input
            id="rangeSecondary"
            className="range secondary"
            min={0}
            max={10}
            type="range"
          />
        </div>

        <h4> Colors</h4>

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
          {/* <label htmlFor="rangePrimary"> range primary </label>
          <input
            id="rangePrimary"
            className="range primary"
            min={0}
            max={10}
            type="range"
          />
          <label htmlFor="rangePrimary"> range secondary </label>
          <input
            id="rangeSecondary"
            className="range secondary"
            min={0}
            max={10}
            type="range"
          /> */}
          <h3 className="text color primary"> text color primary</h3>
          <h3 className="text color secondary"> text color secondary </h3>
          <h3 className="text color default"> text color default </h3>
          <h3 className="text color error"> text color error </h3>
          <h3 className="text color warning"> text color warning </h3>
          <h3 className="text color success"> text color success </h3>
        </div>

        <h4> Snack bars</h4>

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
            <span className="snack-bar warning">
              {" "}
              This is a warning message
            </span>
          </div>
          <div>
            <p> snack-bar success</p>
            <span className="snack-bar success">
              {" "}
              This is a success message
            </span>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
