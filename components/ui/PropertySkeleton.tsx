'use client'

import { motion } from 'framer-motion'

export function PropertySkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse" />
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse" />
        </div>
        <div className="h-10 bg-gray-200 rounded-full w-full animate-pulse" />
      </div>
    </div>
  )
}

export function PropertyGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <PropertySkeleton />
        </motion.div>
      ))}
    </div>
  )
}
