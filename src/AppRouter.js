import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import { Home } from "./pages/Home";
import { Buttons } from "./pages/buttons";
import { PageLayout } from "./pages/PageLayout";
import { Inputs } from "./pages/inputs";
import { Headings } from "./pages/Headings";
import { Paragraph } from "./pages/Paragraph";
import { BorderRadius } from "./pages/BorderRadius";
import { Tags } from "./pages/Tags";
import { HoverClasses } from "./pages/HoverClasses";
import { CheckBoxes } from "./pages/checkBoxes";
import { RadioButtons } from "./pages/RadioButtons";
import { Range } from "./pages/Range";
import { Colors } from "./pages/Colors";
import { SnackBar } from "./pages/SnackBar";
import { Accordion } from "./pages/accordions";
import { Utilities } from "./pages/Utilities";

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
      {
        path: "tags",
        element: <Tags />,
      },
      {
        path: "hover",
        element: <HoverClasses />,
      },
      {
        path: "checkboxes",
        element: <CheckBoxes />,
      },
      {
        path: "radio-buttons",
        element: <RadioButtons />,
      },
      {
        path: "range-selector",
        element: <Range />,
      },
      {
        path: "serene-colors",
        element: <Colors />,
      },
      {
        path: "snack-bars",
        element: <SnackBar />,
      },
      {
        path: "accordions",
        element: <Accordion />,
      },
      {
        path: "utilities",
        element: <Utilities />,
      },
    ],
  },

  {
    path: "/serene-ui/docs/all",
    element: <Docs />,
  },
]);
