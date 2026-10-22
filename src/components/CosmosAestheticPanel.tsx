"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import { Sparkles, Compass, Play, Pause } from "lucide-react";

export default function CosmosAestheticPanel() {
  const { currentSong, isPlaying, togglePlay, playSong, songs } = usePlayer();

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
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#161619] via-[#121214] to-[#09090b] border border-zinc-800/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xl group select-none">
      {/* Background Celestial Orbit Rings */}
      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-dashed border-white/[0.05] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-48 h-48 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Star Dust Points */}
      <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping" />
      <div className="absolute top-28 right-20 w-1 h-1 bg-white/20 rounded-full" />
      <div className="absolute bottom-16 right-12 w-1.5 h-1.5 bg-white/30 rounded-full" />
      <div className="absolute bottom-32 left-8 w-1 h-1 bg-white/20 rounded-full" />

      {/* Top Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-zinc-700/80 text-[11px] font-bold tracking-widest text-zinc-200 uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Escape to Cosmos</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              {isFlyAwayPlaying ? "Soaring" : "ZION"}
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Deep Poetic Typography */}
      <div className="relative z-10 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-center my-2">
        {/* Quote 0: Want to fly? */}
        <div className="group/quote pl-4 border-l-2 border-white/70 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-300 mb-1">
            Want to fly?
          </p>
          <p className="text-xs sm:text-sm font-light italic text-zinc-400 leading-relaxed">
            It always starts with imagination.
          </p>
          <p className="text-xs sm:text-sm font-medium text-white mt-1 leading-relaxed">
            And once you&apos;ve learned to fly in your mind, even the universe is no longer the limit. 🪽
          </p>
        </div>

        {/* Quote 1 */}
        <div className="group/quote pl-4 border-l-2 border-zinc-700/60 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-light italic text-zinc-300 tracking-wide leading-relaxed group-hover/quote:text-white transition-colors">
            &ldquo;The light dove, cleaving in the air&rdquo;
          </p>
        </div>

        {/* Quote 2 */}
        <div className="group/quote pl-4 border-l-2 border-zinc-700/60 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-normal italic text-zinc-200 tracking-wide leading-relaxed group-hover/quote:text-white transition-colors">
            &ldquo;The higher we soar, the smaller we appear to those who cannot fly.&rdquo;
          </p>
        </div>

        {/* Quote 3 (The Climactic Universe Reflection) */}
        <div className="group/quote pl-4 border-l-2 border-white/80 bg-white/[0.02] p-3.5 rounded-r-xl transition-all">
          <p className="text-xs sm:text-sm font-medium text-white tracking-wide leading-relaxed">
            I asked the universe why we cannot fly? she whispered,{" "}
            <span className="font-bold underline decoration-white/40 underline-offset-4 text-white">
              &ldquo;the cosmos is soaring with you.&rdquo;
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Footer Controls & Audio Signature */}
      <div className="relative z-10 pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayToggle}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg shadow-white/10"
            title={isFlyAwayPlaying ? "Pause Fly away" : "Play Fly away"}
          >
            {isFlyAwayPlaying ? (
              <Pause className="w-4 h-4 fill-black" />
            ) : (
              <Play className="w-4 h-4 fill-black ml-0.5" />
            )}
          </button>

          <div>
            <p className="text-xs font-bold text-white tracking-tight">Fly away</p>
            <p className="text-[11px] text-zinc-400">ZION • Escape to Cosmos</p>
          </div>
        </div>

        {/* Live Audio Waves */}
        {isFlyAwayPlaying ? (
          <div className="flex items-center gap-1">
            <span className="w-0.5 bg-white rounded-full animate-equalize1" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4" />
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>24-BIT LOSSLESS</span>
          </div>
        )}
      </div>
    </div>
  );
}
