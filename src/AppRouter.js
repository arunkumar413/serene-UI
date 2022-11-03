import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";

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
