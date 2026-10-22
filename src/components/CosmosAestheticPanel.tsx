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
} from "lucide-react";

interface RealtimeThought {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

const TOTAL_TRIP_SECONDS = 240; // 4 Minutes

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

  // 4-Minute Journey Timer (0s to 240s)
  const [tripSeconds, setTripSeconds] = useState<number>(0);
  const [isTripActive, setIsTripActive] = useState<boolean>(true);
  const [isSoftFading, setIsSoftFading] = useState<boolean>(false);

  // Real-time Community Thoughts / Questions (Zero mock comments, pure real submissions)
  const [thoughts, setThoughts] = useState<RealtimeThought[]>([]);
  const [thoughtInput, setThoughtInput] = useState<string>("");
  const [authorInput, setAuthorInput] = useState<string>("");
  const [justShared, setJustShared] = useState<boolean>(false);

  // Load real-time thoughts from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hellomusic_realtime_thoughts_v3");
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

  // 4-Minute Timer: increments 1 second every 1000ms up to 240s
  useEffect(() => {
    if (!isTripActive) return;
    if (tripSeconds >= TOTAL_TRIP_SECONDS) return;

    const interval = setInterval(() => {
      setTripSeconds((prev) => {
        if (prev >= TOTAL_TRIP_SECONDS - 1) return TOTAL_TRIP_SECONDS;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTripActive, tripSeconds]);

  // Restart the 4-Minute Trip from 0s
  const restartTrip = useCallback(() => {
    setIsSoftFading(true);
    setTripSeconds(0);
    setIsTripActive(true);
    setTimeout(() => {
      setIsSoftFading(false);
    }, 200);

    if (!isFlyAwayPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  }, [flyAwaySong, isFlyAwayPlaying, playSong]);

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
      localStorage.setItem("hellomusic_realtime_thoughts_v3", JSON.stringify(updated));
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
        localStorage.setItem("hellomusic_realtime_thoughts_v3", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // 4-Minute Journey Flow (240s) based on user's exact poem & cadence
  const getJourneyContent = (sec: number) => {
    if (sec < 15) {
      // Breathing Guide: 5s Inhale, 5s Hold, 5s Exhale
      let breathCue = "Inhale (5s)";
      if (sec >= 5 && sec < 10) breathCue = "Hold (5s)";
      else if (sec >= 10) breathCue = "Exhale (5s)";

      return {
        stage: "5-5-5 Mindful Breathing",
        cue: breathCue,
        heading: "Take a breath for 5 sec, hold 5 sec, exhale, and continue normally.",
        text: "Drop your shoulders away from your ears. Settle into the quiet stillness of pure sound.",
      };
    } else if (sec < 50) {
      return {
        stage: "Lifting Off",
        cue: "Elevation",
        heading: "Fly fly away",
        text: "Lifting softly above every ceiling, every wall, and every terrestrial weight. You are pure elevation.",
      };
    } else if (sec < 90) {
      return {
        stage: "Across the Sky",
        cue: "Horizon",
        heading: "Fly beyond your imagination across the sky",
        text: "Soaring through vast open space. “The higher we soar, the smaller we appear to those who cannot fly.” — Friedrich Nietzsche",
      };
    } else if (sec < 135) {
      return {
        stage: "Weightlessness",
        cue: "Dissolving Limits",
        heading: "Imagine you are a cloud",
        text: "Soft, boundless, drifting effortlessly across golden atmospheric light. Free from all resistance.",
      };
    } else if (sec < 180) {
      return {
        stage: "Cosmic Perspective",
        cue: "Deep Universe",
        heading: "Imagine you are the brightest star",
        text: "Luminous in the silent, velvety expanse of space. “The cosmos is within us. We are made of star-stuff.” — Carl Sagan",
      };
    } else {
      return {
        stage: "The Infinite Mind",
        cue: "Transcendence",
        heading: "Now imagine something that none can imagine except you",
        text: "A boundless universe born of your own consciousness. “Two things fill the mind with awe: the starry heavens above me and the moral law within me.” — Immanuel Kant",
      };
    }
  };

  const currentJourney = getJourneyContent(tripSeconds);

  // Central White Circle Breathing / Pulse Scale
  const getCircleScaleClass = () => {
    if (tripSeconds < 5) return "scale-110 shadow-[0_0_36px_rgba(255,255,255,1)]";
    if (tripSeconds < 10) return "scale-110 shadow-[0_0_30px_rgba(255,255,255,0.95)]";
    if (tripSeconds < 15) return "scale-95 shadow-[0_0_20px_rgba(255,255,255,0.7)]";
    return isFlyAwayPlaying
      ? "scale-105 shadow-[0_0_32px_rgba(255,255,255,1)]"
      : "scale-100 shadow-[0_0_20px_rgba(255,255,255,0.75)]";
  };

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0c0c0e] border border-white/10 p-4 sm:p-7 shadow-2xl select-none overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Background Subtle Pure White Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.05)_0%,transparent_65%)] pointer-events-none" />

      {/* 1. TOP HEADER: Clean Pure White Hues, 214 Views & 4 Likes */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs tracking-wider text-zinc-300 uppercase font-semibold">
            ESCAPE TO COSMOS
          </span>
          <span className="text-[10px] tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/15 uppercase font-medium">
            4-MIN TRIP
          </span>
        </div>

        {/* Realistic metrics: ~200 views, 4 likes */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-zinc-400" title="Views">
            <Eye className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-300 font-medium">{flyAwaySong ? flyAwaySong.views_count.toLocaleString() : "214"}</span>
          </div>

          <button
            type="button"
            onClick={() => flyAwaySong && toggleLike(flyAwaySong.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition active:scale-95 ${
              flyAwaySong?.is_liked
                ? "bg-white text-black font-bold border-white shadow-sm"
                : "border-white/15 text-zinc-300 hover:text-white hover:bg-white/5"
            }`}
            title="Like this track"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                flyAwaySong?.is_liked ? "fill-current" : ""
              }`}
            />
            <span>{flyAwaySong ? flyAwaySong.likes_count : 4}</span>
          </button>
        </div>
      </div>

      {/* 2. CENTRAL STAGE: ONLY ONE WHITE CIRCLE IN CENTRE (WHITE HUES ONLY) */}
      <div className="relative z-10 py-6 sm:py-8 flex flex-col items-center justify-center text-center">
        {/* Top Status & 4-Min Indicator */}
        <div className="w-full flex items-center justify-between mb-4 px-1 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse" />
            <span className="uppercase tracking-widest text-[10px] text-zinc-300 font-semibold">
              {isFlyAwayPlaying ? "Music & Imagination Synchronized" : "4-Minute Instrumental Flight"}
            </span>
          </div>

          <span className="text-[11px] font-medium text-zinc-400">
            {formatTime(tripSeconds)} / 4:00
          </span>
        </div>

        {/* THE ONLY ONE WHITE CIRCLE AT THE CENTER WITH DELICATE WHITE CONCENTRIC RINGS */}
        <div
          onClick={handlePlayToggle}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center cursor-pointer group my-2 select-none"
          title={isFlyAwayPlaying ? "Click to Pause" : "Click to Play Fly away"}
        >
          {/* Subtle Outer White Glow Halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-700 ${
              isFlyAwayPlaying
                ? "bg-white/[0.04] shadow-[0_0_40px_rgba(255,255,255,0.15)] scale-105"
                : "bg-white/[0.02] shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-102"
            }`}
          />

          {/* Concentric Orbital Rings in Pure White Opacities */}
          <svg
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ${
              isFlyAwayPlaying ? "animate-[spin_40s_linear_infinite]" : ""
            }`}
            viewBox="0 0 200 200"
          >
            {/* Outer Subtle White Ring */}
            <circle
              cx="100"
              cy="100"
              r="94"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="1.2"
            />
            {/* Middle Dashed White Ring */}
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
            {/* Inner White Ring */}
            <circle
              cx="100"
              cy="100"
              r="58"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.22"
              strokeWidth="1.5"
            />
            {/* Soundwave Geometric Arcs in White */}
            <path
              d="M 65 100 A 35 35 0 0 1 135 100"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 50 100 A 50 50 0 0 1 150 100"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.16"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Obsidian Disc Housing */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-105">
            {/* Inner Border Ring */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-white/15 flex items-center justify-center">
              {/* THE ONE WHITE CIRCLE */}
              <div
                className={`relative rounded-full bg-white transition-all duration-700 ease-out flex items-center justify-center ${getCircleScaleClass()} w-8 h-8 sm:w-9 sm:h-9`}
              >
                {/* Center Glyph */}
                {isFlyAwayPlaying ? (
                  <Pause className="w-4 h-4 fill-black text-black" />
                ) : (
                  <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Track Title with iPhone-grade SF Pro Typography */}
        <div className="mt-2 flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Fly away
          </h2>
          <span className="text-zinc-500">•</span>
          <span className="text-xs sm:text-sm font-medium text-zinc-300">
            ZION • Original Master
          </span>
        </div>

        {/* 3. CENTRAL 4-MINUTE POETIC GUIDANCE & BREATHING FLOW */}
        <div className="w-full max-w-xl mx-auto mt-5 px-2">
          {/* Stage & Progress Header */}
          <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-semibold tracking-wider uppercase border border-white/15">
                {currentJourney.stage}
              </span>
              <span className="text-zinc-400 text-[11px]">{currentJourney.cue}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-xs">
                {formatTime(tripSeconds)}
              </span>
              <button
                type="button"
                onClick={restartTrip}
                className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
                title="Restart 4-Minute Journey from 0:00"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Dynamic Poetic Journey Narrative (iPhone Native SF Typography) */}
          <div
            className={`min-h-[88px] sm:min-h-[96px] flex flex-col justify-center py-3 transition-all duration-300 ${
              isSoftFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5 leading-snug">
              {currentJourney.heading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              {currentJourney.text}
            </p>
          </div>

          {/* 4-Minute Progress Line */}
          <div className="space-y-1.5 pt-1">
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{
                  width: `${Math.min(100, (tripSeconds / TOTAL_TRIP_SECONDS) * 100)}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium">
              <span>0:00 Breathe In</span>
              {tripSeconds >= TOTAL_TRIP_SECONDS ? (
                <button
                  type="button"
                  onClick={restartTrip}
                  className="text-white hover:underline font-semibold"
                >
                  Restart 4-Minute Trip ↺
                </button>
              ) : (
                <span>4:00 Beyond the Universe</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. REAL-TIME THOUGHTS & QUESTIONS: Clean White Hues Only, No Cyan, No Fake Comments */}
      <div className="relative z-10 pt-4 mt-2 border-t border-white/10">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-white tracking-tight">
            Real-Time Cosmos Thoughts & Questions
          </span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
            Live Stream
          </span>
        </div>

        {/* Real-Time Input Form */}
        <form onSubmit={handlePostThought} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            placeholder="Name (optional)"
            className="w-24 sm:w-32 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
          />
          <div className="flex-1 relative">
            <input
              type="text"
              value={thoughtInput}
              onChange={(e) => setThoughtInput(e.target.value)}
              placeholder="Ask a question or share a thought to the cosmos..."
              className="w-full bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 pr-9"
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
          <div className="text-[11px] text-zinc-200 bg-white/10 border border-white/15 rounded-lg px-3 py-1 text-center mb-2 font-medium">
            Your thought has been shared in real-time to the cosmos.
          </div>
        )}

        {/* Live Thoughts Stream */}
        {thoughts.length > 0 && (
          <div className="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar pr-1">
            {thoughts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                    <span className="font-semibold text-white">{item.author}</span>
                    <span>•</span>
                    <span className="text-zinc-500">{item.timestamp}</span>
                  </div>
                  <p className="text-zinc-200 text-xs font-normal truncate mt-0.5">
                    {item.text}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleLikeThought(item.id)}
                  className={`flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded transition ${
                    item.isLiked
                      ? "text-white font-bold"
                      : "text-zinc-500 hover:text-white"
                  }`}
                  title="Like"
                >
                  <Heart
                    className={`w-3 h-3 ${item.isLiked ? "fill-white text-white" : ""}`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. BOTTOM BAR: Audio Player Dock */}
      <div className="relative z-10 pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
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

        {/* Live Audio Waves in White */}
        {isFlyAwayPlaying ? (
          <div className="flex items-center gap-1 h-3.5">
            <span className="w-0.5 bg-white rounded-full animate-equalize1 h-full shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
            <span className="w-0.5 bg-white rounded-full animate-equalize2 h-full shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
            <span className="w-0.5 bg-white rounded-full animate-equalize3 h-full shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
            <span className="w-0.5 bg-white rounded-full animate-equalize4 h-full shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        ) : (
          <span className="text-[10px] text-zinc-400 tracking-wider font-medium">
            24-BIT LOSSLESS
          </span>
        )}
      </div>
    </div>
  );
}
