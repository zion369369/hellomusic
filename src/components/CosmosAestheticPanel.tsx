"use client";

import React, { useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Play,
  Pause,
  Compass,
  Moon,
  Sun,
  Globe,
  Sparkles,
  Wind,
  Send,
  BookOpen,
} from "lucide-react";

interface CelestialDestination {
  id: string;
  name: string;
  distance: string;
  meditation: string;
  guidance: string;
  quoteIndex: number;
}

const CELESTIAL_DESTINATIONS: CelestialDestination[] = [
  {
    id: "moon",
    name: "The Moon",
    distance: "384,400 KM",
    meditation:
      "Imagine ascending silently through lunar gravity. There is no air, no friction, only eternal stillness. All worldly weight dissolves.",
    guidance: "Inhale stillness. Exhale all earthly gravity.",
    quoteIndex: 0,
  },
  {
    id: "venus",
    name: "Venus",
    distance: "41.4M KM",
    meditation:
      "Soaring above the morning star. You drift weightless through high golden clouds of light, suspended between night and dawn.",
    guidance: "Feel the warmth of the upper atmosphere lifting you.",
    quoteIndex: 1,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    distance: "628.7M KM",
    meditation:
      "Gliding high above the great orbital bands. You are a solitary speck in the presence of vast cosmic majesty, yet completely at peace.",
    guidance: "Expand your awareness to match the scale of the giant.",
    quoteIndex: 2,
  },
  {
    id: "sun",
    name: "The Sun",
    distance: "149.6M KM",
    meditation:
      "Basking in pure primordial light. Every atom within your consciousness originated in stellar fire. You are light returning to light.",
    guidance: "Let the radiance dissolve every doubt in your mind.",
    quoteIndex: 3,
  },
  {
    id: "cosmos",
    name: "Deep Cosmos",
    distance: "Infinite",
    meditation:
      "Drifting beyond all planetary bounds into the starlight void. Once you have learned to fly in your mind, the universe is no longer the limit.",
    guidance: "You are not in the universe; the universe is soaring with you.",
    quoteIndex: 4,
  },
];

const PHILOSOPHY_QUOTES = [
  {
    author: "Immanuel Kant",
    work: "Critique of Pure Reason",
    quote:
      "The light dove, cleaving the air in her free flight, and feeling its resistance, might imagine that its flight would be still easier in empty space.",
  },
  {
    author: "Friedrich Nietzsche",
    work: "Thus Spoke Zarathustra",
    quote:
      "The higher we soar, the smaller we appear to those who cannot fly.",
  },
  {
    author: "Friedrich Nietzsche",
    work: "Thus Spoke Zarathustra",
    quote:
      "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.",
  },
  {
    author: "Plato",
    work: "Phaedo",
    quote:
      "The soul takes flight to the world that is invisible, but there arriving she is sure of bliss and forever dwells in paradise.",
  },
  {
    author: "ZION & The Cosmos",
    work: "Fly away",
    quote:
      "Want to fly? It always starts with imagination. And once you've learned to fly in your mind, even the universe is no longer the limit.",
  },
  {
    author: "Cosmic Dialogue",
    work: "Escape to Cosmos",
    quote:
      "I asked the universe why we cannot fly? She whispered, 'The cosmos is soaring with you.'",
  },
];

const BREATH_PHASES = [
  { name: "INHALE", prompt: "Inhale slowly • Fill your mind with space", duration: 4000 },
  { name: "HOLD", prompt: "Hold suspended • Weightless in orbit", duration: 4000 },
  { name: "EXHALE", prompt: "Exhale gently • Release all resistance", duration: 4000 },
];

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    imaginationPrompt,
    setImaginationPrompt,
  } = usePlayer();

  const [activeDestination, setActiveDestination] = useState<CelestialDestination>(
    CELESTIAL_DESTINATIONS[0]
  );
  const [activeQuoteIndex, setActiveQuoteIndex] = useState<number>(0);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [breathPhaseIndex, setBreathPhaseIndex] = useState<number>(0);
  const [isBreathGuideActive, setIsBreathGuideActive] = useState<boolean>(true);

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  // Sync destination quote on destination change
  const handleSelectDestination = (dest: CelestialDestination) => {
    setActiveDestination(dest);
    setActiveQuoteIndex(dest.quoteIndex);
    setImaginationPrompt(dest.meditation);
  };

  // Paced Breathing Guide Cycle (4s Inhale - 4s Hold - 4s Exhale)
  useEffect(() => {
    if (!isBreathGuideActive) return;
    const interval = setInterval(() => {
      setBreathPhaseIndex((prev) => (prev + 1) % BREATH_PHASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isBreathGuideActive]);

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    setImaginationPrompt(customPrompt.trim());
    setCustomPrompt("");
    if (!isPlaying && flyAwaySong) playSong(flyAwaySong);
  };

  const currentBreath = BREATH_PHASES[breathPhaseIndex];
  const activeQuote = PHILOSOPHY_QUOTES[activeQuoteIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0f0f12] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-2xl group select-none transition-all duration-300 hover:border-white/20">
      {/* Specular Ambient Radial Sheen */}
      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.04] to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* 1. Header: Apple First-Party Status Pill */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-5 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-300 uppercase">
            Music Beyond Imagination
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
            {activeDestination.distance}
          </span>
          <button
            onClick={() => setIsBreathGuideActive(!isBreathGuideActive)}
            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border transition ${
              isBreathGuideActive
                ? "bg-white/10 text-white border-white/20"
                : "bg-transparent text-zinc-500 border-white/5"
            }`}
          >
            Breathwork: {isBreathGuideActive ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      {/* 2. Destination Selector: "Imagine where you want to fly" */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Imagine where you want to fly
          </p>
          <span className="text-[10px] font-mono text-zinc-500">
            Destination: {activeDestination.name}
          </span>
        </div>

        {/* Apple-style segmented destination pills */}
        <div className="grid grid-cols-5 gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10">
          {CELESTIAL_DESTINATIONS.map((dest) => {
            const isSelected = activeDestination.id === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => handleSelectDestination(dest)}
                className={`py-2 px-1 rounded-lg text-xs font-medium transition flex items-center justify-center gap-1.5 truncate ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {dest.id === "moon" && <Moon className="w-3 h-3 flex-shrink-0" />}
                {dest.id === "venus" && <Sparkles className="w-3 h-3 flex-shrink-0" />}
                {dest.id === "jupiter" && <Globe className="w-3 h-3 flex-shrink-0" />}
                {dest.id === "sun" && <Sun className="w-3 h-3 flex-shrink-0" />}
                {dest.id === "cosmos" && <Compass className="w-3 h-3 flex-shrink-0" />}
                <span className="truncate">{dest.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Mindful Breath & Guided Imagination Stage */}
      <div className="relative z-10 p-5 rounded-xl bg-black/60 border border-white/10 mb-5 space-y-4">
        {/* Breathing Cadence Bar */}
        {isBreathGuideActive && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Wind className="w-3 h-3 text-zinc-300" />
                <span>{currentBreath.name}</span>
              </span>
              <span>{currentBreath.prompt}</span>
            </div>
            {/* Visual breathing bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-1000 ease-in-out ${
                  currentBreath.name === "INHALE"
                    ? "w-full"
                    : currentBreath.name === "HOLD"
                    ? "w-full opacity-80"
                    : "w-0"
                }`}
              />
            </div>
          </div>
        )}

        {/* Active Imagination Prompt */}
        <div className="space-y-1">
          <p className="text-sm sm:text-base font-light text-zinc-100 leading-relaxed">
            {imaginationPrompt || activeDestination.meditation}
          </p>
          <p className="text-xs font-mono text-zinc-400 pt-1">
            {activeDestination.guidance}
          </p>
        </div>

        {/* Custom Prompt Input */}
        <form onSubmit={handleCustomSubmit} className="pt-2">
          <div className="relative flex items-center bg-[#151518] rounded-lg border border-white/10 focus-within:border-white/30 transition">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Or imagine your own flight... (e.g. Orbiting Saturn's rings in silence)"
              className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none font-light"
            />
            <button
              type="submit"
              className="px-3 py-1.5 mr-1 rounded bg-white text-black font-semibold text-[11px] hover:bg-zinc-200 transition flex items-center gap-1"
            >
              <span>Guide</span>
              <Send className="w-3 h-3" />
            </button>
          </div>
        </form>
      </div>

      {/* 4. The Philosophy of Flight (Kant, Nietzsche, Plato, ZION) */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-zinc-400" />
            <span>Philosophy of Flight</span>
          </span>
          <div className="flex items-center gap-1">
            {PHILOSOPHY_QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuoteIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  activeQuoteIndex === idx ? "bg-white w-4" : "bg-zinc-700 hover:bg-zinc-500"
                }`}
                title={`Quote ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Active Philosophical Quote Card */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <p className="text-xs sm:text-sm font-light italic text-zinc-200 leading-relaxed">
            &ldquo;{activeQuote.quote}&rdquo;
          </p>
          <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-1 border-t border-white/5">
            <span className="text-white font-medium">{activeQuote.author}</span>
            <span>{activeQuote.work}</span>
          </div>
        </div>
      </div>

      {/* 5. Minimalist Apple Native Audio Dock */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayToggle}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow"
            title={isFlyAwayPlaying ? "Pause Fly away" : "Play Fly away"}
          >
            {isFlyAwayPlaying ? (
              <Pause className="w-4 h-4 fill-black text-black" />
            ) : (
              <Play className="w-4 h-4 fill-black text-black ml-0.5" />
            )}
          </button>

          <div>
            <p className="text-xs font-semibold text-white tracking-tight">
              Fly away
            </p>
            <p className="text-[11px] text-zinc-400">ZION • Lossless Master</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
          <Compass className="w-3.5 h-3.5 text-zinc-400" />
          <span>FIRST-PARTY NATIVE AUDIO</span>
        </div>
      </div>
    </div>
  );
}
