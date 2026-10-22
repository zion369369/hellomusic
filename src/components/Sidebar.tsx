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
  type: "celestial" | "philosophy";
}

export const CELESTIAL_JOURNEYS: CelestialJourney[] = [
  {
    id: "moon",
    title: "The Moon",
    subtitle: "Sea of Tranquility • 384,400 KM",
    tag: "Celestial",
    type: "celestial",
  },
  {
    id: "venus",
    title: "Venus",
    subtitle: "Amber Shroud • 61,000,000 KM",
    tag: "Celestial",
    type: "celestial",
  },
  {
    id: "jupiter",
    title: "Jupiter",
    subtitle: "Colossal Bands • 628,700,000 KM",
    tag: "Celestial",
    type: "celestial",
  },
  {
    id: "saturn",
    title: "Saturn",
    subtitle: "Ice Rings • 1,400,000,000 KM",
    tag: "Celestial",
    type: "celestial",
  },
  {
    id: "sun",
    title: "The Sun",
    subtitle: "Solar Corona • 149,600,000 KM",
    tag: "Celestial",
    type: "celestial",
  },
  {
    id: "deep-void",
    title: "Deep Cosmos",
    subtitle: "Interstellar Horizon • Infinity",
    tag: "Philosophy",
    type: "philosophy",
  },
  {
    id: "philosophy",
    title: "Kant & Nietzsche",
    subtitle: "The Light Dove & High Soar",
    tag: "Philosophy",
    type: "philosophy",
  },
];

function JourneyCoverArtwork({ id }: { id: string }) {
  if (id === "moon") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <circle cx="24" cy="24" r="13" fill="#27272a" stroke="#71717a" strokeWidth="1" />
        <path d="M24 11 A 13 13 0 0 1 37 24 A 13 13 0 0 1 24 37 A 9 9 0 0 0 24 11 Z" fill="#ffffff" opacity="0.9" />
        <circle cx="21" cy="20" r="2" fill="#52525b" />
        <circle cx="27" cy="26" r="1.5" fill="#52525b" />
      </svg>
    );
  }
  if (id === "venus") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <circle cx="24" cy="24" r="12" fill="#3f3f46" stroke="#a1a1aa" strokeWidth="1" />
        <ellipse cx="24" cy="24" rx="14" ry="4" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
        <path d="M14 22 Q 24 26 34 22" stroke="#d4d4d8" strokeWidth="1.2" opacity="0.8" />
      </svg>
    );
  }
  if (id === "jupiter") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <circle cx="24" cy="24" r="13" fill="#27272a" stroke="#71717a" strokeWidth="1" />
        <path d="M12 20 Q 24 23 36 20" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
        <path d="M11 25 Q 24 28 37 25" stroke="#a1a1aa" strokeWidth="1.2" opacity="0.7" />
        <ellipse cx="28" cy="28" rx="3" ry="1.8" fill="#ffffff" opacity="0.8" />
      </svg>
    );
  }
  if (id === "saturn") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <ellipse cx="24" cy="24" rx="19" ry="6" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" transform="rotate(-20 24 24)" />
        <circle cx="24" cy="24" r="9" fill="#27272a" stroke="#a1a1aa" strokeWidth="1" />
        <ellipse cx="24" cy="24" rx="15" ry="4" stroke="#71717a" strokeWidth="0.8" opacity="0.6" transform="rotate(-20 24 24)" />
      </svg>
    );
  }
  if (id === "sun") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <circle cx="24" cy="24" r="10" fill="#ffffff" />
        <circle cx="24" cy="24" r="15" stroke="#ffffff" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="18" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
      </svg>
    );
  }
  if (id === "deep-void") {
    return (
      <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
        <rect width="48" height="48" rx="8" fill="#141416" />
        <circle cx="24" cy="24" r="1.5" fill="#ffffff" />
        <path d="M16 20 Q 24 16 32 24 Q 24 32 16 28" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
        <circle cx="16" cy="14" r="1" fill="#a1a1aa" />
        <circle cx="34" cy="34" r="1" fill="#a1a1aa" />
      </svg>
    );
  }
  // Philosophy
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full fill-none">
      <rect width="48" height="48" rx="8" fill="#141416" />
      <path d="M16 34 L 16 16 L 32 16 L 32 34 Z" stroke="#a1a1aa" strokeWidth="1.2" opacity="0.8" />
      <line x1="20" y1="22" x2="28" y2="22" stroke="#ffffff" strokeWidth="1.2" />
      <line x1="20" y1="27" x2="26" y2="27" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  );
}

export default function Sidebar() {
  const {
    songs,
    currentSong,
    isPlaying,
    playSong,
    activeNav,
    setActiveNav,
    activeImaginationId,
    setActiveImaginationId,
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

  const handleSelectJourney = (journeyId: string) => {
    setActiveImaginationId(journeyId);
    setActiveNav("home");
    if (!isPlaying && flyAwaySong) {
      playSong(flyAwaySong);
    }
  };

  return (
    <aside className="w-[300px] lg:w-[330px] flex-shrink-0 bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl">
      {/* Header: Your Imagination (Calm + Spotify style) */}
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
            <span>Calm & Spotify Audio</span>
          </span>
          <span className="text-zinc-400 font-bold">ZION</span>
        </div>

        {/* Filter Pills */}
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

      {/* List: Celestial Destinations with Calm Artwork & Original Soundtrack */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-4">
        {filteredJourneys.map((journey) => {
          const isSelected = activeImaginationId === journey.id;
          return (
            <div
              key={journey.id}
              onClick={() => handleSelectJourney(journey.id)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition group border ${
                isSelected
                  ? "bg-[#222226] border-white/20 shadow-md"
                  : "border-transparent hover:bg-[#1a1a1a] hover:border-white/5"
              }`}
            >
              {/* Calm + Spotify Artwork Thumbnail */}
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow border border-white/10 group-hover:border-white/25 transition">
                <JourneyCoverArtwork id={journey.id} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isSelected
                        ? "text-white font-bold"
                        : "text-zinc-200 group-hover:text-white"
                    }`}
                  >
                    {journey.title}
                  </p>
                  {isSelected && isPlaying && (
                    <Volume2 className="w-3.5 h-3.5 text-cyan-300 animate-pulse flex-shrink-0" />
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
            Original Soundtrack
          </span>
        </div>

        {/* Liked Journeys Row */}
        <div
          onClick={() => setActiveNav("liked")}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition border ${
            activeNav === "liked"
              ? "bg-[#222226] border-white/20"
              : "border-transparent hover:bg-[#1a1a1a]"
          }`}
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-700 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
            <Heart className="w-4 h-4 fill-white text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-semibold text-white truncate">
              Liked Journeys
            </p>
            <p className="text-[11px] text-zinc-400 truncate">
              {likedCount} {likedCount === 1 ? "saved item" : "saved items"}
            </p>
          </div>
        </div>

        {/* ZION — Fly away Original Master */}
        {songs.map((song) => {
          const isCurrentActive = currentSong?.id === song.id;
          return (
            <div
              key={song.id}
              onClick={() => playSong(song)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition group border ${
                isCurrentActive
                  ? "bg-[#222226] border-white/20 shadow"
                  : "border-transparent hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-white/10 shadow">
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
