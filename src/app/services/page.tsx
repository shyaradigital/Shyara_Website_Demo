import { ServicesHero } from "@/components/sections/services/ServicesHero"
import { ServicesGrid } from "@/components/sections/services/ServicesGrid"
import { CustomServicesCTA } from "@/components/sections/services/CustomServicesCTA"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CustomServicesCTA />
    </>
  )
}