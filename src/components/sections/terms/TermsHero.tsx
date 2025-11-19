"use client"

import { motion } from "framer-motion"

export function TermsHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Terms & Conditions
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            Shyara Digital — Rules, Policies & Service Guidelines
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            By using our services, you agree to the following terms and
            conditions. These guidelines ensure seamless collaboration,
            professional clarity, and smooth project execution for both parties.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
