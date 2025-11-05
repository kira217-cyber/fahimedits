import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiUploadCloud } from "react-icons/fi";
import video from "../../assets/video.jpeg";
import { FaCircle, FaHornbill } from "react-icons/fa";
import { Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";

const ShotSend = () => {
  const phoneNumber = "8801319242789"; // 👉 তোমার WhatsApp নাম্বার এখানে দাও (country code সহ)

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="bg-white py-20 md:px-10 lg:px-20">
      {/* 🔥 Animated Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white  rounded-full">
            <FiSend className="text-white text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
            Shoot & Send, <br />
          </span>{" "}
          That’s It.
        </h2>
      </motion.div>

      {/* 🎬 Content Section */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* 📩 Text + CTA */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to={"/contact"}>
              <button className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-transparent bg-clip-text px-11 py-3 rounded-lg font-semibold shadow-md transition-all">
                <span className="text-blue-400">
                  <MdOutlineMail className="text-xl" />
                </span>
                Share Idea
              </button>
            </Link>
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
        </div>
      </motion.div>
    </div>
  );
};

export default ShotSend;
