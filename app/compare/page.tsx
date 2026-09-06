'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, Calendar, MapPin, X, Plus } from 'lucide-react'
import { useState } from 'react'

const availableProperties = [
  {
    id: 1,
    title: 'Villa Mon Repos',
    location: 'Lake Geneva, Switzerland',
    price: 'CHF 12,900,000',
    beds: 6,
    baths: 8,
    sqft: '8,500',
    yearBuilt: 2020,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    features: ['Private Dock', 'Alpine Views', 'Wine Cellar']
  },
  {
    id: 2,
    title: 'Palazzo Antico',
    location: 'Florence, Italy',
    price: '€9,200,000',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    yearBuilt: 1520,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: ['Original Frescoes', 'Courtyard Garden', 'Marble Fireplaces']
  },
  {
    id: 3,
    title: 'Penthouse 57',
    location: 'New York, USA',
    price: '$22,500,000',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    yearBuilt: 2018,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    features: ['Rooftop Terrace', '360° Views', 'Private Elevator']
  },
  {
    id: 4,
    title: 'Modern Mansion',
    location: 'Beverly Hills, USA',
    price: '$18,500,000',
    beds: 7,
    baths: 9,
    sqft: '15,000',
    yearBuilt: 2022,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    features: ['Infinity Pool', 'Home Spa', 'Wine Cellar']
  },
]

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 2])
  const maxCompare = 3

  const addProperty = (id: number) => {
    if (!selectedIds.includes(id) && selectedIds.length < maxCompare) {
      setSelectedIds([...selectedIds, id])
    }
  }

  const removeProperty = (id: number) => {
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
  }

  const selectedProperties = availableProperties.filter(p => selectedIds.includes(p.id))
  const availableToAdd = availableProperties.filter(p => !selectedIds.includes(p.id))

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Compare
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  Property <span className="font-bold">Comparison</span>
                </h1>
                <p className="text-gray-500 font-light mt-4">
                  Compare up to {maxCompare} luxury properties side by side to find your perfect match.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Add Properties */}
        {selectedIds.length < maxCompare && availableToAdd.length > 0 && (
          <section className="py-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm text-gray-400 font-light">Add properties to compare:</span>
                {availableToAdd.map((property) => (
                  <motion.button
                    key={property.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addProperty(property.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-[#C9A227]/10 rounded-full text-sm text-gray-600 hover:text-[#C9A227] transition-colors border border-gray-200 hover:border-[#C9A227]/30"
                  >
                    <Plus className="w-3 h-3" />
                    {property.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparison Table */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedProperties.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 font-light">No properties selected for comparison.</p>
                <a href="/properties" className="inline-block mt-4 text-[#C9A227] hover:underline">
                  Browse Properties →
                </a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left text-sm font-medium text-gray-400 border-b border-gray-100">
                        Details
                      </th>
                      {selectedProperties.map((property) => (
                        <th key={property.id} className="p-4 text-left border-b border-gray-100 min-w-[200px]">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="relative w-24 h-16 rounded-lg overflow-hidden">
                                <Image
                                  src={property.image}
                                  alt={property.title}
                                    fill
                                    sizes="100vw"
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-sm font-serif text-charcoal mt-2">{property.title}</p>
                            </div>
                            <button
                              onClick={() => removeProperty(property.id)}
                              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <X className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Location
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm text-gray-500 font-light border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {property.location}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Price
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm font-serif text-[#C9A227] font-bold border-b border-gray-100">
                          {property.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Bedrooms
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm text-gray-500 font-light border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            {property.beds}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Bathrooms
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm text-gray-500 font-light border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            {property.baths}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Square Feet
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm text-gray-500 font-light border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            {property.sqft}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Year Built
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 text-sm text-gray-500 font-light border-b border-gray-100">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {property.yearBuilt}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-4 text-sm font-medium text-charcoal border-b border-gray-100">
                        Features
                      </td>
                      {selectedProperties.map((property) => (
                        <td key={property.id} className="p-4 border-b border-gray-100">
                          <div className="flex flex-wrap gap-1">
                            {property.features.map((feature) => (
                              <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
