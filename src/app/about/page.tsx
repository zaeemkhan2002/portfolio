// src/app/about/page.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, FileDown, MapPin, BookOpen } from "lucide-react";
import { BIO, EDUCATION, EXPERIENCE, AWARDS, CONTACT, SKILLS, INTERESTS } from "@/data/profile";

const fadeUp: Variants = { hidden: { opacity: 0, y: 12, filter: "blur(2px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

export default function AboutPage() {
  return (
    <motion.main
      className="max-w-6xl mx-auto px-6 py-20"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.header variants={fadeUp} className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
        <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden ring-4 ring-cyan-900/40 shadow-2xl">
          <Image src="/profile.jpg" alt="Zaeem profile" fill className="object-cover" priority />
        </div>
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Zaeem Mohtashim Khan</h1>
          <p className="text-lg text-cyan-200/80 flex items-center justify-center md:justify-start gap-2 font-medium">
            <MapPin size={18} /> {CONTACT.location}
          </p>

          <div className="flex flex-wrapjustify-center md:justify-start gap-3 pt-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 transition-colors border border-slate-700"
            >
              <Mail size={16} /> <span className="text-sm font-medium">Email</span>
            </a>
            <Link
              href={CONTACT.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 transition-colors border border-slate-700"
            >
              <Github size={16} /> <span className="text-sm font-medium">GitHub</span>
            </Link>
            <Link
              href={CONTACT.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 transition-colors border border-slate-700"
            >
              <Linkedin size={16} /> <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            <Link
              href={CONTACT.resume}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 transition-colors border border-slate-700"
            >
              <FileDown size={16} /> <span className="text-sm font-medium">Resume</span>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="grid md:grid-cols-[1fr_300px] gap-12">
        {/* Main Content Column */}
        <div className="space-y-12">
          {/* Bio */}
          <motion.section variants={fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold text-cyan-300 flex items-center gap-2">
              <span className="w-8 h-1 bg-cyan-500 rounded-full inline-block" />
              About Me
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed text-lg">
              {BIO.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeUp} className="space-y-6">
            <h2 className="text-2xl font-bold text-purple-300 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full inline-block" />
              Experience
            </h2>
            <div className="relative border-l-2 border-slate-800 ml-3 space-y-10 py-2">
              {EXPERIENCE.map((e, idx) => (
                <div key={idx} className="relative pl-8">
                  <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-900 border-2 border-purple-500" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white">{e.title}</h3>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>{e.org}</span>
                      <span className="font-mono bg-slate-800/50 px-2 py-0.5 rounded text-xs">{e.when}</span>
                    </div>
                    <p className="text-slate-300 pt-2 leading-relaxed">
                      {e.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-10">
          {/* Education */}
          <motion.section variants={fadeUp} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-400" /> Education
            </h2>
            <div className="space-y-8">
              {EDUCATION.map((e, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-semibold text-white">{e.school}</h3>
                  <p className="text-sm text-cyan-200/80">{e.degree}</p>
                  {e.cgpa && <p className="text-xs font-mono text-slate-500">{e.cgpa}</p>}
                  <p className="text-xs text-slate-500">{e.when}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Awards */}
          <motion.section variants={fadeUp} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-yellow-400">★</span> Honors & Awards
            </h2>
            <ul className="space-y-4">
              {AWARDS.map((a, i) => (
                <li key={i} className="pb-4 border-b border-slate-800/50 last:border-0 last:pb-0">
                  <p className="font-medium text-slate-200">{a.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{a.when}</p>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Skills */}
          <motion.section variants={fadeUp} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.languages.map((s: string) => (
                    <span key={s} className="text-xs bg-slate-800 text-slate-200 px-2 py-1 rounded border border-slate-700">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map((s: string) => (
                    <span key={s} className="text-xs bg-slate-800 text-slate-200 px-2 py-1 rounded border border-slate-700">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section variants={fadeUp} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">❤</span> Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((s: string) => (
                <span key={s} className="text-xs font-medium text-slate-300">#{s}</span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}
