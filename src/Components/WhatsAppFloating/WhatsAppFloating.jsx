import React from "react";
import { FaCircle, FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  const phoneNumber = "8801319242789"; // 👉 তোমার WhatsApp নাম্বার এখানে দাও (country code সহ)


const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 lg:bottom-20 cursor-pointer lg:right-20 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
      aria-label="Chat on WhatsApp"
    > <div className="relative">
      {/* Online Dot + Glow Effect */}
              <span className="flex absolute bottom-8 left-5 items-center justify-center">
                {/* Glow background */}
                <span className="absolute w-6 h-6 bg-green-500/60 rounded-full blur-lg drop-glow"></span>

                {/* Main green dot */}
                <FaCircle size={14} className="text-green-500 relative z-10" />
              </span>
      <FaWhatsapp size={30} />
    </div>
    </button>
  );
};

export default WhatsAppFloating;
