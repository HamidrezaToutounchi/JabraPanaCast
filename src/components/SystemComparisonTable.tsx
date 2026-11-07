import React from "react";
import Link from "next/link";
import { Laptop, Tablet, Cpu, ArrowRight } from "lucide-react";

export default function SystemComparisonTable() {
  const comparisons = [
    {
      feature: "İşletim Mimarisi",
      byod: "Kendi Cihazını Getir (Kullanıcı Laptopu)",
      android: "Dahili Bağımsız Android (Qualcomm Çip)",
      windows: "Lenovo ThinkSmart Core (Windows 11 IoT)",
    },
    {
      feature: "Toplantı Başlatma Şekli",
      byod: "Laptop USB kablosunu takarak başlatma",
      android: "10.1\" PanaCast Control tek dokunuş (One-Touch)",
      windows: "10.1\" ThinkSmart Controller tek dokunuş",
    },
    {
      feature: "Platform Uyumluluğu",
      byod: "Tüm UC Platformları (Zoom, Teams, Google, Webex)",
      android: "MTR on Android, Zoom Rooms",
      windows: "MTR on Windows, Zoom Rooms",
    },
    {
      feature: "Masa Kontrol Tableti",
      byod: "Opsiyonel (Laptop üzerinden kontrol)",
      android: "Dahil (10.1\" PanaCast Control PoE)",
      windows: "Dahil (10.1\" ThinkSmart Controller)",
    },
    {
      feature: "Harici Bilgisayar İhtiyacı",
      byod: "Gerekli (Kullanıcının laptopu kullanılır)",
      android: "GEREKMEZ (Bağımsız All-in-One)",
      windows: "Kutuya Dahil ThinkSmart Core Mini PC",
    },
    {
      feature: "Intelligent Speaker (Ses Tanıma)",
      byod: "Temel ses aktarımı",
      android: "Destekleniyor",
      windows: "Maksimum Destek (10 kişiye kadar ses kimliği)",
    },
    {
      feature: "İdeal Toplantı Alanı",
      byod: "Esnek Odalar & BYOD Odak Alanları",
      android: "Küçük, Orta ve Standart Kurumsal Odalar",
      windows: "Büyük Kurumsal Odalar & Yönetim Kurulları",
    },
    {
      feature: "Merkezi IT Bulut Yönetimi",
      byod: "Jabra Direct & Jabra Xpress",
      android: "Jabra+ & Teams Admin Center / Zoom ZDM",
      windows: "Jabra+ & Lenovo ThinkSmart Manager + TAC",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-2">
            IT Yöneticileri ve Satın Alma Rehberi
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            BYOD vs. Android (VBS) vs. Windows (Room System)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Odanızın altyapısına ve toplantı platformu tercihinize göre en doğru PanaCast 50 modelini belirleyin.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/70">
                <th className="p-5 font-bold text-slate-500 w-1/4">Özellikler</th>
                <th className="p-5 font-black text-slate-900 w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <Laptop className="w-4 h-4 text-amber-600" />
                    <span className="text-base text-slate-900">PanaCast 50 (BYOD)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal block">USB Tak-Çalıştır Video Bar</span>
                </th>
                <th className="p-5 font-black text-slate-900 w-1/4 bg-amber-50/60 border-x border-amber-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Tablet className="w-4 h-4 text-amber-600" />
                    <span className="text-base text-amber-700">PanaCast 50 VBS</span>
                  </div>
                  <span className="text-[11px] text-slate-600 font-normal block">Android + Dokunmatik Tablet</span>
                </th>
                <th className="p-5 font-black text-slate-900 w-1/4">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-4 h-4 text-amber-600" />
                    <span className="text-base text-slate-900">PanaCast 50 Room System</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-normal block">Lenovo ThinkSmart + Windows</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/50 text-xs sm:text-sm">
                    {row.feature}
                  </td>
                  <td className="p-4 text-xs sm:text-sm text-slate-600">
                    {row.byod}
                  </td>
                  <td className="p-4 text-xs sm:text-sm text-slate-900 font-semibold bg-amber-50/40 border-x border-amber-200">
                    {row.android}
                  </td>
                  <td className="p-4 text-xs sm:text-sm text-slate-600">
                    {row.windows}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 border-t border-slate-200">
                <td className="p-5 text-xs text-slate-500 font-bold">Detay & Teklif:</td>
                <td className="p-5">
                  <Link
                    href="/urunler/jabra-panacast-50"
                    className="text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
                <td className="p-5 bg-amber-50/60 border-x border-amber-200">
                  <Link
                    href="/urunler/jabra-panacast-50-vbs"
                    className="text-xs font-black text-amber-700 hover:underline flex items-center gap-1"
                  >
                    <span>İncele (En Popüler)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
                <td className="p-5">
                  <Link
                    href="/urunler/jabra-panacast-50-room-system"
                    className="text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
