"use client";

import React from "react";
import { DUS_SUBJECTS } from "@/data/questionsData";
import { QuestionStatus } from "@/types";
import {
  Search,
  CheckCircle,
  HelpCircle,
  Bookmark,
  Layers,
  X
} from "lucide-react";

interface SubjectFilterProps {
  selectedSection: "ALL" | "TBT" | "KBT";
  onSelectSection: (section: "ALL" | "TBT" | "KBT") => void;
  selectedSubjectId: string | "ALL";
  onSelectSubjectId: (subjectId: string | "ALL") => void;
  statusFilter: QuestionStatus;
  onSelectStatusFilter: (status: QuestionStatus) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  filteredCount: number;
  totalMastered: number;
  totalReview: number;
  totalBookmarked: number;
}

export default function SubjectFilter({
  selectedSection,
  onSelectSection,
  selectedSubjectId,
  onSelectSubjectId,
  statusFilter,
  onSelectStatusFilter,
  searchQuery,
  onSearchChange,
  filteredCount,
  totalMastered,
  totalReview,
  totalBookmarked,
}: SubjectFilterProps) {
  // Filter subjects based on selectedSection
  const visibleSubjects = DUS_SUBJECTS.filter((s) => {
    if (selectedSection === "ALL") return true;
    return s.section === selectedSection;
  });

  return (
    <div className="w-full bg-slate-900/60 border-b border-slate-800/80 p-3 sm:p-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Row 1: Search & Section & Status Pills */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Soru, terim veya cevap ara... (örn: ameloblastoma, pterion, lidokain)"
              className="w-full pl-9 pr-8 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Section Selector: ALL / TBT (210) / KBT (400) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 border border-slate-800/80 rounded-xl self-start md:self-auto">
            <button
              onClick={() => {
                onSelectSection("ALL");
                onSelectSubjectId("ALL");
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedSection === "ALL"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tüm Sorular (610)
            </button>
            <button
              onClick={() => {
                onSelectSection("TBT");
                if (selectedSubjectId !== "ALL") {
                  const s = DUS_SUBJECTS.find((sub) => sub.id === selectedSubjectId);
                  if (s && s.section !== "TBT") onSelectSubjectId("ALL");
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedSection === "TBT"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              TBT (210 Soru)
            </button>
            <button
              onClick={() => {
                onSelectSection("KBT");
                if (selectedSubjectId !== "ALL") {
                  const s = DUS_SUBJECTS.find((sub) => sub.id === selectedSubjectId);
                  if (s && s.section !== "KBT") onSelectSubjectId("ALL");
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedSection === "KBT"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              KBT (400 Soru)
            </button>
          </div>

          {/* Status Filters: All / Mastered / Review / Bookmarked */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => onSelectStatusFilter("all")}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                statusFilter === "all"
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tümü ({filteredCount})
            </button>
            <button
              onClick={() => onSelectStatusFilter("mastered")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                statusFilter === "mastered"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "text-slate-400 hover:text-emerald-400"
              }`}
            >
              <CheckCircle className="w-3 h-3" />
              <span>Öğrenildi ({totalMastered})</span>
            </button>
            <button
              onClick={() => onSelectStatusFilter("review")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                statusFilter === "review"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : "text-slate-400 hover:text-amber-400"
              }`}
            >
              <HelpCircle className="w-3 h-3" />
              <span>Zor / Tekrar ({totalReview})</span>
            </button>
            <button
              onClick={() => onSelectStatusFilter("bookmarked")}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                statusFilter === "bookmarked"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-400 hover:text-cyan-400"
              }`}
            >
              <Bookmark className="w-3 h-3" />
              <span>Yıldızlı ({totalBookmarked})</span>
            </button>
          </div>
        </div>

        {/* Row 2: 16 Subject Branch Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onSelectSubjectId("ALL")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              selectedSubjectId === "ALL"
                ? "bg-white text-slate-900 shadow"
                : "bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tüm Branşlar</span>
          </button>

          {visibleSubjects.map((subject) => {
            const isSelected = selectedSubjectId === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => onSelectSubjectId(subject.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 border ${
                  isSelected
                    ? "bg-slate-800 text-white border-cyan-500/60 shadow-sm"
                    : "bg-slate-950/60 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <span className="font-bold text-cyan-400">{subject.branchNum}.</span>
                <span>{subject.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-300">
                  {subject.count} Soru
                </span>
                <span className="text-[9px] px-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  {subject.weight}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
