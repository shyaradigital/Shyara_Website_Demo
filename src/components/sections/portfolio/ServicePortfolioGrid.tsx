"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Globe,
  Smartphone,
  Video,
  Megaphone,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const portfolioItems = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    tag: "+20 more",
    result:
      "Avg. 60% growth in followers and 45% higher engagement across campaigns.",
  },
  {
    icon: Globe,
    title: "Website Development",
    tag: "+3 more",
    result:
      "40% increase in bookings and significantly improved lead conversion.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    tag: "+12 more",
    result:
      "Apps delivered in under 8 weeks—helping clients secure early funding.",
  },
  {
    icon: Video,
    title: "Video Editing & Reels",
    tag: "+3 more",
    result:
      "Tripled follower count and drastically boosted engagement metrics.",
  },
  {
    icon: Megaphone,
    title: "Ad Campaign Management",
    tag: "+9 more",
    result: "30% rise in sales with a 25% drop in customer acquisition cost.",
  },
  {
    icon: Sparkles,
    title: "Festive Posts",
    tag: "+5 more",
    result:
      "Enhanced brand visibility and engagement during major festivals.",
  },
]

export function ServicePortfolioGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => {
                    // Scroll to the portfolio showcase below or trigger modal
                    const element = document.getElementById("portfolio-showcase")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {item.tag}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      <span className="font-semibold text-foreground">
                        Key Result:
                      </span>{" "}
                      {item.result}
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
