import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Autoplay module added
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CaseStudy = () => {
  const videos = [
    "https://www.youtube.com/embed/zMiFRVGeRVs?si=QoTjm2U0dA1beEz9",
    "https://www.youtube.com/embed/XOBx-LgS2PQ?si=HXS1aOWf6AmeSv7d",
    "https://www.youtube.com/embed/rFgD9MuI51c?si=MMhVegAtrZOAEbbK",
    "https://www.youtube.com/embed/K2ys12sqaQc?si=LQxnAyYUyyNh7KVt",
    "https://www.youtube.com/embed/xgr9puQMlik?si=O_QvlwbFqGyET2BB",
  ];

  const swiperRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto py-16 md:py-32 text-center bg-white relative">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <span className="text-sm bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
          Case Study
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
          Client&apos;s{" "}
          <span className="bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
            Stories
          </span>
        </h1>
        <p className="mt-4 text-gray-700 md:text-lg">
          Their peace of mind, delivered.
        </p>
      </motion.div>

      {/* ✅ Desktop/Tablet Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4"
      >
        <div className="sm:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden">
          <iframe
            src={videos[0]}
            title="Case Study Video 1"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[1]}
            title="Case Study Video 2"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[2]}
            title="Case Study Video 3"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[3]}
            title="Case Study Video 4"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[4]}
            title="Case Study Video 5"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
      </motion.div>

      {/* ✅ Mobile Slider (Swiper with Autoplay + Arrows + Dots) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="block sm:hidden px-4 relative"
      >
        {/* Arrow Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronLeft className="text-2xl text-gray-700" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronRight className="text-2xl text-gray-700" />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true} // ✅ Infinite loop
          autoplay={{
            delay: 3000, // ✅ 3 seconds
            disableOnInteraction: false, // autoplay বন্ধ না হয় ইউজার টাচ করলে
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="pb-8"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={video}
                  title={`Case Study Video ${index + 1}`}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-56 rounded-2xl"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
