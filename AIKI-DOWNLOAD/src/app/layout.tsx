import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sans = Sora({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aiki.lol"),
  title: "Download AIKI for iPhone and Android",
  description: "Install AIKI on iOS or Android. Operational accountability, proof reporting and intelligent escalation, wherever work happens.",
  openGraph: { title: "Download AIKI", description: "Your business. Under control.", url: "https://aiki.lol", siteName: "AIKI", type: "website" },
  twitter: { card: "summary_large_image", title: "Download AIKI", description: "Your business. Under control." },
};
export const viewport: Viewport = { themeColor: "#111827" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${sans.variable} font-sans`}>{children}</body></html>);
}
