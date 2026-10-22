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
  ListMusic,
  Laptop2,
  Maximize2,
  Mic2,
  Eye,
} from "lucide-react";

export default function PlayerBottomBar() {
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
  } = usePlayer();

  if (!currentSong) return null;

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <footer className="h-20 bg-black px-4 flex items-center justify-between select-none z-30 flex-shrink-0">
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
          className="text-[#b3b3b3] hover:text-white transition p-1"
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
            className={`transition relative p-1 ${
              isShuffle ? "text-white" : "text-[#b3b3b3] hover:text-white"
            }`}
          >
            <Shuffle className="w-4 h-4" />
            {isShuffle && (
              <span className="w-1 h-1 bg-white rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2" />
            )}
          </button>

          {/* Previous Track */}
          <button
            onClick={playPrev}
            title="Previous"
            className="text-[#b3b3b3] hover:text-white transition active:scale-95"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </button>

          {/* Play / Pause Stark White Circle */}
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow hover:scale-105 active:scale-95 transition-transform"
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
            className="text-[#b3b3b3] hover:text-white transition active:scale-95"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </button>

          {/* Repeat */}
          <button
            onClick={toggleRepeat}
            title={`Repeat mode: ${repeatMode}`}
            className={`transition relative p-1 ${
              repeatMode !== "off" ? "text-white" : "text-[#b3b3b3] hover:text-white"
            }`}
          >
            {repeatMode === "one" ? (
              <Repeat1 className="w-4 h-4 text-white" />
            ) : (
              <Repeat className="w-4 h-4" />
            )}
            {repeatMode !== "off" && (
              <span className="w-1 h-1 bg-white rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2" />
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

      {/* RIGHT: Spotify Extra Actions & Volume Slider */}
      <div className="flex items-center justify-end gap-3 w-[260px] min-w-[200px] text-[#b3b3b3]">
        {/* Views Badge */}
        <div className="hidden xl:flex items-center gap-1 text-[11px] font-mono text-zinc-400 mr-1" title="Plays">
          <Eye className="w-3.5 h-3.5 text-zinc-500" />
          <span>{currentSong.views_count.toLocaleString()}</span>
        </div>

        {/* Lyrics */}
        <button className="hover:text-white transition p-1 hidden sm:block" title="Lyrics">
          <Mic2 className="w-4 h-4" />
        </button>

        {/* Queue */}
        <button className="hover:text-white transition p-1" title="Queue">
          <ListMusic className="w-4 h-4" />
        </button>

        {/* Connect to device */}
        <button className="hover:text-white transition p-1 hidden sm:block" title="Connect to a device">
          <Laptop2 className="w-4 h-4" />
        </button>

        {/* Volume Controls */}
        <div className="flex items-center gap-2 group">
          <button
            onClick={toggleMute}
            className="hover:text-white transition"
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

        {/* Fullscreen */}
        <button className="hover:text-white transition p-1 hidden md:block" title="Full screen">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
