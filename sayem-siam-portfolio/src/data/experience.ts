import type { Experience } from "@/src/types"

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    organization: "TechCorp Inc.",
    location: "Remote",
    duration: "Jan 2024 – Present",
    contributions: [
      "Built distributed microservices handling 10M+ daily requests",
      "Implemented RAG pipeline for internal knowledge base",
      "Led migration from monolith to microservices architecture",
      "Reduced API latency by 40% through caching optimization",
    ],
    technologies: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Research Assistant",
    organization: "University NLP Lab",
    location: "City, Country",
    duration: "Jun 2023 – Dec 2023",
    contributions: [
      "Developed multi-agent framework for complex NLP tasks",
      "Published 2 papers at top-tier conferences (ACL, EMNLP)",
      "Built semantic search system for scientific literature",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "Weaviate", "Hugging Face"],
  },
  {
    role: "Software Engineering Intern",
    organization: "StartupXYZ",
    location: "City, Country",
    duration: "May 2022 – Aug 2022",
    contributions: [
      "Built full-stack features for SaaS platform",
      "Implemented CI/CD pipelines with GitHub Actions",
      "Wrote comprehensive test suite (90%+ coverage)",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
]
