"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePlayer } from "@/context/PlayerContext";
import CosmicFlightCanvas from "./CosmicFlightCanvas";
import {
  initSpatialAudio,
  setSpatialMode,
  updateSpatialCoordinates,
} from "@/lib/spatialAudio";
import {
  Play,
  Pause,
  Sparkles,
  Headphones,
  Maximize2,
  Wind,
  RotateCw,
  Send,
  Compass,
} from "lucide-react";

const GUIDED_MEDITATION_PHASES = [
  {
    step: "breath",
    phaseName: "INHALE • 4s",
    title: "Take a breath...",
    subtitle: "Why so serious? Feel all weight dissolve.",
    duration: 4000,
  },
  {
    step: "hold",
    phaseName: "HOLD • 4s",
    title: "Imagine you are flying...",
    subtitle: "Weightless in the upper stratosphere.",
    duration: 4000,
  },
  {
    step: "exhale",
    phaseName: "EXHALE • 4s",
    title: "Flying above the Earth...",
    subtitle: "Low Earth Orbit • 418 KM • The horizon curves below.",
    duration: 4000,
  },
  {
    step: "transcend",
    phaseName: "VISUALIZE",
    title: "“Want to fly? It always starts with imagination.”",
    subtitle:
      "“And once you've learned to fly in your mind, even the universe is no longer the limit. 🪽”",
    duration: 6000,
  },
  {
    step: "cosmos",
    phaseName: "EXPANSION",
    title: "“The cosmos is soaring with you.”",
    subtitle:
      "I asked the universe why we cannot fly? she whispered, ‘the cosmos is soaring with you.’",
    duration: 6000,
  },
  {
    step: "soar",
    phaseName: "ASCENT",
    title: "“The light dove, cleaving in the air.”",
    subtitle:
      "“The higher we soar, the smaller we appear to those who cannot fly.”",
    duration: 6000,
  },
];

const PROMPT_PRESETS = [
  {
    label: "🪽 Fly Above Earth",
    prompt:
      "Imagine you are flying... flying above the Earth. Take a breath, why so serious?",
  },
  {
    label: "🧘 Take a Breath",
    prompt:
      "Take a breath... why so serious? Inhale the calm of the cosmos, exhale all gravity.",
  },
  {
    label: "🌌 Cosmos Soaring",
    prompt:
      "I asked the universe why we cannot fly? she whispered, 'the cosmos is soaring with you.'",
  },
  {
    label: "🕊️ Light Dove",
    prompt:
      "The light dove, cleaving in the air. The higher we soar, the smaller we appear to those who cannot fly.",
  },
  {
    label: "✨ Mind Wings",
    prompt:
      "Want to fly? It always starts with imagination. And once you've learned to fly in your mind, even the universe is no longer the limit. 🪽",
  },
];

export default function MusicBeyondImaginationHero() {
  const {
    songs,
    isPlaying,
    togglePlay,
    playSong,
    getAudioElement,
    imaginationPrompt,
    setImaginationPrompt,
    setActiveImaginationId,
    isBreathingGuideActive,
    setIsBreathingGuideActive,
    spatialSoundMode,
    setSpatialSoundMode,
    setIsFlightModalOpen,
  } = usePlayer();

  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>("");
  const [cameraCoordinates, setCameraCoordinates] = useState<{
    yaw: number;
    pitch: number;
  }>({ yaw: 0, pitch: 0.15 });

  const flyAwaySong = songs[0];
  const audioInitializedRef = useRef<boolean>(false);

  // Initialize Web Audio 3D spatial field on first interaction / playback
  useEffect(() => {
    if (isPlaying && !audioInitializedRef.current) {
      const audioEl = getAudioElement();
      if (audioEl) {
        initSpatialAudio(audioEl);
        audioInitializedRef.current = true;
      }
    }
  }, [isPlaying, getAudioElement]);

  // Guided Screen Meditation Breathing & Phase Cycle
  useEffect(() => {
    if (!isBreathingGuideActive) return;

    const currentPhase = GUIDED_MEDITATION_PHASES[phaseIndex];
    const timer = setTimeout(() => {
      setPhaseIndex((prev) => (prev + 1) % GUIDED_MEDITATION_PHASES.length);
    }, currentPhase.duration);

    return () => clearTimeout(timer);
  }, [phaseIndex, isBreathingGuideActive]);

  const handleStartFlightOrToggle = () => {
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    } else {
      togglePlay();
    }
  };

  const handleSelectPreset = (preset: { label: string; prompt: string }) => {
    setImaginationPrompt(preset.prompt);
    setActiveImaginationId(preset.label);
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    setImaginationPrompt(customInput.trim());
    setActiveImaginationId("custom");
    setCustomInput("");
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handleSpatialModeChange = (mode: "hrtf" | "binaural" | "stereo") => {
    setSpatialSoundMode(mode);
    setSpatialMode(mode);
  };

  const currentPhase = GUIDED_MEDITATION_PHASES[phaseIndex];

  return (
    <section className="mb-8 w-full select-none">
      {/* 1. Header USP Banner */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 text-xs font-mono text-zinc-300 backdrop-blur-md mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-white">
              The USP: Music Beyond Imagination
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-cyan-300">Live Guided Flight</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span>Music Beyond Imagination</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl font-light">
            A different world of music. Underrated songs only... Immerse in live
            animated guided screen meditation on fly with ZION&apos;s &ldquo;Fly
            away&rdquo; and 360° spatial audio.
          </p>
        </div>

        {/* Fullscreen Vision Pro Mode Launcher */}
        <button
          onClick={() => setIsFlightModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-extrabold text-xs hover:bg-zinc-200 hover:scale-105 active:scale-95 transition shadow-lg self-start sm:self-auto"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Launch Fullscreen 360° Theater</span>
        </button>
      </div>

      {/* 2. MAIN ANIMATED GUIDED IMAGINATION ON FLY VIEWPORT */}
      <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black flex flex-col justify-between p-5 sm:p-7 group">
        {/* Real-time 60 FPS 360° Celestial Flight Canvas */}
        <CosmicFlightCanvas
          isPlaying={isPlaying}
          onCameraChange={(yaw, pitch) => {
            setCameraCoordinates({ yaw, pitch });
            updateSpatialCoordinates(yaw, pitch);
          }}
        />

        {/* Ambient visionOS Glass Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

        {/* TOP HUD: Telemetry & Controls Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 pointer-events-auto">
          {/* Spatial Mode Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow">
            {(["hrtf", "binaural", "stereo"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => handleSpatialModeChange(mode)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wide transition ${
                  spatialSoundMode === mode
                    ? "bg-white text-black font-bold shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {mode === "hrtf"
                  ? "360° Spatial"
                  : mode === "binaural"
                  ? "Binaural Atmos"
                  : "Pure Stereo"}
              </button>
            ))}
          </div>

          {/* Right Status / Breathing Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBreathingGuideActive(!isBreathingGuideActive)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-xl border transition ${
                isBreathingGuideActive
                  ? "bg-white/15 border-white/30 text-white"
                  : "bg-black/40 border-white/10 text-zinc-500"
              }`}
              title="Toggle Mindful Breathing Guide"
            >
              <Wind
                className={`w-3.5 h-3.5 ${
                  isBreathingGuideActive ? "text-cyan-300 animate-pulse" : ""
                }`}
              />
              <span className="hidden sm:inline">
                Breathing: {isBreathingGuideActive ? "ACTIVE" : "PAUSED"}
              </span>
            </button>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-[11px] font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
              <span>ORBIT 418 KM</span>
            </div>
          </div>
        </div>

        {/* CENTER STAGE: ANIMATED GUIDED MEDITATION & IMAGINATION TEXT */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center pointer-events-none px-4">
          {/* Pulsing Breathing Aura Ring */}
          {isBreathingGuideActive && (
            <div className="relative mb-5 flex items-center justify-center">
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 transition-all duration-1000 ease-in-out flex items-center justify-center ${
                  currentPhase.step === "breath"
                    ? "scale-125 border-cyan-300 shadow-[0_0_35px_rgba(56,189,248,0.4)]"
                    : currentPhase.step === "hold"
                    ? "scale-110 border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    : "scale-90 border-white/20 shadow-none"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-1000 ${
                    currentPhase.step === "breath"
                      ? "scale-110 bg-white/20"
                      : "scale-95 bg-white/5"
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>

              {/* Phase Pill */}
              <div className="absolute -bottom-3 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/20 text-[10px] font-mono tracking-widest text-cyan-300 uppercase shadow">
                {currentPhase.phaseName}
              </div>
            </div>
          )}

          {/* Dynamic Poetic Meditation Stream */}
          <div className="max-w-xl mx-auto space-y-2 pointer-events-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight transition-all duration-500">
              {imaginationPrompt ? (
                <span>&ldquo;{imaginationPrompt}&rdquo;</span>
              ) : (
                <span>{currentPhase.title}</span>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light drop-shadow max-w-lg mx-auto">
              {currentPhase.subtitle}
            </p>
          </div>

          {/* Drag 360° Micro Hint */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 tracking-wider uppercase opacity-75">
            <RotateCw className="w-3 h-3 text-cyan-300" />
            <span>Click & Drag 360° to navigate celestial orbit</span>
          </div>
        </div>

        {/* BOTTOM SECTION: GUIDED PROMPTS BAR & TACTILE PLAYER DOCK */}
        <div className="relative z-10 flex flex-col gap-3 pointer-events-auto">
          {/* Quick Guided Imagination Prompt Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1 flex-shrink-0 mr-1">
              <Compass className="w-3 h-3 text-white" />
              <span>Prompts:</span>
            </span>
            {PROMPT_PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap backdrop-blur-md transition border ${
                  imaginationPrompt === preset.prompt
                    ? "bg-white text-black font-bold border-white shadow"
                    : "bg-black/50 text-zinc-300 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Interactive Custom Imagination Prompt Bar */}
          <form
            onSubmit={handleCustomSubmit}
            className="flex items-center gap-2 bg-black/70 backdrop-blur-2xl p-1.5 pl-3 rounded-full border border-white/20 shadow-xl focus-within:border-white transition"
          >
            <Sparkles className="w-4 h-4 text-cyan-300 flex-shrink-0" />
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Prompt your imagination (e.g. Floating weightless over ocean auroras at midnight...)"
              className="w-full bg-transparent text-xs text-white placeholder-zinc-500 font-light outline-none"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs flex items-center gap-1.5 hover:bg-zinc-200 transition flex-shrink-0 shadow"
            >
              <span>Guide</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          {/* Integrated Tactile Player Dock */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-black/75 border border-white/20 backdrop-blur-2xl shadow-2xl flex items-center justify-between gap-4">
            {/* Song Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/20 shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={flyAwaySong?.cover_url || "/covers/fly-away.svg"}
                  alt="Fly away"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-white truncate flex items-center gap-1.5">
                  <span>Fly away</span>
                  <span className="text-[10px] font-mono font-normal px-1.5 py-0.2 rounded bg-white/10 text-zinc-300">
                    Remix
                  </span>
                </p>
                <p className="text-[11px] text-zinc-400">
                  ZION • Escape to Cosmos
                </p>
              </div>
            </div>

            {/* Play/Pause Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleStartFlightOrToggle}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg flex-shrink-0"
                title={isPlaying ? "Pause Flight Audio" : "Start Guided Flight Audio"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-black text-black" />
                ) : (
                  <Play className="w-5 h-5 fill-black text-black ml-0.5" />
                )}
              </button>
            </div>

            {/* Flight Coordinates & Spatial Pill */}
            <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-zinc-400">
              <span className="text-white font-bold flex items-center gap-1">
                <Headphones className="w-3 h-3 text-cyan-300" />
                <span>3D HRTF ACOUSTIC FIELD</span>
              </span>
              <span className="text-zinc-500">
                YAW: {(cameraCoordinates.yaw * (180 / Math.PI)).toFixed(0)}° •
                PITCH: {(cameraCoordinates.pitch * (180 / Math.PI)).toFixed(0)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
