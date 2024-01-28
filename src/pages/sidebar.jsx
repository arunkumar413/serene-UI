import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppStyles from "./AppStyles.css";

export function Sidebar() {
  const [hover, setHover] = useState(false);
  const links = [
    {
      name: "Buttons",
      link: "#buttons",
    },
    {
      name: "Inputs",
      link: "#inputs",
    },
    {
      name: "Headings",
      link: "#headinigs",
    },
    {
      name: "Paragraph",
      link: "#paragraph",
    },
    {
      name: "Border radius",
      link: "#border-radius",
    },
    {
      name: "Tags",
      link: "#tags",
    },
    {
      name: "Hover",
      link: "#hover",
    },
    {
      name: "Check boxes",
      link: "#checkboxes",
    },
    {
      name: "Radio buttons",
      link: "#radio-buttons",
    },
    {
      name: "Range",
      link: "#range-selector",
    },
    {
      name: "Colors",
      link: "#serene-colors",
    },
    {
      name: "Snack bars",
      link: "#snack-bars",
    },
  ];

  const linkElements = links.map(function (item, index) {
    return (
      <Fragment key={index.toString()}>
        <li
          style={{ padding: "1rem" }}
          className="large round list-item primary-hover"
        >
          <a
            style={{ textDecoration: "none" }}
            href={`/serene-ui/docs${item.link}`}
          >
            {" "}
            {item.name}
          </a>
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
