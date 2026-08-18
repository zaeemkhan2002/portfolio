import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CONTACT, TAGLINE } from "@/data/profile";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site),
  title: {
    default: "Zaeem Mohtashim Khan — Robotics & AI Research",
    template: "%s — Zaeem Mohtashim Khan",
  },
  description: TAGLINE,
  keywords: [
    "robotics",
    "LLM safety",
    "content moderation",
    "embodied AI",
    "computer vision",
    "LUMS",
  ],
  authors: [{ name: CONTACT.name, url: CONTACT.site }],
  openGraph: {
    title: "Zaeem Mohtashim Khan — Robotics & AI Research",
    description: TAGLINE,
    url: CONTACT.site,
    siteName: CONTACT.name,
    type: "website",
    images: ["/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaeem Mohtashim Khan — Robotics & AI Research",
    description: TAGLINE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
