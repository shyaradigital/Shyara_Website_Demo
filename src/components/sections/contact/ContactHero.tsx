"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Have a project in mind? Tell us what you&apos;re looking for—we&apos;ll
            get back within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
