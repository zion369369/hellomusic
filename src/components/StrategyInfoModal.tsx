"use client";

import React from "react";
import { X, Sparkles, Trophy, Clock, Layers } from "lucide-react";

interface StrategyInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StrategyInfoModal({ isOpen, onClose }: StrategyInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 font-bold">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                DUS %80 Ortak Soru & Turlama Stratejisi
              </h2>
              <p className="text-xs text-slate-400">
                ÖSYM Sınav Formatı ve 110+ Net Hedef Klavuzu
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: %80 Ortak Soru Mantığı */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> %80 Ortak Soru Prensibi
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl">
            Diş Hekimliğinde Uzmanlık Sınavı (DUS), her yıl aynı temel fizyopatolojik mekanizmaları, kritik anatomik kanalları, ilaç antidotlarını, mikrobiyolojik etkenleri ve klinik protokolleri test eder. Bu uygulamadaki <strong>610 soru</strong>, geçmiş yılların ve güncel tıp literatürünün en sık sorulan <strong>%80 ortak çekirdek soru havuzunu</strong> oluşturur. Bu soruları tam kavrayan bir aday, sınavda 96+ net (%80 eşiği) barajını rahatlıkla aşabilir.
          </p>
        </div>

        {/* Section 2: S610 Turlama Kuralı */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> S610 Altın Kural: Turlama ve Optik Zaman Yönetimi
          </h3>
          <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-2xl space-y-2 text-xs sm:text-sm text-amber-200 leading-relaxed">
            <p>
              <strong>1. Tur (İlk 90 Dakika):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-slate-300 text-xs">
              <li><strong>40 Temel Bilimler (TBT):</strong> 28 dakikada taranır (~42 saniye/soru).</li>
              <li><strong>80 Klinik Bilimler (KBT):</strong> 62 dakikada taranır (~46 saniye/soru).</li>
            </ul>
            <p className="pt-1">
              <strong>2. Tur (35 Dakika):</strong> İlk turda işaret konulan ve zaman alacak 15–18 vaka / öncüllü soruya odaklanılır.
            </p>
            <p className="pt-1">
              <strong>Optik Kontrol (Son 25 Dakika):</strong> Kaydırma hatasını önlemek ve optik formun son kontrollerini yapmak için ayrılır.
            </p>
          </div>
        </div>

        {/* Section 3: Soru Dağılım Tablosu */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4" /> 16 ÖSYM Branşı ve Soru Sayıları
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Anatomi</span>
              <strong className="text-white">6 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Fizyoloji</span>
              <strong className="text-white">6 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Biyokimya</span>
              <strong className="text-white">6 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Mikrobiyoloji</span>
              <strong className="text-white">6 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Histoloji</span>
              <strong className="text-white">4 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Patoloji</span>
              <strong className="text-white">4 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Farmakoloji</span>
              <strong className="text-white">4 Soru</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Biyoloji / Genetik</span>
              <strong className="text-white">4 Soru</strong>
            </div>
            <div className="col-span-2 sm:col-span-4 p-2.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-center text-indigo-300">
              <strong>Klinik Bilimler (8 Branş):</strong> Protetik, Restoratif, Çene Cerrahisi, Çene Radyolojisi, Periodontoloji, Ortodonti, Endodonti, Pedodonti (Her biri <strong>10 Soru</strong>, Toplam <strong>80 Soru</strong>).
            </div>
          </div>
        </div>

        {/* Modal Close CTA */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition"
          >
            Anladım, Çalışmaya Başla
          </button>
        </div>
      </div>
    </div>
  );
}
