"use client";

import React, { useState } from "react";
import { DUSQuestion } from "@/data/questionsData";
import { formatMathText } from "@/lib/formatMath";
import {
  HelpCircle,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  Volume2,
  Printer,
  Sparkles,
  Zap
} from "lucide-react";

interface QuestionTableViewProps {
  questions: DUSQuestion[];
  masteredIds: Set<number>;
  reviewIds: Set<number>;
  bookmarkedIds: Set<number>;
  onToggleMastered: (id: number) => void;
  onToggleReview: (id: number) => void;
  onToggleBookmark: (id: number) => void;
}

export default function QuestionTableView({
  questions,
  masteredIds,
  reviewIds,
  bookmarkedIds,
  onToggleMastered,
  onToggleReview,
  onToggleBookmark,
}: QuestionTableViewProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopy = (q: DUSQuestion) => {
    const text = `[DUS 80 Master] ${q.code} (${q.subject}):\n${formatMathText(
      q.question
    )}\n→ Cevap: ${formatMathText(q.answer)}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSpeak = (q: DUSQuestion) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const textToRead = `${q.code}. ${formatMathText(q.question)}. Cevap: ${formatMathText(q.answer)}`;
    const u = new SpeechSynthesisUtterance(textToRead);
    u.lang = "tr-TR";
    window.speechSynthesis.speak(u);
  };

  const handlePrint = () => {
    window.print();
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
        <Sparkles className="w-12 h-12 text-slate-600 mb-3" />
        <h3 className="text-lg font-semibold text-white">Soru Bulunamadı</h3>
        <p className="text-sm text-slate-400 mt-1">Lütfen filtreleri sıfırlayın.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-4">
      {/* Top Bar: List Count & Print Button */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl">
            Toplam {questions.length} Soru Listeleniyor
          </span>
          <span className="text-slate-500 hidden sm:inline">
            (Satıra tıklayarak soru detayını açabilir veya kapatabilirsiniz)
          </span>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Sayfayı Yazdır / PDF</span>
        </button>
      </div>

      {/* Accordion / Table Card List */}
      <div className="space-y-2.5">
        {questions.map((q) => {
          const isExpanded = expandedId === q.id;
          const isMastered = masteredIds.has(q.id);
          const isReview = reviewIds.has(q.id);
          const isBookmarked = bookmarkedIds.has(q.id);

          return (
            <div
              key={q.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? "bg-slate-900/90 border-slate-700 shadow-xl"
                  : "bg-slate-950/60 hover:bg-slate-900/60 border-slate-800/80"
              }`}
            >
              {/* Row Header (Click to expand) */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-3.5 sm:p-4 cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Mastered quick checkbox */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleMastered(q.id);
                    }}
                    title={isMastered ? "Öğrenildi olarak işaretlendi" : "Öğrenildi olarak işaretle"}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition flex-shrink-0 ${
                      isMastered
                        ? "bg-emerald-500 border-emerald-400 text-slate-950 font-bold"
                        : "bg-slate-900 border-slate-700 text-slate-500 hover:border-emerald-500"
                    }`}
                  >
                    {isMastered && <Check className="w-3.5 h-3.5" />}
                  </button>

                  {/* Question Code & Subject Tag */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {q.code}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 hidden md:inline">
                      {q.subject}
                    </span>
                  </div>

                  {/* Question snippet */}
                  <div className="truncate text-xs sm:text-sm font-medium text-slate-200">
                    {formatMathText(q.question)}
                  </div>
                </div>

                {/* Right Status Actions */}
                <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => onToggleReview(q.id)}
                    title="Tekrar Listesine Ekle"
                    className={`p-1.5 rounded-lg transition ${
                      isReview
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "text-slate-500 hover:text-amber-400"
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onToggleBookmark(q.id)}
                    title="Yıldızla"
                    className={`p-1.5 rounded-lg transition ${
                      isBookmarked
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-slate-500 hover:text-cyan-400"
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-cyan-400" : ""}`} />
                  </button>

                  <div className="text-slate-500 hover:text-white p-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm animate-in fade-in duration-200">
                  {/* Full Question Text */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Soru Metni
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                      {formatMathText(q.question)}
                    </p>
                  </div>

                  {/* Full Answer Box */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      Spot Cevap & Klinik Not:
                    </span>
                    <p className="text-sm sm:text-base text-emerald-300 font-medium leading-relaxed">
                      {formatMathText(q.answer)}
                    </p>
                  </div>

                  {/* Actions & Keywords */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-slate-500 text-[11px]">Anahtar Kelimeler:</span>
                      {q.keywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                          #{kw}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSpeak(q)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Sesli Oku</span>
                      </button>

                      <button
                        onClick={() => handleCopy(q)}
                        className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition"
                      >
                        {copiedId === q.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Kopyalandı</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Kopyala</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
