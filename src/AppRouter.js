import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";
import { V2docs } from "./pages/V2";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/serene-ui/docs",
    element: <Docs />,
  },

  {
    path: "/serene-ui/docs/v2",
    element: <V2docs />,
  },
]);
