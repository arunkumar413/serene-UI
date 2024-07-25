import React from "react";

export function Accordion() {
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
      <details className="accordion-primary-small">
        <summary className="">accordion-primary-small</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordion-primary-medium">
        <summary>accordion-primary-medium</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordion-primary-large">
        <summary>accordion-primary-large</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>

      <details className="accordion-secondary-small">
        <summary>accordion-secondary-small</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>

      <details className="accordion-secondary-medium">
        <summary>accordion-secondary-medium</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
      <details className="accordion-secondary-large">
        <summary>accordion-secondary-large</summary>
        <div>
          <p>Peekaboo! Here's some hidden content!</p>
        </div>
      </details>
    </div>
  );
}
