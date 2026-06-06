"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/src/config";
import { useReducedMotion } from "@/src/hooks";

const initials = siteConfig.name
  .replace(/[^a-zA-Z ]/g, "")
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((w) => w[0])
  .join("")
  .toUpperCase();

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const DURATION = reduced ? 400 : 1700;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      // Ease-out so the bar decelerates as it fills.
      const t = Math.min(1, elapsed / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        window.setTimeout(() => {
          // Restore scrolling before the overlay animates away — the component
          // stays mounted, so this must happen here rather than on unmount.
          document.body.style.overflow = previousOverflow;
          setDone(true);
        }, reduced ? 80 : 350);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = previousOverflow;
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={false}
          exit={
            reduced
              ? { opacity: 0 }
              : { y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
          }
        >
          <div className="flex w-full max-w-sm flex-col items-center px-6">
            {/* Initials badge */}
            <motion.div
              className="flex h-28 w-28 items-center justify-center border-2 border-black bg-amber-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:h-32 md:w-32"
              initial={reduced ? undefined : { scale: 0.6, opacity: 0, rotate: -8 }}
              animate={reduced ? undefined : { scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-5xl font-black tracking-tighter md:text-6xl">
                {initials}
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              className="mt-6 text-center text-lg font-bold tracking-tight md:text-xl"
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {siteConfig.name}
            </motion.p>
            <motion.p
              className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-gray-500"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Software Engineer &amp; Researcher
            </motion.p>

            {/* Progress bar */}
            <div className="mt-8 w-full">
              <div className="h-3 w-full border-2 border-black bg-white">
                <div
                  className="h-full bg-black"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs font-bold">
                <span className="uppercase tracking-widest text-gray-500">
                  Loading
                </span>
                <span className="tabular-nums">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
