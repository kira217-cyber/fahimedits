import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaCompress,
  FaExpand,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { resolveVideo } from "./videoSources";

const fmt = (sec) => {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
};

/**
 * এক জায়গায় লেখা ভিডিও প্লেয়ার — সাইটের সব ভিডিও এটাই ব্যবহার করে।
 *
 * দুটো জিনিস ইচ্ছাকৃত:
 *
 * ১) ব্রাউজারের নিজের controls বন্ধ (controls attribute নেই)। প্রতিটা
 *    ব্রাউজারে ওগুলো আলাদা দেখায় আর সাইটের ডিজাইনের সাথে মেলে না,
 *    তাই play/pause, সময়, progress, volume, fullscreen — সব নিজে আঁকা।
 *
 * ২) ফ্রেমের অনুপাত ভিডিও থেকেই আসে। metadata লোড হলে ভিডিওর আসল
 *    width/height দেখে container এর aspect-ratio বসে যায়, তাই কোনো
 *    ভিডিও কেটে যায় না — vertical (9:16) হলে ফ্রেমও লম্বা হয়।
 */
const VideoPlayer = ({
  file,
  posterAt = 1,
  compact = false,
  rounded = "rounded-3xl",
  className = "",
  maxHeight,
  // ছোট থাম্বনেইলে নিজের কন্ট্রোল বার লাগে না
  noControls = false,
  // শুধু থাম্বনেইল — বিশ্রামে play আইকন বা বার কিছুই নেই,
  // ক্লিক করলে চলে, তখন বার দেখা যায়
  posterOnly = false,
  // posterOnly এর সাথে ছোট play ইঙ্গিত
  hint = false,
  // frameRatio দিলে ফ্রেমের অনুপাত স্থির থাকে আর ভিডিও ভিতরে
  // পুরোটা দেখা যায় (contain) — reel হলে দুপাশে ফাঁকা থাকে
  frameRatio,
}) => {
  const shellRef = useRef(null);
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const hideTimer = useRef(null);

  const [ratio, setRatio] = useState(16 / 9);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showUI, setShowUI] = useState(true);
  const [isFull, setIsFull] = useState(false);
  const [shellW, setShellW] = useState(999);

  // কন্ট্রোল বারে কী কী ধরবে সেটা প্লেয়ারের নিজের প্রস্থ থেকেই
  // ঠিক হয় — ব্রেকপয়েন্টে হবে না, কারণ একই পর্দাতেও খাড়া (9:16)
  // ভিডিওর প্লেয়ার সরু আর আড়াআড়ি ভিডিওর চওড়া হয়।
  useEffect(() => {
    const el = shellRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setShellW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── অন্য ভিডিও চালু হলে এটা থামবে ──────────────────────────
  const pauseOthers = () => {
    document.querySelectorAll("video").forEach((other) => {
      if (other !== videoRef.current && !other.paused) other.pause();
    });
  };

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      pauseOthers();
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
    }
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setIsMuted(next);
    if (!next && v.volume === 0) {
      v.volume = 0.6;
      setVolume(0.6);
    }
  };

  const onVolume = (e) => {
    const v = videoRef.current;
    const val = Number(e.target.value);
    if (!v) return;
    v.volume = val;
    v.muted = val === 0;
    setVolume(val);
    setIsMuted(val === 0);
  };

  // ── progress bar: ক্লিক আর ড্র্যাগ দুটোতেই seek ─────────────
  const seekTo = (clientX) => {
    const bar = barRef.current;
    const v = videoRef.current;
    if (!bar || !v || !Number.isFinite(v.duration)) return;
    const r = bar.getBoundingClientRect();
    const p = Math.min(Math.max((clientX - r.left) / r.width, 0), 1);
    v.currentTime = p * v.duration;
    setCurrent(v.currentTime);
  };

  const onBarPointerDown = (e) => {
    e.stopPropagation();
    seekTo(e.clientX);
    const move = (ev) => seekTo(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const toggleFullscreen = () => {
    const shell = shellRef.current;
    if (!shell) return;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else shell.requestFullscreen?.();
  };

  useEffect(() => {
    const onFs = () => setIsFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // ── চলার সময় ৩ সেকেন্ড পরে controls মিলিয়ে যায় ─────────────
  const revealUI = useCallback(() => {
    setShowUI(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowUI(false);
    }, 3000);
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const pct = duration ? (current / duration) * 100 : 0;
  const iconSize = compact || shellW < 200 ? 12 : 14;
  const showTime = shellW >= 125;
  const showMute = shellW >= 245;
  const showVolume = shellW >= 320;
  const tight = compact || shellW < 200;

  return (
    <div
      ref={shellRef}
      onPointerMove={revealUI}
      onPointerLeave={() => isPlaying && setShowUI(false)}
      style={
        // fullscreen এ পুরো পর্দা নেবে — নির্দিষ্ট aspect-ratio ধরে রাখলে
        // ভিডিওর কিনারা কেটে যায়
        isFull
          ? { width: "100%", height: "100%" }
          : frameRatio
            ? { aspectRatio: String(frameRatio) }
            : maxHeight
              ? {
                  // প্রস্থ = min(কনটেইনার, উচ্চতার সীমা × অনুপাত)
                  // তাই উচ্চতা সীমা ছাড়ায় না, আবার সরু পর্দায় বেরিয়েও যায় না
                  aspectRatio: String(ratio),
                  width: `min(100%, calc(${maxHeight} * ${ratio}))`,
                  height: "auto",
                }
              : { aspectRatio: String(ratio) }
      }
      className={`group relative overflow-hidden ${
        maxHeight && !frameRatio ? "mx-auto" : "w-full"
      } bg-[#1E1B4B] shadow-lg ${isFull ? "!rounded-none" : rounded} ${className}`}
    >
      <video
        ref={videoRef}
        src={`${resolveVideo(file)}#t=${posterAt}`}
        preload="metadata"
        playsInline
        loop
        className={`h-full w-full bg-[#1E1B4B] ${
          isFull || frameRatio ? "object-contain" : "object-cover"
        }`}
        onClick={togglePlay}
        onLoadedMetadata={(e) => {
          const v = e.currentTarget;
          if (v.videoWidth && v.videoHeight) {
            // ফ্রেম ভিডিওর অনুপাত নেয় — তাই কিছু কাটা পড়ে না
            setRatio(v.videoWidth / v.videoHeight);
          }
          setDuration(v.duration || 0);
        }}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => {
          setIsPlaying(true);
          revealUI();
        }}
        onPause={() => {
          setIsPlaying(false);
          setShowUI(true);
        }}
      />

      {/* posterOnly এ ছোট ইঙ্গিত — ভিডিও যে চালানো যায় বোঝাতে */}
      {hint && posterOnly && !isPlaying && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#3F6FDB] shadow-md backdrop-blur-sm"
        >
          <FaPlay size={14} className="ml-0.5" />
        </span>
      )}

      {/* মাঝখানের বড় play বোতাম — শুধু থেমে থাকলে */}
      {!isPlaying && !posterOnly && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[#1E1B4B]/25 transition-colors hover:bg-[#1E1B4B]/10"
        >
          <span
            className={`flex items-center justify-center rounded-full bg-white text-[#3F6FDB] transition-transform duration-300 group-hover:scale-110 ${
              compact ? "h-14 w-14" : "h-16 w-16 sm:h-20 sm:w-20"
            }`}
          >
            <FaPlay className="ml-1" size={compact ? 16 : 22} />
          </span>
        </button>
      )}

      {/* নিচের কন্ট্রোল বার — ছোট থাম্বনেইলে লাগে না */}
      {!noControls && (
      <div
        onPointerDown={(e) => e.stopPropagation()}
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1B4B]/92 via-[#1E1B4B]/60 to-transparent transition-opacity duration-300 ${tight ? "px-2 pb-2 pt-6" : "px-3 pb-2.5 pt-7 sm:px-4"} ${
          (posterOnly ? isPlaying && showUI : showUI || !isPlaying)
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* progress */}
        <div
          ref={barRef}
          role="slider"
          tabIndex={0}
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          onPointerDown={onBarPointerDown}
          onKeyDown={(e) => {
            const v = videoRef.current;
            if (!v) return;
            if (e.key === "ArrowRight") v.currentTime += 5;
            if (e.key === "ArrowLeft") v.currentTime -= 5;
          }}
          className="group/bar relative -my-1.5 mb-0.5 flex h-7 cursor-pointer touch-none items-center"
        >
          <span className="h-1 w-full rounded-full bg-white/30">
            <span
              className="block h-full rounded-full bg-[#4E8EFF]"
              style={{ width: `${pct}%` }}
            />
          </span>
          <span
            className="absolute h-3 w-3 -translate-x-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover/bar:opacity-100"
            style={{ left: `${pct}%` }}
          />
        </div>

        {/* বোতামগুলো */}
        <div
          className={`flex items-center text-white ${
            tight ? "gap-1.5" : "gap-2 sm:gap-3"
          }`}
        >
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30 ${
              tight ? "h-7 w-7" : "h-8 w-8"
            }`}
          >
            {isPlaying ? (
              <FaPause size={iconSize} />
            ) : (
              <FaPlay className="ml-0.5" size={iconSize} />
            )}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className={`shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30 ${
              showMute ? "flex h-8 w-8" : "hidden"
            }`}
          >
            {isMuted || volume === 0 ? (
              <FaVolumeMute size={iconSize} />
            ) : (
              <FaVolumeUp size={iconSize} />
            )}
          </button>

          {/* ছোট কার্ডে volume slider লুকানো — জায়গা বাঁচাতে */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={onVolume}
            aria-label="Volume"
            className={`h-7 w-16 cursor-pointer accent-[#4E8EFF] ${
              showVolume ? "block" : "hidden"
            }`}
          />

          <span
            className={`ml-auto shrink-0 whitespace-nowrap font-medium tabular-nums ${
              !showTime ? "hidden" : tight ? "text-[0.62rem]" : "text-xs"
            }`}
          >
            {fmt(current)} / {fmt(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFull ? "Exit fullscreen" : "Fullscreen"}
            className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30 ${
              tight ? "h-7 w-7" : "h-8 w-8"
            }`}
          >
            {isFull ? <FaCompress size={iconSize} /> : <FaExpand size={iconSize} />}
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default VideoPlayer;
