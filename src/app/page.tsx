import { Hero } from "@/components/sections/home/Hero"
import { Highlights } from "@/components/sections/home/Highlights"
import { ServicesPreview } from "@/components/sections/home/ServicesPreview"
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview"
import { CTASection } from "@/components/sections/home/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </>
  )
}
