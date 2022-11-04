import React from "react";
import { Link } from "react-router-dom";

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
          {/* <li className="large round list-item primary-hover">
            <a href="/serene-ui"> Home</a>
          </li> */}
          <li className="large round list-item primary-hover">
            <Link to="/"> Home </Link>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#buttons"> Buttons</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#inputs"> Inputs</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#headings"> Headings</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#paragraph"> Paragraph</a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#border-radius"> Border radius </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#tags"> Tags </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#hover"> Hover </a>
          </li>
          <li className="large round list-item primary-hover">
            <a href="/serene-ui/docs/#checkboxes"> Check boxes </a>
          </li>
        </ol>
      </nav>
    </aside>
  );
}
