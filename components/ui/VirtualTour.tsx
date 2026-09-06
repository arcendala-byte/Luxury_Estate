'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Maximize2, Minimize2 } from 'lucide-react'
import Image from 'next/image'

interface VirtualTourProps {
  images: string[]
  title?: string
}

export function VirtualTour({ images, title = 'Virtual Tour' }: VirtualTourProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <>
      {/* Tour Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-6 py-3 bg-[#C9A227] text-white rounded-full font-sans font-medium hover:bg-[#C9A227]/90 transition-colors shadow-lg shadow-[#C9A227]/25"
      >
        <Play className="w-5 h-5" />
        <span>Virtual Tour</span>
      </motion.button>

      {/* Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
                  <h3 className="text-white font-serif font-light text-lg">{title}</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Image Display */}
                <div className="relative aspect-[16/9] bg-black">
                  <Image
                    src={images[currentIndex]}
                    alt={`Tour image ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />

                  {/* Navigation Overlay */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                      onClick={prevImage}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                        index === currentIndex ? 'ring-2 ring-[#C9A227]' : 'opacity-50 hover:opacity-75'
                      }`}
                    >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
