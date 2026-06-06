// Resolve the canonical site URL.
// Priority: explicit env override → Vercel's production domain → local fallback.
// Set NEXT_PUBLIC_SITE_URL in production once you have a custom domain.
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://sayemsiam.dev");

// Normalize: strip any trailing slash so we never produce "...app//sitemap.xml".
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "Abu Sayem Md. Siam",
  title: "Abu Sayem Md. Siam | Software Engineer & Researcher",
  description:
    "Portfolio of Abu Sayem Md. Siam — Software Engineer at RoBenDevs building scalable microservices, SaaS platforms, and data-driven solutions, with published research in deep learning and computer vision.",
  // Short tagline used in structured data / OG image.
  jobTitle: "Software Engineer & Researcher",
  url: siteUrl,
  ogImage: "/og.png",
  resume: "/abu_sayem_md_siam_cv.pdf",
  // Keywords used for meta + to anchor the personal-name search intent.
  keywords: [
    "Abu Sayem Md. Siam",
    "Sayem Siam",
    "Abu Sayem",
    "Software Engineer",
    "Researcher",
    "RoBenDevs",
    "Deep Learning",
    "Computer Vision",
    "Microservices",
    "SaaS",
    "Machine Learning",
    "Dhaka",
    "Bangladesh",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/Duranta19",
    email: "asiam201033@bscse.uiu.ac.bd",
    phone: "+8801884928033",
    location: "Dhaka, Bangladesh",
  },
} as const;

export type SiteConfig = typeof siteConfig;
