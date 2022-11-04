import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/serene-ui/docs",
    element: <Docs />,
  },
]);
