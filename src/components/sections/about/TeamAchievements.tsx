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

  const displayValue = isInteger ? Math.floor(count) : count.toFixed(1)

  const suffixParts = suffix?.split(" ") || []
  const suffixPrefix = suffixParts[0] || ""
  const suffixText = suffixParts.slice(1).join(" ") || ""

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

const achievements = [
  {
    value: "20",
    suffix: "+ Businesses helped build strong digital presence",
    prefix: "",
  },
  {
    value: "2",
    suffix: "M+ Targeted Users reached through managed ad campaigns",
    prefix: "",
  },
  {
    value: "2000",
    suffix: "+ Unique Creatives designed to build consistent brand identity",
    prefix: "",
  },
]

export function TeamAchievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What Our Team Has Achieved
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                <AnimatedCounter
                  value={achievement.value}
                  suffix={achievement.suffix}
                  prefix={achievement.prefix}
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
