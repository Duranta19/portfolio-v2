"use client"

import { motion } from "framer-motion"
import { ExternalLink, GitBranch } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading, Card, CardHeader, CardTitle, CardContent, CardFooter, Badge } from "@/src/components/ui"
import { academicProjects } from "@/src/data"

export function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Academic Projects"
            subtitle="Research-driven projects spanning AI systems, multi-agent architectures, and distributed computing."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {academicProjects.map((project, i) => (
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
                        className="flex items-center gap-1 text-sm font-medium hover:text-blue-500"
                      >
                        <GitBranch className="h-4 w-4" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium hover:text-blue-500"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
