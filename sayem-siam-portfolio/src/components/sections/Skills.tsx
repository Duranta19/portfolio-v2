"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/src/components/animations"
import { Marquee } from "@/src/components/animations"
import { SectionHeading } from "@/src/components/ui"
import { skills, skillCategories } from "@/src/data"
import type { SkillCategory } from "@/src/types"

const categoryColors: Record<SkillCategory, string> = {
  Languages: "border-blue-500 bg-blue-50",
  Frontend: "border-orange-500 bg-orange-50",
  Backend: "border-green-500 bg-green-50",
  "AI/Research": "border-purple-500 bg-purple-50",
  DevOps: "border-red-500 bg-red-50",
}

function SkillPill({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <motion.div
      className="group relative inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="text-sm font-medium">{name}</span>
      <div className="h-2 w-16 overflow-hidden border border-gray-300">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Tools and technologies I work with across the full stack and research spectrum."
          />

          <div className="space-y-8">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category)
              const color = categoryColors[category as SkillCategory]

              return (
                <div key={category} className={`border-2 ${color} p-6`}>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <SkillPill key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 overflow-hidden border-y-2 border-black py-4">
            <Marquee direction="left" speed={25}>
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="mx-4 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {skill.name} • {skill.proficiency}%
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
