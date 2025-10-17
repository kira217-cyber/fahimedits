import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <div className="mt-24 ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
