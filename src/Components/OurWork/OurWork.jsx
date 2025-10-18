import React, { useState, useRef, useEffect } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  // Update slides based on screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  // Debounce resize for performance
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    updateSlidesToShow();
    const handleResize = debounce(updateSlidesToShow, 100);
    window.addEventListener("resize", handleResize);

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: slidesToShow === 1 ? "10px" : slidesToShow === 2 ? "20px" : "0px",
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 800,
    beforeChange: (current, next) => setCenterIndex(next),
  };

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-center bg-gradient-to-br from-white to-purple-50 relative min-h-screen overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto overflow-x-hidden relative">
        {/* Header */}
        <div className="space-y-4 mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm bg-purple-100 text-purple-600 px-3 sm:px-4 py-1 rounded-full font-medium">
            Video Editing Studio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Our Made <span className="text-purple-500">Video Projects</span>
          </h2>
          <p className="max-w-lg sm:max-w-xl mx-auto text-sm sm:text-base text-gray-600">
            We craft stunning videos that inspire, engage, and tell powerful stories.
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute hover:bg-purple-500 cursor-pointer left-2 sm:left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg border border-purple-100 text-purple-600 hover:text-white rounded-full p-2 sm:p-3 z-50 transition-transform hover:scale-110 "
        >
          <FiChevronLeft size={20} className="sm:w-6 sm:h-6 " />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {videos.map((video, index) => {
            const isCenter = index === centerIndex;
            const scale = isCenter ? "scale-100 z-30 opacity-100" : "scale-90 opacity-50 sm:scale-95";

            return (
              <motion.div
                key={video.id}
                className={`px-2 sm:px-3 py-6 sm:py-8 transition-all duration-700 ease-in-out ${scale} overflow-hidden`}
              >
                <div className="overflow-hidden shadow-xl bg-white border border-purple-100 hover:shadow-purple-200 transition-all duration-500 rounded-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.embedUrl}
                    title={`YouTube video ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px]"
                  ></iframe>
                </div>
              </motion.div>
            );
          })}
        </Slider>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-2 sm:right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-purple-500 hover:text-white cursor-pointer hover:shadow-lg border border-purple-100 text-purple-600 rounded-full p-2 sm:p-3 z-50 transition-transform hover:scale-110"
        >
          <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </motion.section>
  );
};

export default OurWork;
