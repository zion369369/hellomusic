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
} from "lucide-react";

export default function Sidebar() {
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

  const filteredSongs = songs.filter((s) => {
    if (libraryFilter === "Liked" && !s.is_liked) return false;
    if (librarySearch.trim()) {
      return (
        s.title.toLowerCase().includes(librarySearch.toLowerCase()) ||
        s.artist.toLowerCase().includes(librarySearch.toLowerCase())
      );
    }
    return true;
  });

  return (
    <aside className="w-[300px] lg:w-[320px] flex-shrink-0 bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none border border-zinc-900/60 shadow-xl">
      {/* Header: Your Library (Authentic Spotify Desktop) */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-[#b3b3b3]">
          <button
            onClick={() => setActiveNav("home")}
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
              onClick={() => setActiveNav("home")}
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
          {["All", "Playlists", "Songs", "Liked"].map((pill) => (
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

      {/* Playlist / Songs List (Solid Spotify Feel) */}
      <div className="flex-1 overflow-y-auto px-2 space-y-0.5 pb-4">
        {/* Liked Songs Special Row */}
        {libraryFilter !== "Songs" && (
          <div
            onClick={() => setActiveNav("liked")}
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

        {/* Songs List: Real Album Art & Soundtracks */}
        {libraryFilter !== "Playlists" &&
          filteredSongs.map((song) => {
            const isCurrentActive = currentSong?.id === song.id;
            return (
              <div
                key={song.id}
                onClick={() => playSong(song)}
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
