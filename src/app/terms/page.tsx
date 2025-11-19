import type { Metadata } from "next"
import { TermsHero } from "@/components/sections/terms/TermsHero"
import { TermsContent } from "@/components/sections/terms/TermsContent"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Shyara Digital services",
}

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  )
}