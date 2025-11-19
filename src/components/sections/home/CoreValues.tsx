"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const coreValues = [
  {
    icon: Sparkles,
    title: "Creative Content",
    description:
      "High-quality visuals and messaging that attract, engage, and convert.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Campaigns",
    description:
      "Strategic ads and funnels built to turn followers into paying customers.",
  },
  {
    icon: Zap,
    title: "Scalable Digital Solutions",
    description:
      "Websites and apps engineered for performance, growth, and long-term ROI.",
  },
]

export function CoreValues() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
