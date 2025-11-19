"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            TODO: User will provide content
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            TODO: User will provide content
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">TODO: User will provide content</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
