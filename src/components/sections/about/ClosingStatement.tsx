"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="rounded-full bg-primary/20 p-4">
              <Quote className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-8 text-foreground sm:text-2xl md:text-3xl"
          >
            We&apos;re not just another name in your inbox. We&apos;re the team
            that learns your brand inside-out, fights for your goals, and
            celebrates your wins like they&apos;re our own.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
