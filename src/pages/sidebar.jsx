import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppStyles from "./AppStyles.css";

export function Sidebar() {
  const [hover, setHover] = useState(false);
  const links = [
    {
      name: "Buttons",
      link: "/serene-ui/docs/#buttons",
    },
    {
      name: "Inputs",
      link: "/serene-ui/docs/#inputs",
    },
    {
      name: "Headings",
      link: "/serene-ui/docs/#headinigs",
    },
    {
      name: "Paragraph",
      link: "/serene-ui/docs/#paragraph",
    },
    {
      name: "Border radius",
      link: "/serene-ui/docs/#border-radius",
    },
    {
      name: "Tags",
      link: "/serene-ui/docs/#tags",
    },
    {
      name: "Hover",
      link: "/serene-ui/docs/#hover",
    },
    {
      name: "Check boxes",
      link: "/serene-ui/docs/#checkboxes",
    },
    {
      name: "Radio buttons",
      link: "/serene-ui/docs/#radio-buttons",
    },
    {
      name: "Range",
      link: "/serene-ui/docs/#range-selector",
    },
    {
      name: "Colors",
      link: "/serene-ui/docs/#serene-colors",
    },
    {
      name: "Snack bars",
      link: "/serene-ui/docs/#snack-bars",
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
            href={`/serene-ui/docs/#${item.link}`}
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
