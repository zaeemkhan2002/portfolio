"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileDown, FileText } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { CATEGORIES, projects } from "@/data/projects";
import { CONTACT, PUBLICATIONS, RESEARCH } from "@/data/profile";
import { fadeUp, inView, stagger, staggerSlow } from "@/lib/motion";

type Category = (typeof CATEGORIES)[number];

function SectionHead({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex items-center gap-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-body">
        {children}
      </h2>
      <span className="rule" />
      {aside}
    </motion.div>
  );
}

export default function WorkPage() {
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
          Publications, projects &amp; research
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
        >
          <span className="grad-text">Work</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted">
          Peer-reviewed and in-review work on{" "}
          <span className="text-accent-ink">LLM safety</span> and content moderation,
          alongside projects in{" "}
          <span className="text-accent-2">intelligent robotics</span> and{" "}
          <span className="text-ink">embedded control</span>.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6">
          <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FileDown size={16} />
            Full CV
          </a>
        </motion.div>
      </motion.header>

      {/* ========================= PUBLICATIONS ========================= */}
      <section className="mt-16">
        <SectionHead>Publications</SectionHead>

        <motion.ol
          className="mt-6 space-y-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {PUBLICATIONS.map((pub) => (
            <motion.li
              key={pub.venueShort}
              variants={fadeUp}
              className="panel panel-hover ticks group p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip-violet font-mono text-[11px]">
                  {pub.venueShort}
                </span>
                <span className="chip chip-emerald text-[11px]">{pub.status}</span>
                {pub.extension && (
                  <span className="chip chip-amber text-[11px]">
                    {pub.extension.venueShort} · {pub.extension.status}
                  </span>
                )}
                {pub.note && <span className="text-xs text-faint">{pub.note}</span>}
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.375rem]">
                {pub.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">{pub.authors}</p>
              <p className="mt-1.5 text-sm italic text-muted">{pub.venue}</p>

              <ul className="copy mt-5 text-[0.9375rem] text-body">
                {pub.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-4">
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink transition-colors hover:text-accent"
                  >
                    <FileText size={15} />
                    {pub.urlLabel ?? "Read the paper"}
                  </a>
                )}
                {pub.slug && (
                  <Link
                    href={`/projects/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
                  >
                    Project page
                    <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      {/* ========================= PROJECTS ========================= */}
      <section className="mt-20">
        <SectionHead>Projects</SectionHead>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-6 flex flex-wrap gap-2"
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
                  isActive ? "text-accent-ink" : "text-muted hover:text-ink",
                ].join(" ")}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-accent/30 bg-accent/12"
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

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* ========================= RESEARCH EXPERIENCE ========================= */}
      <section className="mt-20">
        <SectionHead
          aside={
            <span className="label shrink-0 text-[10px]">
              {RESEARCH.org} · {RESEARCH.when}
            </span>
          }
        >
          Research experience
        </SectionHead>

        <motion.div
          className="mt-6 border-l border-line pl-6 sm:pl-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {RESEARCH.threads.map((t, i) => (
            <motion.article
              key={t.title}
              variants={fadeUp}
              className="group relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-sm border border-accent/50 bg-bg transition-colors group-hover:bg-accent sm:-left-[calc(2rem+5px)]" />

              <p className="label text-[10px]">{String(i + 1).padStart(2, "0")}</p>

              <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                {t.slug ? (
                  <Link
                    href={`/projects/${t.slug}`}
                    className="transition-colors hover:text-accent-ink"
                  >
                    {t.title}
                  </Link>
                ) : (
                  t.title
                )}
              </h3>

              <ul className="copy mt-3 text-[0.9375rem] text-muted">
                {t.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
