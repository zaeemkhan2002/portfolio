import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Publications, projects and research on LLM safety, content moderation, intelligent robotics and embedded control.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
