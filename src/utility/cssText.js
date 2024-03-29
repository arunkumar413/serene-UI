export const cssText = `:root {
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
    --error-color: red;
    --warning-color: orange;
    --success-color: green;
    --paragraph-font-size: 1rem;
    --h1-font-size: 2rem;
    --primary-hover-background: aliceblue; /*background color to use when hovering over a primary class element */
    --secondary-hover-background: #ffc0cb33; /* background color to use when hovering over a secondary class element */
  }
  
  body {
    font-family: "Inter", sans-serif;
  }
  
  .small {
    padding: 0.5rem;
  }
  
  .medium {
    padding: 0.8rem;
  }
  
  .large {
    padding: 1.2rem;
  }
  
  .btn {
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    font-size: var(--btn-font-size);
    font-weight: normal;
    font-family: "Inter", sans-serif;
  }
  .btn.small {
    font-size: var(--btn-small-font-size);
  }
  
  .btn.medium {
    font-size: var(--btn-medium-font-size);
  }
  
  .btn.large {
    font-size: var(--btn-large-font-size);
  }
  
  .btn.primary {
    background-color: var(--primary-color);
    color: var(--text-primary);
    color: var(--btn-primary-font-color);
  }
  
  .btn.secondary {
    background-color: var(--secondary-color);
    color: var(--btn-secondary-font-color);
  }
  
  .primary {
    background-color: var(--primary-color);
    color: var(--text-primary);
  }
  
  .secondary {
    background-color: var(--secondary-color);
    color: var(--text-primary);
  }
  
  .error {
    background-color: var(--error-color);
    color: white;
  }
  .warning {
    background-color: var(--warning-color);
  }
  
  .success {
    background-color: var(--success-color);
    color: white;
  }
  
  .outlined.error {
    background-color: white;
    color: var(--error-color);
    border: solid 1px var(--error-color);
  }
  
  .outlined.warning {
    background-color: white;
    color: var(--warning-color);
    border: solid 1px var(--warning-color);
  }
  .outlined.success {
    background-color: white;
    color: var(--success-color);
    border: solid 1px var(--success-color);
  }
  
  .outlined.primary {
    background-color: white;
    border: solid 1px var(--primary-color);
    color: var(--primary-color);
  }
  
  .outlined.secondary {
    background-color: white;
    border: solid 1px var(--secondary-color);
    color: var(--secondary-color);
  }
  
  .disabled {
    pointer-events: none;
    background-color: aliceblue;
    color: gray;
  }
  .disabled:hover {
    cursor: not-allowed;
  }
  
  /* Inputs */
  
  .input {
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
  }
  
  .input.primary.filled {
    background-color: aliceblue;
    border-bottom: solid 1px var(--primary-color);
    color: black;
  }
  
  .input.primary.filled:focus {
    border-width: 2px;
  }
  
  .input.secondary.filled {
    background-color: aliceblue;
    border-bottom: solid 1px var(--secondary-color);
    color: black;
    font-size: 1rem;
  }
  .input.secondary.filled:focus {
    border-width: 2px;
  }
  
  .input.primary.outlined {
    background-color: white;
    border: solid 1px var(--primary-color);
    color: black;
  }
  .input.primary.outlined:focus {
    border-width: 2px;
  }
  
  .input.secondary.outlined {
    background-color: white;
    border: solid 1px var(--secondary-color);
    color: black;
  }
  
  .input.secondary.outlined:focus {
    border-width: 2px;
  }
  
  .input:focus {
    border-width: 2px;
  }
  
  .checkbox {
    width: 1.2rem;
    height: 1.2rem;
  }
  
  .checkbox.primary {
    accent-color: var(--primary-color);
  }
  
  .checkbox.secondary {
    accent-color: var(--secondary-color);
  }
  
  .checkbox.primary-checkbox {
    accent-color: var(--primary-color);
  }
  
  .checkbox.secondary-checkbox {
    accent-color: var(--secondary-color);
  }
  .radio {
    width: 1.2rem;
    height: 1.2em;
  }
  
  .radio.primary {
    accent-color: var(--primary-color);
  }
  .radio.secondary {
    accent-color: var(--secondary-color);
  }
  
  .round {
    border-radius: 0.8rem;
  }
  
  .rounder {
    border-radius: 1.2rem;
  }
  
  .roundest {
    border-radius: 2.5rem;
  }
  
  p {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    color: rgba(0, 0, 0, 0.87);
    max-width: 75ch;
  }
  
  .tag {
    outline: none;
    border: none;
    font-size: 0.8rem;
    border-radius: 1rem;
    padding: 0.2rem;
  }
  
  .tag.primary {
    background-color: var(--primary-color);
  }
  
  .tag.primary.outlined {
    background-color: white;
    color: var(--primary-color);
  }
  
  .tag.secondary {
    background-color: var(--secondary-color);
  }
  
  .tag.secondary.outlined {
    background-color: white;
    color: var(--secondary-color);
  }
  
  .primary.outlined.hover:hover {
    background-color: var(--primary-hover-background);
  }
  
  .secondary.outlined.hover:hover {
    background-color: var(--secondary-hover-background);
  }
  
  li {
    list-style-type: none;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  a {
    text-decoration: none;
  }
  
  .list-item.primary-hover:hover {
    background-color: var(--primary-hover-background);
  }
  
  .list-item.secondary-hover:hover {
    background-color: var(--secondary-hover-background);
  }
  
  .range.primary[type="range"] {
    accent-color: var(--primary-color);
  }
  
  .range.secondary {
    accent-color: var(--secondary-color);
  }
  
  /* colors */
  
  .text.color.primary {
    color: var(--primary-color);
    background-color: white;
  }
  
  .text.color.secondary {
    color: var(--secondary-color);
    background-color: white;
  }
  
  .text.color.default {
    color: black;
    background-color: white;
  }
  
  .text.color.error {
    color: var(--error-color);
    background-color: white;
  }
  
  .text.color.warning {
    color: var(--warning-color);
    background-color: white;
  }
  
  .text.color.success {
    color: var(--success-color);
    background-color: white;
  }
  
  .snack-bar {
    padding: 0.8rem;
    font-size: 1rem;
  }
  
  .snack-bar.error {
    background-color: var(--error-color);
    color: white;
  }
  
  .snack-bar.warning {
    background-color: var(--warning-color);
    color: white;
  }
  
  .snack-bar.success {
    background-color: var(--success-color);
    color: white;
  }
  `;
