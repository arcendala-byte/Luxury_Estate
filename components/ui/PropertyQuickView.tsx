'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Bed, Bath, Square, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  description: string
  beds: number
  baths: number
  sqft: string
  image: string
  type: string
  features: string[]
}

interface PropertyQuickViewProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
  onAddToWishlist?: (property: Property) => void
}

export function PropertyQuickView({ property, isOpen, onClose, onAddToWishlist }: PropertyQuickViewProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  if (!property) return null

  const images = [property.image, property.image, property.image] // In production, use multiple images

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleAddToWishlist = () => {
    setIsLiked(!isLiked)
    if (onAddToWishlist && !isLiked) {
      onAddToWishlist(property)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal" />
                </button>

                {/* Image Gallery */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={images[currentImage]}
                    alt={property.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-sans font-medium">
                        {property.type}
                      </span>
                      <h2 className="text-2xl font-serif text-charcoal mt-1">{property.title}</h2>
                      <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif text-[#C9A227]">{property.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{property.beds}</p>
                        <p className="text-xs text-gray-400 font-light">Beds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{property.baths}</p>
                        <p className="text-xs text-gray-400 font-light">Baths</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{property.sqft}</p>
                        <p className="text-xs text-gray-400 font-light">Sq Ft</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-charcoal mb-2">Description</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-charcoal mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature) => (
                        <span key={feature} className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={handleAddToWishlist}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium transition-colors ${
                        isLiked
                          ? 'bg-red-50 text-red-500 border border-red-200'
                          : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      {isLiked ? 'Saved to Wishlist' : 'Add to Wishlist'}
                    </button>
                    <a
                      href={`/properties/${property.id}`}
                      className="flex-1 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-sans font-medium text-center hover:bg-charcoal/90 transition-colors"
                    >
                      View Full Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
