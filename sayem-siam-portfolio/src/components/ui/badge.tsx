import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-none border-2 px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-black bg-black text-white",
        secondary:
          "border-blue-500 bg-blue-500 text-white",
        outline:
          "border-black text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
