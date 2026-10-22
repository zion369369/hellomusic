"use client";

import React from "react";
import { PlayerProvider, usePlayer } from "@/context/PlayerContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SongCard from "@/components/SongCard";
import SpotifyQuickCard from "@/components/SpotifyQuickCard";
import PlayerBottomBar from "@/components/PlayerBottomBar";
import PublishSongModal from "@/components/PublishSongModal";
import SupabaseSetupModal from "@/components/SupabaseSetupModal";
import AuthModal from "@/components/AuthModal";
import { Music, Disc3 } from "lucide-react";

function MusicAppContent() {
  const {
    filteredSongs,
    songs,
    activeNav,
    searchQuery,
    selectedGenre,
    setSelectedGenre,
    setIsPublishModalOpen,
    isLoadingSongs,
  } = usePlayer();

  const categoryPills = ["All", "ZION Originals", "Remixes", "Ambient", "VIP Radio"];

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
                (pill !== "All" && selectedGenre.toLowerCase().includes(pill.toLowerCase().replace("zion ", "")));
              return (
                <button
                  key={pill}
                  onClick={() => {
                    if (pill === "All") setSelectedGenre("All");
                    else setSelectedGenre(pill.replace("ZION ", ""));
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
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

          {/* Quick-Picks 2x4 Grid (Featured on Home when not searching) */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="mb-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {songs.slice(0, 8).map((song) => (
                  <SpotifyQuickCard key={`quick-${song.id}`} song={song} />
                ))}
              </div>
            </div>
          )}

          {/* SECTION 1: "Jump back in" */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer">
                {searchQuery ? `Search results for "${searchQuery}"` : activeNav === "liked" ? "Liked Songs" : "Jump back in"}
              </h2>
              <button
                onClick={() => setSelectedGenre("All")}
                className="text-xs font-bold text-[#b3b3b3] hover:underline hover:text-white"
              >
                Show all
              </button>
            </div>

            {isLoadingSongs ? (
              <div className="flex items-center justify-center py-16 text-zinc-500">
                <Disc3 className="w-8 h-8 animate-spin text-white" />
              </div>
            ) : filteredSongs.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
                    ? `No ZION tracks match "${searchQuery}". Try searching for Fly away or Ure Jao.`
                    : "No songs in this view yet."}
                </p>
                <button
                  onClick={() => setIsPublishModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition"
                >
                  Publish New Track
                </button>
              </div>
            )}
          </div>

          {/* SECTION 2: "More of what you like" (ZION Curated) */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:underline cursor-pointer">
                    More of what you like
                  </h2>
                  <p className="text-xs text-[#a7a7a7]">Handpicked ZION master cuts &amp; soundscapes.</p>
                </div>
                <button
                  onClick={() => setIsPublishModalOpen(true)}
                  className="text-xs font-bold text-[#b3b3b3] hover:underline hover:text-white"
                >
                  Show all
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {songs.map((song) => (
                  <SongCard key={`more-${song.id}`} song={song} />
                ))}
              </div>
            </div>
          )}

          {/* Footer Info / Spotify-style legal & tagline */}
          <div className="pt-10 pb-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#727272]">
            <div>
              <p className="font-semibold text-zinc-400">HELLO MUSIC // ZION EDITION</p>
              <p className="text-[11px] mt-0.5">&ldquo;A different world of music. Underrated songs only......&rdquo;</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPublishModalOpen(true)}
                className="hover:text-white hover:underline transition"
              >
                Publish Song
              </button>
              <span>•</span>
              <span className="font-mono text-[11px]">B&amp;W Spotify Aesthetic</span>
            </div>
          </div>
        </main>
      </div>

      {/* 3. PERSISTENT SPOTIFY BOTTOM PLAYER BAR */}
      <PlayerBottomBar />

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
