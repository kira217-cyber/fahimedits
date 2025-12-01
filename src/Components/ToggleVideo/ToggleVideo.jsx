// ToggleVideo.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import video from "../../assets/fahimvideo.mp4";
import { TbCaretLeftRightFilled } from "react-icons/tb";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

const BEFORE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const AFTER_VIDEO = video;

const ToggleVideo = () => {
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [scrubDragging, setScrubDragging] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);

  const [isControlVisible, setIsControlVisible] = useState(true); // NEW
  const isAfterVisible = sliderPos >= 50;

  // ============================
  // Mobile Tap to toggle control bar
  // ============================
  const handleScreenTap = () => {
    setIsControlVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!isControlVisible || window.innerWidth >= 768) return;

    const timer = setTimeout(() => setIsControlVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [isControlVisible]);

  // ============================
  // Slider Handler
  // ============================
  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );
    setSliderPos(percent);
  }, []);

  const handleMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || e.touches?.[0]?.clientX;
      if (clientX) requestAnimationFrame(() => updateSlider(clientX));
    },
    [isDragging, updateSlider]
  );

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging, handleMove]);

  // ============================
  // Duration
  // ============================
  useEffect(() => {
    const beforeVid = beforeVideoRef.current;
    const afterVid = afterVideoRef.current;

    const handleLoaded = () => {
      const maxDur = Math.max(
        beforeVid?.duration || 0,
        afterVid?.duration || 0
      );
      setDuration(maxDur);
    };

    beforeVid?.addEventListener("loadedmetadata", handleLoaded);
    afterVid?.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      beforeVid?.removeEventListener("loadedmetadata", handleLoaded);
      afterVid?.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, []);

  useEffect(() => {
    const active = isAfterVisible
      ? afterVideoRef.current
      : beforeVideoRef.current;

    if (!active) return;

    const interval = setInterval(() => setCurrentTime(active.currentTime), 150);

    return () => clearInterval(interval);
  }, [isAfterVisible]);

  // ============================
  // Sync + Settings
  // ============================
  useEffect(() => {
    const before = beforeVideoRef.current;
    const after = afterVideoRef.current;

    before.volume = after.volume = isMuted ? 0 : volume;
    before.playbackRate = after.playbackRate = playbackRate;

    if (isAfterVisible) {
      after.play().catch(() => {});
      before.pause();
    } else {
      before.play().catch(() => {});
      after.pause();
    }

    if (Math.abs(before.currentTime - after.currentTime) > 0.4) {
      after.currentTime = before.currentTime;
    }
  }, [isAfterVisible, isMuted, volume, playbackRate]);

  // ============================
  // Controls
  // ============================
  const togglePlayPause = () => {
    const v = isAfterVisible ? afterVideoRef.current : beforeVideoRef.current;
    v.paused ? v.play() : v.pause();
  };

  const restart = () => {
    beforeVideoRef.current.currentTime = 0;
    afterVideoRef.current.currentTime = 0;
  };

  const startScrub = () => setScrubDragging(true);
  const stopScrub = () => setScrubDragging(false);

  const handleScrubMove = (e) => {
    if (!scrubDragging || !containerRef.current) return;

    const rect = e.target.getBoundingClientRect();
    const position = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, position / rect.width));
    const newTime = percent * duration;

    beforeVideoRef.current.currentTime = newTime;
    afterVideoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (scrubDragging) {
      window.addEventListener("mousemove", handleScrubMove);
      window.addEventListener("mouseup", stopScrub);
    }
    return () => {
      window.removeEventListener("mousemove", handleScrubMove);
      window.removeEventListener("mouseup", stopScrub);
    };
  }, [scrubDragging]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // ============================
  // UI Rendering
  // ============================
  return (
    <div
      className="relative w-full max-w-6xl mx-auto bg-black rounded-2xl overflow-hidden shadow-xl"
      onClick={handleScreenTap} // NEW
    >
      <div ref={containerRef} className="relative aspect-video select-none">
        {/* BEFORE video */}
        <video
          ref={beforeVideoRef}
          src={BEFORE_VIDEO}
          className="absolute inset-0 w-full h-full object-contain"
          loop
          playsInline
          preload="auto"
        />

        {/* AFTER video */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
          }}
        >
          <video
            ref={afterVideoRef}
            src={AFTER_VIDEO}
            className="absolute inset-0 w-full h-full object-contain"
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="absolute inset-y-0 w-1 md:w-2 bg-white/90 z-40 cursor-ew-resize"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
            <TbCaretLeftRightFilled />
          </div>
        </div>

        {/* CONTROL BAR (mobile hide/show) */}
        {isControlVisible && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 p-1 md:p-4 transition-opacity duration-300">
            {/* TIMELINE */}
            {/* TIMELINE */}
            <div className="flex items-center gap-2 text-white text-xs md:text-sm">
              <span>{formatTime(currentTime)}</span>

              <div
                className="flex-1 h-1 md:h-2 bg-white/25 rounded-full relative cursor-pointer"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  startScrub();
                  handleScrubMove(e);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!containerRef.current) return;

                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const percent = Math.max(0, Math.min(1, clickX / rect.width));

                  // ✅ দুই ভিডিও duration ভিন্ন হলে percent অনুযায়ী set করা
                  const beforeNewTime =
                    percent * (beforeVideoRef.current?.duration || 0);
                  const afterNewTime =
                    percent * (afterVideoRef.current?.duration || 0);

                  beforeVideoRef.current.currentTime = beforeNewTime;
                  afterVideoRef.current.currentTime = afterNewTime;

                  // currentTime update (slider filled part show করার জন্য, active video duration অনুযায়ী)
                  const activeDuration =
                    sliderPos >= 50
                      ? afterVideoRef.current?.duration || 1
                      : beforeVideoRef.current?.duration || 1;

                  setCurrentTime(percent * activeDuration);
                }}
              >
                {/* Filled part */}
                <div
                  className="absolute h-full cursor-pointer bg-emerald-500 rounded-full transition-all duration-150 ease-linear"
                  style={{
                    width: `${
                      sliderPos >= 50
                        ? (afterVideoRef.current?.currentTime /
                            (afterVideoRef.current?.duration || 1)) *
                          100
                        : (beforeVideoRef.current?.currentTime /
                            (beforeVideoRef.current?.duration || 1)) *
                          100
                    }%`,
                  }}
                ></div>

                {/* Current Time Handle */}
                <div
                  className="absolute cursor-pointer top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg pointer-events-none"
                  style={{
                    left: `${
                      sliderPos >= 50
                        ? (afterVideoRef.current?.currentTime /
                            (afterVideoRef.current?.duration || 1)) *
                          100
                        : (beforeVideoRef.current?.currentTime /
                            (beforeVideoRef.current?.duration || 1)) *
                          100
                    }%`,
                  }}
                ></div>
              </div>

              <span>
                {formatTime(
                  sliderPos >= 50
                    ? afterVideoRef.current?.duration || 0
                    : beforeVideoRef.current?.duration || 0
                )}
              </span>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-center flex-wrap gap-3 mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ parent click বন্ধ
                  togglePlayPause();
                }}
                className="p-2 bg-white/20 cursor-pointer hover:bg-white/40 rounded-full text-white"
              >
                {isAfterVisible ? (
                  afterVideoRef.current?.paused ? (
                    <FaPlay size={16} />
                  ) : (
                    <FaPause size={16} />
                  )
                ) : beforeVideoRef.current?.paused ? (
                  <FaPlay size={16} />
                ) : (
                  <FaPause size={16} />
                )}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ parent click বন্ধ
                  restart();
                }}
                className="p-2 bg-white/20 cursor-pointer hover:bg-white/40 rounded-full text-white"
              >
                <MdRestartAlt size={16} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ parent click বন্ধ
                  setIsMuted(!isMuted);
                }}
                className="p-2 bg-white/20 cursor-pointer hover:bg-white/40 rounded-full text-white"
              >
                {isMuted ? <HiVolumeOff size={16} /> : <HiVolumeUp size={16} />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onClick={(e) => e.stopPropagation()} // ⛔ parent click বন্ধ
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-12 md:w-32 h-1 md:h-3 cursor-pointer accent-emerald-500"
              />

              <select
                value={playbackRate}
                onClick={(e) => e.stopPropagation()} // ⛔ parent click বন্ধ
                onChange={(e) => {
                  e.stopPropagation(); // ⛔ change event থেকেও parent বন্ধ
                  setPlaybackRate(parseFloat(e.target.value));
                }}
                className="px-2 py-1 md:px-3 cursor-pointer md:py-2 rounded-lg bg-white/30 text-white"
              >
                {[0.5, 1, 1.25, 1.5, 2].map((r) => (
                  <option key={r} value={r} className="text-black">
                    {r}x
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleVideo;
