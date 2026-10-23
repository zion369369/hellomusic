"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    toggleLike,
  } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* 1. SPOTIFY HERO RELEASE BANNER */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 sm:gap-6 pt-2 pb-4">
        {/* Album Artwork Cover */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 flex-shrink-0 rounded-md overflow-hidden bg-black shadow-[0_12px_36px_rgba(0,0,0,0.8)] border border-white/10 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={flyAwaySong?.cover_url || "/covers/fly-away.svg"}
            alt={flyAwaySong?.title || "Fly away"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Release Metadata */}
        <div className="flex flex-col justify-end text-center sm:text-left min-w-0 flex-1">
          <span className="text-xs uppercase font-bold tracking-wider text-white mb-1">
            Single
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-3 truncate">
            {flyAwaySong?.title || "Fly away"}
          </h1>

          {/* Artist & Track Stats Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-white font-bold text-xs">
                Z
              </div>
              <span className="font-bold text-white hover:underline cursor-pointer">
                {flyAwaySong?.artist || "ZION"}
              </span>
            </div>
            <span>•</span>
            <span>2026</span>
            <span>•</span>
            <span>1 song, 3 min 44 sec</span>
            <span>•</span>
            <span className="text-zinc-400 font-normal">
              {flyAwaySong?.views_count.toLocaleString() || "214"} plays
            </span>
          </div>
        </div>
      </div>

      {/* 2. SPOTIFY ACTION ROW: Iconic Play Button, Heart, Options */}
      <div className="flex items-center gap-6 py-2 border-b border-white/10">
        {/* Big Spotify Play Button */}
        <button
          type="button"
          onClick={handlePlayToggle}
          className="w-14 h-14 rounded-full bg-[#1ed760] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg flex-shrink-0"
          title={isFlyAwayPlaying ? "Pause" : "Play"}
        >
          {isFlyAwayPlaying ? (
            <Pause className="w-6 h-6 fill-black text-black" />
          ) : (
            <Play className="w-6 h-6 fill-black text-black ml-1" />
          )}
        </button>

        {/* Like Button */}
        <button
          type="button"
          onClick={() => flyAwaySong && toggleLike(flyAwaySong.id)}
          className="p-2 text-zinc-400 hover:text-white transition active:scale-95 flex items-center gap-2"
          title={flyAwaySong?.is_liked ? "Remove from Liked Songs" : "Save to Liked Songs"}
        >
          <Heart
            className={`w-7 h-7 ${
              flyAwaySong?.is_liked
                ? "text-[#1ed760] fill-[#1ed760]"
                : "text-zinc-400 hover:text-white"
            }`}
          />
          <span className="text-xs text-zinc-400 font-medium">
            {flyAwaySong?.likes_count || 4}
          </span>
        </button>

        {/* More Options */}
        <button
          type="button"
          className="p-2 text-zinc-400 hover:text-white transition"
          title="More options"
        >
          <MoreHorizontal className="w-6 h-6" />
        </button>

        <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            24-BIT / 96KHZ LOSSLESS
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            ORIGINAL MASTER
          </span>
        </div>
      </div>

      {/* 3. SPOTIFY TRACKLIST TABLE */}
      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-4 py-2 text-xs uppercase tracking-wider text-zinc-400 border-b border-white/10 font-medium">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-6 sm:col-span-6">Title</div>
          <div className="hidden sm:block sm:col-span-3 text-right">Plays</div>
          <div className="col-span-5 sm:col-span-2 flex justify-end items-center pr-2">
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {/* Table Row 1: Fly away */}
        {flyAwaySong && (
          <div
            onClick={handlePlayToggle}
            className={`group grid grid-cols-12 items-center px-4 py-2.5 rounded-md hover:bg-white/10 transition cursor-pointer text-sm ${
              isFlyAwayActive ? "bg-white/5" : ""
            }`}
          >
            {/* Number / Play Glyph / Equalizer */}
            <div className="col-span-1 text-center text-zinc-400 flex items-center justify-center">
              {isFlyAwayPlaying ? (
                <div className="flex items-center gap-0.5 h-3.5">
                  <span className="w-0.5 bg-[#1ed760] rounded-full animate-equalize1 h-full" />
                  <span className="w-0.5 bg-[#1ed760] rounded-full animate-equalize2 h-full" />
                  <span className="w-0.5 bg-[#1ed760] rounded-full animate-equalize3 h-full" />
                </div>
              ) : (
                <>
                  <span className="group-hover:hidden text-zinc-400 font-mono text-xs">1</span>
                  <Play className="w-3.5 h-3.5 hidden group-hover:block fill-white text-white ml-0.5" />
                </>
              )}
            </div>

            {/* Title & Artist */}
            <div className="col-span-6 sm:col-span-6 flex items-center gap-3 min-w-0 pr-2">
              <div className="min-w-0">
                <p
                  className={`font-semibold truncate ${
                    isFlyAwayActive ? "text-[#1ed760]" : "text-white group-hover:underline"
                  }`}
                >
                  {flyAwaySong.title}
                </p>
                <p className="text-xs text-zinc-400 truncate">
                  {flyAwaySong.artist}
                </p>
              </div>
            </div>

            {/* Plays */}
            <div className="hidden sm:block sm:col-span-3 text-right text-xs text-zinc-400 font-mono">
              {flyAwaySong.views_count.toLocaleString()}
            </div>

            {/* Like & Duration */}
            <div className="col-span-5 sm:col-span-2 flex items-center justify-end gap-3 text-xs text-zinc-400 font-mono pr-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(flyAwaySong.id);
                }}
                className="opacity-0 group-hover:opacity-100 hover:text-white transition"
              >
                <Heart
                  className={`w-4 h-4 ${
                    flyAwaySong.is_liked ? "text-[#1ed760] fill-[#1ed760] opacity-100" : ""
                  }`}
                />
              </button>
              <span>3:44</span>
            </div>
          </div>
        )}
      </div>

      {/* 4. ABOUT THE ARTIST SECTION (SPOTIFY STANDARD CARD) */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
          About the Artist
        </h2>

        <div className="rounded-xl bg-[#181818] hover:bg-[#202020] transition border border-white/5 p-6 max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-black border border-white/20 flex items-center justify-center text-white font-black text-2xl shadow-md">
              Z
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-white">ZION</span>
                <CheckCircle2 className="w-4 h-4 text-[#1ed760] fill-[#1ed760]/20" />
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                {flyAwaySong?.views_count.toLocaleString() || "214"} monthly listeners
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
            ZION creates immersive soundscapes engineered with analog synthesis, spatial depth, and high-fidelity production. Stream the original master release of Fly away.
          </p>
        </div>
      </div>
    </div>
  );
}
