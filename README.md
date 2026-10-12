## Serene UI

Serene UI is a pure CSS library for composing HTML components. It works with any JavaScript framework. Docs: [https://serene-ui.vercel.app/](https://serene-ui.vercel.app/)

This repository has two parts:

| Path | Purpose |
| --- | --- |
| `packages/css` | Source and built CSS published as `serene-css` |
| `website` | Docusaurus documentation |

## Use the library

CDN (jsDelivr, after npm publish):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/serene-css@2/dist/serene.min.css" />
```

npm:

```bash
npm install serene-css
```

```html
<button class="ser-btn-primary-small">Submit</button>
```

Version 2 uses one `ser-` prefixed class per component so names do not clash with other libraries.

## Develop this repo

```bash
npm install
npm start
```

That builds the CSS bundle, then starts the docs site.

```bash
npm run build:css   # packages/css/dist/serene.css and serene.min.css
npm run build       # CSS + static docs site in website/build
```

To customize colors, sizes, and other tokens, override CSS custom properties in your own stylesheet after Serene loads. See [Theming](https://serene-ui.vercel.app/docs/theming).
