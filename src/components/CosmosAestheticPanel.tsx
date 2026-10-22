"use client";

import React, { useState, useEffect } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { Play, Pause } from "lucide-react";

interface CelestialScience {
  id: string;
  name: string;
  distance: string;
  science: string;
  visualization: string;
}

const CELESTIAL_DATA: CelestialScience[] = [
  {
    id: "moon",
    name: "The Moon",
    distance: "384,400 KM",
    science: "Gravity: 0.166 g • Surface Vacuum • 27.3 Day Orbital Period",
    visualization:
      "Touch the pristine regolith of the Sea of Tranquility. Absolute silence. Earth hangs in the black sky — a fragile blue marble, luminous and still.",
  },
  {
    id: "venus",
    name: "Venus",
    distance: "61,000,000 KM",
    science: "Upper Atmosphere: 1 Bar at 50 KM • Sulfuric Amber Cloud Deck",
    visualization:
      "Gliding through perpetual golden stratospheric clouds. High above the crushing terrestrial pressure, suspended in an ocean of quiet, iridescent amber light.",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    distance: "628,700,000 KM",
    science: "Mass: 318 Earths • Great Red Spot • 400+ Year Anticyclonic Storm",
    visualization:
      "Drifting above monumental cloud bands of ivory and ochre. Storms wider than entire planets swirling in hypnotic, eternal harmony.",
  },
  {
    id: "saturn",
    name: "Saturn",
    distance: "1,400,000,000 KM",
    science: "Ring Span: 282,000 KM • Thickness: ~10 Meters • 99% Water Ice",
    visualization:
      "Gliding along the razor-thin plane of ice rings. Billions of crystalline particles glistening like diamonds under the distant rays of starlight.",
  },
  {
    id: "sun",
    name: "The Sun",
    distance: "149,600,000 KM",
    science: "Corona: 1,000,000 K • Solar Wind Velocity: 400 KM/s",
    visualization:
      "Soaring towards the eternal solar corona. Bathed in the primal light that sustains all consciousness, shedding every shadow, boundary, and limitation.",
  },
  {
    id: "deep-void",
    name: "Deep Cosmos",
    distance: "24,000,000,000 KM",
    science: "Interstellar Medium • Voyager 1 Horizon • Heliopause Boundary",
    visualization:
      "Crossing into the quiet silence between stars. No ground, no horizon. The universe is not around you — it is within you.",
  },
];

const MEDITATION_STEPS = [
  {
    phase: "Somatic Grounding",
    action: "RELEASE",
    instruction:
      "Drop your shoulders away from your ears. Unclench your jaw and soften the muscles around your eyes. Feel the weight you carry dissolve.",
  },
  {
    phase: "Diaphragmatic Inhale",
    action: "INHALE (4s)",
    instruction:
      "Inhale slowly through the nose... feel your ribcage expand in all directions. Draw in the quiet clarity of open space.",
  },
  {
    phase: "Suspended Stillness",
    action: "HOLD (4s)",
    instruction:
      "Hold the breath gently at the peak. Do not strain. Notice the stillness between thoughts — calm, weightless, untouched.",
  },
  {
    phase: "Complete Release",
    action: "EXHALE (4s)",
    instruction:
      "Exhale smoothly through the mouth, emptying the lungs completely. Let gravity let go of you.",
  },
  {
    phase: "Orbital Consciousness",
    action: "SOAR",
    instruction:
      "Now allow your awareness to rise. Look down upon the curvature of the Earth. You are the quiet expanse in which the music resonates.",
  },
];

const PHILOSOPHY_QUOTES = [
  {
    quote:
      "The light dove, cleaving the air in her free flight, and feeling its resistance, might imagine that her flight would be still easier in empty space.",
    author: "Immanuel Kant",
    work: "Critique of Pure Reason, 1781",
  },
  {
    quote:
      "The higher we soar, the smaller we appear to those who cannot fly.",
    author: "Friedrich Nietzsche",
    work: "Thus Spoke Zarathustra, 1883",
  },
  {
    quote:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    author: "Albert Einstein",
    work: "What Life Means to Einstein, 1929",
  },
  {
    quote:
      "The cosmos is within us. We are made of star-stuff. We are a way for the cosmos to know itself.",
    author: "Carl Sagan",
    work: "Cosmos, 1980",
  },
  {
    quote:
      "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.",
    author: "Leonardo da Vinci",
    work: "Codex on the Flight of Birds",
  },
  {
    quote:
      "Look at the stars and see yourself running with them. Constantly contemplate the changes of the universe.",
    author: "Marcus Aurelius",
    work: "Meditations, Book VII",
  },
];

export default function CosmosAestheticPanel() {
  const { currentSong, isPlaying, togglePlay, playSong, songs } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  const [activeTab, setActiveTab] = useState<
    "meditation" | "celestial" | "philosophy"
  >("meditation");

  const [selectedDestId, setSelectedDestId] = useState<string>("moon");
  const [meditationIndex, setMeditationIndex] = useState<number>(0);
  const [philosophyIndex, setPhilosophyIndex] = useState<number>(0);

  const currentDest =
    CELESTIAL_DATA.find((d) => d.id === selectedDestId) || CELESTIAL_DATA[0];

  // Auto-advance meditation steps smoothly
  useEffect(() => {
    if (activeTab !== "meditation") return;
    const timer = setInterval(() => {
      setMeditationIndex((prev) => (prev + 1) % MEDITATION_STEPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab]);

  // Auto-advance philosophy quotes smoothly
  useEffect(() => {
    if (activeTab !== "philosophy") return;
    const timer = setInterval(() => {
      setPhilosophyIndex((prev) => (prev + 1) % PHILOSOPHY_QUOTES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handleSelectDest = (id: string) => {
    setSelectedDestId(id);
    if (!isFlyAwayPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const currentMeditation = MEDITATION_STEPS[meditationIndex];
  const currentPhilosophy = PHILOSOPHY_QUOTES[philosophyIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#101012] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl select-none transition-all duration-300 hover:border-white/20 h-full">
      {/* 1. Header: Pure Minimalist Typography (No AI Sparkle Icons) */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase">
              {isFlyAwayPlaying ? "Spatial Audio Active" : "Guided Meditation"}
            </span>
          </div>
        </div>

        {/* 2. Apple-Style Segmented Control */}
        <div className="grid grid-cols-3 p-1 rounded-xl bg-black/60 border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab("meditation")}
            className={`py-2 rounded-lg font-medium transition-all text-center ${
              activeTab === "meditation"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Meditation
          </button>
          <button
            onClick={() => setActiveTab("celestial")}
            className={`py-2 rounded-lg font-medium transition-all text-center ${
              activeTab === "celestial"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Celestial Horizons
          </button>
          <button
            onClick={() => setActiveTab("philosophy")}
            className={`py-2 rounded-lg font-medium transition-all text-center ${
              activeTab === "philosophy"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Philosophy & Science
          </button>
        </div>

        {/* 3. Dynamic Center Showcase */}
        <div className="py-2 min-h-[190px] flex flex-col justify-center">
          {/* TAB 1: PROFESSIONAL GUIDED MEDITATION */}
          {activeTab === "meditation" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {currentMeditation.phase}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest bg-white/10 text-white font-semibold">
                  {currentMeditation.action}
                </span>
              </div>

              <p className="text-sm sm:text-base text-white font-light leading-relaxed tracking-wide transition-opacity duration-500">
                &ldquo;{currentMeditation.instruction}&rdquo;
              </p>

              {/* Progress Breath Bar */}
              <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden mt-4">
                <div
                  className="bg-white h-full transition-all duration-1000 ease-linear"
                  style={{
                    width: `${((meditationIndex + 1) / MEDITATION_STEPS.length) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
                <span>Guided Diaphragmatic Breathwork</span>
                <span>
                  Phase {meditationIndex + 1} of {MEDITATION_STEPS.length}
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: CELESTIAL HORIZONS (REAL SCIENCE + VISUALIZATION) */}
          {activeTab === "celestial" && (
            <div className="space-y-3">
              {/* Destination Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {CELESTIAL_DATA.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectDest(dest.id)}
                    className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all border ${
                      selectedDestId === dest.id
                        ? "bg-white text-black font-semibold border-white shadow-sm"
                        : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {dest.name}
                  </button>
                ))}
              </div>

              <div className="pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  <span className="text-white font-semibold">
                    {currentDest.name}
                  </span>
                  <span>{currentDest.distance}</span>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 mb-2">
                  {currentDest.science}
                </p>
                <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed tracking-wide italic">
                  &ldquo;{currentDest.visualization}&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: PHILOSOPHY & SCIENCE (KANT, NIETZSCHE, EINSTEIN, SAGAN) */}
          {activeTab === "philosophy" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <span className="text-white font-semibold">
                  {currentPhilosophy.author}
                </span>
                <span>{currentPhilosophy.work}</span>
              </div>

              <p className="text-sm sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide italic transition-opacity duration-500">
                &ldquo;{currentPhilosophy.quote}&rdquo;
              </p>

              <div className="flex items-center gap-1 pt-2">
                {PHILOSOPHY_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhilosophyIndex(idx)}
                    className={`h-1 rounded-full transition-all ${
                      idx === philosophyIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Foundational Core Reflections (Always visible, elegant hairline border) */}
      <div className="relative z-10 space-y-3 border-t border-white/5 pt-4 my-2">
        <div className="group pl-3.5 border-l-2 border-white/70">
          <p className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 mb-0.5">
            Want to fly?
          </p>
          <p className="text-xs text-zinc-400 font-light italic">
            It always starts with imagination.
          </p>
          <p className="text-xs sm:text-sm text-white font-medium mt-0.5 leading-relaxed">
            And once you have learned to fly in your mind, even the universe is no longer the limit.
          </p>
        </div>

        <div className="group pl-3.5 border-l-2 border-zinc-700/60">
          <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
            I asked the universe why we cannot fly? She whispered,{" "}
            <span className="font-semibold text-white">
              &ldquo;the cosmos is soaring with you.&rdquo;
            </span>
          </p>
        </div>
      </div>

      {/* 5. Bottom Audio Dock: Tactile & Lossless */}
      <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayToggle}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg"
            title={isFlyAwayPlaying ? "Pause" : "Play"}
          >
            {isFlyAwayPlaying ? (
              <Pause className="w-4 h-4 fill-black" />
            ) : (
              <Play className="w-4 h-4 fill-black ml-0.5" />
            )}
          </button>

          <div>
            <p className="text-xs font-bold text-white tracking-tight">Fly away</p>
            <p className="text-[11px] text-zinc-400">ZION • Original Master</p>
          </div>
        </div>

        {/* Live Audio Equalizer Waveform */}
        {isFlyAwayPlaying ? (
          <div className="flex items-center gap-1 h-4">
            <span className="w-0.5 bg-white rounded-full animate-equalize1 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4 h-full" />
          </div>
        ) : (
          <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
            24-BIT LOSSLESS
          </span>
        )}
      </div>
    </div>
  );
}
