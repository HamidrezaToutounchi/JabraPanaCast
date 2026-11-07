import React from "react";
import Link from "next/link";
import SystemComparisonTable from "@/components/SystemComparisonTable";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "PanaCast Sistem Karşılaştırması — BYOD vs Android VBS vs Windows",
  description:
    "Jabra PanaCast 50 BYOD, PanaCast 50 VBS ve PanaCast 50 Room System modellerini teknik ve kullanım mimarilerine göre karşılaştırın.",
};

export default function ComparePage() {
  return (
    <div className="py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Comparison Table */}
        <SystemComparisonTable />

        {/* Decision Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg font-black text-slate-900 mb-2">Ne Zaman BYOD Seçmelisiniz?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Çalışanlarınız farklı toplantı yazılımlarını sıklıkla kendi laptoplarından başlatıyorsa ve sabit oda lisansı ödemek istemiyorsanız PanaCast 50 BYOD en esnek çözümdür.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-amber-400 shadow-md">
            <h4 className="text-lg font-black text-amber-700 mb-2">Ne Zaman Android VBS Seçmelisiniz?</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              MTR on Android veya Zoom Rooms altyapısı kullanıyorsanız, laptop bağlama derdi olmadan 10.1 inç tablete tek dokunuşla toplantı başlatmak istiyorsanız en ideal modeldir.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg font-black text-slate-900 mb-2">Ne Zaman Windows Room System?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kurumunuz Windows 11 IoT kurumsal güvenlik ilkelerini zorunlu tutuyorsa veya Intelligent Speaker ile 10 kişiye kadar ses kimliği tanıma gerekiyorsa tercih edilmelidir.
            </p>
          </div>
        </div>

        {/* Standard Form */}
        <div className="max-w-4xl mx-auto">
          <LeadForm
            defaultProduct="Jabra PanaCast Karşılaştırma & Teklif Talebi"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </div>
    </div>
  );
}
