import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import App from "./Docs";
import { AppRouter } from "./AppRouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
