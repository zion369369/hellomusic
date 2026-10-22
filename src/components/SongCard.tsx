"use client";

import React from "react";
import { Song } from "@/types";
import { usePlayer } from "@/context/PlayerContext";
import { Play, Pause, Heart, Eye } from "lucide-react";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  const { currentSong, isPlaying, playSong, togglePlay, toggleLike } = usePlayer();

  const isCurrentActive = currentSong?.id === song.id;
  const isNowPlaying = isCurrentActive && isPlaying;

  const handleCardClick = () => {
    if (isCurrentActive) {
      togglePlay();
    } else {
      playSong(song);
    }
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike(song.id);
  };

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = Math.floor(sec % 60);
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative p-3.5 rounded-2xl bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
        isCurrentActive ? "border-zinc-500 bg-zinc-900/90 shadow-xl" : ""
      }`}
    >
      <div>
        {/* Cover Art Container */}
        <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black mb-3.5 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={song.cover_url}
            alt={song.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Duration Badge */}
          <div className="absolute bottom-2 left-2 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-black/70 text-zinc-300 backdrop-blur-sm border border-white/10">
            {formatDuration(song.duration)}
          </div>

          {/* Spotify-style Floating Play Button */}
          <div
            className={`absolute bottom-2 right-2 transition-all duration-300 ease-out transform ${
              isNowPlaying || isCurrentActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 scale-95 group-hover:scale-100"
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
            >
              {isNowPlaying ? (
                <Pause className="w-5 h-5 fill-black" />
              ) : (
                <Play className="w-5 h-5 fill-black ml-0.5" />
              )}
            </button>
          </div>

          {/* Verified / Underrated badge */}
          {song.genre && (
            <div className="absolute top-2 left-2">
              <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-950/80 text-zinc-300 border border-zinc-800 backdrop-blur-md">
                {song.genre}
              </span>
            </div>
          )}
        </div>

        {/* Title & Artist */}
        <div className="space-y-1">
          <h3
            className={`font-bold text-sm tracking-tight truncate ${
              isCurrentActive ? "text-white font-extrabold" : "text-zinc-100 group-hover:text-white"
            }`}
          >
            {song.title}
          </h3>
          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 truncate">
            {song.artist}
          </p>
        </div>
      </div>

      {/* Footer Metrics & Actions */}
      <div className="mt-3.5 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
        {/* View Count */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
          <Eye className="w-3.5 h-3.5" />
          <span>{song.views_count.toLocaleString()}</span>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLikeClick}
          className={`flex items-center gap-1 px-2 py-0.5 rounded-full transition-all text-[11px] ${
            song.is_liked
              ? "text-white bg-white/10 font-medium"
              : "text-zinc-500 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${song.is_liked ? "fill-white text-white" : ""}`} />
          <span>{song.likes_count}</span>
        </button>
      </div>
    </div>
  );
}
