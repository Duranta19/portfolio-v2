"use client"

import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useRef } from "react"

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(Math.round(latest * 100))
  })

  return { progress, containerRef }
}
