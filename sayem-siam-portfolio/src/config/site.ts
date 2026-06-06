export const siteConfig = {
  name: "Abu Sayem Md. Siam",
  title: "Abu Sayem Md. Siam | Software Engineer & Researcher",
  description:
    "Portfolio of Abu Sayem Md. Siam — Software Engineer at RoBenDevs building scalable microservices, SaaS platforms, and data-driven solutions, with published research in deep learning and computer vision.",
  url: "https://sayemsiam.dev",
  ogImage: "/og.png",
  resume: "/abu_sayem_md_siam_cv.pdf",
  links: {
    github: "https://github.com/Duranta19",
    email: "asiam201033@bscse.uiu.ac.bd",
    phone: "+8801884928033",
    location: "Dhaka, Bangladesh",
  },
} as const;

export type SiteConfig = typeof siteConfig;
