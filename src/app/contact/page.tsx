import type { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact/ContactHero"
import { ContactContent } from "@/components/sections/contact/ContactContent"
import { ContactFooterCTA } from "@/components/sections/contact/ContactFooterCTA"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shyara Digital for your digital marketing needs",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
      <ContactFooterCTA />
    </>
  )
}