"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, GraduationCap, Mail } from "lucide-react"
import { Button } from "@/src/components/ui"
import { MagneticButton } from "@/src/components/ui"
import { FloatingBadge } from "@/src/components/ui"
import { StaggeredText } from "@/src/components/animations"
import { siteConfig } from "@/src/config"

const techChips = [
  "TypeScript", "Python", "Next.js", "React",
  "NLP", "LLMs", "RAG", "Go",
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] border-b-2 border-black px-4 pb-16 pt-24 md:px-6 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Software Engineer & Researcher
            </motion.p>

            <h1 className="text-4xl font-black leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
              <StaggeredText text={siteConfig.name} />
            </h1>

            <motion.p
              className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building intelligent systems at the intersection of{" "}
              <span className="font-semibold text-black">
                software engineering
              </span>
              ,{" "}
              <span className="font-semibold text-black">
                AI/ML research
              </span>
              , and{" "}
              <span className="font-semibold text-black">
                distributed systems
              </span>
              .
            </motion.p>

            <motion.div
              className="mt-4 inline-flex items-center gap-2 rounded-none border-2 border-green-500 bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to Research & Graduate Opportunities
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MagneticButton>
                <Button variant="primary" size="lg" asChild>
                  <a href="/resume">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#publications">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    View Publications
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex h-64 w-64 items-center justify-center border-3 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:h-80 md:w-80">
              <span className="text-6xl font-black">SS</span>
            </div>

            {techChips.map((chip, i) => (
              <div
                key={chip}
                className="absolute"
                style={{
                  top: `${10 + i * 15}%`,
                  right: i % 2 === 0 ? "-60px" : "auto",
                  left: i % 2 === 0 ? "auto" : "-60px",
                }}
              >
                <FloatingBadge delay={i * 0.3}>
                  <span className="inline-block whitespace-nowrap rounded-none border-2 border-black bg-white px-3 py-1 text-xs font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {chip}
                  </span>
                </FloatingBadge>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
