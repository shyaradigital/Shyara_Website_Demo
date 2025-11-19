"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export function AboutShyara() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              One Team. Endless Capabilities.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              Shyara gives you the speed and flexibility of freelancers,
              combined with the expertise of a full-scale digital team. No
              bloated costs. No slow processes. Just consistent, measurable
              growth.
            </motion.p>
          </motion.div>

          {/* Right Column - Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full w-full rounded-2xl border border-border/50 bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 backdrop-blur-sm">
              {/* Animated workspace graphic placeholder */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 rounded-xl border border-primary/20 bg-primary/5"
              />
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center gap-3">
                    <Users className="h-16 w-16 text-primary/50" />
                    <div className="flex -space-x-2">
                      <div className="h-12 w-12 rounded-full border-4 border-background bg-primary/30" />
                      <div className="h-12 w-12 rounded-full border-4 border-background bg-purple-600/30" />
                      <div className="h-12 w-12 rounded-full border-4 border-background bg-primary/50" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Workspace / Team Visual
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    TODO: Add workspace illustration or creative visual here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
