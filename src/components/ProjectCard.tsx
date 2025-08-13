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
      className="group relative rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150 hover:bg-white/15 transition"
    >
      {/* Glass highlight layer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 via-transparent to-transparent opacity-60" />
      </div>

      {/* Clickable cover */}
      <Link
        href={`/projects/${p.slug}`}
        aria-label={`Open project: ${p.title}`}
        className="block"
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Year badge */}
          <span className="absolute left-3 top-3 rounded-full bg-black/50 text-white/90 text-xs px-2 py-1 backdrop-blur-sm">
            {p.year}
          </span>

          {/* Link icons */}
          {(p.links?.demo || p.links?.github || p.links?.paper) && (
            <div className="absolute right-3 top-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {p.links?.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open live demo"
                  className="rounded-full bg-black/45 hover:bg-black/60 p-1.5 text-white backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="p-4">
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

        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">
          {p.title}
        </h3>

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
