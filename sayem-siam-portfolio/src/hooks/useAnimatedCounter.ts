"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "./useReducedMotion"
import { useInView } from "framer-motion"

interface UseAnimatedCounterOptions {
  end: number
  duration?: number
  suffix?: string
}

export function useAnimatedCounter({ end, duration = 2000, suffix = "" }: UseAnimatedCounterOptions) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplayed(end)
      return
    }
    let startTime: number | null = null
    let raf: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.floor(eased * end))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration, reduced])

  return { ref, displayed: `${displayed}${suffix}` }
}
