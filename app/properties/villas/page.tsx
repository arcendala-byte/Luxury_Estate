'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin } from 'lucide-react'

const villas = [
  {
    id: 1,
    title: 'Villa Mon Repos',
    location: 'Lake Geneva, Switzerland',
    price: 'CHF 12,900,000',
    description: 'An exceptional lakeside estate with breathtaking views of the Swiss Alps and a private dock.',
    beds: 6,
    baths: 8,
    sqft: '8,500',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&q=80',
    features: ['Private Dock', 'Alpine Views', 'Infinity Pool', 'Wine Cellar']
  },
  {
    id: 2,
    title: 'Villa Bella Vista',
    location: 'Amalfi Coast, Italy',
    price: '€8,900,000',
    description: 'A stunning cliffside villa with panoramic Mediterranean views and private beach access.',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    features: ['Sea Views', 'Private Beach', 'Terraced Gardens', 'Infinity Pool']
  },
  {
    id: 3,
    title: 'Villa Palm Royale',
    location: 'Dubai, UAE',
    price: 'AED 45,000,000',
    description: 'An ultra-modern villa on Palm Jumeirah with private beach access and panoramic skyline views.',
    beds: 7,
    baths: 9,
    sqft: '12,000',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80',
    features: ['Private Beach', 'Skyline Views', 'Home Theater', 'Smart Home']
  },
]

export default function VillasPage() {
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
                    Luxury Collection
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  Luxury <span className="font-bold text-[#C9A227]">Villas</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Discover our curated collection of the world's most exceptional villas,
                  each offering unparalleled privacy and luxury.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Villas Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villas.map((villa, index) => (
                <motion.div
                  key={villa.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={villa.image}
                      alt={villa.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                      Villa
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                      {villa.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {villa.location}
                    </p>
                    <p className="text-[#C9A227] text-xl font-serif font-bold mt-2">{villa.price}</p>
                    <p className="text-gray-500 text-sm font-light mt-2 line-clamp-2">
                      {villa.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {villa.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {villa.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {villa.sqft} sqft
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {villa.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/properties/${villa.id}`}
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
