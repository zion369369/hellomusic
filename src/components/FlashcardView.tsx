"use client";

import React, { useState, useEffect, useCallback } from "react";
import { DUSQuestion } from "@/data/questionsData";
import { formatMathText } from "@/lib/formatMath";
import {
  RotateCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Bookmark,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Share2,
  Check
} from "lucide-react";

interface FlashcardViewProps {
  questions: DUSQuestion[];
  masteredIds: Set<number>;
  reviewIds: Set<number>;
  bookmarkedIds: Set<number>;
  onToggleMastered: (id: number) => void;
  onToggleReview: (id: number) => void;
  onToggleBookmark: (id: number) => void;
}

export default function FlashcardView({
  questions,
  masteredIds,
  reviewIds,
  bookmarkedIds,
  onToggleMastered,
  onToggleReview,
  onToggleBookmark,
}: FlashcardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);

  // Clamp index if questions array changes
  useEffect(() => {
    if (currentIndex >= questions.length) {
      setCurrentIndex(Math.max(0, questions.length - 1));
    }
    setIsFlipped(false);
  }, [questions.length, currentIndex]);

  const currentQ = questions[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, questions.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if ((e.target as HTMLElement).tagName === "INPUT") return;

      if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "1" && currentQ) {
        onToggleMastered(currentQ.id);
      } else if (e.key === "2" && currentQ) {
        onToggleReview(currentQ.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, currentQ, onToggleMastered, onToggleReview]);

  // Speech synthesis
  const handleSpeak = () => {
    if (!currentQ || typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = isFlipped
      ? `${currentQ.code}. Cevap: ${formatMathText(currentQ.answer)}`
      : `${currentQ.code}. ${formatMathText(currentQ.question)}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = "tr-TR";
    utterance.rate = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    if (!currentQ) return;
    const shareText = `[DUS 80 Master] ${currentQ.code} (${currentQ.subject}):\n${formatMathText(
      currentQ.question
    )}\n→ Cevap: ${formatMathText(currentQ.answer)}`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!currentQ || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
        <Sparkles className="w-12 h-12 text-slate-600 mb-3" />
        <h3 className="text-lg font-semibold text-white">Seçili Kriterde Soru Bulunamadı</h3>
        <p className="text-sm text-slate-400 mt-1 max-w-sm">
          Filtreleri veya arama kelimesini değiştirerek diğer soruları görüntüleyebilirsiniz.
        </p>
      </div>
    );
  }

  const isMastered = masteredIds.has(currentQ.id);
  const isReview = reviewIds.has(currentQ.id);
  const isBookmarked = bookmarkedIds.has(currentQ.id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Top Bar: Question Index & Jump */}
      <div className="w-full flex items-center justify-between mb-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white bg-slate-800 px-2 py-0.5 rounded-md">
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline font-mono text-cyan-400">{currentQ.code}</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline font-medium text-slate-300">{currentQ.subject}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center gap-1"
            title="Soruyu Kopyala"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{copied ? "Kopyalandı" : "Kopyala"}</span>
          </button>

          <button
            onClick={handleSpeak}
            className={`p-1.5 rounded-lg transition flex items-center gap-1 ${
              isSpeaking
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                : "bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
            }`}
            title="Sesli Oku"
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{isSpeaking ? "Durdur" : "Sesli"}</span>
          </button>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className={`p-1.5 rounded-lg transition ${
              isBookmarked
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
            }`}
            title="Yıldızla"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-amber-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Card (Interactive 3D Flip) */}
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="w-full min-h-[340px] sm:min-h-[380px] cursor-pointer relative group rounded-3xl p-1 bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-slate-900/60 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10"
      >
        <div
          className={`w-full min-h-[332px] sm:min-h-[372px] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
            isFlipped
              ? "bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-950/40 border-emerald-500/40 shadow-inner"
              : "bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/90 border-slate-700/60"
          }`}
        >
          {/* Card Header: Badges */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {currentQ.code}
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                {currentQ.subject}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline">
                ÖSYM: {currentQ.osymWeight}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <RotateCw className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-[11px] text-slate-500">
                {isFlipped ? "Soruyu Gör" : "Cevabı Gör (Boşluk)"}
              </span>
            </div>
          </div>

          {/* Card Body: Question or Answer */}
          <div className="my-auto py-6">
            {!isFlipped ? (
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>DUS Spot Soru</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-semibold leading-relaxed text-white">
                  {formatMathText(currentQ.question)}
                </h2>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Doğru Cevap & Açıklama</span>
                </div>
                <div className="text-lg sm:text-2xl font-medium leading-relaxed text-emerald-300 bg-emerald-950/20 border border-emerald-500/20 p-4 sm:p-5 rounded-2xl">
                  {formatMathText(currentQ.answer)}
                </div>
              </div>
            )}
          </div>

          {/* Card Footer: Keywords & Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-3 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              {currentQ.keywords.slice(0, 3).map((kw, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 text-[11px]"
                >
                  #{kw}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {isMastered && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                  <CheckCircle className="w-3 h-3" /> %80 Havuzunda
                </span>
              )}
              {isReview && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-medium">
                  <HelpCircle className="w-3 h-3" /> Tekrar Listesinde
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: Mastery & Navigation */}
      <div className="w-full mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 order-2 sm:order-1">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <span>Sonraki</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Learning Status Actions */}
        <div className="flex items-center gap-2.5 order-1 sm:order-2 w-full sm:w-auto">
          <button
            onClick={() => onToggleReview(currentQ.id)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition border ${
              isReview
                ? "bg-amber-500 text-slate-950 border-amber-400 font-bold"
                : "bg-slate-900/90 text-amber-400 hover:bg-amber-500/10 border-slate-800 hover:border-amber-500/30"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{isReview ? "Zor (İşaretlendi)" : "Tekrar Et (Kısayol: 2)"}</span>
          </button>

          <button
            onClick={() => {
              onToggleMastered(currentQ.id);
              // auto advance if learned
              if (!isMastered && currentIndex < questions.length - 1) {
                setTimeout(handleNext, 200);
              }
            }}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold transition border shadow-lg ${
              isMastered
                ? "bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-emerald-500/20"
                : "bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-500 shadow-emerald-600/30"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isMastered ? "Öğrenildi ✓" : "Öğrendim (%80 Havuzuna Ekle) (Kısayol: 1)"}</span>
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="mt-4 text-[11px] text-slate-500 hidden sm:flex items-center gap-4">
        <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">Boşluk</kbd> Çevir</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">← / →</kbd> Gezin</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">1</kbd> Öğrendim</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[10px]">2</kbd> Tekrar Et</span>
      </div>
    </div>
  );
}
