"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import type { ReactNode } from "react"
import { useReducedMotion } from "@/src/hooks"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  asChild?: boolean
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const reduced = useReducedMotion()

  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    x.set(distX * 0.15)
    y.set(distY * 0.15)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}
