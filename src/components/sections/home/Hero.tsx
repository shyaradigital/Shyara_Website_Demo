"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      <div className="container relative z-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Digital Creativity That Builds Powerful Brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              We combine analytical strategy with high-impact storytelling to
              help your brand cut through the noise and grow faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <Button asChild size="lg" className="group text-base">
                <Link href="/contact">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration/Animation Placeholder */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full w-full rounded-2xl border border-border/50 bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 backdrop-blur-sm">
              {/* Animated gradient orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary via-purple-600 to-primary/50 blur-3xl opacity-50"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500 via-primary to-purple-700 blur-3xl opacity-40"
              />

              {/* Placeholder content */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-primary/30 bg-primary/10" />
                  <p className="text-sm font-medium text-muted-foreground">
                    3D / Animation Placeholder
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    TODO: Add illustration or 3D animation here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-background via-background to-primary/5" />
    </section>
  )
}