"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import CoverArt from "@/components/CoverArt";
import RichText from "@/components/RichText";
import { fadeUp, staggerSlow } from "@/lib/motion";

export default function ProjectDetails({
  project,
  next,
}: {
  project: Project;
  next?: Project;
}) {
  const links = [
    project.links?.demo && {
      href: project.links.demo,
      icon: ExternalLink,
      label: "Live demo",
      primary: true,
    },
    project.links?.github && {
      href: project.links.github,
      icon: Github,
      label: "GitHub repo",
    },
    project.links?.paper && {
      href: project.links.paper,
      icon: FileText,
      label: "Read paper",
    },
  ].filter(Boolean) as {
    href: string;
    icon: typeof Github;
    label: string;
    primary?: boolean;
  }[];

  return (
    <motion.main
      className="shell max-w-4xl py-14 sm:py-20"
      variants={staggerSlow}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft size={15} />
          All work
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2">
        {project.research && <span className="chip chip-accent">Research</span>}
        <span className="chip">{project.category}</span>
        <span className="chip">{project.year}</span>
        {project.venue && <span className="chip chip-violet">{project.venue}</span>}
      </motion.div>

      <motion.h1
        className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-slate-50 sm:text-4xl md:text-[2.75rem]"
        variants={fadeUp}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className="mt-5 max-w-3xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl"
        variants={fadeUp}
      >
        {project.summary}
      </motion.p>

      <motion.div
        className="panel relative mt-10 aspect-[16/9] w-full overflow-hidden"
        variants={fadeUp}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        ) : (
          <CoverArt
            seed={project.slug}
            label={project.category}
            year={project.year}
            variant="hero"
          />
        )}
      </motion.div>

      {project.tags.length > 0 && (
        <motion.ul className="mt-8 flex flex-wrap gap-2" variants={fadeUp}>
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </motion.ul>
      )}

      {project.body && (
        <motion.article className="mt-10" variants={fadeUp}>
          <RichText text={project.body} />
        </motion.article>
      )}

      {links.length > 0 && (
        <motion.div
          className="mt-10 flex flex-wrap gap-3 border-t border-white/[0.07] pt-8"
          variants={fadeUp}
        >
          {links.map(({ href, icon: Icon, label, primary }) => (
            <a
              key={label}
              className={`btn ${primary ? "btn-primary" : "btn-ghost"}`}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>
      )}

      {next && (
        <motion.div variants={fadeUp} className="mt-14">
          <p className="label mb-3">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="panel panel-hover group flex items-center justify-between gap-6 p-5"
          >
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                {next.title}
              </h2>
              <p className="mt-1 truncate text-sm text-slate-500">{next.summary}</p>
            </div>
            <span className="shrink-0 text-cyan-300/80 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      )}
    </motion.main>
  );
}
