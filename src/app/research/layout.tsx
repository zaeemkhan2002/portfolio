import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Peer-reviewed publications on multimodal content moderation and LLM safety, plus ongoing research in robotics and human-aware AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
