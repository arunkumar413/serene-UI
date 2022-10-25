import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./Home";

export const AppRouter = createBrowserRouter([
  {
    path: "/css-library",
    element: <Home />,
  },
  { path: "/docs", element: <Docs /> },
]);
