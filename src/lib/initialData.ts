import { Song } from "@/types";

export const INITIAL_SONGS: Song[] = [
  {
    id: "fly-away-zion",
    title: "Fly away",
    artist: "ZION",
    genre: "Underrated Remix",
    audio_url: "/audio/fly-away-zion.mp3",
    cover_url: "/covers/fly-away.svg",
    duration: 224,
    views_count: 1840,
    likes_count: 430,
    created_at: new Date().toISOString(),
    is_liked: true,
    description: "The original maiden anthem of Hello Music. Hypnotic atmospheric vocals, deep bass, and melodic transcendence.",
    is_verified: true,
  },
];
