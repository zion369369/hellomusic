export interface Song {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  audio_url: string;
  cover_url: string;
  duration: number; // in seconds
  views_count: number;
  likes_count: number;
  created_at: string;
  is_liked?: boolean;
  user_id?: string;
  description?: string;
  is_verified?: boolean;
}

export interface UserProfile {
  id: string;
  email?: string;
  username: string;
  avatar_url?: string;
}
