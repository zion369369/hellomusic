"use client";

import React, { useState } from "react";
import { usePlayer } from "@/context/PlayerContext";
import {
  saveSupabaseCredentials,
  getSupabaseCredentials,
  isSupabaseConfigured,
} from "@/lib/supabase";
import { X, Database, Copy, Check } from "lucide-react";

export default function SupabaseSetupModal() {
  const {
    isSupabaseModalOpen,
    setIsSupabaseModalOpen,
    setSupabaseConnected,
    refreshSongs,
  } = usePlayer();

  const creds = getSupabaseCredentials();
  const [url, setUrl] = useState(creds.url || "");
  const [anonKey, setAnonKey] = useState(creds.anonKey || "");
  const [copiedSql, setCopiedSql] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  if (!isSupabaseModalOpen) return null;

  const handleSave = () => {
    saveSupabaseCredentials(url.trim(), anonKey.trim());
    const configured = isSupabaseConfigured();
    setSupabaseConnected(configured);
    setStatusMsg(configured ? "Supabase configuration updated!" : "Credentials saved.");
    refreshSongs();
    setTimeout(() => {
      setIsSupabaseModalOpen(false);
    }, 1200);
  };

  const copySqlSnippet = () => {
    const sql = `-- HELLO MUSIC DATABASE SCHEMA
-- Run in Supabase SQL Editor:
create table if not exists public.songs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  artist text not null,
  genre text default 'Underrated',
  audio_url text not null,
  cover_url text not null,
  duration integer default 0,
  views_count integer default 0,
  likes_count integer default 0,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create or replace function public.increment_song_views(target_song_id text)
returns integer language plpgsql security definer as $$
declare cnt integer;
begin
  update public.songs set views_count = coalesce(views_count, 0) + 1 where id::text = target_song_id returning views_count into cnt;
  return coalesce(cnt, 0);
end;
$$;`;
    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-2xl my-auto">
        <button
          onClick={() => setIsSupabaseModalOpen(false)}
          className="absolute right-5 top-5 text-zinc-500 hover:text-white p-2 rounded-full hover:bg-zinc-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <Database className="w-3.5 h-3.5 text-white" />
            <span>Full Stack Integration</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Connect Supabase
          </h2>
          <p className="text-xs text-zinc-400">
            Hello Music works in high-performance local demo mode automatically. Link your Supabase project for multi-user cloud syncing.
          </p>
        </div>

        {statusMsg && (
          <div className="mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{statusMsg}</span>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Project URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-project.supabase.co"
              className="w-full bg-zinc-900 text-white text-xs px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Anon Public API Key
            </label>
            <input
              type="password"
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
              className="w-full bg-zinc-900 text-white text-xs px-4 py-2.5 rounded-xl border border-zinc-800 focus:outline-none focus:border-white transition font-mono"
            />
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-200">
                Database Schema (`schema.sql`)
              </span>
              <button
                type="button"
                onClick={copySqlSnippet}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800"
              >
                {copiedSql ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy SQL</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 leading-normal">
              Copy and execute in your Supabase SQL Editor. Creates songs, likes, views counter functions, and storage buckets.
            </p>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 py-3 px-5 rounded-xl bg-white text-black font-extrabold text-xs tracking-wide hover:bg-zinc-200 transition-all shadow-md shadow-white/5"
            >
              Save Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
