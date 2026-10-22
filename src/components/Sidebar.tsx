"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Library,
  Plus,
  ArrowRight,
  Search,
  Heart,
  Volume2,
  BookOpen,
  Atom,
  Globe,
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
      {/* Header: Your Library (Authentic Spotify Desktop) */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <button
            onClick={() => {
              setActiveNav("home");
              if (onMobileItemClick) onMobileItemClick();
            }}
            className="flex items-center gap-3 hover:text-white transition group"
          >
            <Library className="w-6 h-6 stroke-[2.2]" />
            <span className="font-bold text-sm tracking-tight text-[#b3b3b3] group-hover:text-white">
              Your Library
            </span>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsPublishModalOpen(true)}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition"
              title="Publish a song"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setActiveNav("home");
                if (onMobileItemClick) onMobileItemClick();
              }}
              className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white transition"
              title="Enlarge library"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tagline Pill */}
        <div className="mt-2.5 px-2.5 py-1 rounded bg-[#1c1c1c] text-[10px] text-zinc-400 font-medium flex items-center justify-between">
          <span className="tracking-wide text-zinc-300">Escape to Cosmos</span>
          <span className="text-[9px] font-mono text-zinc-400">ZION</span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar">
          {["All", "Celestial", "Philosophy", "Science", "Liked"].map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setLibraryFilter(pill);
                if (pill === "Liked") setActiveNav("liked");
                else if (pill === "All") setActiveNav("home");
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                libraryFilter === pill
                  ? "bg-white text-black font-bold"
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
            value={librarySearch}
            onChange={(e) => setLibrarySearch(e.target.value)}
            placeholder="Search in Your Library"
            className="w-full bg-[#1c1c1c] text-white placeholder-zinc-500 text-[11px] pl-8 pr-2 py-1 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* Journeys, Playlists & Songs List (Synced with Cosmos Showcase) */}
      <div className="flex-1 overflow-y-auto px-2 space-y-0.5 pb-4">
        {/* 1. Philosophy: Kant & Nietzsche */}
        {showPhilosophy && (
          <div
            onClick={() => handleSelectJourney("philosophy")}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition group ${
              activeImaginationId === "philosophy"
                ? "bg-[#262626] border-l-2 border-white pl-2"
                : "hover:bg-[#1a1a1a]"
            }`}
          >
            <div className="w-12 h-12 rounded bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <BookOpen className="w-5 h-5 text-zinc-200 group-hover:text-white" />
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
                {activeImaginationId === "philosophy" && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                <span>Philosophy</span>
                <span>•</span>
                <span>Critique & Zarathustra</span>
              </p>
            </div>
          </div>
        )}

        {/* 2. Science: Einstein & Sagan */}
        {showScience && (
          <div
            onClick={() => handleSelectJourney("science")}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition group ${
              activeImaginationId === "science"
                ? "bg-[#262626] border-l-2 border-white pl-2"
                : "hover:bg-[#1a1a1a]"
            }`}
          >
            <div className="w-12 h-12 rounded bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <Atom className="w-5 h-5 text-cyan-300 group-hover:text-cyan-200" />
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
                {activeImaginationId === "science" && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white text-black font-bold">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                <span>Science</span>
                <span>•</span>
                <span>Spacetime & Star-Stuff</span>
              </p>
            </div>
          </div>
        )}

        {/* 3. Celestial Horizons (Moon, Venus, Jupiter, Saturn, Sun, Deep Cosmos) */}
        {filteredCelestial.map((dest) => {
          const isDestActive = activeImaginationId === dest.id;
          return (
            <div
              key={dest.id}
              onClick={() => handleSelectJourney(dest.id)}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition group ${
                isDestActive
                  ? "bg-[#262626] border-l-2 border-cyan-400 pl-2"
                  : "hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="w-12 h-12 rounded bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
                <Globe className="w-5 h-5 text-zinc-400 group-hover:text-white" />
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
                  {isDestActive && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-400 text-black font-bold">
                      ORBIT
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#b3b3b3] truncate">{dest.meta}</p>
              </div>
            </div>
          );
        })}

        {/* 4. Liked Songs Row */}
        {(libraryFilter === "All" || libraryFilter === "Liked") && !filterLower && (
          <div
            onClick={handleSelectLiked}
            className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition ${
              activeNav === "liked" ? "bg-[#242424]" : "hover:bg-[#1a1a1a]"
            }`}
          >
            <div className="w-12 h-12 rounded bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center flex-shrink-0 shadow">
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
          </div>
        )}

        {/* 5. Songs List */}
        {filteredSongs.map((song) => {
          const isCurrentActive = currentSong?.id === song.id;
          return (
            <div
              key={song.id}
              onClick={() => handleSelectSong(song)}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition group ${
                isCurrentActive ? "bg-[#242424]" : "hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="relative w-12 h-12 rounded overflow-hidden bg-black flex-shrink-0 shadow">
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
                      : "text-zinc-100 group-hover:text-white"
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
            </div>
          );
        })}
      </div>
    </aside>
  );
}
