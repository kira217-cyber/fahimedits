import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // you can change to "auto" if you don't want smooth scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
