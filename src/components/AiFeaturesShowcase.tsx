"use client";

import React, { useState } from "react";
import { Sparkles, Users, Video, Square, Presentation, CheckCircle2 } from "lucide-react";

export default function AiFeaturesShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      id: "dynamic-composition",
      title: "Dynamic Composition",
      subtitle: "Son 4 Konuşmacıya Akıllı Bölünmüş Kadraj",
      icon: Users,
      tag: "Hibrit Eşitlik (Meeting Equity)",
      description:
        "Toplantı odasında kimin konuştuğunu cihaz içi yapay zeka ile anında tespit eder. En son konuşan 4 katılımcıyı otomatik olarak tek tek yakın plana alarak bölünmüş ekranda eşit büyüklükte uzaktaki katılımcılara sunar.",
      benefits: [
        "Uzaktaki çalışanların mimikleri ve yüz ifadelerini net görmesini sağlar",
        "Büyük odalarda kimin konuştuğu karmaşasını ortadan kaldırır",
        "Microsoft Teams ve Zoom çoklu video akışlarıyla (Multi-Stream) yerel uyumludur",
        "Bilgisayar işlemcisi yerine doğrudan video barın dahili Edge AI işlemcisinde çalışır",
      ],
      previewType: "composition",
    },
    {
      id: "virtual-director",
      title: "Virtual Director & Intelligent Zoom",
      subtitle: "Konuşmacıyı Akıllı Takip ve Yumuşak Geçiş",
      icon: Video,
      tag: "Akıllı Yönetmen",
      description:
        "Odadaki ses ve yüz hareketlerini harmanlayan sanal yönetmen. Konuşmacı ayağa kalkıp beyaz tahtaya yürüdüğünde veya masada başka biri söze girdiğinde kadrajı sarsıntısız, sinematik bir yumuşaklıkla kaydırır.",
      benefits: [
        "Robotik veya ani sarsıntılı kamera hareketleri içermez",
        "Mekanik motor gerektirmeyen (PTZ'siz) dijital kayıpsız yakınlaştırma",
        "Konuşmacının vücut dilini ve doğal sunum akışını korur",
        "Tekli veya çoklu katılımcı sayısına göre kadrajı anlık genişletip daraltır",
      ],
      previewType: "director",
    },
    {
      id: "meeting-space",
      title: "Intelligent Meeting Space",
      subtitle: "Cam Duvarlı Odalarda Sanal Sınır Belirleme",
      icon: Square,
      tag: "Cam Oda Koruması",
      description:
        "Modern cam duvarlı veya açık ofis toplantı odalarında, odanın dışındaki koridordan geçen kişilerin yanlışlıkla kadraja girmesini önler. Jabra Direct veya PanaCast Control üzerinden odanın sanal sınırlarını çizin; kamera sadece oda içindekileri takip etsin.",
      benefits: [
        "Koridordan geçen çalışma arkadaşlarının kamerayı tetiklemesini engeller",
        "Cam toplantı odalarında %100 gizlilik ve odaklanma sağlar",
        "Basit dokunmatik arayüzle sınırları metre cinsinden belirleme imkanı",
        "Akıllı güvenlik duvarı mantığıyla oda içi yapay zeka sınırlandırması",
      ],
      previewType: "space",
    },
    {
      id: "live-whiteboard",
      title: "Canlı Beyaz Tahta & Kişi Sayımı",
      subtitle: "Eşzamanlı Çift Video Akışı ve Oda Kapasite Takibi",
      icon: Presentation,
      tag: "Çift Akış & Güvenlik",
      description:
        "Fiziksel beyaz tahtanızı ikinci bir video akışı olarak toplantıya aktarır. Tahtadaki parlamaları, ışık yansımalarını ve yazan kişinin kolunun gölgesini gerçek zamanlı temizleyerek içeriği dijital bir doküman gibi netleştirir. Aynı anda odadaki kişi sayısını anonim olarak raporlar.",
      benefits: [
        "Ayrı bir whiteboard kamerası satın alma ihtiyacını ortadan kaldırır",
        "Aynı anda hem katılımcıları hem de beyaz tahtayı iki ayrı pencerede sunar",
        "Oda kapasitesi aşıldığında IT yöneticilerine ve ekrana anlık uyarı iletir",
        "GDPR uyumlu, yüz tanıma yapmayan %100 anonim veri toplama",
      ],
      previewType: "whiteboard",
    },
  ];

  const current = features[activeTab];

  return (
    <section id="ai-features" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-amber-800 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Dahili 9 Edge AI İşlemcisi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Gelişmiş Yapay Zeka Özellikleri ile{" "}
            <span className="text-amber-600">Akıllı Toplantı Odaları</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Jabra PanaCast 50, oda içindeki her hareketi ve sesi işleyen güçlü yapay zeka algoritmalarıyla toplantı deneyimini tamamen otomatikleştirir.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-amber-50/60 border-amber-400 shadow-md scale-[1.02]"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? "bg-[#FFD100] text-slate-950 font-black" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-amber-200 text-amber-900" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">{feat.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{feat.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black text-amber-900">
                {current.tag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                {current.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Kurumsal Avantajlar:
                </span>
                {current.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Preview Visualization */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 relative overflow-hidden shadow-md min-h-[340px] flex flex-col justify-center">
                {current.previewType === "composition" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Dynamic Composition Çoklu Akış Görünümü</span>
                      <span className="text-emerald-600 font-bold text-[11px]">Canlı 4K 4-Split</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="relative aspect-video bg-amber-50 rounded-lg border-2 border-amber-400 p-2 flex flex-col justify-end overflow-hidden shadow-sm">
                        <div className="absolute top-2 left-2 text-[10px] bg-slate-900 text-white px-1.5 py-0.5 rounded font-bold">
                          Ahmet B. (Konuşuyor)
                        </div>
                        <div className="w-full h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="relative aspect-video bg-slate-100 rounded-lg border border-slate-200 p-2 flex flex-col justify-end">
                        <div className="absolute top-2 left-2 text-[10px] bg-slate-800 text-white px-1.5 py-0.5 rounded">Zeynep K.</div>
                      </div>
                      <div className="relative aspect-video bg-slate-100 rounded-lg border border-slate-200 p-2 flex flex-col justify-end">
                        <div className="absolute top-2 left-2 text-[10px] bg-slate-800 text-white px-1.5 py-0.5 rounded">Merve Y.</div>
                      </div>
                      <div className="relative aspect-video bg-slate-100 rounded-lg border border-slate-200 p-2 flex flex-col justify-end">
                        <div className="absolute top-2 left-2 text-[10px] bg-slate-800 text-white px-1.5 py-0.5 rounded">Burak S.</div>
                      </div>
                    </div>
                  </div>
                )}

                {current.previewType === "director" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Virtual Director Odak Takip Kadrajı</span>
                      <span className="text-amber-600 text-[11px] font-black">Gerçek Zamanlı AI Tracking</span>
                    </div>
                    <div className="relative h-48 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-40 flex justify-between px-6 items-center text-xs text-slate-400">
                        <span>Sol Masa</span>
                        <span>Orta Masa</span>
                        <span>Sağ Masa</span>
                      </div>
                      <div className="relative z-10 w-44 h-36 border-2 border-amber-400 rounded-lg bg-amber-100/60 flex flex-col items-center justify-center p-3 shadow-md">
                        <div className="w-12 h-12 rounded-full bg-[#FFD100] text-slate-950 font-black flex items-center justify-center text-sm mb-2 shadow-sm">
                          AY
                        </div>
                        <span className="text-xs font-black text-slate-900">Aktif Konuşmacı</span>
                        <span className="text-[10px] text-amber-800 font-bold">AI Focus %100 Net</span>
                      </div>
                    </div>
                  </div>
                )}

                {current.previewType === "space" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Intelligent Meeting Space Sanal Sınır</span>
                      <span className="text-blue-600 text-[11px] font-bold">Boundary Active (4.5m)</span>
                    </div>
                    <div className="relative h-48 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center p-4">
                      <div className="w-4/5 h-full border-2 border-dashed border-amber-500 rounded-xl flex items-center justify-center relative bg-amber-50/50">
                        <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-amber-700 uppercase border border-amber-200 rounded">
                          Sanal Toplantı Sınırı
                        </span>
                        <div className="text-center">
                          <Users className="w-8 h-8 text-amber-600 mx-auto mb-1" />
                          <span className="text-xs font-bold text-slate-800 block">Toplantı Masası Katılımcıları</span>
                          <span className="text-[10px] text-emerald-700 font-bold">Dışarıdaki Hareketler Filtrelenir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {current.previewType === "whiteboard" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800">Canlı Whiteboard Çift Akış</span>
                      <span className="text-emerald-700 text-[11px] font-bold">Parlama & Gölge Giderildi</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-48">
                      <div className="bg-slate-100 rounded-xl border border-slate-200 p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-slate-600">Akış 1: Katılımcılar</span>
                        <div className="flex justify-center items-center h-24">
                          <Users className="w-10 h-10 text-slate-400" />
                        </div>
                        <span className="text-[9px] text-slate-500">180° Panoramik 4K</span>
                      </div>
                      <div className="bg-white rounded-xl border-2 border-amber-400 p-3 text-slate-900 flex flex-col justify-between shadow-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-900">Akış 2: Canlı Beyaz Tahta</span>
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        </div>
                        <div className="font-mono text-xs font-bold text-blue-900 leading-tight">
                          Q3 Hedefleri: <br />
                          1. PanaCast 50 VBS <br />
                          2. %100 Oda Katılımı <br />
                          3. Sıfır Kör Nokta
                        </div>
                        <span className="text-[9px] text-slate-500">Yapay zeka netleştirme aktif</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
