"use client";

import React, { useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Sparkles,
  Compass,
  Play,
  Pause,
  Headphones,
} from "lucide-react";

interface CelestialDestination {
  id: string;
  name: string;
  distance: string;
  altitude: string;
  narrative: string[];
}

const CELESTIAL_DESTINATIONS: CelestialDestination[] = [
  {
    id: "moon",
    name: "The Moon",
    distance: "384,400 KM",
    altitude: "Lunar Orbit",
    narrative: [
      "Close your eyes. Inhale slowly. Feel gravity release its hold on your body.",
      "Imagine rising beyond the atmosphere... Look back at Earth: a pale blue sphere suspended in silence.",
      "You descend softly towards the Sea of Tranquility. Absolute stillness. Weightless, untouched by human noise.",
      "The horizon is sharp against the velvet black. You are free from all earthly constraint.",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    distance: "61,000,000 KM",
    altitude: "Stratospheric Shroud",
    narrative: [
      "Breathe in tranquility. Imagine gliding into the golden twilight of Venus.",
      "A veiled world of amber light and whispering winds high above the clouds.",
      "The terrestrial noise of everyday life dissolves into iridescent mist.",
      "Suspended in golden warmth, your consciousness expands into pure, calm light.",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    distance: "628,700,000 KM",
    altitude: "Cloud Tops",
    narrative: [
      "Inhale deeply. Imagine soaring above the monumental amber bands of Jupiter.",
      "Colossal storms of ivory, ochre, and crimson swirling in perpetual silent majesty.",
      "You drift weightless over abysses of pure scale, where whole worlds could wander.",
      "Feel the grandeur of the infinite: small yet timeless, part of the universal harmony.",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    distance: "1,400,000,000 KM",
    altitude: "Ring Plane",
    narrative: [
      "Let all tension fall away. Imagine walking across the crystalline rings of Saturn.",
      "Billions of icy particles glistening under the ancient rays of distant starlight.",
      "A vast celestial arch stretching across the black sky in geometric perfection.",
      "You are floating within a silent cathedral of ice and light.",
    ],
  },
  {
    id: "sun",
    name: "The Sun",
    distance: "149,600,000 KM",
    altitude: "Solar Corona",
    narrative: [
      "Take a long, deep breath. Imagine soaring towards the primal heart of light.",
      "Bathed in pure golden radiance, shedding every shadow, every doubt, every limitation.",
      "Solar flares arch across space like ribbons of pure consciousness.",
      "You are energy. You are warmth. You are the source of all life and imagination.",
    ],
  },
  {
    id: "deep-cosmos",
    name: "Deep Cosmos",
    distance: "Beyond Horizon",
    altitude: "Interstellar Void",
    narrative: [
      "Exhale all resistance. Imagine departing the solar system entirely.",
      "No horizon. No ground. No boundaries. Only the quiet resonance of the cosmic symphony.",
      "Every star is a thought waiting to be born. The cosmos is not around you — it is within you.",
      "The universe is soaring with you.",
    ],
  },
];

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
  } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  const [selectedDestId, setSelectedDestId] = useState<string>("moon");
  const [narrativeIndex, setNarrativeIndex] = useState<number>(0);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale">(
    "Inhale"
  );

  const currentDest =
    CELESTIAL_DESTINATIONS.find((d) => d.id === selectedDestId) ||
    CELESTIAL_DESTINATIONS[0];

  // Live Breathing cadence (Inhale 4s -> Hold 4s -> Exhale 4s)
  useEffect(() => {
    const breathTimer = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === "Inhale") return "Hold";
        if (prev === "Hold") return "Exhale";
        return "Inhale";
      });
    }, 4000);

    return () => clearInterval(breathTimer);
  }, []);

  // Narrative pacing through guided imagination lines
  useEffect(() => {
    const narrativeTimer = setInterval(() => {
      setNarrativeIndex(
        (prev) => (prev + 1) % currentDest.narrative.length
      );
    }, 6000);

    return () => clearInterval(narrativeTimer);
  }, [currentDest]);

  const handleSelectDestination = (destId: string) => {
    setSelectedDestId(destId);
    setNarrativeIndex(0);
    if (!isFlyAwayPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#18181b] via-[#101012] to-[#08080a] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none transition-all duration-300 hover:border-white/25 h-full">
      {/* Specular Ambient Glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Mode Status */}
      <div className="relative z-10 space-y-4 mb-4">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-[11px] font-extrabold tracking-widest text-white uppercase backdrop-blur-xl shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Escape to Cosmos</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-300 font-semibold tracking-wider uppercase">
              {isFlyAwayPlaying ? "Spatial Audio Active" : "Guided Meditation Ready"}
            </span>
          </div>
        </div>

        {/* GUIDED IMAGINATION: Interactive Celestial Destinations Card */}
        <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-black to-zinc-900/90 border border-white/20 shadow-xl shadow-black/40">
          <div className="relative z-10 space-y-3.5">
            {/* Sub-Header & Live Breath Telemetry */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-white text-black tracking-widest">
                  Guided Imagination
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Headphones className="w-3 h-3 text-cyan-300" />
                  <span>Consciousness Mode</span>
                </span>
              </div>

              {/* Minimalist Breathing Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                <span className="uppercase">{breathPhase}</span>
              </div>
            </div>

            {/* Prompt Heading */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Where do you want to fly?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Select a celestial horizon. Let the guided meditation expand your mind while listening to ZION.
              </p>
            </div>

            {/* Celestial Destination Selector Pills (Apple First-Party Minimalist) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 pb-1">
              {CELESTIAL_DESTINATIONS.map((dest) => {
                const isSelected = selectedDestId === dest.id;
                return (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectDestination(dest.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                      isSelected
                        ? "bg-white text-black font-bold border-white shadow-md shadow-white/10 scale-[1.02]"
                        : "bg-black/60 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {dest.name}
                  </button>
                );
              })}
            </div>

            {/* Live Talking & Guided Consciousness Box */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-1.5 min-h-[82px] flex flex-col justify-center">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                <span className="text-zinc-400 font-semibold">
                  Trajectory: {currentDest.name}
                </span>
                <span>
                  {currentDest.distance} • {currentDest.altitude}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed tracking-wide italic transition-opacity duration-500">
                &ldquo;{currentDest.narrative[narrativeIndex]}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle: Deep Poetic & Philosophical Reflections (Kant, Nietzsche, Philosophy) */}
      <div className="relative z-10 space-y-3.5 sm:space-y-4 flex-1 flex flex-col justify-center my-2">
        {/* Quote 0: Want to fly? */}
        <div className="group/quote pl-4 border-l-2 border-white/80 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-300 mb-0.5">
            Want to fly?
          </p>
          <p className="text-xs sm:text-sm font-light italic text-zinc-400 leading-relaxed">
            It always starts with imagination.
          </p>
          <p className="text-xs sm:text-sm font-medium text-white mt-0.5 leading-relaxed">
            And once you have learned to fly in your mind, even the universe is no longer the limit.
          </p>
        </div>

        {/* Quote 1: Immanuel Kant */}
        <div className="group/quote pl-4 border-l-2 border-zinc-700/60 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-light italic text-zinc-300 tracking-wide leading-relaxed group-hover/quote:text-white transition-colors">
            &ldquo;The light dove, cleaving the air in her free flight, and feeling its resistance, might imagine that her flight would be still easier in empty space.&rdquo;
          </p>
          <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">
            Immanuel Kant • Critique of Pure Reason
          </p>
        </div>

        {/* Quote 2: Friedrich Nietzsche */}
        <div className="group/quote pl-4 border-l-2 border-zinc-700/60 hover:border-white transition-colors duration-300">
          <p className="text-xs sm:text-sm font-normal italic text-zinc-200 tracking-wide leading-relaxed group-hover/quote:text-white transition-colors">
            &ldquo;The higher we soar, the smaller we appear to those who cannot fly.&rdquo;
          </p>
          <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">
            Friedrich Nietzsche • Thus Spoke Zarathustra
          </p>
        </div>

        {/* Quote 3: The Climactic Cosmos Reflection */}
        <div className="group/quote pl-4 border-l-2 border-white bg-white/[0.03] p-3.5 rounded-r-xl transition-all">
          <p className="text-xs sm:text-sm font-medium text-white tracking-wide leading-relaxed">
            I asked the universe why we cannot fly? She whispered,{" "}
            <span className="font-bold underline decoration-white/40 underline-offset-4 text-white">
              &ldquo;the cosmos is soaring with you.&rdquo;
            </span>
          </p>
          <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-1">
            Cosmic Consciousness • ZION
          </p>
        </div>
      </div>

      {/* Bottom Footer Controls & Audio Signature */}
      <div className="relative z-10 pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
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
