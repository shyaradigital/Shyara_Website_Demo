"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export function ProblemInsight() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="rounded-full bg-primary/10 p-4">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            A Generic Online Presence Isn&apos;t Enough Anymore.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            In a fast, crowded digital world, templates won&apos;t set you apart.
            What you need is a brand identity that is designed, positioned, and
            engineered for impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
