"use client"

import { motion } from "framer-motion"

export function ValueStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Transforming Brands With Strategy, Creativity, and Consistency.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            From content to campaigns to complete digital ecosystems—we build
            everything a modern brand needs to grow.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
