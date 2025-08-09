import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects — Zaeem Mohtashim Khan" };

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-300">Projects</h1>
          <p className="mt-2 text-white/70">
            Selected work in robotics, ML, and systems. Click any project for details,
            methods, and links.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </main>
  );
}
