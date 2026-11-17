import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Jabra PanaCast Türkiye — 180° Panoramik 4K Video Konferans Sistemleri",
  description:
    "Jabra PanaCast 50, PanaCast 50 VBS, PanaCast 40 VBS ve PanaCast 20 akıllı video konferans kamera ve oda sistemleri Türkiye resmi çözüm vitrini.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-amber-300 selection:text-slate-950 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar
          phone="0850 850 08 54"
          telNumber="08508500854"
          whatsappText="Merhaba, Jabra PanaCast video konferans sistemleri hakkında bilgi ve fiyat teklifi almak istiyorum."
          formUrl="/demo-talep"
        />
      </body>
    </html>
  );
}
