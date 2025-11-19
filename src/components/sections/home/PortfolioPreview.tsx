"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { portfolioServices } from "@/data/portfolio-data"

export function PortfolioPreview() {
  // Show only first 3 services as preview
  const previewServices = portfolioServices.slice(0, 3)

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            TODO: User will provide content
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            TODO: User will provide content
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {previewServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="flex h-full items-center justify-center p-8 text-center">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.service}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.samples.length} samples
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">TODO: User will provide content</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}