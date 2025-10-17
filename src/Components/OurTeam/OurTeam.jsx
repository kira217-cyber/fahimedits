import React from "react";
import { motion } from "framer-motion";
import Team from "../../assets/FahimTeam.png";

const OurTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 md:py-32 px-6 md:px-16 lg:px-24 text-center bg-gradient-to-br from-white to-purple-50 relative overflow-hidden"
    >
      {/* Floating Background Glow */}
      <motion.div
        className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

     <div className="max-w-7xl mx-auto">
       {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="space-y-4 mb-12 relative z-10"
      >
        <span className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-medium shadow-sm">
          Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          The Faces Behind <span className="text-purple-500">The Screens.</span>
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="max-w-2xl mx-auto text-gray-600"
        >
          Meet our talented and passionate team who bring creativity, dedication,
          and innovation to every project. Together, we turn ideas into visual
          masterpieces that captivate and inspire audiences worldwide.
        </motion.p>
      </motion.div>

      {/* Team Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10"
      >
        <img
          className="w-full h-full rounded-2xl shadow-lg hover:shadow-purple-200 transition-all duration-500"
          src={Team}
          alt="Our Team"
        />
      </motion.div>
     </div>
    </motion.section>
  );
};

export default OurTeam;
