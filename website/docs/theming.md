---
sidebar_position: 2
title: Theming
---

Override CSS custom properties on `:root` (or a wrapper) to change the design system without rewriting component classes.

```css
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
  --danger-color: red;
  --warning-color: orange;
  --success-color: green;
  --primary-hover-background: aliceblue;
  --secondary-hover-background: #ffc0cb33;
  --round-radius: 0.5rem;
  --rounder-radius: 1rem;
  --roundest-radius: 1.2rem;
  --font-size-tiny: 0.8rem;
  --font-size-small: 1rem;
  --font-size-medium: 1.3rem;
  --font-size-large: 2rem;
  --font-size-xlarge: 2.5rem;
}
```

The full token list lives in [`packages/css/src/tokens.css`](https://github.com/arunkumar413/serene-UI/blob/main/packages/css/src/tokens.css) in this repository.
