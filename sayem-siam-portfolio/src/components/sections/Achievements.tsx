"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Trophy, GitBranch, Landmark, BadgeCheck } from "lucide-react"
import { AnimatedSection } from "@/src/components/animations"
import { SectionHeading } from "@/src/components/ui"
import { achievements } from "@/src/data"

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="h-5 w-5" />,
  scholar: <BookOpen className="h-5 w-5" />,
  trophy: <Trophy className="h-5 w-5" />,
  git: <GitBranch className="h-5 w-5" />,
  grant: <Landmark className="h-5 w-5" />,
  cert: <BadgeCheck className="h-5 w-5" />,
}

export function Achievements() {
  return (
    <AnimatedSection>
      <section id="achievements" className="border-b-2 border-black px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Achievements"
            subtitle="Awards, scholarships, and recognitions."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 border-2 border-black bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black bg-black text-white">
                  {iconMap[achievement.icon] || <Award className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold">{achievement.title}</h3>
                  <p className="mt-1 text-xs text-gray-600">
                    {achievement.description}
                  </p>
                  <span className="mt-1 inline-block text-xs font-semibold text-blue-500">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
