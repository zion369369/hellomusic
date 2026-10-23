"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import CosmicFlightCanvas from "./CosmicFlightCanvas";
import {
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  RotateCcw,
  RotateCw,
  Sparkles,
  Maximize2,
} from "lucide-react";

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    toggleLike,
    currentTime,
    duration,
    seek,
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

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
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

      {/* 2.5 INTERACTIVE TIMELINE SCRUBBER & QUICK REWIND / 20-SEC JUMP */}
      <div className="bg-[#181818]/90 border border-white/5 rounded-xl p-3.5 sm:p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#1ed760]">
              {formatTime(currentTime)}
            </span>
            <span className="text-xs text-zinc-500 font-mono">/</span>
            <span className="text-xs font-mono text-zinc-400">
              {formatTime(duration || 224)}
            </span>
          </div>

          {/* Quick Rewind / Forward Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => seek(Math.max(0, currentTime - 10))}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1 transition active:scale-95"
              title="Rewind 10 seconds"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">-10s</span>
            </button>

            <button
              type="button"
              onClick={() => seek(Math.min(duration || 224, currentTime + 10))}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-zinc-300 hover:text-white flex items-center gap-1 transition active:scale-95"
              title="Forward 10 seconds"
            >
              <span className="font-mono text-[11px]">+10s</span>
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Range Scrubber Bar */}
        <div className="relative flex items-center w-full group py-0.5">
          <input
            type="range"
            min={0}
            max={duration || 224}
            step={0.5}
            value={currentTime}
            onChange={(e) => seek(parseFloat(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-800 accent-[#1ed760] group-hover:accent-[#1fdf64] transition"
          />
        </div>

        {/* Keyframe Jump Pills (0:20 Flight highlighted!) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
          <span className="text-[10px] uppercase font-mono text-zinc-500 mr-1 flex-shrink-0">
            Jump to:
          </span>
          <button
            type="button"
            onClick={() => seek(0)}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-white transition flex-shrink-0 active:scale-95"
          >
            0:00 Intro
          </button>
          <button
            type="button"
            onClick={() => seek(20)}
            className={`px-3 py-1 rounded-full text-[11px] font-mono transition flex-shrink-0 active:scale-95 flex items-center gap-1.5 ${
              Math.abs(currentTime - 20) < 3
                ? "bg-[#1ed760] text-black font-bold shadow-md ring-1 ring-[#1ed760]"
                : "bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium"
            }`}
            title="Start listening from 20 seconds"
          >
            <Sparkles className="w-3 h-3" />
            <span>0:20 Flight Lift</span>
          </button>
          <button
            type="button"
            onClick={() => seek(60)}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-white transition flex-shrink-0 active:scale-95"
          >
            1:00 Stratosphere
          </button>
          <button
            type="button"
            onClick={() => seek(120)}
            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-mono text-zinc-300 hover:text-white transition flex-shrink-0 active:scale-95"
          >
            2:00 Orbital Drift
          </button>
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

      {/* 4. ABOUT THE SONG: PHILOSOPHY (KANT, ARISTOTLE, NIETZSCHE) & IMMERSIVE FLIGHT EXPERIENCE */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-semibold">
            Liner Notes & Concepts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            About the Song — Fly away
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Engineered at the intersection of classical contemplation and celestial spaceflight. A sonic exploration inspired by philosophy&apos;s greatest inquiries into consciousness, motion, and transcendence.
          </p>
        </div>

        {/* 3 PHILOSOPHICAL PILLARS: KANT, ARISTOTLE, NIETZSCHE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Kant */}
          <div className="rounded-xl bg-[#161618] border border-white/5 p-4 sm:p-5 flex flex-col justify-between hover:border-white/15 transition group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Immanuel Kant
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                  The Sublime
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm text-zinc-200 font-medium italic leading-relaxed border-l-2 border-white/30 pl-3 my-2">
                &ldquo;Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me.&rdquo;
              </blockquote>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-white/5 leading-normal">
              In the <em>Critique of Judgment</em>, the aesthetic sublime transports consciousness beyond empirical constraints into cosmic infinity.
            </p>
          </div>

          {/* Aristotle */}
          <div className="rounded-xl bg-[#161618] border border-white/5 p-4 sm:p-5 flex flex-col justify-between hover:border-white/15 transition group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Aristotle
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                  Celestial Spheres
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm text-zinc-200 font-medium italic leading-relaxed border-l-2 border-white/30 pl-3 my-2">
                &ldquo;The movement of celestial bodies is eternal, harmonic, and effortless.&rdquo;
              </blockquote>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-white/5 leading-normal">
              In <em>De Caelo</em>, the cosmos rotates in perpetual harmonia. True flight is the actualization (<em>energeia</em>) of the spirit moving freely without earthly friction.
            </p>
          </div>

          {/* Nietzsche */}
          <div className="rounded-xl bg-[#161618] border border-white/5 p-4 sm:p-5 flex flex-col justify-between hover:border-white/15 transition group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Friedrich Nietzsche
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                  Overcoming Gravity
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm text-zinc-200 font-medium italic leading-relaxed border-l-2 border-white/30 pl-3 my-2">
                &ldquo;He who would learn to fly one day must first learn to stand and walk and run... But he who is light shall soar above the spirit of gravity.&rdquo;
              </blockquote>
            </div>
            <p className="text-[11px] text-zinc-400 mt-3 pt-3 border-t border-white/5 leading-normal">
              In <em>Thus Spoke Zarathustra</em>, flight symbolizes freedom from terrestrial weight. Cast aside burdens and venture into boundless imagination.
            </p>
          </div>
        </div>

        {/* IMMERSIVE EXPERIENCE OF FLYING (INTERACTIVE 360° CELESTIAL CANVAS & NARRATIVE) */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#141416] to-[#0a0a0c] shadow-2xl">
          {/* Top Status Bar of Flight Canvas */}
          <div className="relative z-10 px-4 sm:px-6 pt-4 pb-2 flex flex-wrap items-center justify-between gap-3 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Immersive Experience of Flying
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                60 FPS Orbital
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="hidden sm:inline">Orbit 420 km</span>
              <span>•</span>
              <span className="hidden sm:inline">7.66 km/s</span>
              <button
                type="button"
                onClick={() => setIsFlightModalOpen(true)}
                className="px-3 py-1 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition active:scale-95 flex items-center gap-1 ml-1"
                title="Open Fullscreen Flight Mode"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Fullscreen Flight</span>
              </button>
            </div>
          </div>

          {/* Interactive 360° Flight Canvas Viewport */}
          <div className="relative h-64 sm:h-80 w-full cursor-grab active:cursor-grabbing">
            <CosmicFlightCanvas isPlaying={isPlaying} />

            {/* In-Canvas Poetic Journey Overlay */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-black/85 via-transparent to-black/30">
              <div className="max-w-md">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 drop-shadow">
                  Trajectory: Celestial Ascent
                </span>
                <p className="text-base sm:text-lg font-bold text-white drop-shadow-md mt-0.5">
                  Fly fly away &bull; Fly beyond your imagination
                </p>
                <p className="text-xs text-zinc-300 drop-shadow mt-1 leading-relaxed">
                  Across the sky &bull; Imagine you are a cloud &bull; Imagine you are the brightest star &bull; Now imagine something that none can imagine except you.
                </p>
              </div>

              <div className="flex items-center justify-between pointer-events-auto">
                <span className="text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                  Drag 360° to look around space
                </span>

                <button
                  type="button"
                  onClick={handlePlayToggle}
                  className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/30 text-white text-xs font-bold transition flex items-center gap-1.5 active:scale-95"
                >
                  {isFlyAwayPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-white" />
                      <span>Pause Flight</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      <span>Glide with Audio</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ABOUT THE ARTIST SECTION (SPOTIFY STANDARD CARD - ZERO SONG MENTION) */}
      <div className="mt-8 pt-6 border-t border-white/10">
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
            ZION creates immersive soundscapes engineered with analog synthesis, spatial depth, and high-fidelity production. Exploring the intersection of celestial exploration and timeless philosophical resonance.
          </p>
        </div>
      </div>
    </div>
  );
}
