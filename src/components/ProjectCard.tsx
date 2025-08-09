"use client";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/8 transition"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={p.cover}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-cyan-400/90">
          <span>{p.year}</span>
          <span>•</span>
          <ul className="flex flex-wrap gap-1">
            {p.tags.slice(0,3).map(t => (
              <li key={t} className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300/90">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">{p.summary}</p>
        <p className="mt-3 text-cyan-300 group-hover:underline">Read more →</p>
      </div>
    </Link>
  );
}
