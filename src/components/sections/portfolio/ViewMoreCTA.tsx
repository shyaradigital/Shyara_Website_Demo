"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FolderOpen } from "lucide-react"

export function ViewMoreCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-primary py-20 sm:py-24">
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
            <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
              <FolderOpen className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            <span className="relative z-10">Want to See More?</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-3xl opacity-50" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl"
          >
            Contact us for a complete portfolio or to discuss how we can bring
            your project to life.
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
              variant="secondary"
              className="group text-base shadow-lg hover:shadow-xl"
            >
              <Link href="/contact">
                Get Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
    </section>
  )
}
