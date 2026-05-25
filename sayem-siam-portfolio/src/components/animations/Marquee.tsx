"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  className,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
