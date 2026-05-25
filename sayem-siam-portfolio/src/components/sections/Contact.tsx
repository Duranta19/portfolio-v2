"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, GitBranch, Link2, Mail, GraduationCap, FileDown } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading, Button } from "@/src/components/ui"
import { MagneticButton } from "@/src/components/ui"
import { siteConfig } from "@/src/config"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <AnimatedSection>
      <section id="contact" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Interested in research collaboration, graduate opportunities, or just want to say hi?"
          />

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1 w-full border-2 border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 w-full border-2 border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 w-full border-2 border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>
                <MagneticButton>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    {submitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-700">
                I am actively seeking{" "}
                <strong>Research Assistant (RA) positions</strong> and{" "}
                <strong>graduate opportunities</strong> in NLP, multi-agent
                systems, and distributed AI. If your work aligns with my research
                interests, I would love to hear from you.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1">
                  <Mail className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                  <span className="text-sm font-medium">{siteConfig.links.email}</span>
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1">
                  <GitBranch className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1">
                  <Link2 className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1">
                  <GraduationCap className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                  <span className="text-sm font-medium">Google Scholar</span>
                </a>
                <a
                  href={siteConfig.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1">
                  <FileDown className="h-5 w-5 transition-colors group-hover:text-blue-500" />
                  <span className="text-sm font-medium">ORCID</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
