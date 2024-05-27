import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RootRouter from "./Route.tsx";
import Loading from "./Components/Loading/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={RootRouter} fallbackElement={<Loading />} />,
);
