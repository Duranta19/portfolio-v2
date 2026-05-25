"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading } from "@/src/components/ui"
import { metrics } from "@/src/data"
import { useAnimatedCounter, useReducedMotion } from "@/src/hooks"

function AnimatedMetric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, displayed } = useAnimatedCounter({ end: value, suffix })

  return (
    <div className="border-2 border-black bg-white p-5">
      <span
        ref={ref}
        className="text-3xl font-black md:text-4xl"
      >
        {displayed}
      </span>
      <p className="mt-1 text-sm text-gray-600">
        {label}
      </p>
    </div>
  )
}

function Metric({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="border-2 border-black bg-white p-5">
      <span className="text-3xl font-black md:text-4xl">
        {value}{suffix}
      </span>
      <p className="mt-1 text-sm text-gray-600">
        {label}
      </p>
    </div>
  )
}

export function About() {
  const reduced = useReducedMotion()

  return (
    <AnimatedSection>
      <section id="about" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="About Me"
            subtitle="Software engineer turned researcher, building at the intersection of systems and intelligence."
          />

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                I am a software engineer and researcher with a deep passion for
                building systems that bridge the gap between cutting-edge AI research
                and practical engineering.
              </p>
              <p>
                My research focuses on <strong>NLP</strong>,{" "}
                <strong>multi-agent systems</strong>, and{" "}
                <strong>distributed computing</strong>. I explore how large language
                models can be composed into reliable, scalable agentic systems that
                tackle complex real-world tasks.
              </p>
              <p>
                With a strong foundation in distributed systems and full-stack
                engineering, I bring a systems-thinking approach to AI research —
                building not just models, but robust, production-ready systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) =>
                reduced ? (
                  <Metric key={metric.label} {...metric} />
                ) : (
                  <AnimatedMetric key={metric.label} {...metric} />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
