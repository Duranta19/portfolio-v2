import type { Metadata } from "next"
import { Publications } from "@/src/components/sections/Publications"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research publications in NLP, multi-agent systems, and distributed computing.",
}

export default function PublicationsPage() {
  return (
    <div className="pt-8">
      <Publications />
    </div>
  )
}
