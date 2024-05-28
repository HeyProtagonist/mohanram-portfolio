import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "./constants";
import SomethingWentWrong from "./Pages/Error/SomethingWentWrong";

const App = React.lazy(() => import("./App"));
const HomePage = React.lazy(() => import("./Pages/Home"));
const ProjectsPage = React.lazy(() => import("./Pages/Projects"));
const AboutPage = React.lazy(() => import("./Pages/About"));

const RootRouter = createBrowserRouter(
  [
    {
      path: HOME_ROUTE,
      element: <App />,
      errorElement: <SomethingWentWrong />,
      children: [
        { index: true, element: <HomePage /> },
        { path: PROJECTS_ROUTE, element: <ProjectsPage /> },
        { path: ABOUT_ROUTE, element: <AboutPage /> },
      ],
    },
  ],
  { basename: `/` },
);

export default RootRouter;
