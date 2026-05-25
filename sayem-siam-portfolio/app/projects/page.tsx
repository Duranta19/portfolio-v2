import type { Metadata } from "next"
import { Projects } from "@/src/components/sections/Projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Academic and research projects in AI systems, multi-agent architectures, and distributed computing.",
}

export default function ProjectsPage() {
  return (
    <div className="pt-8">
      <Projects />
    </div>
  )
}
