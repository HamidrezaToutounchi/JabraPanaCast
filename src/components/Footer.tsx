import React from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <JabraLogo />
              <div className="border-l border-slate-700 pl-3">
                <span className="text-white font-black text-lg tracking-tight block">PanaCast</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">180° Çözümleri</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Türkiye kurumsal toplantı odaları için patentli 180° Panoramik-4K akıllı video konferans sistemleri ve Jabra PanaCast serisi resmi çözüm merkezi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 border border-slate-700 p-2.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#FFD100] flex-shrink-0" />
              <span>Microsoft Teams Rooms & Zoom Sertifikalı Çözümler</span>
            </div>
          </div>

          {/* PanaCast Family */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              PanaCast Ürün Ailesi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/urunler/jabra-panacast-50-vbs" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Video Bar System (Android)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-50" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Akıllı Video Bar (BYOD)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-50-room-system" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 Room System (Windows)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-40-vbs" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 40 VBS (Huddle Room)
                </Link>
              </li>
              <li>
                <Link href="/urunler/jabra-panacast-20" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 20 (4K Edge AI Kişisel Kamera)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links & Tech */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Teknoloji & Rehber
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#fov-simulator" className="hover:text-[#FFD100] transition-colors">
                  120° vs 180° Görüş Açısı Simülatörü
                </a>
              </li>
              <li>
                <a href="/#ai-features" className="hover:text-[#FFD100] transition-colors">
                  Dynamic Composition & Virtual Director
                </a>
              </li>
              <li>
                <Link href="/karsilastir" className="hover:text-[#FFD100] transition-colors">
                  BYOD vs Android vs Windows Karşılaştırması
                </Link>
              </li>
              <li>
                <Link href="/demo-talep" className="hover:text-[#FFD100] transition-colors">
                  Toplantı Odanız İçin Ücretsiz Keşif
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Kurumsal İletişim
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">0850 300 JABRA (5227)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">kurumsal@jabrapanacast.com.tr</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD100] mt-0.5" />
                <span>İstanbul / Maslak & Ankara Bölge Ofisi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} jabrapanacast.com.tr — Tüm hakları saklıdır. Jabra GN Audio tescilli markasıdır.</p>
          <div className="flex space-x-6 text-slate-500">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
            <span>Garanti & Destek</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
