'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin } from 'lucide-react'

const estates = [
  {
    id: 1,
    title: 'Château de Rêve',
    location: 'Provence, France',
    price: '€18,500,000',
    description: 'A magnificent 18th-century château set on 50 acres with a private vineyard and panoramic countryside views.',
    beds: 8,
    baths: 10,
    sqft: '15,000',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
    features: ['Private Vineyard', 'Formal Gardens', 'Wine Cellar', 'Pool']
  },
  {
    id: 2,
    title: 'Country Estate',
    location: 'Cotswolds, UK',
    price: '£15,200,000',
    description: 'A grand country estate on 200 acres with equestrian facilities and a private lake.',
    beds: 8,
    baths: 10,
    sqft: '12,000',
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=1200&q=80',
    features: ['Equestrian', 'Private Lake', 'Formal Gardens', 'Tennis Court']
  },
  {
    id: 3,
    title: 'Tuscan Estate',
    location: 'Tuscany, Italy',
    price: '€12,500,000',
    description: 'A historic estate in the heart of Tuscany with olive groves, vineyards, and a restored villa.',
    beds: 6,
    baths: 8,
    sqft: '10,000',
    image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1200&q=80',
    features: ['Olive Groves', 'Vineyards', 'Restored Villa', 'Pool']
  },
]

export default function EstatesPage() {
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
                    Grand Collection
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  Grand <span className="font-bold text-[#C9A227]">Estates</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Discover our collection of the world's most magnificent estates,
                  offering unparalleled privacy and grandeur.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {estates.map((estate, index) => (
                <motion.div
                  key={estate.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={estate.image}
                      alt={estate.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                      Estate
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                      {estate.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {estate.location}
                    </p>
                    <p className="text-[#C9A227] text-xl font-serif font-bold mt-2">{estate.price}</p>
                    <p className="text-gray-500 text-sm font-light mt-2 line-clamp-2">
                      {estate.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {estate.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {estate.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {estate.sqft} sqft
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {estate.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/properties/${estate.id}`}
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
