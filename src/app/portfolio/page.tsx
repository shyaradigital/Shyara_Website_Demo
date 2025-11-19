import type { Metadata } from "next"
import { PortfolioHero } from "@/components/sections/portfolio/PortfolioHero"
import { ServicePortfolioGrid } from "@/components/sections/portfolio/ServicePortfolioGrid"
import { ViewMoreCTA } from "@/components/sections/portfolio/ViewMoreCTA"
import { PortfolioPage } from "@/components/portfolio/PortfolioPage"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of work across all services",
}

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <ServicePortfolioGrid />
      <ViewMoreCTA />
      <div id="portfolio-showcase">
        <PortfolioPage />
      </div>
    </>
  )
}