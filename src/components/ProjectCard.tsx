"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/20 backdrop-blur-md backdrop-saturate-150 hover:bg-slate-800/30 transition shadow-lg shadow-black/20"
    >
      {/* Glass highlight layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-slate-700/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Image Area */}
      <div className="relative aspect-[16/9]">
        {/* Main link for image */}
        <Link
          href={`/projects/${p.slug}`}
          className="absolute inset-0 z-0"
          aria-label={`View ${p.title}`}
        >
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </Link>

        {/* Year badge */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 text-white/90 text-xs px-2 py-1 backdrop-blur-sm z-10">
          {p.year}
        </span>

        {/* Link icons - SIBLINGS to the main link, higher Z-index */}
        {(p.links?.demo || p.links?.github || p.links?.paper) && (
          <div className="absolute right-3 top-3 z-20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {p.links?.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
                className="rounded-full bg-black/45 hover:bg-black/60 p-1.5 text-white backdrop-blur-sm"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {p.links?.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub repo"
                className="rounded-full bg-black/45 hover:bg-black/60 p-1.5 text-white backdrop-blur-sm"
              >
                <Github size={16} />
              </a>
            )}
            {p.links?.paper && (
              <a
                href={p.links.paper}
                target="_blank"
                rel="noreferrer"
                aria-label="Open paper"
                className="rounded-full bg-black/45 hover:bg-black/60 p-1.5 text-white backdrop-blur-sm"
              >
                <FileText size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 relative z-10">
        <div className="flex items-center gap-2 text-sm text-cyan-400/90">
          <ul className="flex flex-wrap gap-1">
            {p.tags.slice(0, 3).map((t) => (
              <li
                key={t}
                className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300/90"
              >
                {t}
              </li>
            ))}
          </ul>
          {p.tags.length > 3 && (
            <span className="text-cyan-300/70">+{p.tags.length - 3}</span>
          )}
        </div>

        <Link href={`/projects/${p.slug}`}>
          <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white hover:text-cyan-300 transition-colors">
            {p.title}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-white/70 line-clamp-2">
          {p.summary}
        </p>

        <Link
          href={`/projects/${p.slug}`}
          className="mt-3 inline-block text-cyan-300 group-hover:underline"
        >
          Read more →
        </Link>
      </div>
    </motion.article>
  );
}
