import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import WhatsAppFloating from "../Components/WhatsAppFloating/WhatsAppFloating";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <WhatsAppFloating></WhatsAppFloating>
      <Navbar></Navbar>
      <div className="mt-24 px-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
