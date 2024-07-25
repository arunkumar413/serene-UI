import React, { Fragment, useEffect } from "react";
import "./style.css";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Sidebar } from "./pages/sidebar";
import { Text } from "./pages/Text";
import { Colors } from "./pages/Colors";
import { SnackBar } from "./pages/SnackBar";
import { Range } from "./pages/Range";
import { HoverClasses } from "./pages/HoverClasses";
import { RadioButtons } from "./pages/RadioButtons";
import { CheckBoxes } from "./pages/checkBoxes";
import { Tags } from "./pages/Tags";
import { BorderRadius } from "./pages/BorderRadius";
import { UsageSteps } from "./utility/UsageSteps";
import { Headings } from "./pages/Headings";
import { Paragraph } from "./pages/Paragraph";
import { Steps } from "./pages/Steps";
import { Accordion } from "./pages/accordions";

export default function Docs() {
  // function handleChange(evt) {
  //   console.log(evt);
  // }

  useEffect(function () {
    document.querySelectorAll("button").forEach(function (item) {
      item.addEventListener("click", function (evt) {
        console.log(evt.target.className); //copy the className
      });
    });
  }, []);

  const pageList = [
    {
      name: "Steps",
      page: <Steps />,
    },
    {
      name: "Buttons",
      page: <Buttons />,
    },

    { name: "Inputs", page: <Inputs /> },
    { name: "Headings", page: <Headings /> },
    { name: "Paragraph", page: <Paragraph /> },
    { name: "Border radius", page: <BorderRadius /> },
    { name: "Tags", page: <Tags /> },
    { name: "Hover", page: <HoverClasses /> },
    { name: "Check boxes", page: <CheckBoxes /> },

    { name: "Radio buttons", page: <RadioButtons /> },
    { name: "Range", page: <Range /> },
    { name: "Colors (apply on h1-h6 and paragraph tags)", page: <Colors /> },
    { name: "Snack bars", page: <SnackBar /> },
    { name: "Accordions", page: <Accordion /> },
  ];

  const pageElements = pageList.map(function (item, index) {
    return (
      <Fragment key={index.toString()}>
        <h2 key={index.toString()}> {item.name}</h2>
        {item.page}
      </Fragment>
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          gridColumn: "1/11",
          padding: "0.5rem",
        }}
      >
        {pageElements}
      </div>
      <div
        style={{
          gridColumn: "11/13",
        }}
      >
        {" "}
        <Sidebar />{" "}
      </div>
    </div>
  );
}
