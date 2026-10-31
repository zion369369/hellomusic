"use client";

import React from "react";
import { StudyMode } from "@/types";
import {
  GraduationCap,
  Trophy,
  Flame,
  RotateCcw,
  CheckCircle2,
  ListOrdered,
  Layers,
  Timer,
  FileSpreadsheet,
  Info
} from "lucide-react";
import confetti from "canvas-confetti";

interface HeaderProps {
  currentMode: StudyMode;
  onModeChange: (mode: StudyMode) => void;
  masteredCount: number;
  totalCount: number;
  reviewCount: number;
  bookmarkedCount: number;
  onResetProgress: () => void;
  onOpenInfo: () => void;
}

export default function Header({
  currentMode,
  onModeChange,
  masteredCount,
  totalCount,
  reviewCount,
  bookmarkedCount,
  onResetProgress,
  onOpenInfo,
}: HeaderProps) {
  const percentage = Math.round((masteredCount / totalCount) * 100);
  const isGoalReached = percentage >= 80;

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3">
        {/* Top Row: Brand & Progress Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  DUS <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">80 MASTER</span>
                </h1>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  %80 Ortak Havuz
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                610 Yüksek Verimli Spot Soru • 16 ÖSYM Branşı • TBT & KBT
              </p>
            </div>
          </div>

          {/* 80% Goal Progress Indicator */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-3 shadow-inner">
              <div className="flex flex-col text-right">
                <div className="flex items-center justify-end gap-1.5 text-xs text-slate-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white">{masteredCount}</span>
                  <span className="text-slate-500">/ {totalCount}</span>
                  <span className="font-bold text-emerald-400 ml-1">%{percentage}</span>
                </div>
                <div className="w-28 sm:w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isGoalReached
                        ? "bg-gradient-to-r from-emerald-400 to-green-400"
                        : "bg-gradient-to-r from-cyan-500 to-emerald-500"
                    }`}
                    style={{ width: `${Math.min(100, percentage)}%` }}
                  />
                </div>
              </div>

              {/* Benchmark target pill */}
              <div
                onClick={isGoalReached ? handleConfetti : undefined}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition ${
                  isGoalReached
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 pulse-glow-green"
                    : "bg-slate-800 text-slate-400 border border-slate-700/60"
                }`}
              >
                <Trophy className={`w-3.5 h-3.5 ${isGoalReached ? "text-amber-400" : "text-slate-400"}`} />
                <span>{isGoalReached ? "%80 Hedef Tamam! 🎉" : "Hedef: %80"}</span>
              </div>
            </div>

            {/* Strategy Guide & Reset Buttons */}
            <button
              onClick={onOpenInfo}
              title="DUS Turlama Taktiği & Bilgi"
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition"
            >
              <Info className="w-4 h-4" />
            </button>

            <button
              onClick={onResetProgress}
              title="İlerlemeyi Sıfırla"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 hover:bg-slate-800 border border-slate-800 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Row: 5 Modes Navigation Pills */}
        <div className="mt-3 flex items-center justify-between overflow-x-auto pb-1 scrollbar-none gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onModeChange("flashcard")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                currentMode === "flashcard"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Spot Kartları (Aktif Hatırlama)</span>
            </button>

            <button
              onClick={() => onModeChange("quiz")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                currentMode === "quiz"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4 Seçenekli Test</span>
            </button>

            <button
              onClick={() => onModeChange("rapid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                currentMode === "rapid"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <Timer className="w-3.5 h-3.5" />
              <span>Hızlı Turlama (42s Pacer)</span>
            </button>

            <button
              onClick={() => onModeChange("exam")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                currentMode === "exam"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>ÖSYM 120 Soru Deneme</span>
            </button>

            <button
              onClick={() => onModeChange("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                currentMode === "table"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 font-semibold"
                  : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>Tüm Liste & Arama</span>
            </button>
          </div>

          {/* Quick stats counter */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {masteredCount} Öğrenildi
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {reviewCount} Tekrar
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              {bookmarkedCount} Yıldızlı
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
