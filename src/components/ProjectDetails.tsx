"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12, filter: "blur(2px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05
        }
    }
};

export default function ProjectDetails({ project }: { project: Project }) {
    return (
        <motion.main
            className="max-w-4xl mx-auto px-6 py-20"
            variants={stagger}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-200"
                variants={fadeUp}
            >
                {project.title}
            </motion.h1>

            <motion.div className="flex flex-wrap items-center gap-4 mb-8 text-sm" variants={fadeUp}>
                <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-full border border-slate-700">
                    {project.year}
                </span>
            </motion.div>

            {!!project.cover && (
                <motion.div
                    className="relative w-full aspect-[16/9] mb-12 overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl"
                    variants={fadeUp}
                >
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            )}

            {project.tags?.length ? (
                <motion.ul
                    className="flex flex-wrap gap-2 mb-8"
                    variants={fadeUp}
                >
                    {project.tags.map((t) => (
                        <li
                            key={t}
                            className="px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/30 text-cyan-300 text-sm"
                        >
                            {t}
                        </li>
                    ))}
                </motion.ul>
            ) : null}

            <motion.p className="text-xl md:text-2xl leading-relaxed font-light text-slate-200 mb-10" variants={fadeUp}>
                {project.summary}
            </motion.p>

            {project.body && (
                <motion.article
                    className="prose prose-invert prose-lg max-w-none text-slate-300 mb-12"
                    variants={fadeUp}
                >
                    {/* We are rendering plain text here currently, but could use markdown parser if available. 
              The current data/projects.ts seems to just put text in 'body'. 
              We'll render it as a paragraph/whitespace-pre-line effectively */}
                    <div className="whitespace-pre-line">{project.body}</div>
                </motion.article>
            )}

            {project.links && (
                <motion.div className="mt-8 flex flex-wrap gap-4 pt-8 border-t border-slate-800" variants={fadeUp}>
                    {project.links.github && (
                        <a
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub Repo
                        </a>
                    )}
                    {project.links.demo && (
                        <a
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors"
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.links.paper && (
                        <a
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                            href={project.links.paper}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read Paper
                        </a>
                    )}
                </motion.div>
            )}
        </motion.main>
    );
}
