---
sidebar_position: 1
title: Getting started
---

Serene UI is a framework-agnostic CSS library. You style native HTML by adding a single `ser-` class per component.

## CDN

Include [normalize.css](https://necolas.github.io/normalize.css/) (optional, recommended) and the minified Serene bundle:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/serene-ui@2/dist/serene.min.css"
/>
```

Pin an exact version in production, for example `serene-ui@2.0.0`.

## npm

```bash
npm install serene-ui
```

```css
@import "serene-ui";
```

Or the unminified file:

```css
@import "serene-ui/serene.css";
```

## Use a class

```html
<button class="ser-btn-primary-small">Submit</button>
```

Version 2 uses one prefixed class instead of stacking many names:

- Version 1: `class="btn primary small"`
- Version 2: `class="ser-btn-primary-small"`

The `ser-` prefix avoids clashes with other libraries and helps editor autocomplete.

Serene styles the HTML element itself. Layout for groups of components (flex, grid) stays in your app.
