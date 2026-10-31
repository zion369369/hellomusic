"use client";

import React, { useState, useEffect, useMemo } from "react";
import { DUS_QUESTIONS } from "@/data/questionsData";
import { StudyMode, QuestionStatus } from "@/types";
import Header from "@/components/Header";
import SubjectFilter from "@/components/SubjectFilter";
import FlashcardView from "@/components/FlashcardView";
import QuizView from "@/components/QuizView";
import RapidReviewView from "@/components/RapidReviewView";
import MockExamView from "@/components/MockExamView";
import QuestionTableView from "@/components/QuestionTableView";
import StrategyInfoModal from "@/components/StrategyInfoModal";
import confetti from "canvas-confetti";

const STORAGE_KEY_MASTERED = "dus80_mastered_ids";
const STORAGE_KEY_REVIEW = "dus80_review_ids";
const STORAGE_KEY_BOOKMARKS = "dus80_bookmarked_ids";
const STORAGE_KEY_MODE = "dus80_study_mode";

export default function DUSAppPage() {
  const [currentMode, setCurrentMode] = useState<StudyMode>("flashcard");
  const [selectedSection, setSelectedSection] = useState<"ALL" | "TBT" | "KBT">("ALL");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | "ALL">("ALL");
  const [statusFilter, setStatusFilter] = useState<QuestionStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // Persistent Progress Sets
  const [masteredIds, setMasteredIds] = useState<Set<number>>(new Set());
  const [reviewIds, setReviewIds] = useState<Set<number>>(new Set());
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedMastered = localStorage.getItem(STORAGE_KEY_MASTERED);
      if (savedMastered) setMasteredIds(new Set(JSON.parse(savedMastered)));

      const savedReview = localStorage.getItem(STORAGE_KEY_REVIEW);
      if (savedReview) setReviewIds(new Set(JSON.parse(savedReview)));

      const savedBookmarks = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      if (savedBookmarks) setBookmarkedIds(new Set(JSON.parse(savedBookmarks)));

      const savedMode = localStorage.getItem(STORAGE_KEY_MODE);
      if (savedMode && ["flashcard", "quiz", "rapid", "exam", "table"].includes(savedMode)) {
        setCurrentMode(savedMode as StudyMode);
      }
    } catch (e) {
      console.error("Failed to load local storage progress:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(Array.from(masteredIds)));
      localStorage.setItem(STORAGE_KEY_REVIEW, JSON.stringify(Array.from(reviewIds)));
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(Array.from(bookmarkedIds)));
      localStorage.setItem(STORAGE_KEY_MODE, currentMode);
    } catch (e) {
      console.error("Failed to save local storage progress:", e);
    }
  }, [masteredIds, reviewIds, bookmarkedIds, currentMode, isLoaded]);

  // Check 80% goal threshold
  const prevPercentageRef = React.useRef(0);
  useEffect(() => {
    const currentPercentage = Math.round((masteredIds.size / DUS_QUESTIONS.length) * 100);
    if (prevPercentageRef.current < 80 && currentPercentage >= 80) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 },
      });
    }
    prevPercentageRef.current = currentPercentage;
  }, [masteredIds.size]);

  // Toggle Handlers
  const handleToggleMastered = (id: number) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // If it was in review, remove from review
        setReviewIds((rPrev) => {
          const rNext = new Set(rPrev);
          rNext.delete(id);
          return rNext;
        });
      }
      return next;
    });
  };

  const handleToggleReview = (id: number) => {
    setReviewIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // If it was in mastered, remove
        setMasteredIds((mPrev) => {
          const mNext = new Set(mPrev);
          mNext.delete(id);
          return mNext;
        });
      }
      return next;
    });
  };

  const handleToggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleResetProgress = () => {
    setMasteredIds(new Set());
    setReviewIds(new Set());
    setBookmarkedIds(new Set());
    localStorage.removeItem(STORAGE_KEY_MASTERED);
    localStorage.removeItem(STORAGE_KEY_REVIEW);
    localStorage.removeItem(STORAGE_KEY_BOOKMARKS);
    setIsResetConfirmOpen(false);
  };

  // Filter Questions Logic
  const filteredQuestions = useMemo(() => {
    return DUS_QUESTIONS.filter((q) => {
      // 1. Section Filter
      if (selectedSection !== "ALL" && q.section !== selectedSection) {
        return false;
      }

      // 2. Subject Filter
      if (selectedSubjectId !== "ALL" && q.subjectId !== selectedSubjectId) {
        return false;
      }

      // 3. Status Filter
      if (statusFilter === "mastered" && !masteredIds.has(q.id)) {
        return false;
      }
      if (statusFilter === "review" && !reviewIds.has(q.id)) {
        return false;
      }
      if (statusFilter === "bookmarked" && !bookmarkedIds.has(q.id)) {
        return false;
      }

      // 4. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inQuestion = q.question.toLowerCase().includes(query);
        const inAnswer = q.answer.toLowerCase().includes(query);
        const inCode = q.code.toLowerCase().includes(query);
        const inSubject = q.subject.toLowerCase().includes(query);
        const inKeywords = q.keywords.some((kw) => kw.toLowerCase().includes(query));

        if (!inQuestion && !inAnswer && !inCode && !inSubject && !inKeywords) {
          return false;
        }
      }

      return true;
    });
  }, [selectedSection, selectedSubjectId, statusFilter, searchQuery, masteredIds, reviewIds, bookmarkedIds]);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#f1f5f9] flex flex-col font-sans">
      {/* 1. TOP HEADER & 80% BENCHMARK GOAL BAR */}
      <Header
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        masteredCount={masteredIds.size}
        totalCount={DUS_QUESTIONS.length}
        reviewCount={reviewIds.size}
        bookmarkedCount={bookmarkedIds.size}
        onResetProgress={() => setIsResetConfirmOpen(true)}
        onOpenInfo={() => setIsInfoOpen(true)}
      />

      {/* 2. FILTER & BRANCH SELECTION BAR (Hidden in 120-Mock Exam mode as exam has its own distribution) */}
      {currentMode !== "exam" && (
        <SubjectFilter
          selectedSection={selectedSection}
          onSelectSection={setSelectedSection}
          selectedSubjectId={selectedSubjectId}
          onSelectSubjectId={setSelectedSubjectId}
          statusFilter={statusFilter}
          onSelectStatusFilter={setStatusFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredCount={filteredQuestions.length}
          totalMastered={masteredIds.size}
          totalReview={reviewIds.size}
          totalBookmarked={bookmarkedIds.size}
        />
      )}

      {/* 3. ACTIVE MODE VIEW */}
      <main className="flex-1 w-full pb-16">
        {currentMode === "flashcard" && (
          <FlashcardView
            questions={filteredQuestions}
            masteredIds={masteredIds}
            reviewIds={reviewIds}
            bookmarkedIds={bookmarkedIds}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentMode === "quiz" && (
          <QuizView
            questions={filteredQuestions}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onQuestionMastered={(id) => {
              setMasteredIds((prev) => new Set(prev).add(id));
            }}
          />
        )}

        {currentMode === "rapid" && (
          <RapidReviewView
            questions={filteredQuestions}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
          />
        )}

        {currentMode === "exam" && (
          <MockExamView
            onMasterQuestion={(id) => {
              setMasteredIds((prev) => new Set(prev).add(id));
            }}
          />
        )}

        {currentMode === "table" && (
          <QuestionTableView
            questions={filteredQuestions}
            masteredIds={masteredIds}
            reviewIds={reviewIds}
            bookmarkedIds={bookmarkedIds}
            onToggleMastered={handleToggleMastered}
            onToggleReview={handleToggleReview}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* 4. FOOTER */}
      <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>DUS 80 MASTER • %80 Ortak Soru Kampı & Deneme Simülatörü</span>
          <span className="text-slate-400">
            Hedef: 96+ Net / %80 Başarı ile Klinik Uzmanlık Derecesi
          </span>
        </div>
      </footer>

      {/* 5. STRATEGY INFO MODAL */}
      <StrategyInfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* 6. RESET CONFIRMATION MODAL */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white text-center">
              Çalışma İlerlemesini Sıfırla
            </h3>
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              Tüm öğrenildi, tekrar ve yıldızlı işaretleriniz sıfırlanacaktır. Bu işlem geri alınamaz.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
              >
                İptal
              </button>
              <button
                onClick={handleResetProgress}
                className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md shadow-rose-600/30 transition"
              >
                Evet, Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
