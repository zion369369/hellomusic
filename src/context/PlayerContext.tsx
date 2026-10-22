"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Song, UserProfile } from "@/types";
import {
  fetchAllSongs,
  incrementSongView,
  toggleSongLike,
  publishNewSong,
  getSavedUser,
  saveUser,
  loginDemoUser,
  isSupabaseConfigured,
} from "@/lib/supabase";
import { setSpatialMode } from "@/lib/spatialAudio";

interface PlayerContextType {
  // Current playback state
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isShuffle: boolean;
  repeatMode: "off" | "all" | "one";
  
  // Audio actions
  playSong: (song: Song, newQueue?: Song[]) => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  playNext: () => void;
  playPrev: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  toggleLike: (songId: string) => Promise<void>;

  // Library & Feed
  songs: Song[];
  filteredSongs: Song[];
  isLoadingSongs: boolean;
  refreshSongs: () => Promise<void>;
  publishSong: (data: {
    title: string;
    artist: string;
    genre: string;
    audioFile: File | null;
    coverFile: File | null;
    coverPresetUrl?: string;
    duration?: number;
    description?: string;
  }) => Promise<Song>;

  // Navigation & Filtering
  activeNav: string;
  setActiveNav: (nav: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;

  // Modals
  isPublishModalOpen: boolean;
  setIsPublishModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isSupabaseModalOpen: boolean;
  setIsSupabaseModalOpen: (open: boolean) => void;
  isFlightModalOpen: boolean;
  setIsFlightModalOpen: (open: boolean) => void;
  getAudioElement: () => HTMLAudioElement | null;

  // Music Beyond Imagination / Guided Meditation state
  imaginationPrompt: string;
  setImaginationPrompt: (prompt: string) => void;
  activeImaginationId: string;
  setActiveImaginationId: (id: string) => void;
  isBreathingGuideActive: boolean;
  setIsBreathingGuideActive: (active: boolean) => void;
  spatialSoundMode: "hrtf" | "binaural" | "stereo";
  setSpatialSoundMode: (mode: "hrtf" | "binaural" | "stereo") => void;

  // User Auth
  currentUser: UserProfile | null;
  setCurrentUser: (u: UserProfile | null) => void;
  loginUser: (username: string) => Promise<void>;
  logoutUser: () => void;
  supabaseConnected: boolean;
  setSupabaseConnected: (status: boolean) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [queue, setQueue] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const [isLoadingSongs, setIsLoadingSongs] = useState<boolean>(true);

  // App Navigation & Filters
  const [activeNav, setActiveNav] = useState<string>("home");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  // Modals
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);
  const [isFlightModalOpen, setIsFlightModalOpen] = useState<boolean>(false);

  // Music Beyond Imagination / Guided Meditation state
  const [imaginationPrompt, setImaginationPrompt] = useState<string>(
    "Imagine you are flying above the Earth... Take a breath, why so serious?"
  );
  const [activeImaginationId, setActiveImaginationId] = useState<string>("meditation");
  const [isBreathingGuideActive, setIsBreathingGuideActive] = useState<boolean>(true);
  const [spatialSoundMode, setSpatialSoundModeState] = useState<"hrtf" | "binaural" | "stereo">("hrtf");

  const setSpatialSoundMode = (mode: "hrtf" | "binaural" | "stereo") => {
    setSpatialSoundModeState(mode);
    setSpatialMode(mode);
  };

  // User profile
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [supabaseConnected, setSupabaseConnected] = useState<boolean>(false);

  // Audio HTML Element Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const viewCountedForCurrentSong = useRef<boolean>(false);

  // Refs for audio event handlers to avoid dependency cycle
  const currentSongRef = useRef<Song | null>(null);
  currentSongRef.current = currentSong;

  const repeatModeRef = useRef(repeatMode);
  repeatModeRef.current = repeatMode;

  const queueRef = useRef(queue);
  queueRef.current = queue;

  const isShuffleRef = useRef(isShuffle);
  isShuffleRef.current = isShuffle;

  // Load songs and session
  const refreshSongs = useCallback(async () => {
    setIsLoadingSongs(true);
    try {
      const list = await fetchAllSongs();
      setSongs(list);
      setQueue((prevQueue) => (prevQueue.length === 0 ? list : prevQueue));
    } catch (e) {
      console.error("Failed to load songs:", e);
    } finally {
      setIsLoadingSongs(false);
    }
  }, []);

  const playSong = useCallback((song: Song, newQueue?: Song[]) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (newQueue) {
      setQueue(newQueue);
    } else {
      setQueue((prev) => (!prev.some((s) => s.id === song.id) ? [song, ...prev] : prev));
    }

    if (currentSongRef.current?.id === song.id) {
      if (audio.paused) {
        audio.play().then(() => setIsPlaying(true)).catch(console.error);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
      return;
    }

    // New song selected
    setCurrentSong(song);
    viewCountedForCurrentSong.current = false;
    audio.src = song.audio_url;
    audio.currentTime = 0;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((e) => {
      console.warn("Playback prevented or audio format issue:", e);
      setIsPlaying(true);
    });
  }, []);

  const playNext = useCallback(() => {
    const curQueue = queueRef.current;
    if (!curQueue.length) return;
    const curSong = currentSongRef.current;
    if (!curSong) {
      playSong(curQueue[0]);
      return;
    }

    const currentIndex = curQueue.findIndex((s) => s.id === curSong.id);
    let nextIndex = 0;

    if (isShuffleRef.current) {
      nextIndex = Math.floor(Math.random() * curQueue.length);
    } else if (currentIndex < curQueue.length - 1) {
      nextIndex = currentIndex + 1;
    } else if (repeatModeRef.current === "all") {
      nextIndex = 0;
    } else {
      setIsPlaying(false);
      return;
    }

    playSong(curQueue[nextIndex]);
  }, [playSong]);

  const playPrev = useCallback(() => {
    const curQueue = queueRef.current;
    const curSong = currentSongRef.current;
    if (!curQueue.length || !curSong) return;

    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    const currentIndex = curQueue.findIndex((s) => s.id === curSong.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : curQueue.length - 1;
    playSong(curQueue[prevIndex]);
  }, [playSong]);

  useEffect(() => {
    // Check initial user & supabase status
    const savedUser = getSavedUser();
    if (savedUser) setCurrentUser(savedUser);
    setSupabaseConnected(isSupabaseConfigured());

    refreshSongs();

    // Create persistent Audio instance
    const audio = new Audio();
    audioRef.current = audio;
    audio.volume = 0.85;

    const handleTimeUpdate = () => {
      if (!audio) return;
      setCurrentTime(audio.currentTime);

      // Track view count after 3 seconds of listening
      const activeSong = currentSongRef.current;
      if (audio.currentTime >= 3 && !viewCountedForCurrentSong.current && activeSong) {
        viewCountedForCurrentSong.current = true;
        incrementSongView(activeSong.id).then((newViews) => {
          setSongs((prev) =>
            prev.map((s) => (s.id === activeSong.id ? { ...s, views_count: newViews } : s))
          );
          setCurrentSong((prev) => (prev ? { ...prev, views_count: newViews } : prev));
        });
      }
    };

    const handleLoadedMetadata = () => {
      if (!audio) return;
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (repeatModeRef.current === "one") {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      } else {
        playNext();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, [refreshSongs, playNext]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!currentSong) {
      if (songs.length > 0) {
        playSong(songs[0]);
      }
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  const setVolume = (vol: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(1, vol));
    audioRef.current.volume = clamped;
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
      audioRef.current.muted = false;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleShuffle = () => {
    setIsShuffle((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeatMode((prev) => {
      if (prev === "off") return "all";
      if (prev === "all") return "one";
      return "off";
    });
  };

  // Toggle Like with immediate optimistic update
  const toggleLike = async (songId: string) => {
    const targetSong = songs.find((s) => s.id === songId);
    if (!targetSong) return;

    const optimisticLiked = !targetSong.is_liked;
    const optimisticCount = Math.max(
      0,
      targetSong.likes_count + (optimisticLiked ? 1 : -1)
    );

    // Optimistically update
    setSongs((prev) =>
      prev.map((s) =>
        s.id === songId
          ? { ...s, is_liked: optimisticLiked, likes_count: optimisticCount }
          : s
      )
    );

    if (currentSong?.id === songId) {
      setCurrentSong((prev) =>
        prev
          ? { ...prev, is_liked: optimisticLiked, likes_count: optimisticCount }
          : prev
      );
    }

    // Sync in background
    try {
      const res = await toggleSongLike(songId, currentUser?.id || "guest_user");
      setSongs((prev) =>
        prev.map((s) =>
          s.id === songId
            ? { ...s, is_liked: res.isLiked, likes_count: res.likesCount }
            : s
        )
      );
      if (currentSong?.id === songId) {
        setCurrentSong((prev) =>
          prev
            ? { ...prev, is_liked: res.isLiked, likes_count: res.likesCount }
            : prev
        );
      }
    } catch (e) {
      console.error("Like sync failed:", e);
    }
  };

  // Publish Song Handler
  const publishSong = async (songData: {
    title: string;
    artist: string;
    genre: string;
    audioFile: File | null;
    coverFile: File | null;
    coverPresetUrl?: string;
    duration?: number;
    description?: string;
  }) => {
    const newSong = await publishNewSong({
      ...songData,
      user: currentUser,
    });

    setSongs((prev) => [newSong, ...prev]);
    setQueue((prev) => [newSong, ...prev]);

    // Immediately play the freshly published song
    playSong(newSong);

    return newSong;
  };

  // Auth
  const loginUser = async (username: string) => {
    const user = await loginDemoUser(username);
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const logoutUser = () => {
    saveUser(null);
    setCurrentUser(null);
  };

  // Filter songs based on search, navigation, and genre
  const filteredSongs = songs.filter((song) => {
    // 1. Navigation filter
    if (activeNav === "liked" && !song.is_liked) return false;
    if (activeNav === "underrated" && !song.genre?.toLowerCase().includes("underrated")) {
      if (!song.description?.toLowerCase().includes("underrated")) return false;
    }
    if (activeNav === "library" && currentUser && song.user_id !== currentUser.id && !song.is_liked) {
      return false;
    }

    // 2. Genre filter
    if (selectedGenre !== "All") {
      const g = selectedGenre.toLowerCase();
      const matchGenre = song.genre?.toLowerCase().includes(g);
      const matchTitle = song.title.toLowerCase().includes(g);
      const matchOriginal =
        g === "original" &&
        (song.id === "fly-away-zion" ||
          song.artist.toLowerCase() === "zion" ||
          song.genre?.toLowerCase().includes("original") ||
          song.description?.toLowerCase().includes("original"));
      const matchCosmos =
        (g.includes("escape") || g.includes("cosmos")) &&
        (song.id === "fly-away-zion" ||
          song.genre?.toLowerCase().includes("cosmos") ||
          song.genre?.toLowerCase().includes("escape"));

      if (!matchGenre && !matchTitle && !matchOriginal && !matchCosmos) {
        return false;
      }
    }

    // 3. Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = song.title.toLowerCase().includes(q);
      const matchArtist = song.artist.toLowerCase().includes(q);
      const matchGenre = song.genre?.toLowerCase().includes(q);
      return matchTitle || matchArtist || matchGenre;
    }

    return true;
  });

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isShuffle,
        repeatMode,
        playSong,
        togglePlay,
        seek,
        setVolume,
        toggleMute,
        playNext,
        playPrev,
        toggleShuffle,
        toggleRepeat,
        toggleLike,
        songs,
        filteredSongs,
        isLoadingSongs,
        refreshSongs,
        publishSong,
        activeNav,
        setActiveNav,
        searchQuery,
        setSearchQuery,
        selectedGenre,
        setSelectedGenre,
        isPublishModalOpen,
        setIsPublishModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isSupabaseModalOpen,
        setIsSupabaseModalOpen,
        isFlightModalOpen,
        setIsFlightModalOpen,
        getAudioElement: () => audioRef.current,
        imaginationPrompt,
        setImaginationPrompt,
        activeImaginationId,
        setActiveImaginationId,
        isBreathingGuideActive,
        setIsBreathingGuideActive,
        spatialSoundMode,
        setSpatialSoundMode,
        currentUser,
        setCurrentUser,
        loginUser,
        logoutUser,
        supabaseConnected,
        setSupabaseConnected,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
