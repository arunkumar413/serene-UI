## Serene UI (https://serene-ui-git-experiment-arunkumar413.vercel.app/serene-ui/docs)

A pure CSS library for composing HTML components. Works with any js library/framework. A UI made keeping mind the ease of use, easy learning curve.

Despite easy learning curve, CSS continue to take a lot of time in adjusting, previewing the components. This robs developers of their precious development time. This UI library simplifies composing the components just by adding CSS classes that are easy to learn.

### Philosophy

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

![css library](/public/ser-ui-ver2.png)

In version 2 we have added the `ser` prefix to the class names so that serene UI class names do not conflict with other css library class names. Also in version 2 a single class will be used to achieve the same functinality compared to the multiple classes in version 1.

1. version 1: `<button class='btn primary small> Save </button>`
2. version 2: `<button class='ser-btn-primary-small> Save </button>`

Advantages of version 2:

1. Single class name to achieve the desired functionality
2. No conflict with other CSS libraries as each class name is prefixed with the key word `ser`
3. IDE friendly as the editor will suggest the class names as you type.
4. Uses logical grouping in which multiple classs names are grouped based on the css property we target.
5. For example in the below snippet all button class names contianing the key word `small` are grouped together and the property `font-size` and `padding` are applied.

```
.ser-btn-primary-small,
.ser-btn-secondary-small,
.ser-btn-primary-small-outlined,
.ser-btn-secondary-small-outlined,
.ser-btn-danger-small,
.ser-btn-warning-small,
.ser-btn-success-small,
.ser-btn-disabled-small,
.ser-btn-error-small-outlined,
.ser-btn-warning-small-outlined,
.ser-btn-success-small-outlined {
  font-size: var(--btn-small-font-size);
  padding: var(--small-button-padding);
}
```

6. Similarly, primary color buttons irrespective of their sizes are grouped together and primary color is applied

```
.ser-btn-primary-small,
.ser-btn-primary-medium,
.ser-btn-primary-large {
  color: var(--btn-primary-font-color);
  background-color: var(--primary-color);
}
```
