import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppStyles from "./AppStyles.css";

export function Sidebar() {
  const links = [
    {
      name: "All",
      link: "/all",
    },
    {
      name: "Buttons",
      link: "/buttons",
    },
    {
      name: "Inputs",
      link: "/inputs",
    },
    {
      name: "Headings",
      link: "/headings",
    },
    {
      name: "Paragraph",
      link: "/paragraph",
    },
    {
      name: "Border radius",
      link: "/border-radius",
    },
    {
      name: "Tags",
      link: "/tags",
    },
    {
      name: "Hover",
      link: "/hover",
    },
    {
      name: "Check boxes",
      link: "/checkboxes",
    },
    {
      name: "Radio buttons",
      link: "/radio-buttons",
    },
    {
      name: "Range",
      link: "/range-selector",
    },
    {
      name: "Colors",
      link: "/serene-colors",
    },
    {
      name: "Snack bars",
      link: "/snack-bars",
    },
    {
      name: "Accordions",
      link: "/accordions",
    },
    {
      name: "Tables",
      link: "/tables",
    },
    {
      name: "Utilities",
      link: "/utilities",
    },
  ];

  const linkElements = links.map(function (item, index) {
    return (
      <Fragment key={index.toString()}>
        <li
          style={{ padding: "1rem", fontSize: "1.2rem" }}
          className="large round list-item primary-hover"
        >
          <Link
            style={{ textDecoration: "none" }}
            to={`/serene-ui/docs${item.link}`}
          >
            {" "}
            {item.name}
          </Link>
        </li>
      </Fragment>
    );
  });

  return (
    <aside
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        overflow: "scroll",
      }}
    >
      <nav>
        <ol style={{ paddingLeft: 0, listStyle: "none" }}>
          <li
            style={{ padding: "1rem" }}
            className="large round list-item primary-hover"
          >
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              Home
            </Link>
          </li>

          {linkElements}
        </ol>
      </nav>
    </aside>
  );
}
