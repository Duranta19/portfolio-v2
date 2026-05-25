"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/src/hooks"

interface StaggeredTextProps {
  text: string
  className?: string
  delay?: number
}

export function StaggeredText({ text, className, delay = 0 }: StaggeredTextProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
