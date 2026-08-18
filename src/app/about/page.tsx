// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  FileDown,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";
import {
  AWARDS,
  BIO,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  INTERESTS,
  ROLE,
  SKILLS,
} from "@/data/profile";
import { fadeUp, inView, stagger, staggerSlow } from "@/lib/motion";

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
        <Icon size={15} className="text-cyan-400" />
        {children}
      </h2>
      <span className="rule" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="shell py-14 sm:py-20">
      {/* ============================ HEADER ============================ */}
      <motion.header
        variants={staggerSlow}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:text-left"
      >
        <motion.div variants={fadeUp} className="relative shrink-0">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl" />
          <div className="panel relative h-32 w-32 overflow-hidden rounded-[20px] md:h-40 md:w-40">
            <Image
              src="/profile.jpg"
              alt={CONTACT.name}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 md:justify-start"
          >
            <span className="chip chip-accent">
              <span className="pulse-dot" />
              {ROLE}
            </span>
            <span className="chip">
              <MapPin size={13} />
              {CONTACT.location}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold tracking-[-0.03em] text-slate-50 sm:text-5xl"
          >
            {CONTACT.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {[
              { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
              { href: CONTACT.github, icon: Github, label: "GitHub" },
              { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: CONTACT.resume, icon: FileDown, label: "Resume" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="chip px-3 py-2 hover:border-cyan-400/35 hover:text-cyan-200"
              >
                <Icon size={15} />
                {label}
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        {/* ============================ MAIN ============================ */}
        <div className="space-y-16">
          {/* Bio */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="space-y-5"
          >
            <motion.div variants={fadeUp}>
              <SectionTitle icon={BookOpen}>About me</SectionTitle>
            </motion.div>
            {BIO.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[1.0625rem] leading-[1.8] text-slate-300/90"
              >
                {para}
              </motion.p>
            ))}
          </motion.section>

          {/* Experience */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <SectionTitle icon={GraduationCap}>Experience</SectionTitle>
            </motion.div>

            <div className="border-l border-white/[0.09] pl-6 sm:pl-8">
              {EXPERIENCE.map((e) => (
                <motion.article
                  key={e.title + e.when}
                  variants={fadeUp}
                  className="group relative pb-10 last:pb-0"
                >
                  <span
                    className={[
                      "absolute -left-[calc(1.5rem+5px)] top-2 h-2.5 w-2.5 rounded-sm border sm:-left-[calc(2rem+5px)]",
                      e.current
                        ? "border-cyan-400 bg-cyan-400/70"
                        : "border-white/25 bg-[#05070d] transition-colors group-hover:border-cyan-400/60",
                    ].join(" ")}
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-100">
                      {e.title}
                      {e.current && (
                        <span className="ml-2 align-middle text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300">
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="label shrink-0 text-[10px]">{e.when}</span>
                  </div>

                  <p className="mt-1 text-sm text-cyan-200/70">{e.org}</p>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-400">
                    {e.detail}
                  </p>

                  {e.tags && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <li key={t} className="chip px-2 py-0.5 text-[11px]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ============================ SIDEBAR ============================ */}
        <motion.aside
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-5 lg:sticky lg:top-24 lg:self-start"
        >
          {/* Education */}
          <motion.section variants={fadeUp} className="panel p-6">
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              <GraduationCap size={16} className="text-cyan-400" />
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((e) => (
                <div key={e.school} className="space-y-1.5">
                  <h3 className="text-sm font-semibold leading-snug text-slate-100">
                    {e.school}
                  </h3>
                  <p className="text-sm text-cyan-200/70">{e.degree}</p>
                  {e.cgpa && (
                    <p className="font-mono text-xs text-slate-500">{e.cgpa}</p>
                  )}
                  {e.honor && (
                    <p className="text-xs font-medium text-emerald-300/85">
                      {e.honor}
                    </p>
                  )}
                  <p className="text-xs text-slate-600">{e.when}</p>
                  {e.courses && (
                    <details className="group pt-2">
                      <summary className="cursor-pointer list-none text-xs text-slate-500 transition-colors hover:text-cyan-300">
                        Relevant coursework
                        <span className="ml-1 inline-block transition-transform group-open:rotate-90">
                          ›
                        </span>
                      </summary>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {e.courses.map((c) => (
                          <li key={c} className="chip px-2 py-0.5 text-[11px]">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Awards */}
          <motion.section variants={fadeUp} className="panel p-6">
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              <Award size={16} className="text-amber-400" />
              Honors &amp; awards
            </h2>
            <ul className="space-y-4">
              {AWARDS.map((a) => (
                <li
                  key={a.title}
                  className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium leading-snug text-slate-200">
                    {a.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    {a.org} · {a.when}
                  </p>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Skills */}
          <motion.section variants={fadeUp} className="panel p-6">
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              <Wrench size={16} className="text-cyan-400" />
              Skills
            </h2>
            <div className="space-y-4">
              {[
                { title: "Languages", items: SKILLS.languages },
                { title: "Tools", items: SKILLS.tools },
                { title: "Focus areas", items: SKILLS.focus },
              ].map(({ title, items }) => (
                <div key={title}>
                  <h3 className="label mb-2 text-[10px]">{title}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <li key={s} className="chip px-2 py-0.5 text-[11px]">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section variants={fadeUp} className="panel p-6">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
              <Heart size={16} className="text-violet-400" />
              Interests
            </h2>
            <p className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-slate-400">
              {INTERESTS.map((s) => (
                <span key={s}>
                  <span className="text-slate-600">#</span>
                  {s}
                </span>
              ))}
            </p>
          </motion.section>
        </motion.aside>
      </div>
    </main>
  );
}
