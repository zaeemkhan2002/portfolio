import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  return { title: p ? `${p.title} — Projects` : "Project" };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return <div className="p-8">Not found.</div>;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/projects" className="text-cyan-300 hover:underline">← Back to projects</Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white">{p.title}</h1>
        <div className="text-sm text-white/70">{p.year} • {p.tags.join(" • ")}</div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
          <Image src={p.cover} alt={p.title} fill className="object-cover" />
        </div>

        <p className="text-white/80">{p.summary}</p>
        {p.body && <p className="text-white/70 leading-7">{p.body}</p>}

        {p.links && (
          <div className="flex flex-wrap gap-3 pt-2">
            {p.links.github && (
              <a className="px-3 py-1.5 rounded border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10"
                 href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
            )}
            {p.links.demo && (
              <a className="px-3 py-1.5 rounded border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10"
                 href={p.links.demo} target="_blank" rel="noreferrer">Demo</a>
            )}
            {p.links.paper && (
              <a className="px-3 py-1.5 rounded border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10"
                 href={p.links.paper} target="_blank" rel="noreferrer">Paper</a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
