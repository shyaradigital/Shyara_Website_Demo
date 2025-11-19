import { AboutHero } from "@/components/sections/about/Hero"
import { OurStory } from "@/components/sections/about/OurStory"
import { HowWeWork } from "@/components/sections/about/HowWeWork"
import { TheTeam } from "@/components/sections/about/TheTeam"
import { WhatWeStandFor } from "@/components/sections/about/WhatWeStandFor"
import { TeamAchievements } from "@/components/sections/about/TeamAchievements"
import { ClosingStatement } from "@/components/sections/about/ClosingStatement"
import { AboutCTA } from "@/components/sections/about/AboutCTA"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <HowWeWork />
      <TheTeam />
      <WhatWeStandFor />
      <TeamAchievements />
      <ClosingStatement />
      <AboutCTA />
    </>
  )
}