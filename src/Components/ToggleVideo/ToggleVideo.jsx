// ToggleVideo.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import video from "../../assets/fahimvideo.mp4";
import { TbCaretLeftRightFilled } from "react-icons/tb";

// তোমার আসল ভিডিও লিঙ্ক দাও (public folder এ রাখো অথবা CDN)
const BEFORE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const AFTER_VIDEO =  video// public/videos/fahimvideo.mp4 রাখো

const ToggleVideo = () => {
  const containerRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);

  const isAfterVisible = sliderPos >= 50;

  // ল্যাগ ফ্রি স্লাইডার
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
      window.addEventListener("touchmove", handleMove, { passive: false });
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

  // ভিডিও লোড হলে ডিউরেশন নেওয়া
  useEffect(() => {
    const beforeVid = beforeVideoRef.current;
    const afterVid = afterVideoRef.current;

    const handleLoadedMetadata = () => {
      if (beforeVid?.duration) setDuration(beforeVid.duration);
      if (afterVid?.duration && afterVid.duration > duration)
        setDuration(afterVid.duration);
    };

    beforeVid?.addEventListener("loadedmetadata", handleLoadedMetadata);
    afterVid?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      beforeVid?.removeEventListener("loadedmetadata", handleLoadedMetadata);
      afterVid?.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // টাইম আপডেট (দৃশ্যমান ভিডিও থেকে)
  useEffect(() => {
    const activeVideo = isAfterVisible
      ? afterVideoRef.current
      : beforeVideoRef.current;
    if (!activeVideo) return;

    const updateTime = () => setCurrentTime(activeVideo.currentTime);
    const interval = setInterval(updateTime, 100);

    return () => clearInterval(interval);
  }, [isAfterVisible]);

  // ভিডিও কন্ট্রোল + সিঙ্ক
  useEffect(() => {
    if (!beforeVideoRef.current || !afterVideoRef.current) return;

    const beforeVid = beforeVideoRef.current;
    const afterVid = afterVideoRef.current;

    // সাধারণ সেটিং
    beforeVid.volume = isMuted ? 0 : volume;
    afterVid.volume = isMuted ? 0 : volume;
    beforeVid.playbackRate = playbackRate;
    afterVid.playbackRate = playbackRate;

    // শুধু দৃশ্যমানটা চালাও
    if (isAfterVisible) {
      afterVid.play().catch(() => {});
      beforeVid.pause();
    } else {
      beforeVid.play().catch(() => {});
      afterVid.pause();
    }

    // সিঙ্ক রাখা
    if (Math.abs(beforeVid.currentTime - afterVid.currentTime) > 0.5) {
      afterVid.currentTime = beforeVid.currentTime;
    }
  }, [isAfterVisible, isMuted, volume, playbackRate]);

  const togglePlayPause = () => {
    const active = isAfterVisible
      ? afterVideoRef.current
      : beforeVideoRef.current;
    if (active.paused) active.play();
    else active.pause();
  };

  const restart = () => {
    beforeVideoRef.current.currentTime = 0;
    afterVideoRef.current.currentTime = 0;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl">
      <div ref={containerRef} className="relative aspect-video select-none">
        {/* Before Video */}
        <video
          ref={beforeVideoRef}
          src={BEFORE_VIDEO}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          playsInline
          preload="auto"
        />

        {/* After Video */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
          }}
        >
          <video
            ref={afterVideoRef}
            src={AFTER_VIDEO}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            playsInline
            preload="auto"
          />
        </div>

     
        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-2 bg-white/90 z-40 cursor-ew-resize shadow-2xl"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[42%] w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
            <TbCaretLeftRightFilled />

          </div>
        </div>

        {/* Control Bar + Duration */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 z-50">
          <div className="space-y-4">
            {/* Duration Bar */}
            <div className="flex items-center gap-4 text-white">
              <span className="text-sm font-medium">
                {formatTime(currentTime)}
              </span>
              <div className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{
                    width: `${
                      duration > 0 ? (currentTime / duration) * 100 : 0
                    }%`,
                  }}
                />
              </div>
              <span className="text-sm font-medium">
                {formatTime(duration)}
              </span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={togglePlayPause}
                className="px-8 py-4 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition font-bold text-lg"
              >
                {isAfterVisible
                  ? afterVideoRef.current?.paused
                    ? "Play"
                    : "Pause"
                  : beforeVideoRef.current?.paused
                  ? "Play"
                  : "Pause"}
              </button>

              <button
                onClick={restart}
                className="px-6 py-3 bg-white/20 hover:bg-white/40 rounded-xl backdrop-blur-md transition font-medium"
              >
                Restart
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-6 py-3 bg-white/20 hover:bg-white/40 rounded-xl backdrop-blur-md transition font-medium"
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-32 accent-emerald-500"
              />

              <select
                value={playbackRate}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="px-4 py-3 bg-white/20 rounded-xl backdrop-blur-md text-black"
              >
                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}x
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleVideo;
