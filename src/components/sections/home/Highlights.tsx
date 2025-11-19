"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: TrendingUp,
    title: "TODO: Highlight Title",
    description: "TODO: User will provide content",
  },
  {
    icon: Users,
    title: "TODO: Highlight Title",
    description: "TODO: User will provide content",
  },
  {
    icon: Award,
    title: "TODO: Highlight Title",
    description: "TODO: User will provide content",
  },
]

export function Highlights() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            TODO: User will provide content
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            TODO: User will provide content
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      {highlight.description}
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