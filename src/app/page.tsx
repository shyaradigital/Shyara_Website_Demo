import { Hero } from "@/components/sections/home/Hero"
import { ValueStrip } from "@/components/sections/home/ValueStrip"
import { ProblemInsight } from "@/components/sections/home/ProblemInsight"
import { CoreValues } from "@/components/sections/home/CoreValues"
import { ServicesPreview } from "@/components/sections/home/ServicesPreview"
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview"
import { CTASection } from "@/components/sections/home/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ProblemInsight />
      <CoreValues />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </>
  )
}
