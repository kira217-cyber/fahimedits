import React from "react";
import { motion } from "framer-motion";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router";


const Process = () => {
  // Scroll animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="process"
      className="py-16 md:py-32 md:px-16 lg:px-24 bg-white overflow-hidden"
    >
    <div className="max-w-7xl mx-auto">
        {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 "
      >
        <span className="text-sm bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
          Simple Process
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mt-4">
          Shoot & Send,<span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight"> That’s It</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mt-3">
          Our process makes your video creation
          smooth, creative, and effortless.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
        >
          <div className="flex items-center bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white justify-center w-16 h-16 mb-6 rounded-full shadow-inner">
            <FaVideo size={24}/> 
          </div>
          <div className="max-w-xl mb-6 space-y-6">
            <h3 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let’s Create Something.{" "}
              <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">Send brief & footage.</span>
            </h3>
            <p className="text-base text-gray-700 md:text-lg">
              Share your vision — we’ll handle the rest, turning your ideas into stunning edits.
            </p>
          </div>
          <div>
            <button className="px-6 py-3 cursor-pointer bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] text-white rounded-full shadow-md transition-all duration-300">
              <Link to={'/process'}>Learn More</Link>
            </button>
          </div>
        </motion.div>

        {/* Right Images Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center -mx-4 lg:pl-8"
        >
          <div className="flex flex-col items-end px-3 space-y-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="object-cover rounded-2xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Team working"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="object-cover rounded-2xl shadow-lg w-20 h-20 sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Editing work"
            />
          </div>
          <div className="px-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="object-cover rounded-2xl shadow-lg w-40 h-40 sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Creative setup"
            />
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Process;
