import React, { useState, useRef, useEffect, useCallback } from "react";
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

const LazyYouTube = ({ embedUrl, title }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load a bit early
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Extract video ID for thumbnail
  const videoId = embedUrl.match(/embed\/([a-zA-Z0-9_-]+)/)?.[1];
  const thumbnail = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden rounded-2xl">
      {loaded ? (
        <iframe
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full bg-gray-200 flex items-center justify-center"
          style={{
            backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!thumbnail && <div className="text-gray-500">Loading...</div>}
        </div>
      )}
    </div>
  );
};

const OurWork = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);

  const updateSlidesToShow = useCallback(() => {
    const w = window.innerWidth;
    setSlidesToShow(w < 640 ? 1 : w < 1024 ? 2 : 3);
  }, []);

  const debounce = (func, wait) => {
    let t;
    return () => {
      clearTimeout(t);
      t = setTimeout(func, wait);
    };
  };

  useEffect(() => {
    updateSlidesToShow();
    const onResize = debounce(updateSlidesToShow, 100);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateSlidesToShow]);

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
    beforeChange: (_, next) => setCenterIndex(next),
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "20px" } },
    ],
  };

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="py-8 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 text-center bg-white relative overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto overflow-x-hidden relative">
        {/* Header */}
        <div className="space-y-4 mt-2 mb-8 sm:mb-12">
          <span className="text-sm bg-gradient-to-r from-[#7683FF] to-[#C77DFF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
            Video Editing Studio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Our Made <span className="bg-gradient-to-r from-[#7683FF] to-[#C77DFF] bg-clip-text text-transparent leading-tight">Video Projects</span>
          </h2>
          <p className="max-w-lg sm:max-w-xl mx-auto text-sm sm:text-base text-gray-600">
            We craft stunning videos that inspire, engage, and tell powerful stories.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 sm:left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg border border-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white rounded-full p-2 sm:p-3 z-50 transition-all hover:scale-110"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-2 sm:right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 bg-white shadow-md hover:shadow-lg border border-purple-100 text-purple-600 hover:bg-purple-500 hover:text-white rounded-full p-2 sm:p-3 z-50 transition-all hover:scale-110"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {videos.map((video, idx) => {
            const isCenter = idx === centerIndex;
            const scale = isCenter
              ? "scale-100 z-30 opacity-100"
              : "scale-90 opacity-50 sm:scale-95";

            return (
              <div
                key={video.id}
                className={`px-2 sm:px-3 py-6 sm:py-8 transition-all duration-700 ease-in-out ${scale} overflow-hidden`}
              >
                <div className="overflow-hidden shadow-xl bg-white border border-purple-100 hover:shadow-purple-200 transition-shadow duration-500 rounded-2xl h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px]">
                  <LazyYouTube
                    embedUrl={video.embedUrl}
                    title={`Video ${video.id}`}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </motion.section>
  );
};

export default OurWork;