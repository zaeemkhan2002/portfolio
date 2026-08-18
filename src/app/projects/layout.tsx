import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Research and systems spanning LLM safety, intelligent robotics, and embedded control.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
