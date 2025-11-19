"use client"

import { motion } from "framer-motion"
import { ContactDetails } from "./ContactDetails"
import { ContactFormSection } from "./ContactFormSection"

export function ContactContent() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ContactDetails />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactFormSection />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
