import { cn } from "@/src/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-16 bg-black" />
    </div>
  )
}
