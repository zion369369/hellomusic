"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Home,
  Search,
  PlusCircle,
  X,
  User,
  LogOut,
  Music,
} from "lucide-react";

export default function Navbar() {
  const {
    searchQuery,
    setSearchQuery,
    setActiveNav,
    setIsPublishModalOpen,
    setIsAuthModalOpen,
    currentUser,
    logoutUser,
  } = usePlayer();

  return (
    <header className="h-14 sm:h-16 px-3 sm:px-5 flex items-center justify-between select-none bg-black border-b border-zinc-900/60 flex-shrink-0 z-30">
      {/* BRAND LOGO: Black and White Music Sign */}
      <div
        onClick={() => {
          setSearchQuery("");
          setActiveNav("home");
        }}
        className="flex items-center gap-2.5 cursor-pointer group"
      >
        <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-200 flex-shrink-0">
          <Music className="w-4 h-4 text-black fill-black stroke-[2.2] translate-x-[0.5px]" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs sm:text-sm font-black tracking-wider text-white">
            HELLO MUSIC
          </span>
          <span className="hidden lg:inline text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/15 uppercase">
            Beyond Imagination
          </span>
        </div>
      </div>

      {/* DESKTOP CENTER: Spotify Desktop Search Pill + Home Button */}
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-6 justify-center">
        <button
          onClick={() => {
            setSearchQuery("");
            setActiveNav("home");
          }}
          className="w-10 h-10 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-white flex items-center justify-center transition hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          title="Home"
        >
          <Home className="w-5 h-5 stroke-[2.2]" />
        </button>

        <div className="relative flex-1 flex items-center bg-[#1f1f1f] hover:bg-[#282828] focus-within:bg-[#1f1f1f] rounded-full px-3.5 py-2 transition border border-transparent focus-within:border-white focus-within:ring-2 focus-within:ring-white/20">
          <Search className="w-4 h-4 text-[#b3b3b3] mr-2.5 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search songs, artists, or cosmic journeys..."
            className="w-full bg-transparent text-white text-xs sm:text-sm placeholder-[#71717a] font-normal border-none outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#b3b3b3] hover:text-white ml-2 p-0.5"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* RIGHT ACTIONS: Publish Track + User Auth */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Publish Action Button */}
        <button
          onClick={() => setIsPublishModalOpen(true)}
          className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 active:scale-95 transition shadow-sm whitespace-nowrap"
          title="Publish a song"
        >
          <PlusCircle className="w-3.5 h-3.5 text-black" />
          <span className="text-xs">Publish</span>
        </button>

        {/* User Profile / Auth Avatar */}
        {currentUser ? (
          <div className="flex items-center gap-2 bg-[#1f1f1f] pl-1.5 pr-2.5 py-1 rounded-full border border-zinc-800">
            <div className="w-6 h-6 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center">
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
            <span className="text-xs font-semibold text-white max-w-[80px] truncate hidden sm:inline">
              {currentUser.username}
            </span>
            <button
              onClick={logoutUser}
              title="Sign out"
              className="text-zinc-400 hover:text-white p-1"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] border border-zinc-700/80 text-white flex items-center justify-center transition active:scale-95 shadow-sm"
            title="Sign in"
          >
            <User className="w-4 h-4 text-zinc-300" />
          </button>
        )}
      </div>
    </header>
  );
}
