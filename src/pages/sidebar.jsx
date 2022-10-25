import React from "react";

export function Sidebar() {
  return (
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
          <li className="large round list-item primary-hover">
            <a href="/css-library/docs/#buttons"> Buttons</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#inputs"> Inputs</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#headings"> Headings</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#paragraph"> Paragraph</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#border-radius"> Border radius </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#tags"> Tags </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#hover"> Hover </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/css-library/#checkboxes"> Check boxes </a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
