"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import CoverArt from "@/components/CoverArt";
import { fadeUp, inView } from "@/lib/motion";

export default function ProjectCard({ p }: { p: Project }) {
  const external = [
    p.links?.demo && { href: p.links.demo, icon: ExternalLink, label: "Live demo" },
    p.links?.github && { href: p.links.github, icon: Github, label: "GitHub repo" },
    p.links?.paper && { href: p.links.paper, icon: FileText, label: "Paper" },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[];

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      className="panel panel-hover ticks group flex h-full flex-col overflow-hidden"
    >
      {/* Media */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Link
          href={`/projects/${p.slug}`}
          className="absolute inset-0 z-0"
          aria-label={`View ${p.title}`}
        >
          {p.cover ? (
            <Image
              src={p.cover}
              alt=""
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <CoverArt seed={p.slug} label={p.research ? "Research" : p.category} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/25 to-transparent" />
        </Link>

        {/* Year / research / venue */}
        <div className="pointer-events-none absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
          <span className="chip bg-black/45 px-2 py-0.5 text-[11px] backdrop-blur-sm">
            {p.year}
          </span>
          {p.research && (
            <span className="chip chip-accent px-2 py-0.5 text-[11px] backdrop-blur-sm">
              Research
            </span>
          )}
          {p.venue && (
            <span className="chip chip-violet px-2 py-0.5 text-[11px] backdrop-blur-sm">
              {p.venue}
            </span>
          )}
        </div>

        {/* External links */}
        {external.length > 0 && (
          <div className="absolute right-3 top-3 z-20 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
            {external.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 bg-black/55 p-1.5 text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <ul className="mb-3 flex flex-wrap gap-1.5">
          {p.tags.slice(0, 3).map((t) => (
            <li key={t} className="chip chip-accent px-2 py-0.5 text-[11px]">
              {t}
            </li>
          ))}
          {p.tags.length > 3 && (
            <li className="chip px-2 py-0.5 text-[11px] text-slate-500">
              +{p.tags.length - 3}
            </li>
          )}
        </ul>

        <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-slate-50">
          <Link
            href={`/projects/${p.slug}`}
            className="transition-colors hover:text-cyan-300"
          >
            {p.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {p.summary}
        </p>

        <Link
          href={`/projects/${p.slug}`}
          className="mt-auto inline-flex items-center gap-1 self-start pt-4 text-sm font-medium text-cyan-300/90 transition-colors hover:text-cyan-200"
        >
          Read more
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}
