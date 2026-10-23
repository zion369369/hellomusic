"use client";

import React, { useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";
import CosmicFlightCanvas from "./CosmicFlightCanvas";
import {
  initSpatialAudio,
  setSpatialMode,
} from "@/lib/spatialAudio";
import {
  X,
  Play,
  Pause,
  Sparkles,
  Headphones,
  Maximize2,
  Minimize2,
  Wind,
  RotateCw,
} from "lucide-react";

export default function LiveCosmicFlightModal() {
  const {
    isFlightModalOpen,
    setIsFlightModalOpen,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    getAudioElement,
    seek,
    currentTime,
    duration,
  } = usePlayer();

  const [phase, setPhase] = useState<"breathing" | "flight">("flight");
  const [breathingStep, setBreathingStep] = useState<number>(0);
  const [spatialType, setSpatialType] = useState<"hrtf" | "binaural" | "stereo">("hrtf");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  const flyAwaySong = songs[0];

  const quotes = [
    {
      intro: "Philosophical Sublime (Kant)",
      main: "“The starry heavens above me, and the moral law within me.”",
      sub: "Lifting consciousness into infinite celestial flight.",
    },
    {
      intro: "Celestial Harmonia (Aristotle)",
      main: "“The celestial spheres rotate in eternal, effortless harmony.”",
      sub: "Actualizing the spirit in frictionless cosmic motion.",
    },
    {
      intro: "Overcoming Gravity (Nietzsche)",
      main: "“He who is light shall soar above the spirit of gravity.”",
      sub: "Fly beyond all earthly horizons.",
    },
    {
      intro: "Flight Beyond Imagination",
      main: "Across the sky, imagine you are a cloud, the brightest star.",
      sub: "Now imagine something none can imagine except you.",
    },
  ];

  // Initialize Spatial Audio & Autoplay when opening
  useEffect(() => {
    if (!isFlightModalOpen) {
      setPhase("flight");
      setBreathingStep(0);
      return;
    }

    const audioEl = getAudioElement();
    if (audioEl) {
      initSpatialAudio(audioEl);
    }

    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  }, [isFlightModalOpen, getAudioElement, isPlaying, playSong, flyAwaySong]);

  // Breathing & Mindful Flight Onboarding Steps
  useEffect(() => {
    if (!isFlightModalOpen || phase !== "breathing") return;

    const timer1 = setTimeout(() => setBreathingStep(1), 3200); // "Why so serious?"
    const timer2 = setTimeout(() => setBreathingStep(2), 6500); // "Imagine you are flying..."
    const timer3 = setTimeout(() => setBreathingStep(3), 10500); // "Flying above the Earth..."
    const timer4 = setTimeout(() => setBreathingStep(4), 15000); // "Want to fly?..."
    const timer5 = setTimeout(() => setBreathingStep(5), 21000); // "The cosmos is soaring with you..."
    const timer6 = setTimeout(() => setPhase("flight"), 26000); // Transition to 360° flight!

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [isFlightModalOpen, phase]);

  if (!isFlightModalOpen) return null;

  const toggleFullscreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleSpatialChange = (mode: "hrtf" | "binaural" | "stereo") => {
    setSpatialType(mode);
    setSpatialMode(mode);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-hidden select-none">
      {/* 60 FPS 360° COSMIC FLIGHT CANVAS (Always rendering in background) */}
      <CosmicFlightCanvas isPlaying={isPlaying} />

      {/* PHASE 1: MINDFUL BREATHING & SENSORY INDUCTION OVERLAY */}
      {phase === "breathing" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-8 bg-black/85 backdrop-blur-2xl transition-opacity duration-1000">
          {/* Top Skip Button */}
          <div className="w-full flex items-center justify-between max-w-4xl pt-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Sensory Calibration</span>
            </div>

            <button
              onClick={() => setPhase("flight")}
              className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:scale-105 active:scale-95 transition shadow-lg shadow-white/10"
            >
              Skip to 360° Flight 🪽
            </button>
          </div>

          {/* Central Breathing Ring & Mindful Guidance */}
          <div className="flex flex-col items-center justify-center text-center max-w-xl space-y-8 my-auto">
            {/* Apple-grade Expanding & Contracting Breathing Ring */}
            <div className="relative flex items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-white/20 flex items-center justify-center animate-pulseGlow">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-cyan-500/20 via-white/10 to-transparent blur-md animate-ping" />
                <div className="absolute w-24 h-24 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                  <Wind className="w-8 h-8 text-white stroke-[1.5] animate-bounce" />
                </div>
              </div>
            </div>

            {/* Stepped Guidance Typography */}
            <div className="min-h-[140px] flex flex-col items-center justify-center px-4">
              {breathingStep === 0 && (
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-2xl sm:text-4xl font-extralight tracking-wide text-zinc-200">
                    Take a breath...
                  </p>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
                    Inhale slowly • Clear your horizon
                  </p>
                </div>
              )}

              {breathingStep === 1 && (
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                    Why so serious?
                  </p>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
                    Release the ground below
                  </p>
                </div>
              )}

              {breathingStep === 2 && (
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-2xl sm:text-4xl font-light tracking-wide text-white">
                    Imagine you are flying...
                  </p>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
                    Feel the atmosphere lift you
                  </p>
                </div>
              )}

              {breathingStep === 3 && (
                <div className="space-y-2 animate-fadeIn">
                  <p className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                    Flying above the Earth...
                  </p>
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
                    Low Earth Orbit • 418 KM
                  </p>
                </div>
              )}

              {breathingStep === 4 && (
                <div className="space-y-3 animate-fadeIn max-w-lg">
                  <p className="text-lg sm:text-2xl font-light italic text-zinc-200 leading-relaxed">
                    &ldquo;Want to fly? It always starts with imagination. And once you&apos;ve learned to fly in your mind, even the universe is no longer the limit. 🪽&rdquo;
                  </p>
                  <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                    ZION • Fly away
                  </p>
                </div>
              )}

              {breathingStep === 5 && (
                <div className="space-y-3 animate-fadeIn">
                  <p className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                    &ldquo;The cosmos is soaring with you.&rdquo;
                  </p>
                  <p className="text-xs font-mono tracking-widest text-cyan-300 uppercase animate-pulse">
                    ✦ Initiating 360° Flight Mode
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Audio Status */}
          <div className="pb-4 text-center">
            <p className="text-xs text-zinc-500 font-mono">
              3D Spatial Audio calibrated • Audio: ZION - Fly away
            </p>
          </div>
        </div>
      )}

      {/* PHASE 2: FULL 360° FLIGHT HEADS-UP DISPLAY (HUD) */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 pointer-events-none">
        {/* TOP BAR: Telemetry & Controls */}
        <div className="flex items-center justify-between gap-4 pointer-events-auto">
          {/* Top Left: Platform Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch(() => {});
                }
                setIsFlightModalOpen(false);
              }}
              className="w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:border-white text-white flex items-center justify-center backdrop-blur-xl hover:scale-105 active:scale-95 transition"
              title="Close Flight Simulation"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl hidden sm:flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">
                Escape to Cosmos
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className="text-[11px] font-mono text-zinc-400">
                LIVE 360° SIMULATION
              </span>
            </div>
          </div>

          {/* Top Center: 360° Drag Look-Around Tip */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300">
            <RotateCw className="w-3.5 h-3.5 text-white animate-spin-slow" />
            <span>Drag anywhere to look 360° in all directions</span>
          </div>

          {/* Top Right: Telemetry & Fullscreen */}
          <div className="flex items-center gap-2">
            {/* Spatial Mode Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl text-xs font-mono">
              <Headphones className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-zinc-200">
                {spatialType === "hrtf" ? "HRTF 3D Spatial" : spatialType === "binaural" ? "Binaural Wide" : "Stereo"}
              </span>
            </div>

            <button
              onClick={toggleFullscreenMode}
              className="w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:border-white text-white flex items-center justify-center backdrop-blur-xl hover:scale-105 transition"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* CENTER FLOATING QUOTE OVERLAY (Interactive carousel while soaring) */}
        <div className="max-w-xl mx-auto w-full my-auto pointer-events-auto">
          <div
            onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)}
            className="p-5 sm:p-6 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/15 hover:border-white/30 backdrop-blur-2xl shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3 h-3" />
                {quotes[currentQuoteIndex].intro}
              </span>
              <span className="text-zinc-500 group-hover:text-white transition">
                Tap to rotate reflection ({currentQuoteIndex + 1}/{quotes.length})
              </span>
            </div>

            <p className="text-base sm:text-xl font-light italic text-white tracking-wide leading-relaxed">
              {quotes[currentQuoteIndex].main}
            </p>

            <p className="text-xs sm:text-sm font-medium text-zinc-300 mt-2">
              {quotes[currentQuoteIndex].sub}
            </p>
          </div>
        </div>

        {/* BOTTOM HUD: Spatial Audio Controls & Playback Bar */}
        <div className="max-w-3xl mx-auto w-full pointer-events-auto space-y-3">
          {/* Spatial Audio Mode Selector Pill */}
          <div className="flex items-center justify-center gap-2">
            {(["hrtf", "binaural", "stereo"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => handleSpatialChange(mode)}
                className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xl transition ${
                  spatialType === mode
                    ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                    : "bg-black/60 border border-white/15 text-zinc-300 hover:text-white"
                }`}
              >
                {mode === "hrtf" ? "360° Spatial" : mode === "binaural" ? "Binaural Atmos" : "Pure Stereo"}
              </button>
            ))}
          </div>

          {/* Floating Player Dock */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/70 border border-white/20 backdrop-blur-2xl shadow-2xl flex items-center justify-between gap-4">
            {/* Track Info */}
            <div className="flex items-center gap-3 min-w-[140px]">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/20 shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={flyAwaySong?.cover_url || "/covers/fly-away.svg"}
                  alt="Fly away"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-white truncate">
                  Fly away
                </p>
                <p className="text-[11px] text-zinc-400">ZION</p>
              </div>
            </div>

            {/* Play/Pause & Scrubber */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <div className="flex items-center gap-4 mb-1">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow hover:scale-105 active:scale-95 transition"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-black" />
                  ) : (
                    <Play className="w-4 h-4 fill-black ml-0.5" />
                  )}
                </button>
              </div>

              {/* Progress Slider */}
              <div className="w-full flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-400 w-8 text-right">
                  {formatTime(currentTime)}
                </span>
                <div className="relative flex-1 flex items-center h-3">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-75"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={(e) => seek(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <span className="text-[10px] font-mono text-zinc-400 w-8">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Flight Metrics Pill */}
            <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-zinc-400">
              <span className="text-white font-bold">ALTITUDE 418 KM</span>
              <span className="text-cyan-400">ORBIT 360° ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
