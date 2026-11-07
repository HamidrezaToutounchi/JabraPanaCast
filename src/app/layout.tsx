import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="bg-[#0C0C0E] text-[#F4F4F6] min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
