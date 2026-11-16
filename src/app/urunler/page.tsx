import React from "react";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/panacast_products.json";
import { Video } from "lucide-react";

export const metadata = {
  title: "Jabra PanaCast Ürün Kataloğu — 180° Video Barlar ve Kameralar",
  description: "Jabra PanaCast 50, 50 VBS, 40 VBS, 20 ve tüm PanaCast oda çözümleri modelleri ve teknik özellikleri.",
};

export default function ProductsPage() {
  const panacastProducts = productsData.filter(
    (p) => p.category === "panacast" || p.category === "Aksesuarlar"
  );

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-xs">
            <Video className="w-3.5 h-3.5 text-amber-500" />
            <span>PanaCast Serisi Ürün Kataloğu</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Jabra PanaCast <span className="text-amber-600">Modelleri</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base">
            Sadece PanaCast: Akıllı 180° video barlar, hepsi-bir-arada Android ve Windows toplantı sistemleri, 4K kişisel yapay zeka kameraları.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {panacastProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
