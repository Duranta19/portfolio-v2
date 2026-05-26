import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/src/components/ui";
import { SectionHeading } from "@/src/components/ui";
import { skills, education, experiences, metrics } from "@/src/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Sayem Siam — Software Engineer & Researcher.",
};

export default function ResumePage() {
  return (
    <div className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <SectionHeading
            title="Resume"
            subtitle="Software Engineer & Researcher"
            className="mb-0"
          />
          <Button variant="primary" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="mb-6 text-2xl font-bold">Summary</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="border-2 border-black bg-white p-4 text-center"
                >
                  <span className="text-2xl font-black">
                    {m.value}
                    {m.suffix}
                  </span>
                  <p className="mt-1 text-xs text-gray-600">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Skills</h2>
            <div className="space-y-4">
              {[
                "Languages",
                "Frontend",
                "Backend",
                "AI/Research",
                "DevOps",
              ].map((cat) => (
                <div key={cat}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === cat)
                      .map((s) => (
                        <span
                          key={s.name}
                          className="border-2 border-black px-3 py-1 text-xs font-medium"
                        >
                          {s.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.organization}
                  className="border-l-2 border-black pl-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                    {exp.duration}
                  </span>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-gray-600">
                    {exp.organization} — {exp.location}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        • {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="border border-gray-300 px-2 py-0.5 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-black pl-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">
                    {edu.institution}, {edu.location}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    Research Focus: {edu.researchFocus}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
