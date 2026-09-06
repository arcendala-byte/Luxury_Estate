'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
}

export function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes = '100vw',
  priority = false 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [priority])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`object-cover transition-opacity duration-700 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={sizes}
            priority={priority}
            onLoad={() => setIsLoaded(true)}
            quality={90}
          />
        </motion.div>
      )}
      
      {/* Loading Placeholder */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  )
}
