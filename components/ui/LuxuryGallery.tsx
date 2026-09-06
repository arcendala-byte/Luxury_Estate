'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface LuxuryGalleryProps {
  images: string[]
  title?: string
}

export function LuxuryGallery({ images, title }: LuxuryGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Fallback images if none provided
  const fallbackImages = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=800&fit=crop',
  ]

  const displayImages = images.length > 0 ? images : fallbackImages

  return (
    <div className="relative">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayImages.slice(0, 6).map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden cursor-pointer group ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            } ${index === 1 ? 'md:col-span-1' : ''}`}
            onClick={() => setSelectedIndex(index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`relative ${index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
              <Image
                src={image}
                alt={`Property ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              {index === 5 && displayImages.length > 6 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-2xl font-serif">+{displayImages.length - 6}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[16/10]">
                <Image
                  src={displayImages[selectedIndex]}
                  alt={`Property ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Navigation */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/30 backdrop-blur-sm p-3 rounded-full"
                onClick={() => setSelectedIndex((selectedIndex - 1 + displayImages.length) % displayImages.length)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors bg-black/30 backdrop-blur-sm p-3 rounded-full"
                onClick={() => setSelectedIndex((selectedIndex + 1) % displayImages.length)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === selectedIndex ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
