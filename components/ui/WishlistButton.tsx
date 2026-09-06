'use client'

import { useWishlist } from '@/components/providers/WishlistProvider'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface WishlistButtonProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    beds: number
    baths: number
    sqft: string
    image: string
    type: string
  }
  className?: string
  variant?: 'icon' | 'button'
}

export function WishlistButton({ property, className = '', variant = 'icon' }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const isFavorited = isInWishlist(property.id)

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isFavorited) {
      removeFromWishlist(property.id)
    } else {
      // Add the property with required fields including addedDate
      addToWishlist({
        ...property,
        addedDate: new Date().toISOString().split('T')[0]
      })
    }
  }

  if (variant === 'button') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleWishlist}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${
          isFavorited
            ? 'bg-red-50 text-red-500 border border-red-200'
            : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
        } ${className}`}
      >
        <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        {isFavorited ? 'Saved to Wishlist' : 'Add to Wishlist'}
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleWishlist}
      className={`p-2 rounded-full transition-all ${
        isFavorited
          ? 'bg-red-50 hover:bg-red-100'
          : 'bg-white/90 backdrop-blur-sm hover:bg-white'
      } ${className}`}
      aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart className={`w-5 h-5 transition-colors ${
        isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-500'
      }`} />
    </motion.button>
  )
}
