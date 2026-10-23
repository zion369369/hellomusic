"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Volume2,
  VolumeX,
  Volume1,
  Heart,
  Eye,
  RotateCcw,
} from "lucide-react";

interface PlayerBottomBarProps {
  onOpenCosmos?: () => void;
}

export default function PlayerBottomBar({ onOpenCosmos }: PlayerBottomBarProps) {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isShuffle,
    repeatMode,
    togglePlay,
    seek,
    setVolume,
    toggleMute,
    playNext,
    playPrev,
    toggleShuffle,
    toggleRepeat,
    toggleLike,
    setActiveNav,
  } = usePlayer();

  if (!currentSong) return null;

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleMiniPlayerClick = () => {
    setActiveNav("home");
    if (onOpenCosmos) onOpenCosmos();
  };

  const handleMobileProgressSeek = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    const target = e.currentTarget;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const rect = target.getBoundingClientRect();
    if (rect.width <= 0) return;
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const newPercent = clickX / rect.width;
    seek(newPercent * (duration || 224));
  };

  return (
    <>
      {/* 1. MOBILE NATIVE MINI-PLAYER (< md screens) */}
      <div className="md:hidden flex flex-col bg-[#161618] border-t border-zinc-800/80 z-30 flex-shrink-0 select-none">
        {/* Interactive touch/scrub progress bar with generous 24px touch target */}
        <div
          onClick={handleMobileProgressSeek}
          onTouchStart={handleMobileProgressSeek}
          onTouchMove={handleMobileProgressSeek}
          className="w-full relative py-2 -my-2 cursor-pointer group touch-none"
          title="Scrub track timeline"
        >
          <div className="w-full h-1 bg-zinc-800 relative overflow-hidden">
            <div
              className="h-full bg-[#1ed760] relative transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {/* Subtle seek thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-md pointer-events-none transition-all duration-75"
            style={{ left: `calc(${progressPercent}% - 5px)` }}
          />
        </div>

        <div className="h-14 px-3 flex items-center justify-between">
          {/* Tapping song info navigates to Cosmos Showcase */}
          <div
            onClick={handleMiniPlayerClick}
            className="flex items-center gap-2.5 min-w-0 flex-1 pr-2 cursor-pointer active:opacity-80"
          >
            <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-black shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentSong.cover_url}
                alt={currentSong.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-bold text-white truncate">
                {currentSong.title}
              </h4>
              <p className="text-[11px] text-[#b3b3b3] truncate">
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* Quick controls with Rewind and Time */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* Rewind 10 seconds */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                seek(Math.max(0, currentTime - 10));
              }}
              className="text-[#b3b3b3] hover:text-white p-2 min-w-[36px] min-h-[36px] flex items-center justify-center transition active:scale-90"
              title="Rewind 10s"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Live timestamp */}
            <span className="text-[10px] font-mono text-zinc-400 min-w-[28px] text-center select-none">
              {formatTime(currentTime)}
            </span>

            {/* Like */}
            <button
              onClick={() => toggleLike(currentSong.id)}
              className="text-[#b3b3b3] hover:text-white p-2 min-w-[36px] min-h-[36px] flex items-center justify-center transition active:scale-90"
              title={currentSong.is_liked ? "Unlike" : "Like"}
            >
              <Heart
                className={`w-4 h-4 ${
                  currentSong.is_liked ? "fill-white text-white" : ""
                }`}
              />
            </button>

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-white text-black flex items-center justify-center shadow active:scale-90 transition-transform"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-black" />
              ) : (
                <Play className="w-4 h-4 fill-black ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP FULL SPOTIFY DOCK (>= md screens) */}
      <footer className="hidden md:flex h-20 bg-black px-4 items-center justify-between select-none z-30 flex-shrink-0 border-t border-zinc-900/60">
        {/* LEFT: Current Track Details */}
        <div className="flex items-center gap-3 w-[260px] min-w-[200px]">
          {/* Album Artwork */}
          <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0 bg-[#242424] shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSong.cover_url}
              alt={currentSong.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title, Artist, & Like */}
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-white truncate hover:underline cursor-pointer">
              {currentSong.title}
            </h4>
            <p className="text-xs text-[#b3b3b3] truncate hover:text-white hover:underline cursor-pointer">
              {currentSong.artist}
            </p>
          </div>

          <button
            onClick={() => toggleLike(currentSong.id)}
            className="text-[#b3b3b3] hover:text-white transition p-2 min-w-[36px] min-h-[36px] flex items-center justify-center active:scale-90"
            title={currentSong.is_liked ? "Remove from Your Library" : "Save to Your Library"}
          >
            <Heart
              className={`w-4 h-4 ${
                currentSong.is_liked ? "fill-white text-white" : ""
              }`}
            />
          </button>
        </div>

        {/* CENTER: Player Controls & Timeline */}
        <div className="flex flex-col items-center justify-center max-w-[722px] w-full px-4">
          {/* Control Buttons */}
          <div className="flex items-center gap-5 mb-1.5">
            {/* Shuffle */}
            <button
              onClick={toggleShuffle}
              title={isShuffle ? "Disable shuffle" : "Enable shuffle"}
              className={`transition relative p-1.5 ${
                isShuffle ? "text-white" : "text-[#b3b3b3] hover:text-white"
              }`}
            >
              <Shuffle className="w-4 h-4" />
              {isShuffle && (
                <span className="w-1 h-1 bg-white rounded-full absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
              )}
            </button>

            {/* Previous Track */}
            <button
              onClick={playPrev}
              title="Previous"
              className="text-[#b3b3b3] hover:text-white transition active:scale-95 p-1"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            {/* Play / Pause Stark White Circle */}
            <button
              onClick={togglePlay}
              title={isPlaying ? "Pause" : "Play"}
              className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow hover:scale-105 active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-black" />
              ) : (
                <Play className="w-4 h-4 fill-black ml-0.5" />
              )}
            </button>

            {/* Next Track */}
            <button
              onClick={playNext}
              title="Next"
              className="text-[#b3b3b3] hover:text-white transition active:scale-95 p-1"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>

            {/* Repeat */}
            <button
              onClick={toggleRepeat}
              title={`Repeat mode: ${repeatMode}`}
              className={`transition relative p-1.5 ${
                repeatMode !== "off" ? "text-white" : "text-[#b3b3b3] hover:text-white"
              }`}
            >
              {repeatMode === "one" ? (
                <Repeat1 className="w-4 h-4 text-white" />
              ) : (
                <Repeat className="w-4 h-4" />
              )}
              {repeatMode !== "off" && (
                <span className="w-1 h-1 bg-white rounded-full absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
              )}
            </button>
          </div>

          {/* Timeline Slider Row */}
          <div className="w-full flex items-center gap-2 group">
            <span className="text-[11px] font-mono text-[#a7a7a7] w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex-1 flex items-center h-4">
              {/* Background Track */}
              <div className="w-full h-1 bg-[#4d4d4d] group-hover:h-1.5 rounded-full overflow-hidden transition-all duration-150">
                <div
                  className="h-full bg-white transition-all duration-75"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Input Overlay */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            <span className="text-[11px] font-mono text-[#a7a7a7] w-10 text-left">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* RIGHT: Views Badge & Real Volume Slider */}
        <div className="flex items-center justify-end gap-3 w-[260px] min-w-[200px] text-[#b3b3b3]">
          {/* Views Badge */}
          <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 mr-2" title="Plays">
            <Eye className="w-3.5 h-3.5 text-zinc-500" />
            <span>{currentSong.views_count.toLocaleString()}</span>
          </div>

          {/* Volume Controls */}
          <div className="flex items-center gap-2 group">
            <button
              onClick={toggleMute}
              className="hover:text-white transition p-1"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : volume < 0.5 ? (
                <Volume1 className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <div className="w-20 sm:w-24 relative flex items-center h-4">
              <div className="w-full h-1 bg-[#4d4d4d] group-hover:h-1.5 rounded-full overflow-hidden transition-all duration-150">
                <div
                  className="h-full bg-white transition-all duration-75"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
