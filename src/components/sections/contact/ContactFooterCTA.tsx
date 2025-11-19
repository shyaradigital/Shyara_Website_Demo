"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export function ContactFooterCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
          </div>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Prefer talking directly? Call us anytime during working hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
