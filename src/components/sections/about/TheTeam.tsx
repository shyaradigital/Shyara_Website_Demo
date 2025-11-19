"use client"

import { motion } from "framer-motion"
import { Palette, Target, PenTool } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  {
    icon: Palette,
    title: "The Creators",
    description:
      "Designing visuals that stop the scroll and elevate your identity.",
  },
  {
    icon: Target,
    title: "The Strategists",
    description:
      "Transforming insights and data into scalable growth opportunities.",
  },
  {
    icon: PenTool,
    title: "The Storytellers",
    description: "Crafting narratives that make your brand unforgettable.",
  },
]

export function TheTeam() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The People Behind Shyara
          </h2>
        </motion.div>

        <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {member.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto max-w-3xl text-center text-lg leading-8 text-muted-foreground sm:text-xl"
        >
          We&apos;re fully remote, globally connected, and fueled by creativity,
          caffeine, and the drive to help brands win.
        </motion.p>
      </div>
    </section>
  )
}
