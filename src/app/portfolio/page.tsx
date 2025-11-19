import type { Metadata } from "next"
import { PortfolioPage } from "@/components/portfolio/PortfolioPage"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of work across all services",
}

export default function Portfolio() {
  return <PortfolioPage />
}