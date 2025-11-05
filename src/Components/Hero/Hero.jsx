import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import FahimVideo from "../../assets/fahimvideo.mp4";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCircle,
} from "react-icons/fa";
import "../../index.css";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const Hero = () => {
  const phoneNumber = "8801319242789";
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Format Time (seconds → MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Update Time & Progress
  const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setCurrentTime(formatTime(current));
    setProgress((current / dur) * 100 || 0);
  };

  // On Video Loaded
  const handleLoadedMetadata = () => {
    setDuration(formatTime(videoRef.current.duration));
  };

  // Seek Video
  const handleSeek = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (clickX / width) * duration;
  };

  // Volume
  const handleVolume = (e) => {
    const val = e.target.value;
    videoRef.current.volume = val;
    setVolume(val);
    setIsMuted(val === "0");
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Show Controls on Hover / Click
  useEffect(() => {
    const container = videoRef.current.parentElement;
    let timeout;

    const show = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    container.addEventListener("mousemove", show);
    container.addEventListener("click", show);

    return () => {
      container.removeEventListener("mousemove", show);
      container.removeEventListener("click", show);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white"
    >
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center justify-between md:px-16 lg:px-12 py-6 md:py-32">
        {/* Left Section */}
        <div className="flex-1 space-y-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#4E8EFF] to-[#A072FF] bg-clip-text text-transparent leading-tight">
            Your On-Demand <br /> Video Editing Partner
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
            No locked contracts — one-off, monthly, or custom. Always built
            around your workflow.
          </p>
          {/* ---------- Buttons ---------- */}{" "}
          <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-4 ">
            {" "}
            {/* Start Project Button */}{" "}
            <Link
              to={"/contact"}
              className="flex cursor-pointer items-center gap-1 md:gap-2 border border-gray-200 px-4 py-3 md:px-6 md:py-4 text-sm md:text-base rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#4E8EFF] hover:to-[#A072FF] transition hover:text-white"
            >
              {" "}
              Share Idea{" "}
              <span className="text-base md:text-xl">
                {" "}
                <GoArrowRight />{" "}
              </span>{" "}
            </Link>{" "}
            {/* Instant Reply Button (Bouncing Animation) */}{" "}
            <motion.button
              onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
              animate={{ y: [0, -4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="flex cursor-pointer bg-gradient-to-r text-white from-[#4E8EFF] to-[#A072FF] items-center gap-1.5 md:gap-2 border border-gray-200 px-4 py-3 md:px-16 md:py-4 text-sm md:text-base rounded-full font-semibold transition shadow-md"
            >
              {" "}
              {/* Online Dot + Glow Effect */}{" "}
              <span className="flex items-center justify-center">
                {" "}
                {/* Glow background */}{" "}
                <span className="absolute w-6 h-6 bg-green-500/70 rounded-full blur-lg drop-glow"></span>{" "}
                {/* Main green dot */}{" "}
                <FaCircle size={14} className="text-green-500 relative z-10" />{" "}
              </span>{" "}
              Instant Reply{" "}
            </motion.button>{" "}
          </div>
        </div>

        {/* Right Section - Video with Time + Click to Pause */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end mb-10 lg:mb-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full h-60 md:h-[420px] rounded-3xl shadow-xl overflow-hidden bg-black">
            {/* Video */}
            <video
              ref={videoRef}
              src={FahimVideo}
              loop
              playsInline
              className="w-full h-full"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay} // Click anywhere to pause/play
            />

            {/* Controls Overlay */}
            <div
              className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                showControls || !isPlaying ? "opacity-100" : "opacity-0"
              } bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none`}
            >
              {/* Progress Bar + Time */}
              <div className="flex items-center gap-3 mb-3 pointer-events-auto">
                <div className="flex-1 relative">
                  <div
                    ref={progressRef}
                    className="h-1 bg-white/30 rounded-full cursor-pointer"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-white text-xs font-medium">
                  {currentTime} / {duration}
                </span>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white pointer-events-auto">
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full cursor-pointer bg-white/20 hover:bg-white/40 transition"
                  >
                    {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                  </button>

                  {/* Volume */}
                  <div className="flex items-center  gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full cursor-pointer bg-white/20 hover:bg-white/40 transition"
                    >
                      {isMuted || volume === 0 ? (
                        <FaVolumeMute size={18} />
                      ) : (
                        <FaVolumeUp size={18} />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolume}
                      className="w-16 h-1 accent-white rounded-full cursor-pointer"
                    />
                  </div>
                </div>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full cursor-pointer bg-white/20 hover:bg-white/40 transition"
                >
                  <FaExpand size={18} />
                </button>
              </div>
            </div>

            {/* Center Play Icon (Only when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-6 rounded-full cursor-pointer bg-white/30 backdrop-blur-sm">
                  <div className="hidden md:flex">
                    <FaPlay size={48} className="text-white drop-shadow-lg" />
                  </div>
                   <div className="md:hidden">
                    <FaPlay size={16} className="text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
