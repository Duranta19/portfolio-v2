"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading } from "@/src/components/ui"
import { education } from "@/src/data"
import { useReducedMotion } from "@/src/hooks"
import { BookOpen } from "lucide-react"

function TimelineDot() {
  return (
    <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center">
      <div className="h-3 w-3 rotate-45 border-2 border-black bg-white" />
    </div>
  )
}

export function Education() {
  const reduced = useReducedMotion()

  return (
    <AnimatedSection>
      <section id="education" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Education"
            subtitle="Academic background and research focus."
          />

          <div className="relative ml-6 space-y-12 border-l-2 border-black pl-8">
            {education.map((edu, i) => (
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                    {edu.period}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="mt-3 text-sm font-medium">
                    Research Focus: {edu.researchFocus}
                  </p>
                  {edu.thesis && (
                    <p className="mt-2 text-sm italic text-gray-600">
                      Thesis: {edu.thesis}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="border border-gray-300 px-2 py-0.5 text-xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
