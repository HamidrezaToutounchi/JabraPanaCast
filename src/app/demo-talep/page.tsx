"use client";

import React from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, CheckCircle2, PhoneCall, Mail } from "lucide-react";

export default function DemoTalepPage() {
  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-xs font-black text-amber-600 uppercase tracking-wider block">
              Kurumsal Demo ve Satış Masası
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Toplantı Odanızda <span className="text-amber-600">Ücretsiz Test Edin</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jabra PanaCast 180° video kalitesini kendi ofisinizde, kendi toplantı odanızda bizzat deneyimleyin. Uzman mühendislerimiz oda keşfini yapıp demo sistemini ücretsiz kurar.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Ücretsiz yerinde oda akustiği ve görüş açısı keşfi</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>1 hafta süreyle şirketinizde ücretsiz demo cihaz kullanımı</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Mevcut Teams, Zoom ve ekran sistemlerinize tam entegrasyon</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Doğrudan Jabra Türkiye Yetkili Distribütör kurumsal teklif avantajı</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 mt-6">
              <span className="text-xs font-black text-slate-900 block">Doğrudan İletişim:</span>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <a href="tel:08508500854" className="font-semibold hover:text-amber-600 transition-colors">
                  0850 850 08 54
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-amber-600" />
                <a href="mailto:destek@tescom.com.tr" className="font-semibold hover:text-amber-600 transition-colors">
                  destek@tescom.com.tr
                </a>
              </div>
            </div>
          </div>

          {/* Right: The Standardized Lead Form */}
          <div className="lg:col-span-7">
            <LeadForm
              defaultProduct="Jabra PanaCast 50 Video Bar System (VBS)"
              badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
