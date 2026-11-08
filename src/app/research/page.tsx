import { redirect } from "next/navigation";

// Research and projects were merged onto one page; keep old links working.
export default function ResearchPage() {
  redirect("/projects");
}
