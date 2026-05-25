import type { Publication } from "@/src/types"

export const publications: Publication[] = [
  {
    title:
      "Efficient Multi-Agent Task Decomposition for Complex NLP Pipelines",
    authors: ["S. Siam", "J. Doe", "A. Researcher"],
    venue: "ACL 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2501.xxxxx",
    abstract:
      "We propose a novel multi-agent framework for decomposing complex NLP tasks into subtasks that can be solved by specialized agents. Our approach achieves 23% improvement in task completion accuracy while reducing computational costs by 18%.",
    tags: ["Multi-Agent Systems", "NLP", "Task Decomposition"],
    citations: 12,
  },
  {
    title:
      "Semantic Retrieval-Augmented Generation for Scientific Literature Review",
    authors: ["S. Siam", "B. Smith"],
    venue: "EMNLP 2024",
    year: 2024,
    doi: "10.xxxx/emnlp2024.xxxxx",
    abstract:
      "A retrieval-augmented generation system designed specifically for scientific literature review, incorporating domain-specific embeddings and citation-aware retrieval strategies.",
    tags: ["RAG", "Semantic Search", "Scientific NLP"],
    citations: 34,
  },
  {
    title: "Distributed Scheduling with Reinforcement Learning for Cloud-Native Systems",
    authors: ["S. Siam", "C. Lee", "M. Johnson"],
    venue: "ICDCS 2024",
    year: 2024,
    arxiv: "https://arxiv.org/abs/2406.xxxxx",
    abstract:
      "We present a reinforcement learning-based scheduling system for distributed cloud-native workloads that adapts to changing resource demands and network conditions.",
    tags: ["Distributed Systems", "RL", "Scheduling"],
    citations: 8,
  },
]
