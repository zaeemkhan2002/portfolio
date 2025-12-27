"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 space-y-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Selected Projects
          </motion.h1>
          <motion.p
            className="mt-2 text-lg text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A collection of work spanning <span className="text-cyan-300">Intelligent Robotics</span>, <span className="text-purple-300">LLM Safety</span>, and <span className="text-blue-300">Embedded Systems</span>.
          </motion.p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
