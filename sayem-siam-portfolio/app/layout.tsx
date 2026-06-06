import { FancyBackground } from "@/src/components/animations/FancyBackground";
import { Footer } from "@/src/components/layout/Footer";
import { Loader } from "@/src/components/layout/Loader";
import { Navigation } from "@/src/components/layout/Navigation";
import { ScrollProgress } from "@/src/components/layout/ScrollProgress";
import { siteConfig } from "@/src/config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD structured data — helps Google build a knowledge-panel entity for
// your name and rank the site for personal-name searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: ["Sayem Siam", "Abu Sayem"],
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,
  jobTitle: siteConfig.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: "RoBenDevs",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  email: `mailto:${siteConfig.links.email}`,
  sameAs: [siteConfig.links.github],
  knowsAbout: [
    "Software Engineering",
    "Deep Learning",
    "Computer Vision",
    "Microservices",
    "Machine Learning",
    "Distributed Systems",
  ],
  description: siteConfig.description,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col !bg-[#fff8ed] text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Loader />
        <ScrollProgress />
        <FancyBackground />
        {/* <FancyBackgroundV2 /> */}
        <Navigation />
        {/* overflow-x-clip contains decorative section overflow (e.g. Hero's
            floating chips) so the page never scrolls horizontally. Applied
            here rather than on html/body so the sticky <header> isn't broken. */}
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
