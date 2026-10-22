import { Song } from "@/types";

export const INITIAL_SONGS: Song[] = [
  {
    id: "fly-away-zion",
    title: "Fly away",
    artist: "ZION",
    genre: "Escape to Cosmos • Original",
    audio_url: "/audio/fly-away-zion.mp3",
    cover_url: "/covers/fly-away.svg",
    duration: 224,
    views_count: 214,
    likes_count: 4,
    created_at: new Date().toISOString(),
    is_liked: true,
    description: "The cosmos is soaring with you. Escape to cosmos. ZION Original Master.",
    is_verified: true,
  },
];
