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
    <div>
      <h3> Buttons </h3>
      <div
        style={{
          width: "60%",
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
        <button className="btn secondary medium"> btn secondary medium </button>
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
      <h3> Inputs </h3>
      <div
        style={{
          width: "60%",
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

      <h4> Headings </h4>
      <div
        className="headings"
        style={{
          width: "60%",
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

      <h4> Paragraph </h4>

      <div
        style={{
          width: "60%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "1rem",
        }}
      >
        <p>
          {" "}
          I wish to speak a word for Nature, for absolute freedom and wildness,
          as contrasted with a freedom and culture merely civil, — to regard man
          as an inhabitant, or a part and parcel of Nature, rather than a member
          of society. <br /> <br />
          <cite> Walking </cite> by Henry David Thoreau
        </p>
      </div>

      <h4> Border radius </h4>
      <div
        style={{
          width: "60%",
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

        <input className="input medium primary outlined round" value="round" />
        <input
          className="input medium primary outlined rounder"
          value="rounder"
        />
        <input
          className="input medium primary outlined roundest"
          value="roundest"
        />
      </div>

      <h4> Tags</h4>
      <div
        style={{
          width: "60%",
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
        <button className="tag primary outlined"> tag primary outlined </button>
        <button className="tag secondary outlined">
          {" "}
          tag secondary outlined{" "}
        </button>
      </div>
      <h4> Hover classes</h4>

      <div
        style={{
          width: "60%",
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
          btn primary outlined hover{" "}
        </button>{" "}
        <button className="btn small secondary outlined hover">
          {" "}
          btn secondary outlined hover{" "}
        </button>{" "}
      </div>
    </div>
  );
}
