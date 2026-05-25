"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Search } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/src/components/ui"
import { publications } from "@/src/data"

export function Publications() {
  const [search, setSearch] = useState("")
  const [yearFilter, setYearFilter] = useState<number | null>(null)

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a)

  const filtered = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(search.toLowerCase()) ||
      pub.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    const matchesYear = yearFilter ? pub.year === yearFilter : true
    return matchesSearch && matchesYear
  })

  return (
    <AnimatedSection>
      <section id="publications" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Publications"
            subtitle="Peer-reviewed research in NLP, multi-agent systems, and distributed computing."
          />

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-2 border-black py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setYearFilter(null)}
                className={`border-2 px-3 py-1.5 text-xs font-medium transition-colors ${
                  yearFilter === null
                    ? "border-black bg-black text-white "
                    : "border-black bg-white text-black "
                }`}
              >
                All
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setYearFilter(year)}
                  className={`border-2 px-3 py-1.5 text-xs font-medium transition-colors ${
                    yearFilter === year
                      ? "border-black bg-black text-white "
                      : "border-black bg-white text-black "
                   }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="flex h-full flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base leading-snug">
                          {pub.title}
                        </CardTitle>
                        <span className="shrink-0 text-xs font-semibold text-blue-500">
                          {pub.year}
                        </span>
                      </div>
                      <CardDescription>
                        {pub.authors.join(", ")} —{" "}
                        <span className="italic">{pub.venue}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {pub.abstract}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {pub.citations} citations
                      </span>
                      <div className="flex gap-2">
                        {pub.arxiv && (
                          <a
                            href={pub.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-blue-500 hover:underline"
                          >
                            arXiv <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-blue-500 hover:underline"
                          >
                            DOI <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </AnimatedSection>
  )
}
