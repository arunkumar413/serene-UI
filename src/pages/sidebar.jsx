import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
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
        <li className="large round list-item primary-hover">
          <a href={`/serene-ui/docs/#${item.link}`}> {item.name}</a>
        </li>
      </Fragment>
    );
  });

  return (
    <aside
      style={{
        position: "fixed",
        // top: "0%",
        // left: "75%",
        width: "100%",
        height: "100vh",
        // gridColumn: "10/13",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        // textAlign: "left",
      }}
    >
      <nav>
        <ol style={{ paddingLeft: 0 }}>{linkElements}</ol>
      </nav>
    </aside>
  );
}
