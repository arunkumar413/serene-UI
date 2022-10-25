import React from "react";

export function Buttons() {
  return (
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
        btn secondary small outlined
      </button>
      <button className="btn secondary medium outlined">
        btn secondary medium outlined
      </button>
      <button className="btn secondary large outlined">
        btn secondary large outlined
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
  );
}
