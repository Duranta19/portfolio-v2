"use client"

import { motion } from "framer-motion"

export function FloatingGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, #3b82f6, transparent)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, #f97316, transparent)",
        }}
        animate={{
          x: [0, -60, 80, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
