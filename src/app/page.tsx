"use client";

import React, { useState } from "react";
import { PlayerProvider, usePlayer } from "@/context/PlayerContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SongCard from "@/components/SongCard";
import SpotifyQuickCard from "@/components/SpotifyQuickCard";
import CosmosAestheticPanel from "@/components/CosmosAestheticPanel";
import PlayerBottomBar from "@/components/PlayerBottomBar";
import PublishSongModal from "@/components/PublishSongModal";
import SupabaseSetupModal from "@/components/SupabaseSetupModal";
import AuthModal from "@/components/AuthModal";
import {
  Music,
  Disc3,
  Heart,
  Home as HomeIcon,
  Library,
  Search,
  X,
  BookOpen,
  Atom,
  Globe,
  Compass,
} from "lucide-react";

function MusicAppContent() {
  const {
    filteredSongs,
    songs,
    activeNav,
    setActiveNav,
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    setIsPublishModalOpen,
    isLoadingSongs,
    setActiveImaginationId,
    playSong,
  } = usePlayer();

  const [mobileTab, setMobileTab] = useState<"cosmos" | "search" | "library">("cosmos");

  const categoryPills = ["All", "Escape to Cosmos", "Original"];
  const flyAwaySong = songs[0];

  return (
    <div className="flex flex-col h-[100dvh] w-full max-w-full overflow-hidden bg-black text-white font-sans select-none">
      {/* 1. TOP WINDOW BAR */}
      <Navbar />

      {/* 2. MAIN VIEWPORT (Responsive: 2-column card-in-card on desktop, single-panel toggle on phone) */}
      <div className="flex-1 flex gap-2 px-1.5 sm:px-2 pb-1 sm:pb-2 min-h-0 overflow-hidden">
        {/* DESKTOP SIDEBAR: Your Library */}
        <Sidebar className="hidden md:flex md:w-[280px] lg:w-[320px] flex-shrink-0" />

        {/* MOBILE LIBRARY VIEW (Visible when mobileTab === 'library') */}
        {mobileTab === "library" && (
          <div className="flex md:hidden flex-1 w-full h-full min-h-0">
            <Sidebar
              onMobileItemClick={() => setMobileTab("cosmos")}
              className="w-full h-full flex-1"
            />
          </div>
        )}

        {/* MOBILE DEDICATED SEARCH VIEW (Visible when mobileTab === 'search') */}
        {mobileTab === "search" && (
          <div className="flex md:hidden flex-1 flex-col w-full h-full min-h-0 bg-[#121212] rounded-lg p-3.5 sm:p-6 overflow-y-auto pb-36 touch-scroll border border-zinc-900/60 shadow-xl">
            {/* Search Input Bar */}
            <div className="relative flex items-center bg-[#242424] focus-within:bg-[#282828] rounded-full px-4 py-2.5 mb-5 border border-transparent focus-within:border-white transition shadow-md">
              <Search className="w-4 h-4 text-zinc-400 mr-2.5 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search songs, artists, or cosmic journeys..."
                className="w-full bg-transparent text-white text-sm placeholder-zinc-500 font-normal border-none outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-zinc-400 hover:text-white ml-2 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Search Results or Category Explore Cards */}
            {searchQuery.trim() ? (
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Search Results
                </h3>
                {filteredSongs.length > 0 ? (
                  filteredSongs.map((song) => (
                    <button
                      type="button"
                      key={song.id}
                      onClick={() => {
                        playSong(song);
                        setMobileTab("cosmos");
                      }}
                      className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 transition active:scale-[0.98]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={song.cover_url}
                        alt={song.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white truncate">{song.title}</p>
                        <p className="text-xs text-zinc-400 truncate">{song.artist}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-xs text-zinc-500 py-6 text-center">
                    No songs match &ldquo;{searchQuery}&rdquo;. Try &ldquo;Fly away&rdquo;, &ldquo;Kant&rdquo;, or &ldquo;Saturn&rdquo;.
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Explore Cosmos & Philosophy
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveImaginationId("philosophy");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 text-left hover:border-white/30 transition active:scale-[0.98] flex flex-col justify-between h-28 shadow-sm"
                  >
                    <BookOpen className="w-5 h-5 text-zinc-200" />
                    <div>
                      <p className="text-sm font-bold text-white">Philosophy</p>
                      <p className="text-[10px] text-zinc-400">Kant & Nietzsche</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveImaginationId("science");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-zinc-950 border border-cyan-500/20 text-left hover:border-cyan-500/40 transition active:scale-[0.98] flex flex-col justify-between h-28 shadow-sm"
                  >
                    <Atom className="w-5 h-5 text-cyan-300" />
                    <div>
                      <p className="text-sm font-bold text-white">Science</p>
                      <p className="text-[10px] text-zinc-400">Einstein & Sagan</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveImaginationId("moon");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-zinc-950 border border-indigo-500/20 text-left hover:border-indigo-500/40 transition active:scale-[0.98] flex flex-col justify-between h-28 shadow-sm"
                  >
                    <Globe className="w-5 h-5 text-indigo-300" />
                    <div>
                      <p className="text-sm font-bold text-white">Celestial</p>
                      <p className="text-[10px] text-zinc-400">Planets & Deep Void</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveImaginationId("meditation");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-zinc-950 border border-emerald-500/20 text-left hover:border-emerald-500/40 transition active:scale-[0.98] flex flex-col justify-between h-28 shadow-sm"
                  >
                    <Compass className="w-5 h-5 text-emerald-300" />
                    <div>
                      <p className="text-sm font-bold text-white">30s Meditation</p>
                      <p className="text-[10px] text-zinc-400">Calm Mind Flight</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MAIN CANVAS (Visible on desktop OR when mobileTab === 'cosmos') */}
        <main
          className={`${
            mobileTab === "cosmos" ? "flex" : "hidden md:flex"
          } flex-1 flex-col bg-[#121212] rounded-lg overflow-y-auto overflow-x-hidden p-3 sm:p-6 pb-36 md:pb-8 relative border border-zinc-900/60 shadow-xl touch-scroll`}
        >
          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6 sticky -top-3 sm:-top-6 pt-1 sm:pt-2 pb-2 bg-[#121212]/95 backdrop-blur-md z-10 overflow-x-auto no-scrollbar">
            {categoryPills.map((pill) => {
              const isActive =
                (pill === "All" && selectedGenre === "All") ||
                (pill !== "All" && selectedGenre.toLowerCase().includes(pill.toLowerCase()));
              return (
                <button
                  type="button"
                  key={pill}
                  onClick={() => {
                    if (pill === "All") setSelectedGenre("All");
                    else setSelectedGenre(pill);
                  }}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition active:scale-95 ${
                    isActive
                      ? "bg-white text-black font-bold"
                      : "bg-[#242424] text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* Quick-Picks Row */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="mb-4 sm:mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
                {/* Liked Songs Quick Card */}
                <div
                  onClick={() => setActiveNav("liked")}
                  className="group flex items-center justify-between bg-[#242424]/70 hover:bg-[#2e2e2e] rounded overflow-hidden cursor-pointer transition-all duration-200 select-none shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center shadow">
                      <Heart className="w-6 h-6 fill-white text-white" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-white truncate">
                      Liked Songs
                    </span>
                  </div>
                </div>

                {/* Song Quick Card */}
                {flyAwaySong && (
                  <SpotifyQuickCard key={`quick-${flyAwaySong.id}`} song={flyAwaySong} />
                )}
              </div>
            </div>
          )}

          {/* MAIN SHOWCASE: SONG ON THE LEFT + DEEP AESTHETIC COSMOS ON THE RIGHT */}
          {activeNav === "home" && !searchQuery.trim() && flyAwaySong ? (
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    Escape to Cosmos
                  </h2>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    ZION
                  </span>
                </div>
              </div>

              {/* 2-Column Showcase on Desktop / Stacked with ergonomics on Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                {/* LEFT: Spotify Song Card */}
                <div className="lg:col-span-5 max-w-md w-full mx-auto lg:mx-0">
                  <SongCard song={flyAwaySong} />
                </div>

                {/* RIGHT SIDE OF THE SONG: Deep Aesthetic Cosmos Quotes & 30s Meditation */}
                <div className="lg:col-span-7 flex flex-col justify-stretch">
                  <CosmosAestheticPanel />
                </div>
              </div>
            </div>
          ) : (
            /* Search or Filtered View */
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {searchQuery ? `Search results for "${searchQuery}"` : "Liked Songs"}
                </h2>
              </div>

              {isLoadingSongs ? (
                <div className="flex items-center justify-center py-16 text-zinc-500">
                  <Disc3 className="w-8 h-8 animate-spin text-white" />
                </div>
              ) : filteredSongs.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                  <div className="lg:col-span-5 max-w-md w-full mx-auto lg:mx-0">
                    <SongCard song={filteredSongs[0]} />
                  </div>
                  <div className="lg:col-span-7 flex flex-col justify-stretch">
                    <CosmosAestheticPanel />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-zinc-800 rounded-lg p-6 bg-[#181818]/60">
                  <Music className="w-10 h-10 text-zinc-600 mb-3" />
                  <h3 className="text-sm font-bold text-white mb-1">No tracks found</h3>
                  <p className="text-xs text-[#a7a7a7] max-w-sm mb-4">
                    {searchQuery
                      ? `No tracks match "${searchQuery}".`
                      : "No songs in this view yet."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsPublishModalOpen(true)}
                    className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition"
                  >
                    Publish Track
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* 3. PERSISTENT SPOTIFY BOTTOM PLAYER BAR (Mobile Mini-Player + Desktop Full Dock) */}
      <PlayerBottomBar onOpenCosmos={() => setMobileTab("cosmos")} />

      {/* 4. MOBILE BOTTOM NATIVE NAVIGATION (iPhone & Android 3-Tab Bar) */}
      <nav className="md:hidden flex items-center justify-around bg-black border-t border-zinc-900/80 h-14 py-1 pb-[max(0.35rem,env(safe-area-inset-bottom))] flex-shrink-0 z-20">
        <button
          type="button"
          onClick={() => {
            setMobileTab("cosmos");
            setActiveNav("home");
          }}
          className={`flex flex-col items-center gap-1 px-4 py-1.5 transition active:scale-95 ${
            mobileTab === "cosmos" ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <HomeIcon className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] tracking-tight">Cosmos</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileTab("search");
          }}
          className={`flex flex-col items-center gap-1 px-4 py-1.5 transition active:scale-95 ${
            mobileTab === "search" ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Search className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] tracking-tight">Search</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setMobileTab("library");
          }}
          className={`flex flex-col items-center gap-1 px-4 py-1.5 transition active:scale-95 ${
            mobileTab === "library" ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Library className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] tracking-tight">Your Library</span>
        </button>
      </nav>

      {/* Modals */}
      <PublishSongModal />
      <SupabaseSetupModal />
      <AuthModal />
    </div>
  );
}

export default function Home() {
  return (
    <PlayerProvider>
      <MusicAppContent />
    </PlayerProvider>
  );
}
