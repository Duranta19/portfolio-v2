export interface NavItem {
  label: string
  href: string
}

export interface Skill {
  name: string
  category: SkillCategory
  icon?: string
  proficiency: number
}

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "AI/Research"
  | "DevOps"

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  researchFocus: string
  thesis?: string
  coursework: string[]
}

export interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  doi?: string
  arxiv?: string
  abstract: string
  tags: string[]
  citations: number
}

export interface AcademicProject {
  title: string
  problem: string
  contribution: string
  techStack: string[]
  architecture?: string
  github?: string
  demo?: string
  publicationRelation?: string
  metrics: string[]
}

export interface Achievement {
  title: string
  description: string
  year: number
  icon: string
}

export interface Experience {
  role: string
  organization: string
  location: string
  duration: string
  contributions: string[]
  technologies: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface Metric {
  value: number
  suffix: string
  label: string
}
