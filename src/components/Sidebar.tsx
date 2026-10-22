"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Search,
  Heart,
  Volume2,
  ArrowRight,
} from "lucide-react";

interface CelestialJourney {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  code: string;
}

export const CELESTIAL_JOURNEYS: CelestialJourney[] = [
  {
    id: "moon",
    title: "The Moon",
    subtitle: "Sea of Tranquility • 384,400 KM",
    tag: "Celestial",
    code: "MOON",
  },
  {
    id: "venus",
    title: "Venus",
    subtitle: "Amber Shroud • 61,000,000 KM",
    tag: "Celestial",
    code: "VENUS",
  },
  {
    id: "jupiter",
    title: "Jupiter",
    subtitle: "Colossal Bands • 628,700,000 KM",
    tag: "Celestial",
    code: "JUPITER",
  },
  {
    id: "saturn",
    title: "Saturn",
    subtitle: "Ice Rings • 1,400,000,000 KM",
    tag: "Celestial",
    code: "SATURN",
  },
  {
    id: "sun",
    title: "The Sun",
    subtitle: "Solar Corona • 149,600,000 KM",
    tag: "Celestial",
    code: "SUN",
  },
  {
    id: "deep-cosmos",
    title: "Deep Cosmos",
    subtitle: "Interstellar Horizon • Infinity",
    tag: "Philosophy",
    code: "VOID",
  },
  {
    id: "kant-nietzsche",
    title: "Kant & Nietzsche",
    subtitle: "The Light Dove & High Soar",
    tag: "Philosophy",
    code: "PHIL",
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
  } = usePlayer();

  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const likedCount = songs.filter((s) => s.is_liked).length;
  const flyAwaySong = songs[0];

  const filteredJourneys = CELESTIAL_JOURNEYS.filter((journey) => {
    if (activeTab === "Celestial" && journey.tag !== "Celestial") return false;
    if (activeTab === "Philosophy" && journey.tag !== "Philosophy") return false;
    if (searchFilter.trim()) {
      return (
        journey.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        journey.subtitle.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
    return true;
  });

  const handleSelectJourney = () => {
    setActiveNav("home");
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  return (
    <aside className="w-[300px] lg:w-[330px] flex-shrink-0 bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl">
      {/* Header: Your Imagination */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <button
            onClick={() => setActiveNav("home")}
            className="flex items-center gap-2.5 hover:text-white transition group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center font-mono text-[11px] font-bold text-white shadow">
              HM
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
              onClick={() => setActiveNav("home")}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition text-zinc-400"
              title="Focus Horizon"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="mt-2.5 px-2.5 py-1.5 rounded-md bg-[#18181b] border border-white/10 text-[10px] text-zinc-300 font-mono flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Guided Meditation</span>
          </span>
          <span className="text-zinc-400 font-bold">ZION</span>
        </div>

        {/* Filter Pills (No emojis, Apple Native) */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar">
          {["All", "Celestial", "Philosophy", "Liked"].map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setActiveTab(pill);
                if (pill === "Liked") setActiveNav("liked");
                else setActiveNav("home");
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                activeTab === pill
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
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search Your Imagination..."
            className="w-full bg-[#1c1c1c] text-white placeholder-zinc-500 text-[11px] pl-8 pr-2 py-1 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* List: Celestial Destinations & Original Soundtrack */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-4">
        {/* Curated Celestial Destinations */}
        {filteredJourneys.map((journey) => (
          <div
            key={journey.id}
            onClick={handleSelectJourney}
            className="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition group border border-transparent hover:bg-[#1a1a1a] hover:border-white/10"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-mono font-bold bg-[#1f1f1f] border border-white/10 text-zinc-300 group-hover:border-white/30 group-hover:text-white shadow">
              {journey.code}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-semibold truncate text-zinc-200 group-hover:text-white">
                {journey.title}
              </p>
              <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                {journey.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Separator */}
        <div className="my-2 border-t border-zinc-800/80 px-2 pt-2">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
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
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
            <Heart className="w-4 h-4 fill-white text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-semibold text-white truncate">
              Liked Journeys
            </p>
            <p className="text-[11px] text-zinc-500 truncate">
              {likedCount} {likedCount === 1 ? "saved item" : "saved items"}
            </p>
          </div>
        </div>

        {/* ZION — Fly away Original Soundtrack */}
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
                <p className="text-[11px] text-zinc-500 truncate flex items-center gap-1">
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
