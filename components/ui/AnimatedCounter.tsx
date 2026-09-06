'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  target: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ target, label, suffix = '', prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      const startTime = Date.now()
      const endTime = startTime + duration

      const updateCount = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentCount = Math.round(easedProgress * target)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(target)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [inView, target, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-400 font-light mt-2">{label}</div>
    </div>
  )
}
