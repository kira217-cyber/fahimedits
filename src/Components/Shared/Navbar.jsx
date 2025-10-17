import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // ✅ corrected import
import { motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // animation effect for navbar load
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // ✅ path list with correct routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: "Process", path: "/process" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed max-w-7xl mx-auto top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] bg-[#090016] text-white rounded-full shadow-lg px-6 py-3 flex justify-between items-center"
    >
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          Fahim<span className="text-purple-500">Edits</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-purple-500"
                  : "text-gray-200 hover:text-purple-400"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Start a Project Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const section = document.getElementById("shot-send");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white cursor-pointer text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
          >
            START YOUR PROJECT
          </button>
          <div className="bg-white cursor-pointer hover:bg-purple-500 hover:text-white text-black p-2 rounded-full  transition">
            <FiArrowRight />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border border-gray-500 p-2 rounded-lg"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[70px] left-0 w-full bg-[#090016] rounded-3xl py-5 px-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive
                    ? "text-purple-500"
                    : "text-gray-200 hover:text-purple-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Button */}
          <div className="flex items-center gap-2 mt-4">
            <button className="bg-white hover:bg-purple-500 hover:text-white text-black text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition">
              START A PROJECT
            </button>
            <div className="bg-white hover:bg-purple-500 hover:text-white text-black p-2 rounded-full cursor-pointer transition">
              <FiArrowRight />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
