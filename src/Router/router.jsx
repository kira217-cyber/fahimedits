import { path } from "framer-motion/client";
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Process from "../Pages/Process";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "process",
        element: <Process></Process>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>,
      },
    ],
  },
]);
