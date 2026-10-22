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
  Orbit,
} from "lucide-react";

export default function Navbar() {
  const {
    searchQuery,
    setSearchQuery,
    setActiveNav,
    setIsPublishModalOpen,
    setIsAuthModalOpen,
    setIsFlightModalOpen,
    currentUser,
    logoutUser,
  } = usePlayer();

  return (
    <header className="h-16 px-4 flex items-center justify-between select-none bg-black gap-4">
      {/* LEFT: Window / Navigation Arrows */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveNav("home")}
          className="w-8 h-8 rounded-full bg-[#121212] hover:bg-[#1a1a1a] text-[#b3b3b3] hover:text-white flex items-center justify-center transition"
          title="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="w-8 h-8 rounded-full bg-[#121212] hover:bg-[#1a1a1a] text-[#727272] hover:text-white flex items-center justify-center transition"
          title="Go forward"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* CENTER: Spotify Pill Controls (Home + Search Pill) */}
      <div className="flex items-center gap-2 flex-1 max-w-xl justify-center">
        {/* Home Circular Button */}
        <button
          onClick={() => {
            setSearchQuery("");
            setActiveNav("home");
          }}
          className="w-12 h-12 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-white flex items-center justify-center transition hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          title="Home"
        >
          <Home className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* Spotify Search Pill with Browse icon on the right */}
        <div className="relative flex-1 flex items-center bg-[#1f1f1f] hover:bg-[#282828] focus-within:bg-[#1f1f1f] rounded-full px-3.5 py-2.5 transition border border-transparent focus-within:border-white focus-within:ring-2 focus-within:ring-white/20">
          <Search className="w-5 h-5 text-[#b3b3b3] mr-3 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to play?"
            className="w-full bg-transparent text-white text-sm placeholder-[#71717a] font-normal border-none outline-none"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#b3b3b3] hover:text-white ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center pl-2 border-l border-zinc-700/80 ml-2">
              <span title="Browse">
                <FolderClosed className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Flight Mode, Publish Button, Notifications, Profile */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* 360° Flight Experience Launcher */}
        <button
          onClick={() => setIsFlightModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-zinc-900 to-black border border-white/25 text-white font-bold text-xs hover:border-white hover:scale-105 active:scale-95 transition shadow-sm"
          title="Launch 360° Cosmic Flight Simulation"
        >
          <Orbit className="w-3.5 h-3.5 text-cyan-300 animate-spin-slow" />
          <span className="hidden sm:inline">360° Flight</span>
        </button>

        {/* Publish Action Button */}
        <button
          onClick={() => setIsPublishModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:scale-105 active:scale-95 transition shadow-sm"
        >
          <PlusCircle className="w-4 h-4 text-black" />
          <span>Publish</span>
        </button>

        {/* Bell Icon */}
        <button className="w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-[#b3b3b3] hover:text-white flex items-center justify-center transition">
          <Bell className="w-4 h-4" />
        </button>

        {/* Community / Friends Icon */}
        <button className="w-9 h-9 rounded-full bg-[#1f1f1f] hover:bg-[#282828] text-[#b3b3b3] hover:text-white flex items-center justify-center transition hidden sm:flex">
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
