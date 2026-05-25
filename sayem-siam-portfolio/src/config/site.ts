export const siteConfig = {
  name: "Sayem Siam",
  title: "Sayem Siam | Software Engineer & Researcher",
  description:
    "Portfolio of Sayem Siam — Software Engineer, AI/ML Researcher exploring NLP, agentic AI, distributed systems.",
  url: "https://sayemsiam.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/sayemsiam",
    linkedin: "https://linkedin.com/in/sayemsiam",
    email: "sayem@example.edu",
    scholar: "https://scholar.google.com/citations?user=example",
    orcid: "https://orcid.org/0000-0000-0000-0000",
  },
} as const

export type SiteConfig = typeof siteConfig
