import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";
import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";

export const AppRouter = createBrowserRouter([
  {
    path: "/serene-ui",
    element: <Home />,
  },
  {
    path: "/serene-ui/docs",
    element: <Docs />,
  },
]);
