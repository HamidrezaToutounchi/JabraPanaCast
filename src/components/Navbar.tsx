"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { Menu, X, ArrowRight, ChevronRight, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <JabraLogo />
            <div className="h-5 w-[1px] bg-slate-200 mx-2.5 sm:mx-3"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight">
                PanaCast
              </span>
              <span className="hidden xs:inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                180° 4K
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/urunler"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              PanaCast Modelleri
            </Link>
            <a
              href="/#fov-simulator"
              className="text-[13px] font-semibold text-slate-600 hover:text-amber-600 transition-colors whitespace-nowrap"
            >
              180° Görüş Simülatörü
            </a>
            <a
              href="/#ai-features"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Yapay Zekâ Mimarisi
            </a>
            <Link
              href="/karsilastir"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Karşılaştırma
            </Link>
            <Link
              href="/demo-talep"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Kurumsal Keşif
            </Link>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demo-talep"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFD100] hover:bg-[#FACC15] text-slate-950 font-bold text-xs tracking-wide shadow-xs border border-amber-400/40 transition-all hover:shadow-sm whitespace-nowrap"
            >
              <span>Demo & Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/demo-talep"
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#FFD100] text-slate-950 font-black text-[11px] shadow-xs whitespace-nowrap"
            >
              Teklif Al
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-4 space-y-1 shadow-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <Link
            href="/urunler"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50/60 rounded-xl transition-colors border-b border-slate-100"
          >
            <span>PanaCast Modelleri</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <a
            href="/#fov-simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50/60 rounded-xl transition-colors border-b border-slate-100"
          >
            <span>180° Görüş Simülatörü</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <a
            href="/#ai-features"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50/60 rounded-xl transition-colors border-b border-slate-100"
          >
            <span>Yapay Zekâ Mimarisi</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>
          <Link
            href="/karsilastir"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50/60 rounded-xl transition-colors border-b border-slate-100"
          >
            <span>Sistem Karşılaştırma</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link
            href="/demo-talep"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50/60 rounded-xl transition-colors"
          >
            <span>Kurumsal Keşif ve Demo</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>

          <div className="pt-3 space-y-2">
            <Link
              href="/demo-talep"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#FFD100] text-slate-950 font-black text-sm shadow-md"
            >
              <span>Ücretsiz Demo & Teklif İste</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
