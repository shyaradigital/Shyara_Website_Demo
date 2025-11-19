"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const termsSections = [
  {
    id: "payments",
    title: "1. Payments",
    content: [
      "Advance payment is mandatory before any project begins.",
      "Social Media Management (SMM) & Video Editing:",
      "  • 50% advance before work starts.",
      "  • Remaining 50% due within 15 days of service initiation.",
      "Website Development & Festive Post Designs:",
      "  • 50% advance before project begins.",
      "  • Remaining amount due before final submission/posting.",
      "All payments must be made through approved channels (UPI, Bank Transfer, PayPal, or Shyara's payment gateway).",
      "Invoices must be cleared within 7 days unless otherwise specified.",
      "Late payments may incur a 2% weekly fee after the due date.",
      "No refunds will be issued once the advance amount is paid.",
    ],
  },
  {
    id: "project-planning",
    title: "2. Project Planning & Requirements",
    content: [
      "We require 2–3 working days post-discussion to analyze requirements and provide a detailed project plan.",
      "Clients must supply essential credentials (social media logins, hosting access, brand assets, etc.) to facilitate smooth delivery.",
      "Delays in providing credentials or content may result in timeline extensions.",
    ],
  },
  {
    id: "deliverables",
    title: "3. Deliverables & Revisions",
    content: [
      "Social media posts and reels will be shared for approval one day before posting.",
      "Each deliverable (post, reel, video, design, website/app component) includes **up to 5 revision rounds** within the agreed scope.",
      "Extra revisions beyond the included 5 will incur additional charges.",
      "Final files will be delivered only after all payments are completed as per the payment terms.",
    ],
  },
  {
    id: "scope-changes",
    title: "4. Scope Changes",
    content: [
      "Any request outside the agreed scope (new features, extra posts, additional designs) must be submitted as a Scope Change Request (SCR).",
      "Scope changes may impact both costs and delivery timelines.",
    ],
  },
  {
    id: "refunds",
    title: "5. Refunds & Cancellations",
    content: [
      "No refunds are applicable after advance payment for:",
      "  • Social Media Management",
      "  • Video Editing",
      "  • Ads Management",
      "Refunds (if considered) apply only when less than 20% of the project work has been delivered.",
      "Refund amount will not exceed more than 60% of the total project fee.",
      "Payment gateway charges (Razorpay, PayPal, Stripe, etc.) are non-refundable.",
    ],
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality & Intellectual Property",
    content: [
      "All client data, credentials, and business information remain strictly confidential.",
      "All deliverables remain the intellectual property of Shyara Digital until full payment is received.",
      "Upon complete payment, ownership is transferred to the client (excluding licensed stock content owned by third parties).",
    ],
  },
  {
    id: "timelines",
    title: "7. Timelines & Communication",
    content: [
      "Standard response time is up to 24 business hours.",
      "Weekly progress updates will be shared via email or the client's preferred channel.",
      "Any delay in approvals, credentials, or payments from the client will proportionally extend timelines.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "8. Dispute Resolution",
    content: [
      "In case of any disagreement, both parties must first attempt resolution through direct discussion and written communication.",
      "If unresolved, the matter will fall under the jurisdiction of Indian courts.",
    ],
  },
  {
    id: "general",
    title: "9. General",
    content: [
      "Clients confirm they have the rights to supply all content, media, and credentials required for the project.",
      "Shyara Digital reserves the right to update these terms at any time without prior notice.",
      "Latest Update: 16 November 2025",
    ],
  },
]

export function TermsContent() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="relative py-20 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index > 0 && (
                  <div className="absolute -top-6 left-0 right-0 h-px bg-border/50" />
                )}
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => {
                    const isBold = paragraph.includes("**")
                    const cleanParagraph = paragraph.replace(/\*\*/g, "")
                    const isIndented = paragraph.startsWith("  •")

                    return (
                      <p
                        key={pIndex}
                        className={`text-base leading-7 text-muted-foreground sm:text-lg ${
                          isIndented ? "ml-6" : ""
                        } ${isBold ? "font-semibold text-foreground" : ""}`}
                      >
                        {cleanParagraph}
                      </p>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-primary shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </section>
  )
}
