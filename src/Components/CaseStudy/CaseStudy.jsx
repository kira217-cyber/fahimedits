import React from "react";
import { motion } from "framer-motion";

const CaseStudy = () => {
  return (
    <section
      id="case-study"
      className="bg-white py-16 flex justify-center items-center flex-col"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <span className="text-lg bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
          Case Study
        </span>
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 mt-4 leading-tight">
          Client&apos;s{" "}
          <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent">
            Stories
          </span>
        </h1>
         <p className="mt-4 text-gray-700 md:text-lg">
          Their peace of mind, delivered.
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/5dlxsN0-3FY?rel=0&autoplay=0&modestbranding=1&showinfo=0"
          title="Case Study Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
};

export default CaseStudy;
