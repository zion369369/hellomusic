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
import LiveCosmicFlightModal from "@/components/LiveCosmicFlightModal";
import {
  Music,
  Disc3,
  Heart,
  Home as HomeIcon,
  Library,
  Search,
  X,
} from "lucide-react";

function MusicAppContent() {
  const {
    filteredSongs,
    songs,
    activeNav,
    setActiveNav,
    searchQuery,
    setSearchQuery,
    setSelectedGenre,
    setIsPublishModalOpen,
    isLoadingSongs,
    playSong,
  } = usePlayer();

  const [mobileTab, setMobileTab] = useState<"cosmos" | "search" | "library">("cosmos");

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
                  Explore Music
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGenre("All");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 text-left hover:border-white/30 transition active:scale-[0.98] flex flex-col justify-between h-24 shadow-sm"
                  >
                    <Music className="w-5 h-5 text-zinc-200" />
                    <div>
                      <p className="text-sm font-bold text-white">Soundscapes</p>
                      <p className="text-[10px] text-zinc-400">Cinematic & Deep</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGenre("Original");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-zinc-950 border border-emerald-500/20 text-left hover:border-emerald-500/40 transition active:scale-[0.98] flex flex-col justify-between h-24 shadow-sm"
                  >
                    <Disc3 className="w-5 h-5 text-[#1ed760]" />
                    <div>
                      <p className="text-sm font-bold text-white">Original Masters</p>
                      <p className="text-[10px] text-zinc-400">Lossless Studio</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGenre("Escape to Cosmos");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/60 to-zinc-950 border border-indigo-500/20 text-left hover:border-indigo-500/40 transition active:scale-[0.98] flex flex-col justify-between h-24 shadow-sm"
                  >
                    <Disc3 className="w-5 h-5 text-indigo-300" />
                    <div>
                      <p className="text-sm font-bold text-white">Space & Ambient</p>
                      <p className="text-[10px] text-zinc-400">Atmospheric Sound</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveNav("liked");
                      setMobileTab("cosmos");
                    }}
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-950/60 to-zinc-950 border border-purple-500/20 text-left hover:border-purple-500/40 transition active:scale-[0.98] flex flex-col justify-between h-24 shadow-sm"
                  >
                    <Heart className="w-5 h-5 text-purple-300" />
                    <div>
                      <p className="text-sm font-bold text-white">Liked Songs</p>
                      <p className="text-[10px] text-zinc-400">Your Favorites</p>
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

          {/* Quick-Picks Row (Desktop/Tablet clean secondary bar) */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="hidden sm:block mb-4 sm:mb-5">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                {/* Liked Songs Quick Card */}
                <div
                  onClick={() => setActiveNav("liked")}
                  className="group flex items-center justify-between bg-[#242424]/70 hover:bg-[#2e2e2e] rounded overflow-hidden cursor-pointer transition-all duration-200 select-none shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-zinc-700 to-black flex items-center justify-center shadow">
                      <Heart className="w-5 h-5 fill-white text-white" />
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

          {/* MAIN UNIFIED CENTRAL SHOWCASE: ONE SCREEN EXPERIENCE */}
          {activeNav === "home" && !searchQuery.trim() && flyAwaySong ? (
            <div className="mb-6 sm:mb-8 w-full max-w-4xl mx-auto">
              <CosmosAestheticPanel />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {filteredSongs.map((song) => (
                    <SongCard key={song.id} song={song} />
                  ))}
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
          <span className="text-[10px] tracking-tight">Home</span>
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
      <LiveCosmicFlightModal />
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
