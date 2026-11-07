"use client";

import React, { useState } from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center group">
            <JabraLogo />
            <div className="h-5 w-[1px] bg-slate-200 mx-3"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight">
                PanaCast
              </span>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
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
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <Link
            href="/urunler"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            PanaCast Modelleri
          </Link>
          <a
            href="/#fov-simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            180° Görüş Simülatörü
          </a>
          <a
            href="/#ai-features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Yapay Zekâ Mimarisi
          </a>
          <Link
            href="/karsilastir"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Karşılaştırma
          </Link>
          <Link
            href="/demo-talep"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Kurumsal Keşif
          </Link>
          <div className="pt-2">
            <Link
              href="/demo-talep"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FFD100] text-slate-950 font-bold text-xs shadow-xs"
            >
              <span>Demo & Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
