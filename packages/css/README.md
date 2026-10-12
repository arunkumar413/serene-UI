# serene-css

A class-based CSS library for composing HTML components. Framework-agnostic: add a single `ser-` class to native HTML.

Docs: [https://serene-ui.vercel.app](https://serene-ui.vercel.app)

## Install

```bash
npm install serene-css
```

```css
@import "serene-css";
```

Unminified:

```css
@import "serene-css/serene.css";
```

## CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/serene-css@2/dist/serene.min.css"
/>
```

## Use a class

```html
<button class="ser-btn-primary-small">Submit</button>
```

## Theming

Do not edit the published CSS. After Serene loads, override tokens in your own stylesheet:

```css
@import "serene-css";

:root {
  --primary-color: #1d4ed8;
}
```

Full token list and CDN examples: [Theming](https://serene-ui.vercel.app/docs/theming)
