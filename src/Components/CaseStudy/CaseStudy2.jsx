import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CaseStudy = () => {
  const videos = [
    "https://www.youtube.com/embed/5dlxsN0-3FY?si=ARGwylO4Tw8vTD4b",
    "https://www.youtube.com/embed/Wx29fNeig6I?si=n97dyqiuglxhqBTl",
    "https://www.youtube.com/embed/7nrYfXwkDLE?si=UgS-SrEhK5bEUlRe",
    "https://www.youtube.com/embed/zhxjO_HoXJU?si=6tyfk3-GaFE6yyit",
    "https://www.youtube.com/embed/vIyhqfN3tOA?si=aOTVRAra6pOyVeuY",
  ];

  const swiperRef = useRef(null);

  // প্রতিটি iframe এর ref
  const iframeRefs = useRef([]);

  useEffect(() => {
    // YouTube IFrame API লোড
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let players = [];

    window.onYouTubeIframeAPIReady = () => {
      iframeRefs.current.forEach((iframe, index) => {
        if (iframe) {
          const player = new window.YT.Player(iframe, {
            events: {
              onStateChange: (event) => {
                const swiper = swiperRef.current;

                if (event.data === window.YT.PlayerState.PLAYING) {
                  // ভিডিও চালু → স্লাইডার থামাও
                  swiper?.autoplay?.stop();
                }

                if (
                  event.data === window.YT.PlayerState.PAUSED ||
                  event.data === window.YT.PlayerState.ENDED
                ) {
                  // ভিডিও পজ/শেষ → স্লাইডার চালু করো (৪ সেকেন্ড)
                  swiper?.autoplay?.start();
                  if (swiper?.params?.autoplay) {
                    swiper.params.autoplay.delay = 4000;
                  }
                }
              },
            },
          });
          players.push(player);
        }
      });
    };

    return () => {
      players.forEach((p) => p.destroy());
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div
      id="case-study"
      className="max-w-7xl mx-auto py-16 md:py-32 text-center bg-white relative"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <span className="text-lg bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight border border-gray-200 px-4 py-1 rounded-full font-medium">
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

      {/* Desktop Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4"
      >
        {/* ... আপনার ডেস্কটপ iframe গুলো ... */}
        <div className="sm:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden">
          <iframe
            src={videos[0]}
            title="Video 1"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[1]}
            title="Video 2"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[2]}
            title="Video 3"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[3]}
            title="Video 4"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src={videos[4]}
            title="Video 5"
            loading="lazy"
            allowFullScreen
            className="w-full h-64 md:h-80 rounded-2xl"
          ></iframe>
        </div>
      </motion.div>

      {/* Mobile Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="block sm:hidden px-4 relative"
      >
        {/* Arrows */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronLeft className="text-2xl text-gray-700" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <FiChevronRight className="text-2xl text-gray-700" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
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
                  ref={(el) => (iframeRefs.current[index] = el)}
                  src={`${video}&enablejsapi=1&playsinline=1`}
                  title={`Case Study Video ${index + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56 rounded-2xl"
                  // কোনো ওভারলে নেই → ক্লিক করলে ভিডিও প্লে হবে
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
