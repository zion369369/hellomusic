"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Sparkles,
  Compass,
  Play,
  Pause,
  Headphones,
  Maximize2,
  Orbit,
} from "lucide-react";

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    setIsFlightModalOpen,
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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#18181b] via-[#101012] to-[#08080a] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] group select-none transition-all duration-300 hover:border-white/30">
      {/* Specular Ambient Cosmic Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full border border-white/[0.04] pointer-events-none" />

      {/* Top Header & Live Simulation Launcher Button */}
      <div className="relative z-10 space-y-4 mb-6">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-[11px] font-extrabold tracking-widest text-white uppercase backdrop-blur-xl shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Escape to Cosmos</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-300 font-semibold tracking-wider uppercase">
              {isFlyAwayPlaying ? "Spatial Audio Active" : "360° Live Ready"}
            </span>
          </div>
        </div>

        {/* HERO LAUNCHER: FAANG-Grade Apple-Style 360° Simulation Card */}
        <div
          onClick={() => setIsFlightModalOpen(true)}
          className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-black to-zinc-900/90 border border-white/25 hover:border-white cursor-pointer transition-all duration-300 group/flight shadow-xl shadow-black/40 hover:scale-[1.01] active:scale-[0.99]"
        >
          {/* Shimmering highlight sheen */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover/flight:translate-x-[100%] transition-transform duration-1000" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-white text-black tracking-widest">
                  Live Simulation
                </span>
                <span className="text-xs font-mono text-cyan-300 flex items-center gap-1">
                  <Headphones className="w-3 h-3" />
                  360° Spatial Sound
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-2">
                <span>Enter 360° Cosmic Flight Experience</span>
                <Maximize2 className="w-4 h-4 text-zinc-400 group-hover/flight:text-white transition-colors" />
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-md">
                Take a breath... fly above the Earth in full 360° orbital view while listening to ZION.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlightModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-zinc-200 transition shadow-lg shadow-white/20 whitespace-nowrap self-start sm:self-center"
            >
              <Orbit className="w-4 h-4 text-black animate-spin-slow" />
              <span>Launch 360° Flight</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle: Deep Poetic Typography */}
      <div className="relative z-10 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-center my-3">
        {/* Quote 0: Want to fly? */}
        <div className="group/quote pl-4 border-l-2 border-white/80 hover:border-white transition-colors duration-300">
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
        <div className="group/quote pl-4 border-l-2 border-white bg-white/[0.03] p-4 rounded-r-xl transition-all">
          <p className="text-xs sm:text-sm font-medium text-white tracking-wide leading-relaxed">
            I asked the universe why we cannot fly? she whispered,{" "}
            <span className="font-bold underline decoration-white/40 underline-offset-4 text-white">
              &ldquo;the cosmos is soaring with you.&rdquo;
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Footer Controls & Audio Signature */}
      <div className="relative z-10 pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
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
