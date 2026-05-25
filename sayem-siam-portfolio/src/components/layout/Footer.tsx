import { siteConfig } from "@/src/config"
import { GitBranch, Link2, Mail, GraduationCap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-black bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-gray-400">
              Software Engineer & Researcher
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
              aria-label="GitHub"
            >
              <GitBranch className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Link2 className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="transition-colors hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
              aria-label="Google Scholar"
            >
              <GraduationCap className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
