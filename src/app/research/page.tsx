"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, FileText } from "lucide-react";
import { CONTACT, PUBLICATIONS, RESEARCH } from "@/data/profile";
import { fadeUp, inView, stagger, staggerSlow } from "@/lib/motion";

export default function ResearchPage() {
  return (
    <main className="shell py-14 sm:py-20">
      <motion.header
        variants={staggerSlow}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p variants={fadeUp} className="label">
          Publications &amp; research
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-[-0.03em] sm:text-5xl"
        >
          <span className="grad-text">Research</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lg leading-relaxed text-slate-400"
        >
          Peer-reviewed work on multimodal content moderation and LLM safety, plus the
          ongoing threads in robotics and human-aware AI behind it.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6">
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <FileDown size={16} />
            Full CV
          </a>
        </motion.div>
      </motion.header>

      {/* ========================= PUBLICATIONS ========================= */}
      <section className="mt-16">
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Peer-reviewed publications
          </h2>
          <span className="rule" />
        </motion.div>

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
                <span className="chip text-[11px] text-emerald-300/90">
                  {pub.status}
                </span>
                {pub.note && (
                  <span className="text-xs text-slate-600">{pub.note}</span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-50 sm:text-[1.375rem]">
                {pub.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {pub.authors}
              </p>
              <p className="mt-1.5 text-sm italic text-slate-400">{pub.venue}</p>

              <ul className="copy mt-5 text-[0.9375rem] text-slate-300/90">
                {pub.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-3">
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300/90 transition-colors hover:text-cyan-200"
                  >
                    <FileText size={15} />
                    Read on {pub.urlLabel ?? "publisher site"}
                  </a>
                )}
                {pub.slug && (
                  <Link
                    href={`/projects/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200"
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

      {/* ========================= RESEARCH THREADS ========================= */}
      <section className="mt-20">
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Research experience
          </h2>
          <span className="rule" />
          <span className="label shrink-0 text-[10px]">
            {RESEARCH.org} · {RESEARCH.when}
          </span>
        </motion.div>

        <motion.div
          className="mt-6 border-l border-white/[0.09] pl-6 sm:pl-8"
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
              <span className="absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-sm border border-cyan-400/50 bg-[#05070d] transition-colors group-hover:bg-cyan-400/60 sm:-left-[calc(2rem+5px)]" />

              <p className="label text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-slate-100 sm:text-xl">
                {t.slug ? (
                  <Link
                    href={`/projects/${t.slug}`}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {t.title}
                  </Link>
                ) : (
                  t.title
                )}
              </h3>

              <ul className="copy mt-3 text-[0.9375rem] text-slate-400">
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
