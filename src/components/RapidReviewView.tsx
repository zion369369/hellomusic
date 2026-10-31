"use client";

import React, { useState, useEffect, useRef } from "react";
import { DUSQuestion } from "@/data/questionsData";
import { formatMathText } from "@/lib/formatMath";
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Flame,
  Zap
} from "lucide-react";

interface RapidReviewViewProps {
  questions: DUSQuestion[];
  onToggleMastered: (id: number) => void;
  onToggleReview: (id: number) => void;
}

export default function RapidReviewView({
  questions,
  onToggleMastered,
  onToggleReview,
}: RapidReviewViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(42); // 42 seconds pacer from S610
  const [isRunning, setIsRunning] = useState(true);
  const [streak, setStreak] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQ = questions[currentIndex];

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setCurrentIndex(0);
    }
    setIsAnswerRevealed(false);
    setTimeLeft(42);
  }, [currentIndex, questions.length]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Auto reveal answer when time runs out
            setIsAnswerRevealed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, currentIndex]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleMastered = () => {
    if (!currentQ) return;
    onToggleMastered(currentQ.id);
    setStreak((prev) => prev + 1);
    handleNext();
  };

  const handleReview = () => {
    if (!currentQ) return;
    onToggleReview(currentQ.id);
    setStreak(0);
    handleNext();
  };

  if (!currentQ || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
        <Timer className="w-12 h-12 text-slate-600 mb-3" />
        <h3 className="text-lg font-semibold text-white">Soru Bulunamadı</h3>
      </div>
    );
  }

  // 42s circular countdown calculation
  const circleCircumference = 2 * Math.PI * 24;
  const progressOffset = circleCircumference - (timeLeft / 42) * circleCircumference;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* S610 Protocol Banner */}
      <div className="w-full bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3 mb-5 flex items-center justify-between text-xs text-amber-300">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>
            <strong>S610 Turlama Pacerı:</strong> Soru başı hedef ~42 saniye. İlk turda hızlı karar verme refleksini geliştirir.
          </span>
        </div>
        <div className="flex items-center gap-1 font-semibold text-white ml-2 flex-shrink-0">
          <Flame className="w-4 h-4 text-orange-400" />
          <span>Seri: {streak}</span>
        </div>
      </div>

      {/* Timer & Controls Top Bar */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          {/* Animated Circular Timer */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                className="stroke-slate-800"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                className={`transition-all duration-1000 ${
                  timeLeft <= 10 ? "stroke-rose-500" : "stroke-amber-400"
                }`}
                strokeWidth="4"
                strokeDasharray={circleCircumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span
              className={`absolute text-sm font-bold font-mono ${
                timeLeft <= 10 ? "text-rose-400" : "text-white"
              }`}
            >
              {timeLeft}s
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Hızlı Turlama</span>
            <span className="text-sm font-bold text-white">
              Soru {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning((prev) => !prev)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
            title={isRunning ? "Duraklat" : "Devam Et"}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              setTimeLeft(42);
              setIsAnswerRevealed(false);
            }}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
            title="Süreyi Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {currentQ.code}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">
              {currentQ.subject}
            </span>
          </div>
          <span className="text-xs text-slate-500">
            {isAnswerRevealed ? "Cevap Açık" : "Cevabı Tahmin Et"}
          </span>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold leading-relaxed text-white">
            {formatMathText(currentQ.question)}
          </h2>

          {isAnswerRevealed ? (
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-base sm:text-lg font-medium leading-relaxed animate-in fade-in duration-200">
              <strong className="block text-xs uppercase tracking-wider text-emerald-400 mb-1">
                Spot Cevap:
              </strong>
              {formatMathText(currentQ.answer)}
            </div>
          ) : (
            <button
              onClick={() => setIsAnswerRevealed(true)}
              className="w-full py-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-sm font-semibold transition"
            >
              Cevabı Göster (veya sürenin bitmesini bekle)
            </button>
          )}
        </div>

        {/* Rapid Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleReview}
            className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-500/20 text-amber-400 border border-slate-800 hover:border-amber-500/30 font-semibold text-xs transition flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Zor / Hatırlayamadım</span>
          </button>

          <button
            onClick={handleMastered}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/20 transition flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Biliyorum (+%80 Skor)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
