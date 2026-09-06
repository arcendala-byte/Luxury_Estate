'use client'

import { motion } from 'framer-motion'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <motion.div
      className={`${sizes[size]} rounded-full border-t-[#C9A227] border-r-[#C9A227] border-b-transparent border-l-transparent animate-spin ${className}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}
