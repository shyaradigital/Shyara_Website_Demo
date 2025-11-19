"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export function BrandPromise() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-background py-20 sm:py-24">
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
            className="mb-6 flex justify-center"
          >
            <div className="rounded-full bg-primary/10 p-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          >
            More Than a Service Provider — A Growth Partner.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            We don&apos;t just deliver deliverables. We deliver outcomes. Whatever
            your goals—visibility, sales, branding—we help you reach them faster.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
