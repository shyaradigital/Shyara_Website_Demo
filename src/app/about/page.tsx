"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"
import { useEffect } from "react"

const values = [
  {
    icon: Target,
    title: "TODO: Value Title",
    description: "TODO: User will provide content about this value",
  },
  {
    icon: Users,
    title: "TODO: Value Title",
    description: "TODO: User will provide content about this value",
  },
  {
    icon: Award,
    title: "TODO: Value Title",
    description: "TODO: User will provide content about this value",
  },
  {
    icon: Heart,
    title: "TODO: Value Title",
    description: "TODO: User will provide content about this value",
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Shyara"
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

      {/* Story Section */}
      <div className="mx-auto mt-16 max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            TODO: User will provide content
          </h2>
          <div className="space-y-4 text-lg leading-8 text-muted-foreground">
            <p>TODO: User will provide content</p>
            <p>TODO: User will provide content</p>
            <p>TODO: User will provide content</p>
          </div>
        </motion.section>
      </div>

      {/* Mission Section */}
      <div className="mx-auto mt-16 max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            TODO: User will provide content
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            TODO: User will provide content
          </p>
        </motion.section>
      </div>

      {/* Values Section */}
      <div className="mx-auto mt-16 max-w-5xl">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            TODO: User will provide content
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      </div>

      {/* Team Section */}
      <div className="mx-auto mt-16 max-w-3xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            TODO: User will provide content
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            TODO: User will provide content
          </p>
        </motion.section>
      </div>
    </div>
  )
}