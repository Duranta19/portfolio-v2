"use client";

import { useState } from "react";
import { Send, GitBranch, Mail, Phone, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/src/components/animations";
import { SectionHeading, Button } from "@/src/components/ui";
import { MagneticButton } from "@/src/components/ui";
import { siteConfig } from "@/src/config";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(
          body?.error || "Something went wrong. Please try again.",
        );
      }

      form.reset();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28"
      >
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
                    name="name"
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
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full border-2 border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
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
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : status === "success" ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </MagneticButton>

                {status === "success" && (
                  <p
                    className="text-sm font-medium text-green-700"
                    role="status"
                  >
                    Thanks! Your message has been sent — I&apos;ll get back to
                    you soon.
                  </p>
                )}
                {status === "error" && error && (
                  <p className="text-sm font-medium text-red-700" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-700">
                I am actively seeking{" "}
                <strong>Research Assistant (RA) positions</strong> and{" "}
                <strong>graduate opportunities</strong> in NLP, multi-agent
                systems, and distributed AI. If your work aligns with my
                research interests, I would love to hear from you.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1"
                >
                  <Mail className="h-5 w-5 transition-colors group-hover:text-amber-500" />
                  <span className="text-sm font-medium">
                    {siteConfig.links.email}
                  </span>
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1"
                >
                  <GitBranch className="h-5 w-5 transition-colors group-hover:text-amber-500" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 transition-colors group-hover:text-amber-500"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.links.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1"
                >
                  <GraduationCap className="h-5 w-5 transition-colors group-hover:text-amber-500" />
                  <span className="text-sm font-medium">Google Scholar</span>
                </a>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="group flex items-center gap-3 border-2 border-black bg-white p-4 transition-all hover:translate-x-1"
                >
                  <Phone className="h-5 w-5 transition-colors group-hover:text-amber-500" />
                  <span className="text-sm font-medium">
                    {siteConfig.links.phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
