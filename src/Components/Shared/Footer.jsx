import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
  FaCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
   const phoneNumber = "8801319242789"; // 👉 তোমার WhatsApp নাম্বার এখানে দাও (country code সহ)


const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#0A0217] text-white px-6 md:px-16 lg:px-24 py-12 rounded-t-3xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              Shot & Send <br /> Your Moments
            </h2>
            <button
              onClick={openWhatsApp}
              className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white leading-tight px-6 py-3 rounded-lg font-semibold transition-all"
            >
              {/* Online Dot + Glow Effect */}
              <span className="flex items-center justify-center">
                {/* Glow background */}
                <span className="absolute w-6 h-6 bg-green-500/60 rounded-full blur-lg drop-glow"></span>

                {/* Main green dot */}
                <FaCircle size={14} className="text-green-500 relative z-10" />
              </span>
              Get Instant Reply
            </button>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-gray-300">
              <Link
                className="cursor-pointer hover:text-white hover:underline "
                to={"/"}
              >
                <li className="mb-2">Home</li>
              </Link>
              <Link
                className="cursor-pointer hover:text-white hover:underline"
                to={"/process"}
              >
                <li className="mb-2">Process</li>
              </Link>
              <Link
                className="cursor-pointer hover:text-white hover:underline"
                to={"/contact"}
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to={"/terms&conditions"}
                  className="hover:underline hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to={"/refound-policy"}
                  className="hover:underline hover:text-white"
                >
                  Refound Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacy-policy"}
                  className="hover:underline hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Utilities</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Style guide</li>
              <li>Licenses</li>
              <li>Protected</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +88 013 1924 2789
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> fahimedits@123.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> 12 Elm street, Australia WCIX 0AA
              </li>
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
      </div>
    </motion.footer>
  );
};

export default Footer;
