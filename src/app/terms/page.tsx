"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

const sections = [
  {
    title: "TODO: Section Title",
    content: [
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
    ],
  },
  {
    title: "TODO: Section Title",
    content: [
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
    ],
  },
  {
    title: "TODO: Section Title",
    content: [
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
    ],
  },
  {
    title: "TODO: Section Title",
    content: [
      "TODO: User will provide content for this section",
      "TODO: User will provide content for this section",
    ],
  },
]

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | Shyara"
  }, [])

  return (
    <div className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: TODO: User will provide date
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 space-y-4 text-lg leading-8 text-muted-foreground"
        >
          <p>TODO: User will provide content</p>
          <p>TODO: User will provide content</p>
        </motion.div>

        {/* Terms Sections */}
        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                {section.title}
              </h2>
              <div className="space-y-3 text-muted-foreground">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-lg border border-border bg-card p-6"
        >
          <h3 className="text-xl font-semibold text-foreground">
            TODO: User will provide content
          </h3>
          <p className="mt-2 text-muted-foreground">
            TODO: User will provide content
          </p>
        </motion.div>
      </div>
    </div>
  )
}