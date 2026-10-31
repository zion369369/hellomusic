"use client";

import React, { useState, useEffect, useMemo } from "react";
import { DUS_QUESTIONS, DUSQuestion } from "@/data/questionsData";
import { formatMathText } from "@/lib/formatMath";
import {
  FileCheck2,
  Clock,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  RotateCcw,
  Trophy,
  Award
} from "lucide-react";
import confetti from "canvas-confetti";

interface MockExamViewProps {
  onMasterQuestion: (id: number) => void;
}

export default function MockExamView({ onMasterQuestion }: MockExamViewProps) {
  // Generate the 120-question mock exam based on exact ÖSYM distribution
  const examQuestions = useMemo(() => {
    // Exact quotas
    const quotas = [
      { subjectId: "anatomi", count: 6 },
      { subjectId: "fizyoloji", count: 6 },
      { subjectId: "biyokimya", count: 6 },
      { subjectId: "mikrobiyoloji", count: 6 },
      { subjectId: "histoloji", count: 4 },
      { subjectId: "patoloji", count: 4 },
      { subjectId: "farmakoloji", count: 4 },
      { subjectId: "biyoloji", count: 4 },
      { subjectId: "protetik", count: 10 },
      { subjectId: "restoratif", count: 10 },
      { subjectId: "cerrahi", count: 10 },
      { subjectId: "radyoloji", count: 10 },
      { subjectId: "periodontoloji", count: 10 },
      { subjectId: "ortodonti", count: 10 },
      { subjectId: "endodonti", count: 10 },
      { subjectId: "pedodonti", count: 10 },
    ];

    const selected: DUSQuestion[] = [];
    quotas.forEach((q) => {
      const pool = DUS_QUESTIONS.filter((item) => item.subjectId === q.subjectId);
      // Select questions evenly spread across the pool
      const step = Math.max(1, Math.floor(pool.length / q.count));
      for (let i = 0; i < q.count && i * step < pool.length; i++) {
        selected.push(pool[i * step]);
      }
    });

    return selected.slice(0, 120);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({}); // questionId -> optionIndex (0..3)
  const [secondsLeft, setSecondsLeft] = useState(150 * 60); // 150 minutes
  const [isExamActive, setIsExamActive] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isExamActive || isSubmitted) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isSubmitted]);

  const currentQ = examQuestions[currentIndex];

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => {
      // Toggle if already selected
      if (prev[currentQ.id] === optIdx) {
        return { ...prev, [currentQ.id]: null };
      }
      return { ...prev, [currentQ.id]: optIdx };
    });
  };

  const handleClearAnswer = () => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: null }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsExamActive(false);
    setShowConfirmModal(false);

    // Score calculation
    let correct = 0;
    let incorrect = 0;
    examQuestions.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns !== undefined && userAns !== null) {
        if (userAns === q.correctIndex) {
          correct++;
          onMasterQuestion(q.id);
        } else {
          incorrect++;
        }
      }
    });

    const net = Math.max(0, correct - incorrect * 0.25);
    const percentage = Math.round((net / 120) * 100);

    if (percentage >= 80) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRestartExam = () => {
    setAnswers({});
    setSecondsLeft(150 * 60);
    setIsSubmitted(false);
    setIsExamActive(true);
    setCurrentIndex(0);
  };

  // Evaluation stats
  const results = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let empty = 0;

    examQuestions.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns === undefined || userAns === null) {
        empty++;
      } else if (userAns === q.correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const net = Math.max(0, correct - incorrect * 0.25);
    const percentage = Math.round((net / 120) * 100);
    const passed80 = percentage >= 80;

    return { correct, incorrect, empty, net: net.toFixed(2), percentage, passed80 };
  }, [examQuestions, answers]);

  const formatTimer = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.values(answers).filter((v) => v !== null && v !== undefined).length;
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
      {/* Exam Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              ÖSYM DUS Deneme Sınavı
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-normal">
                120 Soru • 150 Dk
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              40 Temel Bilimler (TBT) + 80 Klinik Bilimler (KBT) — %80 Hedef: 96+ Net
            </p>
          </div>
        </div>

        {/* Timer & Submit CTA */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-sm font-mono font-bold ${
              secondsLeft < 600
                ? "bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse"
                : "bg-slate-950 border-slate-800 text-cyan-400"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTimer(secondsLeft)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition"
            >
              Sınavı Bitir ({answeredCount}/120)
            </button>
          ) : (
            <button
              onClick={handleRestartExam}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Yeniden Çöz</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Banner (If Submitted) */}
      {isSubmitted && (
        <div
          className={`p-6 rounded-3xl border mb-6 shadow-2xl transition-all duration-300 ${
            results.passed80
              ? "bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/40 border-emerald-500/50"
              : "bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border-slate-700"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg ${
                  results.passed80
                    ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                    : "bg-amber-500 text-slate-950 shadow-amber-500/30"
                }`}
              >
                {results.passed80 ? <Trophy className="w-7 h-7" /> : <Award className="w-7 h-7" />}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {results.passed80 ? "TEBRİKLER! %80 HEDEFİNİ AŞTINIZ 🎉" : "Sınav Tamamlandı!"}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {results.passed80
                    ? "DUS'ta ilk tercih klinisyenlik derecesi seviyesindesiniz (%80+ Net başarısı)."
                    : "ÖSYM %80 eşiğine ulaşmak için spot kartlarla zayıf branşları tekrar edebilirsiniz."}
                </p>
              </div>
            </div>

            {/* Score Stats Grid */}
            <div className="flex items-center gap-3">
              <div className="text-center px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-xs text-slate-400">Doğru</span>
                <span className="text-base font-bold text-emerald-400">{results.correct}</span>
              </div>
              <div className="text-center px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-xs text-slate-400">Yanlış</span>
                <span className="text-base font-bold text-rose-400">{results.incorrect}</span>
              </div>
              <div className="text-center px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="block text-xs text-slate-400">Boş</span>
                <span className="text-base font-bold text-slate-400">{results.empty}</span>
              </div>
              <div className="text-center px-4 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
                <span className="block text-xs text-indigo-300">DUS Neti</span>
                <span className="text-lg font-black text-indigo-400">{results.net}</span>
              </div>
              <div className="text-center px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="block text-xs text-emerald-300">Başarı</span>
                <span className="text-lg font-black text-emerald-400">%{results.percentage}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid: Question View (Left) & Digital Optical Sheet (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Active Question View */}
        <div className="lg:col-span-8 space-y-4">
          {currentQ && (
            <div className="glass-panel border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Soru {currentIndex + 1}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">
                    {currentQ.sectionTitle}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-cyan-400">
                    {currentQ.subject}
                  </span>
                </div>

                <span className="text-xs text-slate-400 font-mono">
                  {currentQ.code}
                </span>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold leading-relaxed text-white">
                  {formatMathText(currentQ.question)}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = answers[currentQ.id] === optIdx;
                  const isCorrect = isSubmitted && optIdx === currentQ.correctIndex;
                  const isWrongSelected = isSubmitted && isSelected && !isCorrect;

                  let optClass =
                    "bg-slate-900/80 hover:bg-slate-800/80 border-slate-800 text-slate-200 hover:border-slate-700";

                  if (isSubmitted) {
                    if (isCorrect) {
                      optClass = "bg-emerald-950/40 border-emerald-500 text-emerald-300 font-semibold";
                    } else if (isWrongSelected) {
                      optClass = "bg-rose-950/40 border-rose-500 text-rose-300 font-semibold";
                    } else {
                      optClass = "bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60";
                    }
                  } else if (isSelected) {
                    optClass = "bg-indigo-950/40 border-indigo-500 text-indigo-300 font-semibold shadow-md";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition flex items-start gap-3.5 ${optClass}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition ${
                          isSubmitted && isCorrect
                            ? "bg-emerald-500 text-slate-950"
                            : isSubmitted && isWrongSelected
                            ? "bg-rose-500 text-white"
                            : isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {optionLetters[optIdx]}
                      </span>

                      <span className="text-sm leading-relaxed pt-0.5">
                        {formatMathText(opt)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Question Navigation & Clear Controls */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Önceki Soru</span>
                </button>

                {!isSubmitted && answers[currentQ.id] !== undefined && answers[currentQ.id] !== null && (
                  <button
                    onClick={handleClearAnswer}
                    className="text-xs text-rose-400 hover:text-rose-300 underline font-medium"
                  >
                    Cevabı Temizle
                  </button>
                )}

                <button
                  onClick={() => setCurrentIndex((prev) => Math.min(examQuestions.length - 1, prev + 1))}
                  disabled={currentIndex === examQuestions.length - 1}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-40 transition"
                >
                  <span>Sonraki Soru</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Solution Box (If Submitted) */}
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-sm space-y-1">
                  <strong className="block text-xs uppercase tracking-wider text-emerald-400">
                    ÖSYM Spot Doğru Çözüm:
                  </strong>
                  <p>{formatMathText(currentQ.answer)}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Digital Optical Sheet (120 Questions Grid) */}
        <div className="lg:col-span-4">
          <div className="glass-panel border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-2xl sticky top-24 max-h-[calc(100vh-120px)] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Dijital Optik Form
              </h4>
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                {answeredCount} / 120 İşaretlendi
              </span>
            </div>

            {/* Scrollable Questions Optical Grid */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1.5 scrollbar-thin">
              {examQuestions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const userAns = answers[q.id];

                return (
                  <div
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex items-center justify-between p-2 rounded-xl cursor-pointer border text-xs transition ${
                      isCurrent
                        ? "bg-slate-800 border-indigo-500/70"
                        : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-6 font-mono text-[11px] ${isCurrent ? "font-bold text-white" : "text-slate-400"}`}>
                        {idx + 1}.
                      </span>
                      <span className="text-[10px] text-slate-500 truncate max-w-[80px]">
                        {q.subject}
                      </span>
                    </div>

                    {/* 4 Optical Bubble Choices */}
                    <div className="flex items-center gap-1">
                      {optionLetters.map((optLetter, optIdx) => {
                        const isChosen = userAns === optIdx;
                        let bubbleClass = "bg-slate-900 text-slate-400 border-slate-700";

                        if (isSubmitted) {
                          if (optIdx === q.correctIndex) {
                            bubbleClass = "bg-emerald-500 text-slate-950 border-emerald-400 font-bold";
                          } else if (isChosen && optIdx !== q.correctIndex) {
                            bubbleClass = "bg-rose-500 text-white border-rose-400 font-bold";
                          }
                        } else if (isChosen) {
                          bubbleClass = "bg-indigo-600 text-white border-indigo-500 font-bold";
                        }

                        return (
                          <span
                            key={optIdx}
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border transition ${bubbleClass}`}
                          >
                            {optLetter}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white text-center">
              Deneme Sınavını Bitirmek İstiyor musunuz?
            </h3>

            <p className="text-xs text-slate-400 text-center leading-relaxed">
              120 sorudan <strong>{answeredCount}</strong> tanesini işaretlediniz. Boş bırakılan soru sayısı:{" "}
              <strong>{120 - answeredCount}</strong>. Sınavı tamamladığınızda anında DUS netiniz ve %80 başarı raporunuz oluşturulacaktır.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
              >
                Geri Dön
              </button>

              <button
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition"
              >
                Evet, Sınavı Bitir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
