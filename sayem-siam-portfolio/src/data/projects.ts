import type { AcademicProject } from "@/src/types"

export const academicProjects: AcademicProject[] = [
  {
    title: "Multi-Agent Research Assistant",
    problem:
      "Literature review in AI research is time-consuming. Researchers must search, filter, and synthesize information across hundreds of papers.",
    contribution:
      "Designed a multi-agent system where specialized agents handle search, extraction, summarization, and cross-referencing, reducing review time by 60%.",
    techStack: ["Python", "LangChain", "OpenAI", "Weaviate", "FastAPI"],
    github: "https://github.com/sayemsiam/multi-agent-research",
    demo: "https://research-assistant.demo.dev",
    metrics: [
      "60% reduction in review time",
      "92% citation accuracy",
      "500+ papers processed",
    ],
  },
  {
    title: "Semantic Code Search Engine",
    problem:
      "Traditional keyword-based code search fails to capture semantic intent, making it hard to find relevant code snippets.",
    contribution:
      "Built a semantic code search engine using transformer-based embeddings and approximate nearest neighbor search for large codebases.",
    techStack: ["TypeScript", "Python", "FastAPI", "pgvector", "OpenAI"],
    github: "https://github.com/sayemsiam/semantic-code-search",
    demo: "https://code-search.demo.dev",
    metrics: [
      "89% top-10 relevance",
      "50ms avg. query latency",
      "10M+ indexed snippets",
    ],
  },
  {
    title: "Distributed Task Scheduler",
    problem:
      "Cloud-native workloads require efficient scheduling across heterogeneous resources with changing availability.",
    contribution:
      "Developed a distributed scheduler using RL that dynamically allocates tasks across nodes while optimizing for latency and cost.",
    techStack: ["Go", "Python", "Redis", "Docker", "Kubernetes"],
    github: "https://github.com/sayemsiam/distributed-scheduler",
    metrics: [
      "35% lower latency",
      "22% cost reduction",
      "99.9% uptime",
    ],
  },
]
