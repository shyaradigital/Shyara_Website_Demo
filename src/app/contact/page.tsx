import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "TODO: User will provide content",
}

export default function ContactPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          TODO: User will provide content
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          TODO: User will provide content
        </p>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
