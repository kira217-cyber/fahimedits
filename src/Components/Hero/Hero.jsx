import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
  FaDownload,
} from "react-icons/fa";
import profile from "../../assets/fahimbhai.jpg"; // তোমার নিজের ছবির path দাও

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-white to-purple-50"
    >
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center justify-between px-6 md:px-16 lg:px-24 py-16 md:py-32">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-lg font-medium text-gray-600">I am Fahim</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 leading-tight">
            Professional <br /> Video Editor
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
            I break down complex user experience problems to create
            integrity-focused solutions that connect millions of people.
          </p>

          {/* Buttons & Social */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button onClick={() => {
              const section = document.getElementById("shot-send");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }} className="flex cursor-pointer items-center gap-2 border border-purple-500 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition">
              Start Your Project <span className="text-xl">→</span>
            </button>
          </div>

          {/* Counters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div>
              <h2 className="text-4xl font-bold text-purple-600">
                <CountUp end={7} duration={2} />+
              </h2>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-purple-600">
                <CountUp end={500} duration={2} />+
              </h2>
              <p className="text-gray-600 text-sm">Project Completed</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-purple-600">
                <CountUp end={1500} duration={2} />+
              </h2>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          whileHover={{ rotate: 0, scale: 1.02 }}
          initial={{ rotate: -6 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-3xl shadow-xl">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      {/* Left Section */}
    </motion.section>
  );
};

export default Hero;
