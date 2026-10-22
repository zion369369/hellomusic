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

  return (
    <div
      onClick={handleCardClick}
      className={`group p-3.5 rounded-md bg-[#181818] hover:bg-[#282828] transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-sm ${
        isCurrentActive ? "bg-[#282828]" : ""
      }`}
    >
      <div>
        {/* Album Artwork with Spotify Hover Play Button */}
        <div className="relative aspect-square w-full rounded overflow-hidden bg-[#242424] mb-3 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={song.cover_url}
            alt={song.title}
            className="w-full h-full object-cover"
          />

          {/* Spotify Floating Pure White Play Button */}
          <div
            className={`absolute bottom-2 right-2 transition-all duration-200 ease-out transform ${
              isNowPlaying || isCurrentActive
                ? "opacity-100 translate-y-0 scale-100 shadow-2xl"
                : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 scale-95 group-hover:scale-100 shadow-2xl"
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
              title={isNowPlaying ? "Pause" : "Play"}
            >
              {isNowPlaying ? (
                <Pause className="w-5 h-5 fill-black" />
              ) : (
                <Play className="w-5 h-5 fill-black ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Title & Artist */}
        <div>
          <h3
            className={`font-bold text-sm tracking-tight truncate ${
              isCurrentActive ? "text-white font-extrabold" : "text-white group-hover:underline"
            }`}
          >
            {song.title}
          </h3>
          <p className="text-xs text-[#a7a7a7] mt-1 line-clamp-2 leading-relaxed">
            {song.description || `${song.artist} • ${song.genre}`}
          </p>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="mt-3 pt-2 border-t border-zinc-800/40 flex items-center justify-between text-[11px] text-[#a7a7a7]">
        <div className="flex items-center gap-1 font-mono">
          <Eye className="w-3.5 h-3.5 text-zinc-500" />
          <span>{song.views_count.toLocaleString()}</span>
        </div>

        <button
          onClick={handleLikeClick}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded transition ${
            song.is_liked ? "text-white font-semibold" : "text-zinc-500 hover:text-white"
          }`}
          title={song.is_liked ? "Unlike" : "Like"}
        >
          <Heart className={`w-3.5 h-3.5 ${song.is_liked ? "fill-white text-white" : ""}`} />
          <span>{song.likes_count}</span>
        </button>
      </div>
    </div>
  );
}
