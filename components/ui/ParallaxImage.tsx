'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  height?: string
}

export function ParallaxImage({ src, alt, className = '', speed = 0.5, height = 'h-[600px]' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${height} ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>
    </div>
  )
}
          <Image           src={src}           alt={alt}           fill           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"           className="object-cover"         />
