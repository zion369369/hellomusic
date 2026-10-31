// Auto-generated DUS 80 Master Question Database (610 Questions)
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

export const DUS_SUBJECTS: DUSSubject[] = [
  {
    "id": "anatomi",
    "name": "Anatomi",
    "start": 1,
    "end": 30,
    "branchNum": 1,
    "weight": "6 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "15%",
    "count": 30,
    "color": "from-rose-500/20 to-red-500/10 text-rose-400 border-rose-500/30"
  },
  {
    "id": "fizyoloji",
    "name": "Fizyoloji",
    "start": 31,
    "end": 60,
    "branchNum": 2,
    "weight": "6 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "15%",
    "count": 30,
    "color": "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30"
  },
  {
    "id": "biyokimya",
    "name": "Tıbbi Biyokimya",
    "start": 61,
    "end": 90,
    "branchNum": 3,
    "weight": "6 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "15%",
    "count": 30,
    "color": "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    "id": "mikrobiyoloji",
    "name": "Tıbbi Mikrobiyoloji",
    "start": 91,
    "end": 120,
    "branchNum": 4,
    "weight": "6 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "15%",
    "count": 30,
    "color": "from-teal-500/20 to-cyan-500/10 text-teal-400 border-teal-500/30"
  },
  {
    "id": "histoloji",
    "name": "Histoloji ve Embriyoloji",
    "start": 121,
    "end": 140,
    "branchNum": 5,
    "weight": "4 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "10%",
    "count": 20,
    "color": "from-cyan-500/20 to-sky-500/10 text-cyan-400 border-cyan-500/30"
  },
  {
    "id": "patoloji",
    "name": "Tıbbi Patoloji",
    "start": 141,
    "end": 165,
    "branchNum": 6,
    "weight": "4 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "10%",
    "count": 25,
    "color": "from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30"
  },
  {
    "id": "farmakoloji",
    "name": "Tıbbi Farmakoloji",
    "start": 166,
    "end": 190,
    "branchNum": 7,
    "weight": "4 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "10%",
    "count": 25,
    "color": "from-indigo-500/20 to-violet-500/10 text-indigo-400 border-indigo-500/30"
  },
  {
    "id": "biyoloji",
    "name": "Tıbbi Biyoloji ve Genetik",
    "start": 191,
    "end": 210,
    "branchNum": 8,
    "weight": "4 Soru",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "percent": "10%",
    "count": 20,
    "color": "from-purple-500/20 to-fuchsia-500/10 text-purple-400 border-purple-500/30"
  },
  {
    "id": "protetik",
    "name": "Protetik Diş Tedavisi",
    "start": 211,
    "end": 260,
    "branchNum": 9,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-fuchsia-500/20 to-pink-500/10 text-fuchsia-400 border-fuchsia-500/30"
  },
  {
    "id": "restoratif",
    "name": "Restoratif Diş Tedavisi",
    "start": 261,
    "end": 310,
    "branchNum": 10,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-pink-500/20 to-rose-500/10 text-pink-400 border-pink-500/30"
  },
  {
    "id": "cerrahi",
    "name": "Ağız, Diş ve Çene Cerrahisi",
    "start": 311,
    "end": 360,
    "branchNum": 11,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-red-500/20 to-amber-500/10 text-red-400 border-red-500/30"
  },
  {
    "id": "radyoloji",
    "name": "Ağız, Diş ve Çene Radyolojisi",
    "start": 361,
    "end": 410,
    "branchNum": 12,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30"
  },
  {
    "id": "periodontoloji",
    "name": "Periodontoloji",
    "start": 411,
    "end": 460,
    "branchNum": 13,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30"
  },
  {
    "id": "ortodonti",
    "name": "Ortodonti",
    "start": 461,
    "end": 510,
    "branchNum": 14,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    "id": "endodonti",
    "name": "Endodonti",
    "start": 511,
    "end": 560,
    "branchNum": 15,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30"
  },
  {
    "id": "pedodonti",
    "name": "Çocuk Diş Hekimliği / Pedodonti",
    "start": 561,
    "end": 610,
    "branchNum": 16,
    "weight": "10 Soru",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "percent": "12.5%",
    "count": 50,
    "color": "from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30"
  }
];

export const DUS_QUESTIONS: DUSQuestion[] = [
  {
    "id": 1,
    "code": "S1",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kafa travması sonrası pterion kırığında hangi damar yaralanarak epidural hematoma yol açar?",
    "answer": "A. meningea media.",
    "coreAnswer": "A. meningea media",
    "keywords": [
      "Kafa",
      "travması",
      "sonrası",
      "pterion",
      "kırığında"
    ],
    "options": [
      "N. hypoglossus",
      "A. maxillaris",
      "Lezyon",
      "A. meningea media"
    ],
    "correctIndex": 3
  },
  {
    "id": 2,
    "code": "S2",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Foramen ovale’den geçen en önemli sinir ve damar hangisidir?",
    "answer": "N. mandibularis ($V_3$) ve a. meningea accessoria.",
    "coreAnswer": "N. mandibularis",
    "keywords": [
      "Foramen",
      "ovale",
      "geçen",
      "önemli",
      "sinir"
    ],
    "options": [
      "M. buccinator",
      "Nodi lymphoidei submentales",
      "N. mandibularis",
      "Ganglion oticum"
    ],
    "correctIndex": 2
  },
  {
    "id": 3,
    "code": "S3",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Foramen spinosum’dan geçen anatomik oluşum hangisidir?",
    "answer": "A. meningea media ve n. mandibularis’in meningeal dalı.",
    "coreAnswer": "A. meningea media ve n. mandibularis’in meningeal dalı",
    "keywords": [
      "Foramen",
      "spinosum",
      "geçen",
      "anatomik",
      "oluşum"
    ],
    "options": [
      "Foramen stylomastoideum",
      "A. meningea media ve n. mandibularis’in meningeal dalı",
      "N. mandibularis",
      "N. abducens"
    ],
    "correctIndex": 1
  },
  {
    "id": 4,
    "code": "S4",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Foramen rotundum hangi kraniyal fossaları birbirine bağlar ve içinden ne geçer?",
    "answer": "Fossa cranii media ile fossa pterygopalatina; içinden n. maxillaris ($V_2$) geçer.",
    "coreAnswer": "Fossa cranii media ile fossa pterygopalatina",
    "keywords": [
      "Foramen",
      "rotundum",
      "kraniyal",
      "fossaları",
      "birbirine"
    ],
    "options": [
      "Fossa cranii media ile fossa pterygopalatina",
      "M. tensor veli palatini ve m. salpingopharyngeus",
      "Ganglion submandibulare",
      "N. abducens"
    ],
    "correctIndex": 0
  },
  {
    "id": 5,
    "code": "S5",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Çenein açılmasını (depresyon) sağlayan tek temel çiğneme kası hangisidir?",
    "answer": "M. pterygoideus lateralis (inferior başı).",
    "coreAnswer": "M. pterygoideus lateralis",
    "keywords": [
      "Çenein",
      "açılmasını",
      "depresyon",
      "sağlayan",
      "temel"
    ],
    "options": [
      "Plexus pharyngeus",
      "N. opticus",
      "Fossa cranii media ile fossa pterygopalatina",
      "M. pterygoideus lateralis"
    ],
    "correctIndex": 3
  },
  {
    "id": 6,
    "code": "S6",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tek taraflı m. pterygoideus lateralis felcinde çene açılırken hangi yöne kayar?",
    "answer": "Lezyon (felç) olan tarafa doğru deviye olur.",
    "coreAnswer": "Lezyon",
    "keywords": [
      "taraflı",
      "pterygoideus",
      "lateralis",
      "felcinde",
      "çene"
    ],
    "options": [
      "N. facialis",
      "M. masseter’in ön kenarı",
      "Lezyon",
      "N. glossopharyngeus"
    ],
    "correctIndex": 2
  },
  {
    "id": 7,
    "code": "S7",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "M. tensor veli palatini hangi sinir tarafından innerve edilir?",
    "answer": "N. mandibularis ($V_3$).",
    "coreAnswer": "N. mandibularis",
    "keywords": [
      "tensor",
      "veli",
      "palatini",
      "sinir",
      "innerve"
    ],
    "options": [
      "A. maxillaris",
      "N. mandibularis",
      "M. pterygoideus lateralis",
      "A. maxillaris’in birinci"
    ],
    "correctIndex": 1
  },
  {
    "id": 8,
    "code": "S8",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "M. levator veli palatini ve diğer yumuşak damak kaslarının motor innervasyonunu kim sağlar?",
    "answer": "Plexus pharyngeus (n. vagus - X. KÇ).",
    "coreAnswer": "Plexus pharyngeus",
    "keywords": [
      "levator",
      "veli",
      "palatini",
      "diğer",
      "yumuşak"
    ],
    "options": [
      "Plexus pharyngeus",
      "Nodi lymphoidei submentales",
      "Ganglion oticum",
      "N. trochlearis"
    ],
    "correctIndex": 0
  },
  {
    "id": 9,
    "code": "S9",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dilin tüm intrinsik ve ekstrinsik kaslarını (m. palatoglossus hariç) hangi sinir uyarır?",
    "answer": "N. hypoglossus (XII. KÇ).",
    "coreAnswer": "N. hypoglossus",
    "keywords": [
      "Dilin",
      "intrinsik",
      "ekstrinsik",
      "kaslarını",
      "palatoglossus"
    ],
    "options": [
      "Lezyon",
      "N. abducens",
      "A. meningea media ve n. mandibularis’in meningeal dalı",
      "N. hypoglossus"
    ],
    "correctIndex": 3
  },
  {
    "id": 10,
    "code": "S10",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "M. palatoglossus hangi sinir tarafından innerve edilir?",
    "answer": "Plexus pharyngeus (n. vagus).",
    "coreAnswer": "Plexus pharyngeus",
    "keywords": [
      "palatoglossus",
      "sinir",
      "innerve",
      "Plexus",
      "pharyngeus"
    ],
    "options": [
      "Ganglion submandibulare",
      "N. abducens",
      "Plexus pharyngeus",
      "Genel duyu: N. lingualis"
    ],
    "correctIndex": 2
  },
  {
    "id": 11,
    "code": "S11",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dilin $2/3$ ön kısmının genel duyusunu ve tat duyusunu hangi sinirler alır?",
    "answer": "Genel duyu: N. lingualis ($V_3$); Tat duyusu: Chorda tympani (VII. KÇ).",
    "coreAnswer": "Genel duyu: N. lingualis",
    "keywords": [
      "Dilin",
      "kısmının",
      "genel",
      "duyusunu",
      "sinirler"
    ],
    "options": [
      "N. opticus",
      "Genel duyu: N. lingualis",
      "Fossa cranii media ile fossa pterygopalatina",
      "A. maxillaris ve a. temporalis superficialis"
    ],
    "correctIndex": 1
  },
  {
    "id": 12,
    "code": "S12",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dilin $1/3$ arka kısmının hem genel hem tat duyusunu alan sinir hangisidir?",
    "answer": "N. glossopharyngeus (IX. KÇ).",
    "coreAnswer": "N. glossopharyngeus",
    "keywords": [
      "Dilin",
      "arka",
      "kısmının",
      "genel",
      "duyusunu"
    ],
    "options": [
      "N. glossopharyngeus",
      "M. masseter’in ön kenarı",
      "Genel duyu: N. lingualis",
      "N. trochlearis"
    ],
    "correctIndex": 0
  },
  {
    "id": 13,
    "code": "S13",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Glandula parotidea’nın parasempatik sekretomotor uyarısı hangi gangliyondan gelir?",
    "answer": "Ganglion oticum (n. glossopharyngeus → n. petrosus minor).",
    "coreAnswer": "Ganglion oticum",
    "keywords": [
      "Glandula",
      "parotidea",
      "parasempatik",
      "sekretomotor",
      "uyarısı"
    ],
    "options": [
      "M. pterygoideus lateralis",
      "A. maxillaris’in birinci",
      "N. mandibularis",
      "Ganglion oticum"
    ],
    "correctIndex": 3
  },
  {
    "id": 14,
    "code": "S14",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Glandula submandibularis ve sublingualis’in parasempatik gangliyonu hangisidir?",
    "answer": "Ganglion submandibulare (chorda tympani / VII. KÇ).",
    "coreAnswer": "Ganglion submandibulare",
    "keywords": [
      "Glandula",
      "submandibularis",
      "sublingualis",
      "parasempatik",
      "gangliyonu"
    ],
    "options": [
      "N. glossopharyngeus",
      "N. trochlearis",
      "Ganglion submandibulare",
      "N. hypoglossus"
    ],
    "correctIndex": 2
  },
  {
    "id": 15,
    "code": "S15",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Parotis bezinin içerisinden geçen ancak bezi innerve etmeyen motor sinir hangisidir?",
    "answer": "N. facialis (VII. KÇ).",
    "coreAnswer": "N. facialis",
    "keywords": [
      "Parotis",
      "bezinin",
      "içerisinden",
      "geçen",
      "ancak"
    ],
    "options": [
      "N. abducens",
      "N. facialis",
      "A. meningea media ve n. mandibularis’in meningeal dalı",
      "Ganglion pterygopalatinum"
    ],
    "correctIndex": 1
  },
  {
    "id": 16,
    "code": "S16",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Stenon (Stensen) kanalı hangi kası delerek üst 2. molar diş hizasında ağız boşluğuna açılır?",
    "answer": "M. buccinator.",
    "coreAnswer": "M. buccinator",
    "keywords": [
      "Stenon",
      "Stensen",
      "kanalı",
      "kası",
      "delerek"
    ],
    "options": [
      "M. buccinator",
      "N. abducens",
      "Plexus pharyngeus",
      "Fissura petrotympanica"
    ],
    "correctIndex": 0
  },
  {
    "id": 17,
    "code": "S17",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Fossa pterygopalatina’da yer alan parasempatik gangliyon hangisidir?",
    "answer": "Ganglion pterygopalatinum (n. facialis → n. petrosus major).",
    "coreAnswer": "Ganglion pterygopalatinum",
    "keywords": [
      "Fossa",
      "pterygopalatina",
      "alan",
      "parasempatik",
      "gangliyon"
    ],
    "options": [
      "Fossa cranii media ile fossa pterygopalatina",
      "A. maxillaris ve a. temporalis superficialis",
      "A. meningea media",
      "Ganglion pterygopalatinum"
    ],
    "correctIndex": 3
  },
  {
    "id": 18,
    "code": "S18",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "A. carotis externa’nın iki uç dalı hangileridir?",
    "answer": "A. maxillaris ve a. temporalis superficialis.",
    "coreAnswer": "A. maxillaris ve a. temporalis superficialis",
    "keywords": [
      "carotis",
      "externa",
      "dalı",
      "maxillaris",
      "temporalis"
    ],
    "options": [
      "Genel duyu: N. lingualis",
      "N. trochlearis",
      "A. maxillaris ve a. temporalis superficialis",
      "Plexus pharyngeus"
    ],
    "correctIndex": 2
  },
  {
    "id": 19,
    "code": "S19",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "A. alveolaris inferior hangi arterin dalıdır?",
    "answer": "A. maxillaris’in birinci (mandibular) bölümünün dalıdır.",
    "coreAnswer": "A. maxillaris’in birinci",
    "keywords": [
      "alveolaris",
      "inferior",
      "arterin",
      "dalıdır",
      "maxillaris"
    ],
    "options": [
      "A. maxillaris ve a. temporalis superficialis",
      "A. maxillaris’in birinci",
      "N. mandibularis",
      "N. facialis"
    ],
    "correctIndex": 1
  },
  {
    "id": 20,
    "code": "S20",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Sinus cavernosus’un tam içinden (lümeninden) geçen kraniyal sinir ve arter hangisidir?",
    "answer": "N. abducens (VI. KÇ) ve a. carotis interna.",
    "coreAnswer": "N. abducens",
    "keywords": [
      "Sinus",
      "cavernosus",
      "içinden",
      "lümeninden",
      "geçen"
    ],
    "options": [
      "N. abducens",
      "N. trochlearis",
      "N. hypoglossus",
      "Foramen stylomastoideum"
    ],
    "correctIndex": 0
  },
  {
    "id": 21,
    "code": "S21",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Fissura orbitalis superior’dan geçmeyen, canalis opticus’tan geçen oluşumlar nelerdir?",
    "answer": "N. opticus (II. KÇ) ve a. ophthalmica.",
    "coreAnswer": "N. opticus",
    "keywords": [
      "Fissura",
      "orbitalis",
      "superior",
      "geçmeyen",
      "canalis"
    ],
    "options": [
      "A. meningea media ve n. mandibularis’in meningeal dalı",
      "M. buccinator",
      "M. tensor veli palatini ve m. salpingopharyngeus",
      "N. opticus"
    ],
    "correctIndex": 3
  },
  {
    "id": 22,
    "code": "S22",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Mandibula kondil boynu kırıklarında en sık yaralanan arter hangisidir?",
    "answer": "A. maxillaris.",
    "coreAnswer": "A. maxillaris",
    "keywords": [
      "Mandibula",
      "kondil",
      "boynu",
      "kırıklarında",
      "yaralanan"
    ],
    "options": [
      "Plexus pharyngeus",
      "Fissura petrotympanica",
      "A. maxillaris",
      "N. mandibularis"
    ],
    "correctIndex": 2
  },
  {
    "id": 23,
    "code": "S23",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "N. facialis kafatasını hangi delikten terk eder?",
    "answer": "Foramen stylomastoideum.",
    "coreAnswer": "Foramen stylomastoideum",
    "keywords": [
      "facialis",
      "kafatasını",
      "delikten",
      "terk",
      "eder"
    ],
    "options": [
      "Ganglion pterygopalatinum",
      "Foramen stylomastoideum",
      "A. meningea media",
      "Ganglion submandibulare"
    ],
    "correctIndex": 1
  },
  {
    "id": 24,
    "code": "S24",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Chorda tympani orta kulak boşluğunu terk ederken hangi fissürden geçer?",
    "answer": "Fissura petrotympanica (Glaser yarığı).",
    "coreAnswer": "Fissura petrotympanica",
    "keywords": [
      "Chorda",
      "tympani",
      "orta",
      "kulak",
      "boşluğunu"
    ],
    "options": [
      "Fissura petrotympanica",
      "N. trochlearis",
      "Plexus pharyngeus",
      "N. opticus"
    ],
    "correctIndex": 0
  },
  {
    "id": 25,
    "code": "S25",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Anulus tendineus communis (Zinn halkası) içinden geçmeyen göz siniri hangisidir?",
    "answer": "N. trochlearis (IV. KÇ).",
    "coreAnswer": "N. trochlearis",
    "keywords": [
      "Anulus",
      "tendineus",
      "communis",
      "Zinn",
      "halkası"
    ],
    "options": [
      "N. mandibularis",
      "N. facialis",
      "Nodi lymphoidei submentales",
      "N. trochlearis"
    ],
    "correctIndex": 3
  },
  {
    "id": 26,
    "code": "S26",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "M. obliquus superior’u uyaran kraniyal sinir hangisidir?",
    "answer": "N. trochlearis (IV. KÇ).",
    "coreAnswer": "N. trochlearis",
    "keywords": [
      "obliquus",
      "superior",
      "uyaran",
      "kraniyal",
      "sinir"
    ],
    "options": [
      "N. hypoglossus",
      "A. maxillaris",
      "N. trochlearis",
      "Lezyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 27,
    "code": "S27",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "M. rectus lateralis’i uyaran kraniyal sinir hangisidir?",
    "answer": "N. abducens (VI. KÇ).",
    "coreAnswer": "N. abducens",
    "keywords": [
      "rectus",
      "lateralis",
      "uyaran",
      "kraniyal",
      "sinir"
    ],
    "options": [
      "M. buccinator",
      "N. abducens",
      "M. tensor veli palatini ve m. salpingopharyngeus",
      "Ganglion oticum"
    ],
    "correctIndex": 1
  },
  {
    "id": 28,
    "code": "S28",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "A. facialis’in mandibula alt kenarında nabzının alındığı kas komşuluğu neresidir?",
    "answer": "M. masseter’in ön kenarı.",
    "coreAnswer": "M. masseter’in ön kenarı",
    "keywords": [
      "facialis",
      "mandibula",
      "kenarında",
      "nabzının",
      "alındığı"
    ],
    "options": [
      "M. masseter’in ön kenarı",
      "Foramen stylomastoideum",
      "N. mandibularis",
      "N. abducens"
    ],
    "correctIndex": 0
  },
  {
    "id": 29,
    "code": "S29",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Alt dudak orta kısmının lenfatik drenajı ilk olarak hangi lenf düğümlerine açılır?",
    "answer": "Nodi lymphoidei submentales.",
    "coreAnswer": "Nodi lymphoidei submentales",
    "keywords": [
      "dudak",
      "orta",
      "kısmının",
      "lenfatik",
      "drenajı"
    ],
    "options": [
      "A. meningea media",
      "Ganglion submandibulare",
      "N. abducens",
      "Nodi lymphoidei submentales"
    ],
    "correctIndex": 3
  },
  {
    "id": 30,
    "code": "S30",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "anatomi",
    "subject": "Anatomi",
    "branchNumber": 1,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tuba auditiva’yı (Östaki borusu) açan temel kaslar hangileridir?",
    "answer": "M. tensor veli palatini ve m. salpingopharyngeus.",
    "coreAnswer": "M. tensor veli palatini ve m. salpingopharyngeus",
    "keywords": [
      "Tuba",
      "auditiva",
      "Östaki",
      "borusu",
      "açan"
    ],
    "options": [
      "Plexus pharyngeus",
      "N. opticus",
      "M. tensor veli palatini ve m. salpingopharyngeus",
      "M. pterygoideus lateralis"
    ],
    "correctIndex": 2
  },
  {
    "id": 31,
    "code": "S31",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Ventrikül diyastol sonu hacmi (EDV) ile sistol sonu hacmi (ESV) arasındaki farka ne denir?",
    "answer": "Atım hacmi (Stroke Volume).",
    "coreAnswer": "Atım hacmi",
    "keywords": [
      "Ventrikül",
      "diyastol",
      "sonu",
      "hacmi",
      "sistol"
    ],
    "options": [
      "Human koryonik gonadotropin",
      "Atım hacmi",
      "Artmış $H^+$",
      "Voltaj kapılı hızlı sodyum"
    ],
    "correctIndex": 1
  },
  {
    "id": 32,
    "code": "S32",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Frank-Starling yasasına göre kalbin ön yükünü (preload) belirleyen temel parametre nedir?",
    "answer": "Ventrikül diyastol sonu hacmi (EDV).",
    "coreAnswer": "Ventrikül diyastol sonu hacmi",
    "keywords": [
      "Frank",
      "Starling",
      "yasasına",
      "kalbin",
      "yükünü"
    ],
    "options": [
      "Ventrikül diyastol sonu hacmi",
      "GpIIb/IIIa",
      "Aldosteron",
      "Fosfat"
    ],
    "correctIndex": 0
  },
  {
    "id": 33,
    "code": "S33",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Sol ventrikülün art yükünü (afterload) belirleyen en önemli klinik parametre nedir?",
    "answer": "Diyastolik aort basıncı (sistemik vasküler direnç).",
    "coreAnswer": "Diyastolik aort basıncı",
    "keywords": [
      "ventrikülün",
      "yükünü",
      "afterload",
      "belirleyen",
      "önemli"
    ],
    "options": [
      "Histamin",
      "Voltaj kapılı $Na^+$ kanallarının inaktif",
      "Gama",
      "Diyastolik aort basıncı"
    ],
    "correctIndex": 3
  },
  {
    "id": 34,
    "code": "S34",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "İstirahat halindeki tükürük salgısının en büyük kısmını (%65) hangi bez üretir?",
    "answer": "Submandibular bez.",
    "coreAnswer": "Submandibular bez",
    "keywords": [
      "İstirahat",
      "halindeki",
      "tükürük",
      "salgısının",
      "büyük"
    ],
    "options": [
      "Miyelinli $A\\delta$",
      "Kalsitonin",
      "Submandibular bez",
      "Parotis bezi"
    ],
    "correctIndex": 2
  },
  {
    "id": 35,
    "code": "S35",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Uyarılmış (stimüle) tükürük salgısında en baskın hale geçen (%50+) bez hangisidir?",
    "answer": "Parotis bezi.",
    "coreAnswer": "Parotis bezi",
    "keywords": [
      "Uyarılmış",
      "stimüle",
      "tükürük",
      "salgısında",
      "baskın"
    ],
    "options": [
      "Human plasental laktojen",
      "Parotis bezi",
      "Golgi tendon organı",
      "Kalmodulin"
    ],
    "correctIndex": 1
  },
  {
    "id": 36,
    "code": "S36",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tükürük akış hızı arttıkça tükürükteki hangi iyonun konsantrasyonu azalır?",
    "answer": "Potasyum ($K^+$) azalır; Sodyum ($Na^+$), Klor ($Cl^-$) ve Bikarbonat ($HCO_3^-$) artar.",
    "coreAnswer": "Potasyum",
    "keywords": [
      "Tükürük",
      "akış",
      "hızı",
      "arttıkça",
      "tükürükteki"
    ],
    "options": [
      "Potasyum",
      "von Willebrand Faktör",
      "Parotis bezi",
      "Parathormon"
    ],
    "correctIndex": 0
  },
  {
    "id": 37,
    "code": "S37",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tükürük kanal epitelinde $Na^+$ geri emilimini ve $K^+$ sekresyonunu artıran hormon hangisidir?",
    "answer": "Aldosteron.",
    "coreAnswer": "Aldosteron",
    "keywords": [
      "Tükürük",
      "kanal",
      "epitelinde",
      "geri",
      "emilimini"
    ],
    "options": [
      "Artmış $H^+$",
      "Voltaj kapılı hızlı sodyum",
      "Çene açma refleksi",
      "Aldosteron"
    ],
    "correctIndex": 3
  },
  {
    "id": 38,
    "code": "S38",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dentin hassasiyetinde keskin, lokalize ve hızlı ağrıyı ileten sinir lifi tipi hangisidir?",
    "answer": "Miyelinli $A\\delta$ (A-delta) lifleri.",
    "coreAnswer": "Miyelinli $A\\delta$",
    "keywords": [
      "Dentin",
      "hassasiyetinde",
      "keskin",
      "lokalize",
      "hızlı"
    ],
    "options": [
      "Potasyum",
      "Fosfat",
      "Miyelinli $A\\delta$",
      "Diyastolik aort basıncı"
    ],
    "correctIndex": 2
  },
  {
    "id": 39,
    "code": "S39",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Pulpa iltihabında künt, yanıcı, geç başlayan ve uzun süren ağrıyı ileten lifler hangisidir?",
    "answer": "Miyelinsiz C lifleri.",
    "coreAnswer": "Miyelinsiz C lifleri",
    "keywords": [
      "Pulpa",
      "iltihabında",
      "künt",
      "yanıcı",
      "başlayan"
    ],
    "options": [
      "Voltaj kapılı $Na^+$ kanallarının inaktif",
      "Miyelinsiz C lifleri",
      "Gama",
      "Troponin C"
    ],
    "correctIndex": 1
  },
  {
    "id": 40,
    "code": "S40",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "İskelet kasında kasılma sırasında boyu değişmeyen bant hangisidir?",
    "answer": "A bandı (I bandı ve H bandı kısalır, Z çizgileri yaklaşır).",
    "coreAnswer": "A bandı",
    "keywords": [
      "İskelet",
      "kasında",
      "kasılma",
      "sırasında",
      "boyu"
    ],
    "options": [
      "A bandı",
      "Kalsitonin",
      "Submandibular bez",
      "Somatomedin C"
    ],
    "correctIndex": 0
  },
  {
    "id": 41,
    "code": "S41",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "İskelet kasında kalsiyumun bağlanarak tropomiyozini çektiği düzenleyici protein hangisidir?",
    "answer": "Troponin C.",
    "coreAnswer": "Troponin C",
    "keywords": [
      "İskelet",
      "kasında",
      "kalsiyumun",
      "bağlanarak",
      "tropomiyozini"
    ],
    "options": [
      "Golgi tendon organı",
      "Kalmodulin",
      "aPTT",
      "Troponin C"
    ],
    "correctIndex": 3
  },
  {
    "id": 42,
    "code": "S42",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Düz kas kasılmasında kalsiyumun bağlandığı protein hangisidir (Troponin yoktur)?",
    "answer": "Kalmodulin (Miyozin hafif zincir kinazı aktive eder).",
    "coreAnswer": "Kalmodulin",
    "keywords": [
      "kasılmasında",
      "kalsiyumun",
      "bağlandığı",
      "protein",
      "Troponin"
    ],
    "options": [
      "Parotis bezi",
      "Parathormon",
      "Kalmodulin",
      "Ventrikül diyastol sonu hacmi"
    ],
    "correctIndex": 2
  },
  {
    "id": 43,
    "code": "S43",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Sinir aksiyon potansiyelinde depolarizasyon aşamasından hangi iyon kanalları sorumludur?",
    "answer": "Voltaj kapılı hızlı sodyum ($Na^+$) kanallarının açılması.",
    "coreAnswer": "Voltaj kapılı hızlı sodyum",
    "keywords": [
      "Sinir",
      "aksiyon",
      "potansiyelinde",
      "depolarizasyon",
      "aşamasından"
    ],
    "options": [
      "Kalmodulin",
      "Voltaj kapılı hızlı sodyum",
      "Çene açma refleksi",
      "Miyelinsiz C lifleri"
    ],
    "correctIndex": 1
  },
  {
    "id": 44,
    "code": "S44",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Sinir lifinde mutlak refrakter periyodun temel nedeni nedir?",
    "answer": "Voltaj kapılı $Na^+$ kanallarının inaktif (kapalı) durumda olması.",
    "coreAnswer": "Voltaj kapılı $Na^+$ kanallarının inaktif",
    "keywords": [
      "Sinir",
      "lifinde",
      "mutlak",
      "refrakter",
      "periyodun"
    ],
    "options": [
      "Voltaj kapılı $Na^+$ kanallarının inaktif",
      "Fosfat",
      "Diyastolik aort basıncı",
      "Antimüllerian hormon"
    ],
    "correctIndex": 0
  },
  {
    "id": 45,
    "code": "S45",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Gebelikte plasentadan salgılanıp annede insülin direnci oluşturan hormon hangisidir?",
    "answer": "Human plasental laktojen (hPL).",
    "coreAnswer": "Human plasental laktojen",
    "keywords": [
      "Gebelikte",
      "plasentadan",
      "salgılanıp",
      "annede",
      "insülin"
    ],
    "options": [
      "Gama",
      "A bandı",
      "Doku faktörü",
      "Human plasental laktojen"
    ],
    "correctIndex": 3
  },
  {
    "id": 46,
    "code": "S46",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Gebeliğin erken döneminde corpus luteum’un devamlılığını sağlayan hormon hangisidir?",
    "answer": "Human koryonik gonadotropin (hCG).",
    "coreAnswer": "Human koryonik gonadotropin",
    "keywords": [
      "Gebeliğin",
      "erken",
      "döneminde",
      "corpus",
      "luteum"
    ],
    "options": [
      "Submandibular bez",
      "Somatomedin C",
      "Human koryonik gonadotropin",
      "Atım hacmi"
    ],
    "correctIndex": 2
  },
  {
    "id": 47,
    "code": "S47",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Over rezervinin değerlendirilmesinde kullanılan ve granüloza hücrelerinden salınan hormon?",
    "answer": "Antimüllerian hormon (AMH).",
    "coreAnswer": "Antimüllerian hormon",
    "keywords": [
      "Over",
      "rezervinin",
      "değerlendirilmesinde",
      "kullanılan",
      "granüloza"
    ],
    "options": [
      "Troponin C",
      "Antimüllerian hormon",
      "aPTT",
      "Miyelinli $A\\delta$"
    ],
    "correctIndex": 1
  },
  {
    "id": 48,
    "code": "S48",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Büyüme hormonu (GH) dokulardaki anabolik ve kondrojenik etkilerini hangi mediyatörle yapar?",
    "answer": "Somatomedin C (IGF-1).",
    "coreAnswer": "Somatomedin C",
    "keywords": [
      "Büyüme",
      "hormonu",
      "dokulardaki",
      "anabolik",
      "kondrojenik"
    ],
    "options": [
      "Somatomedin C",
      "Parathormon",
      "Ventrikül diyastol sonu hacmi",
      "Human plasental laktojen"
    ],
    "correctIndex": 0
  },
  {
    "id": 49,
    "code": "S49",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kan kalsiyum düzeyi düştüğünde kemik rezorpsiyonunu ve böbrekten $Ca^{2+}$ emilimini artıran hormon?",
    "answer": "Parathormon (PTH).",
    "coreAnswer": "Parathormon",
    "keywords": [
      "kalsiyum",
      "düzeyi",
      "düştüğünde",
      "kemik",
      "rezorpsiyonunu"
    ],
    "options": [
      "Çene açma refleksi",
      "Miyelinsiz C lifleri",
      "GpIIb/IIIa",
      "Parathormon"
    ],
    "correctIndex": 3
  },
  {
    "id": 50,
    "code": "S50",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Parathormon böbrek proksimal tübüllerinden hangi iyonun atılımını artırır (geri emilimini azaltır)?",
    "answer": "Fosfat ($PO_4^{3-}$).",
    "coreAnswer": "Fosfat",
    "keywords": [
      "Parathormon",
      "böbrek",
      "proksimal",
      "tübüllerinden",
      "iyonun"
    ],
    "options": [
      "Diyastolik aort basıncı",
      "Human koryonik gonadotropin",
      "Fosfat",
      "Histamin"
    ],
    "correctIndex": 2
  },
  {
    "id": 51,
    "code": "S51",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Osteoklast aktivitesini doğrudan baskılayarak kan kalsiyumunu düşüren tiroid parafoliküler hormonu?",
    "answer": "Kalsitonin.",
    "coreAnswer": "Kalsitonin",
    "keywords": [
      "Osteoklast",
      "aktivitesini",
      "doğrudan",
      "baskılayarak",
      "kalsiyumunu"
    ],
    "options": [
      "A bandı",
      "Kalsitonin",
      "Doku faktörü",
      "Aldosteron"
    ],
    "correctIndex": 1
  },
  {
    "id": 52,
    "code": "S52",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Primer hemostazda trombositlerin hasarlı subendotelyal kollajene tutunmasını (adezyon) sağlayan faktör?",
    "answer": "von Willebrand Faktör (vWF) ve GpIb reseptörü.",
    "coreAnswer": "von Willebrand Faktör",
    "keywords": [
      "Primer",
      "hemostazda",
      "trombositlerin",
      "hasarlı",
      "subendotelyal"
    ],
    "options": [
      "von Willebrand Faktör",
      "Antimüllerian hormon",
      "Atım hacmi",
      "Voltaj kapılı $Na^+$ kanallarının inaktif"
    ],
    "correctIndex": 0
  },
  {
    "id": 53,
    "code": "S53",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Trombosit agregasyonunda fibrinojenin bağlandığı reseptör kompleksi hangisidir?",
    "answer": "GpIIb/IIIa.",
    "coreAnswer": "GpIIb/IIIa",
    "keywords": [
      "Trombosit",
      "agregasyonunda",
      "fibrinojenin",
      "bağlandığı",
      "reseptör"
    ],
    "options": [
      "aPTT",
      "Miyelinli $A\\delta$",
      "Kalsitonin",
      "GpIIb/IIIa"
    ],
    "correctIndex": 3
  },
  {
    "id": 54,
    "code": "S54",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Ekstrensek koagülasyon yolunu başlatan faktör hangisidir ve hangi testle izlenir?",
    "answer": "Doku faktörü (Faktör III) — Faktör VII; Protrombin Zamanı (PT / INR) ile izlenir.",
    "coreAnswer": "Doku faktörü",
    "keywords": [
      "Ekstrensek",
      "koagülasyon",
      "yolunu",
      "başlatan",
      "faktör"
    ],
    "options": [
      "Ventrikül diyastol sonu hacmi",
      "Human plasental laktojen",
      "Doku faktörü",
      "Artmış $H^+$"
    ],
    "correctIndex": 2
  },
  {
    "id": 55,
    "code": "S55",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "İntrensek koagülasyon yolunda yer alan faktörler hangi laboratuvar testi ile değerlendirilir?",
    "answer": "aPTT (Aktive Parsiyel Tromboplastin Zamanı).",
    "coreAnswer": "aPTT",
    "keywords": [
      "İntrensek",
      "koagülasyon",
      "yolunda",
      "alan",
      "faktörler"
    ],
    "options": [
      "Miyelinsiz C lifleri",
      "aPTT",
      "von Willebrand Faktör",
      "Potasyum"
    ],
    "correctIndex": 1
  },
  {
    "id": 56,
    "code": "S56",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Çiğneme refleksinde dişler sert bir cisme ısırdığında çene kapatıcı kasların ani inhibisyonuna ne denir?",
    "answer": "Çene açma refleksi (Otojenik / Periodontal koruyucu inhibisyon).",
    "coreAnswer": "Çene açma refleksi",
    "keywords": [
      "Çiğneme",
      "refleksinde",
      "dişler",
      "sert",
      "cisme"
    ],
    "options": [
      "Çene açma refleksi",
      "Human koryonik gonadotropin",
      "Histamin",
      "Voltaj kapılı hızlı sodyum"
    ],
    "correctIndex": 0
  },
  {
    "id": 57,
    "code": "S57",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kas iğciğinin (intrafuzal lifler) duyarlılığını ayarlayan motor nöron tipi hangisidir?",
    "answer": "Gama ($\\gamma$) motor nöronlar.",
    "coreAnswer": "Gama",
    "keywords": [
      "iğciğinin",
      "intrafuzal",
      "lifler",
      "duyarlılığını",
      "ayarlayan"
    ],
    "options": [
      "GpIIb/IIIa",
      "Aldosteron",
      "Fosfat",
      "Gama"
    ],
    "correctIndex": 3
  },
  {
    "id": 58,
    "code": "S58",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kas gerimini (tansiyonunu) algılayarak aşırı yüklenmede kası gevşeten reseptör hangisidir?",
    "answer": "Golgi tendon organı.",
    "coreAnswer": "Golgi tendon organı",
    "keywords": [
      "gerimini",
      "tansiyonunu",
      "algılayarak",
      "aşırı",
      "yüklenmede"
    ],
    "options": [
      "Atım hacmi",
      "Voltaj kapılı $Na^+$ kanallarının inaktif",
      "Golgi tendon organı",
      "Gama"
    ],
    "correctIndex": 2
  },
  {
    "id": 59,
    "code": "S59",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Oksijen-hemoglobin disosiasyon eğrisini sağa kaydırarak dokuya $O_2$ bırakılmasını artıran faktörler (Bohr etkisi)?",
    "answer": "Artmış $H^+$ (düşük pH), artmış $pCO_2$, artmış sıcaklık ve artmış 2,3-BPG.",
    "coreAnswer": "Artmış $H^+$",
    "keywords": [
      "Oksijen",
      "hemoglobin",
      "disosiasyon",
      "eğrisini",
      "sağa"
    ],
    "options": [
      "Miyelinli $A\\delta$",
      "Artmış $H^+$",
      "Kalsitonin",
      "Parotis bezi"
    ],
    "correctIndex": 1
  },
  {
    "id": 60,
    "code": "S60",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "fizyoloji",
    "subject": "Fizyoloji",
    "branchNumber": 2,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Mide paryetal hücrelerinden intrinsik faktör ve $HCl$ salgılanmasını uyaran parakrin madde?",
    "answer": "Histamin ($H_2$ reseptörü üzerinden), Asetilkolin ve Gastrin.",
    "coreAnswer": "Histamin",
    "keywords": [
      "Mide",
      "paryetal",
      "hücrelerinden",
      "intrinsik",
      "faktör"
    ],
    "options": [
      "Histamin",
      "Human plasental laktojen",
      "Golgi tendon organı",
      "Kalmodulin"
    ],
    "correctIndex": 0
  },
  {
    "id": 61,
    "code": "S61",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kollajen sentezinde prolil ve lizil hidroksilaz enzimlerinin kofaktörü olan vitamin ve mineral nedir?",
    "answer": "C vitamini (Askorbik asit) ve Demir ($Fe^{2+}$).",
    "coreAnswer": "C vitamini",
    "keywords": [
      "Kollajen",
      "sentezinde",
      "prolil",
      "lizil",
      "hidroksilaz"
    ],
    "options": [
      "TIMP",
      "Tip II Kollajen",
      "Glukoz-6-fosfataz",
      "C vitamini"
    ],
    "correctIndex": 3
  },
  {
    "id": 62,
    "code": "S62",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "C vitamini eksikliğinde (Skorbüt) periodontal ligamentte ve diş etinde kanama olmasının biyokimyasal nedeni?",
    "answer": "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu.",
    "coreAnswer": "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu",
    "keywords": [
      "vitamini",
      "eksikliğinde",
      "Skorbüt",
      "periodontal",
      "ligamentte"
    ],
    "options": [
      "Sekretuvar IgA",
      "Glukoz-6-fosfat dehidrogenaz",
      "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu",
      "Kobalamin"
    ],
    "correctIndex": 2
  },
  {
    "id": 63,
    "code": "S63",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kollajen lifleri arasında kovalent çapraz bağları oluşturan lizil oksidaz enziminin kofaktörü nedir?",
    "answer": "Bakır ($Cu^{2+}$).",
    "coreAnswer": "Bakır",
    "keywords": [
      "Kollajen",
      "lifleri",
      "kovalent",
      "çapraz",
      "bağları"
    ],
    "options": [
      "Tip IV Kollajen",
      "Bakır",
      "Siyanür",
      "Osteokalsin"
    ],
    "correctIndex": 1
  },
  {
    "id": 64,
    "code": "S64",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Diş minesinde ve kemikte kalsiyum-fosfat çökelmesini (mineralizasyonu) başlatan ve pirofosfatı yıkan enzim?",
    "answer": "Alkalen fosfataz (ALP) — Kofaktörü Çinko ($Zn^{2+}$) ve Magnezyum ($Mg^{2+}$).",
    "coreAnswer": "Alkalen fosfataz",
    "keywords": [
      "minesinde",
      "kemikte",
      "kalsiyum",
      "fosfat",
      "çökelmesini"
    ],
    "options": [
      "Alkalen fosfataz",
      "HMG-KoA redüktaz",
      "Laktoferrin",
      "$K_m$ artar"
    ],
    "correctIndex": 0
  },
  {
    "id": 65,
    "code": "S65",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "K vitamini bağımlı $\\gamma$-karboksilasyon ile kalsiyuma bağlanan en önemli kemik/dentin non-kollajen proteini?",
    "answer": "Osteokalsin.",
    "coreAnswer": "Osteokalsin",
    "keywords": [
      "vitamini",
      "bağımlı",
      "gamma",
      "karboksilasyon",
      "kalsiyuma"
    ],
    "options": [
      "$\\alpha_1$-antitripsin",
      "Tip I Kollajen",
      "Glikojen fosforilaz",
      "Osteokalsin"
    ],
    "correctIndex": 3
  },
  {
    "id": 66,
    "code": "S66",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dentin, sement ve alveol kemiğinde en fazla bulunan kollajen tipi hangisidir?",
    "answer": "Tip I Kollajen.",
    "coreAnswer": "Tip I Kollajen",
    "keywords": [
      "Dentin",
      "sement",
      "alveol",
      "kemiğinde",
      "fazla"
    ],
    "options": [
      "Lizozim",
      "$K_m$ değişmez, $V_{max}$ azalır",
      "Tip I Kollajen",
      "Biyotin"
    ],
    "correctIndex": 2
  },
  {
    "id": 67,
    "code": "S67",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Hiyalin kıkırdakta ve temporomandibular eklem (TME) kondil kıkırdağında bulunan ana kollajen?",
    "answer": "Tip II Kollajen.",
    "coreAnswer": "Tip II Kollajen",
    "keywords": [
      "Hiyalin",
      "kıkırdakta",
      "temporomandibular",
      "eklem",
      "kondil"
    ],
    "options": [
      "Tip I Kollajen",
      "Tip II Kollajen",
      "Glukoz-6-fosfataz",
      "Bakır"
    ],
    "correctIndex": 1
  },
  {
    "id": 68,
    "code": "S68",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Bazal membranda (lamina densa) ağ yapısı oluşturan kollajen tipi hangisidir?",
    "answer": "Tip IV Kollajen.",
    "coreAnswer": "Tip IV Kollajen",
    "keywords": [
      "Bazal",
      "membranda",
      "lamina",
      "densa",
      "yapısı"
    ],
    "options": [
      "Tip IV Kollajen",
      "Glukoz-6-fosfat dehidrogenaz",
      "Kobalamin",
      "Glukoziltransferaz"
    ],
    "correctIndex": 0
  },
  {
    "id": 69,
    "code": "S69",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Glikoliz yolunun hız kısıtlayıcı (allosterik düzenleyici) en önemli enzimi hangisidir?",
    "answer": "Fosfofruktokinaz-1 (PFK-1).",
    "coreAnswer": "Fosfofruktokinaz-1",
    "keywords": [
      "Glikoliz",
      "yolunun",
      "kısıtlayıcı",
      "allosterik",
      "düzenleyici"
    ],
    "options": [
      "Siyanür",
      "Alkalen fosfataz",
      "Parathormon",
      "Fosfofruktokinaz-1"
    ],
    "correctIndex": 3
  },
  {
    "id": 70,
    "code": "S70",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Streptococcus mutans’ta florürün inhibe ederek laktik asit üretimini durdurduğu glikoliz enzimi?",
    "answer": "Enolaz.",
    "coreAnswer": "Enolaz",
    "keywords": [
      "Streptococcus",
      "mutans",
      "florürün",
      "inhibe",
      "ederek"
    ],
    "options": [
      "Laktoferrin",
      "$K_m$ artar",
      "Enolaz",
      "Piridoksal fosfat"
    ],
    "correctIndex": 2
  },
  {
    "id": 71,
    "code": "S71",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "S. mutans’ın sükrozdan suda çözünmeyen ekstrasellüler dekstran (mutan) sentezlediği enzim?",
    "answer": "Glukoziltransferaz.",
    "coreAnswer": "Glukoziltransferaz",
    "keywords": [
      "mutans",
      "sükrozdan",
      "suda",
      "çözünmeyen",
      "ekstrasellüler"
    ],
    "options": [
      "Osteokalsin",
      "Glukoziltransferaz",
      "Glikojen fosforilaz",
      "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu"
    ],
    "correctIndex": 1
  },
  {
    "id": 72,
    "code": "S72",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kompetitif enzim inhibisyonunda $K_m$ ve $V_{max}$ değerleri nasıl değişir?",
    "answer": "$K_m$ artar (affinite azalır), $V_{max}$ değişmez.",
    "coreAnswer": "$K_m$ artar",
    "keywords": [
      "Kompetitif",
      "enzim",
      "inhibisyonunda",
      "değerleri",
      "değişir"
    ],
    "options": [
      "$K_m$ artar",
      "$K_m$ değişmez, $V_{max}$ azalır",
      "Biyotin",
      "Fosfofruktokinaz-1"
    ],
    "correctIndex": 0
  },
  {
    "id": 73,
    "code": "S73",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Non-kompetitif enzim inhibisyonunda $K_m$ ve $V_{max}$ değerleri nasıl değişir?",
    "answer": "$K_m$ değişmez, $V_{max}$ azalır.",
    "coreAnswer": "$K_m$ değişmez, $V_{max}$ azalır",
    "keywords": [
      "kompetitif",
      "enzim",
      "inhibisyonunda",
      "değerleri",
      "değişir"
    ],
    "options": [
      "Glukoz-6-fosfataz",
      "Bakır",
      "Deri",
      "$K_m$ değişmez, $V_{max}$ azalır"
    ],
    "correctIndex": 3
  },
  {
    "id": 74,
    "code": "S74",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Pentoz fosfat yolunun hız kısıtlayıcı enzimi ve ürettiği temel indirgeyici molekül nedir?",
    "answer": "Glukoz-6-fosfat dehidrogenaz (G6PD); NADPH üretir.",
    "coreAnswer": "Glukoz-6-fosfat dehidrogenaz",
    "keywords": [
      "Pentoz",
      "fosfat",
      "yolunun",
      "kısıtlayıcı",
      "enzimi"
    ],
    "options": [
      "Kobalamin",
      "Enolaz",
      "Glukoz-6-fosfat dehidrogenaz",
      "Matriks metalloproteinazlar"
    ],
    "correctIndex": 2
  },
  {
    "id": 75,
    "code": "S75",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kolesterol sentezinin hız kısıtlayıcı enzimi (statinlerin hedefi) hangisidir?",
    "answer": "HMG-KoA redüktaz.",
    "coreAnswer": "HMG-KoA redüktaz",
    "keywords": [
      "Kolesterol",
      "sentezinin",
      "kısıtlayıcı",
      "enzimi",
      "statinlerin"
    ],
    "options": [
      "Alkalen fosfataz",
      "HMG-KoA redüktaz",
      "Parathormon",
      "C vitamini"
    ],
    "correctIndex": 1
  },
  {
    "id": 76,
    "code": "S76",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Üre döngüsünün mitokondrideki hız kısıtlayıcı enzimi hangisidir?",
    "answer": "Karbamoil fosfat sentetaz I (CPS-I).",
    "coreAnswer": "Karbamoil fosfat sentetaz I",
    "keywords": [
      "döngüsünün",
      "mitokondrideki",
      "kısıtlayıcı",
      "enzimi",
      "Karbamoil"
    ],
    "options": [
      "Karbamoil fosfat sentetaz I",
      "Glukoziltransferaz",
      "Piridoksal fosfat",
      "Tip IV Kollajen"
    ],
    "correctIndex": 0
  },
  {
    "id": 77,
    "code": "S77",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Aktif D vitamini ($1,25\\text{-(OH)}_2\\text{-D}_3$ / Kalsitriol) sentezi sırasıyla hangi organlarda gerçekleşir?",
    "answer": "Deri (UV) → Karaciğer (25-hidroksilaz) → Böbrek ($1\\alpha$-hidroksilaz).",
    "coreAnswer": "Deri",
    "keywords": [
      "Aktif",
      "vitamini",
      "text",
      "Kalsitriol",
      "sentezi"
    ],
    "options": [
      "Glikojen fosforilaz",
      "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu",
      "HMG-KoA redüktaz",
      "Deri"
    ],
    "correctIndex": 3
  },
  {
    "id": 78,
    "code": "S78",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Böbrekteki $1\\alpha$-hidroksilaz enzimini doğrudan aktive eden hormon hangisidir?",
    "answer": "Parathormon (PTH) ve hipofosfatemi.",
    "coreAnswer": "Parathormon",
    "keywords": [
      "Böbrekteki",
      "alpha",
      "hidroksilaz",
      "enzimini",
      "doğrudan"
    ],
    "options": [
      "Biyotin",
      "Fosfofruktokinaz-1",
      "Parathormon",
      "TIMP"
    ],
    "correctIndex": 2
  },
  {
    "id": 79,
    "code": "S79",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Glikojen yıkımının (glikojenoliz) hız kısıtlayıcı enzimi ve kofaktörü nedir?",
    "answer": "Glikojen fosforilaz; kofaktörü Piridoksal fosfat ($B_6$ vitamini).",
    "coreAnswer": "Glikojen fosforilaz",
    "keywords": [
      "Glikojen",
      "yıkımının",
      "glikojenoliz",
      "kısıtlayıcı",
      "enzimi"
    ],
    "options": [
      "Bakır",
      "Glikojen fosforilaz",
      "Karbamoil fosfat sentetaz I",
      "Sekretuvar IgA"
    ],
    "correctIndex": 1
  },
  {
    "id": 80,
    "code": "S80",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kas dokusunda hangi enzim bulunmadığı için kas glikojeni kan şekerini doğrudan yükseltemez?",
    "answer": "Glukoz-6-fosfataz.",
    "coreAnswer": "Glukoz-6-fosfataz",
    "keywords": [
      "dokusunda",
      "enzim",
      "bulunmadığı",
      "glikojeni",
      "şekerini"
    ],
    "options": [
      "Glukoz-6-fosfataz",
      "Enolaz",
      "Matriks metalloproteinazlar",
      "Tip II Kollajen"
    ],
    "correctIndex": 0
  },
  {
    "id": 81,
    "code": "S81",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Elektron transport zincirinde (ETZ) Kompleks IV’ü (Sitokrom oksidaz) inhibe eden zehirler nelerdir?",
    "answer": "Siyanür ($CN^-$), Karbonmonoksit ($CO$) ve Hidrojen sülfür ($H_2S$).",
    "coreAnswer": "Siyanür",
    "keywords": [
      "Elektron",
      "transport",
      "zincirinde",
      "Kompleks",
      "Sitokrom"
    ],
    "options": [
      "Deri",
      "C vitamini",
      "Glukoz-6-fosfat dehidrogenaz",
      "Siyanür"
    ],
    "correctIndex": 3
  },
  {
    "id": 82,
    "code": "S82",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Bağ dokusunda elastin liflerini yıkan nötrofil elastaz enzimini fizyolojik olarak inhibe eden protein?",
    "answer": "$\\alpha_1$-antitripsin.",
    "coreAnswer": "$\\alpha_1$-antitripsin",
    "keywords": [
      "dokusunda",
      "elastin",
      "liflerini",
      "yıkan",
      "nötrofil"
    ],
    "options": [
      "Piridoksal fosfat",
      "Tip IV Kollajen",
      "$\\alpha_1$-antitripsin",
      "Siyanür"
    ],
    "correctIndex": 2
  },
  {
    "id": 83,
    "code": "S83",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Periodontal doku yıkımında kollajenazları (MMP) inhibe eden endojen doku inhibitörleri?",
    "answer": "TIMP (Tissue Inhibitors of Metalloproteinases).",
    "coreAnswer": "TIMP",
    "keywords": [
      "Periodontal",
      "doku",
      "yıkımında",
      "kollajenazları",
      "inhibe"
    ],
    "options": [
      "Kollajende hidroksiprolin ve hidroksilizin sentezlenememesi sonucu zayıf tropokollajen oluşumu",
      "TIMP",
      "HMG-KoA redüktaz",
      "Lizozim"
    ],
    "correctIndex": 1
  },
  {
    "id": 84,
    "code": "S84",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tetrasiklin grubu antibiyotiklerin antimikrobiyal etkiden bağımsız olarak inhibe ettiği doku yıkım enzimi?",
    "answer": "Matriks metalloproteinazlar (MMP / Kollajenaz) — $Ca^{2+}$ ve $Zn^{2+}$ şelasyonu ile.",
    "coreAnswer": "Matriks metalloproteinazlar",
    "keywords": [
      "Tetrasiklin",
      "grubu",
      "antibiyotiklerin",
      "antimikrobiyal",
      "etkiden"
    ],
    "options": [
      "Matriks metalloproteinazlar",
      "Fosfofruktokinaz-1",
      "$\\alpha_1$-antitripsin",
      "Tip I Kollajen"
    ],
    "correctIndex": 0
  },
  {
    "id": 85,
    "code": "S85",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Transaminasyon reaksiyonlarında (ALT, AST) zorunlu koenzim olan vitamin türevi nedir?",
    "answer": "Piridoksal fosfat ($B_6$ vitamini).",
    "coreAnswer": "Piridoksal fosfat",
    "keywords": [
      "Transaminasyon",
      "reaksiyonlarında",
      "zorunlu",
      "koenzim",
      "vitamin"
    ],
    "options": [
      "Karbamoil fosfat sentetaz I",
      "Sekretuvar IgA",
      "$K_m$ değişmez, $V_{max}$ azalır",
      "Piridoksal fosfat"
    ],
    "correctIndex": 3
  },
  {
    "id": 86,
    "code": "S86",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Karboksilasyon reaksiyonlarında (Pirüvat karboksilaz, Asetil-KoA karboksilaz) görevli vitamin?",
    "answer": "Biyotin ($B_7$ / H vitamini).",
    "coreAnswer": "Biyotin",
    "keywords": [
      "Karboksilasyon",
      "reaksiyonlarında",
      "Pirüvat",
      "karboksilaz",
      "Asetil"
    ],
    "options": [
      "TIMP",
      "Tip II Kollajen",
      "Biyotin",
      "Glukoz-6-fosfataz"
    ],
    "correctIndex": 2
  },
  {
    "id": 87,
    "code": "S87",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Pernisiyöz anemide eksikliği görülen ve metilmalonil-KoA mutaz reaksiyonunda görev alan vitamin?",
    "answer": "Kobalamin ($B_{12}$ vitamini) — Eksikliğinde Hunter glossiti görülür.",
    "coreAnswer": "Kobalamin",
    "keywords": [
      "Pernisiyöz",
      "anemide",
      "eksikliği",
      "görülen",
      "metilmalonil"
    ],
    "options": [
      "C vitamini",
      "Kobalamin",
      "Glukoz-6-fosfat dehidrogenaz",
      "Laktoferrin"
    ],
    "correctIndex": 1
  },
  {
    "id": 88,
    "code": "S88",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tükürükte demiri bağlayarak bakterilerin demir kullanımını engelleyen doğal antibakteriyel protein?",
    "answer": "Laktoferrin.",
    "coreAnswer": "Laktoferrin",
    "keywords": [
      "Tükürükte",
      "demiri",
      "bağlayarak",
      "bakterilerin",
      "demir"
    ],
    "options": [
      "Laktoferrin",
      "Tip IV Kollajen",
      "Siyanür",
      "Osteokalsin"
    ],
    "correctIndex": 0
  },
  {
    "id": 89,
    "code": "S89",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tükürükte bakteri hücre duvarındaki peptidoglikanın $\\beta\\text{-(1,4)}$ glikozidik bağlarını kıran enzim?",
    "answer": "Lizozim (Muramidaz).",
    "coreAnswer": "Lizozim",
    "keywords": [
      "Tükürükte",
      "bakteri",
      "hücre",
      "duvarındaki",
      "peptidoglikanın"
    ],
    "options": [
      "HMG-KoA redüktaz",
      "Laktoferrin",
      "$K_m$ artar",
      "Lizozim"
    ],
    "correctIndex": 3
  },
  {
    "id": 90,
    "code": "S90",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyokimya",
    "subject": "Tıbbi Biyokimya",
    "branchNumber": 3,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Tükürükte en yüksek oranda bulunan immünglobulin hangisidir?",
    "answer": "Sekretuvar IgA (sIgA).",
    "coreAnswer": "Sekretuvar IgA",
    "keywords": [
      "Tükürükte",
      "yüksek",
      "oranda",
      "bulunan",
      "immünglobulin"
    ],
    "options": [
      "$\\alpha_1$-antitripsin",
      "Tip I Kollajen",
      "Sekretuvar IgA",
      "Glikojen fosforilaz"
    ],
    "correctIndex": 2
  },
  {
    "id": 91,
    "code": "S91",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Stafilokokal toksik şok sendromuna (TSS) en sık neden olan süperantijen toksini hangisidir?",
    "answer": "Enterotoksin F (TSST-1); daha az sıklıkta Enterotoksin B ve C.",
    "coreAnswer": "Enterotoksin F",
    "keywords": [
      "Stafilokokal",
      "toksik",
      "sendromuna",
      "süperantijen",
      "toksini"
    ],
    "options": [
      "Streptococcus pyogenes",
      "Enterotoksin F",
      "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika",
      "Koplik lekeleri"
    ],
    "correctIndex": 1
  },
  {
    "id": 92,
    "code": "S92",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Staphylococcus aureus’u diğer stafilokoklardan ayıran en temel patojenite testi nedir?",
    "answer": "Koagülaz pozitifliği ve mannitol fermantasyonu.",
    "coreAnswer": "Koagülaz pozitifliği ve mannitol fermantasyonu",
    "keywords": [
      "Staphylococcus",
      "aureus",
      "diğer",
      "stafilokoklardan",
      "ayıran"
    ],
    "options": [
      "Koagülaz pozitifliği ve mannitol fermantasyonu",
      "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
      "Coxsackie A virüsü",
      "Actinomyces viscosus"
    ],
    "correctIndex": 0
  },
  {
    "id": 93,
    "code": "S93",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Koronal diş çürüğünün başlangıcında en önemli etken olan bakteri hangisidir?",
    "answer": "Streptococcus mutans.",
    "coreAnswer": "Streptococcus mutans",
    "keywords": [
      "Koronal",
      "çürüğünün",
      "başlangıcında",
      "önemli",
      "etken"
    ],
    "options": [
      "Geobacillus stearothermophilus",
      "1. Dönem: Şankr",
      "Enterococcus faecalis ve Candida albicans",
      "Streptococcus mutans"
    ],
    "correctIndex": 3
  },
  {
    "id": 94,
    "code": "S94",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Çürük lezyonunun dentinde ilerlemesinden (progresyonundan) sorumlu asidojenik/asidürik basil?",
    "answer": "Lactobacillus türleri.",
    "coreAnswer": "Lactobacillus türleri",
    "keywords": [
      "Çürük",
      "lezyonunun",
      "dentinde",
      "ilerlemesinden",
      "progresyonundan"
    ],
    "options": [
      "Human Papilloma Virüs",
      "Streptococcus sanguinis",
      "Lactobacillus türleri",
      "Germ tüp"
    ],
    "correctIndex": 2
  },
  {
    "id": 95,
    "code": "S95",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Yaşlı hastalarda sement/kök yüzeyi çürüklerinden en sık izole edilen filamantöz bakteri?",
    "answer": "Actinomyces viscosus (Actinomyces naeslundii).",
    "coreAnswer": "Actinomyces viscosus",
    "keywords": [
      "Yaşlı",
      "hastalarda",
      "sement",
      "yüzeyi",
      "çürüklerinden"
    ],
    "options": [
      "Hutchinson kesicileri",
      "Actinomyces viscosus",
      "Actinomyces israelii",
      "Anti-HBs pozitifliği"
    ],
    "correctIndex": 1
  },
  {
    "id": 96,
    "code": "S96",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Dental plak biyofilminde erken (primer) kolonize olan öncü bakteri hangisidir?",
    "answer": "Streptococcus sanguinis (S. mitis, S. oralis).",
    "coreAnswer": "Streptococcus sanguinis",
    "keywords": [
      "Dental",
      "plak",
      "biyofilminde",
      "erken",
      "primer"
    ],
    "options": [
      "Streptococcus sanguinis",
      "Fusobacterium nucleatum",
      "Herpes Simpleks Virüs Tip 1",
      "Streptococcus mutans"
    ],
    "correctIndex": 0
  },
  {
    "id": 97,
    "code": "S97",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Plak biyofilminde erken ve geç kolonize olan bakteriler arasında \"köprü\" görevi gören bakteri?",
    "answer": "Fusobacterium nucleatum.",
    "coreAnswer": "Fusobacterium nucleatum",
    "keywords": [
      "Plak",
      "biyofilminde",
      "erken",
      "kolonize",
      "bakteriler"
    ],
    "options": [
      "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika",
      "Koplik lekeleri",
      "Fusobakteriler",
      "Fusobacterium nucleatum"
    ],
    "correctIndex": 3
  },
  {
    "id": 98,
    "code": "S98",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kronik periodontitiste \"Kırmızı Kompleks\" (Socransky) içinde yer alan üç bakteri hangileridir?",
    "answer": "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola.",
    "coreAnswer": "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
    "keywords": [
      "Kronik",
      "periodontitiste",
      "Kırmızı",
      "Kompleks",
      "Socransky"
    ],
    "options": [
      "Coxsackie A virüsü",
      "Lactobacillus türleri",
      "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
      "%5,25'lik Sodyum hipoklorit"
    ],
    "correctIndex": 2
  },
  {
    "id": 99,
    "code": "S99",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Lokalize agresif (evre III/IV, derece C molar-insiziv) periodontitiste anahtar patojen ve toksini nedir?",
    "answer": "Aggregatibacter actinomycetemcomitans (Aa) — Lökotoksin üretir.",
    "coreAnswer": "Aggregatibacter actinomycetemcomitans",
    "keywords": [
      "Lokalize",
      "agresif",
      "evre",
      "derece",
      "molar"
    ],
    "options": [
      "1. Dönem: Şankr",
      "Aggregatibacter actinomycetemcomitans",
      "Enterococcus faecalis ve Candida albicans",
      "Hepatit B Virüsü"
    ],
    "correctIndex": 1
  },
  {
    "id": 100,
    "code": "S100",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Gebelik gingivitisinde östrojen ve progesteronu K vitamini yerine büyüme faktörü olarak kullanan bakteri?",
    "answer": "Prevotella intermedia.",
    "coreAnswer": "Prevotella intermedia",
    "keywords": [
      "Gebelik",
      "gingivitisinde",
      "östrojen",
      "progesteronu",
      "vitamini"
    ],
    "options": [
      "Prevotella intermedia",
      "Actinomyces viscosus",
      "Germ tüp",
      "Koagülaz pozitifliği ve mannitol fermantasyonu"
    ],
    "correctIndex": 0
  },
  {
    "id": 101,
    "code": "S101",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Nekrotizan ülseratif gingivitis (NUG / Vincent anjini) etkeni olan simbiyotik bakteriler?",
    "answer": "Fusobakteriler (F. nucleatum) ve Spiroketler (Treponema vincentii).",
    "coreAnswer": "Fusobakteriler",
    "keywords": [
      "Nekrotizan",
      "ülseratif",
      "gingivitis",
      "Vincent",
      "anjini"
    ],
    "options": [
      "Actinomyces israelii",
      "Anti-HBs pozitifliği",
      "Aggregatibacter actinomycetemcomitans",
      "Fusobakteriler"
    ],
    "correctIndex": 3
  },
  {
    "id": 102,
    "code": "S102",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "İnatçı (refrakter) apikal periodontitiste ve yenilenen kanal tedavilerinde en sık izole edilen mikroorganizmalar?",
    "answer": "Enterococcus faecalis ve Candida albicans.",
    "coreAnswer": "Enterococcus faecalis ve Candida albicans",
    "keywords": [
      "İnatçı",
      "refrakter",
      "apikal",
      "periodontitiste",
      "yenilenen"
    ],
    "options": [
      "Herpes Simpleks Virüs Tip 1",
      "Streptococcus mutans",
      "Enterococcus faecalis ve Candida albicans",
      "Etilen oksit"
    ],
    "correctIndex": 2
  },
  {
    "id": 103,
    "code": "S103",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Çene-yüz bölgesinde \"sülfür granülleri\" içeren kronik drene sinüs traktları oluşturan anaerobik bakteri?",
    "answer": "Actinomyces israelii (Servikofasiyal aktinomikoz).",
    "coreAnswer": "Actinomyces israelii",
    "keywords": [
      "Çene",
      "bölgesinde",
      "sülfür",
      "granülleri",
      "içeren"
    ],
    "options": [
      "Koplik lekeleri",
      "Actinomyces israelii",
      "Prevotella intermedia",
      "Human Herpes Virüs 8"
    ],
    "correctIndex": 1
  },
  {
    "id": 104,
    "code": "S104",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Basınçlı buhar ile yapılan otoklav sterilizasyonunun standart sıcaklık ve süre parametreleri nedir?",
    "answer": "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika.",
    "coreAnswer": "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika",
    "keywords": [
      "Basınçlı",
      "buhar",
      "yapılan",
      "otoklav",
      "sterilizasyonunun"
    ],
    "options": [
      "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika",
      "Lactobacillus türleri",
      "%5,25'lik Sodyum hipoklorit",
      "Enterotoksin F"
    ],
    "correctIndex": 0
  },
  {
    "id": 105,
    "code": "S105",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Otoklav sterilizasyonunun biyolojik kontrolünde kullanılan en dirençli bakteri sporu hangisidir?",
    "answer": "Geobacillus stearothermophilus.",
    "coreAnswer": "Geobacillus stearothermophilus",
    "keywords": [
      "Otoklav",
      "sterilizasyonunun",
      "biyolojik",
      "kontrolünde",
      "kullanılan"
    ],
    "options": [
      "Fusobakteriler",
      "Hepatit B Virüsü",
      "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
      "Geobacillus stearothermophilus"
    ],
    "correctIndex": 3
  },
  {
    "id": 106,
    "code": "S106",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kuru sıcak hava (Pastör fırını) ve Etilen oksit sterilizasyonunun biyolojik indikatörü hangi bakteridir?",
    "answer": "Bacillus atrophaeus (B. subtilis).",
    "coreAnswer": "Bacillus atrophaeus",
    "keywords": [
      "Kuru",
      "sıcak",
      "hava",
      "Pastör",
      "fırını"
    ],
    "options": [
      "Germ tüp",
      "Koagülaz pozitifliği ve mannitol fermantasyonu",
      "Bacillus atrophaeus",
      "Geobacillus stearothermophilus"
    ],
    "correctIndex": 2
  },
  {
    "id": 107,
    "code": "S107",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Isıya duyarlı plastik ve optik aletlerin soğuk gaz sterilizasyonunda kullanılan alkilleyici ajan?",
    "answer": "Etilen oksit (veya Hidrojen peroksit gaz plazma / Perasetik asit).",
    "coreAnswer": "Etilen oksit",
    "keywords": [
      "Isıya",
      "duyarlı",
      "plastik",
      "optik",
      "aletlerin"
    ],
    "options": [
      "Anti-HBs pozitifliği",
      "Etilen oksit",
      "Aggregatibacter actinomycetemcomitans",
      "Epstein-Barr Virüsü"
    ],
    "correctIndex": 1
  },
  {
    "id": 108,
    "code": "S108",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Diş hekimliğinde kullanılan gutta-perka konlarının hızlı kimyasal dezenfeksiyonunda ne kullanılır?",
    "answer": "%5,25'lik Sodyum hipoklorit ($NaOCl$, 1 dakika).",
    "coreAnswer": "%5,25'lik Sodyum hipoklorit",
    "keywords": [
      "hekimliğinde",
      "kullanılan",
      "gutta",
      "perka",
      "konlarının"
    ],
    "options": [
      "%5,25'lik Sodyum hipoklorit",
      "Streptococcus mutans",
      "Bacillus atrophaeus",
      "Streptococcus pyogenes"
    ],
    "correctIndex": 0
  },
  {
    "id": 109,
    "code": "S109",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Candida albicans’ı diğer Candida türlerinden ayıran hızlı tanı testi nedir?",
    "answer": "Germ tüp (çimlenme borusu) testi ve klamidospor oluşumu.",
    "coreAnswer": "Germ tüp",
    "keywords": [
      "Candida",
      "albicans",
      "diğer",
      "türlerinden",
      "ayıran"
    ],
    "options": [
      "Prevotella intermedia",
      "Human Herpes Virüs 8",
      "Fusobacterium nucleatum",
      "Germ tüp"
    ],
    "correctIndex": 3
  },
  {
    "id": 110,
    "code": "S110",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Primer herpetik gingivostomatitin etkeni nedir ve hangi gangliyonda latent kalır?",
    "answer": "Herpes Simpleks Virüs Tip 1 (HSV-1); Ganglion trigeminale (Gasser) içinde latent kalır.",
    "coreAnswer": "Herpes Simpleks Virüs Tip 1",
    "keywords": [
      "Primer",
      "herpetik",
      "gingivostomatitin",
      "etkeni",
      "gangliyonda"
    ],
    "options": [
      "Etilen oksit",
      "Enterotoksin F",
      "Herpes Simpleks Virüs Tip 1",
      "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika"
    ],
    "correctIndex": 2
  },
  {
    "id": 111,
    "code": "S111",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Yumuşak damakta veziküllerle seyreden \"Herpangina\" ve \"El-Ayak-Ağız Hastalığı\" etkeni hangi virüstür?",
    "answer": "Coxsackie A virüsü (Enterovirüs).",
    "coreAnswer": "Coxsackie A virüsü",
    "keywords": [
      "Yumuşak",
      "damakta",
      "veziküllerle",
      "seyreden",
      "Herpangina"
    ],
    "options": [
      "Hepatit B Virüsü",
      "Coxsackie A virüsü",
      "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
      "Human Papilloma Virüs"
    ],
    "correctIndex": 1
  },
  {
    "id": 112,
    "code": "S112",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Ağız içinde karnabahar (cauliflower) görünümünde skuamöz papilloma ve verrüka vulgarise yol açan virüs?",
    "answer": "Human Papilloma Virüs (HPV - özellikle Tip 6 ve 11).",
    "coreAnswer": "Human Papilloma Virüs",
    "keywords": [
      "Ağız",
      "içinde",
      "karnabahar",
      "cauliflower",
      "görünümünde"
    ],
    "options": [
      "Human Papilloma Virüs",
      "Koagülaz pozitifliği ve mannitol fermantasyonu",
      "Geobacillus stearothermophilus",
      "Hutchinson kesicileri"
    ],
    "correctIndex": 0
  },
  {
    "id": 113,
    "code": "S113",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Nazofarenks karsinomu, Burkitt lenfoma ve oral tüylü lökoplaki (Hairy Leukoplakia) etkeni olan virüs?",
    "answer": "Epstein-Barr Virüsü (EBV / HHV-4).",
    "coreAnswer": "Epstein-Barr Virüsü",
    "keywords": [
      "Nazofarenks",
      "karsinomu",
      "Burkitt",
      "lenfoma",
      "oral"
    ],
    "options": [
      "Aggregatibacter actinomycetemcomitans",
      "Human Papilloma Virüs",
      "Streptococcus sanguinis",
      "Epstein-Barr Virüsü"
    ],
    "correctIndex": 3
  },
  {
    "id": 114,
    "code": "S114",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "HIV/AIDS hastalarında damakta morumsu vasküler lezyonlarla karakterize Kaposi sarkomunun etkeni?",
    "answer": "Human Herpes Virüs 8 (HHV-8).",
    "coreAnswer": "Human Herpes Virüs 8",
    "keywords": [
      "AIDS",
      "hastalarında",
      "damakta",
      "morumsu",
      "vasküler"
    ],
    "options": [
      "Bacillus atrophaeus",
      "Streptococcus pyogenes",
      "Human Herpes Virüs 8",
      "Actinomyces israelii"
    ],
    "correctIndex": 2
  },
  {
    "id": 115,
    "code": "S115",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Diş hekimliğinde iğne batması ile bulaşma riski en yüksek (%30) olan hepatit virüsü hangisidir?",
    "answer": "Hepatit B Virüsü (HBV — Zarflı DNA virüsü).",
    "coreAnswer": "Hepatit B Virüsü",
    "keywords": [
      "hekimliğinde",
      "iğne",
      "batması",
      "bulaşma",
      "riski"
    ],
    "options": [
      "Epstein-Barr Virüsü",
      "Hepatit B Virüsü",
      "Fusobacterium nucleatum",
      "Herpes Simpleks Virüs Tip 1"
    ],
    "correctIndex": 1
  },
  {
    "id": 116,
    "code": "S116",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Aşılanmış ve bağışıklık kazanmış bir diş hekiminde tek başına pozitif olması gereken HBV serolojik belirteci?",
    "answer": "Anti-HBs pozitifliği.",
    "coreAnswer": "Anti-HBs pozitifliği",
    "keywords": [
      "Aşılanmış",
      "bağışıklık",
      "kazanmış",
      "hekiminde",
      "başına"
    ],
    "options": [
      "Anti-HBs pozitifliği",
      "Enterotoksin F",
      "$121\\text{ }^\\circ\\text{C}$'de 15–20 dakika veya $134\\text{ }^\\circ\\text{C}$'de 3–5 dakika",
      "1. Dönem: Şankr"
    ],
    "correctIndex": 0
  },
  {
    "id": 117,
    "code": "S117",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Kızamıkta prodromal dönemde bukkal mukozada stenon kanalı karşısında görülen patognomonik lezyon?",
    "answer": "Koplik lekeleri.",
    "coreAnswer": "Koplik lekeleri",
    "keywords": [
      "Kızamıkta",
      "prodromal",
      "dönemde",
      "bukkal",
      "mukozada"
    ],
    "options": [
      "Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola",
      "Coxsackie A virüsü",
      "Actinomyces viscosus",
      "Koplik lekeleri"
    ],
    "correctIndex": 3
  },
  {
    "id": 118,
    "code": "S118",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Sifiliz 1. dönemde ağızda görülen ağrısız ülser ve 2. dönemde görülen bulaşıcı plak lezyonu nedir?",
    "answer": "1. Dönem: Şankr (Chancre); 2. Dönem: Müköz plak (Mucous patch); Etken: Treponema pallidum.",
    "coreAnswer": "1. Dönem: Şankr",
    "keywords": [
      "Sifiliz",
      "dönemde",
      "ağızda",
      "görülen",
      "ağrısız"
    ],
    "options": [
      "Geobacillus stearothermophilus",
      "Hutchinson kesicileri",
      "1. Dönem: Şankr",
      "Enterococcus faecalis ve Candida albicans"
    ],
    "correctIndex": 2
  },
  {
    "id": 119,
    "code": "S119",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Konjenital sifilizde daimi kesici ve birinci büyük azı dişlerinde görülen karakteristik malformasyon?",
    "answer": "Hutchinson kesicileri (tornavida/çentikli) ve Mulberry (dut) molarlar.",
    "coreAnswer": "Hutchinson kesicileri",
    "keywords": [
      "Konjenital",
      "sifilizde",
      "daimi",
      "kesici",
      "birinci"
    ],
    "options": [
      "Human Papilloma Virüs",
      "Hutchinson kesicileri",
      "Streptococcus sanguinis",
      "Germ tüp"
    ],
    "correctIndex": 1
  },
  {
    "id": 120,
    "code": "S120",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "mikrobiyoloji",
    "subject": "Tıbbi Mikrobiyoloji",
    "branchNumber": 4,
    "osymWeight": "6 Soru",
    "osymPercent": "15%",
    "question": "Romatizmal ateş ve akut glomerülonefrite yol açan, basitrasine duyarlı $\\beta$-hemolitik streptokok?",
    "answer": "Streptococcus pyogenes (A grubu $\\beta$-hemolitik streptokok).",
    "coreAnswer": "Streptococcus pyogenes",
    "keywords": [
      "Romatizmal",
      "ateş",
      "akut",
      "glomerülonefrite",
      "açan"
    ],
    "options": [
      "Streptococcus pyogenes",
      "Hutchinson kesicileri",
      "Actinomyces israelii",
      "Anti-HBs pozitifliği"
    ],
    "correctIndex": 0
  },
  {
    "id": 121,
    "code": "S121",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Minenin kırılmasını engelleyecek şekilde prizma gruplarının değişik yönlerde yerleşmesiyle oluşan optik görüntüye ne ad verilir?",
    "answer": "Hunter-Schreger bandı.",
    "coreAnswer": "Hunter-Schreger bandı",
    "keywords": [
      "Minenin",
      "kırılmasını",
      "engelleyecek",
      "şekilde",
      "prizma"
    ],
    "options": [
      "İnterglobüler dentin",
      "Çan",
      "Sirkumvallat",
      "Hunter-Schreger bandı"
    ],
    "correctIndex": 3
  },
  {
    "id": 122,
    "code": "S122",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Minede ritmik kalsifikasyon duraklamalarını gösteren ve yüzeyde perikimata olarak sonlanan büyüme çizgileri?",
    "answer": "Retzius çizgileri.",
    "coreAnswer": "Retzius çizgileri",
    "keywords": [
      "Minede",
      "ritmik",
      "kalsifikasyon",
      "duraklamalarını",
      "gösteren"
    ],
    "options": [
      "Sirkumvallat",
      "Tomes’un granüler tabakası",
      "Retzius çizgileri",
      "İç mine epiteli ve dış mine epiteli"
    ],
    "correctIndex": 2
  },
  {
    "id": 123,
    "code": "S123",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Doğum sırasındaki fizyolojik travmaya bağlı olarak süt dişleri ve 1. daimi molarda görülen genişlemiş Retzius çizgisi?",
    "answer": "Neonatal çizgi.",
    "coreAnswer": "Neonatal çizgi",
    "keywords": [
      "Doğum",
      "sırasındaki",
      "fizyolojik",
      "travmaya",
      "bağlı"
    ],
    "options": [
      "İç mine epiteli ve dış mine epiteli",
      "Neonatal çizgi",
      "Hunter-Schreger bandı",
      "Meckel kıkırdağı"
    ],
    "correctIndex": 1
  },
  {
    "id": 124,
    "code": "S124",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Odontoblast uzantılarının mine-dentin sınırını geçerek mine içine uzanmasıyla oluşan yapılara ne denir?",
    "answer": "Mine iğcikleri (Enamel spindles).",
    "coreAnswer": "Mine iğcikleri",
    "keywords": [
      "Odontoblast",
      "uzantılarının",
      "mine",
      "dentin",
      "sınırını"
    ],
    "options": [
      "Mine iğcikleri",
      "Meckel kıkırdağı",
      "Malassez epitel artıkları",
      "Retzius çizgileri"
    ],
    "correctIndex": 0
  },
  {
    "id": 125,
    "code": "S125",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Diş gelişiminde mineyi üreten ameloblastlar hangi embriyolojik yaprak kökenlidir?",
    "answer": "Oral ektoderm (Mine organının iç mine epiteli).",
    "coreAnswer": "Oral ektoderm",
    "keywords": [
      "gelişiminde",
      "mineyi",
      "üreten",
      "ameloblastlar",
      "embriyolojik"
    ],
    "options": [
      "Retzius çizgileri",
      "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu",
      "Serres epitel artıkları",
      "Oral ektoderm"
    ],
    "correctIndex": 3
  },
  {
    "id": 126,
    "code": "S126",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dentin, pulpa, sement, periodontal ligament ve alveol kemiği hangi embriyolojik hücrelerden köken alır?",
    "answer": "Ektomezenşim (Nöral krest hücreleri).",
    "coreAnswer": "Ektomezenşim",
    "keywords": [
      "Dentin",
      "pulpa",
      "sement",
      "periodontal",
      "ligament"
    ],
    "options": [
      "Serres epitel artıkları",
      "Neonatal çizgi",
      "Ektomezenşim",
      "Keratinize"
    ],
    "correctIndex": 2
  },
  {
    "id": 127,
    "code": "S127",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dişin morfolojik kuron şeklinin belirlendiği odontogenez aşaması hangisidir?",
    "answer": "Çan (Bell) evresi (Histodiferansiyasyon ve morfodiferansiyasyon).",
    "coreAnswer": "Çan",
    "keywords": [
      "Dişin",
      "morfolojik",
      "kuron",
      "şeklinin",
      "belirlendiği"
    ],
    "options": [
      "Keratinize",
      "Çan",
      "von Ebner",
      "Mine iğcikleri"
    ],
    "correctIndex": 1
  },
  {
    "id": 128,
    "code": "S128",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kök gelişimini yönlendiren Hertwig Epitelyal Kök Kını (HEKK) hangi iki tabakadan oluşur?",
    "answer": "İç mine epiteli ve dış mine epiteli (Stellat retikulum ve stratum intermedium içermez).",
    "coreAnswer": "İç mine epiteli ve dış mine epiteli",
    "keywords": [
      "gelişimini",
      "yönlendiren",
      "Hertwig",
      "Epitelyal",
      "Kını"
    ],
    "options": [
      "İç mine epiteli ve dış mine epiteli",
      "Mine iğcikleri",
      "Non-keratinize çok katlı yassı epiteldir",
      "Peritübüler"
    ],
    "correctIndex": 0
  },
  {
    "id": 129,
    "code": "S129",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Hertwig kök kınının parçalanmasıyla periodontal ligamentte kalan ve radiküler kistlere kaynaklık eden epitel artıkları?",
    "answer": "Malassez epitel artıkları.",
    "coreAnswer": "Malassez epitel artıkları",
    "keywords": [
      "Hertwig",
      "kınının",
      "parçalanmasıyla",
      "periodontal",
      "ligamentte"
    ],
    "options": [
      "Peritübüler",
      "Oral ektoderm",
      "Filiform papilla",
      "Malassez epitel artıkları"
    ],
    "correctIndex": 3
  },
  {
    "id": 130,
    "code": "S130",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dental laminanın parçalanmasıyla diş etinde kalan ve erüpsiyon kisti / Bohn nodüllerine yol açan kalıntılar?",
    "answer": "Serres epitel artıkları.",
    "coreAnswer": "Serres epitel artıkları",
    "keywords": [
      "Dental",
      "laminanın",
      "parçalanmasıyla",
      "etinde",
      "kalan"
    ],
    "options": [
      "Filiform papilla",
      "İnterglobüler dentin",
      "Serres epitel artıkları",
      "Ektomezenşim"
    ],
    "correctIndex": 2
  },
  {
    "id": 131,
    "code": "S131",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dentinogenezde ilk oluşan, manto dentini dışındaki sirkumpulpal dentinin kalsifikasyon çizgilerine ne denir?",
    "answer": "von Ebner (günlük) ve Owen (kontur/hipomineralize) çizgileri.",
    "coreAnswer": "von Ebner",
    "keywords": [
      "Dentinogenezde",
      "oluşan",
      "manto",
      "dentini",
      "dışındaki"
    ],
    "options": [
      "Ektomezenşim",
      "von Ebner",
      "Sirkumvallat",
      "Tomes’un granüler tabakası"
    ],
    "correctIndex": 1
  },
  {
    "id": 132,
    "code": "S132",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dentin tübülünün hemen çevresini saran, en yüksek oranda mineralize olmuş dentin tipi hangisidir?",
    "answer": "Peritübüler (intratübüler) dentin.",
    "coreAnswer": "Peritübüler",
    "keywords": [
      "Dentin",
      "tübülünün",
      "hemen",
      "çevresini",
      "saran"
    ],
    "options": [
      "Peritübüler",
      "Tomes’un granüler tabakası",
      "Çan",
      "Hunter-Schreger bandı"
    ],
    "correctIndex": 0
  },
  {
    "id": 133,
    "code": "S133",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Küresel kalsifikasyon odaklarının (kalkosferit) tam birleşememesi sonucu oluşan hipomineralize dentin alanı?",
    "answer": "İnterglobüler dentin.",
    "coreAnswer": "İnterglobüler dentin",
    "keywords": [
      "Küresel",
      "kalsifikasyon",
      "odaklarının",
      "kalkosferit",
      "birleşememesi"
    ],
    "options": [
      "Hunter-Schreger bandı",
      "Meckel kıkırdağı",
      "İç mine epiteli ve dış mine epiteli",
      "İnterglobüler dentin"
    ],
    "correctIndex": 3
  },
  {
    "id": 134,
    "code": "S134",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kök dentininde sement-dentin sınırının hemen altında yer alan karanlık, granüler görünümlü tabaka?",
    "answer": "Tomes’un granüler tabakası.",
    "coreAnswer": "Tomes’un granüler tabakası",
    "keywords": [
      "dentininde",
      "sement",
      "dentin",
      "sınırının",
      "hemen"
    ],
    "options": [
      "İç mine epiteli ve dış mine epiteli",
      "Retzius çizgileri",
      "Tomes’un granüler tabakası",
      "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu"
    ],
    "correctIndex": 2
  },
  {
    "id": 135,
    "code": "S135",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Birinci faringeal (brankiyal) arkın kıkırdağına ne ad verilir ve hangi kulak kemikçiklerini oluşturur?",
    "answer": "Meckel kıkırdağı; Malleus ve Incus’u oluşturur.",
    "coreAnswer": "Meckel kıkırdağı",
    "keywords": [
      "Birinci",
      "faringeal",
      "brankiyal",
      "arkın",
      "kıkırdağına"
    ],
    "options": [
      "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu",
      "Meckel kıkırdağı",
      "Malassez epitel artıkları",
      "Neonatal çizgi"
    ],
    "correctIndex": 1
  },
  {
    "id": 136,
    "code": "S136",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "İkinci faringeal arkın kıkırdağı (Reichert kıkırdağı) hangi yapıları oluşturur?",
    "answer": "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu.",
    "coreAnswer": "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu",
    "keywords": [
      "İkinci",
      "faringeal",
      "arkın",
      "kıkırdağı",
      "Reichert"
    ],
    "options": [
      "Stapes, processus styloideus ve hyoid kemiğin küçük boynuzu",
      "Neonatal çizgi",
      "Keratinize",
      "Serres epitel artıkları"
    ],
    "correctIndex": 0
  },
  {
    "id": 137,
    "code": "S137",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Diş etinin (gingiva) ve sert damağın döşeyici epitel tipi nedir?",
    "answer": "Keratinize (veya parakeratinize) çok katlı yassı epitel (Çiğneyici mukoza).",
    "coreAnswer": "Keratinize",
    "keywords": [
      "etinin",
      "gingiva",
      "sert",
      "damağın",
      "döşeyici"
    ],
    "options": [
      "Serres epitel artıkları",
      "Mine iğcikleri",
      "Non-keratinize çok katlı yassı epiteldir",
      "Keratinize"
    ],
    "correctIndex": 3
  },
  {
    "id": 138,
    "code": "S138",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Diş yüzeyine hemidesmozomlarla bağlanan birleşim epitelinin (junctional epithelium) özelliği nedir?",
    "answer": "Non-keratinize çok katlı yassı epiteldir; rete-peg içermez ve hücre yenilenme hızı çok yüksektir.",
    "coreAnswer": "Non-keratinize çok katlı yassı epiteldir",
    "keywords": [
      "yüzeyine",
      "hemidesmozomlarla",
      "bağlanan",
      "birleşim",
      "epitelinin"
    ],
    "options": [
      "Keratinize",
      "von Ebner",
      "Non-keratinize çok katlı yassı epiteldir",
      "Oral ektoderm"
    ],
    "correctIndex": 2
  },
  {
    "id": 139,
    "code": "S139",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dilde tat tomurcuğu içermeyen ancak en fazla sayıda bulunan mekanik papilla hangisidir?",
    "answer": "Filiform papilla.",
    "coreAnswer": "Filiform papilla",
    "keywords": [
      "Dilde",
      "tomurcuğu",
      "içermeyen",
      "ancak",
      "fazla"
    ],
    "options": [
      "Oral ektoderm",
      "Filiform papilla",
      "Non-keratinize çok katlı yassı epiteldir",
      "Peritübüler"
    ],
    "correctIndex": 1
  },
  {
    "id": 140,
    "code": "S140",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "histoloji",
    "subject": "Histoloji ve Embriyoloji",
    "branchNumber": 5,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dil kökünde V şeklinde dizilen, 8–12 adet olan ve von Ebner seröz bezlerinin açıldığı büyük papillalar?",
    "answer": "Sirkumvallat (Vallat) papillalar.",
    "coreAnswer": "Sirkumvallat",
    "keywords": [
      "kökünde",
      "şeklinde",
      "dizilen",
      "adet",
      "Ebner"
    ],
    "options": [
      "Sirkumvallat",
      "Peritübüler",
      "Ektomezenşim",
      "Filiform papilla"
    ],
    "correctIndex": 0
  },
  {
    "id": 141,
    "code": "S141",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çenelerde en sık görülen odontojenik kist hangisidir ve temel tanı kriteri nedir?",
    "answer": "Radiküler (Apikal) kist; mutlaka non-vital (cansız) bir dişin apeksinde gelişir (İnflamatuar kist).",
    "coreAnswer": "Radiküler",
    "keywords": [
      "Çenelerde",
      "görülen",
      "odontojenik",
      "kist",
      "temel"
    ],
    "options": [
      "Gorlin-Goltz Sendromu",
      "Eritroplaki",
      "Periferde ters polarizasyon gösteren",
      "Radiküler"
    ],
    "correctIndex": 3
  },
  {
    "id": 142,
    "code": "S142",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çekim sonrası alveol kemiği içinde kalan radiküler kiste ne ad verilir?",
    "answer": "Rezidüel kist.",
    "coreAnswer": "Rezidüel kist",
    "keywords": [
      "Çekim",
      "sonrası",
      "alveol",
      "kemiği",
      "içinde"
    ],
    "options": [
      "Sementoblastoma",
      "Bacak derin ven trombozu",
      "Rezidüel kist",
      "Warthin tümörü"
    ],
    "correctIndex": 2
  },
  {
    "id": 143,
    "code": "S143",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Gömülü bir dişin (en sık alt 3. molar veya üst kanin) kuronunu mine-sement sınırından saran gelişimsel kist?",
    "answer": "Dentigeröz (Foliküler) kist.",
    "coreAnswer": "Dentigeröz",
    "keywords": [
      "Gömülü",
      "dişin",
      "molar",
      "kanin",
      "kuronunu"
    ],
    "options": [
      "Periferik Dev Hücreli Granülom",
      "Dentigeröz",
      "Adenomatoid Odontojenik Tümör",
      "Mukosel"
    ],
    "correctIndex": 1
  },
  {
    "id": 144,
    "code": "S144",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Yüksek nüks oranına sahip, parakeratinize oluklu (corrugated) epitel ve bazal palizatlanma gösteren gelişimsel kist?",
    "answer": "Odontojenik Keratokist (OKK).",
    "coreAnswer": "Odontojenik Keratokist",
    "keywords": [
      "Yüksek",
      "nüks",
      "oranına",
      "sahip",
      "parakeratinize"
    ],
    "options": [
      "Odontojenik Keratokist",
      "Radiküler",
      "Mukoepidermoid karsinom",
      "Dentigeröz"
    ],
    "correctIndex": 0
  },
  {
    "id": 145,
    "code": "S145",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çoklu odontojenik keratokist, bazal hücreli karsinom ve bifid kaburga ile seyreden otozomal dominant sendrom?",
    "answer": "Gorlin-Goltz Sendromu (PTCH1 gen mutasyonu).",
    "coreAnswer": "Gorlin-Goltz Sendromu",
    "keywords": [
      "Çoklu",
      "odontojenik",
      "keratokist",
      "bazal",
      "hücreli"
    ],
    "options": [
      "Kalsifiye Epitelyal Odontojenik Tümör",
      "Ranula",
      "Odontoma",
      "Gorlin-Goltz Sendromu"
    ],
    "correctIndex": 3
  },
  {
    "id": 146,
    "code": "S146",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çenelerde en sık görülen klinik olarak anlamlı, lokal invaziv epitelyal odontojenik tümör hangisidir?",
    "answer": "Ameloblastoma (En sık mandibula molar-ramus bölgesinde, \"sabun köpüğü\" veya \"bal peteği\" radyolusensi).",
    "coreAnswer": "Ameloblastoma",
    "keywords": [
      "Çenelerde",
      "görülen",
      "klinik",
      "anlamlı",
      "lokal"
    ],
    "options": [
      "Adenoid kistik karsinom",
      "Odontojenik Keratokist",
      "Ameloblastoma",
      "Eritroplaki"
    ],
    "correctIndex": 2
  },
  {
    "id": 147,
    "code": "S147",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Ameloblastomanın histopatolojisinde mine organına benzeyen karakteristik hücresel dizilim nasıldır?",
    "answer": "Periferde ters polarizasyon gösteren (çekirdeği bazal membrandan uzaklaşmış) kolumnar hücreler, merkezde stellat retikulum benzeri doku.",
    "coreAnswer": "Periferde ters polarizasyon gösteren",
    "keywords": [
      "Ameloblastomanın",
      "histopatolojisinde",
      "mine",
      "organına",
      "benzeyen"
    ],
    "options": [
      "Oral Liken Planus",
      "Periferde ters polarizasyon gösteren",
      "Sementoblastoma",
      "Bacak derin ven trombozu"
    ],
    "correctIndex": 1
  },
  {
    "id": 148,
    "code": "S148",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Genç kadınlarda üst çene kanin bölgesinde gömülü dişle ilişkili \"2/3 tümörü\" olarak bilinen tümör?",
    "answer": "Adenomatoid Odontojenik Tümör (AOT) — Rozet/duktus benzeri yapılar içerir, kapsüllüdür, nüks etmez.",
    "coreAnswer": "Adenomatoid Odontojenik Tümör",
    "keywords": [
      "Genç",
      "kadınlarda",
      "çene",
      "kanin",
      "bölgesinde"
    ],
    "options": [
      "Adenomatoid Odontojenik Tümör",
      "Gorlin-Goltz Sendromu",
      "Periferik Dev Hücreli Granülom",
      "Periferde ters polarizasyon gösteren"
    ],
    "correctIndex": 0
  },
  {
    "id": 149,
    "code": "S149",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Histopatolojisinde \"Liesegang halkaları\" (kalsifikasyon) ve amiloid birikimi (Kongo kırmızısı +) görülen tümör?",
    "answer": "Kalsifiye Epitelyal Odontojenik Tümör (Pindborg tümörü).",
    "coreAnswer": "Kalsifiye Epitelyal Odontojenik Tümör",
    "keywords": [
      "Histopatolojisinde",
      "Liesegang",
      "halkaları",
      "kalsifikasyon",
      "amiloid"
    ],
    "options": [
      "Pleomorfik adenom",
      "Radiküler",
      "Mukoepidermoid karsinom",
      "Kalsifiye Epitelyal Odontojenik Tümör"
    ],
    "correctIndex": 3
  },
  {
    "id": 150,
    "code": "S150",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Histolojisinde \"hayalet hücreler\" (ghost cells) ve distrofik kalsifikasyon görülen kistik/tümöral lezyon?",
    "answer": "Kalsifiye Odontojenik Kist (Gorlin kisti).",
    "coreAnswer": "Kalsifiye Odontojenik Kist",
    "keywords": [
      "Histolojisinde",
      "hayalet",
      "hücreler",
      "ghost",
      "cells"
    ],
    "options": [
      "Santral Dev Hücreli Granülom",
      "Adenomatoid Odontojenik Tümör",
      "Kalsifiye Odontojenik Kist",
      "Ranula"
    ],
    "correctIndex": 2
  },
  {
    "id": 151,
    "code": "S151",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çenelerde en sık görülen odontojenik tümör (hamartom) hangisidir?",
    "answer": "Odontoma (Kompound odontoma: ön bölgede dişçikler; Kompleks odontoma: arka bölgede düzensiz kalsifiye kitle).",
    "coreAnswer": "Odontoma",
    "keywords": [
      "Çenelerde",
      "görülen",
      "odontojenik",
      "tümör",
      "hamartom"
    ],
    "options": [
      "Rezidüel kist",
      "Odontoma",
      "Adenoid kistik karsinom",
      "Odontojenik Keratokist"
    ],
    "correctIndex": 1
  },
  {
    "id": 152,
    "code": "S152",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Vital bir alt birinci molar dişin köküne kaynaşmış, radyolüsent haleyle çevrili radyoopak kitle?",
    "answer": "Sementoblastoma.",
    "coreAnswer": "Sementoblastoma",
    "keywords": [
      "Vital",
      "birinci",
      "molar",
      "dişin",
      "köküne"
    ],
    "options": [
      "Sementoblastoma",
      "Kalsifiye Epitelyal Odontojenik Tümör",
      "Oral Liken Planus",
      "Odontoma"
    ],
    "correctIndex": 0
  },
  {
    "id": 153,
    "code": "S153",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Tükürük bezlerinin (hem majör hem minör) en sık görülen benign tümörü hangisidir?",
    "answer": "Pleomorfik adenom (Miks tümör).",
    "coreAnswer": "Pleomorfik adenom",
    "keywords": [
      "Tükürük",
      "bezlerinin",
      "majör",
      "minör",
      "görülen"
    ],
    "options": [
      "Skuamöz Hücreli Karsinom",
      "Gorlin-Goltz Sendromu",
      "Periferik Dev Hücreli Granülom",
      "Pleomorfik adenom"
    ],
    "correctIndex": 3
  },
  {
    "id": 154,
    "code": "S154",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sadece parotis bezinde görülen, sigara içen erkeklerde bilateral olabilen, lenfoid stroma içeren tümör?",
    "answer": "Warthin tümörü (Papiller kistadenoma lenfomatozum).",
    "coreAnswer": "Warthin tümörü",
    "keywords": [
      "Sadece",
      "parotis",
      "bezinde",
      "görülen",
      "sigara"
    ],
    "options": [
      "Pemfigus Vulgaris",
      "Sementoblastoma",
      "Warthin tümörü",
      "Radiküler"
    ],
    "correctIndex": 2
  },
  {
    "id": 155,
    "code": "S155",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Tükürük bezlerinin en sık görülen malign tümörü (müsin üreten, epidermoid ve ara hücrelerden oluşan)?",
    "answer": "Mukoepidermoid karsinom.",
    "coreAnswer": "Mukoepidermoid karsinom",
    "keywords": [
      "Tükürük",
      "bezlerinin",
      "görülen",
      "malign",
      "tümörü"
    ],
    "options": [
      "Ameloblastoma",
      "Mukoepidermoid karsinom",
      "Santral Dev Hücreli Granülom",
      "Adenomatoid Odontojenik Tümör"
    ],
    "correctIndex": 1
  },
  {
    "id": 156,
    "code": "S156",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Damakta sık görülen, \"İsviçre peyniri\" (cribriform) paternli ve yüksek perinöral invazyon (ağrı) yapan malign tümör?",
    "answer": "Adenoid kistik karsinom.",
    "coreAnswer": "Adenoid kistik karsinom",
    "keywords": [
      "Damakta",
      "görülen",
      "İsviçre",
      "peyniri",
      "cribriform"
    ],
    "options": [
      "Adenoid kistik karsinom",
      "Pleomorfik adenom",
      "Rezidüel kist",
      "Mukoepidermoid karsinom"
    ],
    "correctIndex": 0
  },
  {
    "id": 157,
    "code": "S157",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Oral kavitenin en sık (%90+) görülen malign tümörü ve en sık yerleşim yeri neresidir?",
    "answer": "Skuamöz Hücreli Karsinom (SHK); ağız içinde en sık dilin posterolateral kenarı ve ağız tabanı.",
    "coreAnswer": "Skuamöz Hücreli Karsinom",
    "keywords": [
      "Oral",
      "kavitenin",
      "görülen",
      "malign",
      "tümörü"
    ],
    "options": [
      "Mukosel",
      "Kalsifiye Epitelyal Odontojenik Tümör",
      "Oral Liken Planus",
      "Skuamöz Hücreli Karsinom"
    ],
    "correctIndex": 3
  },
  {
    "id": 158,
    "code": "S158",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Malign dönüşüm potansiyeli en yüksek olan oral prekanseröz (potansiyel malign) lezyon hangisidir?",
    "answer": "Eritroplaki (ve Proliferatif verrüköz lökoplaki).",
    "coreAnswer": "Eritroplaki",
    "keywords": [
      "Malign",
      "dönüşüm",
      "potansiyeli",
      "yüksek",
      "oral"
    ],
    "options": [
      "Dentigeröz",
      "Adenoid kistik karsinom",
      "Eritroplaki",
      "Gorlin-Goltz Sendromu"
    ],
    "correctIndex": 2
  },
  {
    "id": 159,
    "code": "S159",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sadece diş eti / alveol kretinde görülen, morumsu-kırmızı renkli, çok çekirdekli dev hücreler içeren reaktif lezyon?",
    "answer": "Periferik Dev Hücreli Granülom.",
    "coreAnswer": "Periferik Dev Hücreli Granülom",
    "keywords": [
      "Sadece",
      "alveol",
      "kretinde",
      "görülen",
      "morumsu"
    ],
    "options": [
      "Kalsifiye Odontojenik Kist",
      "Periferik Dev Hücreli Granülom",
      "Pemfigus Vulgaris",
      "Sementoblastoma"
    ],
    "correctIndex": 1
  },
  {
    "id": 160,
    "code": "S160",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Hiperparatiroidizmde (\"Brown tümör\") histolojik olarak tamamen aynı görüntüyü veren kemik içi lezyon?",
    "answer": "Santral Dev Hücreli Granülom (Ayırıcı tanıda serum $Ca^{2+}$, $PO_4^{3-}$ ve PTH bakılır).",
    "coreAnswer": "Santral Dev Hücreli Granülom",
    "keywords": [
      "Hiperparatiroidizmde",
      "Brown",
      "tümör",
      "histolojik",
      "tamamen"
    ],
    "options": [
      "Santral Dev Hücreli Granülom",
      "Skuamöz Hücreli Karsinom",
      "Ameloblastoma",
      "Periferik Dev Hücreli Granülom"
    ],
    "correctIndex": 0
  },
  {
    "id": 161,
    "code": "S161",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Alt dudakta minör tükürük bezi kanalının travmatik yırtılması sonucu müsin birikimiyle oluşan yalancı kist?",
    "answer": "Mukosel (Ekstravazasyon mukoseli — Epitel döşemesi yoktur!).",
    "coreAnswer": "Mukosel",
    "keywords": [
      "dudakta",
      "minör",
      "tükürük",
      "bezi",
      "kanalının"
    ],
    "options": [
      "Bacak derin ven trombozu",
      "Pleomorfik adenom",
      "Rezidüel kist",
      "Mukosel"
    ],
    "correctIndex": 3
  },
  {
    "id": 162,
    "code": "S162",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sublingual bez kaynaklı olarak ağız tabanında oluşan, kurbağa karnı görünümündeki büyük mukosele ne denir?",
    "answer": "Ranula (m. mylohyoideus’u geçip boyna inerse \"Plunging ranula\").",
    "coreAnswer": "Ranula",
    "keywords": [
      "Sublingual",
      "kaynaklı",
      "ağız",
      "tabanında",
      "oluşan"
    ],
    "options": [
      "Periferde ters polarizasyon gösteren",
      "Santral Dev Hücreli Granülom",
      "Ranula",
      "Kalsifiye Epitelyal Odontojenik Tümör"
    ],
    "correctIndex": 2
  },
  {
    "id": 163,
    "code": "S163",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Bukkal mukozada dantel tarzında beyaz çizgilerle (Wickham striaları) seyreden, bazal tabakada testere dişi dejenerasyonu ve Civatte cisimcikleri gösteren mukokutanöz hastalık?",
    "answer": "Oral Liken Planus.",
    "coreAnswer": "Oral Liken Planus",
    "keywords": [
      "Bukkal",
      "mukozada",
      "dantel",
      "tarzında",
      "beyaz"
    ],
    "options": [
      "Warthin tümörü",
      "Oral Liken Planus",
      "Dentigeröz",
      "Adenoid kistik karsinom"
    ],
    "correctIndex": 1
  },
  {
    "id": 164,
    "code": "S164",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "İntraepitelyal desmozomlara (Desmoglein-3) karşı otoantikor gelişen, akantoliz, Tzanck hücreleri ve Nikolsky pozitifliği gösteren vezikülobüllöz hastalık?",
    "answer": "Pemfigus Vulgaris (İlk bulgular genellikle ağız içindedir).",
    "coreAnswer": "Pemfigus Vulgaris",
    "keywords": [
      "İntraepitelyal",
      "desmozomlara",
      "Desmoglein",
      "karşı",
      "otoantikor"
    ],
    "options": [
      "Pemfigus Vulgaris",
      "Mukosel",
      "Kalsifiye Odontojenik Kist",
      "Oral Liken Planus"
    ],
    "correctIndex": 0
  },
  {
    "id": 165,
    "code": "S165",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "patoloji",
    "subject": "Tıbbi Patoloji",
    "branchNumber": 6,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Akciğer tromboembolisine en sık kaynaklık eden patolojik durum nedir?",
    "answer": "Bacak derin ven trombozu (DVT); cerrahi, malignite ve gebelik tromboz riskini artırırken derin deniz dalışı hava (azot) embolisi yapar.",
    "coreAnswer": "Bacak derin ven trombozu",
    "keywords": [
      "Akciğer",
      "tromboembolisine",
      "kaynaklık",
      "eden",
      "patolojik"
    ],
    "options": [
      "Odontojenik Keratokist",
      "Skuamöz Hücreli Karsinom",
      "Ameloblastoma",
      "Bacak derin ven trombozu"
    ],
    "correctIndex": 3
  },
  {
    "id": 166,
    "code": "S166",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Lokal anesteziklerin sinir membranındaki temel etki mekanizması nedir?",
    "answer": "Voltaj kapılı $Na^+$ kanallarını hücrenin iç (intrasellüler) yüzünden bloke ederek depolarizasyonu önlemek.",
    "coreAnswer": "Voltaj kapılı $Na^+$ kanallarını hücrenin iç",
    "keywords": [
      "Lokal",
      "anesteziklerin",
      "sinir",
      "membranındaki",
      "temel"
    ],
    "options": [
      "Parasetamol",
      "Pilokarpin ve Sevimelin",
      "Voltaj kapılı $Na^+$ kanallarını hücrenin iç",
      "Klindamisin"
    ],
    "correctIndex": 2
  },
  {
    "id": 167,
    "code": "S167",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Lokal anesteziklerin dokuyu geçmesini sağlayan ve reseptöre bağlanan formları hangileridir?",
    "answer": "Non-iyonize (baz) form membranı geçer; İyonize (katyonik) form kanalın iç yüzüne bağlanır.",
    "coreAnswer": "Non-iyonize",
    "keywords": [
      "Lokal",
      "anesteziklerin",
      "dokuyu",
      "geçmesini",
      "sağlayan"
    ],
    "options": [
      "Karbamazepin",
      "Non-iyonize",
      "Bupivakain",
      "Nalokson"
    ],
    "correctIndex": 1
  },
  {
    "id": 168,
    "code": "S168",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Akut apikal apseli (asidik pH) dokuda lokal anestezinin tutmama nedeni nedir?",
    "answer": "Asidik ortamda iyonize form artar, non-iyonize form azaldığı için ilaç sinir membranını geçemez.",
    "coreAnswer": "Asidik ortamda iyonize form artar, non-iyonize form azaldığı için ilaç sinir membranını geçemez",
    "keywords": [
      "Akut",
      "apikal",
      "apseli",
      "asidik",
      "dokuda"
    ],
    "options": [
      "Asidik ortamda iyonize form artar, non-iyonize form azaldığı için ilaç sinir membranını geçemez",
      "Voltaj kapılı $Na^+$ kanallarını hücrenin iç",
      "Metronidazol",
      "Başlama hızı: $pK_a$"
    ],
    "correctIndex": 0
  },
  {
    "id": 169,
    "code": "S169",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Lokal anesteziklerin etki başlama hızını, gücünü (potens) ve etki süresini hangi fizikokimyasal özellikler belirler?",
    "answer": "Başlama hızı: $pK_a$; Güç (Potens): Lipofiliklik; Etki süresi: Proteine bağlanma oranı.",
    "coreAnswer": "Başlama hızı: $pK_a$",
    "keywords": [
      "Lokal",
      "anesteziklerin",
      "etki",
      "başlama",
      "hızını"
    ],
    "options": [
      "Lidokain ve Prilokain",
      "Heparin: aPTT ile izlenir, antidotu Protamin sülfat",
      "Aspirin",
      "Başlama hızı: $pK_a$"
    ],
    "correctIndex": 3
  },
  {
    "id": 170,
    "code": "S170",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Amid yapılı olmasına rağmen yapısında tiyofen halkası ve bir ester bağı bulundurduğu için hem plazma esterazları hem karaciğerde yıkılan, yarı ömrü en kısa amid lokal anestezik?",
    "answer": "Artikain.",
    "coreAnswer": "Artikain",
    "keywords": [
      "Amid",
      "yapılı",
      "olmasına",
      "rağmen",
      "yapısında"
    ],
    "options": [
      "Doksisiklin",
      "Başlama hızı: $pK_a$",
      "Artikain",
      "Bifosfonatlar"
    ],
    "correctIndex": 2
  },
  {
    "id": 171,
    "code": "S171",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Yüksek dozda o-toluidin metaboliti nedeniyle methemoglobinemi yapan lokal anestezik ve antidotu nedir?",
    "answer": "Prilokain (ve Benzokain); Antidotu: Metilen mavisi (veya Askorbik asit).",
    "coreAnswer": "Prilokain",
    "keywords": [
      "Yüksek",
      "dozda",
      "toluidin",
      "metaboliti",
      "nedeniyle"
    ],
    "options": [
      "Nistatin",
      "Prilokain",
      "Parasetamol",
      "Pilokarpin ve Sevimelin"
    ],
    "correctIndex": 1
  },
  {
    "id": 172,
    "code": "S172",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kendinden vazokonstriktör (sempatomimetik: norepinefrin geri alım blokajı) etkiye sahip tek ester lokal anestezik?",
    "answer": "Kokain.",
    "coreAnswer": "Kokain",
    "keywords": [
      "Kendinden",
      "vazokonstriktör",
      "sempatomimetik",
      "norepinefrin",
      "geri"
    ],
    "options": [
      "Kokain",
      "Artikain",
      "Karbamazepin",
      "Bupivakain"
    ],
    "correctIndex": 0
  },
  {
    "id": 173,
    "code": "S173",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kardiyotoksisitesi en yüksek olan uzun etkili amid lokal anestezik ve tedavisinde kullanılan ajan?",
    "answer": "Bupivakain; Tedavisinde %20 İntralipid emülsiyonu kullanılır.",
    "coreAnswer": "Bupivakain",
    "keywords": [
      "Kardiyotoksisitesi",
      "yüksek",
      "uzun",
      "etkili",
      "amid"
    ],
    "options": [
      "İşlemden 30–60 dakika önce 2 g oral Amoksisilin",
      "Voltaj kapılı $Na^+$ kanallarını hücrenin iç",
      "Metronidazol",
      "Bupivakain"
    ],
    "correctIndex": 3
  },
  {
    "id": 174,
    "code": "S174",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Gebelerde FDA gebelik kategorisi B olan ve en güvenli kabul edilen lokal anestezikler hangileridir?",
    "answer": "Lidokain ve Prilokain.",
    "coreAnswer": "Lidokain ve Prilokain",
    "keywords": [
      "Gebelerde",
      "gebelik",
      "kategorisi",
      "güvenli",
      "kabul"
    ],
    "options": [
      "Flumazenil",
      "Bupivakain",
      "Lidokain ve Prilokain",
      "Heparin: aPTT ile izlenir, antidotu Protamin sülfat"
    ],
    "correctIndex": 2
  },
  {
    "id": 175,
    "code": "S175",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Non-selektif $\\beta$-blokör (örn. Propranolol) kullanan hastada adrenalinli lokal anestezik verildiğinde hangi reaksiyon gelişir?",
    "answer": "Karşılanmamış $\\alpha_1$ stimülasyonuna bağlı şiddetli hipertansiyon ve refleks bradikardi.",
    "coreAnswer": "Karşılanmamış $\\alpha_1$ stimülasyonuna bağlı şiddetli hipertansiyon ve refleks bradikardi",
    "keywords": [
      "selektif",
      "beta",
      "blokör",
      "Propranolol",
      "kullanan"
    ],
    "options": [
      "Non-iyonize",
      "Karşılanmamış $\\alpha_1$ stimülasyonuna bağlı şiddetli hipertansiyon ve refleks bradikardi",
      "Doksisiklin",
      "Başlama hızı: $pK_a$"
    ],
    "correctIndex": 1
  },
  {
    "id": 176,
    "code": "S176",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Siklooksijenaz (COX-1 ve COX-2) enzimlerini irreversibl (kovalent asetilasyonla) inhibe eden tek NSAİİ hangisidir?",
    "answer": "Aspirin (Asetilsalisilik asit).",
    "coreAnswer": "Aspirin",
    "keywords": [
      "Siklooksijenaz",
      "enzimlerini",
      "irreversibl",
      "kovalent",
      "asetilasyonla"
    ],
    "options": [
      "Aspirin",
      "Lidokain ve Prilokain",
      "Nistatin",
      "Parasetamol"
    ],
    "correctIndex": 0
  },
  {
    "id": 177,
    "code": "S177",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Anti-inflamatuar etkisi zayıf olan, mide irritasyonu ve kanama süresinde uzama yapmayan analjezik/antipiretik?",
    "answer": "Parasetamol (Asetaminofen); Yüksek dozda NAPQI metaboliti ile hepatotoksisite yapar, antidotu N-asetilsisteindir.",
    "coreAnswer": "Parasetamol",
    "keywords": [
      "Anti",
      "inflamatuar",
      "etkisi",
      "zayıf",
      "mide"
    ],
    "options": [
      "Fenitoin",
      "Artikain",
      "Karbamazepin",
      "Parasetamol"
    ],
    "correctIndex": 3
  },
  {
    "id": 178,
    "code": "S178",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "İnfektif endokardit profilaksisinde penisiline alerjisi olmayan yetişkinde standart rejim nedir?",
    "answer": "İşlemden 30–60 dakika önce 2 g oral Amoksisilin.",
    "coreAnswer": "İşlemden 30–60 dakika önce 2 g oral Amoksisilin",
    "keywords": [
      "İnfektif",
      "endokardit",
      "profilaksisinde",
      "penisiline",
      "alerjisi"
    ],
    "options": [
      "Kloramfenikol, Makrolidler",
      "Parasetamol",
      "İşlemden 30–60 dakika önce 2 g oral Amoksisilin",
      "Voltaj kapılı $Na^+$ kanallarını hücrenin iç"
    ],
    "correctIndex": 2
  },
  {
    "id": 179,
    "code": "S179",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Güncel AHA kılavuzlarına göre penisilin alerjisi olan hastada endokardit profilaksisinde hangi ilaç artık önerilmemektedir (Clostridioides difficile koliti riski nedeniyle)?",
    "answer": "Klindamisin (Yerine Azitromisin 500 mg, Klaritromisin 500 mg veya Sefaleksin/Doksisiklin önerilir).",
    "coreAnswer": "Klindamisin",
    "keywords": [
      "Güncel",
      "kılavuzlarına",
      "penisilin",
      "alerjisi",
      "hastada"
    ],
    "options": [
      "Prilokain",
      "Klindamisin",
      "Flumazenil",
      "Bupivakain"
    ],
    "correctIndex": 1
  },
  {
    "id": 180,
    "code": "S180",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sadece anaerobik bakterilere ve protozoalara etkili olan, alkol ile alındığında disülfiram benzeri reaksiyon yapan antibiyotik?",
    "answer": "Metronidazol (DNA sarmalını kırarak bakterisidal etki gösterir).",
    "coreAnswer": "Metronidazol",
    "keywords": [
      "Sadece",
      "anaerobik",
      "bakterilere",
      "protozoalara",
      "etkili"
    ],
    "options": [
      "Metronidazol",
      "İşlemden 30–60 dakika önce 2 g oral Amoksisilin",
      "Non-iyonize",
      "Doksisiklin"
    ],
    "correctIndex": 0
  },
  {
    "id": 181,
    "code": "S181",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Tükürük ve diş eti oluğu sıvısına (DOS) çok yüksek oranda geçen, agresif periodontitiste kullanılan tetrasiklin?",
    "answer": "Doksisiklin (Böbrek yetmezliğinde doz ayarı gerekmez, safra ile atılır; 30S ribozoma bağlanır).",
    "coreAnswer": "Doksisiklin",
    "keywords": [
      "Tükürük",
      "oluğu",
      "sıvısına",
      "yüksek",
      "oranda"
    ],
    "options": [
      "Nalokson",
      "Lidokain ve Prilokain",
      "Nistatin",
      "Doksisiklin"
    ],
    "correctIndex": 3
  },
  {
    "id": 182,
    "code": "S182",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Dişeti büyümesine (gingival hiperplazi) neden olan üç ana ilaç grubu hangileridir?",
    "answer": "Fenitoin (Antiepileptik), Siklosporin (İmmünsüpresif) ve Nifedipin/Amlodipin (Kalsiyum kanal blokörleri).",
    "coreAnswer": "Fenitoin",
    "keywords": [
      "Dişeti",
      "büyümesine",
      "gingival",
      "hiperplazi",
      "ilaç"
    ],
    "options": [
      "Asidik ortamda iyonize form artar, non-iyonize form azaldığı için ilaç sinir membranını geçemez",
      "Doksisiklin",
      "Fenitoin",
      "Artikain"
    ],
    "correctIndex": 2
  },
  {
    "id": 183,
    "code": "S183",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çenelerde ilaca bağlı osteonekroz (MRONJ) riski taşıyan antirezorptif ve antianjiyojenik ilaçlar hangileridir?",
    "answer": "Bifosfonatlar (Zoledronat, Alendronat), Denosumab (RANKL antikoru) ve Bevasizumab/Sunitinib.",
    "coreAnswer": "Bifosfonatlar",
    "keywords": [
      "Çenelerde",
      "ilaca",
      "bağlı",
      "osteonekroz",
      "MRONJ"
    ],
    "options": [
      "Karşılanmamış $\\alpha_1$ stimülasyonuna bağlı şiddetli hipertansiyon ve refleks bradikardi",
      "Bifosfonatlar",
      "Kloramfenikol, Makrolidler",
      "Parasetamol"
    ],
    "correctIndex": 1
  },
  {
    "id": 184,
    "code": "S184",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Trigeminal nevraljinin medikal tedavisinde ilk tercih edilen antiepileptik ilaç hangisidir?",
    "answer": "Karbamazepin (veya Okskarbazepin).",
    "coreAnswer": "Karbamazepin",
    "keywords": [
      "Trigeminal",
      "nevraljinin",
      "medikal",
      "tedavisinde",
      "tercih"
    ],
    "options": [
      "Karbamazepin",
      "Fenitoin",
      "Prilokain",
      "Flumazenil"
    ],
    "correctIndex": 0
  },
  {
    "id": 185,
    "code": "S185",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Benzodiazepin (örn. Midazolam, Diazepam) sedasyonu sırasında gelişen solunum depresyonunun spesifik antidotu?",
    "answer": "Flumazenil.",
    "coreAnswer": "Flumazenil",
    "keywords": [
      "Benzodiazepin",
      "Midazolam",
      "Diazepam",
      "sedasyonu",
      "sırasında"
    ],
    "options": [
      "Pilokarpin ve Sevimelin",
      "İşlemden 30–60 dakika önce 2 g oral Amoksisilin",
      "Non-iyonize",
      "Flumazenil"
    ],
    "correctIndex": 3
  },
  {
    "id": 186,
    "code": "S186",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Opioid analjezik (Morfin, Fentanil, Tramadol) zehirlenmesinde kullanılan spesifik reseptör antagonisti?",
    "answer": "Nalokson.",
    "coreAnswer": "Nalokson",
    "keywords": [
      "Opioid",
      "analjezik",
      "Morfin",
      "Fentanil",
      "Tramadol"
    ],
    "options": [
      "Kokain",
      "Flumazenil",
      "Nalokson",
      "Lidokain ve Prilokain"
    ],
    "correctIndex": 2
  },
  {
    "id": 187,
    "code": "S187",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Heparin ve Varfarin’in etkilerini geri döndüren antidotlar ve izlem testleri nelerdir?",
    "answer": "Heparin: aPTT ile izlenir, antidotu Protamin sülfat; Varfarin: INR (PT) ile izlenir, antidotu K vitamini / TDP.",
    "coreAnswer": "Heparin: aPTT ile izlenir, antidotu Protamin sülfat",
    "keywords": [
      "Heparin",
      "Varfarin",
      "etkilerini",
      "geri",
      "döndüren"
    ],
    "options": [
      "Klindamisin",
      "Heparin: aPTT ile izlenir, antidotu Protamin sülfat",
      "Asidik ortamda iyonize form artar, non-iyonize form azaldığı için ilaç sinir membranını geçemez",
      "Doksisiklin"
    ],
    "correctIndex": 1
  },
  {
    "id": 188,
    "code": "S188",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Oral kandidiyazis tedavisinde gastrointestinal sistemden emilmeyen, gargara (\"swish and swallow\") olarak kullanılan polien antifungal?",
    "answer": "Nistatin.",
    "coreAnswer": "Nistatin",
    "keywords": [
      "Oral",
      "kandidiyazis",
      "tedavisinde",
      "gastrointestinal",
      "sistemden"
    ],
    "options": [
      "Nistatin",
      "Nalokson",
      "Karşılanmamış $\\alpha_1$ stimülasyonuna bağlı şiddetli hipertansiyon ve refleks bradikardi",
      "Kloramfenikol, Makrolidler"
    ],
    "correctIndex": 0
  },
  {
    "id": 189,
    "code": "S189",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Bakteri ribozomunun 50S alt birimine bağlanarak protein sentezini inhibe eden antibiyotikler (KMLÇ)?",
    "answer": "Kloramfenikol, Makrolidler (Azitromisin, Klaritromisin), Linkozamidler (Klindamisin), Çizgili/Linezolid.",
    "coreAnswer": "Kloramfenikol, Makrolidler",
    "keywords": [
      "Bakteri",
      "ribozomunun",
      "birimine",
      "bağlanarak",
      "protein"
    ],
    "options": [
      "Başlama hızı: $pK_a$",
      "Fenitoin",
      "Prilokain",
      "Kloramfenikol, Makrolidler"
    ],
    "correctIndex": 3
  },
  {
    "id": 190,
    "code": "S190",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "farmakoloji",
    "subject": "Tıbbi Farmakoloji",
    "branchNumber": 7,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sjögren sendromu veya radyoterapi sonrası gelişen kserostomide tükürük salgısını artırmak için kullanılan muskarinik agonistler?",
    "answer": "Pilokarpin ve Sevimelin ($M_3$ reseptör agonisti).",
    "coreAnswer": "Pilokarpin ve Sevimelin",
    "keywords": [
      "Sjögren",
      "sendromu",
      "radyoterapi",
      "sonrası",
      "gelişen"
    ],
    "options": [
      "Aspirin",
      "Kloramfenikol, Makrolidler",
      "Pilokarpin ve Sevimelin",
      "İşlemden 30–60 dakika önce 2 g oral Amoksisilin"
    ],
    "correctIndex": 2
  },
  {
    "id": 191,
    "code": "S191",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Hücrede proteinlerin glikozilasyonu, paketlenmesi ve lizozomal enzimlere mannoz-6-fosfat etiketi eklenmesi hangi organelde gerçekleşir?",
    "answer": "Golgi aygıtı.",
    "coreAnswer": "Golgi aygıtı",
    "keywords": [
      "Hücrede",
      "proteinlerin",
      "glikozilasyonu",
      "paketlenmesi",
      "lizozomal"
    ],
    "options": [
      "DNA Ligaz",
      "Golgi aygıtı",
      "Peroksizom",
      "Kleidokraniyal Displazi"
    ],
    "correctIndex": 1
  },
  {
    "id": 192,
    "code": "S192",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Mannoz-6-fosfat etiketleme bozukluğu sonucu lizozomal enzimlerin hücre dışına kaçtığı ve diş eti hiperplazisi ile seyreden hastalık?",
    "answer": "I-Cell hastalığı (Mukolipidoz Tip II).",
    "coreAnswer": "I-Cell hastalığı",
    "keywords": [
      "Mannoz",
      "fosfat",
      "etiketleme",
      "bozukluğu",
      "lizozomal"
    ],
    "options": [
      "I-Cell hastalığı",
      "Kleidokraniyal Displazi",
      "Nükleotid eksizyon onarımı",
      "Sitokrom c"
    ],
    "correctIndex": 0
  },
  {
    "id": 193,
    "code": "S193",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Çok uzun zincirli yağ asitlerinin $\\beta$-oksidasyonunu ve hidrojen peroksit ($H_2O_2$) yıkımını (katalaz ile) gerçekleştiren organel?",
    "answer": "Peroksizom.",
    "coreAnswer": "Peroksizom",
    "keywords": [
      "uzun",
      "zincirli",
      "asitlerinin",
      "beta",
      "oksidasyonunu"
    ],
    "options": [
      "Sitokrom c",
      "PAX9",
      "Transkripsiyonu baskılar",
      "Peroksizom"
    ],
    "correctIndex": 3
  },
  {
    "id": 194,
    "code": "S194",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "İntrensek apoptoz yolunda mitokondriden sitoplazmaya salınarak Kaspaz-9’u aktive eden protein hangisidir?",
    "answer": "Sitokrom c (Anti-apoptotik: Bcl-2; Pro-apoptotik: Bax, Bak).",
    "coreAnswer": "Sitokrom c",
    "keywords": [
      "İntrensek",
      "apoptoz",
      "yolunda",
      "mitokondriden",
      "sitoplazmaya"
    ],
    "options": [
      "Transkripsiyonu baskılar",
      "TP53",
      "Sitokrom c",
      "Ektodermal Displazi"
    ],
    "correctIndex": 2
  },
  {
    "id": 195,
    "code": "S195",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "\"Genomun gardiyanı\" olarak bilinen, DNA hasarında hücre döngüsünü $G_1\\text{–}S$ geçişinde durduran tümör süpresör gen?",
    "answer": "TP53 (p53 proteini — p21 üzerinden CDK inhibisyonu yapar).",
    "coreAnswer": "TP53",
    "keywords": [
      "Genomun",
      "gardiyanı",
      "bilinen",
      "hasarında",
      "hücre"
    ],
    "options": [
      "Ektodermal Displazi",
      "TP53",
      "Ökromatin oluşturarak mRNA sentezini",
      "Retinoblastom proteini"
    ],
    "correctIndex": 1
  },
  {
    "id": 196,
    "code": "S196",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Fosforillenmemiş halde E2F transkripsiyon faktörünü bağlayarak hücreyi $G_1$ fazında tutan tümör süpresör protein?",
    "answer": "Retinoblastom proteini (pRb).",
    "coreAnswer": "Retinoblastom proteini",
    "keywords": [
      "Fosforillenmemiş",
      "halde",
      "transkripsiyon",
      "faktörünü",
      "bağlayarak"
    ],
    "options": [
      "Retinoblastom proteini",
      "TP53",
      "Dentinogenezis İmperfekta Tip II",
      "RNA Polimeraz II"
    ],
    "correctIndex": 0
  },
  {
    "id": 197,
    "code": "S197",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kök hücrelerde ve kanser hücrelerinde kromozom uçlarındaki telomerlerin kısalmasını önleyen ters transkriptaz enzimi?",
    "answer": "Telomeraz.",
    "coreAnswer": "Telomeraz",
    "keywords": [
      "hücrelerde",
      "kanser",
      "hücrelerinde",
      "kromozom",
      "uçlarındaki"
    ],
    "options": [
      "RNA Polimeraz II",
      "Retinoblastom proteini",
      "Osteogenezis İmperfekta",
      "Telomeraz"
    ],
    "correctIndex": 3
  },
  {
    "id": 198,
    "code": "S198",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "DNA replikasyonunda çift sarmalı açan ve süperkatlanmaları (supercoil) gideren enzimler hangileridir?",
    "answer": "Helikaz (sarmalı açar) ve Topoizomeraz (süperkatlanmaları çözer).",
    "coreAnswer": "Helikaz",
    "keywords": [
      "replikasyonunda",
      "çift",
      "sarmalı",
      "açan",
      "süperkatlanmaları"
    ],
    "options": [
      "Osteogenezis İmperfekta",
      "Elongasyon Faktörü-2'yi",
      "Helikaz",
      "Telomeraz"
    ],
    "correctIndex": 2
  },
  {
    "id": 199,
    "code": "S199",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Kesintili (lagging) zincirdeki Okazaki parçacıklarını birbirine fosfodiester bağı ile birleştiren enzim?",
    "answer": "DNA Ligaz.",
    "coreAnswer": "DNA Ligaz",
    "keywords": [
      "Kesintili",
      "lagging",
      "zincirdeki",
      "Okazaki",
      "parçacıklarını"
    ],
    "options": [
      "Telomeraz",
      "DNA Ligaz",
      "Golgi aygıtı",
      "Mitokondriyal kalıtım"
    ],
    "correctIndex": 1
  },
  {
    "id": 200,
    "code": "S200",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Ultraviyole (UV) ışınlarının DNA'da oluşturduğu timin dimerleri hangi onarım mekanizması ile düzeltilir?",
    "answer": "Nükleotid eksizyon onarımı (Bozukluğunda Xeroderma pigmentosum gelişir).",
    "coreAnswer": "Nükleotid eksizyon onarımı",
    "keywords": [
      "Ultraviyole",
      "ışınlarının",
      "oluşturduğu",
      "timin",
      "dimerleri"
    ],
    "options": [
      "Nükleotid eksizyon onarımı",
      "Mitokondriyal kalıtım",
      "Helikaz",
      "I-Cell hastalığı"
    ],
    "correctIndex": 0
  },
  {
    "id": 201,
    "code": "S201",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "DNA metilasyonu ve histon deasetilasyonu gen ekspresyonunu nasıl etkiler?",
    "answer": "Transkripsiyonu baskılar (Gen susturulması / Heterokromatin oluşumu).",
    "coreAnswer": "Transkripsiyonu baskılar",
    "keywords": [
      "metilasyonu",
      "histon",
      "deasetilasyonu",
      "ekspresyonunu",
      "etkiler"
    ],
    "options": [
      "I-Cell hastalığı",
      "Kleidokraniyal Displazi",
      "DNA Ligaz",
      "Transkripsiyonu baskılar"
    ],
    "correctIndex": 3
  },
  {
    "id": 202,
    "code": "S202",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Histon asetilasyonu (HAT) kromatin yapısını ve gen ekspresyonunu nasıl etkiler?",
    "answer": "Ökromatin oluşturarak mRNA sentezini (transkripsiyonu) aktive eder.",
    "coreAnswer": "Ökromatin oluşturarak mRNA sentezini",
    "keywords": [
      "Histon",
      "asetilasyonu",
      "kromatin",
      "yapısını",
      "ekspresyonunu"
    ],
    "options": [
      "DNA Ligaz",
      "Peroksizom",
      "Ökromatin oluşturarak mRNA sentezini",
      "PAX9"
    ],
    "correctIndex": 2
  },
  {
    "id": 203,
    "code": "S203",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Ökaryotlarda mRNA'yı sentezleyen ve Amanita phalloides ($\\alpha$-amanitin) tarafından inhibe edilen enzim?",
    "answer": "RNA Polimeraz II.",
    "coreAnswer": "RNA Polimeraz II",
    "keywords": [
      "Ökaryotlarda",
      "mRNA",
      "sentezleyen",
      "Amanita",
      "phalloides"
    ],
    "options": [
      "PAX9",
      "RNA Polimeraz II",
      "Nükleotid eksizyon onarımı",
      "Sitokrom c"
    ],
    "correctIndex": 1
  },
  {
    "id": 204,
    "code": "S204",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Protein sentezinde (translasyon) polipeptid zincirine yeni aminoasitlerin eklenmesini (elongasyon) difteri toksini nasıl bozar?",
    "answer": "Elongasyon Faktörü-2'yi (eEF-2) ADP-ribozilasyonu ile inaktive ederek.",
    "coreAnswer": "Elongasyon Faktörü-2'yi",
    "keywords": [
      "Protein",
      "sentezinde",
      "translasyon",
      "polipeptid",
      "zincirine"
    ],
    "options": [
      "Elongasyon Faktörü-2'yi",
      "Sitokrom c",
      "Ektodermal Displazi",
      "Transkripsiyonu baskılar"
    ],
    "correctIndex": 0
  },
  {
    "id": 205,
    "code": "S205",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Sadece anneden (maternal) kalıtılan ve tüm çocuklara aktarılan genetik hastalıkların kalıtım tipi nedir?",
    "answer": "Mitokondriyal kalıtım.",
    "coreAnswer": "Mitokondriyal kalıtım",
    "keywords": [
      "Sadece",
      "anneden",
      "maternal",
      "kalıtılan",
      "çocuklara"
    ],
    "options": [
      "Transkripsiyonu baskılar",
      "TP53",
      "Dentinogenezis İmperfekta Tip II",
      "Mitokondriyal kalıtım"
    ],
    "correctIndex": 3
  },
  {
    "id": 206,
    "code": "S206",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Klavikula yokluğu/hipoplazisi, açık fontaneller ve çok sayıda gömülü süpernümerer diş ile seyreden gen mutasyonu?",
    "answer": "Kleidokraniyal Displazi (RUNX2 / CBFA1 gen mutasyonu — Otozomal dominant).",
    "coreAnswer": "Kleidokraniyal Displazi",
    "keywords": [
      "Klavikula",
      "yokluğu",
      "hipoplazisi",
      "açık",
      "fontaneller"
    ],
    "options": [
      "Dentinogenezis İmperfekta Tip II",
      "Ökromatin oluşturarak mRNA sentezini",
      "Kleidokraniyal Displazi",
      "Retinoblastom proteini"
    ],
    "correctIndex": 2
  },
  {
    "id": 207,
    "code": "S207",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Konjenital diş eksiklikleri (oligodonti/anodonti) ile en sık ilişkili olan iki gen hangisidir?",
    "answer": "PAX9 (özellikle molar agenezisi) ve MSX1 (premolar ve 3. molar agenezisi).",
    "coreAnswer": "PAX9",
    "keywords": [
      "Konjenital",
      "eksiklikleri",
      "oligodonti",
      "anodonti",
      "ilişkili"
    ],
    "options": [
      "Retinoblastom proteini",
      "PAX9",
      "Osteogenezis İmperfekta",
      "RNA Polimeraz II"
    ],
    "correctIndex": 1
  },
  {
    "id": 208,
    "code": "S208",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "Hipodonti, konik dişler, ter bezlerinin yokluğu (hipohidroz) ve ince saçlarla karakterize sendrom?",
    "answer": "Ektodermal Displazi (En sık X'e bağlı resesif — EDA gen mutasyonu).",
    "coreAnswer": "Ektodermal Displazi",
    "keywords": [
      "Hipodonti",
      "konik",
      "dişler",
      "bezlerinin",
      "yokluğu"
    ],
    "options": [
      "Ektodermal Displazi",
      "RNA Polimeraz II",
      "Telomeraz",
      "Golgi aygıtı"
    ],
    "correctIndex": 0
  },
  {
    "id": 209,
    "code": "S209",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "DSPP (Dentin siyalofosfoprotein) gen mutasyonu sonucu gelişen, kehribar/opalesan dişler ve kısa köklerle seyreden hastalık?",
    "answer": "Dentinogenezis İmperfekta Tip II (Herediter opalesan dentin).",
    "coreAnswer": "Dentinogenezis İmperfekta Tip II",
    "keywords": [
      "DSPP",
      "Dentin",
      "siyalofosfoprotein",
      "mutasyonu",
      "gelişen"
    ],
    "options": [
      "Golgi aygıtı",
      "Elongasyon Faktörü-2'yi",
      "Helikaz",
      "Dentinogenezis İmperfekta Tip II"
    ],
    "correctIndex": 3
  },
  {
    "id": 210,
    "code": "S210",
    "section": "TBT",
    "sectionTitle": "Temel Bilimler Testi",
    "subjectId": "biyoloji",
    "subject": "Tıbbi Biyoloji ve Genetik",
    "branchNumber": 8,
    "osymWeight": "4 Soru",
    "osymPercent": "10%",
    "question": "COL1A1 / COL1A2 mutasyonu, mavi sklera, kemik kırıkları ve dişlerde Dentinogenezis İmperfekta Tip I ile seyreden hastalık?",
    "answer": "Osteogenezis İmperfekta.",
    "coreAnswer": "Osteogenezis İmperfekta",
    "keywords": [
      "COL1A1",
      "COL1A2",
      "mutasyonu",
      "mavi",
      "sklera"
    ],
    "options": [
      "Helikaz",
      "I-Cell hastalığı",
      "Osteogenezis İmperfekta",
      "Mitokondriyal kalıtım"
    ],
    "correctIndex": 2
  },
  {
    "id": 211,
    "code": "S211",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Doğal dişli bireylerde veya sabit protezlerde lateral hareketlerde kanin dişin temas edip arka dişlerin temassız kalmasına ne denir?",
    "answer": "Kanin koruyuculu oklüzyon (Mutually protected / Posterior disklüzyon).",
    "coreAnswer": "Kanin koruyuculu oklüzyon",
    "keywords": [
      "Doğal",
      "dişli",
      "bireylerde",
      "sabit",
      "protezlerde"
    ],
    "options": [
      "Dudak köşelerinde anguler çeylitis, yaşlı yüz görünümü, çiğneme etkinliğinde azalma ve TME ağrısı",
      "Kanin koruyuculu oklüzyon",
      "Rezistans",
      "Dezenfeksiyon sonrası derhal"
    ],
    "correctIndex": 1
  },
  {
    "id": 212,
    "code": "S212",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanin dişin periodontal desteği zayıfsa veya sınıf III oklüzyon varsa lateral harekette çalışan taraf arka dişlerin birlikte temas etmesi?",
    "answer": "Unilateral grup fonksiyon oklüzyonu.",
    "coreAnswer": "Unilateral grup fonksiyon oklüzyonu",
    "keywords": [
      "Kanin",
      "dişin",
      "periodontal",
      "desteği",
      "zayıfsa"
    ],
    "options": [
      "Unilateral grup fonksiyon oklüzyonu",
      "Kennedy Sınıf I",
      "Düşük sıcaklık degradasyonu",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 213,
    "code": "S213",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tam protezlerde protez stabilitesini korumak için hem çalışan hem dengeleyen tarafta eş zamanlı temas sağlayan oklüzyon tipi?",
    "answer": "Bilateral balanslı oklüzyon.",
    "coreAnswer": "Bilateral balanslı oklüzyon",
    "keywords": [
      "protezlerde",
      "protez",
      "stabilitesini",
      "korumak",
      "çalışan"
    ],
    "options": [
      "$6^\\circ$",
      "Peridontal membran",
      "Redüksiyonsuz akut disk deplasmanı",
      "Bilateral balanslı oklüzyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 214,
    "code": "S214",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Protrüziv harekette kesici dişler temas ederken arka dişlerin ayrılmasına (Christensen fenomeni) ne ad verilir?",
    "answer": "Anterior rehberlik (Posterior disklüzyon).",
    "coreAnswer": "Anterior rehberlik",
    "keywords": [
      "Protrüziv",
      "harekette",
      "kesici",
      "dişler",
      "temas"
    ],
    "options": [
      "Mine dokusunda",
      "Kimyasal bağlanma",
      "Anterior rehberlik",
      "İstirahat aralığı"
    ],
    "correctIndex": 2
  },
  {
    "id": 215,
    "code": "S215",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hanau’nun artikülasyon beşlisinde (Quint) diş hekiminin değiştiremediği, hastaya ait tek sabit faktör hangisidir?",
    "answer": "Kondil yolu eğimi.",
    "coreAnswer": "Kondil yolu eğimi",
    "keywords": [
      "Hanau",
      "artikülasyon",
      "beşlisinde",
      "Quint",
      "hekiminin"
    ],
    "options": [
      "Modifiye sırt",
      "Kondil yolu eğimi",
      "Stabilizasyon splinti",
      "M. constrictor pharyngeus superior ve m. mylohyoideus"
    ],
    "correctIndex": 1
  },
  {
    "id": 216,
    "code": "S216",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çalışan taraf kondilinin rotasyon ve dışa doğru yaptığı bodily (lateral) şift hareketine ne ad verilir?",
    "answer": "Bennett hareketi (Dengeleyen kondilin yaptığı açı ise Bennett açısıdır).",
    "coreAnswer": "Bennett hareketi",
    "keywords": [
      "Çalışan",
      "taraf",
      "kondilinin",
      "rotasyon",
      "dışa"
    ],
    "options": [
      "Bennett hareketi",
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "Konuşurken dişlerin birbirine çarpması",
      "Lingual plak"
    ],
    "correctIndex": 0
  },
  {
    "id": 217,
    "code": "S217",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İstirahat dikey boyutu (İDB) ile oklüzal dikey boyut (ODB) arasındaki $2\\text{–}4\\text{ mm}$’lik farka ne denir?",
    "answer": "İstirahat aralığı (Freeway space / İntersal aralık).",
    "coreAnswer": "İstirahat aralığı",
    "keywords": [
      "İstirahat",
      "dikey",
      "boyutu",
      "oklüzal",
      "boyut"
    ],
    "options": [
      "Kanin koruyuculu oklüzyon",
      "M. mentalis ve m. orbicularis oris",
      "Alüminyum oksit",
      "İstirahat aralığı"
    ],
    "correctIndex": 3
  },
  {
    "id": 218,
    "code": "S218",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tam protezde dikey boyut yüksek yapılırsa hangi klinik bulgular ortaya çıkar?",
    "answer": "Konuşurken dişlerin birbirine çarpması (\"tıkırtı\" sesi), çiğneme kaslarında ağrı/yorgunluk, istirahat aralığının yok olması, kretlerde hızlı rezorpsiyon.",
    "coreAnswer": "Konuşurken dişlerin birbirine çarpması",
    "keywords": [
      "protezde",
      "dikey",
      "boyut",
      "yüksek",
      "yapılırsa"
    ],
    "options": [
      "Dudak köşelerinde anguler çeylitis, yaşlı yüz görünümü, çiğneme etkinliğinde azalma ve TME ağrısı",
      "Rezistans",
      "Konuşurken dişlerin birbirine çarpması",
      "Dezenfeksiyon sonrası derhal"
    ],
    "correctIndex": 2
  },
  {
    "id": 219,
    "code": "S219",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tam protezde dikey boyut düşük yapılırsa hangi klinik bulgular görülür?",
    "answer": "Dudak köşelerinde anguler çeylitis, yaşlı yüz görünümü, çiğneme etkinliğinde azalma ve TME ağrısı.",
    "coreAnswer": "Dudak köşelerinde anguler çeylitis, yaşlı yüz görünümü, çiğneme etkinliğinde azalma ve TME ağrısı",
    "keywords": [
      "protezde",
      "dikey",
      "boyut",
      "düşük",
      "yapılırsa"
    ],
    "options": [
      "Kennedy Sınıf I",
      "Dudak köşelerinde anguler çeylitis, yaşlı yüz görünümü, çiğneme etkinliğinde azalma ve TME ağrısı",
      "Düşük sıcaklık degradasyonu",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 220,
    "code": "S220",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "\"F\" ve \"V\" (labiodental) sesleri çıkarılırken üst santral kesicilerin kesici kenarı nereye temas etmelidir?",
    "answer": "Alt dudağın ıslak-kuru sınırına (Kesicilerin dikey boyutu ve ön-arka konumunu doğrular).",
    "coreAnswer": "Alt dudağın ıslak-kuru sınırına",
    "keywords": [
      "labiodental",
      "sesleri",
      "çıkarılırken",
      "santral",
      "kesicilerin"
    ],
    "options": [
      "Alt dudağın ıslak-kuru sınırına",
      "$6^\\circ$",
      "Peridontal membran",
      "Redüksiyonsuz akut disk deplasmanı"
    ],
    "correctIndex": 0
  },
  {
    "id": 221,
    "code": "S221",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "\"S\" sesi çıkarılırken konuşma mesafesi (closest speaking space) normalden azsa veya \"Ş/Peltek\" çıkıyorsa sorun nedir?",
    "answer": "Dikey boyut yüksektir veya ön damak konturu/kesici ilişkisi hatalıdır.",
    "coreAnswer": "Dikey boyut yüksektir veya ön damak konturu/kesici ilişkisi hatalıdır",
    "keywords": [
      "sesi",
      "çıkarılırken",
      "konuşma",
      "mesafesi",
      "closest"
    ],
    "options": [
      "Mine dokusunda",
      "Kimyasal bağlanma",
      "Bennett hareketi",
      "Dikey boyut yüksektir veya ön damak konturu/kesici ilişkisi hatalıdır"
    ],
    "correctIndex": 3
  },
  {
    "id": 222,
    "code": "S222",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst tam protezin arka sınırını (Post-dam / Ah-line) belirleyen anatomik oluşumlar nelerdir?",
    "answer": "Her iki hamular çentik (pterygomaxiller çentik) ve titreşen damak hattı (fovea palatina komşuluğu).",
    "coreAnswer": "Her iki hamular çentik",
    "keywords": [
      "protezin",
      "arka",
      "sınırını",
      "Post",
      "line"
    ],
    "options": [
      "Modifiye sırt",
      "Stabilizasyon splinti",
      "Her iki hamular çentik",
      "M. constrictor pharyngeus superior ve m. mylohyoideus"
    ],
    "correctIndex": 2
  },
  {
    "id": 223,
    "code": "S223",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt tam protezde ısırma kuvvetlerine en dirençli olan ve primer stres taşıyan anatomik bölge neresidir?",
    "answer": "Bukkal raf (Buccal shelf) bölgesi (Kompakt kemikten oluşur ve kuvvetlere diktir).",
    "coreAnswer": "Bukkal raf",
    "keywords": [
      "protezde",
      "ısırma",
      "kuvvetlerine",
      "dirençli",
      "primer"
    ],
    "options": [
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "Bukkal raf",
      "İstirahat aralığı",
      "Lingual plak"
    ],
    "correctIndex": 1
  },
  {
    "id": 224,
    "code": "S224",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt tam protezin distolingual kanadını şekillendiren ve yutkunma sırasında hareket eden kas hangisidir?",
    "answer": "M. constrictor pharyngeus superior ve m. mylohyoideus.",
    "coreAnswer": "M. constrictor pharyngeus superior ve m. mylohyoideus",
    "keywords": [
      "protezin",
      "distolingual",
      "kanadını",
      "şekillendiren",
      "yutkunma"
    ],
    "options": [
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Kanin koruyuculu oklüzyon",
      "M. mentalis ve m. orbicularis oris",
      "Alüminyum oksit"
    ],
    "correctIndex": 0
  },
  {
    "id": 225,
    "code": "S225",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt tam protezde ön vestibül sınırı (labial flanşı) aşırı uzatılırsa hangi kas protezi yerinden oynatır?",
    "answer": "M. mentalis ve m. orbicularis oris.",
    "coreAnswer": "M. mentalis ve m. orbicularis oris",
    "keywords": [
      "protezde",
      "vestibül",
      "sınırı",
      "labial",
      "flanşı"
    ],
    "options": [
      "Konuşurken dişlerin birbirine çarpması",
      "Rezistans",
      "Dezenfeksiyon sonrası derhal",
      "M. mentalis ve m. orbicularis oris"
    ],
    "correctIndex": 3
  },
  {
    "id": 226,
    "code": "S226",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hareketli bölümlü protezlerde (HBP) üst çene arka serbest sonlu vakalarda (sinüs sarkması yoksa) hangi sınıf sınıflamasıdır?",
    "answer": "Kennedy Sınıf I (Bilateral serbest sonlu), Sınıf II (Unilateral serbest sonlu), Sınıf III (Diş destekli), Sınıf IV (Orta hattı geçen ön dişsiz boşluk).",
    "coreAnswer": "Kennedy Sınıf I",
    "keywords": [
      "Hareketli",
      "bölümlü",
      "protezlerde",
      "çene",
      "arka"
    ],
    "options": [
      "M. mentalis ve m. orbicularis oris",
      "Düşük sıcaklık degradasyonu",
      "Kennedy Sınıf I",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 227,
    "code": "S227",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Applegate kurallarına göre hangi Kennedy sınıfında modifikasyon alanı olamaz?",
    "answer": "Kennedy Sınıf IV.",
    "coreAnswer": "Kennedy Sınıf IV",
    "keywords": [
      "Applegate",
      "kurallarına",
      "Kennedy",
      "sınıfında",
      "modifikasyon"
    ],
    "options": [
      "$6^\\circ$",
      "Kennedy Sınıf IV",
      "Peridontal membran",
      "Redüksiyonsuz akut disk deplasmanı"
    ],
    "correctIndex": 1
  },
  {
    "id": 228,
    "code": "S228",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kennedy Sınıf I ve II (serbest sonlu) vakalarda protezin doku-uzaklaşma (rotasyon) hareketini önleyen eleman nedir?",
    "answer": "İndirekt tutucu (Fulkrum hattının önüne, mümkün olduğunca dik ve uzağa yerleştirilen tırnak).",
    "coreAnswer": "İndirekt tutucu",
    "keywords": [
      "Kennedy",
      "Sınıf",
      "serbest",
      "sonlu",
      "vakalarda"
    ],
    "options": [
      "İndirekt tutucu",
      "Mine dokusunda",
      "Kimyasal bağlanma",
      "Bennett hareketi"
    ],
    "correctIndex": 0
  },
  {
    "id": 229,
    "code": "S229",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Serbest sonlu HBP’lerde (Kennedy I ve II) destek dişe tork kuvveti iletmemek için oklüzal tırnak nereye konur (RPI sistemi)?",
    "answer": "Meziooklüzal fossaya (Mezial tırnak + Distal rehber düzlem + I-bar kroşe = RPI).",
    "coreAnswer": "Meziooklüzal fossaya",
    "keywords": [
      "Serbest",
      "sonlu",
      "lerde",
      "Kennedy",
      "destek"
    ],
    "options": [
      "Modifiye sırt",
      "Stabilizasyon splinti",
      "Bukkal raf",
      "Meziooklüzal fossaya"
    ],
    "correctIndex": 3
  },
  {
    "id": 230,
    "code": "S230",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst ve alt HBP ana bağlayıcılarının diş eti kenarından en az kaç mm uzakta bitirilmesi gerekir?",
    "answer": "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$.",
    "coreAnswer": "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$",
    "keywords": [
      "bağlayıcılarının",
      "kenarından",
      "uzakta",
      "bitirilmesi",
      "gerekir"
    ],
    "options": [
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "İstirahat aralığı",
      "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$",
      "Lingual plak"
    ],
    "correctIndex": 2
  },
  {
    "id": 231,
    "code": "S231",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt çenede ağız tabanı derinliği $8\\text{ mm}$’den az ise veya lingual torus varsa hangi ana bağlayıcı seçilir?",
    "answer": "Lingual plak (Normalde en çok tercih edilen Lingual bar’dır).",
    "coreAnswer": "Lingual plak",
    "keywords": [
      "çenede",
      "ağız",
      "tabanı",
      "derinliği",
      "text"
    ],
    "options": [
      "Kanin koruyuculu oklüzyon",
      "Lingual plak",
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Alüminyum oksit"
    ],
    "correctIndex": 1
  },
  {
    "id": 232,
    "code": "S232",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sabit protezlerde kuronun giriş yoluna dik yönde çıkmasını önleyen özelliğe retansiyon, oblik kuvvetlerle devrilmesini önleyen özelliğe ne denir?",
    "answer": "Rezistans (Direnç — Preparasyonun yüksekliği, çapı ve koniklik açısı belirler).",
    "coreAnswer": "Rezistans",
    "keywords": [
      "Sabit",
      "protezlerde",
      "kuronun",
      "giriş",
      "yoluna"
    ],
    "options": [
      "Rezistans",
      "Konuşurken dişlerin birbirine çarpması",
      "Lingual plak",
      "Dezenfeksiyon sonrası derhal"
    ],
    "correctIndex": 0
  },
  {
    "id": 233,
    "code": "S233",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sabit protez preparasyonunda ideal toplam koniklik (taper / yakınsama) açısı kaç derece olmalıdır?",
    "answer": "$6^\\circ$ (Her bir duvar için $3^\\circ$).",
    "coreAnswer": "$6^\\circ$",
    "keywords": [
      "Sabit",
      "protez",
      "preparasyonunda",
      "ideal",
      "toplam"
    ],
    "options": [
      "M. mentalis ve m. orbicularis oris",
      "Düşük sıcaklık degradasyonu",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon",
      "$6^\\circ$"
    ],
    "correctIndex": 3
  },
  {
    "id": 234,
    "code": "S234",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tam seramik ve zirkonya kuronlarda iç stres birikimini önlemek için tercih edilen basamak şekli hangisidir?",
    "answer": "Yuvarlatılmış shoulder (radial shoulder) veya derin chamfer.",
    "coreAnswer": "Yuvarlatılmış shoulder",
    "keywords": [
      "seramik",
      "zirkonya",
      "kuronlarda",
      "stres",
      "birikimini"
    ],
    "options": [
      "Rezistans",
      "Peridontal membran",
      "Yuvarlatılmış shoulder",
      "Redüksiyonsuz akut disk deplasmanı"
    ],
    "correctIndex": 2
  },
  {
    "id": 235,
    "code": "S235",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Metal destekli seramik kuronlarda metal alt yapının minimum kalınlığı ve porselenin ideal kalınlığı ne olmalıdır?",
    "answer": "Soy metal: $0,3\\text{ mm}$, Soy olmayan metal: $0,2\\text{ mm}$; Porselen kalınlığı: $1\\text{–}1,5\\text{ mm}$ ($2\\text{ mm}$'yi geçerse kırılır).",
    "coreAnswer": "Soy metal: $0,3\\text{ mm}$, Soy olmayan metal: $0,2\\text{ mm}$",
    "keywords": [
      "Metal",
      "destekli",
      "seramik",
      "kuronlarda",
      "metal"
    ],
    "options": [
      "Mine dokusunda",
      "Soy metal: $0,3\\text{ mm}$, Soy olmayan metal: $0,2\\text{ mm}$",
      "Kimyasal bağlanma",
      "Bennett hareketi"
    ],
    "correctIndex": 1
  },
  {
    "id": 236,
    "code": "S236",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hidroflorik asit (HF) ve silan uygulaması ile en yüksek mikromekanik ve kimyasal adezyon sağlanan seramik tipi?",
    "answer": "Feldspatik porselen ve Lösit / Lityum disilikat güçlendirilmiş cam seramikler (Asitle pürüzlendirilebilir seramikler).",
    "coreAnswer": "Feldspatik porselen ve Lösit / Lityum disilikat güçlendirilmiş cam seramikler",
    "keywords": [
      "Hidroflorik",
      "asit",
      "silan",
      "uygulaması",
      "yüksek"
    ],
    "options": [
      "Feldspatik porselen ve Lösit / Lityum disilikat güçlendirilmiş cam seramikler",
      "Modifiye sırt",
      "Stabilizasyon splinti",
      "Bukkal raf"
    ],
    "correctIndex": 0
  },
  {
    "id": 237,
    "code": "S237",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cam fazı içermediği (polikristalin) için hidroflorik asitle pürüzlendirilemeyen yüksek dayanımlı seramik hangisidir?",
    "answer": "Zirkonyum oksit (Zirkonya) ve Alümina seramikler.",
    "coreAnswer": "Zirkonyum oksit",
    "keywords": [
      "fazı",
      "içermediği",
      "polikristalin",
      "hidroflorik",
      "asitle"
    ],
    "options": [
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "İstirahat aralığı",
      "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$",
      "Zirkonyum oksit"
    ],
    "correctIndex": 3
  },
  {
    "id": 238,
    "code": "S238",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Zirkonya restorasyonların adeziv simantasyonunda iç yüzey bağlantısını kurmak için hangi işlem ve monomer kullanılır?",
    "answer": "Alüminyum oksit ($Al_2O_3$) ile kumlama (tribokimyasal kaplama) ve 10-MDP (10-metakriloiloxidekil dihidrojen fosfat) içeren primer/rezin siman.",
    "coreAnswer": "Alüminyum oksit",
    "keywords": [
      "Zirkonya",
      "restorasyonların",
      "adeziv",
      "simantasyonunda",
      "yüzey"
    ],
    "options": [
      "Kanin koruyuculu oklüzyon",
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Alüminyum oksit",
      "Zirkonyum oksit"
    ],
    "correctIndex": 2
  },
  {
    "id": 239,
    "code": "S239",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Zirkonyada yaşlanma veya su temasıyla tetragonal fazdan monoklinik faza kendiliğinden dönüşerek dayanımı düşüren olay?",
    "answer": "Düşük sıcaklık degradasyonu (LTD); Ancak çatlak ucundaki $t \\to m$ dönüşümü (%3–5 hacim artışı) çatlağı durdurur (Transformation toughening).",
    "coreAnswer": "Düşük sıcaklık degradasyonu",
    "keywords": [
      "Zirkonyada",
      "yaşlanma",
      "temasıyla",
      "tetragonal",
      "fazdan"
    ],
    "options": [
      "Konuşurken dişlerin birbirine çarpması",
      "Düşük sıcaklık degradasyonu",
      "Lingual plak",
      "Dezenfeksiyon sonrası derhal"
    ],
    "correctIndex": 1
  },
  {
    "id": 240,
    "code": "S240",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Seramik lamina venerlerde (cam seramik) maksimum bağlantı gücü için preparasyon hangi dokuda kalmalıdır?",
    "answer": "Mine dokusunda (İntra-enamel preparasyon: servikalde $0,3\\text{ mm}$, orta üçlüde $0,5\\text{ mm}$, insizalde $0,7\\text{ mm}$).",
    "coreAnswer": "Mine dokusunda",
    "keywords": [
      "Seramik",
      "lamina",
      "venerlerde",
      "seramik",
      "maksimum"
    ],
    "options": [
      "Mine dokusunda",
      "M. mentalis ve m. orbicularis oris",
      "Alüminyum oksit",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 241,
    "code": "S241",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Polimerizasyonu sırasında etanol (alkol) yan ürünü çıkaran ve boyutsal stabilitesi düşük olan elastomerik ölçü maddesi?",
    "answer": "Kondensasyon tipi silikon (C-Silikon).",
    "coreAnswer": "Kondensasyon tipi silikon",
    "keywords": [
      "Polimerizasyonu",
      "sırasında",
      "etanol",
      "alkol",
      "ürünü"
    ],
    "options": [
      "Rezistans",
      "Peridontal membran",
      "Redüksiyonsuz akut disk deplasmanı",
      "Kondensasyon tipi silikon"
    ],
    "correctIndex": 3
  },
  {
    "id": 242,
    "code": "S242",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Boyutsal stabilitesi ve netliği en yüksek olan, yan ürün çıkarmayan elastomerik ölçü maddesi hangisidir?",
    "answer": "İlave (Adhezyon / Polivinilsiloksan - PVS) tipi silikon.",
    "coreAnswer": "İlave",
    "keywords": [
      "Boyutsal",
      "stabilitesi",
      "netliği",
      "yüksek",
      "ürün"
    ],
    "options": [
      "Düşük sıcaklık degradasyonu",
      "Kimyasal bağlanma",
      "İlave",
      "Bennett hareketi"
    ],
    "correctIndex": 2
  },
  {
    "id": 243,
    "code": "S243",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lateks eldivenlerdeki kükürt (sülfür) bileşikleri hangi ölçü maddesinin polimerizasyonunu (katalizör: kloroplatinik asit) inhibe eder?",
    "answer": "İlave tipi silikon (PVS).",
    "coreAnswer": "İlave tipi silikon",
    "keywords": [
      "Lateks",
      "eldivenlerdeki",
      "kükürt",
      "sülfür",
      "bileşikleri"
    ],
    "options": [
      "Modifiye sırt",
      "İlave tipi silikon",
      "Stabilizasyon splinti",
      "Bukkal raf"
    ],
    "correctIndex": 1
  },
  {
    "id": 244,
    "code": "S244",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hidrofilik özelliği en yüksek olan, su emdiği (imbibisyon) için nemli ortamda saklanmaması gereken rijit elastomerik ölçü maddesi?",
    "answer": "Polieter.",
    "coreAnswer": "Polieter",
    "keywords": [
      "Hidrofilik",
      "özelliği",
      "yüksek",
      "emdiği",
      "imbibisyon"
    ],
    "options": [
      "Polieter",
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "İstirahat aralığı",
      "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$"
    ],
    "correctIndex": 0
  },
  {
    "id": 245,
    "code": "S245",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Aljinat (irreversibl hidrokolloid) ölçülerde su kaybıyla büzülmeye (sinerezis) ve su alarak şişmeye (imbibisyon) karşı ölçü ne zaman dökülmelidir?",
    "answer": "Dezenfeksiyon sonrası derhal (en geç 10–15 dakika içinde) alçıya dökülmelidir.",
    "coreAnswer": "Dezenfeksiyon sonrası derhal",
    "keywords": [
      "Aljinat",
      "irreversibl",
      "hidrokolloid",
      "ölçülerde",
      "kaybıyla"
    ],
    "options": [
      "Kanin koruyuculu oklüzyon",
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Zirkonyum oksit",
      "Dezenfeksiyon sonrası derhal"
    ],
    "correctIndex": 3
  },
  {
    "id": 246,
    "code": "S246",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ante kanununa göre sabit köprü protezlerinde destek dişlerin neleri toplamı, eksik dişlerin toplamına eşit veya büyük olmalıdır?",
    "answer": "Peridontal membran (kök yüzey) alanları toplamı.",
    "coreAnswer": "Peridontal membran",
    "keywords": [
      "Ante",
      "kanununa",
      "sabit",
      "köprü",
      "protezlerinde"
    ],
    "options": [
      "Konuşurken dişlerin birbirine çarpması",
      "Lingual plak",
      "Peridontal membran",
      "Polieter"
    ],
    "correctIndex": 2
  },
  {
    "id": 247,
    "code": "S247",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst ön bölgede estetiği ve hijyeni en iyi sağlayan, kretle noktasal/konveks temas eden köprü gövdesi (pontik) tipi?",
    "answer": "Modifiye sırt (Modified ridge-lap) veya Ovat (Ovate) pontik.",
    "coreAnswer": "Modifiye sırt",
    "keywords": [
      "bölgede",
      "estetiği",
      "hijyeni",
      "sağlayan",
      "kretle"
    ],
    "options": [
      "M. mentalis ve m. orbicularis oris",
      "Modifiye sırt",
      "Alüminyum oksit",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 248,
    "code": "S248",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt arka bölgede estetik kaygı olmadığında креte hiç değmeyen, hijyeni en yüksek köprü gövdesi hangisidir?",
    "answer": "Hijyenik (Sanitary / Balık sırtı) pontik.",
    "coreAnswer": "Hijyenik",
    "keywords": [
      "arka",
      "bölgede",
      "estetik",
      "kaygı",
      "olmadığında"
    ],
    "options": [
      "Hijyenik",
      "Rezistans",
      "Dezenfeksiyon sonrası derhal",
      "Redüksiyonsuz akut disk deplasmanı"
    ],
    "correctIndex": 0
  },
  {
    "id": 249,
    "code": "S249",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tam protez kullanan hastada sadece üst ön bölgede doğal alt dişlerin vurmasına bağlı \"Flabby ridge\" (hareketli kret), epulis fissuratum ve papiller hiperplazi görülmesi?",
    "answer": "Kombinasyon (Kelly) Sendromu.",
    "coreAnswer": "Kombinasyon",
    "keywords": [
      "protez",
      "kullanan",
      "hastada",
      "sadece",
      "bölgede"
    ],
    "options": [
      "Düşük sıcaklık degradasyonu",
      "Kimyasal bağlanma",
      "Bennett hareketi",
      "Kombinasyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 250,
    "code": "S250",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İmplant destekli sabit protezlerde vida gevşemesi ve biyolojik komplikasyonları önlemek için alt yapının implantlara gerilimsiz oturmasına ne denir?",
    "answer": "Pasif uyum (Passive fit).",
    "coreAnswer": "Pasif uyum",
    "keywords": [
      "İmplant",
      "destekli",
      "sabit",
      "protezlerde",
      "vida"
    ],
    "options": [
      "Peridontal membran",
      "Stabilizasyon splinti",
      "Pasif uyum",
      "Bukkal raf"
    ],
    "correctIndex": 2
  },
  {
    "id": 251,
    "code": "S251",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İmplant-abutment bağlantısında mikro-hareketi ve kret kemik kaybını azaltan dar çaplı abutment tasarım konsepti?",
    "answer": "Platform switching (veya Mors konik bağlantı).",
    "coreAnswer": "Platform switching",
    "keywords": [
      "İmplant",
      "abutment",
      "bağlantısında",
      "mikro",
      "hareketi"
    ],
    "options": [
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "Platform switching",
      "İstirahat aralığı",
      "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$"
    ],
    "correctIndex": 1
  },
  {
    "id": 252,
    "code": "S252",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Doğal diş ile osseointegre implant birbirine rijit köprü ile bağlanırsa hangi komplikasyon gelişir?",
    "answer": "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon (gömülme) görülür.",
    "coreAnswer": "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon",
    "keywords": [
      "Doğal",
      "osseointegre",
      "implant",
      "birbirine",
      "rijit"
    ],
    "options": [
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon",
      "Kanin koruyuculu oklüzyon",
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Zirkonyum oksit"
    ],
    "correctIndex": 0
  },
  {
    "id": 253,
    "code": "S253",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Porselen-metal bağlantısında en kritik mekanizma olan ve metal yüzeyinde oluşan bağ tipi nedir?",
    "answer": "Kimyasal bağlanma (Metal yüzeyindeki oksit tabakası ile porselen arasındaki kovalent/iyonik bağ).",
    "coreAnswer": "Kimyasal bağlanma",
    "keywords": [
      "Porselen",
      "metal",
      "bağlantısında",
      "kritik",
      "mekanizma"
    ],
    "options": [
      "Konuşurken dişlerin birbirine çarpması",
      "Lingual plak",
      "Polieter",
      "Kimyasal bağlanma"
    ],
    "correctIndex": 3
  },
  {
    "id": 254,
    "code": "S254",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Metal-seramik restorasyonlarda soğuma sırasında porselende hafif basma (kompresif) gerilimi oluşması için ısısal genleşme katsayısı (IGK) nasıl olmalıdır?",
    "answer": "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük ($0,5\\text{–}1,0 \\times 10^{-6}/^\\circ\\text{C}$) olmalıdır.",
    "coreAnswer": "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
    "keywords": [
      "Metal",
      "seramik",
      "restorasyonlarda",
      "soğuma",
      "sırasında"
    ],
    "options": [
      "M. mentalis ve m. orbicularis oris",
      "Alüminyum oksit",
      "Metalin IGK değeri, porselenin IGK değerinden biraz daha büyük",
      "Platform switching"
    ],
    "correctIndex": 2
  },
  {
    "id": 255,
    "code": "S255",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Akrilik rezin protez kaidelerinde artık monomer salınımına bağlı mukoza irritasyonunu önlemek için ne yapılmalıdır?",
    "answer": "Polimerizasyon süresine/sıcaklığına uyulmalı ve protez teslim öncesi 24 saat suda bekletilmelidir.",
    "coreAnswer": "Polimerizasyon süresine/sıcaklığına uyulmalı ve protez teslim öncesi 24 saat suda bekletilmelidir",
    "keywords": [
      "Akrilik",
      "rezin",
      "protez",
      "kaidelerinde",
      "artık"
    ],
    "options": [
      "Rezistans",
      "Polimerizasyon süresine/sıcaklığına uyulmalı ve protez teslim öncesi 24 saat suda bekletilmelidir",
      "Dezenfeksiyon sonrası derhal",
      "Redüksiyonsuz akut disk deplasmanı"
    ],
    "correctIndex": 1
  },
  {
    "id": 256,
    "code": "S256",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş renginin seçiminde Munsell renk sisteminin üç boyutu (Hue, Chroma, Value) neyi ifade eder?",
    "answer": "Hue: Ana renk tonu (A, B, C, D); Chroma: Rengin doygunluğu/yoğunluğu (1, 2, 3, 4); Value: Parlaklık/açıklık-koyuluk (En kritik parametre!).",
    "coreAnswer": "Hue: Ana renk tonu",
    "keywords": [
      "renginin",
      "seçiminde",
      "Munsell",
      "renk",
      "sisteminin"
    ],
    "options": [
      "Hue: Ana renk tonu",
      "Düşük sıcaklık degradasyonu",
      "Doğal dişin periodontal ligamenti esnediği için implant tüm yükü alır, doğal diş simandan çıkar ve intruzyon",
      "Bennett hareketi"
    ],
    "correctIndex": 0
  },
  {
    "id": 257,
    "code": "S257",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir restorasyonun gün ışığında doğal dişle uyumlu görünürken floresan ışık altında farklı renkte görünmesine ne denir?",
    "answer": "Metamerizm.",
    "coreAnswer": "Metamerizm",
    "keywords": [
      "restorasyonun",
      "ışığında",
      "doğal",
      "dişle",
      "uyumlu"
    ],
    "options": [
      "Peridontal membran",
      "Stabilizasyon splinti",
      "Bukkal raf",
      "Metamerizm"
    ],
    "correctIndex": 3
  },
  {
    "id": 258,
    "code": "S258",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "TME’de ağız açılırken klik sesi duyulması ve tam açıkken eklemin normal konuma gelmesi hangi patolojiyi gösterir?",
    "answer": "Redüksiyonlu disk deplasmanı (Resiprokal klik).",
    "coreAnswer": "Redüksiyonlu disk deplasmanı",
    "keywords": [
      "ağız",
      "açılırken",
      "klik",
      "sesi",
      "duyulması"
    ],
    "options": [
      "Kimyasal bağlanma",
      "İstirahat aralığı",
      "Redüksiyonlu disk deplasmanı",
      "Üst çenede en az $6\\text{ mm}$, alt çenede en az $3\\text{–}4\\text{ mm}$"
    ],
    "correctIndex": 2
  },
  {
    "id": 259,
    "code": "S259",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Daha önce klik sesi olan hastada klik sesinin kaybolması, ağız açıklığının $<25\\text{–}30\\text{ mm}$’de kısıtlanması (\"Closed lock\") ve çenenin lezyon tarafına kayması?",
    "answer": "Redüksiyonsuz akut disk deplasmanı.",
    "coreAnswer": "Redüksiyonsuz akut disk deplasmanı",
    "keywords": [
      "Daha",
      "klik",
      "sesi",
      "hastada",
      "sesinin"
    ],
    "options": [
      "Kanin koruyuculu oklüzyon",
      "Redüksiyonsuz akut disk deplasmanı",
      "M. constrictor pharyngeus superior ve m. mylohyoideus",
      "Zirkonyum oksit"
    ],
    "correctIndex": 1
  },
  {
    "id": 260,
    "code": "S260",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "protetik",
    "subject": "Protetik Diş Tedavisi",
    "branchNumber": 9,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bruksizm ve miyofasiyal ağrı disfonksiyonunda kas hiperaktivitesini çözmek için en sık kullanılan oklüzal aparey?",
    "answer": "Stabilizasyon splinti (Michigan tipi tam ark sert akrilik splint — Kanin rehberlikli).",
    "coreAnswer": "Stabilizasyon splinti",
    "keywords": [
      "Bruksizm",
      "miyofasiyal",
      "ağrı",
      "disfonksiyonunda",
      "hiperaktivitesini"
    ],
    "options": [
      "Stabilizasyon splinti",
      "Konuşurken dişlerin birbirine çarpması",
      "Lingual plak",
      "Polieter"
    ],
    "correctIndex": 0
  },
  {
    "id": 261,
    "code": "S261",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş çürüğü oluşumunda (Keyes-Jordan halkaları) birincil etkenler bakteriler, fermente olabilir karbonhidrat, konak/diş ve zaman iken, tükürük akışı, hijyen ve sosyoekonomik durum ne olarak sınıflandırılır?",
    "answer": "İkincil (modifiye edici) etkenler (Dikkat: ÖSYM soru kökünde birincil/ikincil ayrımını doğrudan sorar).",
    "coreAnswer": "İkincil",
    "keywords": [
      "çürüğü",
      "oluşumunda",
      "Keyes",
      "Jordan",
      "halkaları"
    ],
    "options": [
      "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan",
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "FOTI / DIFOTI",
      "İkincil"
    ],
    "correctIndex": 3
  },
  {
    "id": 262,
    "code": "S262",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Non-kavite (kavitasyonsuz) başlangıç mine çürüğü olan \"Beyaz Nokta Lezyonu\" (White spot lesion) kurutulduğunda neden tebeşirimsi opak görünür?",
    "answer": "Yüzey altı demineralizasyon sonucu gözeneklerin su yerine hava ile dolması (Havanın kırılma indisi $1,00$, suyun $1,33$, hidroksiapatitin $1,62$).",
    "coreAnswer": "Yüzey altı demineralizasyon sonucu gözeneklerin su yerine hava ile dolması",
    "keywords": [
      "kavite",
      "kavitasyonsuz",
      "başlangıç",
      "mine",
      "çürüğü"
    ],
    "options": [
      "Rezervuar etkisi",
      "Hidrodinamik Teori",
      "Yüzey altı demineralizasyon sonucu gözeneklerin su yerine hava ile dolması",
      "Sklerotik"
    ],
    "correctIndex": 2
  },
  {
    "id": 263,
    "code": "S263",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kavitasyon göstermeyen arayüz başlangıç çürükleri ve beyaz nokta lezyonlarında mikro-invaziv olarak uygulanan düşük viskoziteli rezin tekniği nedir?",
    "answer": "Rezin infiltrasyon tekniği (%15 $HCl$ ile yüzey tabakası kaldırılır, TEGDMA bazlı infiltrant uygulanır).",
    "coreAnswer": "Rezin infiltrasyon tekniği",
    "keywords": [
      "Kavitasyon",
      "göstermeyen",
      "arayüz",
      "başlangıç",
      "çürükleri"
    ],
    "options": [
      "Eksternal servikal kök rezorpsiyonu",
      "Rezin infiltrasyon tekniği",
      "Bölümlü",
      "Florapatit: $\\text{pH } 4,5$"
    ],
    "correctIndex": 1
  },
  {
    "id": 264,
    "code": "S264",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mine başlangıç çürüğünün histolojik tabakaları dıştan (yüzeyden) içe (dentine) doğru nasıl sıralanır?",
    "answer": "1. Sağlam yüzey tabakası → 2. Lezyon gövdesi (En geniş ve en fazla mineral kaybı olan tabaka) → 3. Karanlık tabaka → 4. Şeffaf (Translucent) tabaka (İlerleme cephesi).",
    "coreAnswer": "1. Sağlam yüzey tabakası → 2. Lezyon gövdesi",
    "keywords": [
      "Mine",
      "başlangıç",
      "çürüğünün",
      "histolojik",
      "tabakaları"
    ],
    "options": [
      "1. Sağlam yüzey tabakası → 2. Lezyon gövdesi",
      "Sinir blokajı: Potasyum nitrat",
      "Kalın grenli",
      "Self-etch adezivler veya cam iyonomer kaide"
    ],
    "correctIndex": 0
  },
  {
    "id": 265,
    "code": "S265",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dentin çürüğünün histolojik tabakalarından hangisi bakteri içermez, odontoblast uzantıları sağlamdır ve remineralize olabilir (kaldırılmaz)?",
    "answer": "Çürükten etkilenmiş dentin (Affected / İç çürük dentin — Kollajen çapraz bağları sağlamdır).",
    "coreAnswer": "Çürükten etkilenmiş dentin",
    "keywords": [
      "Dentin",
      "çürüğünün",
      "histolojik",
      "tabakalarından",
      "hangisi"
    ],
    "options": [
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Black Sınıf IV",
      "Poliakrilik asidin karboksil",
      "Çürükten etkilenmiş dentin"
    ],
    "correctIndex": 3
  },
  {
    "id": 266,
    "code": "S266",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bakteri istilasına uğramış, kollajeni denatüre olmuş ve remineralize olamayan dış dentin tabakasına ne denir?",
    "answer": "Enfekte dentin (Infected dentin — Kavite preparasyonunda tamamen kaldırılır).",
    "coreAnswer": "Enfekte dentin",
    "keywords": [
      "Bakteri",
      "istilasına",
      "uğramış",
      "kollajeni",
      "denatüre"
    ],
    "options": [
      "İkincil",
      "Endojen dentin MMP",
      "Enfekte dentin",
      "Serbest oksijen radikallerinin büyük organik kromofor"
    ],
    "correctIndex": 2
  },
  {
    "id": 267,
    "code": "S267",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mine hidroksiapatitinin kritik pH değeri $5,5$ iken, florapatitin ve kök yüzeyi (sement/dentin) apatitinin kritik pH değerleri kaçtır?",
    "answer": "Florapatit: $\\text{pH } 4,5$; Kök yüzeyi / Dentin: $\\text{pH } 6,2\\text{–}6,7$ (Bu nedenle kök çürükleri çok daha yüksek pH’ta başlar!).",
    "coreAnswer": "Florapatit: $\\text{pH } 4,5$",
    "keywords": [
      "Mine",
      "hidroksiapatitinin",
      "kritik",
      "değeri",
      "iken"
    ],
    "options": [
      "Oblik sırt",
      "Florapatit: $\\text{pH } 4,5$",
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Abrazyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 268,
    "code": "S268",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Black sınıflandırmasına göre kesici ve kanin dişlerin aproksimal yüzeylerinde yer alan ve insizal köşeyi içine alan kaviteler hangi sınıftır?",
    "answer": "Black Sınıf IV (İnsizal köşeyi içermezse Sınıf III; tüm dişlerin gingival üçlüsü Sınıf V; tüberkül tepeleri/insizal kenarlar Sınıf VI).",
    "coreAnswer": "Black Sınıf IV",
    "keywords": [
      "Black",
      "sınıflandırmasına",
      "kesici",
      "kanin",
      "dişlerin"
    ],
    "options": [
      "Black Sınıf IV",
      "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan",
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "FOTI / DIFOTI"
    ],
    "correctIndex": 0
  },
  {
    "id": 269,
    "code": "S269",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst birinci büyük azı dişinin oklüzal yüzeyinde mezial ve distal fossaları ayıran ve mesiolingual tüberkülden distobukkal tüberküle uzanan anatomik yapı?",
    "answer": "Oblik sırt (Oblique ridge) ve onu çaprazlayan oblik sırtın transvers oluğu.",
    "coreAnswer": "Oblik sırt",
    "keywords": [
      "birinci",
      "büyük",
      "dişinin",
      "oklüzal",
      "yüzeyinde"
    ],
    "options": [
      "Rezervuar etkisi",
      "Hidrodinamik Teori",
      "Sklerotik",
      "Oblik sırt"
    ],
    "correctIndex": 3
  },
  {
    "id": 270,
    "code": "S270",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mineye fosforik asit (%35–37) uygulandığında oluşan pürüzlendirme tiplerinden Tip I ve Tip II neyi ifade eder?",
    "answer": "Tip I: Prizma merkezinin (çekirdeğinin) çözünmesi; Tip II: Prizma periferinin çözünmesi.",
    "coreAnswer": "Tip I: Prizma merkezinin",
    "keywords": [
      "Mineye",
      "fosforik",
      "asit",
      "uygulandığında",
      "oluşan"
    ],
    "options": [
      "Eksternal servikal kök rezorpsiyonu",
      "Bölümlü",
      "Tip I: Prizma merkezinin",
      "Enfekte dentin"
    ],
    "correctIndex": 2
  },
  {
    "id": 271,
    "code": "S271",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Total-etch (Etch-and-rinse) adeziv sistemlerde dentinin asitlenmesi sonrası aşırı kurutulması hangi başarısızlığa yol açar?",
    "answer": "Demineralize kollajen ağının çökmesi (kollaps), monomerin infiltre olamaması, nanolint (nanoleakage) ve postoperatif hassasiyet (\"Wet-bonding\" / nemli bağlanma gerekir!).",
    "coreAnswer": "Demineralize kollajen ağının çökmesi",
    "keywords": [
      "Total",
      "etch",
      "Etch",
      "rinse",
      "adeziv"
    ],
    "options": [
      "Sinir blokajı: Potasyum nitrat",
      "Demineralize kollajen ağının çökmesi",
      "Kalın grenli",
      "Self-etch adezivler veya cam iyonomer kaide"
    ],
    "correctIndex": 1
  },
  {
    "id": 272,
    "code": "S272",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dentinde smear tabakasını tamamen çözen Total-etch sistemlerin aksine, Self-etch (kendinden asitli) adezivler smear tabakasına ne yapar?",
    "answer": "Smear tabakasını modifiye ederek (çözüp içine katarak) hibrit tabakanın bir parçası haline getirir; postoperatif hassasiyet riski düşüktür.",
    "coreAnswer": "Smear tabakasını modifiye ederek",
    "keywords": [
      "Dentinde",
      "smear",
      "tabakasını",
      "tamamen",
      "çözen"
    ],
    "options": [
      "Smear tabakasını modifiye ederek",
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Florapatit: $\\text{pH } 4,5$",
      "Poliakrilik asidin karboksil"
    ],
    "correctIndex": 0
  },
  {
    "id": 273,
    "code": "S273",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hem total-etch, hem self-etch, hem de selektif mine asitleme modunda kullanılabilen ve 10-MDP içeren adeziv sistem?",
    "answer": "Üniversal (Multi-mod) adezivler.",
    "coreAnswer": "Üniversal",
    "keywords": [
      "total",
      "etch",
      "self",
      "selektif",
      "mine"
    ],
    "options": [
      "İkincil",
      "Endojen dentin MMP",
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "Üniversal"
    ],
    "correctIndex": 3
  },
  {
    "id": 274,
    "code": "S274",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Derin dentin kavitelerinde (RDT $<0,5\\text{ mm}$) tübül çapları genişlediği ve tübül içi sıvı arttığı için hangi adeziv sistem tercih edilir?",
    "answer": "Self-etch adezivler veya cam iyonomer kaide (Derin dentinde bağlanma gücü yüzeyel dentine göre daha düşüktür!).",
    "coreAnswer": "Self-etch adezivler veya cam iyonomer kaide",
    "keywords": [
      "Derin",
      "dentin",
      "kavitelerinde",
      "text",
      "tübül"
    ],
    "options": [
      "Black Sınıf IV",
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Abrazyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 275,
    "code": "S275",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Klorheksidin diglukonat (%2) kavitede asitleme sonrası bağlanma dayanımını zamanla korumak için hangi amaçla kullanılır?",
    "answer": "Endojen dentin MMP (Matriks metalloproteinaz) ve sistein katepsin enzimlerini inhibe ederek hibrit tabakanın yıkımını önlemek.",
    "coreAnswer": "Endojen dentin MMP",
    "keywords": [
      "Klorheksidin",
      "diglukonat",
      "kavitede",
      "asitleme",
      "sonrası"
    ],
    "options": [
      "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan",
      "Endojen dentin MMP",
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "FOTI / DIFOTI"
    ],
    "correctIndex": 1
  },
  {
    "id": 276,
    "code": "S276",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kavitelerde polimerizasyon büzülmesi stresini belirleyen C-Faktörü (Konfigürasyon faktörü) nasıl hesaplanır ve en yüksek olduğu kavite hangisidir?",
    "answer": "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan (serbest) yüzey sayısı}$; En yüksek ($5/1 = 5$) Black Sınıf I ve Sınıf V kutu kavitelerdedir.",
    "coreAnswer": "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan",
    "keywords": [
      "Kavitelerde",
      "polimerizasyon",
      "büzülmesi",
      "stresini",
      "belirleyen"
    ],
    "options": [
      "$\\text{C-Faktörü} = \\text{Bağlanan yüzey sayısı} / \\text{Bağlanmayan",
      "Rezervuar etkisi",
      "Hidrodinamik Teori",
      "Sklerotik"
    ],
    "correctIndex": 0
  },
  {
    "id": 277,
    "code": "S277",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kompozit rezinlerde yüksek molekül ağırlıklı Bis-GMA monomerinin viskozitesini düşürmek için eklenen seyreltici monomer nedir?",
    "answer": "TEGDMA (Polimerizasyon büzülmesini ve su emilimini artırır).",
    "coreAnswer": "TEGDMA",
    "keywords": [
      "Kompozit",
      "rezinlerde",
      "yüksek",
      "molekül",
      "ağırlıklı"
    ],
    "options": [
      "Eksternal servikal kök rezorpsiyonu",
      "Bölümlü",
      "Enfekte dentin",
      "TEGDMA"
    ],
    "correctIndex": 3
  },
  {
    "id": 278,
    "code": "S278",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kompozit rezinlerde görünür mavi ışıkla ($468\\text{ nm}$) aktive olan en yaygın foto-başlatıcı ve neden olduğu estetik dezavantaj nedir?",
    "answer": "Kamforokinon (CQ); Sarı renkli olduğu için çok açık (bleach) renkli kompozitlerde sararmaya yol açar (Alternatifi: Lucirin TPO / Ivocerin).",
    "coreAnswer": "Kamforokinon",
    "keywords": [
      "Kompozit",
      "rezinlerde",
      "görünür",
      "mavi",
      "ışıkla"
    ],
    "options": [
      "Sinir blokajı: Potasyum nitrat",
      "Kalın grenli",
      "Kamforokinon",
      "Üniversal"
    ],
    "correctIndex": 2
  },
  {
    "id": 279,
    "code": "S279",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kompozit rezinlerin en üst yüzeyinde atmosferik oksijenin serbest radikalleri bağlaması sonucu sertleşmeden kalan tabakaya ne denir?",
    "answer": "Oksijen inhibisyon tabakası (Tabakalar arası kimyasal bağlantı sağlar; en son tabakada gliserin jel altında ışık tutularak veya cila ile uzaklaştırılır).",
    "coreAnswer": "Oksijen inhibisyon tabakası",
    "keywords": [
      "Kompozit",
      "rezinlerin",
      "yüzeyinde",
      "atmosferik",
      "oksijenin"
    ],
    "options": [
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Oksijen inhibisyon tabakası",
      "Florapatit: $\\text{pH } 4,5$",
      "Poliakrilik asidin karboksil"
    ],
    "correctIndex": 1
  },
  {
    "id": 280,
    "code": "S280",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tek seferde $4\\text{–}5\\text{ mm}$ kalınlığında yerleştirilebilen Bulk-fill kompozitlerde ışık geçirgenliği ve derin polimerizasyon nasıl sağlanmıştır?",
    "answer": "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar (Ivocerin/TPO) kullanılması.",
    "coreAnswer": "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar",
    "keywords": [
      "seferde",
      "text",
      "kalınlığında",
      "yerleştirilebilen",
      "Bulk"
    ],
    "options": [
      "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar",
      "İkincil",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Serbest oksijen radikallerinin büyük organik kromofor"
    ],
    "correctIndex": 0
  },
  {
    "id": 281,
    "code": "S281",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cam iyonomer simanların (CİS) diş dokusuna kimyasal olarak bağlanmasını sağlayan temel mekanizma nedir?",
    "answer": "Poliakrilik asidin karboksil ($COO^-$) grupları ile hidroksiapatitin kalsiyum ($Ca^{2+}$) iyonları arasındaki iyonik şelasyon bağı.",
    "coreAnswer": "Poliakrilik asidin karboksil",
    "keywords": [
      "iyonomer",
      "simanların",
      "dokusuna",
      "kimyasal",
      "bağlanmasını"
    ],
    "options": [
      "Black Sınıf IV",
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Abrazyon",
      "Poliakrilik asidin karboksil"
    ],
    "correctIndex": 3
  },
  {
    "id": 282,
    "code": "S282",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cam iyonomer siman uygulamasından önce kaviteye %10–20'lik poliakrilik asit (Conditioner) uygulanmasının amacı nedir?",
    "answer": "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek.",
    "coreAnswer": "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
    "keywords": [
      "iyonomer",
      "siman",
      "uygulamasından",
      "kaviteye",
      "poliakrilik"
    ],
    "options": [
      "Endojen dentin MMP",
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "FOTI / DIFOTI"
    ],
    "correctIndex": 2
  },
  {
    "id": 283,
    "code": "S283",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cam iyonomer simanların florür salıp diş macunu/jel ile tekrar florür depolayabilme özelliğine ne ad verilir?",
    "answer": "Rezervuar etkisi (Rechargeability) — Kavitasyon gösteren kök yüzeyi çürüklerinde ilk tercihtir.",
    "coreAnswer": "Rezervuar etkisi",
    "keywords": [
      "iyonomer",
      "simanların",
      "florür",
      "salıp",
      "macunu"
    ],
    "options": [
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Rezervuar etkisi",
      "Hidrodinamik Teori",
      "Sklerotik"
    ],
    "correctIndex": 1
  },
  {
    "id": 284,
    "code": "S284",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dental amalgamda korozyona en yatkın olan, marjinal kırılma ve creep (akma) oluşturan en zayıf faz hangisidir?",
    "answer": "Gama-2 ($\\gamma_2$ — Kalay-Cıva / $Sn_{7-8}Hg$) fazı.",
    "coreAnswer": "Gama-2",
    "keywords": [
      "Dental",
      "amalgamda",
      "korozyona",
      "yatkın",
      "marjinal"
    ],
    "options": [
      "Gama-2",
      "Eksternal servikal kök rezorpsiyonu",
      "Bölümlü",
      "Enfekte dentin"
    ],
    "correctIndex": 0
  },
  {
    "id": 285,
    "code": "S285",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yüksek bakırlı (%12+ $Cu$) amalgamlarda bakırın kalay ile birleşerek ($Cu_6Sn_5$ — $\\eta$ fazı) ortadan kaldırdığı faz hangisidir?",
    "answer": "Gama-2 ($\\gamma_2$) fazını ortadan kaldırır (Non-gama 2 amalgam; en güçlü faz ise reaksiyona girmemiş $\\gamma$ [$Ag_3Sn$] fazıdır).",
    "coreAnswer": "Gama-2",
    "keywords": [
      "Yüksek",
      "bakırlı",
      "amalgamlarda",
      "bakırın",
      "kalay"
    ],
    "options": [
      "Sinir blokajı: Potasyum nitrat",
      "Kalın grenli",
      "Üniversal",
      "Gama-2"
    ],
    "correctIndex": 3
  },
  {
    "id": 286,
    "code": "S286",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çinko içeren amalgam kavitelerinde tükürük kontaminasyonu olursa birkaç gün sonra başlayan şiddetli ağrı ve taşmanın nedeni?",
    "answer": "Gecikmiş genleşme (Delayed expansion) — Çinkonun su ile reaksiyona girip hidrojen ($H_2$) gazı üretmesi.",
    "coreAnswer": "Gecikmiş genleşme",
    "keywords": [
      "Çinko",
      "içeren",
      "amalgam",
      "kavitelerinde",
      "tükürük"
    ],
    "options": [
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Florapatit: $\\text{pH } 4,5$",
      "Gecikmiş genleşme",
      "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar"
    ],
    "correctIndex": 2
  },
  {
    "id": 287,
    "code": "S287",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Öjenol (ZOE) içeren kaideler neden kompozit rezin ve adeziv sistemlerin altında doğrudan kullanılmaz?",
    "answer": "Öjenol fenolik bir bileşiktir; serbest radikalleri yakalayarak reçinenin polimerizasyonunu inhibe eder.",
    "coreAnswer": "Öjenol fenolik bir bileşiktir",
    "keywords": [
      "Öjenol",
      "içeren",
      "kaideler",
      "kompozit",
      "rezin"
    ],
    "options": [
      "İkincil",
      "Öjenol fenolik bir bileşiktir",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Serbest oksijen radikallerinin büyük organik kromofor"
    ],
    "correctIndex": 1
  },
  {
    "id": 288,
    "code": "S288",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Vital diş beyazlatmada (Bleaching) hidrojen peroksitin ($H_2O_2$) diş yapısında renklenmeyi giderme mekanizması nedir?",
    "answer": "Serbest oksijen radikallerinin büyük organik kromofor (renkli) moleküllerdeki çift bağları oksitleyerek küçük, renksiz moleküllere parçalaması.",
    "coreAnswer": "Serbest oksijen radikallerinin büyük organik kromofor",
    "keywords": [
      "Vital",
      "beyazlatmada",
      "Bleaching",
      "hidrojen",
      "peroksitin"
    ],
    "options": [
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "Black Sınıf IV",
      "Poliakrilik asidin karboksil",
      "Abrazyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 289,
    "code": "S289",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Vital beyazlatma işlemi sonrasında hemen kompozit restorasyon yapılırsa bağlanma dayanımı neden düşer ve ne yapılmalıdır?",
    "answer": "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder; restorasyon 1–2 hafta ertelenmeli veya %10 sodyum askorbat (antioksidan) uygulanmalıdır.",
    "coreAnswer": "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
    "keywords": [
      "Vital",
      "beyazlatma",
      "işlemi",
      "sonrasında",
      "hemen"
    ],
    "options": [
      "Endojen dentin MMP",
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "FOTI / DIFOTI",
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder"
    ],
    "correctIndex": 3
  },
  {
    "id": 290,
    "code": "S290",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Non-vital (devital) walking bleach sonrasında servikal bölgede gelişebilen en ciddi komplikasyon ve önlemi nedir?",
    "answer": "Eksternal servikal kök rezorpsiyonu; Önlemek için gutta-perka üzerine mine-sement sınırında mutlaka $2\\text{ mm}$ cam iyonomer / MTA bariyer konmalı ve ısı (termokatalitik yöntem) uygulanmamalıdır.",
    "coreAnswer": "Eksternal servikal kök rezorpsiyonu",
    "keywords": [
      "vital",
      "devital",
      "walking",
      "bleach",
      "sonrasında"
    ],
    "options": [
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Hidrodinamik Teori",
      "Eksternal servikal kök rezorpsiyonu",
      "Sklerotik"
    ],
    "correctIndex": 2
  },
  {
    "id": 291,
    "code": "S291",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "%10'luk Karbamid peroksit jel yıkıldığında yaklaşık yüzde kaçlık Hidrojen peroksit ve üre açığa çıkar?",
    "answer": "Yaklaşık %3,3–3,5 Hidrojen peroksit ve %6,5 Üre (Üre amonyağa dönüşerek pH’ı yükseltir).",
    "coreAnswer": "Yaklaşık %3,3–3,5 Hidrojen peroksit ve %6,5 Üre",
    "keywords": [
      "Karbamid",
      "peroksit",
      "yıkıldığında",
      "yaklaşık",
      "yüzde"
    ],
    "options": [
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "Yaklaşık %3,3–3,5 Hidrojen peroksit ve %6,5 Üre",
      "Bölümlü",
      "Enfekte dentin"
    ],
    "correctIndex": 1
  },
  {
    "id": 292,
    "code": "S292",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklukta yüksek doz florür alımına bağlı oluşan simetrik, yaygın opasiteler (Florozis) ile Molar-İnsiziv Hipomineralizasyon (MİH) nasıl ayırt edilir?",
    "answer": "Florozis simetrik ve diffüzdür (sınırları belirsizdir); MİH ise asimetrik ve keskin sınırlı (demarcated) beyaz-sarı-kahverengi opasiteler gösterir ve posterüptif mine yıkımı yapar.",
    "coreAnswer": "Florozis simetrik ve diffüzdür",
    "keywords": [
      "Çocuklukta",
      "yüksek",
      "florür",
      "alımına",
      "bağlı"
    ],
    "options": [
      "Florozis simetrik ve diffüzdür",
      "Sinir blokajı: Potasyum nitrat",
      "Kalın grenli",
      "Üniversal"
    ],
    "correctIndex": 0
  },
  {
    "id": 293,
    "code": "S293",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bakteri olmaksızın mide asidi (reflü, bulimia) veya asitli içeceklerle diş sert dokularının kimyasal kaybına ne denir?",
    "answer": "Erozyon (Klinik olarak restorasyonlar diş yüzeyinden \"yükselmiş/ada\" gibi kalır, üst kesicilerin palatinal yüzeyi etkilenir).",
    "coreAnswer": "Erozyon",
    "keywords": [
      "Bakteri",
      "olmaksızın",
      "mide",
      "asidi",
      "reflü"
    ],
    "options": [
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Florapatit: $\\text{pH } 4,5$",
      "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar",
      "Erozyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 294,
    "code": "S294",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Oklüzal parafonksiyonel kuvvetlerin dişin servikal (kole) bölgesinde oluşturduğu mikro-bükülme sonucu oluşan kama şeklindeki keskin defekt?",
    "answer": "Abfraksiyon.",
    "coreAnswer": "Abfraksiyon",
    "keywords": [
      "Oklüzal",
      "parafonksiyonel",
      "kuvvetlerin",
      "dişin",
      "servikal"
    ],
    "options": [
      "İkincil",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Abfraksiyon",
      "Öjenol fenolik bir bileşiktir"
    ],
    "correctIndex": 2
  },
  {
    "id": 295,
    "code": "S295",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sert diş fırçalama ve aşındırıcı macun kullanımına bağlı kanin ve premolarların vestibül kolesinde oluşan V/tabak şeklindeki aşınma?",
    "answer": "Abrazyon (Karşıt dişlerin temasıyla oluşan fizyolojik/patolojik oklüzal aşınma ise Atrisyondur).",
    "coreAnswer": "Abrazyon",
    "keywords": [
      "Sert",
      "fırçalama",
      "aşındırıcı",
      "macun",
      "kullanımına"
    ],
    "options": [
      "Black Sınıf IV",
      "Abrazyon",
      "Poliakrilik asidin karboksil",
      "Abfraksiyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 296,
    "code": "S296",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dentin hassasiyetinin mekanizmasını açıklayan ve günümüzde kabul gören Brännström teorisi nedir?",
    "answer": "Hidrodinamik Teori (Termal, ozmotik veya dokunsal uyarıların dentin tübül sıvısını hareket ettirerek pulpadaki $A\\delta$ mekanoreseptörlerini uyarması).",
    "coreAnswer": "Hidrodinamik Teori",
    "keywords": [
      "Dentin",
      "hassasiyetinin",
      "mekanizmasını",
      "açıklayan",
      "günümüzde"
    ],
    "options": [
      "Hidrodinamik Teori",
      "Endojen dentin MMP",
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "FOTI / DIFOTI"
    ],
    "correctIndex": 0
  },
  {
    "id": 297,
    "code": "S297",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hassasiyet giderici diş macunlarında sinir depolarizasyonunu doğrudan bloke eden ajan ile tübülleri tıkayan ajanlar hangileridir?",
    "answer": "Sinir blokajı: Potasyum nitrat ($K^+$ hücre dışı konsantrasyonunu artırarak aksiyon potansiyelini önler); Tübül tıkayıcılar: Arjinin-kalsiyum karbonat, Stronsiyum, Okzalatlar, Glutaraldehit (HEMA).",
    "coreAnswer": "Sinir blokajı: Potasyum nitrat",
    "keywords": [
      "Hassasiyet",
      "giderici",
      "macunlarında",
      "sinir",
      "depolarizasyonunu"
    ],
    "options": [
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Abrazyon",
      "Sklerotik",
      "Sinir blokajı: Potasyum nitrat"
    ],
    "correctIndex": 3
  },
  {
    "id": 298,
    "code": "S298",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Direkt pulpa kaplamasında kalsiyum hidroksitin ($\\text{Ca(OH)}_2$) yüksek pH ($12,5$) ile oluşturduğu koagülasyon nekrozu ve tersiyer dentin köprüsüne alternatif olarak tübelsiz, daha kalın ve sızdırmaz köprü oluşturan biyoseramikler?",
    "answer": "MTA (Mineral Trioksit Agregat) ve Biyodentin (Kalsiyum silikat bazlı simanlar).",
    "coreAnswer": "MTA",
    "keywords": [
      "Direkt",
      "pulpa",
      "kaplamasında",
      "kalsiyum",
      "hidroksitin"
    ],
    "options": [
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "Bölümlü",
      "MTA",
      "Enfekte dentin"
    ],
    "correctIndex": 2
  },
  {
    "id": 299,
    "code": "S299",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "inlay (tüberkülleri kapsamayan) ve Onlay (en az bir tüberkülü örten) indirekt restorasyonlarda kavite duvarları nasıl hazırlanmalıdır?",
    "answer": "Retantif andırkat içermez; oklüzale doğru $6^\\circ\\text{–}12^\\circ$ dışa açılan (divergent) duvarlar hazırlanır.",
    "coreAnswer": "Retantif andırkat içermez",
    "keywords": [
      "inlay",
      "tüberkülleri",
      "kapsamayan",
      "Onlay",
      "tüberkülü"
    ],
    "options": [
      "Hidrodinamik Teori",
      "Retantif andırkat içermez",
      "Kalın grenli",
      "Üniversal"
    ],
    "correctIndex": 1
  },
  {
    "id": 300,
    "code": "S300",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lazerle kavite preparasyonunda su ve hidroksiapatit tarafından en yüksek oranda emilen sert doku lazerleri hangileridir?",
    "answer": "Er:YAG ($2940\\text{ nm}$) ve Er,Cr:YSGG ($2780\\text{ nm}$) lazerler (Termomekanik ablasyon / mikro-patlama ile çalışır).",
    "coreAnswer": "Er:YAG",
    "keywords": [
      "Lazerle",
      "kavite",
      "preparasyonunda",
      "hidroksiapatit",
      "yüksek"
    ],
    "options": [
      "Er:YAG",
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Florapatit: $\\text{pH } 4,5$",
      "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar"
    ],
    "correctIndex": 0
  },
  {
    "id": 301,
    "code": "S301",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lazer floresans yöntemiyle ($655\\text{ nm}$ kırmızı ışık) bakteriyel porfirinleri algılayarak oklüzal çürük tespiti yapan cihaz?",
    "answer": "DIAGNOdent.",
    "coreAnswer": "DIAGNOdent",
    "keywords": [
      "Lazer",
      "floresans",
      "yöntemiyle",
      "text",
      "kırmızı"
    ],
    "options": [
      "İkincil",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Öjenol fenolik bir bileşiktir",
      "DIAGNOdent"
    ],
    "correctIndex": 3
  },
  {
    "id": 302,
    "code": "S302",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Arayüz çürüklerinin radyasyonsuz, soğuk beyaz ışık (veya yakın kızılötesi - NIR) geçirgenliği ile tespit edildiği yöntem?",
    "answer": "FOTI / DIFOTI (Fiber-Optik Transillüminasyon).",
    "coreAnswer": "FOTI / DIFOTI",
    "keywords": [
      "Arayüz",
      "çürüklerinin",
      "radyasyonsuz",
      "soğuk",
      "beyaz"
    ],
    "options": [
      "Black Sınıf IV",
      "Poliakrilik asidin karboksil",
      "FOTI / DIFOTI",
      "Abfraksiyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 303,
    "code": "S303",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sınıf II kompozit restorasyonlarda sıkı aproksimal kontak ve anatomik kontur elde etmek için en ideal matriks sistemi?",
    "answer": "Bölümlü (Seksiyonel) konturlu matriks ve ayırıcı halka (separation ring) + kama.",
    "coreAnswer": "Bölümlü",
    "keywords": [
      "Sınıf",
      "kompozit",
      "restorasyonlarda",
      "sıkı",
      "aproksimal"
    ],
    "options": [
      "Endojen dentin MMP",
      "Bölümlü",
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "DIAGNOdent"
    ],
    "correctIndex": 1
  },
  {
    "id": 304,
    "code": "S304",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kama (wedge) aproksimal kavitede nereye ve hangi yönden yerleştirilir?",
    "answer": "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden (genellikle lingual/palatinalden) yerleştirilir.",
    "coreAnswer": "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
    "keywords": [
      "Kama",
      "wedge",
      "aproksimal",
      "kavitede",
      "nereye"
    ],
    "options": [
      "Dişeti papilini koruyup matriksi koleye adapte etmek için gingival basamağın hemen altına, en geniş embrazürden",
      "Smear tabakasını kaldırıp dentin tübüllerini açmadan yüzey enerjisini artırmak ve $Ca^{2+}$ iyonlarını serbestleştirmek",
      "Abrazyon",
      "Sklerotik"
    ],
    "correctIndex": 0
  },
  {
    "id": 305,
    "code": "S305",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tetrasiklin renklenmelerinde dişin hangi bölgesi daha koyu renklenir ve hangi derecede beyazlatma yerine lamina tercih edilir?",
    "answer": "Kalsifiye olan dentin dokusuna şelasyonla bağlanır (servikal üçlü daha koyudur); 3. ve 4. derece (mavi-gri, bantlı) renklenmelerde beyazlatma yetersiz kalır, porselen lamina yapılır.",
    "coreAnswer": "Kalsifiye olan dentin dokusuna şelasyonla bağlanır",
    "keywords": [
      "Tetrasiklin",
      "renklenmelerinde",
      "dişin",
      "bölgesi",
      "daha"
    ],
    "options": [
      "Mine prizmaları arasındaki artık oksijen polimerizasyonu inhibe eder",
      "FOTI / DIFOTI",
      "Enfekte dentin",
      "Kalsifiye olan dentin dokusuna şelasyonla bağlanır"
    ],
    "correctIndex": 3
  },
  {
    "id": 306,
    "code": "S306",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yüzeyel mine opasiteleri ve florozis lekelerinde %18 $HCl$ + pomza ile $0,2\\text{ mm}$ mine aşındırılması işlemine ne denir?",
    "answer": "Mikroabrazyon.",
    "coreAnswer": "Mikroabrazyon",
    "keywords": [
      "Yüzeyel",
      "mine",
      "opasiteleri",
      "florozis",
      "lekelerinde"
    ],
    "options": [
      "Hidrodinamik Teori",
      "Kalın grenli",
      "Mikroabrazyon",
      "Üniversal"
    ],
    "correctIndex": 2
  },
  {
    "id": 307,
    "code": "S307",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sadece normal mine uyaranına yanıt veren, tepki süresi kısa olan sağlam pulpanın ürettiği fizyolojik dentin tipi?",
    "answer": "Sekonder dentin (Diş oklüzyona geldikten sonra yaşam boyu yavaşça üretilir; çürük/travma uyarısıyla üretilene Tersiyer [reaksiyoner/reparatif] dentin denir).",
    "coreAnswer": "Sekonder dentin",
    "keywords": [
      "Sadece",
      "normal",
      "mine",
      "uyaranına",
      "yanıt"
    ],
    "options": [
      "Bölümlü",
      "Sekonder dentin",
      "Florapatit: $\\text{pH } 4,5$",
      "Translusensinin artırılması, stres azaltıcı modifiye monomerler ve daha reaktif foto-başlatıcılar"
    ],
    "correctIndex": 1
  },
  {
    "id": 308,
    "code": "S308",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Şiddetli travma veya derin çürükte odontoblastların ölmesi sonrası pulpadaki mezenkimal kök hücrelerin farklılaşarak ürettiği atübüler dentin?",
    "answer": "Reparatif tersiyer dentin (Canlı kalan primer odontoblastların ürettiğine ise Reaksiyoner dentin denir).",
    "coreAnswer": "Reparatif tersiyer dentin",
    "keywords": [
      "Şiddetli",
      "travma",
      "derin",
      "çürükte",
      "odontoblastların"
    ],
    "options": [
      "Reparatif tersiyer dentin",
      "İkincil",
      "Self-etch adezivler veya cam iyonomer kaide",
      "Öjenol fenolik bir bileşiktir"
    ],
    "correctIndex": 0
  },
  {
    "id": 309,
    "code": "S309",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yaşlanma veya kronik hafif irritasyon sonucu dentin tübüllerinin kalsiyum fosfat kristalleriyle tamamen tıkanarak şeffaf görünmesine ne denir?",
    "answer": "Sklerotik (Translusent) dentin (Asitle pürüzlendirmeye dirençlidir, bağlanma gücü düşüktür).",
    "coreAnswer": "Sklerotik",
    "keywords": [
      "Yaşlanma",
      "kronik",
      "hafif",
      "irritasyon",
      "dentin"
    ],
    "options": [
      "Black Sınıf IV",
      "Poliakrilik asidin karboksil",
      "Abfraksiyon",
      "Sklerotik"
    ],
    "correctIndex": 3
  },
  {
    "id": 310,
    "code": "S310",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "restoratif",
    "subject": "Restoratif Diş Tedavisi",
    "branchNumber": 10,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kompozit bitim ve polisaj işlemlerinde elmas frez ve alüminyum oksit disklerin kullanım sırası nasıldır?",
    "answer": "Kalın grenli (konturlama) → Orta grenli (bitim) → İnce ve süper ince grenli (polisaj/parlatma).",
    "coreAnswer": "Kalın grenli",
    "keywords": [
      "Kompozit",
      "bitim",
      "polisaj",
      "işlemlerinde",
      "elmas"
    ],
    "options": [
      "Endojen dentin MMP",
      "Serbest oksijen radikallerinin büyük organik kromofor",
      "Kalın grenli",
      "DIAGNOdent"
    ],
    "correctIndex": 2
  },
  {
    "id": 311,
    "code": "S311",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gömülü alt 3. molar dişlerin Pell ve Gregory sınıflandırmasında Sınıf I, II, III ve Pozisyon A, B, C neye göre belirlenir?",
    "answer": "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre; Pozisyon A, B, C: 2. moların oklüzal düzlemi ve servikal çizgisine göre derinlik.",
    "coreAnswer": "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
    "keywords": [
      "Gömülü",
      "molar",
      "dişlerin",
      "Pell",
      "Gregory"
    ],
    "options": [
      "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir",
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Otojen kemik grefti",
      "Flebin tabanı"
    ],
    "correctIndex": 1
  },
  {
    "id": 312,
    "code": "S312",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Winter sınıflandırmasına göre gömülü alt 3. molarlar arasında çekimi en kolay olan ve en zor olan açılanmalar hangileridir?",
    "answer": "En kolay: Mezioanguler (en sık görülen); En zor: Distoanguler (kökler ramusa doğru yönelir).",
    "coreAnswer": "En kolay: Mezioanguler",
    "keywords": [
      "Winter",
      "sınıflandırmasına",
      "gömülü",
      "molarlar",
      "çekimi"
    ],
    "options": [
      "En kolay: Mezioanguler",
      "Osteoradyonekroz",
      "Odontojenik Keratokist",
      "Geçici fasiyal sinir"
    ],
    "correctIndex": 0
  },
  {
    "id": 313,
    "code": "S313",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gömülü alt 3. molar cerrahisinde lingual kortikal kemik korunmazsa veya insizyon linguale kayarsa hangi sinir yaralanır?",
    "answer": "N. lingualis (Dilin $2/3$ ön kısmında parestezi/anestezi oluşur).",
    "coreAnswer": "N. lingualis",
    "keywords": [
      "Gömülü",
      "molar",
      "cerrahisinde",
      "lingual",
      "kortikal"
    ],
    "options": [
      "Osteoindüksiyon",
      "Doğal",
      "Marsüpyalizasyon",
      "N. lingualis"
    ],
    "correctIndex": 3
  },
  {
    "id": 314,
    "code": "S314",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt 3. molar çekimi sonrası 3.–5. günde başlayan, pıhtının fibrinolizle yıkıldığı, kötü kokulu, yansıyan şiddetli ağrılı tablo ve tedavisi nedir?",
    "answer": "Alveolit (Alveolar osteitis / Dry socket); Tedavisi: Küretaj yapılmaz! Serum fizyolojik ile irrigasyon ve öjenollü/analjezikli pansuman.",
    "coreAnswer": "Alveolit",
    "keywords": [
      "molar",
      "çekimi",
      "sonrası",
      "günde",
      "başlayan"
    ],
    "options": [
      "2. Trimester",
      "Pterygoid venöz pleksus",
      "Alveolit",
      "Kırık tarafta arka dişlerde erken temas, karşı"
    ],
    "correctIndex": 2
  },
  {
    "id": 315,
    "code": "S315",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst 1. molar çekimi sonrası oluşan $<2\\text{ mm}$’lik taze oroantral açıklıkta (OAA) ve $>4\\text{–}5\\text{ mm}$’lik açıklıkta yaklaşım nedir?",
    "answer": "$<2\\text{ mm}$: Pıhtı korunur, burun sümkürme yasaklanır, kendiliğinden kapanır; $>4\\text{–}5\\text{ mm}$: Bukkal ilerletme flebi (Rehrmann) veya Palatinal rotasyon flebi / Bichat yağ dokusu ile cerrahi kapatma.",
    "coreAnswer": "$<2\\text{ mm}$: Pıhtı korunur, burun sümkürme yasaklanır, kendiliğinden kapanır",
    "keywords": [
      "molar",
      "çekimi",
      "sonrası",
      "oluşan",
      "text"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "$<2\\text{ mm}$: Pıhtı korunur, burun sümkürme yasaklanır, kendiliğinden kapanır",
      "Periferik osteotomi",
      "Tiroid fırtınası"
    ],
    "correctIndex": 1
  },
  {
    "id": 316,
    "code": "S316",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Maksiller sinüse kaçan bir kök parçası alınırken kemik penceresi hangi yaklaşımla açılır?",
    "answer": "Caldwell-Luc operasyonu (Fossa kanina / zigomatikoalveolar kret önünden).",
    "coreAnswer": "Caldwell-Luc operasyonu",
    "keywords": [
      "Maksiller",
      "sinüse",
      "kaçan",
      "parçası",
      "alınırken"
    ],
    "options": [
      "Caldwell-Luc operasyonu",
      "M. pterygoideus medialis kası içine enjeksiyon yapılması, kas içi hematom veya düşük dereceli enfeksiyon",
      "Anterior açık kapanış",
      "Foramen mentale’nin en az $2\\text{ mm}$"
    ],
    "correctIndex": 0
  },
  {
    "id": 317,
    "code": "S317",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "N. alveolaris inferior rejyonel blok anestezisinde iğne çok posteromediale (derine) ilerletilip parotis kapsülü içine girilirse hangi komplikasyon gelişir?",
    "answer": "Geçici fasiyal sinir (VII. KÇ) paralizisi (Hasta o tarafta gözünü kapatamaz - Bell fenomeni, ağız köşesi düşer).",
    "coreAnswer": "Geçici fasiyal sinir",
    "keywords": [
      "alveolaris",
      "inferior",
      "rejyonel",
      "blok",
      "anestezisinde"
    ],
    "options": [
      "Le Fort II",
      "Akut adrenal kriz",
      "Travmatik",
      "Geçici fasiyal sinir"
    ],
    "correctIndex": 3
  },
  {
    "id": 318,
    "code": "S318",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tuber (Posterior superior alveolar - PSA) anestezisinde iğne çok derine/yukarı ilerletilirse hangi venöz yapı zedelenerek ani yanak hematomu yapar?",
    "answer": "Pterygoid venöz pleksus (veya a. maxillaris).",
    "coreAnswer": "Pterygoid venöz pleksus",
    "keywords": [
      "Tuber",
      "Posterior",
      "superior",
      "alveolar",
      "anestezisinde"
    ],
    "options": [
      "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir",
      "Otojen kemik grefti",
      "Pterygoid venöz pleksus",
      "Flebin tabanı"
    ],
    "correctIndex": 2
  },
  {
    "id": 319,
    "code": "S319",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İnferior alveolar blok anestezisi sonrası gelişen trismusun (ağız açmada kısıtlılık) en sık nedeni nedir?",
    "answer": "M. pterygoideus medialis kası içine enjeksiyon yapılması, kas içi hematom veya düşük dereceli enfeksiyon.",
    "coreAnswer": "M. pterygoideus medialis kası içine enjeksiyon yapılması, kas içi hematom veya düşük dereceli enfeksiyon",
    "keywords": [
      "İnferior",
      "alveolar",
      "blok",
      "anestezisi",
      "sonrası"
    ],
    "options": [
      "Osteoradyonekroz",
      "M. pterygoideus medialis kası içine enjeksiyon yapılması, kas içi hematom veya düşük dereceli enfeksiyon",
      "Odontojenik Keratokist",
      "Caldwell-Luc operasyonu"
    ],
    "correctIndex": 1
  },
  {
    "id": 320,
    "code": "S320",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Başı ve boynu tutan odontojenik enfeksiyonlarda submandibular, sublingual ve submental locaları bilateral tutarak dili yukarı kaldırıp akut hava yolu obstrüksiyonu yapan tablo?",
    "answer": "Ludwig Anjini (Acil hava yolu güvenliği + IV antibiyotik + drenaj gerektirir).",
    "coreAnswer": "Ludwig Anjini",
    "keywords": [
      "Başı",
      "boynu",
      "tutan",
      "odontojenik",
      "enfeksiyonlarda"
    ],
    "options": [
      "Ludwig Anjini",
      "Osteoindüksiyon",
      "Doğal",
      "Marsüpyalizasyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 321,
    "code": "S321",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst kanin ve kesici dişlerin (yüzün \"tehlikeli üçgeni\") enfeksiyonu v. angularis ve v. ophthalmica üzerinden nereye yayılarak hayati tehlike oluşturur?",
    "answer": "Kavernöz sinüs trombozu (Oftalmopleji, proptozis, kemozis ve yüksek ateş görülür).",
    "coreAnswer": "Kavernöz sinüs trombozu",
    "keywords": [
      "kanin",
      "kesici",
      "dişlerin",
      "yüzün",
      "tehlikeli"
    ],
    "options": [
      "2. Trimester",
      "Geçici fasiyal sinir",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "Kavernöz sinüs trombozu"
    ],
    "correctIndex": 3
  },
  {
    "id": 322,
    "code": "S322",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt molar dişlerin kök uçları linea mylohyoidea’nın üzerinde ise enfeksiyon hangi locaya, altında ise hangi locaya yayılır?",
    "answer": "Üzerindeyse (1. molar, 2. molar): Sublingual loca; Altındaysa (2. ve 3. molar): Submandibular loca.",
    "coreAnswer": "Üzerindeyse",
    "keywords": [
      "molar",
      "dişlerin",
      "uçları",
      "linea",
      "mylohyoidea"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Periferik osteotomi",
      "Üzerindeyse",
      "Tiroid fırtınası"
    ],
    "correctIndex": 2
  },
  {
    "id": 323,
    "code": "S323",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sinir yaralanmalarında Seddon sınıflandırmasına göre aksonun ve kılıfların korunduğu geçici iletim bloğuna ne denir?",
    "answer": "Nöropraksi (Tam iyileşir; Akson kopup endonöryum sağlam kalırsa Aksonotmezis; Sinir gövdesi tamamen koparsa Nörotmezis).",
    "coreAnswer": "Nöropraksi",
    "keywords": [
      "Sinir",
      "yaralanmalarında",
      "Seddon",
      "sınıflandırmasına",
      "aksonun"
    ],
    "options": [
      "Pterygoid venöz pleksus",
      "Nöropraksi",
      "Anterior açık kapanış",
      "Foramen mentale’nin en az $2\\text{ mm}$"
    ],
    "correctIndex": 1
  },
  {
    "id": 324,
    "code": "S324",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Büyük kistlerde (anatomik yapılara komşu veya sürmemiş daimi diş içeren) kist içi basıncı düşürüp küçülttükten sonra enükleasyon yapılmasına ne denir?",
    "answer": "Marsüpyalizasyon (Partsch I — Dekompresyon) ve ardından Enükleasyon (Partsch II).",
    "coreAnswer": "Marsüpyalizasyon",
    "keywords": [
      "Büyük",
      "kistlerde",
      "anatomik",
      "yapılara",
      "komşu"
    ],
    "options": [
      "Marsüpyalizasyon",
      "Le Fort II",
      "Akut adrenal kriz",
      "Travmatik"
    ],
    "correctIndex": 0
  },
  {
    "id": 325,
    "code": "S325",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Odontojenik keratokist ve ameloblastoma gibi nüks oranı yüksek lezyonlarda enükleasyona ek olarak kemik kavitesine uygulanan yardımcı işlemler?",
    "answer": "Periferik osteotomi (frezleme), Carnoy solüsyonu (veya modifiye Carnoy) uygulaması veya kriyoterapi.",
    "coreAnswer": "Periferik osteotomi",
    "keywords": [
      "Odontojenik",
      "keratokist",
      "ameloblastoma",
      "gibi",
      "nüks"
    ],
    "options": [
      "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir",
      "Otojen kemik grefti",
      "Flebin tabanı",
      "Periferik osteotomi"
    ],
    "correctIndex": 3
  },
  {
    "id": 326,
    "code": "S326",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Maksilla orta yüz kırıklarında (Le Fort I, II, III) burundan berrak sıvı (BOS rinoresi) gelmesi hangi kırığı ve hangi kemiğin kırıldığını gösterir?",
    "answer": "Le Fort II (Piramidal) veya Le Fort III (Kraniofasiyal disjonksiyon) kırığı; Etmoid kemiğin lamina cribrosa’sı kırılmıştır.",
    "coreAnswer": "Le Fort II",
    "keywords": [
      "Maksilla",
      "orta",
      "kırıklarında",
      "Fort",
      "burundan"
    ],
    "options": [
      "Osteoradyonekroz",
      "Odontojenik Keratokist",
      "Le Fort II",
      "Caldwell-Luc operasyonu"
    ],
    "correctIndex": 2
  },
  {
    "id": 327,
    "code": "S327",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sadece sert damağın ve maksiller alveol arkının yatay olarak üst yüz iskeletinden ayrıldığı (\"Yüzen damak\" / Floating palate) kırık?",
    "answer": "Le Fort I (Guerin) kırığı.",
    "coreAnswer": "Le Fort I",
    "keywords": [
      "Sadece",
      "sert",
      "damağın",
      "maksiller",
      "alveol"
    ],
    "options": [
      "Osteoindüksiyon",
      "Le Fort I",
      "Doğal",
      "Nöropraksi"
    ],
    "correctIndex": 1
  },
  {
    "id": 328,
    "code": "S328",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Zigomatik kompleksi, orbitanın alt/yan duvarını ve nazal kemikleri içine alarak tüm yüz iskeletini kafa kaidesinden ayıran kırık?",
    "answer": "Le Fort III kırığı (\"Tabak yüz\" / Dish face deformitesi).",
    "coreAnswer": "Le Fort III kırığı",
    "keywords": [
      "Zigomatik",
      "kompleksi",
      "orbitanın",
      "duvarını",
      "nazal"
    ],
    "options": [
      "Le Fort III kırığı",
      "2. Trimester",
      "Geçici fasiyal sinir",
      "Kırık tarafta arka dişlerde erken temas, karşı"
    ],
    "correctIndex": 0
  },
  {
    "id": 329,
    "code": "S329",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Orbita tabanının izole çökme kırığında (Blow-out kırığı) m. rectus inferior sıkışırsa hangi klinik bulgular görülür?",
    "answer": "Yukarı bakışta diplopi (çift görme), enoftalmus ve n. infraorbitalis parestezisi.",
    "coreAnswer": "Yukarı bakışta diplopi",
    "keywords": [
      "Orbita",
      "tabanının",
      "izole",
      "çökme",
      "kırığında"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Marsüpyalizasyon",
      "Tiroid fırtınası",
      "Yukarı bakışta diplopi"
    ],
    "correctIndex": 3
  },
  {
    "id": 330,
    "code": "S330",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mandibula kırıklarının en sık görüldüğü anatomik bölgeler hangileridir?",
    "answer": "Kondil boynu, Angulus (özellikle gömülü 3. molar varsa) ve Simfiz/Parasifiz.",
    "coreAnswer": "Kondil boynu, Angulus",
    "keywords": [
      "Mandibula",
      "kırıklarının",
      "görüldüğü",
      "anatomik",
      "bölgeler"
    ],
    "options": [
      "Pterygoid venöz pleksus",
      "Anterior açık kapanış",
      "Kondil boynu, Angulus",
      "Foramen mentale’nin en az $2\\text{ mm}$"
    ],
    "correctIndex": 2
  },
  {
    "id": 331,
    "code": "S331",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tek taraflı mandibula kondil boynu kırığında oklüzyon ve çene hareketi nasıldır?",
    "answer": "Kırık tarafta arka dişlerde erken temas, karşı (sağlam) tarafta açık kapanış (open-bite); ağız açılırken çene kırık tarafa kayar.",
    "coreAnswer": "Kırık tarafta arka dişlerde erken temas, karşı",
    "keywords": [
      "taraflı",
      "mandibula",
      "kondil",
      "boynu",
      "kırığında"
    ],
    "options": [
      "Periferik osteotomi",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "Akut adrenal kriz",
      "Travmatik"
    ],
    "correctIndex": 1
  },
  {
    "id": 332,
    "code": "S332",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bilateral mandibula kondil boynu kırığında hangi oklüzal tablo gelişir?",
    "answer": "Anterior açık kapanış (Anterior open-bite) ve bilateral posterior erken temas.",
    "coreAnswer": "Anterior açık kapanış",
    "keywords": [
      "Bilateral",
      "mandibula",
      "kondil",
      "boynu",
      "kırığında"
    ],
    "options": [
      "Anterior açık kapanış",
      "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir",
      "Otojen kemik grefti",
      "Flebin tabanı"
    ],
    "correctIndex": 0
  },
  {
    "id": 333,
    "code": "S333",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Akut anterior TME dislokasyonunda (çene çıkığı) kondil başı nereye yerleşmiştir ve Hippokrat manevrası nasıl uygulanır?",
    "answer": "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir; Başparmaklar alt molarlar üzerine konup önce aşağı, sonra geriye ve yukarı itilir.",
    "coreAnswer": "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir",
    "keywords": [
      "Akut",
      "anterior",
      "dislokasyonunda",
      "çene",
      "çıkığı"
    ],
    "options": [
      "Osteoradyonekroz",
      "Odontojenik Keratokist",
      "Caldwell-Luc operasyonu",
      "Kondil eminentia articularis’in önüne ve üstüne kilitlenmiştir"
    ],
    "correctIndex": 3
  },
  {
    "id": 334,
    "code": "S334",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tükürük bezi taşlarının (Siyalolitiyazis) %80–90 oranında en sık görüldüğü bez ve kanal hangisidir, neden?",
    "answer": "Submandibular bez ve Wharton kanalı (Salgısı müköz/alkali ve kalsiyumdan zengindir; kanalı uzun, kıvrımlı ve yerçekimine ters yönde yukarı doğru akar).",
    "coreAnswer": "Submandibular bez ve Wharton kanalı",
    "keywords": [
      "Tükürük",
      "bezi",
      "taşlarının",
      "Siyalolitiyazis",
      "oranında"
    ],
    "options": [
      "Osteoindüksiyon",
      "Doğal",
      "Submandibular bez ve Wharton kanalı",
      "Nöropraksi"
    ],
    "correctIndex": 2
  },
  {
    "id": 335,
    "code": "S335",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş çekimi sırasında bayılan (vazovagal senkop) hastada ilk yapılması gereken müdahale nedir?",
    "answer": "İşlemi durdurup hastayı Trendelenburg / supin pozisyona (ayaklar $10^\\circ\\text{–}15^\\circ$ yukarıda) getirmek, hava yolunu açmak ve oksijen vermek.",
    "coreAnswer": "İşlemi durdurup hastayı Trendelenburg / supin pozisyona",
    "keywords": [
      "çekimi",
      "sırasında",
      "bayılan",
      "vazovagal",
      "senkop"
    ],
    "options": [
      "2. Trimester",
      "İşlemi durdurup hastayı Trendelenburg / supin pozisyona",
      "Geçici fasiyal sinir",
      "Kondil boynu, Angulus"
    ],
    "correctIndex": 1
  },
  {
    "id": 336,
    "code": "S336",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lokal anestezi veya antibiyotik sonrası gelişen akut anafilaktik şokta hayat kurtarıcı ilk ilaç, dozu ve uygulama yeri nedir?",
    "answer": "Adrenalin (Epinefrin) — Yetişkinde $0,3\\text{–}0,5\\text{ mg}$ ($1:1000$’lik solüsyondan $0,3\\text{–}0,5\\text{ mL}$) intramüsküler (vastus lateralis).",
    "coreAnswer": "Adrenalin",
    "keywords": [
      "Lokal",
      "anestezi",
      "antibiyotik",
      "sonrası",
      "gelişen"
    ],
    "options": [
      "Adrenalin",
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Marsüpyalizasyon",
      "Tiroid fırtınası"
    ],
    "correctIndex": 0
  },
  {
    "id": 337,
    "code": "S337",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Anksiyeteli hastada hızlı ve derin solumaya bağlı gelişen hiperventilasyon sendromunda kanda ne olur ve tedavisi nedir?",
    "answer": "$pCO_2$ düşer (respiratuar alkaloz), iyonize kalsiyum azalarak ağız çevresi ve parmaklarda uyuşma/karıncalanma (karpal-pedal spazm) olur; Oksijen verilmez!, hasta kendi avuç içine/kağıt torbaya solutulur.",
    "coreAnswer": "$pCO_2$ düşer",
    "keywords": [
      "Anksiyeteli",
      "hastada",
      "hızlı",
      "derin",
      "solumaya"
    ],
    "options": [
      "Pterygoid venöz pleksus",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "Foramen mentale’nin en az $2\\text{ mm}$",
      "$pCO_2$ düşer"
    ],
    "correctIndex": 3
  },
  {
    "id": 338,
    "code": "S338",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kontrolsüz hipertiroidili (Graves) hastada stres veya adrenalin verilmesiyle tetiklenebilen hayati kriz nedir?",
    "answer": "Tiroid fırtınası (Tirotoksik kriz — Taşikardi, hipertermi, deliryum; Adrenalin kesinlikle kontrendikedir!).",
    "coreAnswer": "Tiroid fırtınası",
    "keywords": [
      "Kontrolsüz",
      "hipertiroidili",
      "Graves",
      "hastada",
      "stres"
    ],
    "options": [
      "Periferik osteotomi",
      "Akut adrenal kriz",
      "Tiroid fırtınası",
      "Travmatik"
    ],
    "correctIndex": 2
  },
  {
    "id": 339,
    "code": "S339",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Uzun süreli sistemik kortikosteroid kullanan hastada cerrahi stres sırasında gelişen hipotansiyon ve kollaps tablosu?",
    "answer": "Akut adrenal kriz (Sekonder adrenal yetmezlik — Önlemek için stres dozu hidrokortizon takviyesi yapılır).",
    "coreAnswer": "Akut adrenal kriz",
    "keywords": [
      "Uzun",
      "süreli",
      "sistemik",
      "kortikosteroid",
      "kullanan"
    ],
    "options": [
      "Anterior açık kapanış",
      "Akut adrenal kriz",
      "Otojen kemik grefti",
      "Flebin tabanı"
    ],
    "correctIndex": 1
  },
  {
    "id": 340,
    "code": "S340",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Baş-boyun bölgesinden $50\\text{–}60\\text{ Gy}$ üzerinde radyoterapi almış hastada diş çekimi sonrası gelişen, $>3\\text{ ay}$ iyileşmeyen ekspoze nekrotik kemik tablosu?",
    "answer": "Osteoradyonekroz (ORN) — En sık mandibulada görülür (vaskülaritesi az olduğu için); tedavisinde hiperbarik oksijen (HBO) ve pentoksifilin + tokoferol (PENTO) kullanılır.",
    "coreAnswer": "Osteoradyonekroz",
    "keywords": [
      "boyun",
      "bölgesinden",
      "text",
      "üzerinde",
      "radyoterapi"
    ],
    "options": [
      "Osteoradyonekroz",
      "Akut adrenal kriz",
      "Odontojenik Keratokist",
      "Caldwell-Luc operasyonu"
    ],
    "correctIndex": 0
  },
  {
    "id": 341,
    "code": "S341",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "MRONJ (İlaca bağlı çene osteonekrozu) tanı kriterleri nelerdir?",
    "answer": "1) Antirezorptif/antianjiyojenik ilaç öyküsü, 2) Çene-yüz bölgesinde 8 haftadan uzun süren ekspoze kemik (veya fistül), 3) Çenelere radyoterapi almamış olmak ve metastaz olmaması.",
    "coreAnswer": "1) Antirezorptif/antianjiyojenik ilaç öyküsü, 2) Çene-yüz bölgesinde 8 haftadan uzun süren ekspoze kemik",
    "keywords": [
      "MRONJ",
      "İlaca",
      "bağlı",
      "çene",
      "osteonekrozu"
    ],
    "options": [
      "Osteoindüksiyon",
      "Doğal",
      "Nöropraksi",
      "1) Antirezorptif/antianjiyojenik ilaç öyküsü, 2) Çene-yüz bölgesinde 8 haftadan uzun süren ekspoze kemik"
    ],
    "correctIndex": 3
  },
  {
    "id": 342,
    "code": "S342",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dental implantlarda kemik ile titanyum yüzey arasında bağ dokusu olmaksızın doğrudan yapısal ve fonksiyonel bağlantıya ne denir?",
    "answer": "Osseointegrasyon (Brånemark).",
    "coreAnswer": "Osseointegrasyon",
    "keywords": [
      "Dental",
      "implantlarda",
      "kemik",
      "titanyum",
      "yüzey"
    ],
    "options": [
      "2. Trimester",
      "Geçici fasiyal sinir",
      "Osseointegrasyon",
      "Kondil boynu, Angulus"
    ],
    "correctIndex": 2
  },
  {
    "id": 343,
    "code": "S343",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Osseointegrasyon sırasında kemik dokunun aşırı ısınarak nekroza uğramaması için frezleme sırasında kritik sıcaklık eşiği nedir?",
    "answer": "$47\\text{ }^\\circ\\text{C}$'de 1 dakikayı geçmemelidir (Bol soğutmalı serum fizyolojik irrigasyonu ve düşük devir/yüksek tork kullanılır).",
    "coreAnswer": "$47\\text{ }^\\circ\\text{C}$'de 1 dakikayı geçmemelidir",
    "keywords": [
      "Osseointegrasyon",
      "sırasında",
      "kemik",
      "dokunun",
      "aşırı"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "$47\\text{ }^\\circ\\text{C}$'de 1 dakikayı geçmemelidir",
      "Marsüpyalizasyon",
      "$pCO_2$ düşer"
    ],
    "correctIndex": 1
  },
  {
    "id": 344,
    "code": "S344",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir dental implant ile doğal diş arasında ve iki dental implant arasında bırakılması gereken minimum yatay mesafe kaç mm'dir?",
    "answer": "İmplant – Doğal diş arası: en az $1,5\\text{ mm}$; İmplant – İmplant arası: en az $3\\text{ mm}$.",
    "coreAnswer": "İmplant – Doğal diş arası: en az $1,5\\text{ mm}$",
    "keywords": [
      "dental",
      "implant",
      "doğal",
      "bırakılması",
      "gereken"
    ],
    "options": [
      "İmplant – Doğal diş arası: en az $1,5\\text{ mm}$",
      "Pterygoid venöz pleksus",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "Foramen mentale’nin en az $2\\text{ mm}$"
    ],
    "correctIndex": 0
  },
  {
    "id": 345,
    "code": "S345",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mandibulada mental foramenlerin önüne 2 veya 4 implant yerleştirilirken mental sinirin foramen önündeki kıvrımına (anterior loop) çarpmamak için kaç mm güvenlik payı bırakılır?",
    "answer": "Foramen mentale’nin en az $2\\text{ mm}$ (anterior loop varsa $4\\text{–}5\\text{ mm}$) uzağında/önünde kalınmalıdır.",
    "coreAnswer": "Foramen mentale’nin en az $2\\text{ mm}$",
    "keywords": [
      "Mandibulada",
      "mental",
      "foramenlerin",
      "önüne",
      "implant"
    ],
    "options": [
      "Periferik osteotomi",
      "Tiroid fırtınası",
      "Travmatik",
      "Foramen mentale’nin en az $2\\text{ mm}$"
    ],
    "correctIndex": 3
  },
  {
    "id": 346,
    "code": "S346",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kemik greftlerinde hem osteogenezis, hem osteoindüksiyon, hem de osteokondüksiyon özelliğine sahip olan altın standart greft hangisidir?",
    "answer": "Otojen kemik grefti (Canlı osteoblast içerdiği için osteojenik olan tek grefttir!).",
    "coreAnswer": "Otojen kemik grefti",
    "keywords": [
      "Kemik",
      "greftlerinde",
      "osteogenezis",
      "osteoindüksiyon",
      "osteokondüksiyon"
    ],
    "options": [
      "Anterior açık kapanış",
      "Foramen mentale’nin en az $2\\text{ mm}$",
      "Otojen kemik grefti",
      "Flebin tabanı"
    ],
    "correctIndex": 2
  },
  {
    "id": 347,
    "code": "S347",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kemik morfogenetik proteinleri (BMP) sayesinde mezenkimal kök hücreleri osteoblasta dönüştürme kapasitesine ne denir?",
    "answer": "Osteoindüksiyon (Demineralize dondurulmuş kurutulmuş kemik allogrefti [DFDBA] ve otojen greftte bulunur; Ksenogreft ve Alloplastlar sadece osteokondüktiftir).",
    "coreAnswer": "Osteoindüksiyon",
    "keywords": [
      "Kemik",
      "morfogenetik",
      "proteinleri",
      "sayesinde",
      "mezenkimal"
    ],
    "options": [
      "Akut adrenal kriz",
      "Osteoindüksiyon",
      "Odontojenik Keratokist",
      "Caldwell-Luc operasyonu"
    ],
    "correctIndex": 1
  },
  {
    "id": 348,
    "code": "S348",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortognatik cerrahide mandibulayı ileri veya geri almak için en sık uygulanan osteotomi tekniği hangisidir?",
    "answer": "Bilateral Sagittal Split Ramus Osteotomisi (BSSRO) — Obwegeser-Dal Pont (En sık komplikasyonu n. alveolaris inferior parestezisidir).",
    "coreAnswer": "Bilateral Sagittal Split Ramus Osteotomisi",
    "keywords": [
      "Ortognatik",
      "cerrahide",
      "mandibulayı",
      "ileri",
      "geri"
    ],
    "options": [
      "Bilateral Sagittal Split Ramus Osteotomisi",
      "Otojen kemik grefti",
      "Doğal",
      "Nöropraksi"
    ],
    "correctIndex": 0
  },
  {
    "id": 349,
    "code": "S349",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortognatik cerrahide maksillayı üç boyutta hareket ettirmek için uygulanan standart osteotomi hangisidir?",
    "answer": "Le Fort I osteotomisi.",
    "coreAnswer": "Le Fort I osteotomisi",
    "keywords": [
      "Ortognatik",
      "cerrahide",
      "maksillayı",
      "boyutta",
      "hareket"
    ],
    "options": [
      "2. Trimester",
      "Geçici fasiyal sinir",
      "Kondil boynu, Angulus",
      "Le Fort I osteotomisi"
    ],
    "correctIndex": 3
  },
  {
    "id": 350,
    "code": "S350",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İnsizyonel biyopsi hangi durumlarda tercih edilir ve örnek nereden alınmalıdır?",
    "answer": "$>1\\text{–}2\\text{ cm}$’den büyük, malignite şüphesi olan veya yaygın mukozal lezyonlarda; Nekrotik merkezden değil, lezyon sınırındaki sağlam dokuyu da içerecek şekilde kama tarzında alınır.",
    "coreAnswer": "$>1\\text{–}2\\text{ cm}$’den büyük, malignite şüphesi olan veya yaygın mukozal lezyonlarda",
    "keywords": [
      "İnsizyonel",
      "biyopsi",
      "durumlarda",
      "tercih",
      "örnek"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Marsüpyalizasyon",
      "$>1\\text{–}2\\text{ cm}$’den büyük, malignite şüphesi olan veya yaygın mukozal lezyonlarda",
      "$pCO_2$ düşer"
    ],
    "correctIndex": 2
  },
  {
    "id": 351,
    "code": "S351",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kemik içi radyolüsent bir lezyona cerrahi girişim yapmadan önce enjektörle yapılan aspirasyon biyopsisinde enjektöre basınçlı kan gelmesi neyi gösterir?",
    "answer": "Santral hemanjiyom / Arteriovenöz malformasyon (Diş çekimi veya küretaj yapılırsa ölümcül kanama olur!).",
    "coreAnswer": "Santral hemanjiyom / Arteriovenöz malformasyon",
    "keywords": [
      "Kemik",
      "radyolüsent",
      "lezyona",
      "cerrahi",
      "girişim"
    ],
    "options": [
      "Pterygoid venöz pleksus",
      "Santral hemanjiyom / Arteriovenöz malformasyon",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "İmplant – Doğal diş arası: en az $1,5\\text{ mm}$"
    ],
    "correctIndex": 1
  },
  {
    "id": 352,
    "code": "S352",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Aspirasyon biyopsisinde enjektöre hava (boşluk) gelmesi hangi lezyon için tipiktir?",
    "answer": "Travmatik (Basit / Soliter) Kemik Kisti (Yalancı kisttir, epitel döşemesi yoktur; kanama oluşturulup kapatılır).",
    "coreAnswer": "Travmatik",
    "keywords": [
      "Aspirasyon",
      "biyopsisinde",
      "enjektöre",
      "hava",
      "boşluk"
    ],
    "options": [
      "Travmatik",
      "Periferik osteotomi",
      "Tiroid fırtınası",
      "Santral hemanjiyom / Arteriovenöz malformasyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 353,
    "code": "S353",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Aspirasyon biyopsisinde peynirimsi, beyaz-sarı keratin içeriği (protein $<4\\text{ g/dL}$) gelmesi hangi kisti düşündürür?",
    "answer": "Odontojenik Keratokist (Kolesterol kristalleri içeren saman sarısı sıvı ise radiküler/dentigeröz kistte görülür).",
    "coreAnswer": "Odontojenik Keratokist",
    "keywords": [
      "Aspirasyon",
      "biyopsisinde",
      "peynirimsi",
      "beyaz",
      "sarı"
    ],
    "options": [
      "Anterior açık kapanış",
      "Foramen mentale’nin en az $2\\text{ mm}$",
      "Flebin tabanı",
      "Odontojenik Keratokist"
    ],
    "correctIndex": 3
  },
  {
    "id": 354,
    "code": "S354",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gebelerde elektif dental tedaviler için en güvenli dönem hangisidir ve koltukta hangi pozisyon verilmelidir?",
    "answer": "2. Trimester (14–27. haftalar); 3. trimesterde v. cava inferior basısını (supin hipotansif sendrom) önlemek için hastanın sağ kalçası altına yastık konarak sola doğru $15^\\circ$ yatırılır.",
    "coreAnswer": "2. Trimester",
    "keywords": [
      "Gebelerde",
      "elektif",
      "dental",
      "tedaviler",
      "güvenli"
    ],
    "options": [
      "Akut adrenal kriz",
      "Travmatik",
      "2. Trimester",
      "Caldwell-Luc operasyonu"
    ],
    "correctIndex": 2
  },
  {
    "id": 355,
    "code": "S355",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kronik böbrek yetmezliği nedeniyle hemodiyaliz gören hastada diş çekimi ne zaman yapılmalıdır?",
    "answer": "Diyalizden bir sonraki gün (Diyaliz günü hastaya heparin verildiği için kanama riski yüksektir).",
    "coreAnswer": "Diyalizden bir sonraki gün",
    "keywords": [
      "Kronik",
      "böbrek",
      "yetmezliği",
      "nedeniyle",
      "hemodiyaliz"
    ],
    "options": [
      "Otojen kemik grefti",
      "Diyalizden bir sonraki gün",
      "Doğal",
      "Nöropraksi"
    ],
    "correctIndex": 1
  },
  {
    "id": 356,
    "code": "S356",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yeni nesil direkt oral antikoagülanlar (DOAC: Rivaroksaban, Apiksaban, Dabigatran) veya tekli antiagregan (Aspirin, Klopidogrel) kullanan hastada basit diş çekiminde ilaç kesilir mi?",
    "answer": "Hayır, kesilmez! (Tromboemboli riski kanama riskinden çok daha ölümcüldür; lokal hemostatik ajanlar [spongostan, traneksamik asit, sütür] ile çekim yapılır).",
    "coreAnswer": "Hayır, kesilmez!",
    "keywords": [
      "Yeni",
      "nesil",
      "direkt",
      "oral",
      "antikoagülanlar"
    ],
    "options": [
      "Hayır, kesilmez!",
      "Odontojenik Keratokist",
      "Geçici fasiyal sinir",
      "Kondil boynu, Angulus"
    ],
    "correctIndex": 0
  },
  {
    "id": 357,
    "code": "S357",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gow-Gates ve Vazirani-Akinosi mandibular anestezi tekniklerinin klasik inferior alveolar bloğa göre avantajları nelerdir?",
    "answer": "Gow-Gates: Kondil boynuna yapılır, tüm $V_3$ dallarını tek enjeksiyonda uyuşturur; Vazirani-Akinosi: Ağız kapalıyken (trismuslu hastada) uygulanabilen tek mandibular blok tekniğidir.",
    "coreAnswer": "Gow-Gates: Kondil boynuna yapılır, tüm $V_3$ dallarını tek enjeksiyonda uyuşturur",
    "keywords": [
      "Gates",
      "Vazirani",
      "Akinosi",
      "mandibular",
      "anestezi"
    ],
    "options": [
      "Sınıf I, II, III: Ramus mandibula ön kenarı ile 2. moların distali arasındaki mesafeye göre",
      "Marsüpyalizasyon",
      "$pCO_2$ düşer",
      "Gow-Gates: Kondil boynuna yapılır, tüm $V_3$ dallarını tek enjeksiyonda uyuşturur"
    ],
    "correctIndex": 3
  },
  {
    "id": 358,
    "code": "S358",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Protez öncesi cerrahide kret üzerindeki gevşek/hiperplastik mukozanın ve epulis fissuratum’un kaldırılarak vestibül derinliğin artırılması işlemine ne denir?",
    "answer": "Vestibüloplasti (Kazanjian, Clark veya sekonder epitelizasyon teknikleri).",
    "coreAnswer": "Vestibüloplasti",
    "keywords": [
      "Protez",
      "öncesi",
      "cerrahide",
      "kret",
      "üzerindeki"
    ],
    "options": [
      "Pterygoid venöz pleksus",
      "Kırık tarafta arka dişlerde erken temas, karşı",
      "Vestibüloplasti",
      "İmplant – Doğal diş arası: en az $1,5\\text{ mm}$"
    ],
    "correctIndex": 2
  },
  {
    "id": 359,
    "code": "S359",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Flep tasarımında flep nekrozunu önlemek için temel altın kural nedir?",
    "answer": "Flebin tabanı (kaidesi), serbest kenarından daha geniş olmalı (aksiyel kanlanmayı korumak için) ve sütür hattı sağlam kemik üzerinde desteklenmelidir.",
    "coreAnswer": "Flebin tabanı",
    "keywords": [
      "Flep",
      "tasarımında",
      "flep",
      "nekrozunu",
      "önlemek"
    ],
    "options": [
      "Periferik osteotomi",
      "Flebin tabanı",
      "Tiroid fırtınası",
      "Santral hemanjiyom / Arteriovenöz malformasyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 360,
    "code": "S360",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "cerrahi",
    "subject": "Ağız, Diş ve Çene Cerrahisi",
    "branchNumber": 11,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Rezorbabl sütürlerden enzimatik yıkıma uğrayan doğal sütür ile hidroliz yoluyla yıkılan sentetik sütürler hangileridir?",
    "answer": "Doğal (Enzimatik - doku reaksiyonu fazla): Katgüt; Sentetik (Hidroliz - doku reaksiyonu az): Poliglaktin 910 (Vicryl), Poliglikolik asit (PGA), Polidioksanon (PDS).",
    "coreAnswer": "Doğal",
    "keywords": [
      "Rezorbabl",
      "sütürlerden",
      "enzimatik",
      "yıkıma",
      "uğrayan"
    ],
    "options": [
      "Doğal",
      "Anterior açık kapanış",
      "Foramen mentale’nin en az $2\\text{ mm}$",
      "Vestibüloplasti"
    ],
    "correctIndex": 0
  },
  {
    "id": 361,
    "code": "S361",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "X-ışını tüpünde elektronların üretildiği negatif elektrot (katot) ve X-ışınına dönüştüğü pozitif hedef (anot) hangi metallerden yapılır?",
    "answer": "Katot: Tungsten filaman + Molibden odaklama kabı; Anot: Tungsten hedef (atom numarası ve erime noktası yüksek) + Bakır gövde (ısıyı dağıtır).",
    "coreAnswer": "Katot: Tungsten filaman + Molibden odaklama kabı",
    "keywords": [
      "ışını",
      "tüpünde",
      "elektronların",
      "üretildiği",
      "negatif"
    ],
    "options": [
      "Multipl Miyelom",
      "Taurodontizm",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Katot: Tungsten filaman + Molibden odaklama kabı"
    ],
    "correctIndex": 3
  },
  {
    "id": 362,
    "code": "S362",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dental X-ışını tüpünde üretilen enerjinin yüzde kaçı X-ışınına, yüzde kaçı ısıya dönüşür ve baskın X-ışını üretim mekanizması nedir?",
    "answer": "%99'u ısıya, sadece %1'i X-ışınına dönüşür; En baskın (%70+) üretim mekanizması Frenleme (Bremsstrahlung) radyasyonudur.",
    "coreAnswer": "%99'u ısıya, sadece %1'i X-ışınına dönüşür",
    "keywords": [
      "Dental",
      "ışını",
      "tüpünde",
      "üretilen",
      "enerjinin"
    ],
    "options": [
      "Peutz-Jeghers Sendromu",
      "Behçet Hastalığı",
      "%99'u ısıya, sadece %1'i X-ışınına dönüşür",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant"
    ],
    "correctIndex": 2
  },
  {
    "id": 363,
    "code": "S363",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide kVp (kilovoltaj pik) artırıldığında görüntü kontrastı ve ışının penetrasyon gücü nasıl değişir?",
    "answer": "Dalga boyu kısalır, penetrasyon artar; Kontrast azalır (Uzun gri skala / çok sayıda gri ton oluşur — Yumuşak doku ve periodontal kemik için yüksek kVp, çürük tespiti için düşük kVp / yüksek kontrast seçilir).",
    "coreAnswer": "Dalga boyu kısalır, penetrasyon artar",
    "keywords": [
      "Radyografide",
      "kilovoltaj",
      "artırıldığında",
      "görüntü",
      "kontrastı"
    ],
    "options": [
      "Dens invaginatus",
      "Dalga boyu kısalır, penetrasyon artar",
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Nazoalveolar kist yumuşak dokudadır"
    ],
    "correctIndex": 1
  },
  {
    "id": 364,
    "code": "S364",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide mA (miliamper) veya süre (saniye) artırıldığında görüntünün hangi özelliği değişir?",
    "answer": "X-ışını fotonlarının sayısı artar, dolayısıyla radyografik yoğunluk (dansite / kararma) doğru orantılı olarak artar.",
    "coreAnswer": "X-ışını fotonlarının sayısı artar, dolayısıyla radyografik yoğunluk",
    "keywords": [
      "Radyografide",
      "miliamper",
      "süre",
      "saniye",
      "artırıldığında"
    ],
    "options": [
      "X-ışını fotonlarının sayısı artar, dolayısıyla radyografik yoğunluk",
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Waters grafisi",
      "Osteosarkom"
    ],
    "correctIndex": 0
  },
  {
    "id": 365,
    "code": "S365",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tanısal dental radyolojide hastada ikincil (saçılan) radyasyonu oluşturarak görüntü kalitesini bozan en önemli X-ışını-madde etkileşimi nedir?",
    "answer": "Compton saçılması (Fotoelektrik olay ise kontrastı oluşturur fakat hastanın aldığı dozu artırır).",
    "coreAnswer": "Compton saçılması",
    "keywords": [
      "Tanısal",
      "dental",
      "radyolojide",
      "hastada",
      "ikincil"
    ],
    "options": [
      "Paralel teknik",
      "Basit",
      "Çerubizm",
      "Compton saçılması"
    ],
    "correctIndex": 3
  },
  {
    "id": 366,
    "code": "S366",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İyonlaştırıcı radyasyonun canlı hücrede dolaylı (indirekt) hasar oluşturma mekanizması nedir?",
    "answer": "Suyun ($H_2O$) radyolizi sonucu oluşan serbest radikallerin ($OH^\\bullet$, $H^\\bullet$) ve hidrojen peroksitin DNA'ya zarar vermesi (Radyasyon hasarının $2/3$'ü bu yolla oluşur!).",
    "coreAnswer": "Suyun",
    "keywords": [
      "İyonlaştırıcı",
      "radyasyonun",
      "canlı",
      "hücrede",
      "dolaylı"
    ],
    "options": [
      "Submentoverteks",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Suyun",
      "Dİ: Soğan kubbesi"
    ],
    "correctIndex": 2
  },
  {
    "id": 367,
    "code": "S367",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Vücutta radyasyona en duyarlı (radyosensitif) ve en dirençli (radyorezistan) hücreler hangileridir (Bergonié-Tribondeau yasası)?",
    "answer": "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli; En dirençli: Sinir hücreleri (nöronlar) ve kas hücreleri.",
    "coreAnswer": "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
    "keywords": [
      "Vücutta",
      "radyasyona",
      "duyarlı",
      "radyosensitif",
      "dirençli"
    ],
    "options": [
      "Stafne kemik kavitesi",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Gardner Sendromu",
      "Kondensing osteitis"
    ],
    "correctIndex": 1
  },
  {
    "id": 368,
    "code": "S368",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dental radyolojide deterministik (eşik dozlu) ve stokastik (eşik dozsuz, olasılıksal) etkiler nelerdir; dental radyografiler hangisini oluşturabilir?",
    "answer": "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz; Stokastik (Dental radyolojideki asıl risk): Kanser indüksiyonu ve genetik etkiler (ALARA / ALADA prensibi bu yüzden uygulanır).",
    "coreAnswer": "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
    "keywords": [
      "Dental",
      "radyolojide",
      "deterministik",
      "eşik",
      "dozlu"
    ],
    "options": [
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Multipl Miyelom",
      "Taurodontizm",
      "Suyun"
    ],
    "correctIndex": 0
  },
  {
    "id": 369,
    "code": "S369",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periapikal radyografide boyutsal distorsiyonu en aza indiren ve geometrik olarak en doğru görüntüyü veren teknik hangisidir?",
    "answer": "Paralel teknik (Uzun kon tekniği — Film dişin uzun aksına paralel, merkezi ışın hem dişe hem filme diktir).",
    "coreAnswer": "Paralel teknik",
    "keywords": [
      "Periapikal",
      "radyografide",
      "boyutsal",
      "distorsiyonu",
      "indiren"
    ],
    "options": [
      "Peutz-Jeghers Sendromu",
      "Behçet Hastalığı",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Paralel teknik"
    ],
    "correctIndex": 3
  },
  {
    "id": 370,
    "code": "S370",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Açıortay tekniğinde merkezi ışının dikey (vertikal) açısı gereğinden fazla verilirse görüntüde ne olur?",
    "answer": "Boy kısalması (Foreshortening); Dikey açı gereğinden az verilirse boy uzaması (Elongation) olur.",
    "coreAnswer": "Boy kısalması",
    "keywords": [
      "Açıortay",
      "tekniğinde",
      "merkezi",
      "ışının",
      "dikey"
    ],
    "options": [
      "Dens invaginatus",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Boy kısalması",
      "Nazoalveolar kist yumuşak dokudadır"
    ],
    "correctIndex": 2
  },
  {
    "id": 371,
    "code": "S371",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "SLOB (Same Lingual, Opposite Buccal — Clark tekniği) kuralına göre tüp meziale kaydırıldığında gömülü kanin diş de tüple aynı yöne (meziale) hareket ediyorsa nerededir?",
    "answer": "Palatinalde (Lingualde) yer almaktadır.",
    "coreAnswer": "Palatinalde",
    "keywords": [
      "SLOB",
      "Same",
      "Lingual",
      "Opposite",
      "Buccal"
    ],
    "options": [
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Palatinalde",
      "Waters grafisi",
      "Osteosarkom"
    ],
    "correctIndex": 1
  },
  {
    "id": 372,
    "code": "S372",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Panoramik radyografide hasta başını fokal oluğun (focal trough) çok önüne konumlandırırsa ön dişler nasıl görünür?",
    "answer": "Ön dişler dar (ince) ve bulanık görünür; Baş çok geride konumlandırılırsa ön dişler geniş (magnifiye) ve bulanık görünür.",
    "coreAnswer": "Ön dişler dar",
    "keywords": [
      "Panoramik",
      "radyografide",
      "hasta",
      "başını",
      "fokal"
    ],
    "options": [
      "Ön dişler dar",
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Basit",
      "Çerubizm"
    ],
    "correctIndex": 0
  },
  {
    "id": 373,
    "code": "S373",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Panoramik radyografide hastanın çenesi aşağı doğru aşırı eğilirse oklüzal düzlem nasıl bir görüntü verir?",
    "answer": "Aşırı gülen yüz (Joker gülüşü / V şeklinde eğri); Çene yukarı kaldırılırsa somurtan yüz (ters eğri) ve sert damak gölgesi üst kökleri kapatır.",
    "coreAnswer": "Aşırı gülen yüz",
    "keywords": [
      "Panoramik",
      "radyografide",
      "hastanın",
      "çenesi",
      "aşağı"
    ],
    "options": [
      "Submentoverteks",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Dİ: Soğan kubbesi",
      "Aşırı gülen yüz"
    ],
    "correctIndex": 3
  },
  {
    "id": 374,
    "code": "S374",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Panoramik çekim sırasında hasta dilini damağına yapıştırmazsa hangi artefakt oluşur?",
    "answer": "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant (Palatoglossal hava boşluğu) oluşarak periapikal patolojileri taklit eder.",
    "coreAnswer": "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
    "keywords": [
      "Panoramik",
      "çekim",
      "sırasında",
      "hasta",
      "dilini"
    ],
    "options": [
      "Stafne kemik kavitesi",
      "Gardner Sendromu",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Kondensing osteitis"
    ],
    "correctIndex": 2
  },
  {
    "id": 375,
    "code": "S375",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Maksiller sinüslerin inflamasyonu ve orbital taban / zigoma kırıklarının değerlendirilmesinde en ideal ekstraoral projeksiyon hangisidir?",
    "answer": "Waters grafisi (Oksipitomental projeksiyon).",
    "coreAnswer": "Waters grafisi",
    "keywords": [
      "Maksiller",
      "sinüslerin",
      "inflamasyonu",
      "orbital",
      "taban"
    ],
    "options": [
      "Multipl Miyelom",
      "Waters grafisi",
      "Taurodontizm",
      "Suyun"
    ],
    "correctIndex": 1
  },
  {
    "id": 376,
    "code": "S376",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İzole zigomatik ark kırıklarını görüntülemek için kullanılan özel radyografik teknik hangisidir?",
    "answer": "Submentoverteks (Jug-handle / Kulplu testi) grafisi.",
    "coreAnswer": "Submentoverteks",
    "keywords": [
      "İzole",
      "zigomatik",
      "kırıklarını",
      "görüntülemek",
      "kullanılan"
    ],
    "options": [
      "Submentoverteks",
      "Peutz-Jeghers Sendromu",
      "Behçet Hastalığı",
      "Aşırı gülen yüz"
    ],
    "correctIndex": 0
  },
  {
    "id": 377,
    "code": "S377",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kondil boynu ve ramus kırıklarında süperpozisyonu önlemek için ağzı açık çekilen ön-arka projeksiyon hangisidir?",
    "answer": "Ters Towne (Reverse Towne) grafisi.",
    "coreAnswer": "Ters Towne",
    "keywords": [
      "Kondil",
      "boynu",
      "ramus",
      "kırıklarında",
      "süperpozisyonu"
    ],
    "options": [
      "Dens invaginatus",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Nazoalveolar kist yumuşak dokudadır",
      "Ters Towne"
    ],
    "correctIndex": 3
  },
  {
    "id": 378,
    "code": "S378",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Konik Işınlı Bilgisayarlı Tomografi (KIBT / CBCT) ile medikal BT (MDCT) karşılaştırıldığında KIBT’nin avantaj ve dezavantajları nelerdir?",
    "answer": "Avantajı: İzotropik voksel (tüm düzlemlerde eşit ve yüksek uzaysal çözünürlük) ve çok daha düşük radyasyon dozu; Dezavantajı: Yumuşak doku kontrastı düşüktür ve Hounsfield Ünitesi (HU) kalibrasyonu kesin değildir.",
    "coreAnswer": "Avantajı: İzotropik voksel",
    "keywords": [
      "Konik",
      "Işınlı",
      "Bilgisayarlı",
      "Tomografi",
      "KIBT"
    ],
    "options": [
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Avantajı: İzotropik voksel",
      "Osteosarkom"
    ],
    "correctIndex": 2
  },
  {
    "id": 379,
    "code": "S379",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "TME artiküler diskinin konumunu, perforasyonunu ve eklem içi efüzyonu değerlendirmede altın standart görüntüleme yöntemi nedir?",
    "answer": "Manyetik Rezonans Görüntüleme (MRG) — T1: Anatomik detay ve disk konumu; T2: İnflamasyon ve eklem efüzyonu (sıvı parlak görünür).",
    "coreAnswer": "Manyetik Rezonans Görüntüleme",
    "keywords": [
      "artiküler",
      "diskinin",
      "konumunu",
      "perforasyonunu",
      "eklem"
    ],
    "options": [
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Manyetik Rezonans Görüntüleme",
      "Basit",
      "Çerubizm"
    ],
    "correctIndex": 1
  },
  {
    "id": 380,
    "code": "S380",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tükürük bezi kanallarına radyoopak kontrast madde verilerek taş, darlık veya Sjögren sendromu (\"Çiçek açmış/meyve yüklü ağaç\" görünümü) incelenen yöntem?",
    "answer": "Siyalografi (Akut bakteriyel siyaloadenitte ve iyot alerjisinde kesinlikle kontrendikedir!).",
    "coreAnswer": "Siyalografi",
    "keywords": [
      "Tükürük",
      "bezi",
      "kanallarına",
      "radyoopak",
      "kontrast"
    ],
    "options": [
      "Siyalografi",
      "Waters grafisi",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Dİ: Soğan kubbesi"
    ],
    "correctIndex": 0
  },
  {
    "id": 381,
    "code": "S381",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst santral kesici dişlerin kökleri arasında kalp veya armut şeklinde radyolüsent görünen, dişlerin vital olduğu en sık non-odontojenik gelişimsel kist?",
    "answer": "Nazoalveolar kist yumuşak dokudadır; Kemik içindeki ise Nazopalatin kanal (İnsiziv kanal) kistidir ($>6\\text{ mm}$ ise kist lehinedir).",
    "coreAnswer": "Nazoalveolar kist yumuşak dokudadır",
    "keywords": [
      "santral",
      "kesici",
      "dişlerin",
      "kökleri",
      "kalp"
    ],
    "options": [
      "Stafne kemik kavitesi",
      "Gardner Sendromu",
      "Kondensing osteitis",
      "Nazoalveolar kist yumuşak dokudadır"
    ],
    "correctIndex": 3
  },
  {
    "id": 382,
    "code": "S382",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Genç hastalarda mandibula premolar-molar bölgesinde diş köklerinin arasına tarak şeklinde (scalloping) uzanan, dişleri vital bırakan radyolüsent psödokist?",
    "answer": "Basit (Travmatik / Hemorajik) Kemik Kisti.",
    "coreAnswer": "Basit",
    "keywords": [
      "Genç",
      "hastalarda",
      "mandibula",
      "premolar",
      "molar"
    ],
    "options": [
      "Multipl Miyelom",
      "Taurodontizm",
      "Basit",
      "Suyun"
    ],
    "correctIndex": 2
  },
  {
    "id": 383,
    "code": "S383",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mandibula angulus bölgesinde inferior alveolar kanalın altında, kalın kortikal sınırlı, asemptomatik, gelişimsel tükürük bezi çöküntüsü?",
    "answer": "Stafne kemik kavitesi (Statik kemik defekti — Tedavi gerektirmez, takip edilir!).",
    "coreAnswer": "Stafne kemik kavitesi",
    "keywords": [
      "Mandibula",
      "angulus",
      "bölgesinde",
      "inferior",
      "alveolar"
    ],
    "options": [
      "Peutz-Jeghers Sendromu",
      "Stafne kemik kavitesi",
      "Behçet Hastalığı",
      "Aşırı gülen yüz"
    ],
    "correctIndex": 1
  },
  {
    "id": 384,
    "code": "S384",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Otuz-kırk yaşlarındaki kadınlarda alt ön kesici dişlerin apekslerinde önce radyolüsent, sonra miks ve radyoopak olan, dişlerin vital olduğu lezyon?",
    "answer": "Periapikal semental displazi (Periapikal sementitsiz osseöz displazi — Kanal tedavisi veya biyopsi yapılmaz!).",
    "coreAnswer": "Periapikal semental displazi",
    "keywords": [
      "Otuz",
      "kırk",
      "yaşlarındaki",
      "kadınlarda",
      "kesici"
    ],
    "options": [
      "Periapikal semental displazi",
      "Dens invaginatus",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Siyalografi"
    ],
    "correctIndex": 0
  },
  {
    "id": 385,
    "code": "S385",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide \"Buzlu cam\" (Ground-glass) veya portakal kabuğu görünümü veren, korteksi incelten ve lamina durayı silen fibro-osseöz hastalık?",
    "answer": "Fibröz Displazi (GNAS1 mutasyonu; McCune-Albright sendromunda café-au-lait lekeleri ve endokrinopati ile birliktedir).",
    "coreAnswer": "Fibröz Displazi",
    "keywords": [
      "Radyografide",
      "Buzlu",
      "Ground",
      "glass",
      "portakal"
    ],
    "options": [
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Osteosarkom",
      "Fibröz Displazi"
    ],
    "correctIndex": 3
  },
  {
    "id": 386,
    "code": "S386",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Fibröz displazinin aksine çevresindeki sağlam kemikten iyi sınırlı radyolüsent bir kapsül/hale ile ayrılan ve cerrahi olarak kolayca soyulan fibro-osseöz tümör?",
    "answer": "Ossifiye Fibrom.",
    "coreAnswer": "Ossifiye Fibrom",
    "keywords": [
      "Fibröz",
      "displazinin",
      "aksine",
      "çevresindeki",
      "sağlam"
    ],
    "options": [
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Nazoalveolar kist yumuşak dokudadır",
      "Ossifiye Fibrom",
      "Çerubizm"
    ],
    "correctIndex": 2
  },
  {
    "id": 387,
    "code": "S387",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide \"Atılmış pamuk\" (Cotton-wool) görünümü, hipersementoz, maksilla genişlemesi (protezlerin dar gelmesi) ve çok yüksek serum ALP ile seyreden hastalık?",
    "answer": "Kemiğin Paget Hastalığı (Osteitis deformans — Osteosarkom gelişme riski vardır).",
    "coreAnswer": "Kemiğin Paget Hastalığı",
    "keywords": [
      "Radyografide",
      "Atılmış",
      "pamuk",
      "Cotton",
      "wool"
    ],
    "options": [
      "Waters grafisi",
      "Kemiğin Paget Hastalığı",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Dİ: Soğan kubbesi"
    ],
    "correctIndex": 1
  },
  {
    "id": 388,
    "code": "S388",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çene kemiklerinde \"Güneş ışını\" (Sunburst / Sun-ray) periost reaksiyonu ve periodontal ligament aralığında simetrik genişleme (Garrington belirtisi) hangi malignitenin bulgusudur?",
    "answer": "Osteosarkom (veya Kondrosarkom).",
    "coreAnswer": "Osteosarkom",
    "keywords": [
      "Çene",
      "kemiklerinde",
      "Güneş",
      "ışını",
      "Sunburst"
    ],
    "options": [
      "Osteosarkom",
      "Basit",
      "Gardner Sendromu",
      "Kondensing osteitis"
    ],
    "correctIndex": 0
  },
  {
    "id": 389,
    "code": "S389",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda ve gençlerde mandibulada ve uzun kemiklerde \"Soğan zarı\" (Onion-skin) şeklinde tabakalı periost reaksiyonu gösteren malign tümör (veya inflamatuar tablo)?",
    "answer": "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti (Proliferative periostitis).",
    "coreAnswer": "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
    "keywords": [
      "Çocuklarda",
      "gençlerde",
      "mandibulada",
      "uzun",
      "kemiklerde"
    ],
    "options": [
      "Multipl Miyelom",
      "Taurodontizm",
      "Suyun",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti"
    ],
    "correctIndex": 3
  },
  {
    "id": 390,
    "code": "S390",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kafatasında ve mandibulada kortikal sınırları olmayan \"Zımba ile delinmiş\" (Punched-out) çoklu radyolüsent lezyonlar ve idrarda Bence-Jones proteini?",
    "answer": "Multipl Miyelom.",
    "coreAnswer": "Multipl Miyelom",
    "keywords": [
      "Kafatasında",
      "mandibulada",
      "kortikal",
      "sınırları",
      "olmayan"
    ],
    "options": [
      "Peutz-Jeghers Sendromu",
      "Behçet Hastalığı",
      "Multipl Miyelom",
      "Aşırı gülen yüz"
    ],
    "correctIndex": 2
  },
  {
    "id": 391,
    "code": "S391",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alveol kemiğinin harap olması sonucu dişlerin radyografide \"Havada yüzüyormuş\" (Floating teeth) gibi görünmesi hangi hastalığın karakteristik bulgusudur?",
    "answer": "Langerhans Hücreli Histiyositoz (Eozinofilik granülom / Hand-Schüller-Christian — Birbeck granülleri ve CD1a / S100 pozitiftir).",
    "coreAnswer": "Langerhans Hücreli Histiyositoz",
    "keywords": [
      "Alveol",
      "kemiğinin",
      "harap",
      "olması",
      "dişlerin"
    ],
    "options": [
      "Dens invaginatus",
      "Langerhans Hücreli Histiyositoz",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Siyalografi"
    ],
    "correctIndex": 1
  },
  {
    "id": 392,
    "code": "S392",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lamina dura’nın tüm dişlerde yaygın (generalize) olarak kaybolduğu sistemik hastalıklar hangileridir?",
    "answer": "Hiperparatiroidizm, Paget hastalığı, Fibröz displazi, Osteomalazi/Raşitizm ve Cushing sendromu.",
    "coreAnswer": "Hiperparatiroidizm, Paget hastalığı, Fibröz displazi, Osteomalazi/Raşitizm ve Cushing sendromu",
    "keywords": [
      "Lamina",
      "dura",
      "dişlerde",
      "yaygın",
      "generalize"
    ],
    "options": [
      "Hiperparatiroidizm, Paget hastalığı, Fibröz displazi, Osteomalazi/Raşitizm ve Cushing sendromu",
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Kemiğin Paget Hastalığı"
    ],
    "correctIndex": 0
  },
  {
    "id": 393,
    "code": "S393",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periodontal ligament aralığının tüm dişlerde yaygın olarak simetrik genişlediği kollajen doku hastalığı hangisidir?",
    "answer": "Skleroderma (Sistemik skleroz — Ayrıca mikrognati, mikrostomi ve ramus/kondil rezorpsiyonu görülür).",
    "coreAnswer": "Skleroderma",
    "keywords": [
      "Periodontal",
      "ligament",
      "aralığının",
      "dişlerde",
      "yaygın"
    ],
    "options": [
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Nazoalveolar kist yumuşak dokudadır",
      "Çerubizm",
      "Skleroderma"
    ],
    "correctIndex": 3
  },
  {
    "id": 394,
    "code": "S394",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide \"Tenis raketi\" veya \"Merdiven basamağı\" (Stepladder) şeklinde dik açılı trabeküler bölmeler oluşturan mezenkimal odontojenik tümör?",
    "answer": "Odontojenik Miksoma.",
    "coreAnswer": "Odontojenik Miksoma",
    "keywords": [
      "Radyografide",
      "Tenis",
      "raketi",
      "Merdiven",
      "basamağı"
    ],
    "options": [
      "Waters grafisi",
      "Osteosarkom",
      "Odontojenik Miksoma",
      "Dİ: Soğan kubbesi"
    ],
    "correctIndex": 2
  },
  {
    "id": 395,
    "code": "S395",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda bilateral ağrısız çene şişliği (\"Melek yüz\" / Cherubic) ve radyografide çok sayıda multikistik radyolüsensi ile seyreden, puberte sonrası gerileyen genetik hastalık?",
    "answer": "Çerubizm (SH3BP2 gen mutasyonu).",
    "coreAnswer": "Çerubizm",
    "keywords": [
      "Çocuklarda",
      "bilateral",
      "ağrısız",
      "çene",
      "şişliği"
    ],
    "options": [
      "Basit",
      "Çerubizm",
      "Gardner Sendromu",
      "Kondensing osteitis"
    ],
    "correctIndex": 1
  },
  {
    "id": 396,
    "code": "S396",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çoklu osteomlar, epidermoid kistler, desmoid tümörler, süpernümerer/gömülü dişler ve odontomalar ile kolon adenomatöz polipleri (%100 malignleşir) içeren sendrom?",
    "answer": "Gardner Sendromu (APC gen mutasyonu — Diş hekimi panoramik filmdeki çoklu osteom ve odontomalardan tanır!).",
    "coreAnswer": "Gardner Sendromu",
    "keywords": [
      "Çoklu",
      "osteomlar",
      "epidermoid",
      "kistler",
      "desmoid"
    ],
    "options": [
      "Gardner Sendromu",
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Taurodontizm",
      "Suyun"
    ],
    "correctIndex": 0
  },
  {
    "id": 397,
    "code": "S397",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ağız çevresinde ve dudaklarda melanotik maküller (pigmentasyon) ve gastrointestinal hamartomatöz poliplerle seyreden otozomal dominant sendrom?",
    "answer": "Peutz-Jeghers Sendromu (STK11 gen mutasyonu).",
    "coreAnswer": "Peutz-Jeghers Sendromu",
    "keywords": [
      "Ağız",
      "çevresinde",
      "dudaklarda",
      "melanotik",
      "maküller"
    ],
    "options": [
      "Gardner Sendromu",
      "Behçet Hastalığı",
      "Aşırı gülen yüz",
      "Peutz-Jeghers Sendromu"
    ],
    "correctIndex": 3
  },
  {
    "id": 398,
    "code": "S398",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Fasiyal port-wine lekesi (nevüs flammeus), leptomeningeal anjiyomlar, konjenital glokom ve ipsilateral alveol kretinde hemanjiyomatöz hiperplazi/kanama ile seyreden sendrom?",
    "answer": "Sturge-Weber Sendromu (Ensefalotrigeminal anjiyomatozis — Kafa grafisinde \"tramvay yolu\" kalsifikasyonu).",
    "coreAnswer": "Sturge-Weber Sendromu",
    "keywords": [
      "Fasiyal",
      "port",
      "wine",
      "lekesi",
      "nevüs"
    ],
    "options": [
      "Dens invaginatus",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Sturge-Weber Sendromu",
      "Siyalografi"
    ],
    "correctIndex": 2
  },
  {
    "id": 399,
    "code": "S399",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Panoramik radyografide mandibula angulusu altında yumuşak dokuda görülen kalsifikasyonlarda Siyalolit, Kalsifiye lenf nodu, Tonsillolit ve Karotis ateromu nasıl ayırt edilir?",
    "answer": "Siyalolit: Homojen/tabakalı, semptomatik; Lenf nodu: Karnabahar şeklinde; Tonsillolit: Ramus üzerine süperpoze çoklu küçük opasiteler; Karotis ateromu: $C_3\\text{–}C_4$ vertebra hizasında dikey çift çizgi (İnme riski!).",
    "coreAnswer": "Siyalolit: Homojen/tabakalı, semptomatik",
    "keywords": [
      "Panoramik",
      "radyografide",
      "mandibula",
      "angulusu",
      "altında"
    ],
    "options": [
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Siyalolit: Homojen/tabakalı, semptomatik",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Kemiğin Paget Hastalığı"
    ],
    "correctIndex": 1
  },
  {
    "id": 400,
    "code": "S400",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Processus styloideus’un $>30\\text{ mm}$ uzaması veya lig. stylohyoideum’un kalsifikasyonu sonucu yutkunurken ve başı çevirirken boğaz/kulak ağrısı oluşması?",
    "answer": "Eagle Sendromu.",
    "coreAnswer": "Eagle Sendromu",
    "keywords": [
      "Processus",
      "styloideus",
      "text",
      "uzaması",
      "stylohyoideum"
    ],
    "options": [
      "Eagle Sendromu",
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Nazoalveolar kist yumuşak dokudadır",
      "Odontojenik Miksoma"
    ],
    "correctIndex": 0
  },
  {
    "id": 401,
    "code": "S401",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Amelogenesis İmperfekta’nın Hipoplastik, Hipomatür ve Hipokalsifiye tiplerinde radyografik olarak mine-dentin kontrastı nasıldır?",
    "answer": "Hipoplastik: Mine incedir ama radyoopasitesi dentinden yüksektir (normal kontrast); Hipomatür: Mine kalınlığı normaldir ama radyoopasitesi dentinle aynıdır; Hipokalsifiye: Mine yumuşaktır, sürdükten sonra hemen kırılır, radyoopasitesi dentinden düşüktür.",
    "coreAnswer": "Hipoplastik: Mine incedir ama radyoopasitesi dentinden yüksektir",
    "keywords": [
      "Amelogenesis",
      "İmperfekta",
      "Hipoplastik",
      "Hipomatür",
      "Hipokalsifiye"
    ],
    "options": [
      "Waters grafisi",
      "Osteosarkom",
      "Dİ: Soğan kubbesi",
      "Hipoplastik: Mine incedir ama radyoopasitesi dentinden yüksektir"
    ],
    "correctIndex": 3
  },
  {
    "id": 402,
    "code": "S402",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dentinogenezis İmperfekta ve Dentin Displazisi Tip I’in karakteristik radyografik bulguları nelerdir?",
    "answer": "Dİ: Soğan kubbesi (bulbous) kuronlar, servikal daralma ve pulpa odalarının tamamen obliterasyonu; Dentin Displazisi Tip I (Radiküler): Normal kuronlar, aşırı kısa/köksüz dişler (\"Rootless teeth\") ve yarımay şeklinde pulpa kalıntısı.",
    "coreAnswer": "Dİ: Soğan kubbesi",
    "keywords": [
      "Dentinogenezis",
      "İmperfekta",
      "Dentin",
      "Displazisi",
      "karakteristik"
    ],
    "options": [
      "Basit",
      "Çerubizm",
      "Dİ: Soğan kubbesi",
      "Kondensing osteitis"
    ],
    "correctIndex": 2
  },
  {
    "id": 403,
    "code": "S403",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Pulpası genişlemiş, furkasyonu apikale kaymış ve kuron-kök oranı kuron lehine artmış \"Boğa dişi\" anomalisine ne denir?",
    "answer": "Taurodontizm (Klinefelter sendromu ve Amelogenesis İmperfekta Tip IV ile sık görülür).",
    "coreAnswer": "Taurodontizm",
    "keywords": [
      "Pulpası",
      "genişlemiş",
      "furkasyonu",
      "apikale",
      "kaymış"
    ],
    "options": [
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Taurodontizm",
      "Dİ: Soğan kubbesi",
      "Suyun"
    ],
    "correctIndex": 1
  },
  {
    "id": 404,
    "code": "S404",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Mine ve dentinin pulpa boşluğu içine doğru katlanmasıyla oluşan (\"Diş içinde diş\") ve en sık üst yan kesici (lateral) dişlerde görülen anomali?",
    "answer": "Dens invaginatus (Dens in dente).",
    "coreAnswer": "Dens invaginatus",
    "keywords": [
      "Mine",
      "dentinin",
      "pulpa",
      "boşluğu",
      "içine"
    ],
    "options": [
      "Dens invaginatus",
      "Gardner Sendromu",
      "Behçet Hastalığı",
      "Aşırı gülen yüz"
    ],
    "correctIndex": 0
  },
  {
    "id": 405,
    "code": "S405",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İki ayrı diş germinin dentin düzeyinde birleşmesine (diş sayısı 1 eksiktir) ve tek bir diş germinin ikiye ayrılmasına (diş sayısı tamdır) ne denir?",
    "answer": "Birleşme: Füzyon; Ayrılma: Geminasyon (Sadece sement düzeyinde birleşirse Konkresens — en sık üst 2. ve 3. molarlar).",
    "coreAnswer": "Birleşme: Füzyon",
    "keywords": [
      "ayrı",
      "germinin",
      "dentin",
      "düzeyinde",
      "birleşmesine"
    ],
    "options": [
      "Taurodontizm",
      "En duyarlı: Lenfositler, hematopoetik kemik iliği hücreleri, germ hücreleri ve bağırsak bazal epiteli",
      "Siyalografi",
      "Birleşme: Füzyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 406,
    "code": "S406",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periapikal radyografide alt premolarların apeksine süperpoze olarak periapikal lezyonu taklit eden anatomik oluşum nedir?",
    "answer": "Foramen mentale (Açı değiştirildiğinde apeksle ilişkisi ayrılır ve lamina dura sağlamdır; üst kesicilerde ise foramen incisivum).",
    "coreAnswer": "Foramen mentale",
    "keywords": [
      "Periapikal",
      "radyografide",
      "premolarların",
      "apeksine",
      "süperpoze"
    ],
    "options": [
      "Katot: Tungsten filaman + Molibden odaklama kabı",
      "Üst dişlerin kök uçları üzerinde siyah radyolüsent bir bant",
      "Foramen mentale",
      "Kemiğin Paget Hastalığı"
    ],
    "correctIndex": 2
  },
  {
    "id": 407,
    "code": "S407",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Maksiller posterior periapikal radyografilerde maksiller sinüs tabanı ile burun tabanının kesişerek oluşturduğu radyoopak ters \"Y\" harfine ne denir?",
    "answer": "Ennis’in Ters Y çizgisi (Kanin-premolar bölgesinde görülür).",
    "coreAnswer": "Ennis’in Ters Y çizgisi",
    "keywords": [
      "Maksiller",
      "posterior",
      "periapikal",
      "radyografilerde",
      "maksiller"
    ],
    "options": [
      "Deterministik: Katarakt, eritem, mukozit, osteoradyonekroz",
      "Ennis’in Ters Y çizgisi",
      "Nazoalveolar kist yumuşak dokudadır",
      "Odontojenik Miksoma"
    ],
    "correctIndex": 1
  },
  {
    "id": 408,
    "code": "S408",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Akut apikal apsenin (semptomatik apikal periodontitis) erken evresinde periapikal radyografide hangi bulgu görülür?",
    "answer": "Belirgin kemik yıkımı henüz yoktur; sadece apikal periodontal ligament aralığında hafif genişleme görülür (Radyografik yıkım için kortikal kemiğin en az %30–50 mineral kaybetmesi gerekir!).",
    "coreAnswer": "Belirgin kemik yıkımı henüz yoktur",
    "keywords": [
      "Akut",
      "apikal",
      "apsenin",
      "semptomatik",
      "periodontitis"
    ],
    "options": [
      "Belirgin kemik yıkımı henüz yoktur",
      "Waters grafisi",
      "Osteosarkom",
      "Hipoplastik: Mine incedir ama radyoopasitesi dentinden yüksektir"
    ],
    "correctIndex": 0
  },
  {
    "id": 409,
    "code": "S409",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Genç bir hastada derin çürüklü alt 1. molar dişin apeksinde inflamatuar uyarana karşı kemik yıkımı yerine radyoopak kemik yoğunlaşması oluşmasına ne denir?",
    "answer": "Kondensing osteitis (Fokal sklerozan osteomiyelit — En sık görülen periapikal radyoopasitedir).",
    "coreAnswer": "Kondensing osteitis",
    "keywords": [
      "Genç",
      "hastada",
      "derin",
      "çürüklü",
      "molar"
    ],
    "options": [
      "Basit",
      "Çerubizm",
      "Belirgin kemik yıkımı henüz yoktur",
      "Kondensing osteitis"
    ],
    "correctIndex": 3
  },
  {
    "id": 410,
    "code": "S410",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "radyoloji",
    "subject": "Ağız, Diş ve Çene Radyolojisi",
    "branchNumber": 12,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tekrarlayan ağrılı oral aftlar, genital ülserler, üveit ve paterji testi pozitifliği ile seyreden vaskülitik sendrom?",
    "answer": "Behçet Hastalığı.",
    "coreAnswer": "Behçet Hastalığı",
    "keywords": [
      "Tekrarlayan",
      "ağrılı",
      "oral",
      "aftlar",
      "genital"
    ],
    "options": [
      "Ewing sarkomu ve Garré’nin sklerozan osteomiyeliti",
      "Dİ: Soğan kubbesi",
      "Behçet Hastalığı",
      "Suyun"
    ],
    "correctIndex": 2
  },
  {
    "id": 411,
    "code": "S411",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sağlıklı diş etinin birleşim epitelinin koronalinden alveol kreti tepesine kadar olan mesafeye (Suprakrestal doku ataşmanı / eski adıyla Biyolojik genişlik) ne kadar yer gerekir?",
    "answer": "Yaklaşık $2,04\\text{ mm}$ ($0,97\\text{ mm}$ Birleşim epiteli + $1,07\\text{ mm}$ Bağ dokusu ataşmanı; Sulkus derinliği $0,69\\text{ mm}$ dahil edilirse toplam $\\sim 2,73\\text{ mm}$).",
    "coreAnswer": "Yaklaşık $2,04\\text{ mm}$",
    "keywords": [
      "Sağlıklı",
      "etinin",
      "birleşim",
      "epitelinin",
      "koronalinden"
    ],
    "options": [
      "Antimikrobiyal etki yapmadan",
      "Yaklaşık $2,04\\text{ mm}$",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı"
    ],
    "correctIndex": 1
  },
  {
    "id": 412,
    "code": "S412",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Serbest diş eti oluğu tabanını serbest diş eti yüzeyinde işaretleyen sığ çöküntüye ve diş etindeki portakal kabuğu görünümüne ne denir?",
    "answer": "Serbest diş eti oluğu (Free gingival groove) ve Stippling (Stippling sadece yapışık diş etinde bulunur, inflamasyonda ödemle ilk kaybolan bulgulardandır).",
    "coreAnswer": "Serbest diş eti oluğu",
    "keywords": [
      "Serbest",
      "oluğu",
      "tabanını",
      "serbest",
      "yüzeyinde"
    ],
    "options": [
      "Serbest diş eti oluğu",
      "Hipofosfatazya",
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "Mine incileri"
    ],
    "correctIndex": 0
  },
  {
    "id": 413,
    "code": "S413",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yapışık diş eti (Attached gingiva) genişliği en dar hangi dişte, en geniş hangi bölgededir?",
    "answer": "En dar: Alt 1. premolar (ve kanin) vestibül yüzü; En geniş: Üst kesici dişler vestibül yüzü (Damak yüzeyi tamamen keratinize mukoza ile devam ettiği için üst palatinalde yapışık diş eti genişliği ölçülmez!).",
    "coreAnswer": "En dar: Alt 1. premolar",
    "keywords": [
      "Yapışık",
      "Attached",
      "gingiva",
      "genişliği",
      "dişte"
    ],
    "options": [
      "Yaklaşık $2,04\\text{ mm}$",
      "Hidroksiapatit",
      "Uzun birleşim epiteli",
      "En dar: Alt 1. premolar"
    ],
    "correctIndex": 3
  },
  {
    "id": 414,
    "code": "S414",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İki komşu dişin kontak noktasının altında, fasiyal ve lingual papillaları birleştiren non-keratinize vadi şeklindeki çöküntüye ne denir?",
    "answer": "Col (Vadi) bölgesi (Non-keratinize olduğu için periodontal hastalığın en erken başladığı bölgedir).",
    "coreAnswer": "Col",
    "keywords": [
      "komşu",
      "dişin",
      "kontak",
      "noktasının",
      "altında"
    ],
    "options": [
      "Hastalığın ilerleme hızını",
      "İnterdental",
      "Col",
      "Substantivite"
    ],
    "correctIndex": 2
  },
  {
    "id": 415,
    "code": "S415",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş eti bağ dokusunda en fazla bulunan fibril grubu (Tip I kollajen) ve dişi alveol soketine asan PDL fibrillerinden en fazla sayıda olanı hangisidir?",
    "answer": "Diş eti fibrilleri: Gingivodental, sirküler, transseptal; PDL ana fibrillerinden en fazla sayıda olanı: Oblik lifler (Çiğneme kuvvetlerini kemiğe çekme kuvveti olarak iletir).",
    "coreAnswer": "Diş eti fibrilleri: Gingivodental, sirküler, transseptal",
    "keywords": [
      "dokusunda",
      "fazla",
      "bulunan",
      "fibril",
      "grubu"
    ],
    "options": [
      "1) İnterdental papillerin tepesinde zımba ile delinmiş",
      "Diş eti fibrilleri: Gingivodental, sirküler, transseptal",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Chédiak-Higashi Sendromu"
    ],
    "correctIndex": 1
  },
  {
    "id": 416,
    "code": "S416",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik rotasyon hareketinden sonra dişin eski konumuna dönmesinden (relaps) sorumlu olan ve alveol kreti üzerinde komşu dişleri birbirine bağlayan lifler?",
    "answer": "Transseptal (ve suprakrestal/sirküler) lifler (Relapsı önlemek için Suprakrestal fibrotomi [Edwards] yapılır).",
    "coreAnswer": "Transseptal",
    "keywords": [
      "Ortodontik",
      "rotasyon",
      "hareketinden",
      "dişin",
      "eski"
    ],
    "options": [
      "Transseptal",
      "Koronale Kaydırılan Flep",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Fenitoin"
    ],
    "correctIndex": 0
  },
  {
    "id": 417,
    "code": "S417",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "2017 Dünya Çalıştayı (EFP/AAP) güncel periodontal hastalık sınıflamasına göre Periodontitis Evreleri (Stage I–IV) neye göre belirlenir?",
    "answer": "Hastalığın şiddeti (İnterdental klinik ataşman kaybı [KAK], radyografik kemik kaybı ve diş kaybı sayısı) ve karmaşıklığına (cep derinliği, furkasyon, oklüzal kollaps) göre.",
    "coreAnswer": "Hastalığın şiddeti",
    "keywords": [
      "2017",
      "Dünya",
      "Çalıştayı",
      "güncel",
      "periodontal"
    ],
    "options": [
      "Amelogenin",
      "Lökosit Adezyon Defekti",
      "Transseptal",
      "Hastalığın şiddeti"
    ],
    "correctIndex": 3
  },
  {
    "id": 418,
    "code": "S418",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "2017 sınıflamasına göre Evre I, Evre II ve Evre III/IV'te en kötü bölgedeki interdental klinik ataşman kaybı (KAK) sınırları kaç mm'dir?",
    "answer": "Evre I: $1\\text{–}2\\text{ mm}$; Evre II: $3\\text{–}4\\text{ mm}$; Evre III ve IV: $\\ge 5\\text{ mm}$ (Evre III'te periodontal nedenli diş kaybı $\\le 4$ diş; Evre IV'te $\\ge 5$ diş ve çiğneme rehabilitasyonu ihtiyacı vardır).",
    "coreAnswer": "Evre I: $1\\text{–}2\\text{ mm}$",
    "keywords": [
      "2017",
      "sınıflamasına",
      "Evre",
      "kötü",
      "bölgedeki"
    ],
    "options": [
      "Antimikrobiyal etki yapmadan",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı"
    ],
    "correctIndex": 2
  },
  {
    "id": 419,
    "code": "S419",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "2017 sınıflamasına göre Derece (Grade A, B, C) neyi ifade eder ve hangi iki sistemik/çevresel risk faktörü dereceyi doğrudan yükseltir?",
    "answer": "Hastalığın ilerleme hızını ($\\text{\\% kemik kaybı} / \\text{yaş}$ oranı); Modifiye edici faktörler: Sigara ($\\ge 10\\text{ adet/gün} \\to$ Grade C) ve Diyabet ($\\text{HbA1c} \\ge \\%7,0 \\to$ Grade C).",
    "coreAnswer": "Hastalığın ilerleme hızını",
    "keywords": [
      "2017",
      "sınıflamasına",
      "Derece",
      "Grade",
      "neyi"
    ],
    "options": [
      "Hipofosfatazya",
      "Hastalığın ilerleme hızını",
      "Hastalığın şiddeti",
      "Mine incileri"
    ],
    "correctIndex": 1
  },
  {
    "id": 420,
    "code": "S420",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sondalamada kanama (BOP %) eşik değerine göre bir hastaya \"Gingivitis\" tanısı konulabilmesi için BOP oranı kaç olmalıdır?",
    "answer": "$\\text{BOP} \\ge \\%10$ olmalıdır ($<\\%10$ ise Klinik Periodontal Sağlık; Sondalama cep derinliği $\\le 3\\text{ mm}$ ve ataşman kaybı yoktur veya indirgenmiş periodonsiyumda stabildir).",
    "coreAnswer": "$\\text{BOP} \\ge \\%10$ olmalıdır",
    "keywords": [
      "Sondalamada",
      "kanama",
      "eşik",
      "değerine",
      "hastaya"
    ],
    "options": [
      "$\\text{BOP} \\ge \\%10$ olmalıdır",
      "Yaklaşık $2,04\\text{ mm}$",
      "Hidroksiapatit",
      "Uzun birleşim epiteli"
    ],
    "correctIndex": 0
  },
  {
    "id": 421,
    "code": "S421",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Page ve Schroeder’in gingivitis/periodontitis patogenez evrelerinde (Başlangıç, Erken, Yerleşmiş, İlerlemiş lezyon) baskın olan hücreler sırasıyla nelerdir?",
    "answer": "1) Başlangıç (2–4 gün): PMNL (Nötrofil); 2) Erken (4–7 gün): T-Lenfositler; 3) Yerleşmiş (14–21 gün, kronik gingivitis): Plazma hücreleri ve B-lenfositler (Henüz kemik kaybı yok); 4) İlerlemiş (Periodontitis): Plazma hücreleri + Alveoler kemik ve PDL kaybı.",
    "coreAnswer": "1) Başlangıç",
    "keywords": [
      "Page",
      "Schroeder",
      "gingivitis",
      "periodontitis",
      "patogenez"
    ],
    "options": [
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "İnterdental",
      "Substantivite",
      "1) Başlangıç"
    ],
    "correctIndex": 3
  },
  {
    "id": 422,
    "code": "S422",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alveoler kemik yıkımında osteoklast öncüller üzerindeki RANK reseptörüne bağlanarak osteoklastogenezi başlatan sitokin ve onu bloke eden tuzak reseptör?",
    "answer": "Aktivatör: RANKL (ve IL-1$\\beta$, TNF-$\\alpha$, $\\text{PGE}_2$); İnhibitör tuzak reseptör: Osteoprotegerin (OPG) (Periodontitiste $\\text{RANKL}/\\text{OPG}$ oranı artar!).",
    "coreAnswer": "Aktivatör: RANKL",
    "keywords": [
      "Alveoler",
      "kemik",
      "yıkımında",
      "osteoklast",
      "öncüller"
    ],
    "options": [
      "1) İnterdental papillerin tepesinde zımba ile delinmiş",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Aktivatör: RANKL",
      "Chédiak-Higashi Sendromu"
    ],
    "correctIndex": 2
  },
  {
    "id": 423,
    "code": "S423",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sigara içen periodontitis hastalarında doku yıkımı daha şiddetli olmasına rağmen sondalamada kanama (BOP) ve kızarıklık neden daha azdır?",
    "answer": "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi.",
    "coreAnswer": "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi",
    "keywords": [
      "Sigara",
      "içen",
      "periodontitis",
      "hastalarında",
      "doku"
    ],
    "options": [
      "Koronale Kaydırılan Flep",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Fenitoin"
    ],
    "correctIndex": 1
  },
  {
    "id": 424,
    "code": "S424",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Subgingival diş taşının (kalkulus) rengi neden koyu kahverengi/siyahtır ve mineral kaynağını nereden alır?",
    "answer": "Mineral kaynağını Diş Eti Oluğu Sıvısı (DOS) ve kan yıkım ürünlerinden (hem/demir) alır (Supragingival diş taşı ise sarı-beyazdır, mineral kaynağını tükürükten alır ve en çok alt kesicilerin lingualinde ve üst 1. molarların bukkalinde birikir).",
    "coreAnswer": "Mineral kaynağını Diş Eti Oluğu Sıvısı",
    "keywords": [
      "Subgingival",
      "taşının",
      "kalkulus",
      "rengi",
      "koyu"
    ],
    "options": [
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "Amelogenin",
      "Lökosit Adezyon Defekti",
      "Transseptal"
    ],
    "correctIndex": 0
  },
  {
    "id": 425,
    "code": "S425",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş taşının yapısında en yüksek oranda bulunan inorganik kristal formu hangisidir?",
    "answer": "Hidroksiapatit (%58), ardından Oktakalsiyum fosfat, Magnezyum whitlockite ve Brushite (yeni oluşan genç diş taşında ilk çöken kristal).",
    "coreAnswer": "Hidroksiapatit",
    "keywords": [
      "taşının",
      "yapısında",
      "yüksek",
      "oranda",
      "bulunan"
    ],
    "options": [
      "Antimikrobiyal etki yapmadan",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi",
      "Hidroksiapatit"
    ],
    "correctIndex": 3
  },
  {
    "id": 426,
    "code": "S426",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Nekrotizan Ülseratif Gingivitis (NUG)’in tanı koydurucu (patognomonik) üçlü klinik bulgusu (triadı) nedir?",
    "answer": "1) İnterdental papillerin tepesinde zımba ile delinmiş (punched-out) krater tarzı nekroz, 2) Spontan kanama, 3) Şiddetli ağrı (Yalancı membran ve fetor oris eşlik eder; Bulaşıcı değildir!).",
    "coreAnswer": "1) İnterdental papillerin tepesinde zımba ile delinmiş",
    "keywords": [
      "Nekrotizan",
      "Ülseratif",
      "Gingivitis",
      "tanı",
      "koydurucu"
    ],
    "options": [
      "Hipofosfatazya",
      "Hastalığın şiddeti",
      "1) İnterdental papillerin tepesinde zımba ile delinmiş",
      "Mine incileri"
    ],
    "correctIndex": 2
  },
  {
    "id": 427,
    "code": "S427",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişeti apseleri arasında dişin vital olduğu, derin periodontal ceple ilişkili ve dişin lateral (yan) duvarında şişlik yapan apse hangisidir?",
    "answer": "Periodontal apse (Sadece serbest diş eti ve papilde yabancı cisimle oluşana Gingival apse, yarı sürmüş 3. molar üzerindeki operkulumda oluşana Perikoronal apse denir).",
    "coreAnswer": "Periodontal apse",
    "keywords": [
      "Dişeti",
      "apseleri",
      "dişin",
      "vital",
      "olduğu"
    ],
    "options": [
      "Yaklaşık $2,04\\text{ mm}$",
      "Periodontal apse",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "Uzun birleşim epiteli"
    ],
    "correctIndex": 1
  },
  {
    "id": 428,
    "code": "S428",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kemik içi (infrabony) periodontal defektler kalan kemik duvarı sayısına göre nasıl sınıflandırılır ve rejenerasyon potansiyeli en yüksek olanı hangisidir?",
    "answer": "1 duvarlı (hemiseptal), 2 duvarlı (krater) ve 3 duvarlı (intrabony) defekt; Rejenerasyon ve kemik dolumu başarısı en yüksek olan 3 duvarlı defekttir!.",
    "coreAnswer": "1 duvarlı",
    "keywords": [
      "Kemik",
      "infrabony",
      "periodontal",
      "defektler",
      "kalan"
    ],
    "options": [
      "1 duvarlı",
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "İnterdental",
      "Substantivite"
    ],
    "correctIndex": 0
  },
  {
    "id": 429,
    "code": "S429",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Glickman furkasyon sınıflamasına göre Nobers sondunun furkasyona girdiği ancak karşı tarafa geçmediği (\"Çıkmaz sokak\") defekt hangi sınıftır?",
    "answer": "Sınıf II furkasyon (Yönlendirmiş Doku Rejenerasyonu [YDR] için en uygun endikasyondur!; Sınıf I: Başlangıç; Sınıf III: Karşıdan karşıya geçer ama mukoza ile örtülü; Sınıf IV: Karşıdan karşıya geçer ve diş eti çekilmesiyle klinik olarak açıktır).",
    "coreAnswer": "Sınıf II furkasyon",
    "keywords": [
      "Glickman",
      "furkasyon",
      "sınıflamasına",
      "Nobers",
      "sondunun"
    ],
    "options": [
      "Hidroksiapatit",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Chédiak-Higashi Sendromu",
      "Sınıf II furkasyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 430,
    "code": "S430",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çok köklü dişlerde furkasyon girişi en dar olan ($<0,75\\text{ mm}$, küret ağzından dar!) ve kök gövdesi (root trunk) en kısa olduğu için furkasyon tutulumu en erken başlayan dişler?",
    "answer": "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları; Kök gövdesi en kısa: Alt 1. molar.",
    "coreAnswer": "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları",
    "keywords": [
      "köklü",
      "dişlerde",
      "furkasyon",
      "girişi",
      "text"
    ],
    "options": [
      "Koronale Kaydırılan Flep",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları",
      "Fenitoin"
    ],
    "correctIndex": 2
  },
  {
    "id": 431,
    "code": "S431",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Furkasyon tutulumuna zemin hazırlayan lokal anatomik faktörler nelerdir?",
    "answer": "Mine incileri (Enamel pearls), Servikal mine uzantıları (CEP) ve üst yan kesicilerdeki palatogingival oluk.",
    "coreAnswer": "Mine incileri",
    "keywords": [
      "Furkasyon",
      "tutulumuna",
      "zemin",
      "hazırlayan",
      "lokal"
    ],
    "options": [
      "Amelogenin",
      "Mine incileri",
      "Lökosit Adezyon Defekti",
      "Transseptal"
    ],
    "correctIndex": 1
  },
  {
    "id": 432,
    "code": "S432",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişeti çekilmelerinde Miller sınıflaması (veya güncel Cairo RT1, RT2, RT3 sınıflaması) neye göre kök kapanma başarısını öngörür?",
    "answer": "İnterdental (aproksimal) ataşman ve kemik kaybına ile mukogingival birleşime (MGB) göre! Miller Sınıf I ve II (Cairo RT1): İnterdental kemik/papil kaybı yoktur, %100 kök kapanması sağlanabilir; Miller Sınıf III (Cairo RT2): İnterdental kayıp vardır, kısmi kapanma; Miller Sınıf IV (Cairo RT3): Kök kapanması beklenmez.",
    "coreAnswer": "İnterdental",
    "keywords": [
      "Dişeti",
      "çekilmelerinde",
      "Miller",
      "sınıflaması",
      "güncel"
    ],
    "options": [
      "İnterdental",
      "Antimikrobiyal etki yapmadan",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi"
    ],
    "correctIndex": 0
  },
  {
    "id": 433,
    "code": "S433",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Açık kök yüzeyini kapatmak (dişeti çekilmesi tedavisi) için altın standart kabul edilen cerrahi teknik ve greft hangisidir?",
    "answer": "Koronale Kaydırılan Flep (KKF) + Subepitelyal Bağ Dokusu Grefti (BDG) (Yapışık diş eti genişliğini artırmak için ise Serbest Dişeti Grefti [SDG] kullanılır).",
    "coreAnswer": "Koronale Kaydırılan Flep",
    "keywords": [
      "Açık",
      "yüzeyini",
      "kapatmak",
      "dişeti",
      "çekilmesi"
    ],
    "options": [
      "Hipofosfatazya",
      "Hastalığın şiddeti",
      "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları",
      "Koronale Kaydırılan Flep"
    ],
    "correctIndex": 3
  },
  {
    "id": 434,
    "code": "S434",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periodontal el aletlerinden Üniversal küret ile Gracey (spesifik) küret arasındaki en temel açı ve kesici kenar farkı nedir?",
    "answer": "Üniversal küret: Yüzey ile boyun arası açı $90^\\circ$’dir, her iki kenarı da kesicidir; Gracey küret: Yüzey ile boyun arası açı $60^\\circ\\text{–}70^\\circ$’dir (offset blade), sadece alt (dış) tek kenarı kesicidir.",
    "coreAnswer": "Üniversal küret: Yüzey ile boyun arası açı $90^\\circ$’dir, her iki kenarı da kesicidir",
    "keywords": [
      "Periodontal",
      "aletlerinden",
      "Üniversal",
      "küret",
      "Gracey"
    ],
    "options": [
      "Yaklaşık $2,04\\text{ mm}$",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "Üniversal küret: Yüzey ile boyun arası açı $90^\\circ$’dir, her iki kenarı da kesicidir",
      "Uzun birleşim epiteli"
    ],
    "correctIndex": 2
  },
  {
    "id": 435,
    "code": "S435",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Standart Gracey küret setinde 1/2, 3/4, 7/8, 11/12 ve 13/14 numaralı küretler hangi diş yüzeylerinde kullanılır?",
    "answer": "1/2 ve 3/4: Ön dişler; 5/6: Ön dişler ve premolarlar; 7/8 ve 9/10: Arka dişlerin fasiyal ve lingual yüzleri; 11/12: Arka dişlerin mezial yüzleri; 13/14: Arka dişlerin distal yüzleri.",
    "coreAnswer": "1/2 ve 3/4: Ön dişler",
    "keywords": [
      "Standart",
      "Gracey",
      "küret",
      "setinde",
      "numaralı"
    ],
    "options": [
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "1/2 ve 3/4: Ön dişler",
      "Mine incileri",
      "Substantivite"
    ],
    "correctIndex": 1
  },
  {
    "id": 436,
    "code": "S436",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş yüzeyi temizliği ve kök yüzeyi düzleştirmede (SRP) el aletinin diş yüzeyi ile yaptığı ideal çalışma açısı kaç derecedir?",
    "answer": "$45^\\circ\\text{–}90^\\circ$ (İdeal olarak $70^\\circ\\text{–}80^\\circ$; Cep içine yerleştirme açısı $0^\\circ$, yumuşak doku küretajı açısı $>90^\\circ$).",
    "coreAnswer": "$45^\\circ\\text{–}90^\\circ$",
    "keywords": [
      "yüzeyi",
      "temizliği",
      "düzleştirmede",
      "aletinin",
      "yaptığı"
    ],
    "options": [
      "$45^\\circ\\text{–}90^\\circ$",
      "Hidroksiapatit",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Chédiak-Higashi Sendromu"
    ],
    "correctIndex": 0
  },
  {
    "id": 437,
    "code": "S437",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cerrahisiz periodontal tedavi (Faz I / SRP) sonrasında cep derinliği ve klinik ataşman kazancını yeniden değerlendirmek (Re-evalüasyon) için en az kaç hafta beklenmelidir?",
    "answer": "4–6 hafta (Birleşim epitelinin iyileşmesi ve bağ dokusu matürasyonu için; erken sondalanırsa ataşman yırtılır!).",
    "coreAnswer": "4–6 hafta",
    "keywords": [
      "Cerrahisiz",
      "periodontal",
      "tedavi",
      "sonrasında",
      "derinliği"
    ],
    "options": [
      "İnterdental",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Fenitoin",
      "4–6 hafta"
    ],
    "correctIndex": 3
  },
  {
    "id": 438,
    "code": "S438",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Cerrahisiz SRP sonrasında iyileşme temel olarak hangi doku tipi ile gerçekleşir (Tamir / Repair)?",
    "answer": "Uzun birleşim epiteli (Long junctional epithelium) ile iyileşir.",
    "coreAnswer": "Uzun birleşim epiteli",
    "keywords": [
      "Cerrahisiz",
      "sonrasında",
      "iyileşme",
      "temel",
      "doku"
    ],
    "options": [
      "Amelogenin",
      "Lökosit Adezyon Defekti",
      "Uzun birleşim epiteli",
      "Transseptal"
    ],
    "correctIndex": 2
  },
  {
    "id": 439,
    "code": "S439",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gerçek periodontal rejenerasyon (yeni sement, yeni PDL ve yeni alveol kemiği oluşumu) sağlamak için Yönlendirilmiş Doku Rejenerasyonu (YDR / GTR)'nda bariyer membran neyi engeller?",
    "answer": "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament (PDL) ve kemik hücrelerine zaman ve alan kazandırır (Melcher hipotezi).",
    "coreAnswer": "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
    "keywords": [
      "Gerçek",
      "periodontal",
      "rejenerasyon",
      "yeni",
      "sement"
    ],
    "options": [
      "Antimikrobiyal etki yapmadan",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi"
    ],
    "correctIndex": 1
  },
  {
    "id": 440,
    "code": "S440",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periodontal rejenerasyonda kök yüzeyine uygulanarak hücresel sement oluşumunu tetikleyen Mine Matriks Türevi (Enamel Matrix Derivative — Emdogain) içerisindeki ana protein nedir?",
    "answer": "Amelogenin (Domuz embriyonik diş germinden elde edilir).",
    "coreAnswer": "Amelogenin",
    "keywords": [
      "Periodontal",
      "rejenerasyonda",
      "yüzeyine",
      "uygulanarak",
      "hücresel"
    ],
    "options": [
      "Amelogenin",
      "Hipofosfatazya",
      "Hastalığın şiddeti",
      "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları"
    ],
    "correctIndex": 0
  },
  {
    "id": 441,
    "code": "S441",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kemik cerrahisi yapılmaksızın cep eliminasyonu ve kök yüzeyine direkt görüş sağlamak için iç eğimli (internal bevel), sulkuler ve interdental olmak üzere 3 insizyonla yapılan temel flep?",
    "answer": "Modifiye Widman Flebi (Ramfjord).",
    "coreAnswer": "Modifiye Widman Flebi",
    "keywords": [
      "Kemik",
      "cerrahisi",
      "yapılmaksızın",
      "eliminasyonu",
      "yüzeyine"
    ],
    "options": [
      "Yaklaşık $2,04\\text{ mm}$",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "4–6 hafta",
      "Modifiye Widman Flebi"
    ],
    "correctIndex": 3
  },
  {
    "id": 442,
    "code": "S442",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Hem cep eliminasyonu hem de klinik kuron boyu uzatma amacıyla flebin tümünün alveol kreti tepesine/apikaline dikildiği, ancak mukogingival birleşimi geçmeyen ceplerde kontrendike (yapışık diş eti yetersizse dikkat!) olan flep?",
    "answer": "Apikale Konumlandırılan Flep (Palatinal bölgede hareketli mukoza olmadığı için apikale kaydırılamaz; damakta sadece iç eğimli gingivektomi yapılır!).",
    "coreAnswer": "Apikale Konumlandırılan Flep",
    "keywords": [
      "eliminasyonu",
      "klinik",
      "kuron",
      "boyu",
      "uzatma"
    ],
    "options": [
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "Mine incileri",
      "Apikale Konumlandırılan Flep",
      "Substantivite"
    ],
    "correctIndex": 2
  },
  {
    "id": 443,
    "code": "S443",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gingivektomi operasyonunun kesin kontrendike olduğu durumlar nelerdir?",
    "answer": "Kemik içi (infrabony) cepler, cep tabanının mukogingival birleşimin apikalinde olması (yetersiz yapışık diş eti) ve kemik cerrahisi gereksinimi.",
    "coreAnswer": "Kemik içi",
    "keywords": [
      "Gingivektomi",
      "operasyonunun",
      "kesin",
      "kontrendike",
      "olduğu"
    ],
    "options": [
      "Hidroksiapatit",
      "Kemik içi",
      "Uzun birleşim epiteli",
      "Chédiak-Higashi Sendromu"
    ],
    "correctIndex": 1
  },
  {
    "id": 444,
    "code": "S444",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alveol kemiğinde dişin destek kemiğini kaldırmadan fizyolojik mimari oluşturmaya (Osteoplasti) ve destek kemiği kaldırmaya (Ostektomi) ne zaman başvurulur?",
    "answer": "Osteoplasti: Kalın kemik kenarları, toruslar ve sığ kraterler; Ostektomi: Kuron boyu uzatma (restorasyon sınırı ile kret arasında en az $3\\text{ mm}$ mesafe bırakmak için) ve ters kemik mimarisi.",
    "coreAnswer": "Osteoplasti: Kalın kemik kenarları, toruslar ve sığ kraterler",
    "keywords": [
      "Alveol",
      "kemiğinde",
      "dişin",
      "destek",
      "kemiğini"
    ],
    "options": [
      "Osteoplasti: Kalın kemik kenarları, toruslar ve sığ kraterler",
      "İnterdental",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Fenitoin"
    ],
    "correctIndex": 0
  },
  {
    "id": 445,
    "code": "S445",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Plak kontrolünde altın standart kimyasal ajan olan Klorheksidin diglukonat (%0,12–%0,2) gargaranın ağız dokularına tutunup yavaşça salınması özelliğine ne denir?",
    "answer": "Substantivite (Katyonik yapıda olduğu için negatif yüklü pelikül ve mukozaya bağlanır; Diş macunundaki anyonik SLS [Sodyum lauril sülfat] ile etkileşmemesi için fırçalamadan 30 dakika sonra kullanılmalıdır!).",
    "coreAnswer": "Substantivite",
    "keywords": [
      "Plak",
      "kontrolünde",
      "altın",
      "standart",
      "kimyasal"
    ],
    "options": [
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Lökosit Adezyon Defekti",
      "Transseptal",
      "Substantivite"
    ],
    "correctIndex": 3
  },
  {
    "id": 446,
    "code": "S446",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Klorheksidin gargaranın en sık görülen yan etkileri nelerdir?",
    "answer": "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma (tuzlu/acı tat kaybı) ve supragingival diş taşı artış.",
    "coreAnswer": "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
    "keywords": [
      "Klorheksidin",
      "gargaranın",
      "görülen",
      "etkileri",
      "nelerdir"
    ],
    "options": [
      "Antimikrobiyal etki yapmadan",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi"
    ],
    "correctIndex": 2
  },
  {
    "id": 447,
    "code": "S447",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Subantimikrobiyal doz doksisiklin (SDD: günde 2 kez $20\\text{ mg}$, 3 ay) tedavisinin temel amacı (Konak Modülasyonu) nedir?",
    "answer": "Antimikrobiyal etki yapmadan (direnç geliştirmeden) konağın kollajenaz (MMP-8, MMP-9) enzimlerini inhibe etmek.",
    "coreAnswer": "Antimikrobiyal etki yapmadan",
    "keywords": [
      "Subantimikrobiyal",
      "doksisiklin",
      "günde",
      "text",
      "tedavisinin"
    ],
    "options": [
      "Hipofosfatazya",
      "Antimikrobiyal etki yapmadan",
      "Hastalığın şiddeti",
      "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları"
    ],
    "correctIndex": 1
  },
  {
    "id": 448,
    "code": "S448",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Primer oklüzal travma ile Sekonder oklüzal travma arasındaki fark nedir ve oklüzal travma tek başına ataşman/cep oluşturur mu?",
    "answer": "Primer: Normal periodontal desteğe sahip dişte aşırı kuvvet; Sekonder: Azalmış periodontal desteğe sahip dişte normal veya aşırı kuvvet; Tek başına oklüzal travma diş eti iltihabı veya periodontal cep oluşturmaz (Ancak mevcut plak kaynaklı periodontitiste açısal kemik yıkımını hızlandırır!).",
    "coreAnswer": "Primer: Normal periodontal desteğe sahip dişte aşırı kuvvet",
    "keywords": [
      "Primer",
      "oklüzal",
      "travma",
      "Sekonder",
      "arasındaki"
    ],
    "options": [
      "Primer: Normal periodontal desteğe sahip dişte aşırı kuvvet",
      "Yaklaşık $2,04\\text{ mm}$",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "4–6 hafta"
    ],
    "correctIndex": 0
  },
  {
    "id": 449,
    "code": "S449",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dental implant çevresinde sadece yumuşak dokuda sondalamada kanama/ödem olmasına Peri-implant mukozitis denirken, buna radyografik destek kemik kaybının eklenmesine ne denir?",
    "answer": "Peri-implantitis.",
    "coreAnswer": "Peri-implantitis",
    "keywords": [
      "Dental",
      "implant",
      "çevresinde",
      "sadece",
      "yumuşak"
    ],
    "options": [
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "Mine incileri",
      "Osteoplasti: Kalın kemik kenarları, toruslar ve sığ kraterler",
      "Peri-implantitis"
    ],
    "correctIndex": 3
  },
  {
    "id": 450,
    "code": "S450",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Doğal diş ile dental implantın çevresindeki kollajen liflerin dizilimi ve damarlanması arasındaki kritik fark nedir?",
    "answer": "Doğal dişte Sharpey lifleri semente dik girer ve PDL’den zengin kanlanır; İmplantta ise kollajen lifler yüzeye paralel/sirküler uzanır ve PDL damarları olmadığı için kanlanması zayıftır (Enfeksiyon kemiğe çok daha hızlı ilerler!).",
    "coreAnswer": "Doğal dişte Sharpey lifleri semente dik girer ve PDL’den zengin kanlanır",
    "keywords": [
      "Doğal",
      "dental",
      "implantın",
      "çevresindeki",
      "kollajen"
    ],
    "options": [
      "Hidroksiapatit",
      "Uzun birleşim epiteli",
      "Doğal dişte Sharpey lifleri semente dik girer ve PDL’den zengin kanlanır",
      "Chédiak-Higashi Sendromu"
    ],
    "correctIndex": 2
  },
  {
    "id": 451,
    "code": "S451",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "El ve ayak tabanlarında aşırı keratinizasyon (palmoplantar hiperkeratoz) ve hem süt hem daimi dişlerin şiddetli periodontitisle erken kaybı ile seyreden otozomal resesif sendrom?",
    "answer": "Papillon-Lefèvre Sendromu (Katepsin C gen mutasyonu).",
    "coreAnswer": "Papillon-Lefèvre Sendromu",
    "keywords": [
      "ayak",
      "tabanlarında",
      "aşırı",
      "keratinizasyon",
      "palmoplantar"
    ],
    "options": [
      "İnterdental",
      "Papillon-Lefèvre Sendromu",
      "Substantivite",
      "Fenitoin"
    ],
    "correctIndex": 1
  },
  {
    "id": 452,
    "code": "S452",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Nötrofillerde ve diğer hücrelerde dev lizozomal granüller, parsiyel albinizm, tekrarlayan enfeksiyonlar ve şiddetli periodontitis ile seyreden sendrom?",
    "answer": "Chédiak-Higashi Sendromu (LYST gen mutasyonu).",
    "coreAnswer": "Chédiak-Higashi Sendromu",
    "keywords": [
      "Nötrofillerde",
      "diğer",
      "hücrelerde",
      "lizozomal",
      "granüller"
    ],
    "options": [
      "Chédiak-Higashi Sendromu",
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Lökosit Adezyon Defekti",
      "Transseptal"
    ],
    "correctIndex": 0
  },
  {
    "id": 453,
    "code": "S453",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "CD18 ($\\beta_2$ integrin) eksikliği sonucu nötrofillerin damar endoteline yapışıp dokuya geçemediği ve diş etinde şiddetli yıkımla seyreden sendrom?",
    "answer": "Lökosit Adezyon Defekti (LAD Tip I).",
    "coreAnswer": "Lökosit Adezyon Defekti",
    "keywords": [
      "CD18",
      "beta_2",
      "integrin",
      "eksikliği",
      "nötrofillerin"
    ],
    "options": [
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi",
      "Lökosit Adezyon Defekti"
    ],
    "correctIndex": 3
  },
  {
    "id": 454,
    "code": "S454",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alkalen fosfataz (ALP) eksikliği sonucu sement oluşum bozukluğu (sement aplazisi/hipoplazisi) nedeniyle süt kesici dişlerin inflamasyon olmaksızın kökü sağlam şekilde erken düşmesi?",
    "answer": "Hipofosfatazya (İdrarda fosfoetanolamin artar, kanda ALP düşüktür!).",
    "coreAnswer": "Hipofosfatazya",
    "keywords": [
      "Alkalen",
      "fosfataz",
      "eksikliği",
      "sement",
      "oluşum"
    ],
    "options": [
      "Lökosit Adezyon Defekti",
      "Hastalığın şiddeti",
      "Hipofosfatazya",
      "Furkasyon girişi en dar: Üst 1. premolar ve üst 1. moların bukkal/distal furkasyonları"
    ],
    "correctIndex": 2
  },
  {
    "id": 455,
    "code": "S455",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Diş fırçalama tekniklerinden Modifiye Bass tekniğinde fırça kılları nereye ve kaç derece açıyla yerleştirilir?",
    "answer": "Diş eti oluğuna (sulkusa) $45^\\circ$ açıyla yerleştirilir, kısa ileri-geri titreşim yapılıp kurona doğru süpürülür (Dişeti çekilmesi olanlarda Stillman, ortodontik braketlerde Charter tekniği kullanılır).",
    "coreAnswer": "Diş eti oluğuna",
    "keywords": [
      "fırçalama",
      "tekniklerinden",
      "Modifiye",
      "Bass",
      "tekniğinde"
    ],
    "options": [
      "Yaklaşık $2,04\\text{ mm}$",
      "Diş eti oluğuna",
      "Mineral kaynağını Diş Eti Oluğu Sıvısı",
      "4–6 hafta"
    ],
    "correctIndex": 1
  },
  {
    "id": 456,
    "code": "S456",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İnterdental papilin tamamen dolu olduğu (Tip I embrazür), kısmen çekildiği (Tip II) ve tamamen kaybolduğu (Tip III) alanlarda hangi arayüz temizlik araçları seçilir?",
    "answer": "Tip I: Diş ipi; Tip II ve III (ve konkav kök yüzeyleri/furkasyonlar): Arayüz fırçası (Interdental brush).",
    "coreAnswer": "Tip I: Diş ipi",
    "keywords": [
      "İnterdental",
      "papilin",
      "tamamen",
      "dolu",
      "olduğu"
    ],
    "options": [
      "Tip I: Diş ipi",
      "Evre I: $1\\text{–}2\\text{ mm}$",
      "Mine incileri",
      "Osteoplasti: Kalın kemik kenarları, toruslar ve sığ kraterler"
    ],
    "correctIndex": 0
  },
  {
    "id": 457,
    "code": "S457",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst 1. molar dişin distobukkal veya palatinal kökünün kuron kısmına dokunulmadan sadece kökünün kesilip çıkarılması işlemine ne denir?",
    "answer": "Kök amputasyonu (Alt molarda kuron ve kök ikiye bölünüp bir yarısı çekilirse Hemiseksiyondur; her iki yarısı da bırakılıp iki küçük premolar gibi restore edilirse Biküspidizasyon / Premolarizasyondur).",
    "coreAnswer": "Kök amputasyonu",
    "keywords": [
      "molar",
      "dişin",
      "distobukkal",
      "palatinal",
      "kökünün"
    ],
    "options": [
      "Hidroksiapatit",
      "Uzun birleşim epiteli",
      "Papillon-Lefèvre Sendromu",
      "Kök amputasyonu"
    ],
    "correctIndex": 3
  },
  {
    "id": 458,
    "code": "S458",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Periodontal idame (Destekleyici Periodontal Tedavi - DPT) fazında yüksek riskli periodontitis hastaları kaç ayda bir kontrole çağrılır?",
    "answer": "3 ayda bir (Subgingival spiroket ve hareketli basillerin yeniden patojenik sayıya ulaşması 9–11 hafta sürer!).",
    "coreAnswer": "3 ayda bir",
    "keywords": [
      "Periodontal",
      "idame",
      "Destekleyici",
      "Tedavi",
      "fazında"
    ],
    "options": [
      "İnterdental",
      "Substantivite",
      "3 ayda bir",
      "Fenitoin"
    ],
    "correctIndex": 2
  },
  {
    "id": 459,
    "code": "S459",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişeti büyümesi (hiperplazisi) yapan ilaçlar arasında görülme sıklığı (prevalansı) en yüksek (%50) olan hangisidir?",
    "answer": "Fenitoin (Siklosporin ~%30, Nifedipin ~%20; Dişsiz bölgelerde ilaç kaynaklı büyüme görülmez ve plak kontrolü şiddeti azaltır!).",
    "coreAnswer": "Fenitoin",
    "keywords": [
      "Dişeti",
      "büyümesi",
      "hiperplazisi",
      "yapan",
      "ilaçlar"
    ],
    "options": [
      "Hızlı çoğalan diş eti epitelinin ve bağ dokusunun kök yüzeyine göçünü engelleyerek, periodontal ligament",
      "Fenitoin",
      "Chédiak-Higashi Sendromu",
      "Transseptal"
    ],
    "correctIndex": 1
  },
  {
    "id": 460,
    "code": "S460",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "periodontoloji",
    "subject": "Periodontoloji",
    "branchNumber": 13,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Akut Lösemi (özellikle Akut Monositik Lösemi - AML M5) hastalarında diş etinde görülen karakteristik bulgu nedir?",
    "answer": "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması.",
    "coreAnswer": "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
    "keywords": [
      "Akut",
      "Lösemi",
      "özellikle",
      "Monositik",
      "hastalarında"
    ],
    "options": [
      "Lösemik hücre infiltrasyonuna bağlı yaygın, morumsu-kırmızı, süngerimsi diş eti büyümesi ve spontan diş eti kanaması",
      "Dişlerde, dilde ve restorasyonlarda kahverengi ekstrinsik renklenme, tat duyusunda bozulma",
      "Fenitoin",
      "Nikotin ve tütün yan ürünlerinin diş eti damarlarında vazokonstriksiyon ve fibrozis yaparak inflamasyonun klinik bulgularını maskelemesi"
    ],
    "correctIndex": 0
  },
  {
    "id": 461,
    "code": "S461",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kranial kaide (Sfenooksipital sinkondrozis), Maksilla ve Mandibula büyümesinde hangi büyüme mekanizmaları (kondral vs. sutural/periostal) rol oynar?",
    "answer": "Kranial kaide: Endokondral (Sinkondrozisler); Maksilla: İntramembranöz (Sutural büyüme + tüber bölgesine apozisyon, ön yüzeye rezorpsiyon); Mandibula: Gövdesi intramembranöz (ramus arkasına apozisyon, önüne rezorpsiyon), kondil başı sekonder kıkırdak (endokondral).",
    "coreAnswer": "Kranial kaide: Endokondral",
    "keywords": [
      "Kranial",
      "kaide",
      "Sfenooksipital",
      "sinkondrozis",
      "Maksilla"
    ],
    "options": [
      "Transpozisyon",
      "SNA",
      "High-angle",
      "Kranial kaide: Endokondral"
    ],
    "correctIndex": 3
  },
  {
    "id": 462,
    "code": "S462",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Scammon’un büyüme eğrilerine göre kraniyofasiyal yapılardan Nöral (kafatası) ve Genel (çeneler) dokularla uyumlu büyüyenler hangileridir?",
    "answer": "Kranial kubbe: Nöral eğri (6–7 yaşında %90 tamamlanır); Maksilla ve Mandibula: Genel (Somatik) eğri (Maksilla nöral eğriye biraz daha yakınken, Mandibula pubertal büyüme atılımını en net takip eder!).",
    "coreAnswer": "Kranial kubbe: Nöral eğri",
    "keywords": [
      "Scammon",
      "büyüme",
      "eğrilerine",
      "kraniyofasiyal",
      "yapılardan"
    ],
    "options": [
      "Kranial kaide: Endokondral",
      "$M/F = 10:1$",
      "Kranial kubbe: Nöral eğri",
      "Moyers Analizi"
    ],
    "correctIndex": 2
  },
  {
    "id": 463,
    "code": "S463",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Büyümenin tamamlanma sırası üç düzlemde (Transversal, Sagittal, Vertikal) nasıl gerçekleşir?",
    "answer": "İlk tamamlanan: Transversal (Genişlik) → İkinci: Sagittal (Ön-arka derinlik) → En son tamamlanan: Vertikal (Yükseklik).",
    "coreAnswer": "İlk tamamlanan: Transversal",
    "keywords": [
      "Büyümenin",
      "tamamlanma",
      "sırası",
      "düzlemde",
      "Transversal"
    ],
    "options": [
      "Wits Analizi",
      "İlk tamamlanan: Transversal",
      "Yüz Maskesi",
      "İnfraoklüzyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 464,
    "code": "S464",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişlenmede üst kanin ve alt birinci süt moların distalinde bulunan fizyolojik boşluklara ne ad verilir?",
    "answer": "Primat (Maymun) boşlukları (Üst çenede lateral ile kanin arasında [mezialde], alt çenede kanin ile 1. süt molar arasında [distalde] bulunur!).",
    "coreAnswer": "Primat",
    "keywords": [
      "dişlenmede",
      "kanin",
      "birinci",
      "moların",
      "distalinde"
    ],
    "options": [
      "Primat",
      "Nikel-Titanyum",
      "Seri Çekim",
      "Yeterli overbite"
    ],
    "correctIndex": 0
  },
  {
    "id": 465,
    "code": "S465",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt ikinci molar ile daimi birinci küçük azı arasındaki meziodistal boyut farkına (Nance / Leeway rezervi) ne denir ve üst/alt çenede kaç mm’dir?",
    "answer": "Leeway (Rezerv) boşluğu; Üst çenede tek tarafta $\\sim 0,9\\text{ mm}$ (toplam $1,8\\text{ mm}$), alt çenede tek tarafta $\\sim 1,7\\text{ mm}$ (toplam $3,4\\text{ mm}$ — Alt 1. daimi moların geç mezial şifti ile Sınıf I ilişkiye geçmesini sağlar).",
    "coreAnswer": "Leeway",
    "keywords": [
      "ikinci",
      "molar",
      "daimi",
      "birinci",
      "küçük"
    ],
    "options": [
      "Çene ucu",
      "Hastanın alt çenesi sentrik ilişkiye",
      "3. Molarlar → Alt 2. Premolar",
      "Leeway"
    ],
    "correctIndex": 3
  },
  {
    "id": 466,
    "code": "S466",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst daimi kesici dişlerin sürerken kuronlarının distale doğru yelpaze gibi açılı ve aralıklı görünmesine (Çirkin ördek yavrusu / Ugly duckling evresi) ne neden olur ve tedavisi nedir?",
    "answer": "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı; Fizyolojiktir, tedavi edilmez! (Üst kaninler sürdüğünde diastema kendiliğinden kapanır).",
    "coreAnswer": "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı",
    "keywords": [
      "daimi",
      "kesici",
      "dişlerin",
      "sürerken",
      "kuronlarının"
    ],
    "options": [
      "Anterior açık kapanış, üst kesicilerde protrüzyon",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı",
      "Sınıf I: Alt 1. moların bukkal oluğuna"
    ],
    "correctIndex": 2
  },
  {
    "id": 467,
    "code": "S467",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Angle sınıflandırmasına göre Sınıf I, Sınıf II (Bölüm 1 ve 2) ve Sınıf III maloklüzyonlarda üst 1. daimi moların mesiobukkal tüberkülü nereye kapanır?",
    "answer": "Sınıf I: Alt 1. moların bukkal oluğuna; Sınıf II: Bukkal oluğun önüne (mezialine) (Bölüm 1: Artmış overjet, protrüziv üst kesiciler; Bölüm 2: Derin kapanış, retrüziv üst santraller, labiale eğimli lateraller); Sınıf III: Bukkal oluğun gerisine (distaline).",
    "coreAnswer": "Sınıf I: Alt 1. moların bukkal oluğuna",
    "keywords": [
      "Angle",
      "sınıflandırmasına",
      "Sınıf",
      "Bölüm",
      "maloklüzyonlarda"
    ],
    "options": [
      "Low-angle",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Straight-wire",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır"
    ],
    "correctIndex": 1
  },
  {
    "id": 468,
    "code": "S468",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Steiner sefalometrik analizinde SNA, SNB ve ANB açılarının normal değerleri kaçtır ve neyi gösterir?",
    "answer": "SNA ($82^\\circ \\pm 2^\\circ$): Maksillanın kafa kaidesine göre ön-arka konumu; SNB ($80^\\circ \\pm 2^\\circ$): Mandibulanın ön-arka konumu; ANB ($2^\\circ \\pm 2^\\circ$): İskeletsel çeneler arası ilişki ($\\text{ANB} > 4^\\circ \\to$ İskeletsel Sınıf II; $\\text{ANB} < 0^\\circ \\to$ İskeletsel Sınıf III).",
    "coreAnswer": "SNA",
    "keywords": [
      "Steiner",
      "sefalometrik",
      "analizinde",
      "açılarının",
      "normal"
    ],
    "options": [
      "SNA",
      "Transpozisyon",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "High-angle"
    ],
    "correctIndex": 0
  },
  {
    "id": 469,
    "code": "S469",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kafa kaidesi eğiminden (SN düzlemi rotasyonundan) etkilenmeyen ve oklüzal düzlem üzerine A ve B noktalarından indirilen dikmelerle ölçülen analiz nedir?",
    "answer": "Wits Analizi (Normali: Kadınlarda $0\\text{ mm}$, Erkeklerde $-1\\text{ mm}$).",
    "coreAnswer": "Wits Analizi",
    "keywords": [
      "Kafa",
      "kaidesi",
      "eğiminden",
      "düzlemi",
      "rotasyonundan"
    ],
    "options": [
      "Kranial kaide: Endokondral",
      "$M/F = 10:1$",
      "Moyers Analizi",
      "Wits Analizi"
    ],
    "correctIndex": 3
  },
  {
    "id": 470,
    "code": "S470",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sefalometride yüzün dik yön (vertikal) büyüme paternini değerlendiren GoGn-SN (Steiner) ve FMA (Tweed) açılarının normal değerleri kaçtır?",
    "answer": "GoGn-SN: $32^\\circ$ ($>32^\\circ$ Hiperdiverjan / High-angle / Açık kapanış eğilimi; $<32^\\circ$ Hipodiverjan / Low-angle / Derin kapanış eğilimi); FMA: $25^\\circ$.",
    "coreAnswer": "GoGn-SN: $32^\\circ$",
    "keywords": [
      "Sefalometride",
      "yüzün",
      "vertikal",
      "büyüme",
      "paternini"
    ],
    "options": [
      "SNA",
      "Yüz Maskesi",
      "GoGn-SN: $32^\\circ$",
      "İnfraoklüzyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 471,
    "code": "S471",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik diş hareketinde kuvvet uygulanan tarafta (basınç bölgesi) ve karşı tarafta (gerilim bölgesi) alveol kemiğinde ne gerçekleşir?",
    "answer": "Basınç bölgesinde: Kemik rezorpsiyonu (Osteoklastlar); Gerilim bölgesinde: Kemik apozisyonu (Osteoblastlar — Diş soketiyle birlikte hareket eder!).",
    "coreAnswer": "Basınç bölgesinde: Kemik rezorpsiyonu",
    "keywords": [
      "Ortodontik",
      "hareketinde",
      "kuvvet",
      "uygulanan",
      "tarafta"
    ],
    "options": [
      "Nikel-Titanyum",
      "Basınç bölgesinde: Kemik rezorpsiyonu",
      "Seri Çekim",
      "Yeterli overbite"
    ],
    "correctIndex": 1
  },
  {
    "id": 472,
    "code": "S472",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişe hafif/optimal kuvvet uygulandığında PDL damarları açık kalarak lamina duranın iç yüzünden başlayan yıkıma (Frontal / Direkt rezorpsiyon), aşırı kuvvet uygulandığında PDL sıkışıp hiyalinizasyon (steril nekroz) oluşarak kemik iliğinden başlayan yıkıma ne denir?",
    "answer": "İndirekt (Undermining / Gecikmiş) rezorpsiyon (Hiyalinizasyon ortadan kalkana kadar 7–14 gün diş hareket etmez = Lag fazı).",
    "coreAnswer": "İndirekt",
    "keywords": [
      "Dişe",
      "hafif",
      "optimal",
      "kuvvet",
      "uygulandığında"
    ],
    "options": [
      "İndirekt",
      "Çene ucu",
      "Hastanın alt çenesi sentrik ilişkiye",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 0
  },
  {
    "id": 473,
    "code": "S473",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik hareket tiplerinden (Eğilme/Tipping, Paralel/Bodily, Rotasyon, Ekstrüzyon, İntrüzyon) en az kuvvet gerektiren ancak kök ucunda stres yoğunlaştığı için kök rezorpsiyonu riski en yüksek olan hareket hangisidir?",
    "answer": "İntrüzyon (Gömme) hareketi ($10\\text{–}20\\text{ g}$ çok hafif ve sürekli kuvvet uygulanmalıdır!).",
    "coreAnswer": "İntrüzyon",
    "keywords": [
      "Ortodontik",
      "hareket",
      "tiplerinden",
      "Eğilme",
      "Tipping"
    ],
    "options": [
      "Anterior açık kapanış, üst kesicilerde protrüzyon",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı",
      "İntrüzyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 474,
    "code": "S474",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişin direnç merkezi (Center of Resistance) tek köklü sağlıklı bir dişte nerededir ve alveol kemik kaybı olan periodontal hastada nereye kayar?",
    "answer": "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır (Çok köklü dişlerde furkasyonun $1\\text{–}2\\text{ mm}$ apikalindedir); Kemik kaybı olursa direnç merkezi apikale kayar (Aynı kuvvet daha fazla devrilme momenti oluşturur!).",
    "coreAnswer": "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
    "keywords": [
      "Dişin",
      "direnç",
      "merkezi",
      "Center",
      "Resistance"
    ],
    "options": [
      "Low-angle",
      "Straight-wire",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "İntrüzyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 475,
    "code": "S475",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir dişe braket üzerinden kuvvet uygulandığında dişin eğilmeden paralel (bodily) hareket etmesi için uygulanması gereken Moment/Kuvvet ($M/F$) oranı kaçtır?",
    "answer": "$M/F = 10:1$ (Serbest eğilme: $0:1$; Kontrollü eğilme [apeks sabit]: $7:1$; Kök hareketi [tork - kuron sabit]: $12:1$).",
    "coreAnswer": "$M/F = 10:1$",
    "keywords": [
      "dişe",
      "braket",
      "kuvvet",
      "uygulandığında",
      "dişin"
    ],
    "options": [
      "Transpozisyon",
      "$M/F = 10:1$",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "High-angle"
    ],
    "correctIndex": 1
  },
  {
    "id": 476,
    "code": "S476",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik tellerde yüksek esneklik, şekil hafızası (shape memory) ve süperelastisite (sabit hafif kuvvet) sağlayan başlangıç ark teli alaşımı nedir?",
    "answer": "Nikel-Titanyum (NiTi) alaşımı (Büküm yapılamaz, kaynak yapılamaz; Büküm ve yüksek rijidite için Paslanmaz Çelik veya TMA [Beta-titanyum] kullanılır).",
    "coreAnswer": "Nikel-Titanyum",
    "keywords": [
      "Ortodontik",
      "tellerde",
      "yüksek",
      "esneklik",
      "şekil"
    ],
    "options": [
      "Nikel-Titanyum",
      "Kranial kaide: Endokondral",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "Moyers Analizi"
    ],
    "correctIndex": 0
  },
  {
    "id": 477,
    "code": "S477",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Büyüme gelişim dönemindeki çocuklarda iskeletsel yaşın ve pubertal büyüme atılımının (pik döneminin) belirlenmesinde el-bilek grafisinde hangi kemik kriter alınır?",
    "answer": "Sesamoid kemik (Adduktor sesamoidin ossifikasyonu pubertal büyüme atılımının başladığını gösterir) ve orta parmak falankslarının epifiz-diyafiz kaynaşması (veya Servikal Vertebra Matürasyonu - CVM).",
    "coreAnswer": "Sesamoid kemik",
    "keywords": [
      "Büyüme",
      "gelişim",
      "dönemindeki",
      "çocuklarda",
      "iskeletsel"
    ],
    "options": [
      "SNA",
      "Yüz Maskesi",
      "İnfraoklüzyon",
      "Sesamoid kemik"
    ],
    "correctIndex": 3
  },
  {
    "id": 478,
    "code": "S478",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İskeletsel Sınıf II (Mandibular retrognati) vakalarda pubertal büyüme atılımı döneminde alt çeneyi öne alarak kondiler büyümeyi uyaran fonksiyonel apareyler hangileridir?",
    "answer": "Hareketli: Aktivatör (Andresen), Bionatör, Twin-Block, Frankel II (FR-2); Sabit: Herbst, Forsus, Jasper Jumper.",
    "coreAnswer": "Hareketli: Aktivatör",
    "keywords": [
      "İskeletsel",
      "Sınıf",
      "Mandibular",
      "retrognati",
      "vakalarda"
    ],
    "options": [
      "$M/F = 10:1$",
      "Seri Çekim",
      "Hareketli: Aktivatör",
      "Yeterli overbite"
    ],
    "correctIndex": 2
  },
  {
    "id": 479,
    "code": "S479",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Frankel fonksiyonel regülatör apareylerinden FR-2 Sınıf II'de kullanılırken, İskeletsel Sınıf III (Maksiller retrognati) vakalarda üst dudak ve yanak kaslarının baskısını kaldırarak periostal kemik yapımını uyaran tipi hangisidir?",
    "answer": "Frankel III (FR-3).",
    "coreAnswer": "Frankel III",
    "keywords": [
      "Frankel",
      "fonksiyonel",
      "regülatör",
      "apareylerinden",
      "Sınıf"
    ],
    "options": [
      "Çene ucu",
      "Frankel III",
      "Hastanın alt çenesi sentrik ilişkiye",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 1
  },
  {
    "id": 480,
    "code": "S480",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İskeletsel Sınıf II (Maksiller prognati / fazlalık) vakalarda üst çenenin öne büyümesini frenlemek için kullanılan ağız dışı (ekstraoral) aparey hangisidir?",
    "answer": "Headgear (Her bir tarafa $350\\text{–}500\\text{ g}$ ortopedik kuvvet, günde 12–14 saat).",
    "coreAnswer": "Headgear",
    "keywords": [
      "İskeletsel",
      "Sınıf",
      "Maksiller",
      "prognati",
      "fazlalık"
    ],
    "options": [
      "Headgear",
      "Anterior açık kapanış, üst kesicilerde protrüzyon",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı"
    ],
    "correctIndex": 0
  },
  {
    "id": 481,
    "code": "S481",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "High-angle (hiperdiverjan / açık kapanış eğilimli) ve Low-angle (hipodiverjan / derin kapanışlı) Sınıf II hastalarda hangi tip Headgear seçilir?",
    "answer": "High-angle (dik yönü artmış) hastada: Oksipital (Yüksek / High-pull) Headgear (molarları intrüze eder); Low-angle (derin kapanışlı) hastada: Servikal (Boyun / Low-pull) Headgear (molarları ekstrüze ederek alt yüz yüksekliğini artırır!).",
    "coreAnswer": "High-angle",
    "keywords": [
      "High",
      "angle",
      "hiperdiverjan",
      "açık",
      "kapanış"
    ],
    "options": [
      "Low-angle",
      "Straight-wire",
      "İntrüzyon",
      "High-angle"
    ],
    "correctIndex": 3
  },
  {
    "id": 482,
    "code": "S482",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İskeletsel Sınıf III maloklüzyonların en sık (%60+) nedeni olan maksiller retrognati tedavisinde büyüme döneminde (ideal olarak 7–10 yaş, erken karma dişlenme) hangi ağız dışı aparey kullanılır?",
    "answer": "Yüz Maskesi (Face mask / Ters Headgear / Delaire-Petit) — Genellikle Hızlı Üst Çene Genişletmesi (RME) ile süturlar gevşetilerek birlikte uygulanır!.",
    "coreAnswer": "Yüz Maskesi",
    "keywords": [
      "İskeletsel",
      "Sınıf",
      "maloklüzyonların",
      "nedeni",
      "maksiller"
    ],
    "options": [
      "Transpozisyon",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Yüz Maskesi",
      "Headgear"
    ],
    "correctIndex": 2
  },
  {
    "id": 483,
    "code": "S483",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İzole mandibular prognati kaynaklı Sınıf III vakalarda alt çene büyümesini yönlendirmek için kullanılan ancak kondili distale ittiği için etkinliği sınırlı olan ağız dışı aparey?",
    "answer": "Çene ucu (Chin-cup) apareyi.",
    "coreAnswer": "Çene ucu",
    "keywords": [
      "İzole",
      "mandibular",
      "prognati",
      "kaynaklı",
      "Sınıf"
    ],
    "options": [
      "Kranial kaide: Endokondral",
      "Çene ucu",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "Moyers Analizi"
    ],
    "correctIndex": 1
  },
  {
    "id": 484,
    "code": "S484",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Maksiller transversal darlıkta (arka çapraz kapanış) midpalatal süturu açarak iskeletsel genişletme yapan RME (Rapid Maxillary Expansion - Hyrax / Haas) apareyinde vida günde kaç kez çevrilir ve klinik başarının kanıtı nedir?",
    "answer": "Günde 2 çeyrek tur ($0,5\\text{ mm}/\\text{gün}$); Klinik kanıtı: Üst santral kesiciler arasında geniş bir median diastema açılmasıdır (Genişletme bittikten sonra 2–3 hafta içinde transseptal liflerin çekmesiyle dişler kavuşur ve diastema kendiliğinden kapanır!).",
    "coreAnswer": "Günde 2 çeyrek tur",
    "keywords": [
      "Maksiller",
      "transversal",
      "darlıkta",
      "arka",
      "çapraz"
    ],
    "options": [
      "Günde 2 çeyrek tur",
      "SNA",
      "High-angle",
      "İnfraoklüzyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 485,
    "code": "S485",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "RME (Hızlı üst çene genişletmesi) sonrasında maksillanın sagittal ve vertikal yön konumu nasıl değişir?",
    "answer": "Maksilla aşağı ve öne doğru hareket eder, mandibula aşağı ve geriye (saat yönünde) rotasyon yapar (Bu nedenle high-angle / açık kapanışlı hastalarda akrilik ısırma bloklu Bonded RME tercih edilir!).",
    "coreAnswer": "Maksilla aşağı ve öne doğru hareket eder, mandibula aşağı ve geriye",
    "keywords": [
      "Hızlı",
      "çene",
      "genişletmesi",
      "sonrasında",
      "maksillanın"
    ],
    "options": [
      "$M/F = 10:1$",
      "Seri Çekim",
      "Yeterli overbite",
      "Maksilla aşağı ve öne doğru hareket eder, mandibula aşağı ve geriye"
    ],
    "correctIndex": 3
  },
  {
    "id": 486,
    "code": "S486",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Tek taraflı (unilateral) posterior çapraz kapanışta alt çenenin kapanırken erken temas nedeniyle sağa veya sola kaymasına (Fonksiyonel şift) nasıl müdahale edilir?",
    "answer": "Erken dönemde (süt veya erken karma dişlenmede) üst çene simetrik olarak genişletilir (Quad-helix veya W-ark ile — Tedavi edilmezse kalıcı iskeletsel fasiyal asimetriye dönüşür!).",
    "coreAnswer": "Erken dönemde",
    "keywords": [
      "taraflı",
      "unilateral",
      "posterior",
      "çapraz",
      "kapanışta"
    ],
    "options": [
      "Yüz Maskesi",
      "Hastanın alt çenesi sentrik ilişkiye",
      "Erken dönemde",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 2
  },
  {
    "id": 487,
    "code": "S487",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bolton Analizi neyi ölçer ve \"Anterior Bolton fazlalığı\" veya \"Toplam Bolton fazlalığı\" ne demektir?",
    "answer": "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer (Anterior oran: $\\%77,2$; Toplam oran: $\\%91,3$ — Alt ön dişler üst ön dişlere göre genişse alt ön bölgede çapraşıklık veya başa baş kapanış oluşur, stripping [IPR] ile düzeltilir).",
    "coreAnswer": "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer",
    "keywords": [
      "Bolton",
      "Analizi",
      "neyi",
      "ölçer",
      "Anterior"
    ],
    "options": [
      "Anterior açık kapanış, üst kesicilerde protrüzyon",
      "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı"
    ],
    "correctIndex": 1
  },
  {
    "id": 488,
    "code": "S488",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Karma dişlenme döneminde sürmemiş daimi kanin ve premolarların yer ihtiyacını alt 4 kesici dişin genişlik toplamını kullanarak tahmin eden analiz hangisidir?",
    "answer": "Moyers Analizi (veya Tanaka-Johnston denklemi).",
    "coreAnswer": "Moyers Analizi",
    "keywords": [
      "Karma",
      "dişlenme",
      "döneminde",
      "sürmemiş",
      "daimi"
    ],
    "options": [
      "Moyers Analizi",
      "Low-angle",
      "Straight-wire",
      "İntrüzyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 489,
    "code": "S489",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İleri derecede ($>8\\text{–}10\\text{ mm}$) yer darlığı olan Sınıf I hastalarda erken karma dişlenmede sırasıyla Süt kanin → Birinci süt molar → Birinci daimi premolar dişlerin çekilmesiyle çapraşıklığın kendiliğinden çözülmesi protokolü?",
    "answer": "Seri Çekim (Serial extraction — Kjellgren / Hotz).",
    "coreAnswer": "Seri Çekim",
    "keywords": [
      "İleri",
      "derecede",
      "text",
      "darlığı",
      "Sınıf"
    ],
    "options": [
      "Transpozisyon",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Headgear",
      "Seri Çekim"
    ],
    "correctIndex": 3
  },
  {
    "id": 490,
    "code": "S490",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Parmak emme alışkanlığı 4–5 yaşından sonra devam ederse hangi maloklüzyon tablosuna yol açar?",
    "answer": "Anterior açık kapanış, üst kesicilerde protrüzyon (artmış overjet), alt kesicilerde retrüzyon, yanak kaslarının emme baskısına bağlı maksiller darlık (posterior çapraz kapanış) ve derin damak kubbesi.",
    "coreAnswer": "Anterior açık kapanış, üst kesicilerde protrüzyon",
    "keywords": [
      "Parmak",
      "emme",
      "alışkanlığı",
      "yaşından",
      "devam"
    ],
    "options": [
      "Kranial kaide: Endokondral",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "Anterior açık kapanış, üst kesicilerde protrüzyon",
      "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer"
    ],
    "correctIndex": 2
  },
  {
    "id": 491,
    "code": "S491",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ağız solunumu (adenoid vejetasyon / geniz eti hipertrofisi) olan çocuklarda görülen karakteristik yüz tipine (Adenoid yüz) ait bulgular nelerdir?",
    "answer": "Uzun ve dar yüz (hiperdiverjan / long-face), dar maksilla, V şeklinde damak, anterior açık kapanış, kısa/hipotonik üst dudak ve burun deliklerinde darlık.",
    "coreAnswer": "Uzun ve dar yüz",
    "keywords": [
      "Ağız",
      "solunumu",
      "adenoid",
      "vejetasyon",
      "geniz"
    ],
    "options": [
      "SNA",
      "Uzun ve dar yüz",
      "High-angle",
      "İnfraoklüzyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 492,
    "code": "S492",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İنفantil (bebeksi) yutkunmanın devam etmesi veya dil itimi (tongue thrust) alışkanlığını kırmak için kullanılan sabit veya hareketli aparey nedir?",
    "answer": "Dil önleyici (Tongue crib / Palatinal parmaklık / Habit breaker) apareyi.",
    "coreAnswer": "Dil önleyici",
    "keywords": [
      "antil",
      "bebeksi",
      "yutkunmanın",
      "devam",
      "etmesi"
    ],
    "options": [
      "Dil önleyici",
      "$M/F = 10:1$",
      "Moyers Analizi",
      "Yeterli overbite"
    ],
    "correctIndex": 0
  },
  {
    "id": 493,
    "code": "S493",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dudak emme / ısırma (özellikle alt dudağın üst kesicilerin arkasına girmesi) alışkanlığında alt dudağın baskısını kaldırıp alt arkı genişleten aparey nedir?",
    "answer": "Lip Bumper.",
    "coreAnswer": "Lip Bumper",
    "keywords": [
      "Dudak",
      "emme",
      "ısırma",
      "özellikle",
      "dudağın"
    ],
    "options": [
      "Yüz Maskesi",
      "Hastanın alt çenesi sentrik ilişkiye",
      "3. Molarlar → Alt 2. Premolar",
      "Lip Bumper"
    ],
    "correctIndex": 3
  },
  {
    "id": 494,
    "code": "S494",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst daimi kanin gömülülüğü popülasyonda 3. molarlardan sonra en sık gömülü kalan diştir; çoğunlukla (%85) hangi konumda gömülü kalır ve komşu hangi dişte kök rezorpsiyonu yapar?",
    "answer": "Palatinal konumda gömülü kalır (%15 bukkalde); En sık üst lateral kesici (ve santral kesici) kökünde eksternal rezorpsiyon yapar!.",
    "coreAnswer": "Palatinal konumda gömülü kalır",
    "keywords": [
      "daimi",
      "kanin",
      "gömülülüğü",
      "popülasyonda",
      "molarlardan"
    ],
    "options": [
      "Seri Çekim",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Palatinal konumda gömülü kalır",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı"
    ],
    "correctIndex": 2
  },
  {
    "id": 495,
    "code": "S495",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ankiloz olmuş bir süt molar dişin (en sık alt 2. süt molar) komşu dişlerin sürmeye devam etmesiyle oklüzal düzlemin altında kalmasına ne denir ve perküsyon sesi nasıldır?",
    "answer": "İnfraoklüzyon (Submerged tooth); Perküsyonda karakteristik metalik (tiz / künt olmayan) ses verir ve radyografide PDL aralığı izlenmez.",
    "coreAnswer": "İnfraoklüzyon",
    "keywords": [
      "Ankiloz",
      "olmuş",
      "molar",
      "dişin",
      "komşu"
    ],
    "options": [
      "Low-angle",
      "İnfraoklüzyon",
      "Straight-wire",
      "İntrüzyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 496,
    "code": "S496",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "psödo (Yalancı) Sınıf III maloklüzyon ile Gerçek İskeletsel Sınıf III maloklüzyon klinik olarak en kolay nasıl ayırt edilir?",
    "answer": "Hastanın alt çenesi sentrik ilişkiye (geriye) manipüle edildiğinde kesici dişler başa baş (edge-to-edge) temasa gelebiliyorsa Psödo (Fonksiyonel) Sınıf III’tür (Erken kesici temasından kaynaklanır ve prognozu çok iyidir!).",
    "coreAnswer": "Hastanın alt çenesi sentrik ilişkiye",
    "keywords": [
      "psödo",
      "Yalancı",
      "Sınıf",
      "maloklüzyon",
      "Gerçek"
    ],
    "options": [
      "Hastanın alt çenesi sentrik ilişkiye",
      "Transpozisyon",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Headgear"
    ],
    "correctIndex": 0
  },
  {
    "id": 497,
    "code": "S497",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Derin kapanış (Deep-bite) vakalarında spee eğrisini düzleştirmek için high-angle ve low-angle hastalarda hangi mekanik seçilir?",
    "answer": "Low-angle (kısa yüz) hastada: Posterior dişlerin ekstrüzyonu (Anterior ısırma plağı / Bite-plane ile); High-angle (uzun yüz veya gummy smile) hastada: Anterior kesicilerin mutlak intrüzyonu (Mini-vida veya Utility ark / Burstone intrüzyon arkı ile).",
    "coreAnswer": "Low-angle",
    "keywords": [
      "Derin",
      "kapanış",
      "Deep",
      "bite",
      "vakalarında"
    ],
    "options": [
      "Kranial kaide: Endokondral",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer",
      "Low-angle"
    ],
    "correctIndex": 3
  },
  {
    "id": 498,
    "code": "S498",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontide mutlak ankraj (hiç hareket etmeyen destek) sağlamak için interradiküler kemiğe veya damağa yerleştirilen geçici ankraj apareylerine ne denir?",
    "answer": "Mini-vidalar (TAD — Temporary Anchorage Devices) (Osseointegrasyon beklenmez, primer mekanik retansiyonla hemen yüklenebilir!).",
    "coreAnswer": "Mini-vidalar",
    "keywords": [
      "Ortodontide",
      "mutlak",
      "ankraj",
      "hareket",
      "etmeyen"
    ],
    "options": [
      "SNA",
      "High-angle",
      "Mini-vidalar",
      "Palatinal konumda gömülü kalır"
    ],
    "correctIndex": 2
  },
  {
    "id": 499,
    "code": "S499",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dudak-damak yarıklarında (DDY) embriyolojik olarak primer damak (foramen incisivum’un önü) ve sekonder damak (foramen incisivum’un arkası) kaçıncı haftalarda birleşir?",
    "answer": "Primer damak (ve üst dudak): 4.–7. haftalarda (Medial nazal ve maksiller çıkıntıların birleşmesi); Sekonder damak: 8.–12. haftalarda (Palatinal rafların yataylaşıp orta hatta birleşmesi).",
    "coreAnswer": "Primer damak",
    "keywords": [
      "Dudak",
      "damak",
      "yarıklarında",
      "embriyolojik",
      "primer"
    ],
    "options": [
      "$M/F = 10:1$",
      "Primer damak",
      "Moyers Analizi",
      "Yeterli overbite"
    ],
    "correctIndex": 1
  },
  {
    "id": 500,
    "code": "S500",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yenidoğan Pierre-Robin Sekansı’nın karakteristik üçlü bulgusu (triadı) nedir?",
    "answer": "1) Mikrognati / Retrognati, 2) Glossoptozis (dilin geriye kaçıp hava yolunu tıkaması), 3) U şeklinde yarık damak.",
    "coreAnswer": "1) Mikrognati / Retrognati, 2) Glossoptozis",
    "keywords": [
      "Yenidoğan",
      "Pierre",
      "Robin",
      "Sekansı",
      "karakteristik"
    ],
    "options": [
      "1) Mikrognati / Retrognati, 2) Glossoptozis",
      "Yüz Maskesi",
      "İnfraoklüzyon",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 0
  },
  {
    "id": 501,
    "code": "S501",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sabit ortodontik tedavi sırasında braketlerin çevresinde gelişen beyaz nokta lezyonlarında (demineralizasyon) braket sökümü sonrası hemen yüksek konsantrasyonlu florür vernik uygulanırsa neden leke kalıcı olur?",
    "answer": "Yüksek doz florür sadece en dış yüzey tabakasını hızla remineralize ederek gözenekleri tıkar (hipermineralize yüzey ареsti), altındaki lezyon gövdesine iyon geçişini engeller (Önce düşük doz florürlü macun ve kazein fosfopeptid-amorf kalsiyum fosfat [CPP-ACP] ile kademeli remineralizasyon yapılır!).",
    "coreAnswer": "Yüksek doz florür sadece en dış yüzey tabakasını hızla remineralize ederek gözenekleri tıkar",
    "keywords": [
      "Sabit",
      "ortodontik",
      "tedavi",
      "sırasında",
      "braketlerin"
    ],
    "options": [
      "Seri Çekim",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı",
      "Yüksek doz florür sadece en dış yüzey tabakasını hızla remineralize ederek gözenekleri tıkar"
    ],
    "correctIndex": 3
  },
  {
    "id": 502,
    "code": "S502",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik tedavi sonunda pekiştirme (retansiyon) gerektirmeyen maloklüzyon hangisidir?",
    "answer": "Yeterli overbite (dikey örtüm) sağlandığında düzeltilmiş anterior çapraz kapanış (ve seri çekim sonrası kendiliğinden dizilmiş vakalar).",
    "coreAnswer": "Yeterli overbite",
    "keywords": [
      "Ortodontik",
      "tedavi",
      "sonunda",
      "pekiştirme",
      "retansiyon"
    ],
    "options": [
      "Hastanın alt çenesi sentrik ilişkiye",
      "Straight-wire",
      "Yeterli overbite",
      "İntrüzyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 503,
    "code": "S503",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ortodontik tedavi sonunda kalıcı (ömür boyu) sabit lingual retainer gerektiren durumlar hangileridir?",
    "answer": "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları.",
    "coreAnswer": "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
    "keywords": [
      "Ortodontik",
      "tedavi",
      "sonunda",
      "kalıcı",
      "ömür"
    ],
    "options": [
      "Transpozisyon",
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Headgear"
    ],
    "correctIndex": 1
  },
  {
    "id": 504,
    "code": "S504",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir dişin komşu bir dişle yer değiştirmesi (en sık üst kanin ile 1. premolar veya kanin ile lateral) anomalisine ne ad verilir?",
    "answer": "Transpozisyon.",
    "coreAnswer": "Transpozisyon",
    "keywords": [
      "dişin",
      "komşu",
      "dişle",
      "değiştirmesi",
      "kanin"
    ],
    "options": [
      "Transpozisyon",
      "Kranial kaide: Endokondral",
      "Kök uzunluğunun alveol kretinden itibaren apikale doğru $1/3$ ile $1/2$’si arasındadır",
      "Üst ve alt dişlerin meziodistal kuron genişliklerinin birbirine uyumunu ölçer"
    ],
    "correctIndex": 0
  },
  {
    "id": 505,
    "code": "S505",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Ricketts’in E-düzlemi (Estetik düzlem) hangi noktalar arasından geçer ve üst/alt dudak bu çizginin kaç mm gerisinde olmalıdır?",
    "answer": "Burun ucu (Pronasale) ile Çene ucu (Yumuşak doku Pogonion) arasından geçer; Yetişkinde üst dudak $-4\\text{ mm}$, alt dudak $-2\\text{ mm}$ gerisinde olmalıdır.",
    "coreAnswer": "Burun ucu",
    "keywords": [
      "Ricketts",
      "düzlemi",
      "Estetik",
      "düzlem",
      "noktalar"
    ],
    "options": [
      "SNA",
      "High-angle",
      "Palatinal konumda gömülü kalır",
      "Burun ucu"
    ],
    "correctIndex": 3
  },
  {
    "id": 506,
    "code": "S506",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Nazo-labial açı (burun kolumellası ile üst dudak arasındaki açı) normalde kaç derecedir ve üst kesici protrüzyonunda nasıl değişir?",
    "answer": "Normali $90^\\circ\\text{–}110^\\circ$’dir; Üst kesici dişler veya maksilla önde ise açı daralır (Premolar çekimli retraksiyon yapılırsa açı büyür!).",
    "coreAnswer": "Normali $90^\\circ\\text{–}110^\\circ$’dir",
    "keywords": [
      "Nazo",
      "labial",
      "burun",
      "kolumellası",
      "dudak"
    ],
    "options": [
      "$M/F = 10:1$",
      "Moyers Analizi",
      "Normali $90^\\circ\\text{–}110^\\circ$’dir",
      "Yüksek doz florür sadece en dış yüzey tabakasını hızla remineralize ederek gözenekleri tıkar"
    ],
    "correctIndex": 2
  },
  {
    "id": 507,
    "code": "S507",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sefalometride kafa kaidesinin ön kısmını temsil eden düzlem (Steiner) ile Frankfort Horizontal (FH) düzlemini (Downs/Tweed) oluşturan noktalar hangileridir?",
    "answer": "Ön kafa kaidesi: Sella – Nasion (SN); Frankfort Horizontal: Porion – Orbitale (Po-Or).",
    "coreAnswer": "Ön kafa kaidesi: Sella – Nasion",
    "keywords": [
      "Sefalometride",
      "kafa",
      "kaidesinin",
      "kısmını",
      "temsil"
    ],
    "options": [
      "Yüz Maskesi",
      "Ön kafa kaidesi: Sella – Nasion",
      "İnfraoklüzyon",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 1
  },
  {
    "id": 508,
    "code": "S508",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst santral kesiciler arasındaki median diastemanın patolojik nedenleri nelerdir?",
    "answer": "Yüksek bağlantılı hipertrofik labial frenulum (Blanch test pozitiftir), Meziodens (gömülü süpernümerer diş), konjenital üst lateral kesici eksikliği (veya kama lateral) ve parmak emme.",
    "coreAnswer": "Yüksek bağlantılı hipertrofik labial frenulum",
    "keywords": [
      "santral",
      "kesiciler",
      "arasındaki",
      "median",
      "diastemanın"
    ],
    "options": [
      "Yüksek bağlantılı hipertrofik labial frenulum",
      "Seri Çekim",
      "Yeterli overbite",
      "Sürmemiş üst daimi kaninlerin lateral köklerine yaptığı baskı"
    ],
    "correctIndex": 0
  },
  {
    "id": 509,
    "code": "S509",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Konjenital olarak en sık eksik olan (agenezisi görülen) daimi dişler sırasıyla hangileridir?",
    "answer": "3. Molarlar → Alt 2. Premolar (veya Üst Lateral Kesici) → Üst 2. Premolar.",
    "coreAnswer": "3. Molarlar → Alt 2. Premolar",
    "keywords": [
      "Konjenital",
      "eksik",
      "agenezisi",
      "görülen",
      "daimi"
    ],
    "options": [
      "Hastanın alt çenesi sentrik ilişkiye",
      "Straight-wire",
      "İntrüzyon",
      "3. Molarlar → Alt 2. Premolar"
    ],
    "correctIndex": 3
  },
  {
    "id": 510,
    "code": "S510",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "ortodonti",
    "subject": "Ortodonti",
    "branchNumber": 14,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Braketlerde tel oluğuna (slot) birinci, ikinci ve üçüncü düzen bükümlerin önceden işlenmiş olduğu modern sabit ortodontik sisteme ne denir?",
    "answer": "Straight-wire (Doğru tel) tekniği — Andrews (Birinci düzen: In-out [kalınlık]; İkinci düzen: Tip [meziodistal angulasyon]; Üçüncü düzen: Torque [bukkolingual kök eğimi — köşeli tel gerektirir!]).",
    "coreAnswer": "Straight-wire",
    "keywords": [
      "Braketlerde",
      "oluğuna",
      "slot",
      "birinci",
      "ikinci"
    ],
    "options": [
      "Kapatılmış median diastema, yetişkin periodontal hastalar, şiddetli rotasyonlar ve alt kesici çapraşıklıkları",
      "Sınıf I: Alt 1. moların bukkal oluğuna",
      "Straight-wire",
      "Headgear"
    ],
    "correctIndex": 2
  },
  {
    "id": 511,
    "code": "S511",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dişlerde kronolojik yaşlanma ile birlikte Apikal daralım (Ad) – Radyolojik apeks (Ra) arası mesafe, pulpadaki kollajen miktarı ve dentin tübül çapları nasıl değişir?",
    "answer": "Kök ucunda sürekli sekonder sement birikimine (pasif erüpsiyon) bağlı olarak Ad–Ra arası mesafe ARTAR; Pulpadaki hücre, damar ve sinir sayısı azalırken kollajen lif (fibrozis) sayısı ARTAR; Peritübüler dentin birikimiyle dentin tübül çapları AZALIR (daralır).",
    "coreAnswer": "Kök ucunda sürekli sekonder sement birikimine",
    "keywords": [
      "Dişlerde",
      "kronolojik",
      "yaşlanma",
      "Apikal",
      "daralım"
    ],
    "options": [
      "1) Odontoblast tabakası → 2) Weil’in hücresiz tabakası",
      "Kök ucunda sürekli sekonder sement birikimine",
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "Kuronda gri-siyah renklenme"
    ],
    "correctIndex": 1
  },
  {
    "id": 512,
    "code": "S512",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Pulpanın histolojik tabakaları dıştan (dentin komşuluğundan) içe (pulpa merkezine) doğru nasıl sıralanır?",
    "answer": "1) Odontoblast tabakası → 2) Weil’in hücresiz tabakası (Subodontoblastik Raschkow sinir pleksusu ve kapiller ağ buradadır) → 3) Hücreden zengin tabaka (Fibroblastlar ve farklılaşmamış mezenkimal kök hücreler) → 4) Pulpa merkezi (Büyük damar ve sinirler).",
    "coreAnswer": "1) Odontoblast tabakası → 2) Weil’in hücresiz tabakası",
    "keywords": [
      "Pulpanın",
      "histolojik",
      "tabakaları",
      "dıştan",
      "dentin"
    ],
    "options": [
      "1) Odontoblast tabakası → 2) Weil’in hücresiz tabakası",
      "Dentin-sement birleşimi",
      "%17’lik EDTA",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül"
    ],
    "correctIndex": 0
  },
  {
    "id": 513,
    "code": "S513",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Pulpa canlılığını (vitalitesini) değerlendirmede soğuk testi, sıcak testi ve Elektrikli Pulpa Testi (EPT) aslında neyi ölçer; gerçek pulpa kan akımını ölçen altın standart yöntemler hangileridir?",
    "answer": "Termal testler ve EPT sadece sinir iletimini ($A\\delta$ liflerini) ölçer (Sensitivite testleri); Gerçek pulpa kan akımını (vitaliteyi) ise Lazer Doppler Flowmetri (LDF) ve Pulse Oksimetre ölçer! (Travma görmüş genç dişlerde erken dönemde EPT yanlış negatif verir, LDF/Pulse oksimetre doğrudur).",
    "coreAnswer": "Termal testler ve EPT sadece sinir iletimini",
    "keywords": [
      "Pulpa",
      "canlılığını",
      "vitalitesini",
      "değerlendirmede",
      "soğuk"
    ],
    "options": [
      "H-file sadece çekme",
      "Apeksogenezis",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak",
      "Termal testler ve EPT sadece sinir iletimini"
    ],
    "correctIndex": 3
  },
  {
    "id": 514,
    "code": "S514",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Soğuk veya tatlı uyaranla başlayan, ancak uyaran kaldırıldığında birkaç saniye içinde hemen geçen keskin ağrı hangi pulpa tanısını koydurur?",
    "answer": "Reversibl Pulpitis (Kanal tedavisi yapılmaz; çürük temizlenip restorasyon/kuafaj yapılır).",
    "coreAnswer": "Reversibl Pulpitis",
    "keywords": [
      "Soğuk",
      "tatlı",
      "uyaranla",
      "başlayan",
      "ancak"
    ],
    "options": [
      "Üstünlüğü: Substantivite",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "Reversibl Pulpitis",
      "1) Perforasyonun zamanı"
    ],
    "correctIndex": 2
  },
  {
    "id": 515,
    "code": "S515",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Termal uyaran kaldırıldıktan sonra dakikalarca devam eden, spontan (kendiliğinden) ve gece uyandıran zonklayıcı ağrı hangi tanıyı koydurur?",
    "answer": "Semptomatik İrreversibl Pulpitis (İleri evresinde sıcak uyaran ağrıyı şiddetlendirirken soğuk su ağrıyı rahatlatır! — Tedavisi: Kanal tedavisi).",
    "coreAnswer": "Semptomatik İrreversibl Pulpitis",
    "keywords": [
      "Termal",
      "uyaran",
      "kaldırıldıktan",
      "dakikalarca",
      "devam"
    ],
    "options": [
      "Apeksifikasyon",
      "Semptomatik İrreversibl Pulpitis",
      "Endike olanlar: Ateş",
      "Kronik Apikal Apse"
    ],
    "correctIndex": 1
  },
  {
    "id": 516,
    "code": "S516",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Perküsyon testi pozitifliği pulpa nekrozunu mu yoksa inflamasyonun periapikal dokulara (PDL proprioseptörlerine) ulaştığını mı gösterir?",
    "answer": "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir (Semptomatik Apikal Periodontitis — Bazen şiddetli irreversibl pulpitiste apikal dokulara mediyatör geçişiyle diş henüz vital iken de perküsyon pozitif olabilir!).",
    "coreAnswer": "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir",
    "keywords": [
      "Perküsyon",
      "testi",
      "pozitifliği",
      "pulpa",
      "nekrozunu"
    ],
    "options": [
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir",
      "Elastisite modülü",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Vertucci Tip III"
    ],
    "correctIndex": 0
  },
  {
    "id": 517,
    "code": "S517",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Radyografide periapikal radyolüsensi olan, vitalite testlerine negatif yanıt veren, perküsyon ve palpasyonda ağrısız olan ve bazen diş etinde fistül ağzı (sinüs traktı) bulunan tablo?",
    "answer": "Kronik Apikal Apse (Fistül varsa) veya Asemptomatik Apikal Periodontitis (Fistül yoksa; Fistül ağzından gutta-perka kon ilerletilip radyografi alınarak kaynak diş tespit edilir!).",
    "coreAnswer": "Kronik Apikal Apse",
    "keywords": [
      "Radyografide",
      "periapikal",
      "radyolüsensi",
      "vitalite",
      "testlerine"
    ],
    "options": [
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "En ağrılı evre: Subperiosteal evre",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Kronik Apikal Apse"
    ],
    "correctIndex": 3
  },
  {
    "id": 518,
    "code": "S518",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Pulpa nekrozuna bağlı periapikal kemik içi apsenin periostu delmeden önce oluşturduğu en şiddetli ağrılı evre ve periostu delip mukozada flüktüasyon verdiğinde ağrının azalmasının nedeni?",
    "answer": "En ağrılı evre: Subperiosteal evre (Periost gerildiği için); Mukoza altına geçtiğinde (Submukozal evre) basınç düştüğü için ağrı azalır ve insizyon-drenaj bu flüktüan evrede yapılır.",
    "coreAnswer": "En ağrılı evre: Subperiosteal evre",
    "keywords": [
      "Pulpa",
      "nekrozuna",
      "bağlı",
      "periapikal",
      "kemik"
    ],
    "options": [
      "Kök ucunda sürekli sekonder sement birikimine",
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "En ağrılı evre: Subperiosteal evre",
      "Kuronda gri-siyah renklenme"
    ],
    "correctIndex": 2
  },
  {
    "id": 519,
    "code": "S519",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal tedavisi sırasında çalışma boyunun sonlandırılması gereken anatomik ve histolojik nokta (Minör apikal foramen / Apikal konstrikstiyon) nerededir?",
    "answer": "Dentin-sement birleşimi (CDC) hizasında olup, radyolojik apeksten ortalama $0,5\\text{–}1,0\\text{ mm}$ (yaşlılarda $1\\text{–}2\\text{ mm}$) daha koronaldedir.",
    "coreAnswer": "Dentin-sement birleşimi",
    "keywords": [
      "Kanal",
      "tedavisi",
      "sırasında",
      "çalışma",
      "boyunun"
    ],
    "options": [
      "En ağrılı evre: Subperiosteal evre",
      "Dentin-sement birleşimi",
      "%17’lik EDTA",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül"
    ],
    "correctIndex": 1
  },
  {
    "id": 520,
    "code": "S520",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Modern elektronik apeks bulucular (Apex locator) hangi fiziksel prensiple çalışır ve kanal içindeki kan/hipokloritten neden etkilenmez?",
    "answer": "Çoklu frekans empedans oranı yöntemiyle çalışır (İki farklı alternatif akım frekansının apikal foramende değişen empedans oranını ölçer; 3. ve 4. nesil cihazlar kanalda elektrolit/sıvı varken de doğru ölçüm yapar!).",
    "coreAnswer": "Çoklu frekans empedans oranı yöntemiyle çalışır",
    "keywords": [
      "Modern",
      "elektronik",
      "apeks",
      "bulucular",
      "Apex"
    ],
    "options": [
      "Çoklu frekans empedans oranı yöntemiyle çalışır",
      "H-file sadece çekme",
      "Apeksogenezis",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak"
    ],
    "correctIndex": 0
  },
  {
    "id": 521,
    "code": "S521",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst birinci büyük azı (Maksiller 1. Molar) dişinde en sık gözden kaçan 4. kanal (MB2) nerededir?",
    "answer": "Meziobukkal kökün içinde, MB1 kanal ağzının palatinalinde ve hafif mezialinde, MB1–Palatinal kanal çizgisinin mezialinde yer alır (Giriş kavitesi üçgen yerine romboid/yamuk hazırlanır).",
    "coreAnswer": "Meziobukkal kökün içinde, MB1 kanal ağzının palatinalinde ve hafif mezialinde, MB1–Palatinal kanal çizgisinin mezialinde yer alır",
    "keywords": [
      "birinci",
      "büyük",
      "Maksiller",
      "Molar",
      "dişinde"
    ],
    "options": [
      "Üstünlüğü: Substantivite",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "1) Perforasyonun zamanı",
      "Meziobukkal kökün içinde, MB1 kanal ağzının palatinalinde ve hafif mezialinde, MB1–Palatinal kanal çizgisinin mezialinde yer alır"
    ],
    "correctIndex": 3
  },
  {
    "id": 522,
    "code": "S522",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt kesici dişlerde, alt 1. premolarlarda ve alt 1. molarlarda sıklıkla ikinci bir kanalın bulunma olasılığı nedeniyle giriş kavitesi hangi yönde genişletilir?",
    "answer": "Alt kesicilerde lingual duvarın (singulumun) altında 2. kanal (lingual kanal) bulunur; Alt 1. moların mezial kökünde 2 kanal (MB ve ML), distal kökünde %30 oranında 2 kanal veya distolingualde ek kök (Radix entomolaris) bulunabilir.",
    "coreAnswer": "Alt kesicilerde lingual duvarın",
    "keywords": [
      "kesici",
      "dişlerde",
      "premolarlarda",
      "molarlarda",
      "sıklıkla"
    ],
    "options": [
      "Apeksifikasyon",
      "Endike olanlar: Ateş",
      "Alt kesicilerde lingual duvarın",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir"
    ],
    "correctIndex": 2
  },
  {
    "id": 523,
    "code": "S523",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal şekillendirmede kesiti C harfi şeklinde birleşik olan C-kanal morfolojisi en sık hangi dişte görülür?",
    "answer": "Alt ikinci büyük azı (Mandibular 2. Molar) dişinde.",
    "coreAnswer": "Alt ikinci büyük azı",
    "keywords": [
      "Kanal",
      "şekillendirmede",
      "kesiti",
      "harfi",
      "şeklinde"
    ],
    "options": [
      "Elastisite modülü",
      "Alt ikinci büyük azı",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Vertucci Tip III"
    ],
    "correctIndex": 1
  },
  {
    "id": 524,
    "code": "S524",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Vertucci kanal konfigürasyonu sınıflamasına göre; 1 ağızla başlayıp 1 foramenle biten (Tip I), 2 ağızla başlayıp 1 foramenle biten (Tip II) ve 2 ağızla başlayıp 2 ayrı foramenle biten (Tip IV) tiplerin yanı sıra 1-2-1 olan tip hangisidir?",
    "answer": "Vertucci Tip III (1 ağızla başlar, ikiye ayrılır ve apekste tekrar 1 foramende birleşir).",
    "coreAnswer": "Vertucci Tip III",
    "keywords": [
      "Vertucci",
      "kanal",
      "konfigürasyonu",
      "sınıflamasına",
      "ağızla"
    ],
    "options": [
      "Vertucci Tip III",
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Kronik Apikal Apse",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz"
    ],
    "correctIndex": 0
  },
  {
    "id": 525,
    "code": "S525",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "ISO standart el eğelerinde 02 açılı (taper) bir eğenin uç çapı ($D_0$) ile $16\\text{ mm}$ gerideki çapı ($D_{16}$) arasındaki fark kaç mm’dir ve renk sırası (15’ten 40’a) nasıldır?",
    "answer": "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir; Renk sırası: Beyaz (15) – Sarı (20) – Kırmızı (25) – Mavi (30) – Yeşil (35) – Siyah (40) (Pembe: 06, Gri: 08, Mor: 10).",
    "coreAnswer": "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
    "keywords": [
      "standart",
      "eğelerinde",
      "açılı",
      "taper",
      "eğenin"
    ],
    "options": [
      "Kök ucunda sürekli sekonder sement birikimine",
      "Vertucci Tip III",
      "Kuronda gri-siyah renklenme",
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir"
    ],
    "correctIndex": 3
  },
  {
    "id": 526,
    "code": "S526",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Paslanmaz çelik el eğelerinden kare kesitli K-tipi eğe (K-file), üçgen kesitli K-reamer ve yuvarlak/virgül kesitli Hedström (H-file) nasıl çalıştırılır?",
    "answer": "H-file sadece çekme (filing / çevreleme) hareketiyle kullanılır; H-file ile kanal içinde rotasyon (döndürme) yapılırsa eğe vidalanır ve kırılır!.",
    "coreAnswer": "H-file sadece çekme",
    "keywords": [
      "Paslanmaz",
      "çelik",
      "eğelerinden",
      "kare",
      "kesitli"
    ],
    "options": [
      "En ağrılı evre: Subperiosteal evre",
      "%17’lik EDTA",
      "H-file sadece çekme",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül"
    ],
    "correctIndex": 2
  },
  {
    "id": 527,
    "code": "S527",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kurvaturu (eğimi) fazla olan kanallarda apikalde basamak (ledge), zip (apikal transportasyon) ve dirsek (elbow) oluşumunu önlemek için hangi preparasyon prensibi uygulanır?",
    "answer": "Crown-down (Koronalden apikale genişletme) tekniği, eğelere ön-eğim (pre-curving) verilmesi, Roane’un Dengeli Kuvvet (Balanced Force) tekniği ve esnek NiTi eğelerin kullanımı.",
    "coreAnswer": "Crown-down",
    "keywords": [
      "Kurvaturu",
      "eğimi",
      "fazla",
      "kanallarda",
      "apikalde"
    ],
    "options": [
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "Crown-down",
      "Apeksogenezis",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak"
    ],
    "correctIndex": 1
  },
  {
    "id": 528,
    "code": "S528",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Eğri kanallarda alt molarların mezial köklerinin furkasyona bakan iç (konkav) duvarının (Tehlikeli bölge / Danger zone) aşırı inceltilerek delinmesine ne denir?",
    "answer": "Strip perforasyon (Önlemek için fırçalama hareketi furkasyonun tersine, dış [güvenli] duvara doğru = Antikurvatur eğeleme [Abou-Rass] yapılır!).",
    "coreAnswer": "Strip perforasyon",
    "keywords": [
      "Eğri",
      "kanallarda",
      "molarların",
      "mezial",
      "köklerinin"
    ],
    "options": [
      "Strip perforasyon",
      "Üstünlüğü: Substantivite",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "1) Perforasyonun zamanı"
    ],
    "correctIndex": 0
  },
  {
    "id": 529,
    "code": "S529",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Nikel-Titanyum (NiTi) döner kanal eğelerinin kanal içinde kırılmasının iki temel mekanizması nedir?",
    "answer": "1) Döngüsel yorgunluk (Cyclic fatigue): Eğenin eğri bir kanalda serbestçe dönerken sürekli çekme-basma gerilimine maruz kalması; 2) Torsiyonel (Burulma) kırılma: Eğenin ucunun dar kanalda sıkışırken gövdesinin dönmeye devam etmesi (Önlemek için Resiprokasyon [saat yönü tersi / saat yönü salınım] hareketi ve ısıl işlem görmüş M-Wire / CM-Wire eğeler kullanılır).",
    "coreAnswer": "1) Döngüsel yorgunluk",
    "keywords": [
      "Nikel",
      "Titanyum",
      "NiTi",
      "döner",
      "kanal"
    ],
    "options": [
      "Apeksifikasyon",
      "Endike olanlar: Ateş",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir",
      "1) Döngüsel yorgunluk"
    ],
    "correctIndex": 3
  },
  {
    "id": 530,
    "code": "S530",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Endodontide organik doku çözme kapasitesine sahip olan ve geniş spektrumlu antimikrobiyal etki gösteren tek temel irrigasyon solüsyonu nedir?",
    "answer": "Sodyum Hipoklorit ($NaOCl$ — %0,5 – %5,25) (Aktif formu Hipokloröz asit [$HOCl$]’tir; ısıtıldığında doku çözme gücü katlanarak artar).",
    "coreAnswer": "Sodyum Hipoklorit",
    "keywords": [
      "Endodontide",
      "organik",
      "doku",
      "çözme",
      "kapasitesine"
    ],
    "options": [
      "Elastisite modülü",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Sodyum Hipoklorit",
      "Alt ikinci büyük azı"
    ],
    "correctIndex": 2
  },
  {
    "id": 531,
    "code": "S531",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sodyum hipoklorit ($NaOCl$) apikal foramenden periapikal dokulara taşarsa (Hipoklorit kazası) hangi tablo gelişir ve ilk müdahale nedir?",
    "answer": "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz (hematom); İlk müdahale: Kanal derhal bol steril serum fizyolojik ile yıkanır, soğuk kompres uygulanır, analjezik, kortikosteroid ve antibiyotik reçete edilir.",
    "coreAnswer": "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
    "keywords": [
      "Sodyum",
      "hipoklorit",
      "NaOCl",
      "apikal",
      "foramenden"
    ],
    "options": [
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Kronik Apikal Apse",
      "Sodyum Hipoklorit"
    ],
    "correctIndex": 1
  },
  {
    "id": 532,
    "code": "S532",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal şekillendirme sırasında oluşan Smear tabakasının inorganik kısmını çözmek için hangi şelasyon ajanı kullanılır ve $NaOCl$ ile birlikte nasıl uygulanır?",
    "answer": "%17’lik EDTA (Etilendiamin tetraasetik asit — $Ca^{2+}$ iyonlarını bağlar) veya %10 Sitrik asit; Smear tabakasını tamamen kaldırmak için hem $NaOCl$ (organik) hem EDTA (inorganik) sırasıyla kullanılır (Dikkat: EDTA, $NaOCl$’nin serbest klorunu inaktive ettiği için ikisi birbirine karıştırılmaz!).",
    "coreAnswer": "%17’lik EDTA",
    "keywords": [
      "Kanal",
      "şekillendirme",
      "sırasında",
      "oluşan",
      "Smear"
    ],
    "options": [
      "%17’lik EDTA",
      "Kök ucunda sürekli sekonder sement birikimine",
      "Vertucci Tip III",
      "Kuronda gri-siyah renklenme"
    ],
    "correctIndex": 0
  },
  {
    "id": 533,
    "code": "S533",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "%2’lik Klorheksidin (CHX) irrigasyon solüsyonunun $NaOCl$’ye göre üstünlükleri ve eksiklikleri nelerdir?",
    "answer": "Üstünlüğü: Substantivite (dentine bağlanıp uzun süreli etki), düşük toksisite ve E. faecalis / C. albicans’a yüksek etkinlik; Eksikliği: Organik doku çözme ve biyofilm/smear çözme özelliği YOKTUR!.",
    "coreAnswer": "Üstünlüğü: Substantivite",
    "keywords": [
      "Klorheksidin",
      "irrigasyon",
      "solüsyonunun",
      "NaOCl",
      "üstünlükleri"
    ],
    "options": [
      "En ağrılı evre: Subperiosteal evre",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül",
      "Üstünlüğü: Substantivite"
    ],
    "correctIndex": 3
  },
  {
    "id": 534,
    "code": "S534",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal içinde Sodyum Hipoklorit ($NaOCl$) ile Klorheksidin (CHX) ara yıkama yapılmadan doğrudan temas ederse hangi toksik/kanserojen çökelti oluşur?",
    "answer": "Turuncu-kahverengi Parakloroanilin (PCA) çökeltisi oluşur ve dentin tübüllerini tıkar (Aralarında mutlaka serum fizyolojik veya distile su ile yıkama yapılmalıdır!).",
    "coreAnswer": "Turuncu-kahverengi Parakloroanilin",
    "keywords": [
      "Kanal",
      "içinde",
      "Sodyum",
      "Hipoklorit",
      "NaOCl"
    ],
    "options": [
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "Apeksogenezis",
      "Turuncu-kahverengi Parakloroanilin",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak"
    ],
    "correctIndex": 2
  },
  {
    "id": 535,
    "code": "S535",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Seanslar arasında kanal içi medikaman olarak kullanılan Kalsiyum Hidroksit ($\\text{Ca(OH)}_2$)’in antimikrobiyal ve sert doku uyarıcı etkisi hangi iyonundan kaynaklanır ve hangi mikroorganizmalar ona dirençlidir?",
    "answer": "Hidroksil ($OH^-$) iyonu salınımı ve yüksek pH ($12,5$) (Bakteri hücre membranını, DNA’sını ve gram-negatif bakterilerin LPS [endotoksin] yapısını yıkar, osteoklastları inhibe edip ALP’yi aktive eder); Enterococcus faecalis (proton pompası ile pH’ı dengeler) ve Candida albicans $\\text{Ca(OH)}_2$’ye dirençlidir!.",
    "coreAnswer": "Hidroksil",
    "keywords": [
      "Seanslar",
      "kanal",
      "medikaman",
      "kullanılan",
      "Kalsiyum"
    ],
    "options": [
      "%17’lik EDTA",
      "Hidroksil",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "1) Perforasyonun zamanı"
    ],
    "correctIndex": 1
  },
  {
    "id": 536,
    "code": "S536",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gutta-perka kanal dolgu maddesinin içindeki en yüksek oranlı (%60–75) bileşen nedir ve alfa ($\\alpha$) ile beta ($\\beta$) kristal fazları nerede kullanılır?",
    "answer": "En yüksek bileşeni Çinko oksit (ZnO)’tir (Gutta-perka polimeri %18–22, radyoopaklaştırıcı baryum sülfat %10); Soğuk lateral kondensasyon konları $\\beta$ fazındadır, termoplastik (ısıtılmış) enjeksiyon sistemleri ise akışkan ve yapışkan olan $\\alpha$ fazındadır.",
    "coreAnswer": "En yüksek bileşeni Çinko oksit",
    "keywords": [
      "Gutta",
      "perka",
      "kanal",
      "dolgu",
      "maddesinin"
    ],
    "options": [
      "En yüksek bileşeni Çinko oksit",
      "Apeksifikasyon",
      "Endike olanlar: Ateş",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir"
    ],
    "correctIndex": 0
  },
  {
    "id": 537,
    "code": "S537",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kalsiyum silikat bazlı (Biyoseramik / MTA) kanal patlarının epoksi rezin (AH Plus) veya ZOE patlarına göre en önemli biyolojik üstünlüğü nedir?",
    "answer": "Hidrofiliktir (nemle sertleşir), sertleşirken genleşir, yüksek pH ile antibakteriyeldir ve doku sıvılarıyla temas ettiğinde yüzeyinde hidroksiapatit tabakası oluşturarak dentine kimyasal bağlanır (Biyoaktivite).",
    "coreAnswer": "Hidrofiliktir",
    "keywords": [
      "Kalsiyum",
      "silikat",
      "bazlı",
      "Biyoseramik",
      "kanal"
    ],
    "options": [
      "Elastisite modülü",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Alt ikinci büyük azı",
      "Hidrofiliktir"
    ],
    "correctIndex": 3
  },
  {
    "id": 538,
    "code": "S538",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Beyaz MTA (Mineral Trioksit Agregat) içerisinde radyoopaklaştırıcı olarak bulunan bizmut oksitin sodyum hipoklorit ve dentin kollajeni ile reaksiyona girerek oluşturduğu estetik komplikasyon nedir?",
    "answer": "Kuronda gri-siyah renklenme (Ön bölgede renklenme yapmayan zirkonyum oksit içeren Biyodentin veya yeni nesil biyoseramikler tercih edilir!).",
    "coreAnswer": "Kuronda gri-siyah renklenme",
    "keywords": [
      "Beyaz",
      "Mineral",
      "Trioksit",
      "Agregat",
      "içerisinde"
    ],
    "options": [
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Kronik Apikal Apse",
      "Kuronda gri-siyah renklenme",
      "Sodyum Hipoklorit"
    ],
    "correctIndex": 2
  },
  {
    "id": 539,
    "code": "S539",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kök gelişimi tamamlanmamış (açık apeksli) vital genç daimi dişlerde kökün hem boyca uzamasını hem de kanal duvarlarının kalınlaşmasını sağlayan tedaviye ne denir?",
    "answer": "Apeksogenezis (Vital pulpa tedavileri: İndirekt/direkt kuafaj, Cvek [parsiyel] pulpotomi veya servikal pulpotomi).",
    "coreAnswer": "Apeksogenezis",
    "keywords": [
      "gelişimi",
      "tamamlanmamış",
      "açık",
      "apeksli",
      "vital"
    ],
    "options": [
      "Kök ucunda sürekli sekonder sement birikimine",
      "Apeksogenezis",
      "Vertucci Tip III",
      "Hidrofiliktir"
    ],
    "correctIndex": 1
  },
  {
    "id": 540,
    "code": "S540",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kök gelişimi tamamlanmamış (açık apeksli) nekrotik (devital) genç daimi dişlerde kök ucunda kalsifiye bariyer oluşturma veya MTA tıkaç yerleştirme işlemine ne denir?",
    "answer": "Apeksifikasyon (Kök boyu uzamaz ve duvarlar kalınlaşmaz! Kök gelişiminin devam etmesi isteniyorsa apikal kanama oluşturularak Rejeneratif Endodontik Tedavi [Revaskülarizasyon] yapılır).",
    "coreAnswer": "Apeksifikasyon",
    "keywords": [
      "gelişimi",
      "tamamlanmamış",
      "açık",
      "apeksli",
      "nekrotik"
    ],
    "options": [
      "Apeksifikasyon",
      "En ağrılı evre: Subperiosteal evre",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül"
    ],
    "correctIndex": 0
  },
  {
    "id": 541,
    "code": "S541",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Rejeneratif Endodontik Tedavide (Revaskülarizasyon) apikal papilladaki kök hücreleri (SCAP) öldürmemek için hangi konsantrasyonda $NaOCl$ ve EDTA kullanılır?",
    "answer": "Düşük konsantrasyonlu (%1,5) $NaOCl$ ve ardından dentinden büyüme faktörlerini (TGF-$\\beta$) serbestleştirmek için %17 EDTA kullanılır.",
    "coreAnswer": "Düşük konsantrasyonlu",
    "keywords": [
      "Rejeneratif",
      "Endodontik",
      "Tedavide",
      "Revaskülarizasyon",
      "apikal"
    ],
    "options": [
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "Kuronda gri-siyah renklenme",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak",
      "Düşük konsantrasyonlu"
    ],
    "correctIndex": 3
  },
  {
    "id": 542,
    "code": "S542",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İnternal kök rezorpsiyonu ile Eksternal kök rezorpsiyonu radyografik ve klinik olarak nasıl ayırt edilir?",
    "answer": "İnternal rezorpsiyon: Kanal duvarları balon gibi simetrik genişlemiştir, kanal konturu lezyon içinde kaybolur, açı değiştirilince (SLOB) lezyon yer değiştirmez (Kuronda pembe leke = Pink spot — Derhal kanal tedavisi yapılarak odontoklastlar uzaklaştırılır!); Eksternal rezorpsiyon: Kanal çizgileri lezyonun içinden kesintisiz takip edilir, SLOB’da lezyon hareket eder.",
    "coreAnswer": "İnternal rezorpsiyon: Kanal duvarları balon gibi simetrik genişlemiştir, kanal konturu lezyon içinde kaybolur, açı değiştirilince",
    "keywords": [
      "İnternal",
      "rezorpsiyonu",
      "Eksternal",
      "radyografik",
      "klinik"
    ],
    "options": [
      "%17’lik EDTA",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "İnternal rezorpsiyon: Kanal duvarları balon gibi simetrik genişlemiştir, kanal konturu lezyon içinde kaybolur, açı değiştirilince",
      "1) Perforasyonun zamanı"
    ],
    "correctIndex": 2
  },
  {
    "id": 543,
    "code": "S543",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Şiddetli lüksasyon veya avülsiyon travması sonrası PDL ve sementin tamamen harap olmasıyla kök dentininin doğrudan alveol kemiği ile kaynaşıp kemik döngüsüyle erimesine ne denir?",
    "answer": "Yer değiştirme (Replacement) rezorpsiyonu / Ankiloz.",
    "coreAnswer": "Yer değiştirme",
    "keywords": [
      "Şiddetli",
      "lüksasyon",
      "avülsiyon",
      "travması",
      "sonrası"
    ],
    "options": [
      "Apeksogenezis",
      "Yer değiştirme",
      "Endike olanlar: Ateş",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir"
    ],
    "correctIndex": 1
  },
  {
    "id": 544,
    "code": "S544",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Gerçek kombine endo-perio lezyonlarda (veya primer endodontik lezyonun sekonder periodontal tutulumunda) tedavi sırası nasıl olmalıdır?",
    "answer": "Önce kök kanal tedavisi tamamlanır! (Endodontik kaynaklı kemik yıkımı kanal tedavisiyle iyileşeceği için, erken küretaj yapılırsa iyileşme potansiyeli olan sağlam PDL lifleri kazınmış olur; periodontal cerrahi için 2–3 ay beklenir).",
    "coreAnswer": "Önce kök kanal tedavisi tamamlanır!",
    "keywords": [
      "Gerçek",
      "kombine",
      "endo",
      "perio",
      "lezyonlarda"
    ],
    "options": [
      "Önce kök kanal tedavisi tamamlanır!",
      "Elastisite modülü",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Alt ikinci büyük azı"
    ],
    "correctIndex": 0
  },
  {
    "id": 545,
    "code": "S545",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Dikey kök kırıklarının (Vertical Root Fracture - VRF) en karakteristik klinik ve radyografik bulguları nelerdir?",
    "answer": "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül; Radyografik: Kök çevresinde \"J-şeklinde\" (J-shaped / Halo) radyolüsensi (Kök kanalına aşırı kuvvetle post yerleştirilmesi veya aşırı kondensasyon en sık nedendir; prognozu umutsuzdur, çekim yapılır).",
    "coreAnswer": "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül",
    "keywords": [
      "Dikey",
      "kırıklarının",
      "Vertical",
      "Root",
      "Fracture"
    ],
    "options": [
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Kronik Apikal Apse",
      "Sodyum Hipoklorit",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül"
    ],
    "correctIndex": 3
  },
  {
    "id": 546,
    "code": "S546",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal tedavili dişlerin restorasyonunda ferrule etkisi nedir ve dişin kırılma direncini artırmak için ne kadar sağlam dentin yüksekliği gerekir?",
    "answer": "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır; En az $1,5\\text{–}2,0\\text{ mm}$ yükseklikte ve $1\\text{ mm}$ kalınlıkta sağlam koronal dentin duvarı olmalıdır (Post, kökü güçlendirmez; sadece koronal kor materyalinin tutuculuğunu sağlar!).",
    "coreAnswer": "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
    "keywords": [
      "Kanal",
      "tedavili",
      "dişlerin",
      "restorasyonunda",
      "ferrule"
    ],
    "options": [
      "Kök ucunda sürekli sekonder sement birikimine",
      "Vertucci Tip III",
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "Hidrofiliktir"
    ],
    "correctIndex": 2
  },
  {
    "id": 547,
    "code": "S547",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Fiber postların döküm metal veya paslanmaz çelik postlara göre en kritik biyomekanik avantajı nedir?",
    "answer": "Elastisite modülü ($\\sim 20\\text{ GPa}$) dentine ($\\sim 18\\text{ GPa}$) çok yakındır; stresleri kök ucuna iletmeyip homojen dağıttığı için katastrofik dikey kök kırığı riskini en aza indirir.",
    "coreAnswer": "Elastisite modülü",
    "keywords": [
      "Fiber",
      "postların",
      "döküm",
      "metal",
      "paslanmaz"
    ],
    "options": [
      "En ağrılı evre: Subperiosteal evre",
      "Elastisite modülü",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Önce kök kanal tedavisi tamamlanır!"
    ],
    "correctIndex": 1
  },
  {
    "id": 548,
    "code": "S548",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Post boşluğu hazırlanırken apikal sızdırmazlığı korumak için kök ucunda en az kaç mm gutta-perka bırakılmalıdır?",
    "answer": "En az $4\\text{–}5\\text{ mm}$ apikal gutta-perka bırakılmalıdır.",
    "coreAnswer": "En az $4\\text{–}5\\text{ mm}$ apikal gutta-perka bırakılmalıdır",
    "keywords": [
      "Post",
      "boşluğu",
      "hazırlanırken",
      "apikal",
      "sızdırmazlığı"
    ],
    "options": [
      "En az $4\\text{–}5\\text{ mm}$ apikal gutta-perka bırakılmalıdır",
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "Kuronda gri-siyah renklenme",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak"
    ],
    "correctIndex": 0
  },
  {
    "id": 549,
    "code": "S549",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Endodontik mikrocerrahide (Apikal rezeksiyon) kök ucu hangi açıyla ve kaç mm kesilir, retrograd kavite ne ile hazırlanıp ne ile doldurulur?",
    "answer": "Açık dentin tübüllerinden mikro-sızıntıyı önlemek için kök ucu $0^\\circ\\text{–}10^\\circ$ (dişin uzun aksına dik) açıyla $3\\text{ mm}$ (apikal deltaların %98’ini, yan kanalların %93’ünü ortadan kaldırır!) kesilir; Ultrasonik uçlarla $3\\text{ mm}$ retrograd kavite açılıp MTA / Biyoseramik (veya IRM / SuperEBA) ile doldurulur.",
    "coreAnswer": "Açık dentin tübüllerinden mikro-sızıntıyı önlemek için kök ucu $0^\\circ\\text{–}10^\\circ$",
    "keywords": [
      "Endodontik",
      "mikrocerrahide",
      "Apikal",
      "rezeksiyon",
      "açıyla"
    ],
    "options": [
      "%17’lik EDTA",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül",
      "1) Perforasyonun zamanı",
      "Açık dentin tübüllerinden mikro-sızıntıyı önlemek için kök ucu $0^\\circ\\text{–}10^\\circ$"
    ],
    "correctIndex": 3
  },
  {
    "id": 550,
    "code": "S550",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal içi kırık aletin (eğenin) çıkarılma başarısını ve dişin prognozunu belirleyen en önemli faktörler nelerdir?",
    "answer": "Aletin kırıldığı aşama (debridman sonunda ve vital dişte kırıldıysa prognoz iyidir; enfekte nekrotik dişte erken aşamada kırıldıysa prognoz kötüdür) ve kırığın konumu (kurvaturun koronalindeyse ultrasoniklerle çıkarılabilir; apikalindeyse bypass edilir veya takip/cerrahi yapılır).",
    "coreAnswer": "Aletin kırıldığı aşama",
    "keywords": [
      "Kanal",
      "kırık",
      "aletin",
      "eğenin",
      "çıkarılma"
    ],
    "options": [
      "Apeksogenezis",
      "Endike olanlar: Ateş",
      "Aletin kırıldığı aşama",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir"
    ],
    "correctIndex": 2
  },
  {
    "id": 551,
    "code": "S551",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çatlak diş sendromu (Cracked tooth syndrome)’nda en karakteristik ağrı şikayeti ve tanı yöntemi nedir?",
    "answer": "Sert bir yiyeceği ısırma veya ısırmayı bırakma (rebound pain) sırasında ani, keskin ağrı; Tanısı Tooth Slooth (ısırma çubuğu), transillüminasyon (ışık çatlak hattından karşıya geçmez!) ve metilen mavisi boyaması ile konur.",
    "coreAnswer": "Sert bir yiyeceği ısırma veya ısırmayı bırakma",
    "keywords": [
      "Çatlak",
      "sendromu",
      "Cracked",
      "tooth",
      "syndrome"
    ],
    "options": [
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "Sert bir yiyeceği ısırma veya ısırmayı bırakma",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Alt ikinci büyük azı"
    ],
    "correctIndex": 1
  },
  {
    "id": 552,
    "code": "S552",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kanal tedavisinde seanslar arası gelişen şiddetli ağrı ve/veya şişlik tablosuna (Flare-up) en sık ne neden olur?",
    "answer": "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak (En yüksek risk: Periapikal lezyonlu nekrotik dişler ve preoperatif şiddetli ağrısı/şişliği olan vakalar).",
    "coreAnswer": "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak",
    "keywords": [
      "Kanal",
      "tedavisinde",
      "seanslar",
      "arası",
      "gelişen"
    ],
    "options": [
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak",
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Kronik Apikal Apse",
      "Sodyum Hipoklorit"
    ],
    "correctIndex": 0
  },
  {
    "id": 553,
    "code": "S553",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Endodontik enfeksiyonlarda hangi durumlarda sistemik antibiyotik reçete edilmesi endikedir (ve hangi durumlarda kontrendikedir)?",
    "answer": "Endike olanlar: Ateş ($>38\\text{ }^\\circ\\text{C}$), halsizlik, lenfadenopati, trismus, yaygın fasiyal selülit ve immünsüpresif hastalar; Kesinlikle antibiyotik verilmeyenler: İrreversibl pulpitis, semptomatik apikal periodontitis, pulpa nekrozu ve lokalize flüktüan akut apikal apse (drenaj yeterlidir!).",
    "coreAnswer": "Endike olanlar: Ateş",
    "keywords": [
      "Endodontik",
      "enfeksiyonlarda",
      "durumlarda",
      "sistemik",
      "antibiyotik"
    ],
    "options": [
      "Kök ucunda sürekli sekonder sement birikimine",
      "Vertucci Tip III",
      "Hidrofiliktir",
      "Endike olanlar: Ateş"
    ],
    "correctIndex": 3
  },
  {
    "id": 554,
    "code": "S554",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Üst birinci küçük azı (Maksiller 1. Premolar) dişinin kanal anatomisi ve servikal morfolojisi neden yüksek perforasyon riski taşır?",
    "answer": "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır (%85+) ve mezial servikal yüzeyinde derin bir konkavite (gelişimsel çöküntü) bulunur.",
    "coreAnswer": "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
    "keywords": [
      "birinci",
      "küçük",
      "Maksiller",
      "Premolar",
      "dişinin"
    ],
    "options": [
      "En ağrılı evre: Subperiosteal evre",
      "Anında başlayan çok şiddetli yanıcı ağrı, saniyeler içinde gelişen yaygın fasiyal ödem ve ekimoz",
      "Tek köklü premolarların aksine çoğunlukla 2 köklü ve 2 kanallıdır",
      "Önce kök kanal tedavisi tamamlanır!"
    ],
    "correctIndex": 2
  },
  {
    "id": 555,
    "code": "S555",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt birinci büyük azı (Mandibular 1. Molar) dişinde en geniş kanal hangisidir ve giriş kavitesi hangi şekildedir?",
    "answer": "En geniş kanal (tek ise) Distal kanaldır; Giriş kavitesi mezialde geniş, distalde dar trapez/dikdörtgen şeklindedir.",
    "coreAnswer": "En geniş kanal",
    "keywords": [
      "birinci",
      "büyük",
      "Mandibular",
      "Molar",
      "dişinde"
    ],
    "options": [
      "Her $1\\text{ mm}$’de çap $0,02\\text{ mm}$ arttığı için $D_{16} = D_0 + 0,32\\text{ mm}$’dir",
      "En geniş kanal",
      "Kuronda gri-siyah renklenme",
      "Sert bir yiyeceği ısırma veya ısırmayı bırakma"
    ],
    "correctIndex": 1
  },
  {
    "id": 556,
    "code": "S556",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Travma sonrası pulpa boşluğunun hızla tersiyer dentin ile tamamen kapanmasına (Kalsifik metamorfoz / Pulpa kanal obliterasyonu) ne zaman kanal tedavisi yapılır?",
    "answer": "Kuron sarımsı renk alır ancak diş %85–90 asemptomatiktir; Sadece periapikal radyolüsensi veya klinik semptom gelişirse kanal tedavisi yapılır (Profilaktik kanal tedavisi yapılmaz!).",
    "coreAnswer": "Kuron sarımsı renk alır ancak diş %85–90 asemptomatiktir",
    "keywords": [
      "Travma",
      "sonrası",
      "pulpa",
      "boşluğunun",
      "hızla"
    ],
    "options": [
      "Kuron sarımsı renk alır ancak diş %85–90 asemptomatiktir",
      "%17’lik EDTA",
      "Klinik: Dişin bukkal/lingualinde tek bir noktada dar ve çok derin izole sondalama cebi + diş eti kenarına yakın fistül",
      "1) Perforasyonun zamanı"
    ],
    "correctIndex": 0
  },
  {
    "id": 557,
    "code": "S557",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Simon sınıflandırmasına göre primer endodontik lezyonların ve primer periodontal lezyonların ayırıcı tanısında en kritik iki parametre nedir?",
    "answer": "Pulpa vitalite testi ve periodontal sondalama profili (Diş vital ise lezyon kesinlikle periodontal kaynaklıdır; Diş nekrotik ve sadece tek bir dar noktadan fistül gibi sondalanıyorsa primer endodontiktir).",
    "coreAnswer": "Pulpa vitalite testi ve periodontal sondalama profili",
    "keywords": [
      "Simon",
      "sınıflandırmasına",
      "primer",
      "endodontik",
      "lezyonların"
    ],
    "options": [
      "Apeksogenezis",
      "Enfekte nekrotik debrisi, bakterileri ve kimyasalları apikal foramenden periapikal dokulara taşırmak",
      "İnflamasyonun periapikal periodontal ligamente ulaştığını gösterir",
      "Pulpa vitalite testi ve periodontal sondalama profili"
    ],
    "correctIndex": 3
  },
  {
    "id": 558,
    "code": "S558",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yenilenen kanal tedavisinde (Retreatment) kanal içindeki eski gutta-perka dolgusunu çözmek için kullanılan en biyouyumlu ve etkili organik çözücüler hangileridir?",
    "answer": "Kloroform (en hızlı çözer ancak yüksek dozda sitotoksik/karsinojeniktir), Ökaliptol, Portakal yağı (Orange oil) ve Ksilen.",
    "coreAnswer": "Kloroform",
    "keywords": [
      "Yenilenen",
      "kanal",
      "tedavisinde",
      "Retreatment",
      "içindeki"
    ],
    "options": [
      "Kuron restorasyonunun dişin servikalinde sağlam dentin duvarlarını çember gibi sarmasıdır",
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Kloroform",
      "Alt ikinci büyük azı"
    ],
    "correctIndex": 2
  },
  {
    "id": 559,
    "code": "S559",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Furkasyon veya kök perforasyonlarının tamirinde prognozu belirleyen en önemli üç faktör nedir?",
    "answer": "1) Perforasyonun zamanı (hemen kapatılırsa prognoz en iyidir), 2) Boyutu (küçükse iyi), 3) Konumu (Kret seviyesi / gingival sulkusla ilişkili [kritik bölge] perforasyonların prognozu cep oluşumu nedeniyle en kötüdür; apikal veya kret altı kemik içi perforasyonların prognozu MTA ile çok iyidir!).",
    "coreAnswer": "1) Perforasyonun zamanı",
    "keywords": [
      "Furkasyon",
      "perforasyonlarının",
      "tamirinde",
      "prognozu",
      "belirleyen"
    ],
    "options": [
      "Endike olanlar: Ateş",
      "1) Perforasyonun zamanı",
      "Kronik Apikal Apse",
      "Sodyum Hipoklorit"
    ],
    "correctIndex": 1
  },
  {
    "id": 560,
    "code": "S560",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "endodonti",
    "subject": "Endodonti",
    "branchNumber": 15,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İrrigasyon etkinliğini artırmak için kullanılan Pasif Ultrasonik İrrigasyon (PUI) ve Negatif Apikal Basınçlı (EndoVac) sistemlerin temel mekanizmaları nelerdir?",
    "answer": "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım (acoustic streaming) ve kavitasyon oluşturur; EndoVac: Solüsyonu apikalde itmek yerine apikalden emerek taşma riskini sıfıra indirir.",
    "coreAnswer": "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
    "keywords": [
      "İrrigasyon",
      "etkinliğini",
      "artırmak",
      "kullanılan",
      "Pasif"
    ],
    "options": [
      "PUI: Kanal duvarına değmeden $25\\text{–}40\\text{ kHz}$’de akustik akım",
      "Kök ucunda sürekli sekonder sement birikimine",
      "Vertucci Tip III",
      "Hidrofiliktir"
    ],
    "correctIndex": 0
  },
  {
    "id": 561,
    "code": "S561",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Avülse (yerinden tamamen çıkmış) daimi bir dişte prognozu ve PDL hücrelerinin canlılığını belirleyen en kritik faktör ve kritik ağız dışı kuru süre kaç dakikadır?",
    "answer": "Ağız dışı (ekstra-oral) kuru süre ve saklama ortamı; Kritik süre 60 dakikadır ($>60\\text{ dk}$ kuru kalmışsa tüm PDL hücreleri nekroza uğramıştır ve ankiloz / yer değiştirme rezorpsiyonu kaçınılmazdır!).",
    "coreAnswer": "Ağız dışı",
    "keywords": [
      "Avülse",
      "yerinden",
      "tamamen",
      "çıkmış",
      "daimi"
    ],
    "options": [
      "Turner dişi",
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula",
      "Ağız dışı"
    ],
    "correctIndex": 3
  },
  {
    "id": 562,
    "code": "S562",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Avülse daimi dişi olay yerinde hemen replante etmek mümkün değilse PDL canlılığını koruyan en ideal saklama ortamları sırasıyla nelerdir?",
    "answer": "HBSS (Hank’s Balanced Salt Solution) → Soğuk süt (ozmolaritesi ve pH’ı fizyolojiktir, kolay bulunur!) → Serum fizyolojik → Hastanın kendi tükürüğü (vestibül) (Musluk suyunda kesinlikle saklanmaz, hipotonik olduğu için PDL hücrelerini patlatır!).",
    "coreAnswer": "HBSS",
    "keywords": [
      "Avülse",
      "daimi",
      "dişi",
      "olay",
      "yerinde"
    ],
    "options": [
      "1) Furkasyon veya periapikal bölgedeki lezyonun alttaki daimi diş germinin folikülüne ulaşması, 2) Kökün $1/3$’ünden fazlasında patolojik/fizyolojik rezorpsiyon olması, 3) İnternal rezorpsiyon",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "HBSS",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi"
    ],
    "correctIndex": 2
  },
  {
    "id": 563,
    "code": "S563",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Avülse bir süt dişi kliniğe getirildiğinde ne yapılır?",
    "answer": "Süt dişleri KESİNLİKLE replante edilmez! (Alttaki daimi diş germine zarar verme, enfeksiyon ve ankiloz riski nedeniyle).",
    "coreAnswer": "Süt dişleri KESİNLİKLE replante edilmez!",
    "keywords": [
      "Avülse",
      "dişi",
      "kliniğe",
      "getirildiğinde",
      "yapılır"
    ],
    "options": [
      "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse",
      "Süt dişleri KESİNLİKLE replante edilmez!",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 1
  },
  {
    "id": 564,
    "code": "S564",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Güncel IADT (Uluslararası Dental Travmatoloji Derneği) kılavuzuna göre avülse daimi dişlerde splint tipi ve süresi nedir?",
    "answer": "Esnek (fleksibl / pasif) splint (fizyolojik diş hareketine izin vererek ankilozu önlemek için) ve 2 hafta (14 gün) süreyle uygulanır (Alveol kırığı eşlik ediyorsa 4 hafta).",
    "coreAnswer": "Esnek",
    "keywords": [
      "Güncel",
      "IADT",
      "Uluslararası",
      "Dental",
      "Travmatoloji"
    ],
    "options": [
      "Esnek",
      "En az bir 1. daimi moları",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "İntrüzyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 565,
    "code": "S565",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kök gelişimi tamamlanmış (kapalı apeksli) avülse daimi dişte kanal tedavisine ne zaman başlanmalıdır?",
    "answer": "Replantasyondan 7–10 gün sonra (Splint çıkarılmadan önce!) başlanır ve inflamatuar kök rezorpsiyonunu önlemek için kanala 1 aya kadar $\\text{Ca(OH)}_2$ (veya kortikosteroid-antibiyotik patı) yerleştirilir.",
    "coreAnswer": "Replantasyondan 7–10 gün sonra",
    "keywords": [
      "gelişimi",
      "tamamlanmış",
      "kapalı",
      "apeksli",
      "avülse"
    ],
    "options": [
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Replantasyondan 7–10 gün sonra"
    ],
    "correctIndex": 3
  },
  {
    "id": 566,
    "code": "S566",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Kök gelişimi tamamlanmamış (açık apeksli) ve ağız dışında $<60\\text{ dk}$ kalmış avülse daimi dişte yaklaşım nedir?",
    "answer": "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon (yeniden damarlanma) şansı vardır; yakından takip edilir, sadece pulpa nekrozu/enfeksiyon bulgusu gelişirse apeksifikasyon veya rejeneratif endodonti yapılır.",
    "coreAnswer": "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon",
    "keywords": [
      "gelişimi",
      "tamamlanmamış",
      "açık",
      "apeksli",
      "ağız"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "Kök labiale yönelmişse",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon",
      "Sırası: A – B – D – C – E"
    ],
    "correctIndex": 2
  },
  {
    "id": 567,
    "code": "S567",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Daimi dişlerin lüksasyon yaralanmalarında (Sarsıntı/Concussion, Sublüksasyon, Ekstrüzyon, Lateral lüksasyon, İntrüzyon) pulpa nekrozu ve ankiloz riski en yüksek olanı hangisidir?",
    "answer": "İntrüzyon (Gömülme) travmasıdır (Açık apeksli dişte $\\le 7\\text{ mm}$ intrüzyonda spontan yeniden sürme [re-erüpsiyon] beklenir; kapalı apekste $<3\\text{ mm}$ ise 2–4 hafta beklenir, $3\\text{–}7\\text{ mm}$ ise ortodontik/cerrahi, $>7\\text{ mm}$ ise cerrahi olarak yerine getirilir ve kanal tedavisi yapılır!).",
    "coreAnswer": "İntrüzyon",
    "keywords": [
      "Daimi",
      "dişlerin",
      "lüksasyon",
      "yaralanmalarında",
      "Sarsıntı"
    ],
    "options": [
      "Ağız dışı",
      "İntrüzyon",
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "Alt çenede: Lingual Ark"
    ],
    "correctIndex": 1
  },
  {
    "id": 568,
    "code": "S568",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt kesici dişin intrüzyon travmasında kök ucu labiale (vestibüle) doğru yer değiştirmişse (radyografide diş kısa görünür) veya daimi diş germine doğru (radyografide diş uzun görünür) gömülmüşse yaklaşım nedir?",
    "answer": "Kök labiale yönelmişse (germi tehdit etmiyorsa): Spontan yeniden sürmesi beklenir (1–6 ay); Kök daimi diş germine saplanmışsa: Çekim yapılır.",
    "coreAnswer": "Kök labiale yönelmişse",
    "keywords": [
      "kesici",
      "dişin",
      "intrüzyon",
      "travmasında",
      "labiale"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Turner dişi",
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula"
    ],
    "correctIndex": 0
  },
  {
    "id": 569,
    "code": "S569",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişi travması veya periapikal enfeksiyonu sonucu alttaki gelişmekte olan daimi dişin minesinde oluşan sarı-kahverengi hipoplazi/hipomineralizasyona ne ad verilir?",
    "answer": "Turner dişi (Turner hipoplazisi) (Şiddetli travma kuron-kök açısını bükerse Dilaserasyon oluşur!).",
    "coreAnswer": "Turner dişi",
    "keywords": [
      "dişi",
      "travması",
      "periapikal",
      "enfeksiyonu",
      "alttaki"
    ],
    "options": [
      "1) Furkasyon veya periapikal bölgedeki lezyonun alttaki daimi diş germinin folikülüne ulaşması, 2) Kökün $1/3$’ünden fazlasında patolojik/fizyolojik rezorpsiyon olması, 3) İnternal rezorpsiyon",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi",
      "Turner dişi"
    ],
    "correctIndex": 3
  },
  {
    "id": 570,
    "code": "S570",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Daimi dişlerde yatay kök kırıklarında (Koronal üçlü, Orta üçlü, Apikal üçlü) prognozu en iyi olan bölge hangisidir ve kırık hattı hangi doku tipleriyle iyileşebilir?",
    "answer": "Prognozu en iyi olan Apikal üçlü kırıklarıdır (çoğunlukla splint bile gerekmez ve pulpa canlı kalır!); Orta üçlüde 4 hafta (servikale yakınsa 4 ay) esnek splint uygulanır. Andreasen’in 4 iyileşme tipi: 1) Kalsifiye doku ile (en ideal), 2) Bağ dokusu ile, 3) Kemik ve bağ dokusu ile, 4) Granülasyon dokusu ile (İyileşmeme / Kırık hattında radyolüsensi — Sadece koronal parçaya kırık hattına kadar kanal tedavisi yapılır!).",
    "coreAnswer": "Prognozu en iyi olan Apikal üçlü kırıklarıdır",
    "keywords": [
      "Daimi",
      "dişlerde",
      "yatay",
      "kırıklarında",
      "Koronal"
    ],
    "options": [
      "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Prognozu en iyi olan Apikal üçlü kırıklarıdır",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 2
  },
  {
    "id": 571,
    "code": "S571",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Travma sonucu komplike kuron kırığı (pulpa ekspoz) olan genç daimi kesici dişte pulpa canlılığını ve kök gelişimini (apeksogenezis) korumak için uygulanan altın standart tedavi nedir?",
    "answer": "Parsiyel Pulpotomi (Cvek Amputasyonu) — Ekspoz alandan $2\\text{ mm}$ derinlikte enflamatuar pulpa elmas frezle kaldırılır, kanama birkaç dakikada durursa üzerine MTA / Biyodentin / $\\text{Ca(OH)}_2$ yerleştirilir (Yaralanmadan sonra geçen süre 24–48 saati aşsa bile başarı oranı >%90’dır!).",
    "coreAnswer": "Parsiyel Pulpotomi",
    "keywords": [
      "Travma",
      "komplike",
      "kuron",
      "kırığı",
      "pulpa"
    ],
    "options": [
      "En az bir 1. daimi moları",
      "Parsiyel Pulpotomi",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 572,
    "code": "S572",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişlerinin kuron-kök ve pulpa anatomisinin daimi dişlerden en önemli farkları nelerdir (Neden süt dişlerinde kavite ve endodonti farklıdır)?",
    "answer": "Mine ve dentin yarı yarıya daha incedir, pulpa boynuzları (özellikle meziobukkal) yüzeye çok yakındır, servikalde belirgin mine çıkıntısı (daralma) vardır, mine prizmaları servikalde oklüzale (yukarı) yönelir, kökler daimi diş germine yer açmak için dışa doğru açık (divergent) ve şerit (ribbon) kanallıdır.",
    "coreAnswer": "Mine ve dentin yarı yarıya daha incedir, pulpa boynuzları",
    "keywords": [
      "dişlerinin",
      "kuron",
      "pulpa",
      "anatomisinin",
      "daimi"
    ],
    "options": [
      "Mine ve dentin yarı yarıya daha incedir, pulpa boynuzları",
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir"
    ],
    "correctIndex": 0
  },
  {
    "id": 573,
    "code": "S573",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt molar dişlerde derin çürük temizlenirken spontan ağrısı olmayan vital bir dişte pulpa açılırsa hangi tedavi uygulanır ve güncel ideal ajanlar nelerdir?",
    "answer": "Süt dişi amputasyonu (Pulpotomi) — Koronal pulpa tamamen çıkarılır, kök kanallarındaki canlı pulpa korunur; Ajanlar: MTA (Altın standart), Ferrik sülfat (%15,5), Formokrezol (Buckley - 1:5 dilüe).",
    "coreAnswer": "Süt dişi amputasyonu",
    "keywords": [
      "molar",
      "dişlerde",
      "derin",
      "çürük",
      "temizlenirken"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "İntrüzyon",
      "Sırası: A – B – D – C – E",
      "Süt dişi amputasyonu"
    ],
    "correctIndex": 3
  },
  {
    "id": 574,
    "code": "S574",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişi amputasyonunda (pulpotomi) koronal pulpa çıkarıldıktan sonra kanal ağızlarından koyu kırmızı, durdurulamayan (hiperemik) kanama gelmesi neyi gösterir ve ne yapılmalıdır?",
    "answer": "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir; derhal Süt dişi kanal tedavisine (Pulpektomi) veya çekime geçilir.",
    "coreAnswer": "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
    "keywords": [
      "dişi",
      "amputasyonunda",
      "pulpotomi",
      "koronal",
      "pulpa"
    ],
    "options": [
      "Ağız dışı",
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Alt çenede: Lingual Ark"
    ],
    "correctIndex": 2
  },
  {
    "id": 575,
    "code": "S575",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişlerinde Direkt Pulpa Kaplaması (Kuafaj) neden çürük ekspozlarında başarısızdır ve hangi komplikasyona yol açar?",
    "answer": "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!.",
    "coreAnswer": "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
    "keywords": [
      "dişlerinde",
      "Direkt",
      "Pulpa",
      "Kaplaması",
      "Kuafaj"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula"
    ],
    "correctIndex": 1
  },
  {
    "id": 576,
    "code": "S576",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişlerinde hangi bulgular varsa endodontik tedavi (pulpotomi/pulpektomi) kesin kontrendikedir ve çekim yapılmalıdır?",
    "answer": "1) Furkasyon veya periapikal bölgedeki lezyonun alttaki daimi diş germinin folikülüne ulaşması, 2) Kökün $1/3$’ünden fazlasında patolojik/fizyolojik rezorpsiyon olması, 3) İnternal rezorpsiyon (perfore), 4) Restore edilemeyecek kuron yıkımı ve sistemik kalp/immünsüpresif hastalıklar.",
    "coreAnswer": "1) Furkasyon veya periapikal bölgedeki lezyonun alttaki daimi diş germinin folikülüne ulaşması, 2) Kökün $1/3$’ünden fazlasında patolojik/fizyolojik rezorpsiyon olması, 3) İnternal rezorpsiyon",
    "keywords": [
      "dişlerinde",
      "bulgular",
      "varsa",
      "endodontik",
      "tedavi"
    ],
    "options": [
      "1) Furkasyon veya periapikal bölgedeki lezyonun alttaki daimi diş germinin folikülüne ulaşması, 2) Kökün $1/3$’ünden fazlasında patolojik/fizyolojik rezorpsiyon olması, 3) İnternal rezorpsiyon",
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi"
    ],
    "correctIndex": 0
  },
  {
    "id": 577,
    "code": "S577",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişi kanal tedavisinde (Pulpektomi) kök kanalları neden Gutta-perka veya sert patlarla DOLDURULMAZ ve hangi kanal dolgu maddeleri kullanılır?",
    "answer": "Fizyolojik kök rezorpsiyonu ile birlikte eriyebilen (rezorbe olabilen) ve daimi dişin sürmesini engellemeyen patlar kullanılmalıdır: Çinko oksit öjenol (ZOE), Kalsiyum hidroksit + İyodoform karışımı (Vitapex / Metapex) veya Krieger (KRI) patı.",
    "coreAnswer": "Fizyolojik kök rezorpsiyonu ile birlikte eriyebilen",
    "keywords": [
      "dişi",
      "kanal",
      "tedavisinde",
      "Pulpektomi",
      "kanalları"
    ],
    "options": [
      "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Uzun süreli $\\text{Ca",
      "Fizyolojik kök rezorpsiyonu ile birlikte eriyebilen"
    ],
    "correctIndex": 3
  },
  {
    "id": 578,
    "code": "S578",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Geniş arayüz çürüklü veya amputasyon/kanal tedavisi yapılmış süt molar dişlerin restorasyonunda en dayanıklı ve başarılı yöntem nedir?",
    "answer": "Paslanmaz Çelik Kuron (PÇK / SSC).",
    "coreAnswer": "Paslanmaz Çelik Kuron",
    "keywords": [
      "Geniş",
      "arayüz",
      "çürüklü",
      "amputasyon",
      "kanal"
    ],
    "options": [
      "En az bir 1. daimi moları",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Paslanmaz Çelik Kuron",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 579,
    "code": "S579",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çürüklü süt molar dişlerde lokal anestezi ve hiçbir çürük temizleme / diş kesimi yapmadan paslanmaz çelik kuronun cam iyonomer simanla doğrudan dişe yapıştırılarak çürüğün bakteriyel beslenmesinin kesilmesi tekniği?",
    "answer": "Hall Tekniği (Sadece semptomsuz, irreversibl pulpitis veya periapikal patolojisi olmayan süt molarlarda uygulanır!).",
    "coreAnswer": "Hall Tekniği",
    "keywords": [
      "Çürüklü",
      "molar",
      "dişlerde",
      "lokal",
      "anestezi"
    ],
    "options": [
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
      "Hall Tekniği",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "Süt dişi amputasyonu"
    ],
    "correctIndex": 1
  },
  {
    "id": 580,
    "code": "S580",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "38’lik Gümüş Diamin Florür (GDF / SDF) uygulamasının çürük durdurucu mekanizması ve en önemli estetik dezavantajı nedir?",
    "answer": "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür ($44.800\\text{ ppm}$) ise remineralizasyon sağlar; Dezavantajı: Çürük lezyonunu kalıcı olarak simsiyah boyamasıdır (Potasyum iyodür [KI] ile azaltılabilir).",
    "coreAnswer": "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür",
    "keywords": [
      "Gümüş",
      "Diamin",
      "Florür",
      "uygulamasının",
      "çürük"
    ],
    "options": [
      "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür",
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "İntrüzyon",
      "Sırası: A – B – D – C – E"
    ],
    "correctIndex": 0
  },
  {
    "id": 581,
    "code": "S581",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt dişlerinin sürme sırası ve tamamlanma yaşı nedir?",
    "answer": "Sırası: A – B – D – C – E (Santral kesici [6–8 ay] → Lateral kesici → 1. Süt molar → Kanin → 2. Süt molar [24–30 ay]); Toplam 20 adet süt dişi vardır (Süt dişlenmede premolar yoktur!).",
    "coreAnswer": "Sırası: A – B – D – C – E",
    "keywords": [
      "dişlerinin",
      "sürme",
      "sırası",
      "tamamlanma",
      "yaşı"
    ],
    "options": [
      "Ağız dışı",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Alt çenede: Lingual Ark",
      "Sırası: A – B – D – C – E"
    ],
    "correctIndex": 3
  },
  {
    "id": 582,
    "code": "S582",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Daimi dişlerin üst çene ve alt çene sürme sıraları arasındaki en kritik fark nedir?",
    "answer": "Alt çenede: 6 – 1 – 2 – 3 (Kanin) – 4 – 5 – 7 (Alt kanin premolarlardan önce sürer!); Üst çenede: 6 – 1 – 2 – 4 – 5 – 3 (Kanin) – 7 (Üst kanin premolarlardan sonra sürer, bu yüzden yer bulamayıp vestibülde yüksekte veya palatinalde gömülü kalır!).",
    "coreAnswer": "Alt çenede: 6 – 1 – 2 – 3",
    "keywords": [
      "Daimi",
      "dişlerin",
      "çene",
      "sürme",
      "sıraları"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Sırası: A – B – D – C – E",
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula"
    ],
    "correctIndex": 2
  },
  {
    "id": 583,
    "code": "S583",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Doğumda ağızda mevcut olan dişlere (Natal diş) ve doğumdan sonraki ilk 30 gün içinde süren dişlere (Neonatal diş) nasıl yaklaşılır?",
    "answer": "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse (aspirasyon riski yoksa) çekilmez; Emzirme sırasında dilin alt yüzünde travmatik ülser (Riga-Fede hastalığı) oluşturursa kesici kenarı düzeltilir.",
    "coreAnswer": "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse",
    "keywords": [
      "Doğumda",
      "ağızda",
      "mevcut",
      "dişlere",
      "Natal"
    ],
    "options": [
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "%90’ı süpernümerer değil normal süt alt santral kesicilerdir! Eğer aşırı mobil değilse",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi"
    ],
    "correctIndex": 1
  },
  {
    "id": 584,
    "code": "S584",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir dişin sürme zamanı geldiğinde kuronunun üzerinde mavimsi-mor renkli, flüktüan, içinde kan/sıvı bulunan kubbe şeklindeki şişliğe ne denir ve tedavisi nedir?",
    "answer": "Erüpsiyon kisti (Erüpsiyon hematomu) — Çoğunlukla çiğneme ile kendiliğinden patlayarak diş sürer, cerrahi müdahale gerekmez!.",
    "coreAnswer": "Erüpsiyon kisti",
    "keywords": [
      "dişin",
      "sürme",
      "zamanı",
      "geldiğinde",
      "kuronunun"
    ],
    "options": [
      "Erüpsiyon kisti",
      "Alt çenede: 6 – 1 – 2 – 3",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 0
  },
  {
    "id": 585,
    "code": "S585",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Bir süt dişinin erken kaybında ne zaman yer tutucu yapılmaz (Nolla gelişim evrelerine göre)?",
    "answer": "Alttaki daimi dişin kök gelişimi Nolla Evre 8 ($2/3$ kök boyu) veya üzerine ulaşmışsa ve üzerini örten kemik dokusu kalmamışsa (diş 6 ay içinde sürecekse) veya üst/alt süt kesici dişlerin erken kaybında (ark boyu kaybı yapmaz, sadece estetik/konuşma için fonksiyonel aparey yapılır) yer tutucu gerekmez! (Nolla Evre 6: Kuron tamamlanmıştır; Nolla Evre 7: Kökün $1/3$’ü oluşmuştur — Dişin üzerindeki kemik yıkılmışsa bile kök gelişimi olmadan sürerse mobildir!).",
    "coreAnswer": "Alttaki daimi dişin kök gelişimi Nolla Evre 8",
    "keywords": [
      "dişinin",
      "erken",
      "kaybında",
      "zaman",
      "tutucu"
    ],
    "options": [
      "En az bir 1. daimi moları",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon",
      "Alttaki daimi dişin kök gelişimi Nolla Evre 8"
    ],
    "correctIndex": 3
  },
  {
    "id": 586,
    "code": "S586",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Birinci süt molar dişin tek taraflı erken kaybında hangi yer tutucu kullanılır?",
    "answer": "Bant-Loop (veya Kuron-Loop) sabit yer tutucu.",
    "coreAnswer": "Bant-Loop",
    "keywords": [
      "Birinci",
      "molar",
      "dişin",
      "taraflı",
      "erken"
    ],
    "options": [
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "Bant-Loop",
      "Süt dişi amputasyonu"
    ],
    "correctIndex": 2
  },
  {
    "id": 587,
    "code": "S587",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "İkinci süt molar dişin birinci daimi molar diş henüz sürmeden önce erken çekilmesi durumunda 6 numaralı dişin meziale devrilerek sürmesini önleyen rehber yer tutucu hangisidir?",
    "answer": "Distal Shoe (Distal pabuç / İntraalveolar) yer tutucu (Bakteriyemi oluşturduğu için konjenital kalp hastalığı / endokardit riski olan çocuklarda kontrendikedir!).",
    "coreAnswer": "Distal Shoe",
    "keywords": [
      "İkinci",
      "molar",
      "dişin",
      "birinci",
      "daimi"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "Distal Shoe",
      "İntrüzyon",
      "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür"
    ],
    "correctIndex": 1
  },
  {
    "id": 588,
    "code": "S588",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Alt çenede bilateral süt molar kaybında daimi kesici dişler sürdükten sonra kullanılan sabit ark içi yer tutucu ile üst çenede kullanılan karşılığı nedir?",
    "answer": "Alt çenede: Lingual Ark (Daimi kesiciler sürmeden yapılırsa kesiciler arkın lingualinden sürer!); Üst çenede: Nance Apareyi (veya Transpalatal Ark - TPA).",
    "coreAnswer": "Alt çenede: Lingual Ark",
    "keywords": [
      "çenede",
      "bilateral",
      "molar",
      "kaybında",
      "daimi"
    ],
    "options": [
      "Alt çenede: Lingual Ark",
      "Ağız dışı",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Distal Shoe"
    ],
    "correctIndex": 0
  },
  {
    "id": 589,
    "code": "S589",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "71 aylık (6 yaş altı) bir çocukta bir veya daha fazla çürük, dolgulu veya çekilmiş süt dişi yüzeyinin ($\\text{dmfs} \\ge 1$) bulunmasına ve 3 yaş altı çocuklarda düz yüzeylerde (üst kesiciler) çürük görülmesine ne denir?",
    "answer": "$<6$ yaş: Erken Çocukluk Çağı Çürüğü (EÇÇ / ECC); $<3$ yaşta düz yüzey çürüğü: Şiddetli Erken Çocukluk Çağı Çürüğü (Ş-EÇÇ / S-ECC) (Biberon çürüğünde dil emzirme sırasında alt kesicileri örttüğü ve submandibular/sublingual tükürük yıkadığı için alt süt kesiciler sağlam kalır!).",
    "coreAnswer": "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
    "keywords": [
      "aylık",
      "altı",
      "çocukta",
      "daha",
      "fazla"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Sırası: A – B – D – C – E",
      "Anlat-Göster-Uygula",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü"
    ],
    "correctIndex": 3
  },
  {
    "id": 590,
    "code": "S590",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Molar-İnsiziv Hipomineralizasyon (MİH) hangi dişleri etkiler ve klinik olarak en büyük iki zorluğu nedir?",
    "answer": "En az bir 1. daimi moları (ve sıklıkla daimi kesicileri) etkileyen sistemik kökenli mine defektidir; Klinik zorluğu: 1) Sürmeden hemen sonra minenin çiğneme kuvvetleriyle kırılması (Posterüptif mine yıkımı), 2) Kronik pulpa inflamasyonu nedeniyle lokal anestezinin çok zor tutması (hipersensitivite) ve rezin bağlantısının düşük olması.",
    "coreAnswer": "En az bir 1. daimi moları",
    "keywords": [
      "Molar",
      "İnsiziv",
      "Hipomineralizasyon",
      "dişleri",
      "etkiler"
    ],
    "options": [
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "Alt çenede: Lingual Ark",
      "En az bir 1. daimi moları",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi"
    ],
    "correctIndex": 2
  },
  {
    "id": 591,
    "code": "S591",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda Pit ve Fissür Örtücü (Fissür Sealant) uygulamasında rezin bazlı örtücüler ile cam iyonomer bazlı örtücüler hangi durumlarda tercih edilir?",
    "answer": "Diş tam sürmüşse ve tam nem izolasyonu (rubber-dam) sağlanabiliyorsa tutuculuğu en yüksek olan Rezin bazlı fissür örtücü (%37 fosforik asit ile); Diş yarı sürmüşse (operkulum varsa) ve nem kontrolü sağlanamıyorsa hidrofilik ve florür salan Yüksek viskoziteli cam iyonomer tercih edilir.",
    "coreAnswer": "Diş tam sürmüşse ve tam nem izolasyonu",
    "keywords": [
      "Çocuklarda",
      "Fissür",
      "Örtücü",
      "Sealant",
      "uygulamasında"
    ],
    "options": [
      "Alt çenede: 6 – 1 – 2 – 3",
      "Diş tam sürmüşse ve tam nem izolasyonu",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 1
  },
  {
    "id": 592,
    "code": "S592",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda sistemik florür toksisitesinde Olası Toksik Doz (PTD) ve Kesin Ölümcül Doz (CLD) kilogram başına kaç mg’dır ve akut zehirlenmede ilk acil müdahale nedir?",
    "answer": "Olası Toksik Doz (PTD): $5\\text{ mg F/kg}$ (Acil hastane sevk sınırlarıdır!); Kesin Ölümcül Doz: $32\\text{–}64\\text{ mg F/kg}$. İlk müdahale: Midedeki florürün emilimini engellemek için ağızdan Süt veya Kalsiyum glukonat/laktat vererek çözünmeyen kalsiyum florür ($\\text{CaF}_2$) oluşturmak.",
    "coreAnswer": "Olası Toksik Doz",
    "keywords": [
      "Çocuklarda",
      "sistemik",
      "florür",
      "toksisitesinde",
      "Olası"
    ],
    "options": [
      "Olası Toksik Doz",
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon"
    ],
    "correctIndex": 0
  },
  {
    "id": 593,
    "code": "S593",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Profesyonel topikal florür ajanlarından APF (Asidüle Fosfat Florür) jel ve Sodyum Florür (NaF) vernik içerisinde kaç ppm florür bulunur?",
    "answer": "%1,23 APF jel: $12.300\\text{ ppm}$ ($\\text{pH } 3,5$ — Asidik olduğu için porselen ve cam iyonomer restorasyonları pürüzlendirir!); %5 NaF vernik: $22.600\\text{ ppm}$ ($<6$ yaş çocuklarda yutma riski düşük olduğu için en güvenli profesyonel ajandır!).",
    "coreAnswer": "%1,23 APF jel: $12.300\\text{ ppm}$",
    "keywords": [
      "Profesyonel",
      "topikal",
      "florür",
      "ajanlarından",
      "Asidüle"
    ],
    "options": [
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "Süt dişi amputasyonu",
      "%1,23 APF jel: $12.300\\text{ ppm}$"
    ],
    "correctIndex": 3
  },
  {
    "id": 594,
    "code": "S594",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "6 yaş altındaki çocuklarda diş fırçalarken florozis riskini önlemek için macun miktarı nasıl ayarlanmalıdır?",
    "answer": "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi (sürüntü / smear, $\\sim 0,1\\text{ g}$) kadar; 3–6 yaş arası: Bezelye tanesi ($\\sim 0,25\\text{ g}$) kadar ($1000\\text{ ppm}$ florürlü macun ebeveyn gözetiminde).",
    "coreAnswer": "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi",
    "keywords": [
      "altındaki",
      "çocuklarda",
      "fırçalarken",
      "florozis",
      "riskini"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "İntrüzyon",
      "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi",
      "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür"
    ],
    "correctIndex": 2
  },
  {
    "id": 595,
    "code": "S595",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda davranış yönlendirme tekniklerinden Frankl Davranış Skalası’na göre (1: Kesinlikle negatif, 2: Negatif, 3: Pozitif, 4: Kesinlikle pozitif) kooperasyonu artırmak için en sık kullanılan temel yöntemler nelerdir?",
    "answer": "Anlat-Göster-Uygula (Tell-Show-Do), Pozitif pekiştirme, Dikkat dağıtma (Distraction), Ses kontrolü (Voice control) ve Modelleme (HOME [El ile ağız kapatma] tekniği psikolojik travma riski nedeniyle güncel AAPD kılavuzlarından çıkarılmıştır!).",
    "coreAnswer": "Anlat-Göster-Uygula",
    "keywords": [
      "Çocuklarda",
      "davranış",
      "yönlendirme",
      "tekniklerinden",
      "Frankl"
    ],
    "options": [
      "Ağız dışı",
      "Anlat-Göster-Uygula",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Distal Shoe"
    ],
    "correctIndex": 1
  },
  {
    "id": 596,
    "code": "S596",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda Azot protoksit – Oksijen ($N_2O\\text{–}O_2$) inhalasyon sedasyonunda difüzyon hipoksisini önlemek için maksimum $N_2O$ oranı kaçtır ve işlem sonunda ne yapılır?",
    "answer": "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir; İşlem sonunda alveollerdeki $N_2O$’nun hızla çıkıp oksijeni seyreltmemesi (Difüzyon hipoksisi) için hastaya 3–5 dakika %100 saf Oksijen solutulur! (Otitis media [orta kulak iltihabı], sinüzit, burun tıkanıklığı ve kistik fibroziste kontrendikedir!).",
    "coreAnswer": "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
    "keywords": [
      "Çocuklarda",
      "Azot",
      "protoksit",
      "Oksijen",
      "N_2O"
    ],
    "options": [
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "Kök labiale yönelmişse",
      "Sırası: A – B – D – C – E",
      "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi"
    ],
    "correctIndex": 0
  },
  {
    "id": 597,
    "code": "S597",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda inferior alveolar blok anestezisinde mandibular foramenin oklüzal düzleme göre konumu yetişkinden nasıl farklıdır?",
    "answer": "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında (aşağıda) ve daha posteriroda yer alır; yaşla birlikte ramus büyüdükçe oklüzal düzlem seviyesine ve üzerine çıkar.",
    "coreAnswer": "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında",
    "keywords": [
      "Çocuklarda",
      "inferior",
      "alveolar",
      "blok",
      "anestezisinde"
    ],
    "options": [
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "Alt çenede: Lingual Ark",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi",
      "Küçük çocuklarda mandibular foramen oklüzal düzlemin daha altında"
    ],
    "correctIndex": 3
  },
  {
    "id": 598,
    "code": "S598",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda dental işlem sonrası uyuşukluk geçmeden alt dudağın ısırılması sonucu oluşan şiş, beyaz-sarı fibrinomembranla kaplı ülsere lezyon nedir?",
    "answer": "Travmatik ülser (Morsicatio labiorum / Anestezi ısırığı) — Apse veya alerji değildir, antibiyotik verilmez! 7–14 günde kendiliğinden iyileşir.",
    "coreAnswer": "Travmatik ülser",
    "keywords": [
      "Çocuklarda",
      "dental",
      "işlem",
      "sonrası",
      "uyuşukluk"
    ],
    "options": [
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula",
      "Travmatik ülser",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 2
  },
  {
    "id": 599,
    "code": "S599",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Birinci daimi büyük azı (6 numaralı) dişin sürme sırasında ikinci süt moların distal servikal kolesine takılarak kökünü rezorbe etmesine ne denir?",
    "answer": "Ektopik erüpsiyon (En sık üst 1. daimi molarda görülür; $2/3$’ü reversibl olup 7 yaşına kadar kendiliğinden kurtulup sürer; irreversibl ise pirinç tel/elastik separatör veya Humphrey apareyi ile distale itilir).",
    "coreAnswer": "Ektopik erüpsiyon",
    "keywords": [
      "Birinci",
      "daimi",
      "büyük",
      "numaralı",
      "dişin"
    ],
    "options": [
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Ektopik erüpsiyon",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon"
    ],
    "correctIndex": 1
  },
  {
    "id": 600,
    "code": "S600",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Süt molar dişlerde derin çürük kavitesinde pulpa ekspozunu önlemek için pulpa üzerindeki yumuşak/enfekte dentinin ince bir tabakasının bırakılıp hermetik kapatılmasına ne denir?",
    "answer": "İndirekt Pulpa Tedavisi (İPT) veya Selektif (Kademeli) Çürük Uzaklaştırma (Süt dişlerinde başarı oranı >%90 olup amputasyona göre pulpa canlılığını daha fizyolojik korur!).",
    "coreAnswer": "İndirekt Pulpa Tedavisi",
    "keywords": [
      "molar",
      "dişlerde",
      "derin",
      "çürük",
      "kavitesinde"
    ],
    "options": [
      "İndirekt Pulpa Tedavisi",
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "Süt dişi amputasyonu"
    ],
    "correctIndex": 0
  },
  {
    "id": 601,
    "code": "S601",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda Kloral hidrat, Midazolam ve Ketamin sedasyon ajanlarının karakteristik özellikleri nelerdir?",
    "answer": "Midazolam: Kısa etkili benzodiazepin, anterograd amnezi yapar, antidotu Flumazenil; Ketamin: NMDA antagonisti, disosiyatif anestezi yapar, koruyucu yutkunma/öksürük reflekslerini baskılamaz ama tükürük salgısını ve kafa içi basıncı artırır.",
    "coreAnswer": "Midazolam: Kısa etkili benzodiazepin, anterograd amnezi yapar, antidotu Flumazenil",
    "keywords": [
      "Çocuklarda",
      "Kloral",
      "hidrat",
      "Midazolam",
      "Ketamin"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "İntrüzyon",
      "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür",
      "Midazolam: Kısa etkili benzodiazepin, anterograd amnezi yapar, antidotu Flumazenil"
    ],
    "correctIndex": 3
  },
  {
    "id": 602,
    "code": "S602",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Down Sendromu (Trizomi 21) olan çocuklarda görülen karakteristik oral ve dental bulgular nelerdir?",
    "answer": "Makroglossi ve fissürlü dil, maksiller hipoplazi (Sınıf III maloklüzyon ve açık kapanış), diş sürmesinde gecikme, konjenital diş eksiklikleri/mikrodonti, taurodontizm, şiddetli erken başlangıçlı periodontitis (nötrofil kemotaksis bozukluğu nedeniyle), ancak tükürük pH’ı ve bikarbonatı yüksek olduğu için diş çürüğü insidansı düşüktür!.",
    "coreAnswer": "Makroglossi ve fissürlü dil, maksiller hipoplazi",
    "keywords": [
      "Down",
      "Sendromu",
      "Trizomi",
      "çocuklarda",
      "görülen"
    ],
    "options": [
      "Ağız dışı",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi",
      "Distal Shoe"
    ],
    "correctIndex": 2
  },
  {
    "id": 603,
    "code": "S603",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Serebral Palsili (SP) çocuklarda en sık görülen dental problemler nelerdir?",
    "answer": "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü (disfaji), salya akması (sialore) ve gastroözofageal reflüye bağlı dental erozyon.",
    "coreAnswer": "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
    "keywords": [
      "Serebral",
      "Palsili",
      "çocuklarda",
      "görülen",
      "dental"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "Sırası: A – B – D – C – E",
      "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi"
    ],
    "correctIndex": 1
  },
  {
    "id": 604,
    "code": "S604",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Yenidoğan bebeklerin damak orta hattında görülen Epstein incileri ile alveol kreti üzerinde görülen Bohn nodülleri ve Dental lamina kistleri arasındaki fark nedir?",
    "answer": "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları; Bohn nodülleri: Bukkal/lingual alveol kretinde minör tükürük bezi artıkları; Dental lamina kistleri: Kret tepesinde Serres artıkları (Hepsi fizyolojiktir, birkaç haftada kendiliğinden dökülür, tedavi edilmez!).",
    "coreAnswer": "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
    "keywords": [
      "Yenidoğan",
      "bebeklerin",
      "damak",
      "orta",
      "hattında"
    ],
    "options": [
      "Epstein incileri: Midpalatal rafe boyunca sıkışmış epitel artıkları",
      "Süt pulpasındaki farklılaşmamış mezenkimal hücrelerin yüksek hücresel aktiviteyle odontoklastlara dönüşerek İnternal kök rezorpsiyonu oluşturması nedeniyle çürük ekspozlarında direkt kuafaj önerilmez!",
      "Alt çenede: Lingual Ark",
      "Midazolam: Kısa etkili benzodiazepin, anterograd amnezi yapar, antidotu Flumazenil"
    ],
    "correctIndex": 0
  },
  {
    "id": 605,
    "code": "S605",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Lesch-Nyhan Sendromu (HGPRT enzim eksikliği / hiperürisemi) ve Konjenital Ağrıya Duyarsızlık (CIPA) sendromu olan çocuklarda ağızda hangi dramatik tablo görülür?",
    "answer": "Self-mutilasyon (Kendi dudaklarını, dilini ve parmaklarını ısırma yoluyla ağır doku yıkımı).",
    "coreAnswer": "Self-mutilasyon",
    "keywords": [
      "Lesch",
      "Nyhan",
      "Sendromu",
      "HGPRT",
      "enzim"
    ],
    "options": [
      "Alt çenede: 6 – 1 – 2 – 3",
      "Anlat-Göster-Uygula",
      "Uzun süreli $\\text{Ca",
      "Self-mutilasyon"
    ],
    "correctIndex": 3
  },
  {
    "id": 606,
    "code": "S606",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda 2 yaş (13 kg) ve 4 yaş (18 kg) bir hastada %2’lik Lidokain (maksimum doz $4,4\\text{ mg/kg}$) kullanılırken bir ampulde ($1,8\\text{ mL}$) kaç mg lidokain vardır ve maksimum kaç ampul yapılabilir?",
    "answer": "%2’lik solüsyonda $20\\text{ mg/mL} \\times 1,8\\text{ mL} = \\mathbf{36\\text{ mg}}$ lidokain vardır; 13 kg çocukta maksimum $13 \\times 4,4 = 57,2\\text{ mg}$ (en fazla 1,5 ampul!) — Çocuklarda lokal anestezik toksisitesi (SSS eksitasyonu/konvülsiyon ardından depresyon) en sık aşırı dozdan kaynaklanır!.",
    "coreAnswer": "%2’lik solüsyonda $20\\text{ mg/mL} \\times 1,8\\text{ mL} = \\mathbf{36\\text{ mg}}$ lidokain vardır",
    "keywords": [
      "Çocuklarda",
      "hastada",
      "Lidokain",
      "maksimum",
      "text"
    ],
    "options": [
      "$<6$ yaş: Erken Çocukluk Çağı Çürüğü",
      "Makroglossi ve fissürlü dil, maksiller hipoplazi",
      "%2’lik solüsyonda $20\\text{ mg/mL} \\times 1,8\\text{ mL} = \\mathbf{36\\text{ mg}}$ lidokain vardır",
      "Hemen kanal tedavisi yapılmaz! Apikal açıklık geniş olduğu için spontan revaskülarizasyon"
    ],
    "correctIndex": 2
  },
  {
    "id": 607,
    "code": "S607",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Travma sonucu alveol kemiği kırığı olan hastada kırık hattı dişlerin apekslerinden geçiyorsa splintleme süresi kaç haftadır?",
    "answer": "4 hafta.",
    "coreAnswer": "4 hafta",
    "keywords": [
      "Travma",
      "alveol",
      "kemiği",
      "kırığı",
      "hastada"
    ],
    "options": [
      "Maksimum %50 $N_2O$ + en az %50 $O_2$ verilir",
      "4 hafta",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "Süt dişi amputasyonu"
    ],
    "correctIndex": 1
  },
  {
    "id": 608,
    "code": "S608",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Travma görmüş daimi bir dişte birkaç hafta sonra kuronun pembe renk alması, sarı renk alması veya gri-siyah renk alması hangi patolojileri gösterir?",
    "answer": "Pembe: İnternal rezorpsiyon (veya intrapulpal kanama); Sarı: Kalsifik metamorfoz (pulpa obliterasyonu); Gri-siyah: Pulpa nekrozu (Hemoglobinin yıkımı sonucu oluşan demir sülfür bileşiklerinin dentin tübüllerine girmesi).",
    "coreAnswer": "Pembe: İnternal rezorpsiyon",
    "keywords": [
      "Travma",
      "görmüş",
      "daimi",
      "dişte",
      "birkaç"
    ],
    "options": [
      "Pembe: İnternal rezorpsiyon",
      "Kontrolsüz kas hareketleri nedeniyle şiddetli bruksizm/atrisyon, üst kesici protrüzyonu ve yüksek dental travma riski, yutma güçlüğü",
      "İntrüzyon",
      "Gümüş iyonları güçlü antibakteriyeldir ve MMP’leri inhibe eder, yüksek florür"
    ],
    "correctIndex": 0
  },
  {
    "id": 609,
    "code": "S609",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Çocuklarda Aपेksifikasyon tedavisinde geleneksel $\\text{Ca(OH)}_2$ yöntemi (6–18 ay) ile Tek Seans MTA Apikal Tıkaç yöntemi karşılaştırıldığında $\\text{Ca(OH)}_2$’nin en önemli dezavantajı nedir?",
    "answer": "Uzun süreli $\\text{Ca(OH)}_2$ uygulaması dentin içindeki organik matriksi (kollajeni) протеolitik olarak zayıflattığı için servikal kök kırığı riskini (%50+) ciddi oranda artırır! (MTA apikal tıkaç ise tek/iki seansta bitirilir ve dişi güçlendirir).",
    "coreAnswer": "Uzun süreli $\\text{Ca",
    "keywords": [
      "Çocuklarda",
      "ksifikasyon",
      "tedavisinde",
      "geleneksel",
      "text"
    ],
    "options": [
      "Ağız dışı",
      "İnflamasyonun kök pulpasına da geçtiğini gösterir! Amputasyon kontrendikedir",
      "Distal Shoe",
      "Uzun süreli $\\text{Ca"
    ],
    "correctIndex": 3
  },
  {
    "id": 610,
    "code": "S610",
    "section": "KBT",
    "sectionTitle": "Klinik Bilimler Testi",
    "subjectId": "pedodonti",
    "subject": "Çocuk Diş Hekimliği / Pedodonti",
    "branchNumber": 16,
    "osymWeight": "10 Soru",
    "osymPercent": "12.5%",
    "question": "Sınav sabahı son kontrol: 120 soruluk DUS’ta 110+ net yapmak için optik kodlama ve turlama kuralı nedir?",
    "answer": "İlk turda 40 Temel Bilimler sorusu 28 dakikada ($\\sim 42\\text{ sn/soru}$), 80 Klinik Bilimler sorusu 62 dakikada ($\\sim 46\\text{ sn/soru}$) taranarak 90. dakikada ilk tur bitirilir; takılınan 15–18 vaka/öncüllü soruya 35 dakikalık ikinci turda dönülür ve son 25 dakika optik kontrolüne ayrılır.",
    "coreAnswer": "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
    "keywords": [
      "Sınav",
      "sabahı",
      "kontrol",
      "soruluk",
      "yapmak"
    ],
    "options": [
      "Kök labiale yönelmişse",
      "Sırası: A – B – D – C – E",
      "İlk turda 40 Temel Bilimler sorusu 28 dakikada",
      "İlk diş sürdüğünden 3 yaşına kadar: Pirinç tanesi"
    ],
    "correctIndex": 2
  }
];
