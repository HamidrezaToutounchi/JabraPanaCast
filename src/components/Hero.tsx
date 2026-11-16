import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Play, CheckCircle2, Video } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/25 to-white pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-slate-200">
      {/* Background glow effects - bounded */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[200px] sm:h-[300px] bg-amber-200/25 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top pill badge */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-amber-300 shadow-xs text-[11px] sm:text-xs font-bold text-slate-800 text-center flex-wrap justify-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping flex-shrink-0" />
            <span className="text-amber-700 font-black">Patentli 3 Kameralı Teknoloji</span>
            <span className="hidden xs:inline text-slate-300">|</span>
            <span className="hidden xs:inline text-slate-600">Kör Noktasız 180° Toplantı</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-snug sm:leading-[1.15] break-words">
            180° Panoramik-4K Video Teknolojisi ile Toplantı Odasındaki{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Herkesi Kareye Dahil Edin
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Geleneksel kameraların kör noktasında kalan katılımcılara son. Üç adet 13MP lens ve patentli gerçek zamanlı video birleştirme ile duvardan duvara kusursuz kapsama.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <Link
            href="/demo-talep"
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 text-center"
          >
            <span>Ücretsiz Demo / Teklif İste</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="/karsilastir"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>Modelleri Karşılaştır</span>
          </Link>
          <a
            href="#fov-simulator"
            className="w-full sm:w-auto text-slate-600 hover:text-amber-600 text-xs sm:text-sm font-bold px-4 py-2 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>180° Simülatörü Gör</span>
          </a>
        </div>

        {/* Hero Showcase Centerpiece Card */}
        <div className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-amber-200/50 via-slate-200/40 to-slate-100/50 backdrop-blur-xl border border-slate-200 shadow-xl sm:shadow-2xl">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-200 p-4 sm:p-8 lg:p-12 text-center shadow-inner">
            {/* Corner Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] sm:text-xs font-bold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Teams Rooms Sertifikalı</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] sm:text-xs font-bold text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Zoom Rooms Sertifikalı</span>
              </div>
            </div>

            {/* Product Centerpiece */}
            <div className="relative my-4 sm:my-6 flex justify-center items-center">
              <img
                src="https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png"
                alt="Jabra PanaCast 50 Video Bar System"
                className="max-h-[180px] sm:max-h-[300px] w-auto max-w-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Product label footer */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 mt-4 sm:mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
              <div>
                <span className="text-[10px] sm:text-[11px] font-black text-amber-600 uppercase tracking-widest block">Öne Çıkan Sistem</span>
                <h3 className="text-base sm:text-xl font-black text-slate-900">Jabra PanaCast 50 Video Bar System (VBS)</h3>
                <p className="text-xs text-slate-500 mt-0.5">Dahili Android işlemci + 10.1 inç PanaCast Control dokunmatik masa paneli</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>3x 13MP 180° Lens</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>8 Mikrofon & 4 Hoparlör</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature stats counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-14 text-center">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">180°</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Tam Görüş Açısı</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-amber-600">4K</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Panoramik Çözünürlük</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">8 Adet</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Akıllı Mikrofon</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">%100</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Oda Kapsaması</div>
          </div>
        </div>
      </div>
    </section>
  );
}
