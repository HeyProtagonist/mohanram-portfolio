import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import {
  faLinkedin,
  faSquareBehance,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from "./constants";
import Loading from "./Components/Loading";

const socialLinks = [
  {
    id: "behance-url",
    displayName: "Behance",
    icon: faSquareBehance,
    url: "https://www.behance.net/mohanramshan",
  },
  {
    id: "linked-in-url",
    displayName: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohan23",
  },
  {
    id: "than-twitter-now-x",
    displayName: "Twitter",
    icon: faSquareXTwitter,
    url: "https://twitter.com",
  },
];

const navigationList = [
  {
    id: "home-page",
    name: "Home",
    pathname: HOME_ROUTE,
    icon: null,
  },
  {
    id: "projects-page",
    name: "My Works",
    pathname: PROJECTS_ROUTE,
    icon: null,
  },
  {
    id: "about-me-page",
    name: "About Me",
    pathname: ABOUT_ROUTE,
    icon: null,
  },
];

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = React.useState("/");

  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div
      id="wrapper"
      className="dark:bg-gray-900 dark:text-gray-100 overflow-hidden"
    >
      <div id="container" className="w-screen h-screen flex">
        <div
          id="header"
          className="h-full w-[4rem] flex flex-col justify-between items-center"
        >
          <div id="display-pic" className="w-full h-16 grid place-items-center">
            <p>Mr</p>
          </div>

          <div
            id="social-links"
            className="w-full h-52 flex flex-col justify-evenly items-center"
          >
            {socialLinks.map(({ icon, url }) => {
              return (
                <Link key={uuidv4()} to={url} target="_blank">
                  <FontAwesomeIcon
                    icon={icon}
                    size="xl"
                    className="text-[#555555] dark:text-gray-200"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div
          id="navigation"
          className="min-w-[20rem] h-16 absolute top-0 left-[4.8rem] flex flex-row justify-evenly items-center"
        >
          {navigationList.map(({ pathname, name }) => {
            return (
              <div key={uuidv4()} className="h-full">
                <div
                  id="pointless-designer-strip"
                  className={`relative top-0 w-full h-[10%] bg-[#39AD48] ${activePage === pathname ? "visible" : "invisible"}`}
                />

                <Link
                  to={pathname}
                  className={`min-w-[4.2rem] h-[90%] grid place-items-center px-[0.4rem] font-LeagueSpartan ${activePage === pathname ? "bg-[#39AD4833] text-[#39AD48]" : "bg-auto"}`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>

        <div
          id="content-area"
          className="w-full h-full grid place-items-center"
        >
          <React.Suspense fallback={<Loading />}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
