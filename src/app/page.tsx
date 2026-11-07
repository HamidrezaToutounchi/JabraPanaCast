import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import FovSimulator from "@/components/FovSimulator";
import AiFeaturesShowcase from "@/components/AiFeaturesShowcase";
import SystemComparisonTable from "@/components/SystemComparisonTable";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import productsData from "@/data/panacast_products.json";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const panacastProducts = productsData.filter(
    (p) => p.category === "panacast" || p.category === "Aksesuarlar"
  );

  return (
    <div className="bg-white">
      {/* 1. Light Hero */}
      <Hero />

      {/* 2. Interactive 120° vs 180° Simulator */}
      <FovSimulator />

      {/* 3. AI Features Showcase */}
      <AiFeaturesShowcase />

      {/* 4. BYOD vs Android vs Windows Selection Guide */}
      <SystemComparisonTable />

      {/* 5. Product Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Eksiksiz PanaCast Portföyü</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tüm Toplantı Boyutları İçin <span className="text-amber-600">Jabra PanaCast</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                Kişisel masalardan telefon kulübelerine, huddle odalarından 20 kişilik yönetim kurulu toplantı salonlarına kadar 180° Panoramik-4K netliği.
              </p>
            </div>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:underline"
            >
              <span>Tüm Modelleri Gör</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panacastProducts.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lead Form Section (User Requested Standard Format) */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultProduct="Jabra PanaCast 50 VBS"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </section>
    </div>
  );
}
