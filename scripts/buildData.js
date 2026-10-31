const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\SURFACE LAPTOP\\.gemini\\antigravity\\brain\\3fb02649-a902-4d2b-9711-8c922da24ace\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n');
const firstUser = lines.find(l => {
  try {
    return JSON.parse(l).type === 'USER_INPUT';
  } catch(e) {
    return false;
  }
});
const text = JSON.parse(firstUser).content;

const subjects = [
  { id: 'anatomi', name: 'Anatomi', start: 1, end: 30, branchNum: 1, weight: '6 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '15%' },
  { id: 'fizyoloji', name: 'Fizyoloji', start: 31, end: 60, branchNum: 2, weight: '6 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '15%' },
  { id: 'biyokimya', name: 'Tıbbi Biyokimya', start: 61, end: 90, branchNum: 3, weight: '6 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '15%' },
  { id: 'mikrobiyoloji', name: 'Tıbbi Mikrobiyoloji', start: 91, end: 120, branchNum: 4, weight: '6 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '15%' },
  { id: 'histoloji', name: 'Histoloji ve Embriyoloji', start: 121, end: 140, branchNum: 5, weight: '4 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '10%' },
  { id: 'patoloji', name: 'Tıbbi Patoloji', start: 141, end: 165, branchNum: 6, weight: '4 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '10%' },
  { id: 'farmakoloji', name: 'Tıbbi Farmakoloji', start: 166, end: 190, branchNum: 7, weight: '4 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '10%' },
  { id: 'biyoloji', name: 'Tıbbi Biyoloji ve Genetik', start: 191, end: 210, branchNum: 8, weight: '4 Soru', section: 'TBT', sectionTitle: 'Temel Bilimler Testi', percent: '10%' },
  { id: 'protetik', name: 'Protetik Diş Tedavisi', start: 211, end: 260, branchNum: 9, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'restoratif', name: 'Restoratif Diş Tedavisi', start: 261, end: 310, branchNum: 10, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'cerrahi', name: 'Ağız, Diş ve Çene Cerrahisi', start: 311, end: 360, branchNum: 11, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'radyoloji', name: 'Ağız, Diş ve Çene Radyolojisi', start: 361, end: 410, branchNum: 12, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'periodontoloji', name: 'Periodontoloji', start: 411, end: 460, branchNum: 13, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'ortodonti', name: 'Ortodonti', start: 461, end: 510, branchNum: 14, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'endodonti', name: 'Endodonti', start: 511, end: 560, branchNum: 15, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' },
  { id: 'pedodonti', name: 'Çocuk Diş Hekimliği / Pedodonti', start: 561, end: 610, branchNum: 16, weight: '10 Soru', section: 'KBT', sectionTitle: 'Klinik Bilimler Testi', percent: '12.5%' }
];

function getSubject(num) {
  return subjects.find(s => num >= s.start && num <= s.end);
}

const questionRegex = /(?:S|\. S)(\d+):\s*([\s\S]*?)(?=(?:S\d+:|\d+\.\s*S\d+:|convert\s+all\s+the\s+question|$))/g;

const questions = [];
let m;
while ((m = questionRegex.exec(text)) !== null) {
  const num = parseInt(m[1], 10);
  let body = m[2].trim();
  body = body.replace(/\s*(?:BÖLÜM\s+\d+:[^\n]*|\d+\.\s+[A-ZÇĞİÖŞÜ\s\/]+(?:\([^\)]+\))?[^\n]*).*$/s, (match) => {
    if (match.includes('Soru') || match.includes('BÖLÜM') || match.includes('ÖSYM')) return '';
    return match;
  }).trim();
  
  const parts = body.split(/\s*→\s*Cevap:\s*|\s*Cevap:\s*/);
  const qText = parts[0].trim();
  const aText = parts.slice(1).join(' - ').trim();
  
  const subj = getSubject(num);
  
  // Extract core answer (first concise portion)
  let core = aText;
  const parenIdx = aText.indexOf('(');
  const dashIdx = aText.indexOf(' — ');
  const semiIdx = aText.indexOf(';');
  let cutIdx = Math.min(...[
    parenIdx > 0 ? parenIdx : 9999,
    dashIdx > 0 ? dashIdx : 9999,
    semiIdx > 0 ? semiIdx : 9999
  ]);
  if (cutIdx !== 9999 && cutIdx > 3) {
    core = aText.substring(0, cutIdx).trim();
  }
  if (core.endsWith('.')) core = core.slice(0, -1).trim();

  // Extract keywords
  const stopWords = new Set(['hangi', 'hangisidir', 'hangileridir', 'nedir', 'nasıl', 'olarak', 'sonucu', 'uyarı', 'neden', 'edilir', 'vardır', 'göre', 'kadar', 'birlikte', 'sonra', 'önce', 'olan', 'veya', 'için', 'olanlar', 'yerine', 'arasında', 'tarafından', 'üzerinden']);
  const words = (qText + ' ' + core).replace(/[^\wığüşöçİĞÜŞÖÇ]/g, ' ').split(/\s+/).filter(w => w.length > 3);
  const keywords = [...new Set(words.filter(w => !stopWords.has(w.toLowerCase())))].slice(0, 5);

  questions.push({
    id: num,
    code: 'S' + num,
    section: subj.section,
    sectionTitle: subj.sectionTitle,
    subjectId: subj.id,
    subject: subj.name,
    branchNumber: subj.branchNum,
    osymWeight: subj.weight,
    osymPercent: subj.percent,
    question: qText,
    answer: aText,
    coreAnswer: core,
    keywords
  });
}

// Generate options for each question:
questions.forEach((q) => {
  const sameBranch = questions.filter(other => other.subjectId === q.subjectId && other.id !== q.id);
  const distractors = [];
  const used = new Set([q.coreAnswer.toLowerCase().trim()]);
  
  for (let step = 0; step < sameBranch.length && distractors.length < 3; step++) {
    const candidateIdx = (q.id * 7 + step * 13) % sameBranch.length;
    const cand = sameBranch[candidateIdx].coreAnswer.trim();
    if (cand && !used.has(cand.toLowerCase()) && cand.length > 2 && cand !== q.coreAnswer) {
      used.add(cand.toLowerCase());
      distractors.push(cand);
    }
  }

  if (distractors.length < 3) {
    const sameSection = questions.filter(other => other.section === q.section && other.id !== q.id);
    for (let step = 0; step < sameSection.length && distractors.length < 3; step++) {
      const candidateIdx = (q.id * 11 + step * 17) % sameSection.length;
      const cand = sameSection[candidateIdx].coreAnswer.trim();
      if (cand && !used.has(cand.toLowerCase()) && cand.length > 2) {
        used.add(cand.toLowerCase());
        distractors.push(cand);
      }
    }
  }

  const targetPos = (q.id * 3) % 4;
  const options = [...distractors];
  options.splice(targetPos, 0, q.coreAnswer);

  q.options = options;
  q.correctIndex = targetPos;
});

const colors = [
  'from-rose-500/20 to-red-500/10 text-rose-400 border-rose-500/30',
  'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
  'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
  'from-teal-500/20 to-cyan-500/10 text-teal-400 border-teal-500/30',
  'from-cyan-500/20 to-sky-500/10 text-cyan-400 border-cyan-500/30',
  'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
  'from-indigo-500/20 to-violet-500/10 text-indigo-400 border-indigo-500/30',
  'from-purple-500/20 to-fuchsia-500/10 text-purple-400 border-purple-500/30',
  'from-fuchsia-500/20 to-pink-500/10 text-fuchsia-400 border-fuchsia-500/30',
  'from-pink-500/20 to-rose-500/10 text-pink-400 border-pink-500/30',
  'from-red-500/20 to-amber-500/10 text-red-400 border-red-500/30',
  'from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30',
  'from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30',
  'from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/30',
  'from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30',
  'from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30'
];

const enrichedSubjects = subjects.map((s, i) => ({
  ...s,
  count: s.end - s.start + 1,
  color: colors[i % colors.length]
}));

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data', { recursive: true });
}

const fileHeader = `// Auto-generated DUS 80 Master Question Database (610 Questions)
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

export const DUS_SUBJECTS: DUSSubject[] = ${JSON.stringify(enrichedSubjects, null, 2)};

export const DUS_QUESTIONS: DUSQuestion[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(path.join('src', 'data', 'questionsData.ts'), fileHeader, 'utf8');
console.log('Successfully written src/data/questionsData.ts with', questions.length, 'questions!');
