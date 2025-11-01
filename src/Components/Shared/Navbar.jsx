import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // ✅ corrected import
import { motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed max-w-7xl mx-auto top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%]
       rounded-full shadow-lg px-6 py-3 flex justify-between items-center
      bg-white/25 backdrop-blur-lg border border-white/30" // ✅ Unified glass effect
    >
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-xl cursor-pointer md:text-2xl font-bold tracking-tight text-black">
          Fahim
          <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent">
            Edits
          </span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-md font-medium transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent"
                  : "hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] bg-clip-text hover:text-transparent"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Start a Project Button */}
        <div className="flex items-center gap-2">
          <Link to={"/contact"}>
          <button
            className="bg-white flex items-center gap-2 cursor-pointer text-black text-sm font-semibold px-4 py-2 rounded-full border border-black/10 hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white"
          >
             {/* Online Dot + Glow Effect */}
              <span className="flex items-center justify-center">
                {/* Glow background */}
                <span className="absolute w-6 h-6 bg-green-500/60 rounded-full blur-lg drop-glow"></span>

                {/* Main green dot */}
                <FaCircle size={14} className="text-green-500 relative z-10" />
              </span> Share Idea
          </button></Link>
          <Link to={"/contact"}>
            <div className="bg-white border border-black/10 cursor-pointer hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white p-2 rounded-full">
              <FiArrowRight />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border border-gray-500 p-2 text-black rounded-lg bg-white/30 backdrop-blur-lg"
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
          className="absolute top-[70px] left-0 w-full bg-white/90 backdrop-blur-3xl shadow-xl rounded-3xl py-5 px-6 flex flex-col gap-4 md:hidden" // ✅ Same glass style as desktop
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent"
                    : "text-gray-800 hover:bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Button */}
          <div className="flex items-center gap-2 mt-4">
            <Link to={"/contact"}>
              <button className="bg-gradient-to-r flex items-center gap-2 from-[#4E8EFF] to-[#A072FF]  text-white  text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition">
                {" "}
                {/* Online Dot + Glow Effect */}
                <span className="flex items-center justify-center">
                  {/* Glow background */}
                  <span className="absolute w-6 h-6 bg-green-500/60 rounded-full blur-lg drop-glow"></span>

                  {/* Main green dot */}
                  <FaCircle
                    size={14}
                    className="text-green-500 relative z-10"
                  />
                </span>
                Share Idea
              </button>
            </Link>
            <Link to={"/contact"}>
              <div className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white p-2 rounded-full cursor-pointer transition">
                <FiArrowRight />
              </div>{" "}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
