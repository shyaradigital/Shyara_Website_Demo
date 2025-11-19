"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Sparkles,
  Megaphone,
  Globe,
  Smartphone,
  Video,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "High-quality posts, reels, captions, and full community management across all platforms.",
  },
  {
    icon: Sparkles,
    title: "Festive Post Designs",
    description:
      "Beautifully branded festival posts with your logo, colors, and contact info—delivered instantly.",
  },
  {
    icon: Megaphone,
    title: "Ads Campaign Management",
    description:
      "High-ROI Meta & Google ads with free creatives, optimized targeting, and transparent reporting.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, high-speed, responsive websites for portfolios, businesses, and e-commerce brands.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom Android & iOS apps with complete UI/UX, development, and deployment support.",
  },
  {
    icon: Video,
    title: "Video & Reels Editing",
    description:
      "Fast-paced, high-performing reels and videos created from your raw footage for maximum reach.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {service.description}
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
