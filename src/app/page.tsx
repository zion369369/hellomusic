"use client";

import React from "react";
import { PlayerProvider, usePlayer } from "@/context/PlayerContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import HeroSpotlight from "@/components/HeroSpotlight";
import SongCard from "@/components/SongCard";
import PlayerBottomBar from "@/components/PlayerBottomBar";
import PublishSongModal from "@/components/PublishSongModal";
import SupabaseSetupModal from "@/components/SupabaseSetupModal";
import AuthModal from "@/components/AuthModal";
import { PlusCircle, Music, Disc3 } from "lucide-react";

function MusicAppContent() {
  const {
    filteredSongs,
    activeNav,
    searchQuery,
    selectedGenre,
    setIsPublishModalOpen,
    isLoadingSongs,
  } = usePlayer();

  const getSectionTitle = () => {
    if (searchQuery.trim()) {
      return `Search results for "${searchQuery}"`;
    }
    if (activeNav === "liked") {
      return "Your Liked Anthems";
    }
    if (activeNav === "underrated") {
      return "Underrated Vault — Gems Only";
    }
    if (activeNav === "library") {
      return "Your Personal Sound Vault";
    }
    if (selectedGenre !== "All") {
      return `${selectedGenre} Selections`;
    }
    return "Underrated Vault & Discoveries";
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-black text-white font-sans">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#09090b]">
        {/* Sticky Top Navbar */}
        <Navbar />

        {/* Scrollable Feed Container */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 pb-32">
          {/* Main Hero Banner: Spotlight "Fly away" by ZION (displayed on Home when no search) */}
          {activeNav === "home" && !searchQuery.trim() && selectedGenre === "All" && (
            <HeroSpotlight />
          )}

          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  {getSectionTitle()}
                </h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                  {filteredSongs.length} {filteredSongs.length === 1 ? "track" : "tracks"}
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                {activeNav === "liked"
                  ? "Tracks you have resonated with and saved."
                  : activeNav === "underrated"
                  ? "Filtered for raw originality, obscurity, and underground perfection."
                  : "High-contrast sonic experiences crafted by independent artists."}
              </p>
            </div>

            {/* Quick Upload CTA button */}
            <button
              onClick={() => setIsPublishModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-xs font-bold text-white transition hover:scale-105"
            >
              <PlusCircle className="w-4 h-4 text-white" />
              <span>Publish Track</span>
            </button>
          </div>

          {/* Songs Grid */}
          {isLoadingSongs ? (
            <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
              <Disc3 className="w-8 h-8 animate-spin mb-3 text-white" />
              <p className="text-xs font-mono">Loading audio catalog...</p>
            </div>
          ) : filteredSongs.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredSongs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-800 rounded-3xl p-8 bg-zinc-950/40">
              <Music className="w-12 h-12 text-zinc-600 mb-4 stroke-[1.5]" />
              <h3 className="text-lg font-bold text-white mb-1">No tracks found</h3>
              <p className="text-xs text-zinc-400 max-w-sm mb-5 leading-relaxed">
                {searchQuery
                  ? `We could not find any underrated songs matching "${searchQuery}". Try a different keyword or publish your own!`
                  : "No songs match this category yet. Be the first to share an underrated anthem."}
              </p>
              <button
                onClick={() => setIsPublishModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-zinc-200 transition shadow-lg shadow-white/10"
              >
                Publish Your Track Now
              </button>
            </div>
          )}

          {/* Community Info Banner */}
          {activeNav === "home" && !searchQuery.trim() && (
            <div className="mt-12 p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="font-extrabold text-sm tracking-widest text-white uppercase">
                    Hello Music Manifest
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                    B&amp;W AESTHETIC
                  </span>
                </div>
                <p className="text-xs text-zinc-400 max-w-xl">
                  &ldquo;A different world of music. Underrated songs only......&rdquo; Hello Music is built for creators, underground remixers, and listeners seeking sonic depth over algorithmic noise.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPublishModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition"
                >
                  Publish a Song
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      <PublishSongModal />
      <SupabaseSetupModal />
      <AuthModal />

      {/* Sticky Bottom Player Bar */}
      <PlayerBottomBar />
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
