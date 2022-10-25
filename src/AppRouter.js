import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";

export const AppRouter = createBrowserRouter([
  {
    path: "/css-library",
    element: <Home />,
  },
  {
    path: "/css-library/docs",
    element: <Docs />,
    children: [
      { path: "/css-library/docs/buttons", element: <Buttons /> },
      { path: "/css-library/docs/inputs", element: <Inputs /> },
    ],
  },
]);
