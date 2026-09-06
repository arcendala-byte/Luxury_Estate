'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useWishlist } from '@/components/providers/WishlistProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin, Heart, X } from 'lucide-react'

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Your Collection
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  <span className="font-bold text-[#C9A227]">Wishlist</span>
                </h1>
                <p className="text-gray-500 font-light mt-4">
                  Your curated collection of exceptional properties.
                  {wishlist.length > 0 && ` (${wishlist.length} properties)`}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Wishlist Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {wishlist.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-charcoal font-light mb-2">Your wishlist is empty</h3>
                <p className="text-gray-400 font-light">Start exploring properties and add your favorites.</p>
                <a
                  href="/properties"
                  className="inline-block mt-6 bg-[#C9A227] text-white px-8 py-3 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                >
                  Browse Properties
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlist.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                        {item.type}
                      </span>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-50 transition-colors group/remove"
                      >
                        <X className="w-4 h-4 text-gray-500 group-hover/remove:text-red-500 transition-colors" />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm font-light mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </p>
                        </div>
                        <span className="text-[#C9A227] text-lg font-serif font-bold">{item.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {item.beds} Beds
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {item.baths} Baths
                        </span>
                        <span className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          {item.sqft} sqft
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-light">
                          Added {new Date(item.addedDate).toLocaleDateString()}
                        </span>
                        <a
                          href={`/properties/${item.id}`}
                          className="text-[#C9A227] text-sm font-medium hover:underline"
                        >
                          View Details →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
