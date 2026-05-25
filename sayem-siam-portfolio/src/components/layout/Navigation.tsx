"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/src/config"
import { useReducedMotion } from "@/src/hooks"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight"
        >
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-blue-500"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border-2 border-black"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t-2 border-black bg-white md:hidden"
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-medium transition-colors hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
