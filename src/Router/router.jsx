import { path } from "framer-motion/client";
import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Process from "../Pages/Process";
import TermsAndConditions from "../Pages/TermsAndConditions";
import RefoundPolicy from "../Pages/RefoundPolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

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
        path: "terms&conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/refound-policy",
        element: <RefoundPolicy></RefoundPolicy>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
]);
