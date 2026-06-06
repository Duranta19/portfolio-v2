"use client";

import { AnimatedSection } from "@/src/components/animations";
import { SectionHeading } from "@/src/components/ui";
import { metrics } from "@/src/data";
import { useAnimatedCounter, useReducedMotion } from "@/src/hooks";

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, displayed } = useAnimatedCounter({ end: value, suffix });

  return (
    <div className="border-2 border-black bg-white p-5 hover:bg-amber-200">
      <span ref={ref} className="text-3xl font-black md:text-4xl">
        {displayed}
      </span>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
}

function Metric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="border-2 border-black bg-white p-5">
      <span className="text-3xl font-black md:text-4xl">
        {value}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
}

export function About() {
  const reduced = useReducedMotion();

  return (
    <AnimatedSection>
      <section
        id="about"
        className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="About Me"
            subtitle="Software engineer building scalable, data-driven systems — with a research background in machine learning."
          />

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                I am a <strong>Software Engineer</strong> with hands-on
                experience developing scalable{" "}
                <strong>microservice web applications</strong>,{" "}
                <strong>SaaS platforms</strong>, and{" "}
                <strong>data-driven solutions</strong>. At{" "}
                <strong>RoBenDevs</strong>, I&apos;ve contributed to building
                microservice-based CRM systems, designing robust backends, and
                integrating third-party tools to enhance business performance.
              </p>
              <p>
                I enjoy tackling complex problems — from optimizing{" "}
                <strong>ETL pipelines</strong> to automating workflows that
                streamline operations. I focus on writing clean, maintainable
                code while collaborating with cross-functional teams to deliver
                reliable, high-quality software.
              </p>
              <p>
                Passionate about learning and growth, I am eager to keep
                expanding my expertise in <strong>data science</strong> —
                deepening my knowledge in machine learning, statistical
                modeling, and big data technologies to build innovative,
                user-focused data solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) =>
                reduced ? (
                  <Metric key={metric.label} {...metric} />
                ) : (
                  <AnimatedMetric key={metric.label} {...metric} />
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
