"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { sectionReveal } from "@/src/lib/animations"
import { useReducedMotion } from "@/src/hooks"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
