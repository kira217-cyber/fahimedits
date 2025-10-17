import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const WeEdit = () => {
  // ✅ All YouTube Videos (your embed links)
  const videos = [
    {
      title: "Creative Motion Edit",
      desc: "Transforming your raw clips into cinematic beauty.",
      src: "https://www.youtube.com/embed/8m-pfxd8eLY?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
    {
      title: "Visual Storytelling",
      desc: "We bring your story to life through creative visuals.",
      src: "https://www.youtube.com/embed/rEajo_sJ0to?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
    {
      title: "Corporate Highlight",
      desc: "Professional editing for corporate brand identity.",
      src: "https://www.youtube.com/embed/G4oLJzqLpmI?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
    {
      title: "Wedding Cinematic",
      desc: "Making your big day look like a movie scene.",
      src: "https://www.youtube.com/embed/2krYGryUli4?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
    {
      title: "Music Video Cut",
      desc: "Stylish transitions, beats, and color grading.",
      src: "https://www.youtube.com/embed/t_oIkjMeuw0?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
    {
      title: "Travel Vlog Magic",
      desc: "We edit your adventures to perfection.",
      src: "https://www.youtube.com/embed/7nrYfXwkDLE?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1",
      type: "youtube",
    },
  ];

  return (
    <div className="px-4 py-20 mx-auto max-w-7xl md:px-24 lg:px-8">
      {/* ✨ Section Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4 mb-12">
          <span className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-medium">
            We Edit It All
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Our Creative <span className="text-purple-500">Editing Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We turn your raw moments into cinematic masterpieces.
          </p>
        </div>
      </motion.div>

      {/* 🎬 Video Grid */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-56 md:h-64 xl:h-80">
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-t-lg"
              ></iframe>
            </div>

            {/* 📄 Video Info */}
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {video.title}
              </h3>
              <p className="text-gray-600">{video.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔗 See More Button */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Link
          to={'our-work'}
          className="inline-flex items-center px-5 py-3 text-white bg-purple-500 rounded-lg font-semibold transition-all hover:bg-purple-700"
        >
          See More Works
          <svg
            className="inline-block w-4 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default WeEdit;
