"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { Play, Pause, RotateCcw } from "lucide-react";

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
    "breathing" | "celestial" | "philosophy"
  >("breathing");

  const [selectedDestId, setSelectedDestId] = useState<string>("moon");
  const [philosophyIndex, setPhilosophyIndex] = useState<number>(0);
  const [isSoftFading, setIsSoftFading] = useState<boolean>(false);

  // 30-Second Breath Reset State
  const [breathSecondsLeft, setBreathSecondsLeft] = useState<number>(30);
  const [isBreathActive, setIsBreathActive] = useState<boolean>(true);

  const currentDest =
    CELESTIAL_DATA.find((d) => d.id === selectedDestId) || CELESTIAL_DATA[0];

  // 30-Second Breath Countdown & Phases (10s per cycle x 3 cycles = 30s total)
  useEffect(() => {
    if (!isBreathActive) return;

    const interval = setInterval(() => {
      setBreathSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsBreathActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathActive]);

  const restartBreathReset = () => {
    setBreathSecondsLeft(30);
    setIsBreathActive(true);
  };

  // Determine current 10s cycle phase inside 30-second reset
  // Cycle timing within each 10s: 0-4s Inhale, 4-6s Hold, 6-10s Exhale
  const elapsed = 30 - breathSecondsLeft;
  const cycleSeconds = elapsed % 10;
  const cycleNumber = Math.min(3, Math.floor(elapsed / 10) + 1);

  let breathPhaseText = "Inhale";
  let breathInstruction =
    "Inhale slowly through the nose... expanding your chest with calm clarity.";
  if (cycleSeconds >= 4 && cycleSeconds < 6) {
    breathPhaseText = "Hold";
    breathInstruction =
      "Hold the breath gently in stillness. Feel the quiet between thoughts.";
  } else if (cycleSeconds >= 6) {
    breathPhaseText = "Exhale";
    breathInstruction =
      "Exhale smoothly and completely. Releasing all gravity and weight.";
  }

  // Soft slow auto-advance for Philosophy quotes (gentle cross-fade every 10 seconds)
  const isFadingRef = useRef(false);
  useEffect(() => {
    if (activeTab !== "philosophy") return;

    const timer = setInterval(() => {
      if (isFadingRef.current) return;
      isFadingRef.current = true;
      setIsSoftFading(true);

      setTimeout(() => {
        setPhilosophyIndex((prev) => (prev + 1) % PHILOSOPHY_QUOTES.length);
        setIsSoftFading(false);
        isFadingRef.current = false;
      }, 700);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeTab]);

  const handleSelectDest = (id: string) => {
    setIsSoftFading(true);
    setTimeout(() => {
      setSelectedDestId(id);
      setIsSoftFading(false);
    }, 400);

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

  const currentPhilosophy = PHILOSOPHY_QUOTES[philosophyIndex];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#101012] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl select-none transition-all duration-300 hover:border-white/20 h-full">
      {/* 1. Header: Pure Minimalist Typography */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-400 uppercase">
              {isFlyAwayPlaying ? "Spatial Audio Active" : "30s Breath Reset"}
            </span>
          </div>
        </div>

        {/* 2. Apple-Style Segmented Control */}
        <div className="grid grid-cols-3 p-1 rounded-xl bg-black/60 border border-white/10 text-xs">
          <button
            onClick={() => setActiveTab("breathing")}
            className={`py-2 rounded-lg font-medium transition-all text-center ${
              activeTab === "breathing"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            30s Breath
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
          {/* TAB 1: 30-SECOND BREATH RESET */}
          {activeTab === "breathing" && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {isBreathActive
                    ? `Cycle ${cycleNumber} of 3 • ${breathSecondsLeft}s Left`
                    : "Reset Complete"}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest bg-white/10 text-white font-semibold uppercase">
                  {isBreathActive ? breathPhaseText : "Mind in Flight"}
                </span>
              </div>

              <div className="min-h-[56px] flex items-center">
                <p className="text-sm sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide transition-opacity duration-700">
                  {isBreathActive
                    ? `“${breathInstruction}”`
                    : "“30-second breath reset complete. Gravity released. Your mind is ready to soar.”"}
                </p>
              </div>

              {/* 30-Second Countdown Progress Bar */}
              <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden mt-3">
                <div
                  className="bg-white h-full transition-all duration-1000 ease-linear"
                  style={{
                    width: `${((30 - breathSecondsLeft) / 30) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
                <span>30-Second Diaphragmatic Cadence</span>
                {!isBreathActive && (
                  <button
                    onClick={restartBreathReset}
                    className="flex items-center gap-1 text-white hover:text-cyan-300 transition uppercase font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Repeat 30s Reset</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CELESTIAL HORIZONS (REAL SCIENCE + SOFT CHANGING) */}
          {activeTab === "celestial" && (
            <div className="space-y-3">
              {/* Destination Selector */}
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

              <div
                className={`pt-1 transition-all duration-500 ease-in-out ${
                  isSoftFading
                    ? "opacity-0 blur-[1px] translate-y-0.5"
                    : "opacity-100 blur-0 translate-y-0"
                }`}
              >
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

          {/* TAB 3: PHILOSOPHY & SCIENCE (SOFT CROSS-FADE TRANSITIONS) */}
          {activeTab === "philosophy" && (
            <div
              className={`space-y-3 transition-all duration-700 ease-in-out ${
                isSoftFading
                  ? "opacity-0 blur-[2px] translate-y-1"
                  : "opacity-100 blur-0 translate-y-0"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <span className="text-white font-semibold">
                  {currentPhilosophy.author}
                </span>
                <span>{currentPhilosophy.work}</span>
              </div>

              <div className="min-h-[64px] flex items-center">
                <p className="text-sm sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide italic">
                  &ldquo;{currentPhilosophy.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-1 pt-1">
                {PHILOSOPHY_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsSoftFading(true);
                      setTimeout(() => {
                        setPhilosophyIndex(idx);
                        setIsSoftFading(false);
                      }, 300);
                    }}
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

      {/* 4. Foundational Core Reflections (Always visible, clean hairline border) */}
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
