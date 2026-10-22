"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Search,
  FolderClosed,
  Bell,
  Users2,
  PlusCircle,
  X,
  User,
  LogOut,
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
    <header className="h-14 sm:h-16 px-2 sm:px-4 flex items-center justify-between select-none bg-black gap-2 sm:gap-4 flex-shrink-0">
      {/* LEFT: Window / Navigation Arrows + Brand */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setActiveNav("home")}
          className="hidden sm:flex w-8 h-8 rounded-full bg-[#121212] hover:bg-[#1a1a1a] text-[#b3b3b3] hover:text-white items-center justify-center transition"
          title="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="hidden sm:flex w-8 h-8 rounded-full bg-[#121212] hover:bg-[#1a1a1a] text-[#727272] hover:text-white items-center justify-center transition"
          title="Go forward"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          onClick={() => setActiveNav("home")}
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
        >
          <span className="text-[11px] sm:text-xs font-black tracking-wider text-white whitespace-nowrap">
            HELLO MUSIC
          </span>
          <span className="hidden lg:inline text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/15">
            BEYOND IMAGINATION
          </span>
        </div>
      </div>

      {/* CENTER: Spotify Pill Controls (Home + Search Pill) */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-1 max-w-xl justify-center">
        {/* Home Circular Button */}
        <button
          onClick={() => {
            setSearchQuery("");
            setActiveNav("home");
          }}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-white flex items-center justify-center transition hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          title="Home"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>

        {/* Spotify Search Pill with Browse icon on the right */}
        <div className="relative flex-1 flex items-center bg-[#1f1f1f] hover:bg-[#282828] focus-within:bg-[#1f1f1f] rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition border border-transparent focus-within:border-white focus-within:ring-2 focus-within:ring-white/20 min-w-0">
          <Search className="w-4 h-4 text-[#b3b3b3] mr-2 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search songs or cosmos..."
            className="w-full bg-transparent text-white text-xs sm:text-sm placeholder-[#71717a] font-normal border-none outline-none min-w-0"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#b3b3b3] hover:text-white ml-1.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center pl-2 border-l border-zinc-700/80 ml-2">
              <span title="Browse">
                <FolderClosed className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Publish Button, Notifications, Profile */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Guided Imagination Status Indicator */}
        <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 font-mono text-[11px] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>GUIDED IMAGINATION</span>
        </div>

        {/* Publish Action Button */}
        <button
          onClick={() => setIsPublishModalOpen(true)}
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-[11px] sm:text-xs hover:scale-105 active:scale-95 transition shadow-sm whitespace-nowrap"
        >
          <PlusCircle className="w-3.5 h-3.5 text-black" />
          <span className="hidden sm:inline">Publish</span>
        </button>

        {/* Bell Icon */}
        <button className="hidden sm:flex w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-[#b3b3b3] hover:text-white items-center justify-center transition">
          <Bell className="w-4 h-4" />
        </button>

        {/* Community / Friends Icon */}
        <button className="w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-[#b3b3b3] hover:text-white items-center justify-center transition hidden lg:flex">
          <Users2 className="w-4 h-4" />
        </button>

        {/* User Profile / Auth Avatar */}
        {currentUser ? (
          <div className="flex items-center gap-2 bg-[#1f1f1f] pl-1 pr-3 py-1 rounded-full border border-zinc-800">
            <div className="w-7 h-7 rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center">
              {currentUser.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentUser.avatar_url}
                  alt={currentUser.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-zinc-300" />
              )}
            </div>
            <span className="text-xs font-semibold text-white max-w-[80px] truncate">
              {currentUser.username}
            </span>
            <button
              onClick={logoutUser}
              title="Sign out"
              className="text-zinc-500 hover:text-white ml-1"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] border border-zinc-700 text-white flex items-center justify-center transition"
            title="Sign in"
          >
            <User className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
}
