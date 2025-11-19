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
      "Content, strategy, captions, posting, and analytics—everything handled for you.",
  },
  {
    icon: Sparkles,
    title: "Festive Post Designs",
    description:
      "High-impact festival creatives delivered instantly to boost visibility.",
  },
  {
    icon: Megaphone,
    title: "Ads Campaign Management",
    description:
      "Data-backed Meta & Google ads with free creatives and optimized targeting.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Lightning-fast, responsive, SEO-ready websites that convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Custom Android and iOS apps built for performance and long-term scalability.",
  },
  {
    icon: Video,
    title: "Video & Reels Editing",
    description:
      "Professional edits designed for reach, retention, and viral potential.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Services
          </h2>
        </motion.div>

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
                <Card className="group relative h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
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
                    <p className="text-muted-foreground leading-relaxed">
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
