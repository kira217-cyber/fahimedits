import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiUploadCloud } from "react-icons/fi";
import video from "../../assets/video.png"

const ShotSend = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-20 px-6 md:px-10 lg:px-20">
      {/* 🔥 Animated Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full">
            <FiSend className="text-purple-600 text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          <span className="text-purple-600">Shot & Send</span> Your Moments
        </h2>

        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Got amazing clips or raw footage? Just send them to us! We’ll turn
          your videos into cinematic magic with professional editing,
          transitions, and effects.
        </p>
      </motion.div>

      {/* 🎬 Content Section */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl shadow-lg p-8 md:p-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* 🎥 Video / Image Preview */}
        <div className="w-full md:w-1/2">
          <img
            src={video}
            alt="Video editing"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* 📩 Text + CTA */}
        <div className="w-full md:w-1/2 space-y-5">
          <h3 className="text-2xl font-semibold text-gray-900">
            Fast. Simple. Creative.
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Upload your raw videos, share your ideas, and our expert editors
            will craft cinematic edits that match your vision. We support all
            formats and ensure top-quality output within 48 hours.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="flex cursor-pointer items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-all">
              <FiUploadCloud className="text-xl" />
              Share Idea
            </button>
            <button className="flex cursor-pointer items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
              <FiSend className="text-xl" />
              Get Instant Quote
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
         Supported formats: MP4, MOV, AVI — up to 2GB per file.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ShotSend;
