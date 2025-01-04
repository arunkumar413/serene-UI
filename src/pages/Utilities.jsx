import React from "react";

export function Utilities() {
  let textClasses = [
    "ser-text-tiny",
    "ser-text-small",
    "ser-text-medium",
    "ser-text-large",
    "ser-text-xlarge",
  ];

  let greyClasses = [
    "ser-color-grey-1",
    "ser-color-grey-2",
    "ser-color-grey-3",
    "ser-color-grey-4",
    "ser-color-grey-5",
  ];

  let greyBackgroundClasses = [
    "ser-bg-grey-1",
    "ser-bg-grey-2",
    "ser-bg-grey-3",
    "ser-bg-grey-4",
    "ser-bg-grey-5",
  ];

  let shadowClasses = [
    "ser-shadow-1",
    "ser-shadow-2",
    "ser-shadow-3",
    "ser-shadow-4",
    "ser-shadow-5",
  ];

  let paddingClasses = [
    "ser-p-1",
    "ser-p-2",
    "ser-p-3",
    "ser-p-4",
    "ser-p-5",
    "ser-p-6",
    "ser-p-7",
    "ser-p-8",
    "ser-p-9",
    "ser-p-10",
    "ser-p-11",
    "ser-p-12",
  ];

  let marginClasses = [
    "ser-m-1",
    "ser-m-2",
    "ser-m-3",
    "ser-m-4",
    "ser-m-5",
    "ser-m-6",
    "ser-m-7",
    "ser-m-8",
    "ser-m-9",
    "ser-m-10",
    "ser-m-11",
    "ser-m-12",
  ];

  const textElements = textClasses.map(function (item, index) {
    return (
      <p key={item} className={item}>
        {item}
      </p>
    );
  });

  const greyElements = greyClasses.map(function (item, index) {
    return (
      <p className={`ser-text-large ${item}`} key={item}>
        {item}
      </p>
    );
  });
  const greyBgElements = greyBackgroundClasses.map(function (item, index) {
    return (
      <div
        className={item}
        key={item}
        style={{ width: 200, height: 100, textAlign: "center" }}
      >
        {item}
      </div>
    );
  });

  const shadowElements = shadowClasses.map(function (item, index) {
    return (
      <div
        className={item}
        key={item}
        style={{ width: 200, height: 100, textAlign: "center" }}
      >
        {item}
      </div>
    );
  });

  const paddingElements = paddingClasses.map(function (item, index) {
    return (
      <span
        className={`${item} ser-shadow-1`}
        key={item}
        // style={{ width: 200, height: 100 }}
        style={{ marginLeft: "1rem" }}
      >
        {item}
      </span>
    );
  });

  const marginElements = marginClasses.map(function (item, index) {
    return (
      <span
        className={`${item} ser-shadow-1`}
        key={item}
        // style={{ width: 200, height: 100 }}
        // style={{ marginLeft: "1rem" }}
      >
        {item}
      </span>
    );
  });

  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "1rem" }}
    >
      <p>
        {" "}
        We're giving five levels of font-sizes, grey colors, grey background and
        shadows. You can add more levels depending on your application
        requirements.
      </p>

      <h3> Font sizes:</h3>
      {textElements}
      <hr />

      <h3> Grey colors:</h3>
      {greyElements}
      <hr />

      <h3> Grey background colors:</h3>
      <div style={{ display: "flex", gap: "1rem" }}>{greyBgElements}</div>
      <hr />

      <h3> Shadows:</h3>
      <div style={{ display: "flex", gap: "1rem" }}>{shadowElements}</div>
      <hr />

      <h3> Paddings:</h3>
      <div>{paddingElements}</div>

      <h3> Margins:</h3>
      <div>{marginElements}</div>
      <hr />
    </div>
  );
}
