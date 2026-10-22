"use client";

import React from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  Home,
  Search,
  Flame,
  Heart,
  Library,
  PlusCircle,
  Database,
  CheckCircle2,
  Disc3,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  const {
    activeNav,
    setActiveNav,
    setIsPublishModalOpen,
    setIsSupabaseModalOpen,
    supabaseConnected,
    songs,
  } = usePlayer();

  const likedCount = songs.filter((s) => s.is_liked).length;

  return (
    <aside className="w-64 bg-black/90 border-r border-zinc-800/60 flex flex-col justify-between p-4 h-full select-none z-20">
      {/* Top Branding */}
      <div className="space-y-6">
        <div className="px-3 pt-2">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => setActiveNav("home")}>
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
              <Disc3 className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-wider text-white">HELLO</span>
                <span className="font-light text-lg tracking-widest text-zinc-400">MUSIC</span>
              </div>
            </div>
          </div>

          {/* Tagline Badges */}
          <div className="mt-3.5 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-medium text-zinc-300 tracking-wide">
              <Sparkles className="w-3 h-3 text-white" />
              <span>A different world of music</span>
            </div>
            <div className="text-[11px] text-zinc-500 font-mono tracking-tight pl-1">
              Underrated songs only......
            </div>
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-1 px-1">
          <button
            onClick={() => setActiveNav("home")}
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeNav === "home"
                ? "bg-white text-black shadow-md shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Discover Feed</span>
          </button>

          <button
            onClick={() => setActiveNav("search")}
            className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeNav === "search"
                ? "bg-white text-black shadow-md shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search Tracks</span>
          </button>

          <button
            onClick={() => setActiveNav("underrated")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeNav === "underrated"
                ? "bg-white text-black shadow-md shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <div className="flex items-center gap-3.5">
              <Flame className="w-4 h-4" />
              <span>Underrated Gems</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider bg-zinc-800 text-zinc-300">
              Hot
            </span>
          </button>
        </nav>

        {/* Library Divider */}
        <div className="pt-2 px-1 border-t border-zinc-800/60">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            Your Sound
          </div>
          <div className="space-y-1 mt-1">
            <button
              onClick={() => setActiveNav("liked")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeNav === "liked"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Heart className="w-4 h-4 text-white fill-white" />
                <span>Liked Tracks</span>
              </div>
              {likedCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                  {likedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveNav("library")}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeNav === "library"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <Library className="w-4 h-4" />
              <span>Your Library</span>
            </button>
          </div>
        </div>

        {/* Publish Action Button */}
        <div className="px-2 pt-2">
          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide shadow-lg shadow-white/5 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Publish Track</span>
          </button>
        </div>
      </div>

      {/* Bottom Full-stack Status / Supabase indicator */}
      <div className="pt-4 border-t border-zinc-800/80 space-y-2">
        <button
          onClick={() => setIsSupabaseModalOpen(true)}
          className="w-full p-2.5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 flex items-center justify-between text-left transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            <div className={`w-2.5 h-2.5 rounded-full ${supabaseConnected ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-zinc-500 animate-pulse"}`} />
            <div>
              <div className="text-xs font-semibold text-zinc-200 group-hover:text-white flex items-center gap-1.5">
                <Database className="w-3 h-3 text-zinc-400" />
                <span>{supabaseConnected ? "Supabase Live" : "Supabase Config"}</span>
              </div>
              <div className="text-[10px] text-zinc-500">
                {supabaseConnected ? "Cloud Sync Active" : "Click to connect DB"}
              </div>
            </div>
          </div>
          {supabaseConnected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
        </button>
      </div>
    </aside>
  );
}
