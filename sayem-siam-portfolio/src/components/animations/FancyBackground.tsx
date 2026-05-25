"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/src/hooks";

function GradientOrb({
  size,
  color,
  initialX,
  initialY,
  duration,
  delay = 0,
}: {
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: [0, 120, -80, 60, -40, 0],
        y: [0, -100, 90, -60, 80, 0],
        scale: [1, 1.15, 0.9, 1.1, 1],
        opacity: [0.15, 0.25, 0.18, 0.22, 0.15],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function DotGrid() {
  const dots = [];
  const cols = 30;
  const rows = 20;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <motion.div
          key={`${r}-${c}`}
          className="absolute h-0.5 w-0.5 rounded-full bg-black/20"
          style={{
            left: `${(c / cols) * 100}%`,
            top: `${(r / rows) * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + ((r * c) % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: ((r + c) * 0.1) % 5,
          }}
        />,
      );
    }
  }

  return <div className="pointer-events-none absolute inset-0">{dots}</div>;
}

function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduced = useReducedMotion();

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduced, mouseX, mouseY]);

  if (reduced) return null;

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed -z-10 h-[600px] w-[600px] rounded-full blur-[150px]"
      style={{
        background:
          "radial-gradient(circle at center, rgba(59,130,246,0.08), transparent)",
        x: useTransform(springX, (v) => v - 300),
        y: useTransform(springY, (v) => v - 300),
      }}
    />
  );
}

export function FancyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <GradientOrb
        size={700}
        color="radial-gradient(circle at center, #3b82f6, transparent)"
        initialX="15%"
        initialY="-20%"
        duration={25}
      />
      <GradientOrb
        size={600}
        color="radial-gradient(circle at center, #f97316, transparent)"
        initialX="70%"
        initialY="60%"
        duration={30}
        delay={2}
      />
      <GradientOrb
        size={500}
        color="radial-gradient(circle at center, #8b5cf6, transparent)"
        initialX="50%"
        initialY="30%"
        duration={20}
        delay={4}
      />
      <DotGrid />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <MouseGradient />
    </div>
  );
}
