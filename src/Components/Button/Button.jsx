import React from "react";
import { Link } from "react-router"; // Correct import
import { MdOutlineMail } from "react-icons/md";
import { FaCircle } from "react-icons/fa"; // Fixed import
import "../../index.css";
const Button = () => {
  // WhatsApp Function
  const openWhatsApp = () => {
    const phoneNumber = "8801319242789"; // Change if needed
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="flex justify-center">
      {/* 📩 Text + CTA */}
      <div className="w-full md:w-1/2 space-y-5">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
    </div>
  );
};

export default Button;
