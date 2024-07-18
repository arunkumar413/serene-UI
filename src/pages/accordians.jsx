import React from "react";

export function Accordian() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "1rem",
      }}
    >
      <details className="accordian-primary-small">
        <summary className="">accordian-primary-small</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordian-primary-medium">
        <summary>accordian-primary-medium</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordian-primary-large">
        <summary>accordian-primary-large</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>

      <details className="accordian-secondary-small">
        <summary>accordian-secondary-small</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>

      <details className="accordian-secondary-medium">
        <summary>accordian-secondary-medium</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordian-secondary-large">
        <summary>accordian-secondary-large</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
    </div>
  );
}
