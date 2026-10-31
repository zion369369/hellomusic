"use client";

import React, { useState, useEffect } from "react";
import { DUSQuestion } from "@/data/questionsData";
import { formatMathText } from "@/lib/formatMath";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Zap,
  Bookmark
} from "lucide-react";
import confetti from "canvas-confetti";

interface QuizViewProps {
  questions: DUSQuestion[];
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
  onQuestionMastered: (id: number) => void;
}

export default function QuizView({
  questions,
  bookmarkedIds,
  onToggleBookmark,
  onQuestionMastered,
}: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setCurrentIndex(Math.max(0, questions.length - 1));
    }
  }, [questions.length, currentIndex]);

  if (!currentQ || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
        <Sparkles className="w-12 h-12 text-slate-600 mb-3" />
        <h3 className="text-lg font-semibold text-white">Soru Bulunamadı</h3>
        <p className="text-sm text-slate-400 mt-1">Lütfen filtreleri genişletin.</p>
      </div>
    );
  }

  const userSelection = selectedAnswers[currentQ.id];
  const isAnswered = userSelection !== undefined;
  const isCorrect = isAnswered && userSelection === currentQ.correctIndex;

  const handleSelectOption = (optIndex: number) => {
    if (isAnswered) return;

    const newAnswers = { ...selectedAnswers, [currentQ.id]: optIndex };
    setSelectedAnswers(newAnswers);

    if (optIndex === currentQ.correctIndex) {
      setStats((prev) => ({ ...prev, correct: prev.correct + 1 }));
      onQuestionMastered(currentQ.id);
      // Small celebratory burst for correct answer
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 }
      });
    } else {
      setStats((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setStats({ correct: 0, incorrect: 0 });
    setCurrentIndex(0);
  };

  const totalAnswered = stats.correct + stats.incorrect;
  const netScore = Math.max(0, stats.correct - stats.incorrect * 0.25).toFixed(2);
  const successRate = totalAnswered > 0 ? Math.round((stats.correct / totalAnswered) * 100) : 0;
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Quiz Progress & Stats Header */}
      <div className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 mb-5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 font-medium">Soru İlerlemesi</span>
            <span className="text-sm font-bold text-white">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          <div className="h-7 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              {stats.correct} Doğru
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-semibold border border-rose-500/20">
              {stats.incorrect} Yanlış
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 font-mono">
              Net: {netScore}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-400">Başarı Oranı: </span>
            <span className={`text-sm font-bold ${successRate >= 80 ? "text-emerald-400 font-extrabold" : "text-amber-400"}`}>
              %{successRate} {successRate >= 80 ? "🎯" : ""}
            </span>
          </div>

          <button
            onClick={handleResetQuiz}
            title="Testi Baştan Başlat"
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="w-full glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Question Meta */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold">
              {currentQ.code}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium">
              {currentQ.subject}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline font-mono">
              ÖSYM Ağırlığı: {currentQ.osymWeight}
            </span>
          </div>

          <button
            onClick={() => onToggleBookmark(currentQ.id)}
            className="text-slate-400 hover:text-amber-400 transition"
          >
            <Bookmark className={`w-4 h-4 ${bookmarkedIds.has(currentQ.id) ? "fill-amber-400 text-amber-400" : ""}`} />
          </button>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Soru Metni</span>
          </span>
          <h2 className="text-lg sm:text-xl font-semibold leading-relaxed text-white">
            {formatMathText(currentQ.question)}
          </h2>
        </div>

        {/* 4 Options */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((option, optIdx) => {
            const isThisSelected = userSelection === optIdx;
            const isThisCorrect = optIdx === currentQ.correctIndex;

            let optionStyle =
              "bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 text-slate-200 hover:border-slate-700";

            if (isAnswered) {
              if (isThisCorrect) {
                optionStyle =
                  "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold shadow-md shadow-emerald-950/50";
              } else if (isThisSelected && !isThisCorrect) {
                optionStyle =
                  "bg-rose-950/40 border-rose-500 text-rose-300 font-semibold";
              } else {
                optionStyle = "bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60";
              }
            }

            return (
              <button
                key={optIdx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${optionStyle}`}
              >
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition ${
                    isAnswered && isThisCorrect
                      ? "bg-emerald-500 text-slate-950"
                      : isAnswered && isThisSelected && !isThisCorrect
                      ? "bg-rose-500 text-white"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}
                >
                  {optionLetters[optIdx]}
                </span>

                <span className="text-sm sm:text-base leading-relaxed pt-0.5">
                  {formatMathText(option)}
                </span>

                {isAnswered && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-auto flex-shrink-0" />
                )}
                {isAnswered && isThisSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 ml-auto flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Explanation Box (Revealed after selection) */}
        {isAnswered && (
          <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-300">
            <div
              className={`p-5 rounded-2xl border ${
                isCorrect
                  ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                  : "bg-slate-900/90 border-slate-700 text-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Tebrikler, Doğru Cevap!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-400">
                      Yanıt Yanlış. Doğru Seçenek: {optionLetters[currentQ.correctIndex]}
                    </span>
                  </>
                )}
              </div>

              <div className="text-sm sm:text-base leading-relaxed text-slate-300">
                <strong className="text-white block mb-1">ÖSYM Spot Çözümü:</strong>
                {formatMathText(currentQ.answer)}
              </div>
            </div>

            {/* Next Question CTA */}
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 transition disabled:opacity-40"
              >
                <span>Sonraki Soruya Geç</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
