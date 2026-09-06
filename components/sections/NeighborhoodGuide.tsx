'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Building, Coffee, ShoppingBag, Train, Star } from 'lucide-react'

const neighborhoods = [
  {
    id: 1,
    name: 'Tribeca',
    city: 'New York',
    description: 'Tribeca is a trendy neighborhood in Lower Manhattan known for its cobblestone streets, converted loft buildings, and celebrity residents.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    rating: 4.9,
    features: ['Art Galleries', 'Fine Dining', 'Boutique Shopping', 'Waterfront'],
    priceRange: '$$$$',
    vibe: 'Sophisticated'
  },
  {
    id: 2,
    name: 'Mayfair',
    city: 'London',
    description: 'Mayfair is one of London\'s most prestigious districts, home to luxury boutiques, fine dining, and some of the city\'s most expensive real estate.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    rating: 4.8,
    features: ['Luxury Shopping', 'Michelin Restaurants', 'Art Galleries', 'Parks'],
    priceRange: '$$$$',
    vibe: 'Elegant'
  },
  {
    id: 3,
    name: 'Palm Jumeirah',
    city: 'Dubai',
    description: 'An artificial archipelago on the Dubai coast, Palm Jumeirah features luxury hotels, private villas, and stunning beachfront properties.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    rating: 4.9,
    features: ['Beach Access', 'Resort Living', 'Water Sports', 'Fine Dining'],
    priceRange: '$$$$',
    vibe: 'Resort'
  },
]

export function NeighborhoodGuide() {
  const [activeNeighborhood, setActiveNeighborhood] = useState(neighborhoods[0])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#C9A227]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
              Neighborhood Guide
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2 className="text-4xl font-serif font-light text-charcoal">
            Explore <span className="font-bold">Exclusive</span> Neighborhoods
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Neighborhood Selector */}
          <div className="lg:col-span-1 space-y-3">
            {neighborhoods.map((neighborhood) => (
              <motion.button
                key={neighborhood.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveNeighborhood(neighborhood)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                  activeNeighborhood.id === neighborhood.id
                    ? 'bg-[#C9A227]/10 border border-[#C9A227]/30'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-charcoal font-light">{neighborhood.name}</h4>
                    <p className="text-sm text-gray-400">{neighborhood.city}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                    <span className="text-sm font-medium">{neighborhood.rating}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Neighborhood Details */}
          <motion.div
            key={activeNeighborhood.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={activeNeighborhood.image}
                alt={activeNeighborhood.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-serif text-white font-light">{activeNeighborhood.name}</h3>
                <p className="text-white/60 text-sm">{activeNeighborhood.city}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 font-light leading-relaxed">
                {activeNeighborhood.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeNeighborhood.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-500">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-light">Price Range</span>
                  <span className="font-medium text-charcoal">{activeNeighborhood.priceRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-light">Vibe</span>
                  <span className="font-medium text-charcoal">{activeNeighborhood.vibe}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-charcoal text-white px-6 py-3 rounded-xl text-sm font-sans font-medium hover:bg-charcoal/90 transition-colors"
              >
                Explore Properties in {activeNeighborhood.name}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
