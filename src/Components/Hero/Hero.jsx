import React from "react";
import { motion } from "framer-motion";
import FahimVideo from "../../assets/fahimvideo.mp4"; // তোমার নিজের ভিডিও path
import { FaHornbill } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white"
    >
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center justify-between px-2 md:px-16 lg:px-12 py-6 md:py-32">
        {/* ---------- Left Section ---------- */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#7683FF] to-[#C77DFF] bg-clip-text text-transparent leading-tight">
            Your On-Demand <br /> Video Editing Partner
          </h1>

          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
            No locked contracts — one-off, monthly, or custom. Always built
            around your workflow.
          </p>

          {/* ---------- Buttons ---------- */}
          <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-4 ">
            {/* Start Project Button */}
            <button
              onClick={() => {
                const section = document.getElementById("shot-send");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex cursor-pointer items-center gap-1 md:gap-2 border border-gray-200 px-2 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#7683FF] hover:to-[#C77DFF] transition hover:text-white"
            >
              Start Your Project <span className="text-base md:text-xl">→</span>
            </button>

            {/* Instant Reply Button (Bouncing Animation) */}
            <motion.button
              onClick={() => {
                const section = document.getElementById("shot-send");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="flex cursor-pointer bg-gradient-to-r text-white from-[#7683FF] to-[#C77DFF] items-center gap-1.5 md:gap-2 border border-gray-200 px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full font-semibold transition shadow-md"
            >
              Instant Reply{" "}
              <span className="text-base md:text-xl">
                <FaHornbill />
              </span>
            </motion.button>
          </div>
        </div>

        {/* ---------- Right Section (Video) ---------- */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative h-64 md:w-160 md:h-120 overflow-hidden rounded-3xl shadow-xl">
            <video
              src={FahimVideo}
              autoPlay
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
