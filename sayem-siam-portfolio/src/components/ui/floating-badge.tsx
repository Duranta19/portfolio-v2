"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingBadgeProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FloatingBadge({ children, delay = 0, className }: FloatingBadgeProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
