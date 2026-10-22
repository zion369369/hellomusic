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
} from "lucide-react";

interface ImaginationJourney {
  id: string;
  title: string;
  prompt: string;
  subtitle: string;
  tag: string;
  icon: string;
}

export const IMAGINATION_JOURNEYS: ImaginationJourney[] = [
  {
    id: "fly-earth",
    title: "Fly Above the Earth",
    prompt:
      "Imagine you are flying... flying above the Earth. Take a breath, why so serious?",
    subtitle: "360° Guided Flight • 418 KM Orbit",
    tag: "Guided Flight",
    icon: "🪽",
  },
  {
    id: "breath-reset",
    title: "Take a Breath (Why So Serious?)",
    prompt:
      "Take a breath... why so serious? Inhale the calm of the cosmos, exhale all gravity.",
    subtitle: "Mindful Reset • 4-4-4 Cadence",
    tag: "Meditation",
    icon: "🧘",
  },
  {
    id: "cosmos-soaring",
    title: "The Cosmos Soaring With You",
    prompt:
      "I asked the universe why we cannot fly? she whispered, 'the cosmos is soaring with you.'",
    subtitle: "Deep Cosmos Elevation • Starlight Field",
    tag: "Cosmos",
    icon: "🌌",
  },
  {
    id: "light-dove",
    title: "The Light Dove Soaring",
    prompt:
      "The light dove, cleaving in the air. The higher we soar, the smaller we appear to those who cannot fly.",
    subtitle: "Weightless Glide • Atmospheric Lift",
    tag: "Poetic",
    icon: "🕊️",
  },
  {
    id: "mind-wings",
    title: "Wings of Imagination",
    prompt:
      "Want to fly? It always starts with imagination. And once you've learned to fly in your mind, even the universe is no longer the limit. 🪽",
    subtitle: "Transcendental Imagination • Infinite Reach",
    tag: "Imagination",
    icon: "✨",
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
    if (imaginationFilter === "Guided Flights" && journey.tag !== "Guided Flight")
      return false;
    if (imaginationFilter === "Meditations" && journey.tag !== "Meditation")
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

  return (
    <aside className="w-[300px] lg:w-[330px] flex-shrink-0 bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl">
      {/* Header: Your Imagination (The USP) */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <button
            onClick={() => setActiveNav("home")}
            className="flex items-center gap-2.5 hover:text-white transition group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-700 to-black border border-white/20 flex items-center justify-center shadow">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-zinc-200 block">
                Your Imagination
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 block -mt-0.5 uppercase">
                Music Beyond Imagination
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                const custom = window.prompt(
                  "Enter your custom Imagination Prompt (e.g. Floating weightless over ocean auroras at midnight):",
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
              title="Add Custom Imagination Prompt"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveNav("home")}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition text-zinc-400"
              title="Focus Imagination Screen"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="mt-2.5 px-2.5 py-1.5 rounded-md bg-[#18181b] border border-white/10 text-[10px] text-zinc-300 font-mono flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>USP: Guided Screen Meditation</span>
          </span>
          <span className="text-zinc-400 font-bold">ZION</span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar">
          {["All", "Guided Flights", "Meditations", "Liked"].map((pill) => (
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

      {/* Search Bar in Your Imagination */}
      <div className="px-4 py-2 flex items-center justify-between text-[#b3b3b3] text-xs">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={imaginationSearch}
            onChange={(e) => setImaginationSearch(e.target.value)}
            placeholder="Search Your Imagination..."
            className="w-full bg-[#1c1c1c] text-white placeholder-zinc-500 text-[11px] pl-8 pr-2 py-1 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* List: Guided Imagination Journeys & Soundtracks */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-4">
        {/* Curated Guided Imagination Journeys */}
        {filteredJourneys.map((journey) => {
          const isActive = activeImaginationId === journey.id;
          return (
            <div
              key={journey.id}
              onClick={() => handleSelectJourney(journey)}
              className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition group border ${
                isActive
                  ? "bg-white/10 border-white/20 shadow-md backdrop-blur-md"
                  : "border-transparent hover:bg-[#1a1a1a] hover:border-white/5"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 text-lg shadow ${
                  isActive
                    ? "bg-white text-black font-bold shadow-white/10"
                    : "bg-[#1f1f1f] border border-white/10 group-hover:border-white/20"
                }`}
              >
                {journey.icon}
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
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
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
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            Original Soundtrack
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
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-zinc-700 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
            <Heart className="w-5 h-5 fill-white text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-semibold text-white truncate">
              Liked Journeys
            </p>
            <p className="text-[11px] text-zinc-400 truncate">
              {likedCount} {likedCount === 1 ? "saved journey" : "saved journeys"}
            </p>
          </div>
        </div>

        {/* ZION — Fly away Original Soundtrack Card */}
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
              <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/10 shadow">
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
                  <span>Original Master</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
