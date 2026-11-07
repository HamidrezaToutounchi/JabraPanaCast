import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Play, CheckCircle2, Video } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/25 to-white pt-12 pb-20 border-b border-slate-200">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-200/25 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 shadow-sm text-xs font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-amber-600 font-black">Patentli 3 Kameralı Teknoloji</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Kör Noktasız 180° Toplantı Deneyimi</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            180° Panoramik-4K Video Teknolojisi ile Toplantı Odasındaki{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Herkesi Kareye Dahil Edin
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Geleneksel kameraların kör noktasında kalan katılımcılara son. Üç adet 13MP lens ve patentli gerçek zamanlı video birleştirme ile duvardan duvara kusursuz kapsama.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/demo-talep"
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-amber-400/25 flex items-center justify-center gap-3"
          >
            <span>Ücretsiz Demo / Teklif İste</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/karsilastir"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-8 py-4 rounded-full border border-slate-300 shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Modelleri Karşılaştır</span>
          </Link>
          <a
            href="#fov-simulator"
            className="w-full sm:w-auto text-slate-600 hover:text-amber-600 text-sm font-bold px-4 py-2 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Play className="w-4 h-4 fill-current text-amber-500" />
            <span>180° Simülatörü Gör</span>
          </a>
        </div>

        {/* Hero Showcase Centerpiece Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl p-3 bg-gradient-to-b from-amber-200/50 via-slate-200/40 to-slate-100/50 backdrop-blur-xl border border-slate-200 shadow-2xl">
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-inner">
            {/* Corner Badges */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Microsoft Teams Rooms Certified</span>
            </div>
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Zoom Rooms Certified</span>
            </div>

            {/* Product Centerpiece */}
            <div className="relative my-6 flex justify-center items-center">
              <img
                src="https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png"
                alt="Jabra PanaCast 50 Video Bar System"
                className="max-h-[340px] w-auto object-contain drop-shadow-2xl filter transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Product label footer */}
            <div className="pt-6 border-t border-slate-100 mt-6 flex flex-wrap items-center justify-between gap-4 text-left">
              <div>
                <span className="text-[11px] font-black text-amber-600 uppercase tracking-widest block">Öne Çıkan Sistem</span>
                <h3 className="text-xl font-black text-slate-900">Jabra PanaCast 50 Video Bar System (VBS)</h3>
                <p className="text-xs text-slate-500 mt-0.5">Dahili Android işlemci + 10.1 inç PanaCast Control dokunmatik masa paneli</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>3x 13MP 180° Lens</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>8 Mikrofon & 4 Hoparlör</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tek Dokunuşla Başlatma</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature stats counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-14 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-slate-900">180°</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Tam Görüş Açısı (Kör Noktasız)</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-amber-600">3840×1080</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Panoramik 4K Çözünürlük</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-slate-900">8 Adet</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Beamforming Akıllı Mikrofon</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl font-black text-emerald-600">%100</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Oda Katılımcı Kapsaması</div>
          </div>
        </div>
      </div>
    </section>
  );
}
