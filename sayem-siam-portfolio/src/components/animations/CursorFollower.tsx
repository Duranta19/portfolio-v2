"use client"

import { motion } from "framer-motion"
import { useMousePosition, useReducedMotion } from "@/src/hooks"
import { useEffect, useState } from "react"

export function CursorFollower() {
  const { x, y } = useMousePosition()
  const reduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (reduced || !mounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500 mix-blend-difference"
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    />
  )
}
