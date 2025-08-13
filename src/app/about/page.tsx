// src/app/about/page.tsx
"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, FileDown, MapPin, BookOpen } from "lucide-react";
import { BIO, EDUCATION, EXPERIENCE, AWARDS, CONTACT } from "@/data/profile";

const fadeUp: Variants = { hidden: { opacity: 0, y: 12, filter: "blur(2px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

export default function AboutPage() {
  return (
    <motion.main className="max-w-4xl mx-auto px-6 py-12" variants={stagger} initial="hidden" animate="visible">
      {/* Header */}
      <motion.header variants={fadeUp} className="flex items-center gap-4 mb-8">
        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-cyan-300/50">
          <Image src="/profile.jpg" alt="Zaeem profile" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Zaeem Mohtashim Khan</h1>
          <p className="text-sm text-white/70 flex items-center gap-2">
            <MapPin size={16} /> {CONTACT.location}
          </p>
        </div>
      </motion.header>

      {/* Bio */}
      <motion.section variants={fadeUp} className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 p-6 md:p-7">
        <div className="pointer-events-none absolute inset-0 rounded-2xl">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 via-transparent to-transparent opacity-60" />
        </div>
        <div className="space-y-4 text-white/90 leading-7">
          {BIO.map((para, i) => (<motion.p key={i} variants={fadeUp}>{para}</motion.p>))}
        </div>
        <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-3">
            <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5"
            >
            <Mail size={16} /> Email
            </a>
          <Link href={CONTACT.github} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5">
            <Github size={16} /> GitHub
          </Link>
          <Link href={CONTACT.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5">
            <Linkedin size={16} /> LinkedIn
          </Link>
          <Link href={CONTACT.resume} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 px-3 py-1.5">
            <FileDown size={16} /> Resume
          </Link>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section variants={fadeUp} className="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 p-6 md:p-7">
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><BookOpen size={18} /> Education</h2>
        <div className="space-y-4">
          {EDUCATION.map((e, i) => (
            <div key={i}>
              <h3 className="font-semibold">{e.school}</h3>
              <p className="text-white/80">{e.degree}{e.cgpa ? ` • ${e.cgpa}` : ""}</p>
              <p className="text-sm text-white/60">{e.when}</p>
              {e.courses && (
                <p className="mt-1 text-sm text-white/70">
                  <span className="text-white/80">Courses:</span> {e.courses.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={fadeUp} className="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 p-6 md:p-7">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ol className="relative border-s border-white/15">
          {EXPERIENCE.map((e, idx) => (
            <li key={idx} className="ms-4 py-4">
              <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-cyan-400/80 ring-4 ring-cyan-400/15" />
              <h3 className="font-semibold text-white">{e.title}</h3>
              <p className="text-sm text-white/70">{e.org} • {e.when}</p>
              <p className="mt-1 text-white/90">{e.detail}</p>
            </li>
          ))}
        </ol>
      </motion.section>

      {/* Awards */}
      <motion.section variants={fadeUp} className="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 p-6 md:p-7">
        <h2 className="text-xl font-semibold mb-3">Awards</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {AWARDS.map((a, i) => (
            <li key={i} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3">
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-white/70">{a.when}</p>
            </li>
          ))}
        </ul>
      </motion.section>
    </motion.main>
  );
}
