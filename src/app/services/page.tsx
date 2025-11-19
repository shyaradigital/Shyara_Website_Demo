"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import { services } from "@/data/services"
import { useEffect } from "react"

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Shyara"
  }, [])

  return (
    <div className="container py-24 sm:py-32">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          TODO: User will provide content
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-8 text-muted-foreground"
        >
          TODO: User will provide content
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                {service.features && service.features.length > 0 && (
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.price && (
                  <div className="mt-auto mb-4">
                    <p className="text-2xl font-bold text-foreground">
                      {service.price}
                    </p>
                  </div>
                )}
                <Button asChild variant="outline" className="mt-auto w-full">
                  <Link href="/contact">TODO: User will provide content</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mt-16 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          TODO: User will provide content
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          TODO: User will provide content
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">TODO: User will provide content</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}