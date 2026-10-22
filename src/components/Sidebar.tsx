"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Sparkles,
  Plus,
  ArrowRight,
  Search,
  Heart,
  Volume2,
  Moon,
  Sun,
  Globe,
  Compass,
  Wind,
  BookOpen,
} from "lucide-react";

interface ImaginationJourney {
  id: string;
  title: string;
  prompt: string;
  subtitle: string;
  tag: string;
  iconType: "moon" | "venus" | "jupiter" | "sun" | "cosmos" | "philosophy";
}

export const IMAGINATION_JOURNEYS: ImaginationJourney[] = [
  {
    id: "moon",
    title: "The Moon",
    prompt:
      "Imagine ascending silently through lunar gravity. There is no air, no friction, only eternal stillness. All worldly weight dissolves.",
    subtitle: "Lunar Serenity • 384,400 KM",
    tag: "Destination",
    iconType: "moon",
  },
  {
    id: "venus",
    title: "Venus",
    prompt:
      "Soaring above the morning star. You drift weightless through high golden clouds of light, suspended between night and dawn.",
    subtitle: "Morning Star • 41.4M KM",
    tag: "Destination",
    iconType: "venus",
  },
  {
    id: "jupiter",
    title: "Jupiter",
    prompt:
      "Gliding high above the great orbital bands. You are a solitary speck in the presence of vast cosmic majesty, yet completely at peace.",
    subtitle: "Gas Giant • 628.7M KM",
    tag: "Destination",
    iconType: "jupiter",
  },
  {
    id: "sun",
    title: "The Sun",
    prompt:
      "Basking in pure primordial light. Every atom within your consciousness originated in stellar fire. You are light returning to light.",
    subtitle: "Solar Radiance • 149.6M KM",
    tag: "Destination",
    iconType: "sun",
  },
  {
    id: "cosmos",
    title: "Deep Cosmos",
    prompt:
      "Drifting beyond all planetary bounds into the starlight void. Once you have learned to fly in your mind, the universe is no longer the limit.",
    subtitle: "Beyond Horizons • Infinite Reach",
    tag: "Destination",
    iconType: "cosmos",
  },
  {
    id: "philosophy",
    title: "Philosophy of Flight",
    prompt:
      "The light dove, cleaving the air in her free flight, and feeling its resistance, might imagine that its flight would be still easier in empty space.",
    subtitle: "Kant, Nietzsche & Plato",
    tag: "Philosophy",
    iconType: "philosophy",
  },
];

export default function Sidebar() {
  const {
    songs,
    currentSong,
    isPlaying,
    playSong,
    activeNav,
    setActiveNav,
    imaginationPrompt,
    setImaginationPrompt,
    activeImaginationId,
    setActiveImaginationId,
  } = usePlayer();

  const [imaginationFilter, setImaginationFilter] = useState<string>("All");
  const [imaginationSearch, setImaginationSearch] = useState<string>("");

  const likedCount = songs.filter((s) => s.is_liked).length;
  const flyAwaySong = songs[0];

  const filteredJourneys = IMAGINATION_JOURNEYS.filter((journey) => {
    if (imaginationFilter === "Destinations" && journey.tag !== "Destination")
      return false;
    if (imaginationFilter === "Philosophy" && journey.tag !== "Philosophy")
      return false;
    if (imaginationSearch.trim()) {
      return (
        journey.title.toLowerCase().includes(imaginationSearch.toLowerCase()) ||
        journey.prompt.toLowerCase().includes(imaginationSearch.toLowerCase())
      );
    }
    return true;
  });

  const handleSelectJourney = (journey: ImaginationJourney) => {
    setActiveImaginationId(journey.id);
    setImaginationPrompt(journey.prompt);
    setActiveNav("home");
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  const renderIcon = (type: ImaginationJourney["iconType"]) => {
    switch (type) {
      case "moon":
        return <Moon className="w-4 h-4 text-zinc-300" />;
      case "venus":
        return <Sparkles className="w-4 h-4 text-zinc-300" />;
      case "jupiter":
        return <Globe className="w-4 h-4 text-zinc-300" />;
      case "sun":
        return <Sun className="w-4 h-4 text-zinc-300" />;
      case "cosmos":
        return <Compass className="w-4 h-4 text-zinc-300" />;
      case "philosophy":
        return <BookOpen className="w-4 h-4 text-zinc-300" />;
      default:
        return <Compass className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <aside className="w-[300px] lg:w-[320px] flex-shrink-0 bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl">
      {/* Header: Your Imagination */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <button
            onClick={() => setActiveNav("home")}
            className="flex items-center gap-2.5 hover:text-white transition group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shadow">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-zinc-200 block">
                Your Imagination
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 block -mt-0.5 uppercase">
                Music Beyond Imagination
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                const custom = window.prompt(
                  "Where does your mind want to fly? (e.g. Orbiting Saturn's rings):",
                  imaginationPrompt
                );
                if (custom && custom.trim()) {
                  setImaginationPrompt(custom.trim());
                  setActiveImaginationId("custom");
                  setActiveNav("home");
                  if (!isPlaying && flyAwaySong) playSong(flyAwaySong);
                }
              }}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition text-zinc-400"
              title="Add Custom Destination"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveNav("home")}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition text-zinc-400"
              title="Focus Panel"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Apple Native Subtitle Pill */}
        <div className="mt-2.5 px-2.5 py-1.5 rounded bg-[#18181b] border border-white/5 text-[10px] text-zinc-400 font-mono flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Wind className="w-3 h-3 text-zinc-400" />
            <span>Guided Meditation Engine</span>
          </span>
          <span className="text-zinc-500 font-medium">ZION</span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar">
          {["All", "Destinations", "Philosophy", "Liked"].map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setImaginationFilter(pill);
                if (pill === "Liked") setActiveNav("liked");
                else setActiveNav("home");
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                imaginationFilter === pill
                  ? "bg-white text-black font-bold shadow"
                  : "bg-[#242424] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-[#b3b3b3] text-xs">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={imaginationSearch}
            onChange={(e) => setImaginationSearch(e.target.value)}
            placeholder="Search Destinations..."
            className="w-full bg-[#1c1c1c] text-white placeholder-zinc-500 text-[11px] pl-8 pr-2 py-1 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* List: Guided Imagination Destinations & Audio */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-4">
        {filteredJourneys.map((journey) => {
          const isActive = activeImaginationId === journey.id;
          return (
            <div
              key={journey.id}
              onClick={() => handleSelectJourney(journey)}
              className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition group border ${
                isActive
                  ? "bg-white/10 border-white/20 shadow-sm"
                  : "border-transparent hover:bg-[#1a1a1a]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-[#18181b] border border-white/5"
                }`}
              >
                {renderIcon(journey.iconType)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isActive ? "text-white font-bold" : "text-zinc-200 group-hover:text-white"
                    }`}
                  >
                    {journey.title}
                  </p>
                  {isActive && isPlaying && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {journey.subtitle}
                </p>
              </div>
            </div>
          );
        })}

        {/* Separator */}
        <div className="my-2 border-t border-zinc-800/80 px-2 pt-2">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            Original Master Track
          </span>
        </div>

        {/* Liked Journeys Row */}
        <div
          onClick={() => setActiveNav("liked")}
          className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition border ${
            activeNav === "liked"
              ? "bg-white/10 border-white/20"
              : "border-transparent hover:bg-[#1a1a1a]"
          }`}
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 shadow">
            <Heart className="w-4 h-4 fill-white text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-semibold text-white truncate">
              Liked Journeys
            </p>
            <p className="text-[11px] text-zinc-400 truncate">
              {likedCount} {likedCount === 1 ? "saved" : "saved"}
            </p>
          </div>
        </div>

        {/* ZION — Fly away Song */}
        {songs.map((song) => {
          const isCurrentActive = currentSong?.id === song.id;
          return (
            <div
              key={song.id}
              onClick={() => playSong(song)}
              className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition group border ${
                isCurrentActive
                  ? "bg-white/10 border-white/20 shadow"
                  : "border-transparent hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/10 shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={song.cover_url}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                {isCurrentActive && isPlaying && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Volume2 className="w-4 h-4 text-white animate-pulse" />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`text-xs sm:text-sm font-semibold truncate ${
                    isCurrentActive
                      ? "text-white font-bold"
                      : "text-zinc-200 group-hover:text-white"
                  }`}
                >
                  {song.title}
                </p>
                <p className="text-[11px] text-zinc-400 truncate flex items-center gap-1">
                  <span>{song.artist}</span>
                  <span>•</span>
                  <span>Lossless Audio</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
