## Serene UI (https://serene-ui-arunkumar413.vercel.app/)

A pure CSS library for composing HTML components. Works with any js library/framework. A UI made keeping mind the ease of use, easy learning curve.

Despite easy learning curve, CSS continue to take a lot of time in adjusting, previewing the components. This robs developers of their precious development time. This UI library simplifies composing the components just by adding CSS classes that are easy to learn.

### Pholosophy

Serene UI tries to apply the CSS classes at the HTML elements only. Take for example, a button component.
Serene UI classes are applied at the button tag and user is free to implement their own button group component using CSS grid or flexbox layout in their own favorite framwork such as react, angular etc,. Thus serene UI is framework agnostic. 

The main aim of serene UI is to address the default behvaior of the design system at the HTML tag level. User should be able to alter the design system just by modifying the below css variables.

```
:root {
  --primary-color: blue;
  --secondary-color: rgba(184, 11, 117, 0.959);
  --text-primary: white;
  --btn-font-size: 1rem;
  --btn-small-font-size: 1rem;
  --btn-medium-font-size: 1.2rem;
  --btn-large-font-size: 1.4rem;
  --btn-primary-font-color: white;
  --btn-secondary-font-color: white;
  --small-input-font-size: 1rem;
  --medium-input-font-size: 1.2rem;
  --large-input-font-size: 1.6rem;
  --danger-color: red;
  --warning-color: orange;
  --success-color: green;
  --paragraph-font-size: 1rem;
  --h1-font-size: 2rem;
  --primary-hover-background: aliceblue; /*background color to use when hovering over a primary class element */
  --secondary-hover-background: #ffc0cb33; /* background color to use when hovering over a secondary class element */
  --small-button-padding: 0.5rem;
  --medium-button-padding: 0.8rem;
  --large-button-padding: 1rem;

  --round-radius: 0.5rem;
  --rounder-radius: 1rem;
  --roundest-radius: 1.2rem;
}

body {
  font-family: "Inter", sans-serif;
}

```
screenshot:

![css library](/public/css-library.png)
