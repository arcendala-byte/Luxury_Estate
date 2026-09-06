'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface WishlistItem {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  image: string
  type: string
  addedDate: string
}

interface WishlistContextType {
  wishlist: WishlistItem[]
  addToWishlist: (property: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  wishlistCount: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    if (isClient) {
      const savedWishlist = localStorage.getItem('luxury_wishlist')
      if (savedWishlist) {
        try {
          setWishlist(JSON.parse(savedWishlist))
        } catch (e) {
          console.error('Error loading wishlist:', e)
        }
      }
    }
  }, [isClient])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('luxury_wishlist', JSON.stringify(wishlist))
    }
  }, [wishlist, isClient])

  const addToWishlist = (property: WishlistItem) => {
    if (!isInWishlist(property.id)) {
      const newItem = {
        ...property,
        addedDate: new Date().toISOString().split('T')[0]
      }
      setWishlist([...wishlist, newItem])
    }
  }

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  const isInWishlist = (id: number) => {
    return wishlist.some(item => item.id === id)
  }

  const wishlistCount = wishlist.length

  return (
    <WishlistContext.Provider value={{
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      wishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
