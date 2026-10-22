"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import { Play, Pause, Heart, Eye, Sparkles } from "lucide-react";

export default function HeroSpotlight() {
  const { songs, currentSong, isPlaying, playSong, togglePlay, toggleLike } = usePlayer();

  // Find Fly away track or fallback to first song
  const flyAwaySong =
    songs.find((s) => s.id === "fly-away-zion" || s.title.toLowerCase() === "fly away") ||
    songs[0];

  if (!flyAwaySong) return null;

  const isCurrentActive = currentSong?.id === flyAwaySong.id;
  const isNowPlaying = isCurrentActive && isPlaying;

  const handlePlayHero = () => {
    if (isCurrentActive) {
      togglePlay();
    } else {
      playSong(flyAwaySong);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-zinc-800/80 p-6 sm:p-8 mb-8 shadow-2xl group">
      {/* Background Decorative Vinyl Circles & Radial Glow */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-zinc-800/40 pointer-events-none opacity-40 animate-spin-slow" />
      <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border border-dashed border-zinc-800/30 pointer-events-none" />
      <div className="absolute left-1/3 top-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Album Artwork with Vinyl Peek Effect */}
        <div className="relative flex-shrink-0 group/cover">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-2xl border border-zinc-700/60 bg-black relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={flyAwaySong.cover_url}
              alt={flyAwaySong.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isNowPlaying ? "scale-105" : "group-hover/cover:scale-105"
              }`}
            />
            {/* Dark glass gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            {/* Floating badge */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 text-black text-[10px] font-black uppercase tracking-wider shadow">
              Original Anthem
            </div>

            {/* Centered Play Button overlay */}
            <button
              onClick={handlePlayHero}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all opacity-90 hover:opacity-100"
            >
              {isNowPlaying ? (
                <Pause className="w-6 h-6 fill-black" />
              ) : (
                <Play className="w-6 h-6 fill-black ml-1" />
              )}
            </button>
          </div>

          {/* Equalizer Waveform indicator below cover if playing */}
          {isNowPlaying && (
            <div className="flex items-center justify-center gap-1 mt-3">
              <span className="w-1 bg-white rounded-full animate-equalize1" />
              <span className="w-1 bg-white rounded-full animate-equalize2" />
              <span className="w-1 bg-white rounded-full animate-equalize3" />
              <span className="w-1 bg-white rounded-full animate-equalize4" />
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider ml-1.5 uppercase">
                Now Streaming
              </span>
            </div>
          )}
        </div>

        {/* Hero Metadata & Controls */}
        <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-800/90 border border-zinc-700 text-xs font-semibold text-white tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Spotlight Release
            </span>
            <span className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-medium">
              {flyAwaySong.genre || "Underrated Remix"}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
              High-Fidelity Audio
            </span>
          </div>

          {/* Title & Artist */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              {flyAwaySong.title}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <span className="text-lg sm:text-xl font-medium text-zinc-300">
                {flyAwaySong.artist}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-xs text-zinc-400 font-mono tracking-wide">
                HELLO MUSIC EXCLUSIVE
              </span>
            </div>
          </div>

          {/* Story / Description */}
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
            {flyAwaySong.description ||
              "The premiere track defining Hello Music: high dynamic range, melancholic chords, and transcendent rhythms that transport you to a different world."}
          </p>

          {/* Actions & Metrics */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <button
              onClick={handlePlayHero}
              className="flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-black font-extrabold text-sm tracking-wide hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
            >
              {isNowPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-black" />
                  <span>Pause Anthem</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>Play &ldquo;Fly away&rdquo;</span>
                </>
              )}
            </button>

            <button
              onClick={() => toggleLike(flyAwaySong.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all text-xs font-semibold ${
                flyAwaySong.is_liked
                  ? "bg-white/10 border-white text-white"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${
                  flyAwaySong.is_liked ? "fill-white text-white" : ""
                }`}
              />
              <span>{flyAwaySong.likes_count} Likes</span>
            </button>

            <div className="flex items-center gap-1.5 text-zinc-400 text-xs px-3 py-2 rounded-full bg-zinc-900/60 border border-zinc-800">
              <Eye className="w-4 h-4 text-zinc-400" />
              <span>{flyAwaySong.views_count.toLocaleString()} Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
