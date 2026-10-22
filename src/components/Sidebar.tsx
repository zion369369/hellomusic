"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Library,
  Plus,
  Search,
  Heart,
  Volume2,
  BookOpen,
  Atom,
  Globe,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  onMobileItemClick?: () => void;
  className?: string;
}

const CELESTIAL_ITEMS = [
  { id: "moon", name: "The Moon", meta: "384,400 KM • Sea of Tranquility" },
  { id: "venus", name: "Venus", meta: "61,000,000 KM • Golden Clouds" },
  { id: "jupiter", name: "Jupiter", meta: "628,700,000 KM • Great Red Spot" },
  { id: "saturn", name: "Saturn", meta: "1,400,000,000 KM • Ice Rings" },
  { id: "sun", name: "The Sun", meta: "149,600,000 KM • Solar Corona" },
  { id: "deep-void", name: "Deep Cosmos", meta: "24,000,000,000 KM • Interstellar Void" },
];

export default function Sidebar({ onMobileItemClick, className = "" }: SidebarProps) {
  const {
    songs,
    currentSong,
    isPlaying,
    playSong,
    setIsPublishModalOpen,
    activeNav,
    setActiveNav,
    activeImaginationId,
    setActiveImaginationId,
  } = usePlayer();

  const [libraryFilter, setLibraryFilter] = useState<string>("All");
  const [librarySearch, setLibrarySearch] = useState<string>("");

  const likedCount = songs.filter((s) => s.is_liked).length;

  const handleSelectJourney = (id: string) => {
    setActiveImaginationId(id);
    setActiveNav("home");
    if (onMobileItemClick) onMobileItemClick();
  };

  const handleSelectSong = (song: (typeof songs)[0]) => {
    playSong(song);
    if (onMobileItemClick) onMobileItemClick();
  };

  const handleSelectLiked = () => {
    setActiveNav("liked");
    if (onMobileItemClick) onMobileItemClick();
  };

  const filterLower = librarySearch.trim().toLowerCase();

  const matchesSearch = (text: string) => {
    if (!filterLower) return true;
    return text.toLowerCase().includes(filterLower);
  };

  const showPhilosophy =
    (libraryFilter === "All" || libraryFilter === "Philosophy") &&
    (matchesSearch("Kant & Nietzsche") ||
      matchesSearch("Immanuel Kant") ||
      matchesSearch("Friedrich Nietzsche") ||
      matchesSearch("Critique of Pure Reason") ||
      matchesSearch("Zarathustra") ||
      matchesSearch("Philosophy"));

  const showScience =
    (libraryFilter === "All" || libraryFilter === "Science") &&
    (matchesSearch("Einstein & Sagan") ||
      matchesSearch("Albert Einstein") ||
      matchesSearch("Carl Sagan") ||
      matchesSearch("Cosmos") ||
      matchesSearch("Pale Blue Dot") ||
      matchesSearch("Science"));

  const filteredCelestial = CELESTIAL_ITEMS.filter((item) => {
    if (libraryFilter !== "All" && libraryFilter !== "Celestial") return false;
    return matchesSearch(item.name) || matchesSearch(item.meta) || matchesSearch("Celestial");
  });

  const filteredSongs = songs.filter((s) => {
    if (libraryFilter === "Liked" && !s.is_liked) return false;
    if (libraryFilter === "Celestial" || libraryFilter === "Philosophy" || libraryFilter === "Science") {
      return false;
    }
    return matchesSearch(s.title) || matchesSearch(s.artist) || matchesSearch(s.genre || "");
  });

  return (
    <aside
      className={`bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl ${className}`}
    >
      {/* Header: Clean Spotify Header without useless buttons */}
      <div className="p-3.5 sm:p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <div className="flex items-center gap-2.5">
            <Library className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-white" />
            <span className="font-bold text-sm tracking-tight text-white">
              Your Library
            </span>
          </div>

          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition active:scale-95"
            title="Publish a song"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills with full horizontal scroll */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar py-0.5">
          {["All", "Celestial", "Philosophy", "Science", "Liked"].map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setLibraryFilter(pill);
                if (pill === "Liked") setActiveNav("liked");
                else if (pill === "All") setActiveNav("home");
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition active:scale-95 ${
                libraryFilter === pill
                  ? "bg-white text-black font-bold shadow-sm"
                  : "bg-[#242424] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar inside library */}
      <div className="px-3.5 sm:px-4 py-2 flex items-center justify-between text-[#b3b3b3] text-xs">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={librarySearch}
            onChange={(e) => setLibrarySearch(e.target.value)}
            placeholder="Search in Your Library"
            className="w-full bg-[#1c1c1c] text-white placeholder-zinc-500 text-xs pl-8 pr-2 py-1.5 rounded-md border border-transparent focus:border-zinc-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Journeys, Playlists & Songs List with touch-safe buttons */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-36 md:pb-6 touch-scroll">
        {/* 1. Philosophy: Kant & Nietzsche */}
        {showPhilosophy && (
          <button
            type="button"
            onClick={() => handleSelectJourney("philosophy")}
            className={`w-full text-left flex items-center gap-3 p-2 rounded-xl transition active:scale-[0.98] ${
              activeImaginationId === "philosophy"
                ? "bg-[#262626] border-l-2 border-white pl-2.5"
                : "hover:bg-[#1a1a1a] active:bg-[#222222]"
            }`}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <BookOpen className="w-5 h-5 text-zinc-200" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm font-semibold truncate ${
                    activeImaginationId === "philosophy" ? "text-white font-bold" : "text-zinc-100"
                  }`}
                >
                  Kant & Nietzsche
                </p>
                {activeImaginationId === "philosophy" ? (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                    ACTIVE
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                )}
              </div>
              <p className="text-xs text-[#b3b3b3] truncate">
                Critique of Pure Reason & Zarathustra
              </p>
            </div>
          </button>
        )}

        {/* 2. Science: Einstein & Sagan */}
        {showScience && (
          <button
            type="button"
            onClick={() => handleSelectJourney("science")}
            className={`w-full text-left flex items-center gap-3 p-2 rounded-xl transition active:scale-[0.98] ${
              activeImaginationId === "science"
                ? "bg-[#262626] border-l-2 border-white pl-2.5"
                : "hover:bg-[#1a1a1a] active:bg-[#222222]"
            }`}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <Atom className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p
                  className={`text-sm font-semibold truncate ${
                    activeImaginationId === "science" ? "text-white font-bold" : "text-zinc-100"
                  }`}
                >
                  Einstein & Sagan
                </p>
                {activeImaginationId === "science" ? (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                    ACTIVE
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                )}
              </div>
              <p className="text-xs text-[#b3b3b3] truncate">
                Curvature of Spacetime & Pale Blue Dot
              </p>
            </div>
          </button>
        )}

        {/* 3. Celestial Horizons (Moon, Venus, Jupiter, Saturn, Sun, Deep Cosmos) */}
        {filteredCelestial.map((dest) => {
          const isDestActive = activeImaginationId === dest.id;
          return (
            <button
              type="button"
              key={dest.id}
              onClick={() => handleSelectJourney(dest.id)}
              className={`w-full text-left flex items-center gap-3 p-2 rounded-xl transition active:scale-[0.98] ${
                isDestActive
                  ? "bg-[#262626] border-l-2 border-cyan-400 pl-2.5"
                  : "hover:bg-[#1a1a1a] active:bg-[#222222]"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
                <Globe className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-semibold truncate ${
                      isDestActive ? "text-white font-bold" : "text-zinc-100"
                    }`}
                  >
                    {dest.name}
                  </p>
                  {isDestActive ? (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-400 text-black font-bold">
                      ORBIT
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-600" />
                  )}
                </div>
                <p className="text-xs text-[#b3b3b3] truncate">{dest.meta}</p>
              </div>
            </button>
          );
        })}

        {/* 4. Liked Songs Row */}
        {(libraryFilter === "All" || libraryFilter === "Liked") && !filterLower && (
          <button
            type="button"
            onClick={handleSelectLiked}
            className={`w-full text-left flex items-center gap-3 p-2 rounded-xl transition active:scale-[0.98] ${
              activeNav === "liked" ? "bg-[#242424]" : "hover:bg-[#1a1a1a] active:bg-[#222222]"
            }`}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center flex-shrink-0 shadow">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">Liked Songs</p>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                <span>Playlist</span>
                <span>•</span>
                <span>
                  {likedCount} {likedCount === 1 ? "song" : "songs"}
                </span>
              </p>
            </div>
          </button>
        )}

        {/* 5. Songs List */}
        {filteredSongs.map((song) => {
          const isCurrentActive = currentSong?.id === song.id;
          return (
            <button
              type="button"
              key={song.id}
              onClick={() => handleSelectSong(song)}
              className={`w-full text-left flex items-center gap-3 p-2 rounded-xl transition active:scale-[0.98] ${
                isCurrentActive ? "bg-[#242424]" : "hover:bg-[#1a1a1a] active:bg-[#222222]"
              }`}
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black flex-shrink-0 shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={song.cover_url}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                {isCurrentActive && isPlaying && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Volume2 className="w-4 h-4 text-white animate-pulse" />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-semibold truncate ${
                    isCurrentActive
                      ? "text-white font-bold"
                      : "text-zinc-100"
                  }`}
                >
                  {song.title}
                </p>
                <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                  <span>Song</span>
                  <span>•</span>
                  <span>{song.artist}</span>
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
