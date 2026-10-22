"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Upload,
  User,
  LogOut,
  X,
} from "lucide-react";

export default function Navbar() {
  const {
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    setIsPublishModalOpen,
    setIsAuthModalOpen,
    currentUser,
    logoutUser,
  } = usePlayer();

  const genres = ["All", "Underrated", "Remix", "Atmospheric", "Ambient", "Indie"];

  return (
    <header className="sticky top-0 z-10 glass-nav px-6 py-3.5 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: History & Search */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <div className="flex items-center gap-1 text-zinc-500 hidden sm:flex">
            <button className="w-8 h-8 rounded-full bg-black/40 border border-zinc-800/80 flex items-center justify-center hover:text-white hover:bg-zinc-800 transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-black/40 border border-zinc-800/80 flex items-center justify-center hover:text-white hover:bg-zinc-800 transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search underrated artists, songs, genres..."
              className="w-full bg-zinc-900/90 text-white placeholder-zinc-500 text-xs sm:text-sm pl-10 pr-9 py-2 rounded-full border border-zinc-800 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Publish Track button */}
          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Publish</span>
          </button>

          {/* User Profile / Login */}
          {currentUser ? (
            <div className="flex items-center gap-2.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
                {currentUser.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={currentUser.avatar_url}
                    alt={currentUser.username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-3.5 h-3.5 text-zinc-300" />
                )}
              </div>
              <span className="text-xs font-medium text-zinc-200 max-w-[100px] truncate">
                {currentUser.username}
              </span>
              <button
                onClick={logoutUser}
                title="Log out"
                className="text-zinc-500 hover:text-white ml-1"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-bold text-white hover:bg-zinc-800 transition"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>

      {/* Genre Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        {genres.map((genre) => {
          const isActive = selectedGenre === genre;
          return (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition whitespace-nowrap ${
                isActive
                  ? "bg-white text-black font-bold shadow-sm"
                  : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </header>
  );
}
