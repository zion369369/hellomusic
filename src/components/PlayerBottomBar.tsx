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
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-zinc-950/95 border-t border-zinc-800/80 backdrop-blur-2xl z-40 px-4 sm:px-6 flex items-center justify-between select-none">
      {/* LEFT: Current Track Info */}
      <div className="flex items-center gap-3 sm:gap-4 w-1/4 min-w-[180px] max-w-[280px]">
        {/* Album Art with subtle spin when playing */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-black border border-zinc-800 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentSong.cover_url}
            alt={currentSong.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isPlaying ? "scale-105" : ""
            }`}
          />
        </div>

        {/* Title, Artist, & Like */}
        <div className="min-w-0 flex-1">
          <h4 className="text-xs sm:text-sm font-bold text-white truncate hover:underline cursor-pointer">
            {currentSong.title}
          </h4>
          <p className="text-[11px] sm:text-xs text-zinc-400 truncate hover:text-zinc-200">
            {currentSong.artist}
          </p>
        </div>

        <button
          onClick={() => toggleLike(currentSong.id)}
          className="text-zinc-400 hover:text-white transition p-1"
          title={currentSong.is_liked ? "Unlike" : "Like"}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              currentSong.is_liked ? "fill-white text-white" : ""
            }`}
          />
        </button>
      </div>

      {/* CENTER: Player Controls & Timeline */}
      <div className="flex flex-col items-center justify-center max-w-2xl w-2/4 px-2">
        {/* Buttons Row */}
        <div className="flex items-center gap-4 sm:gap-6 mb-1.5">
          {/* Shuffle */}
          <button
            onClick={toggleShuffle}
            title="Shuffle"
            className={`transition relative p-1.5 ${
              isShuffle ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Shuffle className="w-4 h-4" />
            {isShuffle && (
              <span className="w-1 h-1 bg-white rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" />
            )}
          </button>

          {/* Previous Track */}
          <button
            onClick={playPrev}
            title="Previous"
            className="text-zinc-400 hover:text-white transition active:scale-90"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </button>

          {/* Play / Pause Stark White Circle */}
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-black ml-0.5" />
            )}
          </button>

          {/* Next Track */}
          <button
            onClick={playNext}
            title="Next"
            className="text-zinc-400 hover:text-white transition active:scale-90"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </button>

          {/* Repeat */}
          <button
            onClick={toggleRepeat}
            title={`Repeat mode: ${repeatMode}`}
            className={`transition relative p-1.5 ${
              repeatMode !== "off" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {repeatMode === "one" ? (
              <Repeat1 className="w-4 h-4 text-white" />
            ) : (
              <Repeat className="w-4 h-4" />
            )}
            {repeatMode !== "off" && (
              <span className="w-1 h-1 bg-white rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" />
            )}
          </button>
        </div>

        {/* Timeline Slider Row */}
        <div className="w-full flex items-center gap-2 sm:gap-3 group">
          <span className="text-[11px] font-mono text-zinc-400 w-8 sm:w-10 text-right">
            {formatTime(currentTime)}
          </span>

          <div className="relative flex-1 flex items-center">
            {/* Custom Background Track */}
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden pointer-events-none">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Interactive Range Input Overlay */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <span className="text-[11px] font-mono text-zinc-500 w-8 sm:w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* RIGHT: Equalizer, Views, & Volume */}
      <div className="flex items-center justify-end gap-3 sm:gap-4 w-1/4 min-w-[180px]">
        {/* Animated Equalizer Wave */}
        {isPlaying ? (
          <div className="hidden lg:flex items-center gap-1 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
            <span className="w-0.5 bg-white rounded-full animate-equalize1" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4" />
            <span className="text-[10px] text-zinc-400 font-mono ml-1">HI-FI</span>
          </div>
        ) : null}

        {/* Plays / Views Metric */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-zinc-400 px-2 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80">
          <Eye className="w-3 h-3 text-zinc-500" />
          <span>{currentSong.views_count.toLocaleString()}</span>
        </div>

        {/* Volume Slider */}
        <div className="flex items-center gap-2 group">
          <button
            onClick={toggleMute}
            className="text-zinc-400 hover:text-white transition"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            ) : volume < 0.5 ? (
              <Volume1 className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          <div className="w-16 sm:w-24 relative flex items-center">
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden pointer-events-none">
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
  );
}
