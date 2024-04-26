import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";
import { Buttons } from "./pages/buttons";
import { PageLayout } from "./pages/PageLayout";
import { Inputs } from "./pages/inputs";
import { Headings } from "./pages/Headings";
import { Paragraph } from "./pages/Paragraph";
import { BorderRadius } from "./pages/BorderRadius";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/buttons",
    element: <Buttons />,
  },

  {
    path: "/serene-ui/docs",
    element: <PageLayout />,
    children: [
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "inputs",
        element: <Inputs />,
      },
      {
        path: "headings",
        element: <Headings />,
      },
      {
        path: "paragraph",
        element: <Paragraph />,
      },
      {
        path: "border-radius",
        element: <BorderRadius />,
      },
    ],
  },

  {
    path: "/serene-ui/docs/all",
    element: <Docs />,
  },
]);
