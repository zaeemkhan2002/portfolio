"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CONTACT, PUBLICATIONS, ROLE, TAGLINE } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { fadeUp, inView, stagger, staggerSlow } from "@/lib/motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-8">
      {/* ============================ HERO ============================ */}
      <section className="shell pt-10 sm:pt-16">
        <motion.div
          className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-16"
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
        >
          {/* Left: copy */}
          <div className="order-2 md:order-1">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
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
              className="mt-6 text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]"
            >
              <span className="grad-text">Zaeem</span>
              <span className="block text-slate-200">Mohtashim Khan</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              {TAGLINE}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="btn btn-primary">
                View work
                <ArrowRight size={16} />
              </Link>
              <Link href="/research" className="btn btn-ghost">
                Research & papers
              </Link>

              <div className="flex gap-2">
                {[
                  { href: CONTACT.github, icon: Github, label: "GitHub" },
                  { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${CONTACT.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-white/[0.09] bg-white/[0.03] p-3 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/35 hover:text-cyan-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            variants={fadeUp}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative w-60 sm:w-72 lg:w-80">
              {/* square frame — the ring must track the portrait, not the badge */}
              <div className="relative aspect-square">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-violet-500/20 blur-3xl" />

                {/* Orbit ring — quiet robotics cue */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/25"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                <div className="panel relative h-full w-full overflow-hidden rounded-[24px] p-0">
                  <Image
                    src="/profile.jpg"
                    alt={CONTACT.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070d]/70 via-transparent to-transparent" />
                </div>
              </div>

              <motion.div
                className="panel absolute -bottom-5 -left-4 max-w-[190px] p-3.5"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="label text-[10px]">Current focus</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-cyan-300">
                  LLM safety &amp; embodied intelligence
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </section>

      {/* ========================= PUBLICATIONS ========================= */}
      <section className="shell mt-24">
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            <Sparkles size={15} className="text-cyan-400" />
            Publications
          </h2>
          <span className="rule" />
          <Link
            href="/research"
            className="shrink-0 text-sm text-slate-500 transition-colors hover:text-cyan-300"
          >
            All research →
          </Link>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {PUBLICATIONS.map((pub) => (
            <motion.div
              key={pub.venueShort}
              variants={fadeUp}
              className="panel panel-hover ticks group relative p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip-violet font-mono text-[11px]">
                  {pub.venueShort}
                </span>
                <span className="chip text-[11px] text-emerald-300/90">
                  {pub.status}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-50 transition-colors group-hover:text-cyan-300">
                {pub.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {pub.authors}
              </p>

              <p className="mt-3 text-sm text-slate-400">{pub.venue}</p>
              {pub.note && <p className="mt-1 text-xs text-slate-600">{pub.note}</p>}

              <div className="mt-4 flex flex-wrap items-center gap-4">
                {pub.slug && (
                  <Link
                    href={`/projects/${pub.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300/90 before:absolute before:inset-0 before:content-['']"
                  >
                    Details
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200"
                  >
                    <FileText size={15} />
                    {pub.urlLabel ?? "Paper"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================= FEATURED WORK ========================= */}
      <section className="shell mt-24">
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Selected work
          </h2>
          <span className="rule" />
          <Link
            href="/projects"
            className="shrink-0 text-sm text-slate-500 transition-colors hover:text-cyan-300"
          >
            All projects →
          </Link>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* Wandering robot */}
      <div className="pointer-events-none">
        <Image
          src="/robot.gif"
          alt=""
          width={104}
          height={104}
          unoptimized
          className="robot-walk"
          aria-hidden="true"
        />
      </div>
    </main>
  );
}
