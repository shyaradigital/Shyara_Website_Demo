"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface MetricProps {
  value: string
  suffix?: string
  prefix?: string
  duration?: number
  isInView: boolean
}

const AnimatedCounter = ({
  value,
  suffix,
  prefix,
  duration = 2,
  isInView,
}: MetricProps) => {
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""))
  const isInteger = Number.isInteger(numericValue)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      const currentCount = numericValue * progress
      setCount(isInteger ? Math.floor(currentCount) : currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, numericValue, duration, isInteger])

  const displayValue = isInteger
    ? Math.floor(count)
    : count.toFixed(1)

  // Split suffix to extract text part after the number
  const suffixParts = suffix?.split(" ") || []
  const suffixPrefix = suffixParts[0] || "" // e.g., "+", "%", "/5"
  const suffixText = suffixParts.slice(1).join(" ") || "" // e.g., "Brands Transformed"

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex items-baseline gap-1">
        {prefix && <span>{prefix}</span>}
        <span>{displayValue}</span>
        {suffixPrefix && <span>{suffixPrefix}</span>}
      </span>
      {suffixText && (
        <span className="text-base font-medium text-muted-foreground sm:text-lg">
          {suffixText}
        </span>
      )}
    </div>
  )
}

const metrics = [
  {
    value: "100",
    suffix: "+ Brands Transformed",
    prefix: "",
  },
  {
    value: "35",
    suffix: "% Average Growth in Engagement",
    prefix: "",
  },
  {
    value: "4.9",
    suffix: "/5 Client Satisfaction Score",
    prefix: "",
  },
  {
    value: "3",
    suffix: "+ Years of Digital Excellence",
    prefix: "",
  },
]

export function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background py-16 sm:py-20">
      <div className="container">
        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  isInView={isInView}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
