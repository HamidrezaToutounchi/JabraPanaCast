"use client";

import React, { useState } from "react";
import { Eye, AlertTriangle, CheckCircle, ShieldAlert, Sparkles, Layers } from "lucide-react";

export default function FovSimulator() {
  const [fov, setFov] = useState<number>(180);

  const isPanaCast = fov >= 170;
  const halfFov = fov / 2;

  const participants = [
    { id: 1, name: "Ahmet B.", role: "Pazarlama Müdürü", angle: -78, pos: "Sol En Köşe" },
    { id: 2, name: "Zeynep K.", role: "Ürün Yöneticisi", angle: -45, pos: "Sol Masa" },
    { id: 3, name: "Can D.", role: "Yazılım Mimarı", angle: -15, pos: "Sol Merkez" },
    { id: 4, name: "Merve Y.", role: "Tasarım Lideri", angle: 18, pos: "Sağ Merkez" },
    { id: 5, name: "Burak S.", role: "Finans Direktörü", angle: 48, pos: "Sağ Masa" },
    { id: 6, name: "Selin T.", role: "İK Direktörü", angle: 77, pos: "Sağ En Köşe" },
  ];

  return (
    <section id="fov-simulator" className="py-14 sm:py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>İnteraktif Görüş Açısı Deneyimi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
            Standart 120° Kamera vs. <span className="text-amber-600">180° Jabra PanaCast</span>
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-base">
            Geleneksel web kameraları ve video barlar dar açıları nedeniyle masanın köşelerinde oturanları keser. Kaydırıcıyı çekerek aradaki farkı anında görün.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-lg sm:shadow-xl">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 pb-6 sm:pb-8 border-b border-slate-100">
            <div>
              <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold block mb-1">
                Kamera Görüş Açısı (FOV)
              </span>
              <div className="flex items-center gap-3">
                <span className={`text-3xl sm:text-4xl font-black ${isPanaCast ? "text-amber-600" : "text-amber-500"}`}>
                  {fov}°
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  {fov <= 120 ? "Geleneksel Dar Açı" : fov < 180 ? "Geniş Açı" : "Jabra 180° Panoramik"}
                </span>
              </div>
            </div>

            {/* Slider */}
            <div className="w-full md:w-96 flex flex-col gap-2">
              <div className="flex justify-between text-xs text-slate-500 font-bold">
                <span>120° Standart</span>
                <span>150°</span>
                <span className="text-amber-600 font-black">180° PanaCast</span>
              </div>
              <input
                type="range"
                min={120}
                max={180}
                step={5}
                value={fov}
                onChange={(e) => setFov(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FFD100]"
              />
            </div>

            {/* Quick Toggle Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFov(120)}
                className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  fov === 120 ? "bg-red-50 text-red-600 border border-red-200" : "bg-slate-100 text-slate-600 hover:text-slate-900"
                }`}
              >
                120° Standart
              </button>
              <button
                onClick={() => setFov(180)}
                className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  fov === 180 ? "bg-[#FFD100] text-slate-950 shadow-md shadow-amber-400/20" : "bg-slate-100 text-slate-600 hover:text-slate-900"
                }`}
              >
                180° PanaCast
              </button>
            </div>
          </div>

          {/* Interactive Visual Stage */}
          <div className="relative mt-8 min-h-[420px] bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden flex flex-col justify-between">
            {/* Top Camera Sensor Simulation */}
            <div className="relative flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-800 font-bold shadow-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${isPanaCast ? "bg-amber-500 animate-pulse" : "bg-red-500"}`} />
                <span>
                  {isPanaCast ? "Jabra PanaCast (3x 13MP Real-time Stitching)" : "120° Tek Lens Standart Video Bar"}
                </span>
              </div>
              {/* Camera device icon */}
              <div className="w-32 h-6 mt-3 bg-slate-900 rounded-md flex items-center justify-around px-2 shadow-md">
                {isPanaCast ? (
                  <>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" title="Kamera 1 (Sol)" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" title="Kamera 2 (Orta)" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFD100]" title="Kamera 3 (Sağ)" />
                  </>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-red-400" title="Tek Kamera" />
                )}
              </div>
            </div>

            {/* Field of View Cone Visualization */}
            <div className="relative w-full max-w-3xl mx-auto my-6 flex flex-col items-center">
              {/* Meeting Table Simulation */}
              <div className="w-full bg-white border border-slate-200 rounded-3xl p-6 relative shadow-md">
                <div className="text-center text-[11px] text-slate-400 uppercase tracking-widest font-black mb-4">
                  Toplantı Masası ve Katılımcılar
                </div>

                {/* 6 Participants grid */}
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                  {participants.map((person) => {
                    const isVisible = Math.abs(person.angle) <= halfFov;
                    return (
                      <div
                        key={person.id}
                        className={`p-3 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                          isVisible
                            ? "bg-amber-50/40 border-amber-300 shadow-sm scale-100"
                            : "bg-red-50/50 border-red-200 opacity-40 grayscale"
                        }`}
                      >
                        {/* Avatar */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm mb-2 ${
                            isVisible
                              ? "bg-[#FFD100] text-slate-950 shadow-sm"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </div>

                        <span className="text-xs font-black text-slate-900 truncate max-w-full">{person.name}</span>
                        <span className="text-[10px] text-slate-500 truncate max-w-full">{person.role}</span>
                        <span className="text-[9px] text-slate-400 mt-1">{person.pos}</span>

                        {/* Status badge */}
                        <div className="mt-2">
                          {isVisible ? (
                            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              Net Görünür
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] text-red-700 font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                              <AlertTriangle className="w-3 h-3 text-red-600" />
                              Kör Nokta!
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom summary stats */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900">Sonuç:</span>
                {fov < 170 ? (
                  <span className="text-red-600 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    2 Katılımcı (Ahmet B. ve Selin T.) kör noktada kaldı! Kadraj dışındalar.
                  </span>
                ) : (
                  <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    6/6 Katılımcı (%100) masadaki yeri fark etmeksizin net ve eşit kadrajda!
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500">
                Teknoloji: <span className="text-slate-800 font-bold">Patentli Gerçek Zamanlı 180° Video Birleştirme (Stitching)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
