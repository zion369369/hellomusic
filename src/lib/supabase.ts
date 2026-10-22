import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Song, UserProfile } from "@/types";
import { INITIAL_SONGS } from "./initialData";

const SUPABASE_URL_DEFAULT = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY_DEFAULT = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const LOCAL_STORAGE_SONGS_KEY = "hellomusic_songs_v4";
const LOCAL_STORAGE_LIKES_KEY = "hellomusic_likes_v1";
const LOCAL_STORAGE_USER_KEY = "hellomusic_user_v1";
const LOCAL_STORAGE_SUPABASE_CONFIG = "hellomusic_supabase_config";

// Get runtime keys (checks env vars first, then browser localStorage)
export function getSupabaseCredentials(): { url: string; anonKey: string } {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(LOCAL_STORAGE_SUPABASE_CONFIG);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.url && parsed.anonKey) {
          return { url: parsed.url, anonKey: parsed.anonKey };
        }
      } catch (e) {
        console.error("Failed to parse custom supabase config", e);
      }
    }
  }
  return {
    url: SUPABASE_URL_DEFAULT,
    anonKey: SUPABASE_ANON_KEY_DEFAULT,
  };
}

export function saveSupabaseCredentials(url: string, anonKey: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_SUPABASE_CONFIG, JSON.stringify({ url, anonKey }));
  }
}

export function isSupabaseConfigured(): boolean {
  const { url, anonKey } = getSupabaseCredentials();
  return Boolean(url && anonKey && url.startsWith("http"));
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const { url, anonKey } = getSupabaseCredentials();
  if (!url || !anonKey || !url.startsWith("http")) {
    return null;
  }
  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(url, anonKey);
    } catch (e) {
      console.error("Error creating Supabase client:", e);
      return null;
    }
  }
  return supabaseInstance;
}

// ---------------- LOCAL STORAGE FALLBACK HELPERS ----------------
function getLocalSongs(): Song[] {
  if (typeof window === "undefined") return INITIAL_SONGS;
  const stored = localStorage.getItem(LOCAL_STORAGE_SONGS_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_SONGS_KEY, JSON.stringify(INITIAL_SONGS));
    return INITIAL_SONGS;
  }
  try {
    const parsed: Song[] = JSON.parse(stored);
    // Ensure "Fly away" is always present and updated
    const index = parsed.findIndex((s) => s.id === "fly-away-zion" || s.title.toLowerCase() === "fly away");
    if (index === -1) {
      const merged = [INITIAL_SONGS[0], ...parsed];
      localStorage.setItem(LOCAL_STORAGE_SONGS_KEY, JSON.stringify(merged));
      return merged;
    } else {
      parsed[index] = { ...parsed[index], genre: INITIAL_SONGS[0].genre };
      localStorage.setItem(LOCAL_STORAGE_SONGS_KEY, JSON.stringify(parsed));
      return parsed;
    }
  } catch {
    return INITIAL_SONGS;
  }
}

function saveLocalSongs(songs: Song[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_SONGS_KEY, JSON.stringify(songs));
  }
}

export function getLikedSongIds(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_LIKES_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveLikedSongIds(ids: string[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCAL_STORAGE_LIKES_KEY, JSON.stringify(ids));
  }
}

// ---------------- PUBLIC API METHODS ----------------

/**
 * Fetch all published songs (combining Supabase or LocalStorage)
 */
export async function fetchAllSongs(): Promise<Song[]> {
  const supabase = getSupabase();
  const likedIds = getLikedSongIds();

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("songs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        // Map database records and combine with seed "Fly away" if not in db
        const mappedSongs: Song[] = data.map((item: Record<string, unknown>) => ({
          id: String(item.id),
          title: String(item.title || "Untitled"),
          artist: String(item.artist || "Unknown"),
          genre: String(item.genre || "Underrated"),
          audio_url: String(item.audio_url || ""),
          cover_url: String(item.cover_url || "/covers/fly-away.svg"),
          duration: Number(item.duration) || 180,
          views_count: Number(item.views_count) || 0,
          likes_count: Number(item.likes_count) || 0,
          created_at: String(item.created_at || new Date().toISOString()),
          description: item.description ? String(item.description) : undefined,
          is_verified: Boolean(item.is_verified),
          is_liked: likedIds.includes(String(item.id)),
        }));

        const hasFlyAway = mappedSongs.some((s) => s.title.toLowerCase() === "fly away");
        if (!hasFlyAway) {
          return [INITIAL_SONGS[0], ...mappedSongs];
        }
        return mappedSongs;
      }
    } catch (err) {
      console.warn("Supabase fetch error, using local data:", err);
    }
  }

  // Fallback to local storage
  const local = getLocalSongs();
  return local.map((s) => ({
    ...s,
    is_liked: likedIds.includes(s.id),
  }));
}

/**
 * Increment view count for a song
 */
export async function incrementSongView(songId: string): Promise<number> {
  const supabase = getSupabase();
  if (supabase) {
    try {
      const { data, error } = await supabase.rpc("increment_song_views", {
        target_song_id: songId,
      });
      if (!error && typeof data === "number") {
        return data;
      }
    } catch (e) {
      console.warn("Could not increment view on Supabase:", e);
    }
  }

  // Local update
  const songs = getLocalSongs();
  let updatedCount = 0;
  const updatedSongs = songs.map((s) => {
    if (s.id === songId) {
      updatedCount = (s.views_count || 0) + 1;
      return { ...s, views_count: updatedCount };
    }
    return s;
  });
  saveLocalSongs(updatedSongs);
  return updatedCount;
}

/**
 * Toggle like on a song
 */
export async function toggleSongLike(songId: string, userId: string = "guest_user"): Promise<{ isLiked: boolean; likesCount: number }> {
  const supabase = getSupabase();
  const likedIds = getLikedSongIds();
  const alreadyLiked = likedIds.includes(songId);

  let newLikedIds: string[];
  if (alreadyLiked) {
    newLikedIds = likedIds.filter((id) => id !== songId);
  } else {
    newLikedIds = [...likedIds, songId];
  }
  saveLikedSongIds(newLikedIds);

  let finalCount = 0;

  if (supabase) {
    try {
      const { data, error } = await supabase.rpc("toggle_song_like", {
        target_user_id: userId,
        target_song_id: songId,
      });
      if (!error && data) {
        return { isLiked: Boolean(data.liked), likesCount: Number(data.likes_count) || 0 };
      }
    } catch (e) {
      console.warn("Supabase like RPC failed, fallback to local:", e);
    }
  }

  // Local update
  const songs = getLocalSongs();
  const updatedSongs = songs.map((s) => {
    if (s.id === songId) {
      const diff = alreadyLiked ? -1 : 1;
      finalCount = Math.max(0, (s.likes_count || 0) + diff);
      return { ...s, likes_count: finalCount };
    }
    return s;
  });
  saveLocalSongs(updatedSongs);

  return { isLiked: !alreadyLiked, likesCount: finalCount };
}

/**
 * Publish a new song (Supports file upload to Supabase Storage or local base64/objectURL)
 */
export async function publishNewSong({
  title,
  artist,
  genre,
  audioFile,
  coverFile,
  coverPresetUrl,
  duration,
  description,
  user,
}: {
  title: string;
  artist: string;
  genre: string;
  audioFile: File | null;
  coverFile: File | null;
  coverPresetUrl?: string;
  duration?: number;
  description?: string;
  user?: UserProfile | null;
}): Promise<Song> {
  const supabase = getSupabase();
  const songId = "song-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7);

  let audioUrl = "/audio/fly-away-zion.mp3";
  let coverUrl = coverPresetUrl || "/covers/fly-away.svg";

  // Upload to Supabase Storage if available
  if (supabase && audioFile) {
    try {
      const audioFileName = `${Date.now()}_${audioFile.name.replace(/\s+/g, "_")}`;
      const { data: audioData, error: audioErr } = await supabase.storage
        .from("songs-audio")
        .upload(audioFileName, audioFile, { upsert: true });

      if (!audioErr && audioData) {
        const { data: publicUrlData } = supabase.storage
          .from("songs-audio")
          .getPublicUrl(audioFileName);
        audioUrl = publicUrlData.publicUrl;
      }
    } catch (e) {
      console.warn("Error uploading audio to Supabase storage:", e);
    }
  }

  if (supabase && coverFile) {
    try {
      const coverFileName = `${Date.now()}_${coverFile.name.replace(/\s+/g, "_")}`;
      const { data: coverData, error: coverErr } = await supabase.storage
        .from("songs-covers")
        .upload(coverFileName, coverFile, { upsert: true });

      if (!coverErr && coverData) {
        const { data: publicCoverUrl } = supabase.storage
          .from("songs-covers")
          .getPublicUrl(coverFileName);
        coverUrl = publicCoverUrl.publicUrl;
      }
    } catch (e) {
      console.warn("Error uploading cover to Supabase storage:", e);
    }
  }

  // If local / fallback and user uploaded audio or cover file
  if ((!supabase || !audioUrl.startsWith("http")) && audioFile) {
    audioUrl = URL.createObjectURL(audioFile);
  }
  if ((!supabase || !coverUrl.startsWith("http")) && coverFile) {
    coverUrl = URL.createObjectURL(coverFile);
  }

  const newSong: Song = {
    id: songId,
    title: title.trim(),
    artist: artist.trim() || "Underrated Artist",
    genre: genre.trim() || "Underrated",
    audio_url: audioUrl,
    cover_url: coverUrl,
    duration: duration && duration > 0 ? Math.round(duration) : 210,
    views_count: 1,
    likes_count: 1,
    created_at: new Date().toISOString(),
    is_liked: true,
    description: description || "Fresh release on Hello Music.",
    is_verified: false,
    user_id: user?.id,
  };

  // Try saving to Supabase DB
  if (supabase) {
    try {
      const { data, error } = await supabase.from("songs").insert([
        {
          id: songId,
          title: newSong.title,
          artist: newSong.artist,
          genre: newSong.genre,
          audio_url: newSong.audio_url,
          cover_url: newSong.cover_url,
          duration: newSong.duration,
          views_count: 1,
          likes_count: 1,
          description: newSong.description,
          user_id: user?.id || null,
        },
      ]).select().single();

      if (!error && data) {
        newSong.id = String(data.id);
      }
    } catch (e) {
      console.warn("Failed to insert song into Supabase DB:", e);
    }
  }

  // Also store in LocalStorage for instant access & offline durability
  const currentSongs = getLocalSongs();
  saveLocalSongs([newSong, ...currentSongs]);

  // Mark as liked by author
  const currentLiked = getLikedSongIds();
  saveLikedSongIds([...currentLiked, newSong.id]);

  return newSong;
}

// ---------------- AUTHENTICATION HELPERS ----------------
export function getSavedUser(): UserProfile | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveUser(user: UserProfile | null) {
  if (typeof window === "undefined") return;
  if (!user) {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  } else {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
  }
}

export async function loginDemoUser(username: string): Promise<UserProfile> {
  const user: UserProfile = {
    id: "user-" + Math.random().toString(36).substring(2, 9),
    username: username.trim() || "Audionaut",
    avatar_url: `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(username)}`,
  };
  saveUser(user);
  return user;
}
