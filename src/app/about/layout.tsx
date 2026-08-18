import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Research Associate at LUMS working on LLM safety, content moderation, and embodied intelligence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
