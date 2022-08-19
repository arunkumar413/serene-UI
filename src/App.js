import React, { useEffect } from "react";
import "./style.css";

export default function App() {
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
      <div style={{ gridColumn: "1/10" }}>
        <h3 id="buttons"> Buttons </h3>
        <div
          style={{
            // width: "60%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
          }}
        >
          <button className="btn primary small"> btn primary small </button>
          <button className="btn primary medium"> btn primary medium </button>
          <button className="btn primary large"> btn primary large </button>
          <button className="btn secondary small"> btn secondary small </button>
          <button className="btn secondary medium">
            {" "}
            btn secondary medium{" "}
          </button>
          <button className="btn secondary large"> btn secondary large </button>
          <button className="btn primary small outlined">
            btn primary small outlined
          </button>
          <button className="btn primary medium outlined">
            btn primary medium outlined
          </button>
          <button className="btn primary large outlined">
            btn primary large outlined
          </button>
          <button className="btn secondary small outlined">
            btn primary small outlined
          </button>
          <button className="btn secondary medium outlined">
            btn primary medium outlined
          </button>
          <button className="btn secondary large outlined">
            btn primary large outlined
          </button>
          <button className="btn small error"> btn small error </button>
          <button className="btn medium error"> btn medium error </button>
          <button className="btn large error"> btn large error</button>
          <button className="btn small warning"> btn small warning </button>
          <button className="btn medium warning"> btn medium warning </button>
          <button className="btn large warning"> btn large warning </button>
          <button className="btn small success"> btn small success </button>
          <button className="btn medium success"> btn medium success </button>
          <button className="btn large success"> btn large success </button>
          <button className="btn small disabled"> btn small disabled </button>
          <button className="btn medium disabled"> btn medium disabled </button>
          <button className="btn large disabled"> btn large disabled </button>
          <button className="btn small outlined error">
            {" "}
            btn small outlined error{" "}
          </button>
          <button className="btn medium outlined error">
            {" "}
            btn medium outlined error{" "}
          </button>
          <button className="btn large outlined error">
            {" "}
            btn large outlined error{" "}
          </button>
          <button className="btn small outlined warning">
            {" "}
            btn small outlined warning{" "}
          </button>
          <button className="btn medium outlined warning">
            {" "}
            btn medium outlined warning{" "}
          </button>
          <button className="btn large outlined warning">
            {" "}
            btn large outlined warning{" "}
          </button>
          <button className="btn small outlined success">
            {" "}
            btn small outlined success
          </button>{" "}
          <button className="btn medium outlined success">
            {" "}
            btn medium outlined success{" "}
          </button>
          <button className="btn large outlined success">
            {" "}
            btn large outlined success{" "}
          </button>
        </div>
        <h3 id="inputs"> Inputs </h3>
        <div
          style={{
            // width: "60%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
          }}
        >
          <input
            value={"inupt small primary filled"}
            className="input small primary filled "
            type="text"
          />
          <input
            value="input medium primary filled"
            className="input medium primary filled "
            type="text"
          />
          <input
            value="input large primary filled"
            className="input large primary filled "
            type="text"
          />

          <input
            value="input small primary outlined"
            className="input small primary outlined "
            type="text"
          />
          <input
            value="input medium primary outlined"
            className="input medium primary outlined "
            type="text"
          />
          <input
            value="input large primary outlined"
            className="input large primary outlined "
            type="text"
          />

          <input
            value="input small secondary filled"
            className="input small secondary filled "
            type="text"
          />
          <input
            value="input medium secondary filled"
            className="input medium secondary filled "
            type="text"
          />
          <input
            value="input large secondary filled"
            className="input large secondary filled "
            type="text"
          />

          <input
            value="input small secondary outlined"
            className="input small secondary outlined "
            type="text"
          />
          <input
            value="input medium secondary outlined"
            className="input medium secondary outlined "
            type="text"
          />
          <input
            value="input large secondary outlined"
            className="input large secondary outlined "
            type="text"
          />
        </div>

        <h4 id="headings"> Headings </h4>
        <div
          className="headings"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
          }}
        >
          <h1> Heading 1 </h1>
          <h2> Heading 2 </h2>
          <h3> Heading 3 </h3>
          <h4> heading 4 </h4> <h5> Heading 5 </h5>
          <h6> Heading 6 </h6>
          <p> Paragraph </p>
        </div>

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
          <h3 className="color primary"> color primary</h3>
          <h3 className="color secondary"> color secondary </h3>
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
            <p> error snack-bar</p>
            <span className="error snack-bar"> This is an error message</span>
          </div>
          <div>
            <p> warning snack-bar</p>
            <span className="warning snack-bar">
              {" "}
              This is a warning message
            </span>
          </div>
          <div>
            <p> success snack-bar</p>
            <span className="success snack-bar">
              {" "}
              This is a success message
            </span>
          </div>
        </div>
      </div>

      <aside
        style={{
          position: "fixed",
          top: "0%",
          left: "75%",
          width: "300px",
          height: "100%",
          gridColumn: "10/13",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textAlign: "left",
        }}
      >
        <nav>
          <ol>
            {" "}
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#buttons"> Buttons</a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#inputs"> Inputs</a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#headings"> Headings</a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#paragraph"> Paragraph</a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#border-radius"> Border radius </a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#tags"> Tags </a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#hover"> Hover </a>
            </li>
            <li className=" large round list-item primary-hover">
              <a href="/css-library/#checkboxes"> Check boxes </a>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  );
}
