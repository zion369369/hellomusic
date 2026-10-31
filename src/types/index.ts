export interface DUSQuestion {
  id: number;
  code: string;
  section: "TBT" | "KBT";
  sectionTitle: string;
  subjectId: string;
  subject: string;
  branchNumber: number;
  osymWeight: string;
  osymPercent: string;
  question: string;
  answer: string;
  coreAnswer: string;
  keywords: string[];
  options: string[];
  correctIndex: number;
}

export interface DUSSubject {
  id: string;
  name: string;
  start: number;
  end: number;
  count: number;
  branchNum: number;
  weight: string;
  section: "TBT" | "KBT";
  sectionTitle: string;
  percent: string;
  color: string;
}

export type StudyMode = "flashcard" | "quiz" | "rapid" | "exam" | "table";

export type QuestionStatus = "all" | "mastered" | "review" | "bookmarked";

export interface ExamAnswer {
  questionId: number;
  selectedOptionIndex: number | null; // null if empty
  isCorrect: boolean;
}

export interface ExamSession {
  startTime: number;
  durationSeconds: number;
  answers: Record<number, number | null>; // questionId -> selectedOptionIndex
  isSubmitted: boolean;
  score?: {
    correct: number;
    incorrect: number;
    empty: number;
    net: number;
    percentage: number;
    passed80: boolean;
  };
}
