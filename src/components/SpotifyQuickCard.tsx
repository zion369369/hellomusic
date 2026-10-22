"use client";

import React from "react";
import { Song } from "@/types";
import { usePlayer } from "@/context/PlayerContext";
import { Play, Pause } from "lucide-react";

interface SpotifyQuickCardProps {
  song: Song;
}

export default function SpotifyQuickCard({ song }: SpotifyQuickCardProps) {
  const { currentSong, isPlaying, playSong, togglePlay } = usePlayer();

  const isCurrentActive = currentSong?.id === song.id;
  const isNowPlaying = isCurrentActive && isPlaying;

  const handleClick = () => {
    if (isCurrentActive) {
      togglePlay();
    } else {
      playSong(song);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex items-center justify-between bg-[#242424]/70 hover:bg-[#2e2e2e] rounded overflow-hidden cursor-pointer transition-all duration-200 select-none shadow-sm ${
        isCurrentActive ? "bg-[#2e2e2e]" : ""
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 pr-2">
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-black overflow-hidden shadow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={song.cover_url}
            alt={song.title}
            className="w-full h-full object-cover"
          />
        </div>

        <span className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-white">
          {song.title}
        </span>
      </div>

      <div className="pr-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl transition-all duration-200 transform ${
            isNowPlaying || isCurrentActive
              ? "opacity-100 scale-100"
              : "opacity-100 sm:opacity-0 scale-100 sm:scale-90 sm:group-hover:opacity-100 sm:group-hover:scale-100"
          }`}
          title={isNowPlaying ? "Pause" : "Play"}
        >
          {isNowPlaying ? (
            <Pause className="w-4 h-4 fill-black" />
          ) : (
            <Play className="w-4 h-4 fill-black ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
