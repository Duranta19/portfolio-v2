"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading, Badge } from "@/src/components/ui"
import { experiences } from "@/src/data"
import { useReducedMotion } from "@/src/hooks"

function TimelineDot() {
  return (
    <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center">
      <div className="h-3 w-3 rotate-45 border-2 border-blue-500 bg-white" />
    </div>
  )
}

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const reduced = useReducedMotion()

  return (
    <AnimatedSection>
      <section id="experience" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Experience"
            subtitle="Professional journey in software engineering and research."
          />

          <div className="relative ml-6 space-y-10 border-l-2 border-black pl-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={reduced ? undefined : { opacity: 0, x: -20 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <TimelineDot />

                <div className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                        {exp.duration}
                      </span>
                      <h3 className="mt-1 text-lg font-bold">{exp.role}</h3>
                      <p className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.organization} — {exp.location}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="flex h-8 w-8 items-center justify-center border-2 border-black"
                      aria-label={expanded === i ? "Collapse" : "Expand"}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expanded === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={reduced ? undefined : { height: 0, opacity: 0 }}
                        animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3 overflow-hidden"
                      >
                        <ul className="space-y-2">
                          {exp.contributions.map((c, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 border border-black" />
                              {c}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
