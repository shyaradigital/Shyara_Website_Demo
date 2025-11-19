import { Hero } from "@/components/sections/home/Hero"
import { ValueStrip } from "@/components/sections/home/ValueStrip"
import { ProblemInsight } from "@/components/sections/home/ProblemInsight"
import { CoreValues } from "@/components/sections/home/CoreValues"
import { AboutShyara } from "@/components/sections/home/AboutShyara"
import { ServicesGrid } from "@/components/sections/home/ServicesGrid"
import { ShyaraAdvantage } from "@/components/sections/home/ShyaraAdvantage"
import { MetricsStrip } from "@/components/sections/home/MetricsStrip"
import { Testimonials } from "@/components/sections/home/Testimonials"
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview"
import { CTASection } from "@/components/sections/home/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ProblemInsight />
      <CoreValues />
      <AboutShyara />
      <ServicesGrid />
      <ShyaraAdvantage />
      <MetricsStrip />
      <Testimonials />
      <PortfolioPreview />
      <CTASection />
    </>
  )
}
