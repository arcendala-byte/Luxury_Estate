'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin } from 'lucide-react'

const penthouses = [
  {
    id: 1,
    title: 'Penthouse 57',
    location: 'New York, USA',
    price: '$22,500,000',
    description: 'A stunning full-floor penthouse with 360-degree views of the Manhattan skyline and a private rooftop terrace.',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    features: ['360° Views', 'Rooftop Terrace', 'Private Elevator', 'Smart Home']
  },
  {
    id: 2,
    title: 'Sky Penthouse',
    location: 'Dubai, UAE',
    price: 'AED 65,000,000',
    description: 'The ultimate sky-high residence with panoramic city views and world-class amenities.',
    beds: 5,
    baths: 6,
    sqft: '8,000',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    features: ['City Views', 'Private Pool', 'Helipad', 'Concierge']
  },
  {
    id: 3,
    title: 'One Hyde Park Penthouse',
    location: 'London, UK',
    price: '£45,000,000',
    description: 'An exclusive penthouse in one of London\'s most prestigious addresses with Hyde Park views.',
    beds: 5,
    baths: 6,
    sqft: '7,500',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    features: ['Park Views', 'Private Cinema', 'Wine Cellar', 'Spa']
  },
]

export default function PenthousesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        <section className="py-16 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Sky Collection
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  Luxury <span className="font-bold text-[#C9A227]">Penthouses</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Experience the pinnacle of sky-high luxury with our collection of the world's most exclusive penthouses.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {penthouses.map((penthouse, index) => (
                <motion.div
                  key={penthouse.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={penthouse.image}
                      alt={penthouse.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                      Penthouse
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                      {penthouse.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {penthouse.location}
                    </p>
                    <p className="text-[#C9A227] text-xl font-serif font-bold mt-2">{penthouse.price}</p>
                    <p className="text-gray-500 text-sm font-light mt-2 line-clamp-2">
                      {penthouse.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {penthouse.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {penthouse.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {penthouse.sqft} sqft
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {penthouse.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/properties/${penthouse.id}`}
                      className="block w-full mt-4 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-sans font-medium text-center hover:bg-charcoal/90 transition-colors"
                    >
                      View Details
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
