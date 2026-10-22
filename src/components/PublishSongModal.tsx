"use client";

import React, { useState, useRef } from "react";
import { usePlayer } from "@/context/PlayerContext";
import confetti from "canvas-confetti";
import {
  X,
  Upload,
  Music,
  Image as ImageIcon,
  Check,
  Disc3,
  PlusCircle,
  Play,
  Pause,
  AlertCircle,
} from "lucide-react";

export default function PublishSongModal() {
  const { isPublishModalOpen, setIsPublishModalOpen, publishSong, currentUser } = usePlayer();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState(currentUser?.username || "");
  const [genre, setGenre] = useState("Underrated Remix");
  const [description, setDescription] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [selectedPresetCover, setSelectedPresetCover] = useState<string>("/covers/preset-1.svg");
  const [coverMode, setCoverMode] = useState<"preset" | "custom">("preset");

  // Audio preview state
  const [previewDuration, setPreviewDuration] = useState<number>(0);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState<boolean>(false);
  const previewAudioRef = useRef<HTMLAudioElement | null>(null);

  // Loading & error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const presetCovers = [
    { id: "preset-1", url: "/covers/preset-1.svg", label: "Obsidian Wave" },
    { id: "preset-2", url: "/covers/preset-2.svg", label: "Midnight Vinyl" },
    { id: "preset-3", url: "/covers/preset-3.svg", label: "Solar Eclipse" },
    { id: "preset-4", url: "/covers/fly-away.svg", label: "Anthem Minimal" },
  ];

  if (!isPublishModalOpen) return null;

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAudioFile(file);
      setErrorMsg("");

      // Calculate audio duration
      const audioUrl = URL.createObjectURL(file);
      const tempAudio = new Audio(audioUrl);
      tempAudio.addEventListener("loadedmetadata", () => {
        setPreviewDuration(tempAudio.duration || 180);
      });
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
      setCoverMode("custom");
    }
  };

  const togglePreview = () => {
    if (!audioFile) return;
    if (!previewAudioRef.current) {
      const url = URL.createObjectURL(audioFile);
      const audio = new Audio(url);
      previewAudioRef.current = audio;
      audio.onended = () => setIsPreviewPlaying(false);
    }

    if (isPreviewPlaying) {
      previewAudioRef.current.pause();
      setIsPreviewPlaying(false);
    } else {
      previewAudioRef.current.play();
      setIsPreviewPlaying(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg("Please enter a track title.");
      return;
    }
    if (!artist.trim()) {
      setErrorMsg("Please enter artist name.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      if (previewAudioRef.current) {
        previewAudioRef.current.pause();
      }

      await publishSong({
        title: title.trim(),
        artist: artist.trim(),
        genre: genre.trim(),
        description: description.trim(),
        audioFile: audioFile,
        coverFile: coverMode === "custom" ? coverFile : null,
        coverPresetUrl: coverMode === "preset" ? selectedPresetCover : undefined,
        duration: previewDuration || 210,
      });

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#a1a1aa", "#71717a"],
        });
      } catch {
        // ignore if canvas not available
      }

      // Close modal and reset
      setIsPublishModalOpen(false);
      setTitle("");
      setAudioFile(null);
      setCoverFile(null);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to publish track. Please check inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl max-h-[88dvh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            if (previewAudioRef.current) previewAudioRef.current.pause();
            setIsPublishModalOpen(false);
          }}
          className="absolute right-4 top-4 text-zinc-500 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <PlusCircle className="w-3.5 h-3.5 text-white" />
            <span>Hello Music Creator Studio</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Publish Your Track
          </h2>
          <p className="text-xs text-zinc-400">
            Share your sound with the world. Underrated songs get priority spotlight.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center gap-2.5 text-red-200 text-xs">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title & Artist Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Track Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Fly away"
                className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                Artist Name *
              </label>
              <input
                type="text"
                required
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="e.g. ZION"
                className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition"
              />
            </div>
          </div>

          {/* Genre & Tag */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Genre & Vibe
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {["Underrated Remix", "Lo-Fi Beats", "Indie Ambient", "Dark Wave", "Acoustic"].map(
                (g) => (
                  <button
                    type="button"
                    key={g}
                    onClick={() => setGenre(g)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg border transition ${
                      genre === g
                        ? "bg-white text-black font-bold border-white"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                )
              )}
            </div>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="Or type custom genre..."
              className="w-full bg-zinc-900 text-white text-xs px-4 py-2 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Audio File Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Audio File (.mp3, .wav, .aac, .m4a)
            </label>
            <div className="relative border-2 border-dashed border-zinc-800 hover:border-zinc-600 rounded-2xl p-4 text-center bg-zinc-900/40 transition">
              <input
                type="file"
                accept="audio/*,.mp3,.wav,.aac,.m4a,.ogg"
                onChange={handleAudioChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-1.5">
                <Music className="w-6 h-6 text-zinc-400" />
                {audioFile ? (
                  <div className="text-xs">
                    <span className="font-bold text-white">{audioFile.name}</span>
                    <span className="text-zinc-500 ml-2 font-mono">
                      ({(audioFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </span>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-zinc-200">
                      Drop audio file here, or browse
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Supports MP3, AAC, WAV up to 50MB
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Quick Preview Player if file selected */}
            {audioFile && (
              <div className="mt-2 flex items-center justify-between p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePreview}
                    className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center"
                  >
                    {isPreviewPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-black" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                    )}
                  </button>
                  <span className="text-xs text-zinc-300">Preview audio</span>
                </div>
                {previewDuration > 0 && (
                  <span className="text-xs font-mono text-zinc-500">
                    {Math.floor(previewDuration / 60)}:
                    {Math.floor(previewDuration % 60) < 10 ? "0" : ""}
                    {Math.floor(previewDuration % 60)}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Cover Art Section */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Cover Artwork
              </label>
              <div className="flex items-center gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => setCoverMode("preset")}
                  className={`font-semibold transition ${
                    coverMode === "preset" ? "text-white underline" : "text-zinc-500"
                  }`}
                >
                  Monochrome Presets
                </button>
                <span className="text-zinc-600">|</span>
                <button
                  type="button"
                  onClick={() => setCoverMode("custom")}
                  className={`font-semibold transition ${
                    coverMode === "custom" ? "text-white underline" : "text-zinc-500"
                  }`}
                >
                  Custom File
                </button>
              </div>
            </div>

            {coverMode === "preset" ? (
              <div className="grid grid-cols-4 gap-2">
                {presetCovers.map((preset) => (
                  <button
                    type="button"
                    key={preset.id}
                    onClick={() => setSelectedPresetCover(preset.url)}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition ${
                      selectedPresetCover === preset.url
                        ? "border-white ring-2 ring-white/20"
                        : "border-zinc-800 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={preset.url}
                      alt={preset.label}
                      className="w-full h-full object-cover"
                    />
                    {selectedPresetCover === preset.url && (
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="relative border-2 border-dashed border-zinc-800 rounded-2xl p-4 text-center bg-zinc-900/40">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <ImageIcon className="w-6 h-6 text-zinc-400" />
                  {coverFile ? (
                    <span className="text-xs font-bold text-white">{coverFile.name}</span>
                  ) : (
                    <p className="text-xs font-semibold text-zinc-200">
                      Upload custom cover image (.png, .jpg, .webp)
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Description / Story */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Track Story
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Why is this track special? Tell listeners what to look for..."
              className="w-full bg-zinc-900 text-white text-xs px-4 py-2 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-white text-black font-extrabold text-sm tracking-wide hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Disc3 className="w-4 h-4 animate-spin text-black" />
                  <span>Publishing Track to Hello Music...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Publish Track to Hello Music</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
