"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Library,
  Plus,
  Search,
  Heart,
  Volume2,
  Pin,
  Disc,
  UserCheck,
} from "lucide-react";

interface SidebarProps {
  onMobileItemClick?: () => void;
  className?: string;
}

export default function Sidebar({ onMobileItemClick, className = "" }: SidebarProps) {
  const {
    songs,
    currentSong,
    isPlaying,
    playSong,
    setIsPublishModalOpen,
    activeNav,
    setActiveNav,
  } = usePlayer();

  const [libraryFilter, setLibraryFilter] = useState<string>("All");
  const [librarySearch, setLibrarySearch] = useState<string>("");

  const likedCount = songs.filter((s) => s.is_liked).length;
  const flyAwaySong = songs[0];

  const handleSelectSong = (song: (typeof songs)[0]) => {
    playSong(song);
    setActiveNav("home");
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

  return (
    <aside
      className={`bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl ${className}`}
    >
      {/* Header: Spotify Standard Library Header */}
      <div className="p-3.5 sm:p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <div className="flex items-center gap-2.5">
            <Library className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] text-[#b3b3b3] hover:text-white transition cursor-pointer" />
            <span className="font-bold text-sm tracking-tight text-[#b3b3b3] hover:text-white transition cursor-pointer">
              Your Library
            </span>
          </div>

          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="p-1.5 rounded-full hover:bg-[#242424] hover:text-white text-[#b3b3b3] transition active:scale-95"
            title="Create playlist or upload track"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills: Spotify Standard */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar py-0.5">
          {["Playlists", "Artists", "Albums"].map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setLibraryFilter((prev) => (prev === pill ? "All" : pill));
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

      {/* Library Items List */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 pb-36 md:pb-6 touch-scroll">
        {/* 1. Liked Songs (Pinned Playlist) */}
        {(libraryFilter === "All" || libraryFilter === "Playlists") && matchesSearch("Liked Songs") && (
          <button
            type="button"
            onClick={handleSelectLiked}
            className={`w-full text-left flex items-center gap-3 p-2 rounded-md transition active:scale-[0.98] ${
              activeNav === "liked" ? "bg-[#242424]" : "hover:bg-[#1a1a1a] active:bg-[#222222]"
            }`}
          >
            <div className="w-12 h-12 rounded bg-gradient-to-br from-indigo-700 via-purple-700 to-zinc-800 flex items-center justify-center flex-shrink-0 shadow">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">Liked Songs</p>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1.5">
                <Pin className="w-3 h-3 text-[#1ed760] fill-[#1ed760] rotate-45 inline" />
                <span>Playlist</span>
                <span>•</span>
                <span>{likedCount} {likedCount === 1 ? "song" : "songs"}</span>
              </p>
            </div>
          </button>
        )}

        {/* 2. Fly away (Track / Release) */}
        {flyAwaySong && (libraryFilter === "All" || libraryFilter === "Albums" || libraryFilter === "Playlists") && matchesSearch(flyAwaySong.title) && (
          <button
            type="button"
            onClick={() => handleSelectSong(flyAwaySong)}
            className={`w-full text-left flex items-center gap-3 p-2 rounded-md transition active:scale-[0.98] ${
              currentSong?.id === flyAwaySong.id ? "bg-[#242424]" : "hover:bg-[#1a1a1a] active:bg-[#222222]"
            }`}
          >
            <div className="relative w-12 h-12 rounded overflow-hidden bg-black flex-shrink-0 shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flyAwaySong.cover_url}
                alt={flyAwaySong.title}
                className="w-full h-full object-cover"
              />
              {currentSong?.id === flyAwaySong.id && isPlaying && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-[#1ed760] animate-pulse" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`text-sm font-semibold truncate ${
                  currentSong?.id === flyAwaySong.id ? "text-[#1ed760] font-bold" : "text-white"
                }`}
              >
                {flyAwaySong.title}
              </p>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                <span>Single</span>
                <span>•</span>
                <span>{flyAwaySong.artist}</span>
              </p>
            </div>
          </button>
        )}

        {/* 3. Escape to Cosmos (Album / Master Release) */}
        {(libraryFilter === "All" || libraryFilter === "Albums") && matchesSearch("Escape to Cosmos") && (
          <button
            type="button"
            onClick={() => {
              if (flyAwaySong) handleSelectSong(flyAwaySong);
            }}
            className="w-full text-left flex items-center gap-3 p-2 rounded-md transition hover:bg-[#1a1a1a] active:bg-[#222222]"
          >
            <div className="w-12 h-12 rounded bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <Disc className="w-6 h-6 text-zinc-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate">Escape to Cosmos</p>
              <p className="text-xs text-[#b3b3b3] truncate flex items-center gap-1">
                <span>Album</span>
                <span>•</span>
                <span>ZION</span>
              </p>
            </div>
          </button>
        )}

        {/* 4. ZION (Artist) */}
        {(libraryFilter === "All" || libraryFilter === "Artists") && matchesSearch("ZION") && (
          <button
            type="button"
            onClick={() => {
              setActiveNav("home");
              if (onMobileItemClick) onMobileItemClick();
            }}
            className="w-full text-left flex items-center gap-3 p-2 rounded-md transition hover:bg-[#1a1a1a] active:bg-[#222222]"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center flex-shrink-0 shadow">
              <span className="text-white font-bold text-base">Z</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white truncate flex items-center gap-1.5">
                <span>ZION</span>
                <UserCheck className="w-3.5 h-3.5 text-[#1ed760] inline" />
              </p>
              <p className="text-xs text-[#b3b3b3] truncate">Artist</p>
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}
