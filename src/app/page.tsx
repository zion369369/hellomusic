"use client";

import React from "react";
import { PlayerProvider, usePlayer } from "@/context/PlayerContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SongCard from "@/components/SongCard";
import SpotifyQuickCard from "@/components/SpotifyQuickCard";
import CosmosAestheticPanel from "@/components/CosmosAestheticPanel";
import MusicBeyondImaginationHero from "@/components/MusicBeyondImaginationHero";
import PlayerBottomBar from "@/components/PlayerBottomBar";
import PublishSongModal from "@/components/PublishSongModal";
import SupabaseSetupModal from "@/components/SupabaseSetupModal";
import AuthModal from "@/components/AuthModal";
import LiveCosmicFlightModal from "@/components/LiveCosmicFlightModal";
import { Music, Disc3, Heart } from "lucide-react";

function MusicAppContent() {
  const {
    filteredSongs,
    songs,
    activeNav,
    setActiveNav,
    searchQuery,
    selectedGenre,
    setSelectedGenre,
    setIsPublishModalOpen,
    isLoadingSongs,
  } = usePlayer();

  const categoryPills = [
    "All",
    "Beyond Imagination",
    "Escape to Cosmos",
    "Original",
  ];
  const flyAwaySong = songs[0];

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-black text-white font-sans select-none">
      {/* 1. TOP WINDOW BAR */}
      <Navbar />

      {/* 2. MAIN 2-COLUMN VIEW (Card-in-card with 8px gaps like Spotify desktop) */}
      <div className="flex-1 flex gap-2 px-2 pb-2 min-h-0 overflow-hidden">
        {/* LEFT SIDEBAR: Your Library */}
        <Sidebar />

        {/* MAIN CANVAS */}
        <main className="flex-1 bg-[#121212] rounded-lg overflow-y-auto overflow-x-hidden p-6 relative border border-zinc-900/60 shadow-xl">
          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 mb-6 sticky -top-6 pt-2 pb-2 bg-[#121212]/95 backdrop-blur-md z-10">
            {categoryPills.map((pill) => {
              const isActive =
                (pill === "All" && selectedGenre === "All") ||
                (pill !== "All" && selectedGenre.toLowerCase().includes(pill.toLowerCase()));
              return (
                <button
                  key={pill}
                  onClick={() => {
                    if (pill === "All") setSelectedGenre("All");
                    else setSelectedGenre(pill);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
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

          {/* UPON OPENING SCREEN: ANIMATED GUIDED IMAGINATION ON FLY (THE USP) */}
          {activeNav === "home" && !searchQuery.trim() && (
            <MusicBeyondImaginationHero />
          )}

          {/* Quick-Picks Row */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Escape to Cosmos
                  </h2>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    ZION
                  </span>
                </div>
              </div>

              {/* 2-Column Showcase: Song on Left + Deep Aesthetic Quotes on the Right Side of the Song */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* LEFT: Spotify Song Card */}
                <div className="lg:col-span-5 max-w-md w-full">
                  <SongCard song={flyAwaySong} />
                </div>

                {/* RIGHT SIDE OF THE SONG: Deep Aesthetic Cosmos Quotes */}
                <div className="lg:col-span-7 flex flex-col justify-stretch">
                  <CosmosAestheticPanel />
                </div>
              </div>
            </div>
          ) : (
            /* Search or Filtered View */
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {searchQuery ? `Search results for "${searchQuery}"` : "Liked Songs"}
                </h2>
              </div>

              {isLoadingSongs ? (
                <div className="flex items-center justify-center py-16 text-zinc-500">
                  <Disc3 className="w-8 h-8 animate-spin text-white" />
                </div>
              ) : filteredSongs.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                  <div className="lg:col-span-5 max-w-md w-full">
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

      {/* 3. PERSISTENT SPOTIFY BOTTOM PLAYER BAR */}
      <PlayerBottomBar />

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
