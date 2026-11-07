"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, X, ShieldCheck } from "lucide-react";

export default function DemoModal({
  isOpen,
  onClose,
  defaultProduct = "",
}: {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    roomCount: "1-3",
    product: defaultProduct || "jabra-panacast-50-vbs",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#141418] border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#FFD100]/20 text-[#FFD100] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Talebiniz Alındı!</h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
              Kurumsal video konferans uzmanımız en geç <strong>2 iş saati</strong> içinde sizinle iletişime geçerek toplantı odanız için demo cihaz planlamasını yapacaktır.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#FFD100] text-black font-bold text-sm rounded-full"
            >
              Kapat
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#FFD100] uppercase tracking-wider block">
                Kurumsal Toplantı Odası Çözümü
              </span>
              <h3 className="text-2xl font-black text-white">Ücretsiz Demo & Fiyat Teklifi</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Şirket toplantı odanızda Jabra PanaCast serisini ücretsiz test edin.
              </p>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">Ad Soyad *</label>
              <input
                required
                type="text"
                placeholder="Örn: Burak Yılmaz"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Şirket Adı *</label>
                <input
                  required
                  type="text"
                  placeholder="Şirket A.Ş."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Kurumsal E-posta *</label>
                <input
                  required
                  type="email"
                  placeholder="ad@sirketiniz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Telefon Numarası *</label>
                <input
                  required
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1">Oda Sayısı</label>
                <select
                  value={formData.roomCount}
                  onChange={(e) => setFormData({ ...formData, roomCount: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
                >
                  <option value="1">1 Oda</option>
                  <option value="2-4">2 - 4 Oda</option>
                  <option value="5-10">5 - 10 Oda</option>
                  <option value="10+">10+ Toplantı Odası (Büyük Proje)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">İlgilenilen Model</label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFD100]"
              >
                <option value="jabra-panacast-50-vbs">PanaCast 50 Video Bar System (Android)</option>
                <option value="jabra-panacast-50">PanaCast 50 Akıllı Video Bar (BYOD)</option>
                <option value="jabra-panacast-50-room-system">PanaCast 50 Room System (Windows)</option>
                <option value="jabra-panacast-40-vbs">PanaCast 40 VBS (Huddle Room)</option>
                <option value="jabra-panacast-20">PanaCast 20 (4K Kişisel AI Kamera)</option>
                <option value="jabra-panacast-meet-anywhere">Meet Anywhere Taşınabilir Paket</option>
                <option value="tumu">Tüm Sistemler İçin Keşif İstiyorum</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#FFD100] hover:bg-[#E6BC00] text-black font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-[#FFD100]/20 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Demo Talebini & Teklif İsteğini Gönder</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verileriniz KVKK kapsamında korunmakta ve gizli tutulmaktadır.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
