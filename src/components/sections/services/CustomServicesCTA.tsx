"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CustomServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-purple-900/30 to-primary/20 py-20 sm:py-24">
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
            <div className="rounded-full bg-primary/20 p-4 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            <span className="relative z-10">Want Something Truly Unique?</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary/20 via-purple-500/30 to-primary/20 blur-3xl opacity-50" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Explore tailor-made digital solutions, one-on-one consulting, and
            specialized creative services—built entirely around your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <Button
              asChild
              size="lg"
              className="group text-base shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">
                Explore Personalized Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />
    </section>
  )
}
