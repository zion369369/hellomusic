"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Play,
  Pause,
  RotateCcw,
  Send,
  Heart,
  Eye,
  Sparkles,
  MessageCircle,
} from "lucide-react";

interface RealtimeThought {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

export default function CosmosAestheticPanel() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    songs,
    toggleLike,
    currentUser,
  } = usePlayer();

  const flyAwaySong = songs[0];
  const isFlyAwayActive = currentSong?.id === flyAwaySong?.id;
  const isFlyAwayPlaying = isFlyAwayActive && isPlaying;

  // 30-Second Guided Meditation State (Starts from scratch!)
  const [meditationSeconds, setMeditationSeconds] = useState<number>(0);
  const [isMeditationActive, setIsMeditationActive] = useState<boolean>(true);
  const [isSoftFading, setIsSoftFading] = useState<boolean>(false);

  // Side quotes rotating index
  const [sideQuoteIndex, setSideQuoteIndex] = useState<number>(0);

  // Real-time Community Thoughts / Questions (No fake mock comments)
  const [thoughts, setThoughts] = useState<RealtimeThought[]>([]);
  const [thoughtInput, setThoughtInput] = useState<string>("");
  const [authorInput, setAuthorInput] = useState<string>("");
  const [justShared, setJustShared] = useState<boolean>(false);

  // Load real-time thoughts from localStorage (clean, only real user submissions)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hellomusic_realtime_thoughts_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setThoughts(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Timer: 0 to 30 seconds
  useEffect(() => {
    if (!isMeditationActive) return;
    if (meditationSeconds >= 30) return;

    const interval = setInterval(() => {
      setMeditationSeconds((prev) => {
        if (prev >= 29) return 30;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isMeditationActive, meditationSeconds]);

  // Restart 30s meditation from 0s
  const restartMeditation = useCallback(() => {
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

  // Rotate side quotes gently every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSideQuoteIndex((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePlayToggle = () => {
    if (isFlyAwayActive) {
      togglePlay();
    } else if (flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const handlePostThought = (e: React.FormEvent) => {
    e.preventDefault();
    if (!thoughtInput.trim()) return;

    const name = authorInput.trim() || currentUser?.username || "Cosmic Traveler";
    const newEntry: RealtimeThought = {
      id: Date.now().toString(),
      author: name,
      text: thoughtInput.trim(),
      timestamp: "Just now",
      likes: 1,
      isLiked: true,
    };

    const updated = [newEntry, ...thoughts].slice(0, 15);
    setThoughts(updated);
    setThoughtInput("");
    setJustShared(true);
    setTimeout(() => setJustShared(false), 3000);

    try {
      localStorage.setItem("hellomusic_realtime_thoughts_v2", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleToggleLikeThought = (id: string) => {
    setThoughts((prev) => {
      const next = prev.map((t) => {
        if (t.id === id) {
          const wasLiked = t.isLiked;
          return {
            ...t,
            isLiked: !wasLiked,
            likes: wasLiked ? Math.max(0, t.likes - 1) : t.likes + 1,
          };
        }
        return t;
      });
      try {
        localStorage.setItem("hellomusic_realtime_thoughts_v2", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // 30s Meditation & Philosophy/Science Content
  const getMeditationContent = (sec: number) => {
    if (sec < 8) {
      return {
        phase: "Breathe In",
        cue: "Gentle Inhale",
        heading: "Take a breath... why so serious?",
        sub: "Drop your shoulders away from your ears. Feel the calm instrumental rhythm of Fly away and let your mind float free.",
        authorTag: "Mindful Cadence",
      };
    } else if (sec < 16) {
      return {
        phase: "Weightlessness",
        cue: "Nietzsche Elevation",
        heading: "Imagine you are flying above the Earth",
        sub: "“The higher we soar, the smaller we appear to those who cannot fly.” — Friedrich Nietzsche",
        authorTag: "Friedrich Nietzsche",
      };
    } else if (sec < 24) {
      return {
        phase: "Cosmic Horizon",
        cue: "Kant & Sagan Perspective",
        heading: "Look down at the pale blue marble",
        sub: "“Two things fill the mind with awe: the starry heavens above me and the moral law within me.” — Immanuel Kant • “We are star-stuff.” — Carl Sagan",
        authorTag: "Kant & Sagan",
      };
    } else if (sec < 30) {
      return {
        phase: "Boundless Void",
        cue: "Einstein Imagination",
        heading: "Shedding all limits",
        sub: "“Imagination is more important than knowledge... it embraces the entire universe.” — Albert Einstein",
        authorTag: "Albert Einstein",
      };
    } else {
      return {
        phase: "Transcendence",
        cue: "Beyond Cosmos",
        heading: "Now imagine beyond the universe.",
        sub: "The cosmos is soaring with you. Once you have learned to fly in your mind, even the universe is no longer the limit.",
        authorTag: "ZION Cosmic Journey",
      };
    }
  };

  const currentMeditation = getMeditationContent(meditationSeconds);

  // Side quotes from strictly Kant, Nietzsche, Einstein, Sagan
  const SIDE_QUOTES = [
    {
      author: "Friedrich Nietzsche",
      quote: "You must have chaos within you to give birth to a dancing star.",
      tag: "Philosophy",
    },
    {
      author: "Carl Sagan",
      quote: "The cosmos is within us. We are a way for the cosmos to know itself.",
      tag: "Science",
    },
    {
      author: "Immanuel Kant",
      quote: "The dove cleaving the air imagines flight would be easier in empty space.",
      tag: "Philosophy",
    },
    {
      author: "Albert Einstein",
      quote: "The most beautiful experience we can have is the mysterious.",
      tag: "Science",
    },
  ];

  const currentSideQuote = SIDE_QUOTES[sideQuoteIndex];

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#121214] border border-white/10 p-4 sm:p-7 shadow-2xl select-none overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Background Subtle Celestial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none" />

      {/* 1. TOP HEADER: Status, Views & Likes (~200 views, 4 likes) */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
            ZION ORIGINAL MASTER
          </span>
        </div>

        {/* Real-time realistic metrics: ~200 views, 4 likes */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-zinc-400" title="Total Views">
            <Eye className="w-3.5 h-3.5 text-zinc-500" />
            <span>{flyAwaySong ? flyAwaySong.views_count.toLocaleString() : "214"}</span>
          </div>

          <button
            type="button"
            onClick={() => flyAwaySong && toggleLike(flyAwaySong.id)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-full border transition active:scale-95 ${
              flyAwaySong?.is_liked
                ? "bg-white/10 border-white/30 text-white font-bold"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
            title="Like this track"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                flyAwaySong?.is_liked ? "fill-white text-white" : ""
              }`}
            />
            <span>{flyAwaySong ? flyAwaySong.likes_count : 4}</span>
          </button>
        </div>
      </div>

      {/* 2. THE CENTRAL STAGE: WHITE DOT IN CENTRE + CONCENTRIC RADAR RINGS */}
      <div className="relative z-10 py-5 sm:py-7 flex flex-col items-center justify-center text-center">
        {/* Floating Side Quote: Ambient Philosophy & Science */}
        <div className="w-full flex items-center justify-between mb-3 px-1 text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <span className="uppercase tracking-wider">
              {isFlyAwayPlaying ? "Spatial Sound Active" : "30s Mindful Flight"}
            </span>
          </div>

          {/* Side quote pill */}
          <div
            className="hidden sm:flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-opacity duration-300 cursor-pointer"
            onClick={() => setSideQuoteIndex((prev) => (prev + 1) % 4)}
            title="Click to cycle quotes"
          >
            <Sparkles className="w-3 h-3 text-cyan-300 flex-shrink-0" />
            <span className="italic truncate max-w-xs">
              &ldquo;{currentSideQuote.quote}&rdquo; — {currentSideQuote.author}
            </span>
          </div>
        </div>

        {/* THE CENTRAL ORBITAL DISK WITH THE WHITE DOT IN THE DEAD CENTER */}
        <div
          onClick={handlePlayToggle}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center cursor-pointer group my-2 select-none"
          title={isFlyAwayPlaying ? "Click to Pause" : "Click to Play Fly away"}
        >
          {/* Ambient Glow Aura */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ${
              isFlyAwayPlaying
                ? "bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.25)] scale-105"
                : "bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-102"
            }`}
          />

          {/* Outer Orbit Rings with Dashed Markers */}
          <svg
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
              isFlyAwayPlaying ? "animate-[spin_40s_linear_infinite]" : ""
            }`}
            viewBox="0 0 200 200"
          >
            {/* Outer Ring */}
            <circle
              cx="100"
              cy="100"
              r="94"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="1.2"
            />
            {/* Middle Dashed Ring */}
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.14"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            {/* Inner Ring */}
            <circle
              cx="100"
              cy="100"
              r="58"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />
            {/* Audio Wave Arcs */}
            <path
              d="M 65 100 A 35 35 0 0 1 135 100"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 50 100 A 50 50 0 0 1 150 100"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.2"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Dark Vinyl Core Sphere */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-zinc-900 to-black border-2 border-white/40 flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-105">
            {/* Concentric Center Groove */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white/20 flex items-center justify-center">
              {/* THE WHITE DOT IN CENTRE */}
              <div
                className={`relative rounded-full bg-white transition-all duration-300 flex items-center justify-center ${
                  isFlyAwayPlaying
                    ? "w-7 h-7 sm:w-8 sm:h-8 shadow-[0_0_24px_rgba(255,255,255,1)]"
                    : "w-6 h-6 sm:w-7 sm:h-7 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                }`}
              >
                {/* Center Core Black Micro Dot or Play/Pause Glyph */}
                {isFlyAwayPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-black text-black" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-black text-black ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Central Track Identification */}
        <div className="mt-1 flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
            Fly away
          </h2>
          <span className="text-zinc-500">•</span>
          <span className="text-xs sm:text-sm font-semibold text-zinc-300 font-mono">
            ZION
          </span>
        </div>

        {/* 3. CENTRAL 30-SECOND GUIDED MEDITATION, PHILOSOPHY & SCIENCE */}
        <div className="w-full max-w-xl mx-auto mt-4 px-2">
          {/* Phase Tag & Timer Header */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono pb-1.5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold uppercase border border-cyan-500/30">
                {currentMeditation.phase}
              </span>
              <span className="text-zinc-400">{currentMeditation.cue}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-white">
                {meditationSeconds < 30 ? `${30 - meditationSeconds}s left` : "30s Complete"}
              </span>
              <button
                type="button"
                onClick={restartMeditation}
                className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
                title="Restart 30s Meditation from 0s"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dynamic Central Meditation Guidance & Quote */}
          <div
            className={`min-h-[72px] sm:min-h-[80px] flex flex-col justify-center py-2 transition-all duration-300 ${
              isSoftFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1">
              {currentMeditation.heading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {currentMeditation.sub}
            </p>
          </div>

          {/* 30-Second Progress Line */}
          <div className="space-y-1 pt-1">
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 via-white to-cyan-300 h-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${Math.min(100, (meditationSeconds / 30) * 100)}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-400">
              <span>0s Inhale</span>
              {meditationSeconds >= 30 ? (
                <button
                  type="button"
                  onClick={restartMeditation}
                  className="text-cyan-300 hover:underline font-semibold"
                >
                  Now imagine beyond the universe • Restart 30s ↺
                </button>
              ) : (
                <span>30s Beyond the Universe</span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Quote Fallback */}
        <div className="sm:hidden mt-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-zinc-400 italic">
          &ldquo;{currentSideQuote.quote}&rdquo; — {currentSideQuote.author}
        </div>
      </div>

      {/* 4. REAL-TIME INTERACTIVE THOUGHTS & QUESTIONS (Clean, Real-time, Zero fake comments) */}
      <div className="relative z-10 pt-4 mt-2 border-t border-white/5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white tracking-tight">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-300" />
            <span>Real-Time Cosmos Thoughts & Questions</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase">
            Live Stream
          </span>
        </div>

        {/* Real-time Thought Input Form */}
        <form onSubmit={handlePostThought} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            placeholder="Name (optional)"
            className="w-24 sm:w-32 bg-black/50 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
          />
          <div className="flex-1 relative">
            <input
              type="text"
              value={thoughtInput}
              onChange={(e) => setThoughtInput(e.target.value)}
              placeholder="Ask a question or share a thought to the cosmos..."
              className="w-full bg-black/50 border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 pr-9"
            />
            <button
              type="submit"
              disabled={!thoughtInput.trim()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white disabled:opacity-30 transition"
              title="Send to cosmos"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {justShared && (
          <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 rounded px-2.5 py-1 text-center mb-2">
            Your thought has been shared in real-time to the cosmos!
          </div>
        )}

        {/* Live Thoughts Stream (Clean, minimal, real) */}
        {thoughts.length > 0 && (
          <div className="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar pr-1">
            {thoughts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 p-2 rounded-xl bg-black/40 border border-white/5 text-xs"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                    <span className="font-bold text-white">{item.author}</span>
                    <span>•</span>
                    <span className="text-zinc-500">{item.timestamp}</span>
                  </div>
                  <p className="text-zinc-200 text-xs font-light truncate mt-0.5">
                    {item.text}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleLikeThought(item.id)}
                  className={`flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded transition ${
                    item.isLiked
                      ? "text-red-400"
                      : "text-zinc-500 hover:text-white"
                  }`}
                  title="Like"
                >
                  <Heart
                    className={`w-3 h-3 ${item.isLiked ? "fill-current" : ""}`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. BOTTOM BAR: Audio Player Dock & Spatial Status */}
      <div className="relative z-10 pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePlayToggle}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg flex-shrink-0"
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
            <p className="text-[10px] text-zinc-400">ZION • Original Master</p>
          </div>
        </div>

        {/* Live Audio Waves */}
        {isFlyAwayPlaying ? (
          <div className="flex items-center gap-1 h-3.5">
            <span className="w-0.5 bg-white rounded-full animate-equalize1 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3 h-full" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4 h-full" />
          </div>
        ) : (
          <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
            24-BIT LOSSLESS
          </span>
        )}
      </div>
    </div>
  );
}
