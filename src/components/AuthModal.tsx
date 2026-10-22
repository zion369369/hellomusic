"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { X, ArrowRight, Disc3 } from "lucide-react";

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginUser } = usePlayer();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    try {
      await loginUser(username.trim());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute right-5 top-5 text-zinc-500 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6 space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mx-auto shadow-xl shadow-white/10">
            <Disc3 className="w-6 h-6 animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Join Hello Music
          </h2>
          <p className="text-xs text-zinc-400">
            A different world of music. Publish tracks, track plays, and like songs.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Creator / Artist Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. ZION, Alex, Soundwave"
              className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Email (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="artist@hellomusic.io"
              className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-2xl bg-white text-black font-extrabold text-sm tracking-wide hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-white/10"
          >
            <span>Enter Hello Music</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
