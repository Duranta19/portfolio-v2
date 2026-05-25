import type { Metadata } from "next"
import { Contact } from "@/src/components/sections/Contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sayem Siam for research collaboration or graduate opportunities.",
}

export default function ContactPage() {
  return (
    <div className="pt-8">
      <Contact />
    </div>
  )
}
