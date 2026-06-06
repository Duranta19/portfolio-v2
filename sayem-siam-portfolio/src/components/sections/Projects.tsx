"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, GitBranch } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading, Card, CardHeader, CardTitle, CardContent, CardFooter, Badge, Pagination } from "@/src/components/ui"
import { academicProjects } from "@/src/data"

const PER_PAGE = 3

export function Projects() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(academicProjects.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const visible = academicProjects.slice(start, start + PER_PAGE)

  return (
    <AnimatedSection>
      <section id="projects" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Projects"
            subtitle="Full-stack web applications spanning startup platforms, supply chain, and community tools."
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Problem
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-700">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Contribution
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-700">
                        {project.contribution}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Metrics
                      </h4>
                      <ul className="list-inside list-disc text-sm text-gray-600">
                        {project.metrics.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium hover:text-amber-500"
                      >
                        <GitBranch className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium hover:text-amber-500"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="mt-12"
          />
        </div>
      </section>
    </AnimatedSection>
  )
}
