"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Play,
  Pause,
  RotateCcw,
  Send,
  Heart,
  MessageSquare,
} from "lucide-react";

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

interface ImaginationComment {
  id: string;
  author: string;
  handle: string;
  text: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

const DEFAULT_IMAGINATIONS: ImaginationComment[] = [
  {
    id: "c1",
    author: "Leo",
    handle: "@leo_orbit",
    text: "Floating above Saturn's ice rings with Fly away playing in my ears. Absolute serenity.",
    timestamp: "2m ago",
    likes: 8,
  },
  {
    id: "c2",
    author: "Sophia",
    handle: "@sophia_mind",
    text: "Kant wrote about the dove wishing for empty space... after 30s of meditation, I finally feel what he meant.",
    timestamp: "12m ago",
    likes: 14,
  },
  {
    id: "c3",
    author: "Alex",
    handle: "@alex_cosmic",
    text: "Just looked at Earth as a pale blue dot. All my everyday anxiety instantly vanished.",
    timestamp: "45m ago",
    likes: 19,
  },
  {
    id: "c4",
    author: "Maya",
    handle: "@maya_nebula",
    text: "Beyond the solar corona. Once you fly in your mind, there are no limits.",
    timestamp: "1h ago",
    likes: 22,
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
    currentUser,
  } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  const [activeTab, setActiveTab] = useState<
    "meditation" | "celestial" | "philosophy" | "science" | "imagination"
  >("meditation");

  const [selectedDestId, setSelectedDestId] = useState<string>("moon");
  const [philosophyIndex, setPhilosophyIndex] = useState<number>(0);
  const [scienceIndex, setScienceIndex] = useState<number>(0);
  const [isSoftFading, setIsSoftFading] = useState<boolean>(false);

  // 30-Second Guided Meditation State (Starts from scratch when clicked!)
  const [meditationSeconds, setMeditationSeconds] = useState<number>(0);
  const [isMeditationActive, setIsMeditationActive] = useState<boolean>(true);

  // Community Comments / Share Imagination State
  const [imaginations, setImaginations] = useState<ImaginationComment[]>(DEFAULT_IMAGINATIONS);
  const [newCommentText, setNewCommentText] = useState<string>("");
  const [newCommentAuthor, setNewCommentAuthor] = useState<string>("");
  const [isSubmittedJustNow, setIsSubmittedJustNow] = useState<boolean>(false);

  // Load persisted community imaginations from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hellomusic_imagination_comments");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setImaginations(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Function to start meditation from scratch (0 seconds)
  const startMeditationFromScratch = useCallback(() => {
    setIsSoftFading(true);
    setMeditationSeconds(0);
    setIsMeditationActive(true);
    setTimeout(() => {
      setIsSoftFading(false);
    }, 200);

    if (!isFlyAwayPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  }, [flyAwaySong, isFlyAwayPlaying, playSong]);

  // Synchronize perfectly with activeImaginationId from Sidebar or Navigation
  useEffect(() => {
    if (!activeImaginationId) return;

    if (activeImaginationId === "meditation") {
      setActiveTab("meditation");
      startMeditationFromScratch();
    } else if (activeImaginationId === "philosophy") {
      setActiveTab("philosophy");
    } else if (activeImaginationId === "science") {
      setActiveTab("science");
    } else if (activeImaginationId === "imagination") {
      setActiveTab("imagination");
    } else {
      const match = CELESTIAL_DATA.find((d) => d.id === activeImaginationId);
      if (match) {
        setActiveTab("celestial");
        setSelectedDestId(match.id);
      }
    }
  }, [activeImaginationId, startMeditationFromScratch]);

  // 30-Second Meditation Timer: runs 0 to 30 seconds
  useEffect(() => {
    if (activeTab !== "meditation" || !isMeditationActive) return;

    if (meditationSeconds >= 30) return;

    const interval = setInterval(() => {
      setMeditationSeconds((prev) => {
        if (prev >= 29) {
          return 30;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, isMeditationActive, meditationSeconds]);

  const handleTabChange = (
    tab: "meditation" | "celestial" | "philosophy" | "science" | "imagination"
  ) => {
    setActiveTab(tab);
    if (tab === "meditation") {
      setActiveImaginationId("meditation");
      startMeditationFromScratch();
    } else if (tab === "philosophy") {
      setActiveImaginationId("philosophy");
    } else if (tab === "science") {
      setActiveImaginationId("science");
    } else if (tab === "celestial") {
      setActiveImaginationId(selectedDestId);
    } else if (tab === "imagination") {
      setActiveImaginationId("imagination");
    }
  };

  const handleSelectDest = (id: string) => {
    setIsSoftFading(true);
    setTimeout(() => {
      setSelectedDestId(id);
      setActiveImaginationId(id);
      setIsSoftFading(false);
    }, 300);

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

  // Submit a new imagination comment
  const handlePostImagination = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const authorName =
      newCommentAuthor.trim() ||
      currentUser?.username ||
      "Cosmic Voyager";
    const authorHandle = `@${authorName.toLowerCase().replace(/\s+/g, "_")}`;

    const newComment: ImaginationComment = {
      id: Date.now().toString(),
      author: authorName,
      handle: authorHandle,
      text: newCommentText.trim(),
      timestamp: "Just now",
      likes: 1,
      isLiked: true,
    };

    const updated = [newComment, ...imaginations];
    setImaginations(updated);
    setNewCommentText("");
    setIsSubmittedJustNow(true);
    setTimeout(() => setIsSubmittedJustNow(false), 3000);

    try {
      localStorage.setItem("hellomusic_imagination_comments", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleToggleLikeComment = (commentId: string) => {
    setImaginations((prev) => {
      const next = prev.map((item) => {
        if (item.id === commentId) {
          const wasLiked = item.isLiked;
          return {
            ...item,
            isLiked: !wasLiked,
            likes: wasLiked ? Math.max(0, item.likes - 1) : item.likes + 1,
          };
        }
        return item;
      });
      try {
        localStorage.setItem("hellomusic_imagination_comments", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const currentDest =
    CELESTIAL_DATA.find((d) => d.id === selectedDestId) || CELESTIAL_DATA[0];
  const currentPhilosophy = PHILOSOPHY_QUOTES[philosophyIndex];
  const currentScience = SCIENCE_QUOTES[scienceIndex];

  // 30-Second Meditation Phase Resolver (Light, Fun & Engaging)
  const getMeditationContent = (sec: number) => {
    if (sec < 8) {
      return {
        cue: "Gentle Inhale",
        phase: "Breathe In",
        title: "Take a breath... why so serious?",
        thought:
          "Drop your shoulders away from your ears. Inhale the calm space around you, feel the rhythm of Fly away, and relax.",
      };
    } else if (sec < 16) {
      return {
        cue: "Weightlessness",
        phase: "Lifting Off",
        title: "Imagine you are weightless",
        thought:
          "Floating softly upward above the floor. Rising through gentle golden clouds into cool, serene open air.",
      };
    } else if (sec < 24) {
      return {
        cue: "Orbital Silence",
        phase: "Above Earth",
        title: "Look down at pale blue Earth",
        thought:
          "All the rush, noise, and pressure fade away into a quiet blue marble glowing in the dark. You are free.",
      };
    } else if (sec < 30) {
      return {
        cue: "Elevation",
        phase: "Zero Gravity",
        title: "Shedding all limits",
        thought:
          "In your mind, there are no ceilings, no walls, and no terrestrial gravity. You are pure elevation.",
      };
    } else {
      return {
        cue: "Transcendence",
        phase: "30s Complete",
        title: "Now imagine beyond the universe.",
        thought:
          "The cosmos is soaring with you. And once you have learned to fly in your mind, even the universe is no longer the limit.",
      };
    }
  };

  const currentMeditation = getMeditationContent(meditationSeconds);

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 p-3.5 sm:p-6 flex flex-col justify-between shadow-2xl select-none transition-all duration-300 hover:border-white/20 h-full">
      {/* 1. Top Status Bar */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase">
              {isFlyAwayPlaying ? "Spatial Sound Active" : "30s Mindful Flight"}
            </span>
          </div>
        </div>

        {/* 2. Apple / Spotify Scrollable Segmented Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs overflow-x-auto no-scrollbar">
          <button
            onClick={() => handleTabChange("meditation")}
            className={`py-1.5 px-3 rounded-lg font-medium transition-all whitespace-nowrap text-center ${
              activeTab === "meditation"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Meditation (30s)
          </button>
          <button
            onClick={() => handleTabChange("celestial")}
            className={`py-1.5 px-3 rounded-lg font-medium transition-all whitespace-nowrap text-center ${
              activeTab === "celestial"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Celestial
          </button>
          <button
            onClick={() => handleTabChange("philosophy")}
            className={`py-1.5 px-3 rounded-lg font-medium transition-all whitespace-nowrap text-center ${
              activeTab === "philosophy"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Philosophy
          </button>
          <button
            onClick={() => handleTabChange("science")}
            className={`py-1.5 px-3 rounded-lg font-medium transition-all whitespace-nowrap text-center ${
              activeTab === "science"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Science
          </button>
          <button
            onClick={() => handleTabChange("imagination")}
            className={`py-1.5 px-3 rounded-lg font-medium transition-all whitespace-nowrap text-center flex items-center gap-1.5 ${
              activeTab === "imagination"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Imaginations</span>
          </button>
        </div>

        {/* 3. Dynamic Center Showcase */}
        <div className="py-2 min-h-[165px] sm:min-h-[195px] flex flex-col justify-center">
          {/* TAB 1: 30-SECOND MEDITATION (FUN, EASY, LIGHT, RESETS ON CLICK) */}
          {activeTab === "meditation" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    {currentMeditation.cue}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-widest bg-cyan-500/20 text-cyan-300 font-bold uppercase border border-cyan-500/30">
                    {currentMeditation.phase}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-white">
                    {meditationSeconds < 30 ? `${30 - meditationSeconds}s left` : "30s"}
                  </span>
                  <button
                    onClick={startMeditationFromScratch}
                    className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
                    title="Restart 30s Meditation from scratch"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic 30s Big Heading */}
              <div className="min-h-[56px] sm:min-h-[64px] flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1 flex items-center gap-2">
                  <span>{currentMeditation.title}</span>
                  {meditationSeconds >= 30 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400 text-black font-black uppercase">
                      Unlocked
                    </span>
                  )}
                </h3>
                <p
                  className={`text-xs sm:text-sm text-zinc-200 font-light leading-relaxed tracking-wide transition-all duration-300 ${
                    isSoftFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  &ldquo;{currentMeditation.thought}&rdquo;
                </p>
              </div>

              {/* 30-Second Progress Line */}
              <div className="space-y-1.5 pt-1">
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-white h-full transition-all duration-1000 ease-linear"
                    style={{
                      width: `${Math.min(100, (meditationSeconds / 30) * 100)}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-400">
                  <span>Start (0s)</span>
                  {meditationSeconds >= 30 ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleTabChange("imagination")}
                        className="text-cyan-300 hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Share your imagination</span>
                        <span>→</span>
                      </button>
                      <button
                        onClick={startMeditationFromScratch}
                        className="text-white hover:underline font-semibold"
                      >
                        Restart 30s
                      </button>
                    </div>
                  ) : (
                    <span>Now imagine beyond the universe (30s)</span>
                  )}
                </div>
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
                className={`pt-1 transition-all duration-300 ease-in-out ${
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
              className={`space-y-3 transition-all duration-300 ease-in-out ${
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

              <div className="flex items-center gap-1.5 pt-1">
                {PHILOSOPHY_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsSoftFading(true);
                      setTimeout(() => {
                        setPhilosophyIndex(idx);
                        setIsSoftFading(false);
                      }, 200);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === philosophyIndex
                        ? "w-6 bg-white"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SCIENCE (EINSTEIN & SAGAN ONLY) */}
          {activeTab === "science" && (
            <div
              className={`space-y-3 transition-all duration-300 ease-in-out ${
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

              <div className="flex items-center gap-1.5 pt-1">
                {SCIENCE_QUOTES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsSoftFading(true);
                      setTimeout(() => {
                        setScienceIndex(idx);
                        setIsSoftFading(false);
                      }, 200);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === scienceIndex
                        ? "w-6 bg-white"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SHARE YOUR IMAGINATION (COMMUNITY COMMENTS) */}
          {activeTab === "imagination" && (
            <div className="space-y-3 max-h-[220px] overflow-y-auto no-scrollbar pr-1">
              {/* Comment Input */}
              <form onSubmit={handlePostImagination} className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newCommentAuthor}
                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                    placeholder="Your name / handle (optional)"
                    className="w-1/3 bg-black/50 border border-white/10 rounded-lg px-2.5 py-1 text-[11px] text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                  />
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      placeholder="Share your imagination..."
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-2.5 py-1 text-[11px] text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 pr-8"
                    />
                    <button
                      type="submit"
                      disabled={!newCommentText.trim()}
                      className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white disabled:opacity-30"
                      title="Post"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </form>

              {isSubmittedJustNow && (
                <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 rounded px-2 py-0.5 text-center">
                  Your imagination has been shared to the cosmos!
                </div>
              )}

              {/* Feed of Imaginations */}
              <div className="space-y-2 pt-1">
                {imaginations.map((c) => (
                  <div
                    key={c.id}
                    className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-start justify-between gap-2"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 mb-0.5">
                        <span className="font-bold text-white">{c.author}</span>
                        <span className="text-zinc-500">{c.handle}</span>
                        <span>•</span>
                        <span>{c.timestamp}</span>
                      </div>
                      <p className="text-xs text-zinc-200 font-light leading-snug">
                        {c.text}
                      </p>
                    </div>

                    <button
                      onClick={() => handleToggleLikeComment(c.id)}
                      className={`flex items-center gap-1 text-[10px] font-mono p-1 rounded transition ${
                        c.isLiked
                          ? "text-red-400"
                          : "text-zinc-500 hover:text-white"
                      }`}
                      title="Like imagination"
                    >
                      <Heart
                        className={`w-3 h-3 ${c.isLiked ? "fill-current" : ""}`}
                      />
                      <span>{c.likes}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. Foundational Core Reflections */}
      <div className="relative z-10 space-y-2 border-t border-white/5 pt-2.5 my-1.5">
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
      </div>

      {/* 5. Bottom Audio Dock: Spotify-grade Tactile Player */}
      <div className="relative z-10 pt-2.5 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={handlePlayToggle}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg flex-shrink-0"
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
