"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-lg leading-8 text-muted-foreground"
            >
              <p>
                Every brand begins with a story. Ours started with two people and
                a simple belief:
              </p>
              <p className="font-medium italic text-foreground">
                &lsquo;Great results don&apos;t need big offices — they need big
                ideas and the right people.&rsquo;
              </p>
              <p>
                We noticed a gap: small businesses, startups, and creators wanted
                great digital work, but were forced to choose between overpriced
                agencies or inconsistent freelancers.
              </p>
              <p>
                So we created Shyara — a curated collective of skilled creators,
                strategists, and storytellers who deliver top-tier results with
                speed, creativity, and flexibility.
              </p>
              <p>
                From designing our first festive post for a local shop to running
                cross-platform campaigns for growing brands, one thing has never
                changed:
              </p>
              <p className="font-medium italic text-foreground">
                &lsquo;We treat every project like it&apos;s our own.&rsquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full w-full rounded-2xl border border-border/50 bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 backdrop-blur-sm">
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-primary/20 p-6">
                      <Sparkles className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Story Illustration
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    TODO: Add creative illustration or team graphic here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
