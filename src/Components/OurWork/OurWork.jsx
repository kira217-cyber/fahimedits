import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [
  { id: 1, embedUrl: "https://www.youtube.com/embed/Con9guwQbCo?si=g8BpDaZ8eDNWmkGY" },
  { id: 2, embedUrl: "https://www.youtube.com/embed/mdQH6NrE0ZY?si=KVlvVSP5nIZyoXUp" },
  { id: 3, embedUrl: "https://www.youtube.com/embed/7nrYfXwkDLE?si=yiw_iexLFI8CHgyM" },
  { id: 4, embedUrl: "https://www.youtube.com/embed/X7FCOt-CFC8?si=483DAnk_cJRhvbez" },
  { id: 5, embedUrl: "https://www.youtube.com/embed/hWDBTgDtS6U?si=BrPs2gMRKri2TKWF" },
  { id: 6, embedUrl: "https://www.youtube.com/embed/yzFlTD_Xmx4?si=OXMhn85G-M3JTU3N" },
  { id: 7, embedUrl: "https://www.youtube.com/embed/90swdeTvNeM?si=VSA-ir3woUSPnJ34" },
  { id: 8, embedUrl: "https://www.youtube.com/embed/aUs4BbNwreE?si=PXoDsAACinc6511m" },
  { id: 9, embedUrl: "https://www.youtube.com/embed/eXHVV2xMAFY?si=S1MawZisxw4QltBr" },
  { id: 10, embedUrl: "https://www.youtube.com/embed/G8XNUGoDhWg?si=4lpKQ-5segoI71dy" },
];

const OurWork = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 800,
    beforeChange: (current, next) => setCenterIndex(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // ✅ Handle next and previous navigation
  const goNext = () => {
    sliderRef.current.slickNext();
  };

  const goPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 md:py-32 px-6 md:px-16 lg:px-24 text-center bg-gradient-to-br from-white to-purple-50 relative"
    >
     <div className="max-w-7xl mx-auto">
       {/* Section Header */}
      <div className="space-y-4 mb-12 ">
        <span className="text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full font-medium">
          Video Editing Studio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Our Made <span className="text-purple-500">Video Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          We craft stunning videos that inspire, engage, and tell powerful stories.
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute cursor-pointer left-2 md:left-60 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg border border-purple-100 text-purple-600 rounded-full p-3 z-50 transition-transform hover:scale-110"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Video Slider */}
      <Slider ref={sliderRef} {...settings}>
        {videos.map((video, index) => {
          const isCenter = index === centerIndex;
          const scale = isCenter ? "scale-105 z-30 opacity-100" : "scale-90 opacity-50";

          return (
            <motion.div
              key={video.id}
              className={`px-3 py-8 transition-all duration-700 ease-in-out ${scale}`}
            >
              <div className="overflow-hidden shadow-xl bg-white border border-purple-100 hover:shadow-purple-200 transition-all duration-500 rounded-2xl">
                <iframe
                  width="100%"
                  height="350"
                  src={video.embedUrl}
                  title={`YouTube video ${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[450px]"
                ></iframe>
              </div>
            </motion.div>
          );
        })}
      </Slider>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute cursor-pointer right-2 md:right-60 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg border border-purple-100 text-purple-600 rounded-full p-3 z-50 transition-transform hover:scale-110"
      >
        <FiChevronRight size={24} />
      </button>
     </div>
    </motion.section>
  );
};

export default OurWork;
