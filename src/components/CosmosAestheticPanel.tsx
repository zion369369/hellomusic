"use client";

import React, { useState, useEffect, useRef } from "react";
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

const CALM_MEDITATION_PHRASES = [
  {
    cue: "Somatic Grounding",
    phase: "Grounding",
    thought:
      "Allow your shoulders to drop away from your ears. Let your awareness settle softly into the sound.",
  },
  {
    cue: "Gentle Inhale",
    phase: "Inhale",
    thought:
      "Breathe in slowly and naturally... drawing in the quiet clarity of open space.",
  },
  {
    cue: "Stillness",
    phase: "Hold",
    thought:
      "Notice the peaceful pause between thoughts. Nothing to solve, nowhere else to be.",
  },
  {
    cue: "Release",
    phase: "Exhale",
    thought:
      "Exhale completely, releasing all weight, tension, and terrestrial gravity.",
  },
  {
    cue: "Elevation",
    phase: "Orbit",
    thought:
      "You are floating in calm, clear awareness. The cosmos is soaring with you.",
  },
];

// Strictly Immanuel Kant & Friedrich Nietzsche
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
      "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying.",
    author: "Friedrich Nietzsche",
    work: "Thus Spoke Zarathustra, 1883",
  },
  {
    quote:
      "Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me.",
    author: "Immanuel Kant",
    work: "Critique of Practical Reason, 1788",
  },
  {
    quote:
      "And those who were seen dancing were thought to be insane by those who could not hear the music.",
    author: "Friedrich Nietzsche",
    work: "Thus Spoke Zarathustra",
  },
];

// Strictly Albert Einstein & Carl Sagan
const SCIENCE_QUOTES = [
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
      "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    author: "Albert Einstein",
    work: "The World As I See It, 1931",
  },
  {
    quote:
      "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, lived out their lives.",
    author: "Carl Sagan",
    work: "Pale Blue Dot, 1994",
  },
  {
    quote:
      "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
    author: "Carl Sagan",
    work: "Cosmos, 1980",
  },
  {
    quote:
      "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstein",
    work: "The World As I See It",
  },
];

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    activeImaginationId,
    setActiveImaginationId,
  } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  const [activeTab, setActiveTab] = useState<
    "meditation" | "celestial" | "philosophy" | "science"
  >("meditation");

  const [selectedDestId, setSelectedDestId] = useState<string>("moon");
  const [meditationIndex, setMeditationIndex] = useState<number>(0);
  const [philosophyIndex, setPhilosophyIndex] = useState<number>(0);
  const [scienceIndex, setScienceIndex] = useState<number>(0);
  const [isSoftFading, setIsSoftFading] = useState<boolean>(false);

  // Synchronize perfectly with activeImaginationId from Sidebar
  useEffect(() => {
    if (!activeImaginationId) return;

    if (activeImaginationId === "meditation") {
      setActiveTab("meditation");
    } else if (activeImaginationId === "philosophy") {
      setActiveTab("philosophy");
    } else if (activeImaginationId === "science") {
      setActiveTab("science");
    } else {
      const match = CELESTIAL_DATA.find((d) => d.id === activeImaginationId);
      if (match) {
        setActiveTab("celestial");
        setSelectedDestId(match.id);
      }
    }
  }, [activeImaginationId]);

  const currentDest =
    CELESTIAL_DATA.find((d) => d.id === selectedDestId) || CELESTIAL_DATA[0];

  // Meditation soft cycle
  useEffect(() => {
    if (activeTab !== "meditation") return;

    const timer = setInterval(() => {
      setIsSoftFading(true);
      setTimeout(() => {
        setMeditationIndex(
          (prev) => (prev + 1) % CALM_MEDITATION_PHRASES.length
        );
        setIsSoftFading(false);
      }, 700);
    }, 9000);

    return () => clearInterval(timer);
  }, [activeTab]);

  // Philosophy quotes: Nietzsche & Kant (10s soft cross-fade)
  const isPhilFadingRef = useRef(false);
  useEffect(() => {
    if (activeTab !== "philosophy") return;

    const timer = setInterval(() => {
      if (isPhilFadingRef.current) return;
      isPhilFadingRef.current = true;
      setIsSoftFading(true);

      setTimeout(() => {
        setPhilosophyIndex((prev) => (prev + 1) % PHILOSOPHY_QUOTES.length);
        setIsSoftFading(false);
        isPhilFadingRef.current = false;
      }, 700);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeTab]);

  // Science quotes: Einstein & Sagan (10s soft cross-fade)
  const isSciFadingRef = useRef(false);
  useEffect(() => {
    if (activeTab !== "science") return;

    const timer = setInterval(() => {
      if (isSciFadingRef.current) return;
      isSciFadingRef.current = true;
      setIsSoftFading(true);

      setTimeout(() => {
        setScienceIndex((prev) => (prev + 1) % SCIENCE_QUOTES.length);
        setIsSoftFading(false);
        isSciFadingRef.current = false;
      }, 700);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeTab]);

  const handleSelectDest = (id: string) => {
    setIsSoftFading(true);
    setTimeout(() => {
      setSelectedDestId(id);
      setActiveImaginationId(id);
      setIsSoftFading(false);
    }, 350);

    if (!isFlyAwayPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handleTabChange = (
    tab: "meditation" | "celestial" | "philosophy" | "science"
  ) => {
    setActiveTab(tab);
    if (tab === "philosophy") setActiveImaginationId("philosophy");
    else if (tab === "science") setActiveImaginationId("science");
    else if (tab === "celestial") setActiveImaginationId(selectedDestId);
    else if (tab === "meditation") setActiveImaginationId("meditation");
  };

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const currentMeditation = CALM_MEDITATION_PHRASES[meditationIndex];
  const currentPhilosophy = PHILOSOPHY_QUOTES[philosophyIndex];
  const currentScience = SCIENCE_QUOTES[scienceIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 p-4 sm:p-7 flex flex-col justify-between shadow-2xl select-none transition-all duration-300 hover:border-white/20 h-full">
      {/* 1. Top Status Bar */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase">
              {isFlyAwayPlaying ? "Spatial Sound Active" : "Mindful Presence"}
            </span>
          </div>
        </div>

        {/* 2. Apple / Spotify Segmented Tabs (Meditation, Celestial, Philosophy, Science) */}
        <div className="grid grid-cols-4 p-1 rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs">
          <button
            onClick={() => handleTabChange("meditation")}
            className={`py-1.5 sm:py-2 rounded-lg font-medium transition-all text-center truncate px-1 ${
              activeTab === "meditation"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Meditation
          </button>
          <button
            onClick={() => handleTabChange("celestial")}
            className={`py-1.5 sm:py-2 rounded-lg font-medium transition-all text-center truncate px-1 ${
              activeTab === "celestial"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Celestial
          </button>
          <button
            onClick={() => handleTabChange("philosophy")}
            className={`py-1.5 sm:py-2 rounded-lg font-medium transition-all text-center truncate px-1 ${
              activeTab === "philosophy"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Philosophy
          </button>
          <button
            onClick={() => handleTabChange("science")}
            className={`py-1.5 sm:py-2 rounded-lg font-medium transition-all text-center truncate px-1 ${
              activeTab === "science"
                ? "bg-white text-black font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Science
          </button>
        </div>

        {/* 3. Dynamic Center Showcase */}
        <div className="py-2 min-h-[160px] sm:min-h-[190px] flex flex-col justify-center">
          {/* TAB 1: CALM MEDITATION */}
          {activeTab === "meditation" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {currentMeditation.cue}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest bg-white/10 text-white font-semibold uppercase">
                  {currentMeditation.phase}
                </span>
              </div>

              <div className="min-h-[58px] sm:min-h-[64px] flex items-center">
                <p
                  className={`text-xs sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide transition-all duration-700 ease-in-out ${
                    isSoftFading
                      ? "opacity-0 blur-[2px] translate-y-1"
                      : "opacity-100 blur-0 translate-y-0"
                  }`}
                >
                  &ldquo;{currentMeditation.thought}&rdquo;
                </p>
              </div>

              {/* Serene Breathing Bar */}
              <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-white h-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${((meditationIndex + 1) / CALM_MEDITATION_PHRASES.length) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-500 pt-1">
                <span>Diaphragmatic Calm</span>
                <span>Unhurried Pacing</span>
              </div>
            </div>
          )}

          {/* TAB 2: CELESTIAL HORIZONS */}
          {activeTab === "celestial" && (
            <div className="space-y-3">
              {/* Destination Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                {CELESTIAL_DATA.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectDest(dest.id)}
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs whitespace-nowrap transition-all border ${
                      currentDest.id === dest.id
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
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 mb-1.5 sm:mb-2">
                  {currentDest.science}
                </p>
                <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed tracking-wide italic">
                  &ldquo;{currentDest.visualization}&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: PHILOSOPHY (KANT & NIETZSCHE ONLY) */}
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
                <span className="truncate max-w-[170px] sm:max-w-none">
                  {currentPhilosophy.work}
                </span>
              </div>

              <div className="min-h-[58px] sm:min-h-[64px] flex items-center">
                <p className="text-xs sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide italic">
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

          {/* TAB 4: SCIENCE (EINSTEIN & SAGAN ONLY) */}
          {activeTab === "science" && (
            <div
              className={`space-y-3 transition-all duration-700 ease-in-out ${
                isSoftFading
                  ? "opacity-0 blur-[2px] translate-y-1"
                  : "opacity-100 blur-0 translate-y-0"
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                <span className="text-white font-semibold">
                  {currentScience.author}
                </span>
                <span className="truncate max-w-[170px] sm:max-w-none">
                  {currentScience.work}
                </span>
              </div>

              <div className="min-h-[58px] sm:min-h-[64px] flex items-center">
                <p className="text-xs sm:text-base text-zinc-100 font-light leading-relaxed tracking-wide italic">
                  &ldquo;{currentScience.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-1 pt-1">
                {SCIENCE_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsSoftFading(true);
                      setTimeout(() => {
                        setScienceIndex(idx);
                        setIsSoftFading(false);
                      }, 300);
                    }}
                    className={`h-1 rounded-full transition-all ${
                      idx === scienceIndex
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

      {/* 4. Foundational Core Reflections */}
      <div className="relative z-10 space-y-2.5 sm:space-y-3 border-t border-white/5 pt-3 sm:pt-4 my-2">
        <div className="group pl-3 border-l-2 border-white/70">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-zinc-400 mb-0.5">
            Want to fly?
          </p>
          <p className="text-[11px] sm:text-xs text-zinc-400 font-light italic">
            It always starts with imagination.
          </p>
          <p className="text-xs sm:text-sm text-white font-medium mt-0.5 leading-relaxed">
            And once you have learned to fly in your mind, even the universe is no longer the limit.
          </p>
        </div>

        <div className="group pl-3 border-l-2 border-zinc-700/60">
          <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
            I asked the universe why we cannot fly? She whispered,{" "}
            <span className="font-semibold text-white">
              &ldquo;the cosmos is soaring with you.&rdquo;
            </span>
          </p>
        </div>
      </div>

      {/* 5. Bottom Audio Dock: Spotify-grade Tactile Player */}
      <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={handlePlayToggle}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg"
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
            <p className="text-[10px] sm:text-[11px] text-zinc-400">
              ZION • Original Master
            </p>
          </div>
        </div>

        {/* Live Audio Equalizer Waveform */}
        {isFlyAwayPlaying ? (
          <div className="flex items-center gap-1 h-3.5 sm:h-4">
            <span className="w-0.5 bg-white rounded-full animate-equalize1 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4 h-full" />
          </div>
        ) : (
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 tracking-wider">
            24-BIT LOSSLESS
          </span>
        )}
      </div>
    </div>
  );
}
