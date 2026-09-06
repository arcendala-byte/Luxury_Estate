'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Home } from 'lucide-react'

const locations = [
  {
    id: 1,
    city: 'New York',
    country: 'United States',
    description: 'The epicenter of luxury living with iconic penthouses, historic townhouses, and unparalleled views of the Manhattan skyline.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    properties: 120,
    neighborhoods: ['Tribeca', 'Upper East Side', 'Chelsea', 'Soho'],
    priceRange: '$2M - $50M+'
  },
  {
    id: 2,
    city: 'London',
    country: 'United Kingdom',
    description: 'Timeless elegance in Mayfair, Belgravia, and Kensington\'s finest addresses. Experience the perfect blend of historic charm and modern luxury.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    properties: 85,
    neighborhoods: ['Mayfair', 'Belgravia', 'Kensington', 'Chelsea'],
    priceRange: '£1.5M - £45M+'
  },
  {
    id: 3,
    city: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Ultra-modern luxury in the heart of the Middle East\'s most dynamic city. From Palm Jumeirah to Downtown Dubai, experience architectural innovation.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    properties: 95,
    neighborhoods: ['Palm Jumeirah', 'Downtown', 'Emirates Hills', 'Dubai Marina'],
    priceRange: 'AED 5M - AED 150M+'
  },
  {
    id: 4,
    city: 'Paris',
    country: 'France',
    description: 'Romantic elegance in the world\'s most beautiful city. From the 7th Arrondissement to the 16th, discover historic mansions with Eiffel Tower views.',
    image: 'https://images.unsplash.com/photo-1502602898656-3e91760cbb34?w=800&q=80',
    properties: 65,
    neighborhoods: ['7th Arrondissement', '16th Arrondissement', 'Saint-Germain', 'Le Marais'],
    priceRange: '€1.5M - €40M+'
  },
  {
    id: 5,
    city: 'Singapore',
    country: 'Singapore',
    description: 'Asian sophistication with world-class penthouses, waterfront estates, and unparalleled luxury. Experience the perfect harmony of urban living and tropical paradise.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
    properties: 45,
    neighborhoods: ['Orchard Road', 'Sentosa', 'Marina Bay', 'Bukit Timah'],
    priceRange: 'SGD 3M - SGD 80M+'
  },
  {
    id: 6,
    city: 'Sydney',
    country: 'Australia',
    description: 'Coastal luxury with stunning harbour views, exclusive beachfront properties, and a vibrant lifestyle. From Bondi to Vaucluse, experience Australia\'s finest addresses.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
    properties: 55,
    neighborhoods: ['Vaucluse', 'Bondi Beach', 'Mosman', 'Double Bay'],
    priceRange: 'AUD 3M - AUD 60M+'
  },
]

export default function LocationsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white overflow-hidden">
        <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Global Presence
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  World-Class
                  <br />
                  <span className="font-bold text-[#C9A227]">Destinations</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Explore the world's most coveted addresses, from vibrant cities
                  to serene coastal escapes, each offering a unique luxury lifestyle.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.city.trim()}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#C9A227]" />
                        <span className="text-white/60 text-xs font-light">{location.country}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-white font-light">{location.city.trim()}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-3">
                      {location.description}
                    </p>
                    
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {location.neighborhoods.slice(0, 3).map((neighborhood) => (
                          <span key={neighborhood} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                            {neighborhood}
                          </span>
                        ))}
                        {location.neighborhoods.length > 3 && (
                          <span className="text-[10px] text-gray-400">+{location.neighborhoods.length - 3}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Home className="w-3 h-3" />
                            {location.properties} properties
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 font-light">{location.priceRange}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={`/properties?location=${location.city.trim().toLowerCase()}`}
                      className="block w-full mt-4 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-sans font-medium text-center hover:bg-charcoal/90 transition-colors"
                    >
                      Explore Properties
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
