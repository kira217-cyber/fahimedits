import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#0A0217] text-white px-6 md:px-16 lg:px-24 py-12 rounded-t-3xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            Ready to take <br /> the next step?
          </h2>
          <button className="flex items-center gap-2 hover:bg-purple-500 hover:text-white cursor-pointer bg-white text-black px-5 py-2 rounded-full font-semibold transition">
            START A PROJECT <span className="text-xl">→</span>
          </button>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Learn</h3>
          <ul className="space-y-2 text-gray-300">
            <Link className="cursor-pointer hover:text-purple-500 hover:underline" to={'/'}><li>Home</li></Link> 
            <Link className="cursor-pointer hover:text-purple-500 hover:underline" to={'/portfolio'}><li>Portfolio</li></Link> 
            <Link className="cursor-pointer hover:text-purple-500 hover:underline" to={'/process'}><li>Process</li></Link> 
            <Link className="cursor-pointer hover:text-purple-500 hover:underline" to={'/about'}><li>About Us</li></Link> 
            <Link className="cursor-pointer hover:text-purple-500 hover:underline" to={'/contact'}><li>Contact</li></Link> 
            <a className="cursor-pointer  flex gap-1 items-center"><li className="hover:text-purple-500 hover:underline">Start a Project</li> <span className="text-xl">→</span></a> 
          
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Works</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Home</li>
            <li>Resource</li>
          </ul>
        </div>

        {/* Utilities */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Utilities</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Style guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>Protected</li>
            <li>Not found</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +88 013 1924 2789</li>
            <li className="flex items-center gap-2"><FaEnvelope /> fahimedits@123.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 12 Elm street, Australia WCIX 0AA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4">
          <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </div>
          <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
            <FaInstagram />
          </div>
          <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
            <FaLinkedinIn />
          </div>
          <div className="w-10 cursor-pointer h-10 flex items-center justify-center bg-transparent border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
            <RiYoutubeFill />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center border-t border-gray-800 pt-4 text-gray-400 text-sm">
        <p>
          Copyright © FahimEdits <br />
          Designed by raihan | Powered by FahimEdits
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
