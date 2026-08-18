"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { CATEGORIES, projects } from "@/data/projects";
import { fadeUp, staggerSlow } from "@/lib/motion";

type Category = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  // "Research" cuts across domains — a robotics project can also be research —
  // so it filters on the flag while the rest filter on the domain.
  const matches = (p: (typeof projects)[number], c: Category) =>
    c === "All" || (c === "Research" ? !!p.research : p.category === c);

  const counts = useMemo(() => {
    const map = {} as Record<Category, number>;
    for (const c of CATEGORIES) map[c] = projects.filter((p) => matches(p, c)).length;
    return map;
  }, []);

  const visible = useMemo(() => projects.filter((p) => matches(p, active)), [active]);

  return (
    <main className="shell py-14 sm:py-20">
      <motion.header
        variants={staggerSlow}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p variants={fadeUp} className="label">
          Portfolio
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
        >
          <span className="grad-text">Selected work</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg leading-relaxed text-slate-400"
        >
          Research and systems spanning{" "}
          <span className="text-cyan-300">LLM safety</span>,{" "}
          <span className="text-violet-300">intelligent robotics</span>, and{" "}
          <span className="text-slate-200">embedded control</span>.
        </motion.p>
      </motion.header>

      {/* Filter rail */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-wrap gap-2"
      >
        {CATEGORIES.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={isActive}
              className={[
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-cyan-200" : "text-slate-400 hover:text-slate-100",
              ].join(" ")}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full border border-cyan-400/25 bg-cyan-400/[0.11]"
                />
              )}
              <span className="relative z-10">
                {c}
                <span className="ml-1.5 text-xs opacity-50">{counts[c] ?? 0}</span>
              </span>
            </button>
          );
        })}
      </motion.div>

      <motion.div
        layout
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
