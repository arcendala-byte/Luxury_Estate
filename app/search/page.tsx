'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin, Search } from 'lucide-react'

// Mock property data for search results
const allProperties = [
  {
    id: 1,
    title: 'Oceanfront Villa',
    location: 'Malibu, California',
    price: '$12,500,000',
    beds: 6,
    baths: 8,
    sqft: '8,500',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    type: 'Villa'
  },
  {
    id: 2,
    title: 'Penthouse Suite',
    location: 'Manhattan, New York',
    price: '$8,750,000',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    type: 'Penthouse'
  },
  {
    id: 3,
    title: 'Country Estate',
    location: 'Cotswolds, UK',
    price: '$15,200,000',
    beds: 8,
    baths: 10,
    sqft: '12,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Estate'
  },
  {
    id: 4,
    title: 'Modern Mansion',
    location: 'Beverly Hills, CA',
    price: '$22,000,000',
    beds: 7,
    baths: 9,
    sqft: '15,000',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    type: 'Mansion'
  },
  {
    id: 5,
    title: 'Beachfront Apartment',
    location: 'Miami, Florida',
    price: '$3,200,000',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    type: 'Apartment'
  },
  {
    id: 6,
    title: 'Mountain Lodge',
    location: 'Aspen, Colorado',
    price: '$9,800,000',
    beds: 5,
    baths: 6,
    sqft: '7,200',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    type: 'Lodge'
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(query)
  const [results, setResults] = useState(allProperties)

  useEffect(() => {
    if (query) {
      const filtered = allProperties.filter(property =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase()) ||
        property.type.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        {/* Search Header */}
        <section className="py-12 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search luxury properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-20 py-4 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#C9A227] text-white px-6 py-2 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                  >
                    Search
                  </button>
                </form>
                {query && (
                  <p className="text-center text-gray-400 text-sm mt-4">
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                  </p>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {results.length === 0 && query ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-charcoal font-light mb-2">No properties found</h3>
                <p className="text-gray-400 font-light">Try adjusting your search terms or browse our categories.</p>
                <a
                  href="/properties"
                  className="inline-block mt-6 bg-[#C9A227] text-white px-8 py-3 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                >
                  Browse All Properties
                </a>
              </div>
            ) : results.length > 0 && query ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                        {property.type}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                            {property.title}
                          </h3>
                          <p className="text-gray-400 text-sm font-light mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {property.location}
                          </p>
                        </div>
                        <span className="text-[#C9A227] text-lg font-serif font-bold">{property.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          {property.beds} Beds
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          {property.baths} Baths
                        </span>
                        <span className="flex items-center gap-1">
                          <Square className="w-4 h-4" />
                          {property.sqft} sqft
                        </span>
                      </div>
                      <a
                        href={`/properties/${property.id}`}
                        className="block w-full mt-4 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-sans font-medium text-center hover:bg-charcoal/90 transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-charcoal font-light mb-2">Search for Luxury Properties</h3>
                <p className="text-gray-400 font-light">Enter a location, property type, or keyword to begin your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
