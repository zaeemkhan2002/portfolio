// src/app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects"; // adjust path if different

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{project.year}</p>

      {project.cover && (
        <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image src={project.cover} alt={project.title} fill className="object-cover" />
        </div>
      )}

      <p className="text-lg leading-7 mb-6">{project.summary}</p>

      {project.tags?.length ? (
        <ul className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(t => (
            <li key={t} className="px-3 py-1 rounded-full bg-white/10 text-sm">{t}</li>
          ))}
        </ul>
      ) : null}

      {project.body && (
        <article className="prose prose-invert max-w-none">{project.body}</article>
      )}

      {project.links && (
        <div className="mt-8 flex gap-4">
          {project.links.github && (
            <a className="underline" href={project.links.github} target="_blank">GitHub</a>
          )}
          {project.links.demo && (
            <a className="underline" href={project.links.demo} target="_blank">Demo</a>
          )}
          {project.links.paper && (
            <a className="underline" href={project.links.paper} target="_blank">Paper</a>
          )}
        </div>
      )}
    </main>
  );
}

// (optional) prebuild static pages if you know your slugs
export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}
