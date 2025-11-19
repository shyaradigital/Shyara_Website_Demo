"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Copy, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@shyara.co.in",
    copyValue: "support@shyara.co.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9584661610",
    copyValue: "+919584661610",
  },
]

export function ContactDetails() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          const isCopied = copied === info.label
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                onClick={() => handleCopy(info.copyValue, info.label)}
                className="group cursor-pointer rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:border-primary hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCopied ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <Copy className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </CardContent>
    </Card>
  )
}
