import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
