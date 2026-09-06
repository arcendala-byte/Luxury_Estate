'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { WishlistButton } from '@/components/ui/WishlistButton'
import { PropertyQuickView } from '@/components/ui/PropertyQuickView'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, MapPin, Search, Filter, Eye } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Oceanfront Villa',
    location: 'Malibu, California',
    price: '$12,500,000',
    description: 'A stunning oceanfront estate with panoramic Pacific views, private beach access, and resort-style amenities.',
    beds: 6,
    baths: 8,
    sqft: '8,500',
    yearBuilt: 2019,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    status: 'Featured',
    type: 'Villa',
    features: ['Private Beach', 'Infinity Pool', 'Home Theater', 'Wine Cellar']
  },
  {
    id: 2,
    title: 'Penthouse Suite',
    location: 'Manhattan, New York',
    price: '$8,750,000',
    description: 'A spectacular full-floor penthouse offering 360-degree views of the Manhattan skyline.',
    beds: 4,
    baths: 5,
    sqft: '4,200',
    yearBuilt: 2018,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    status: 'For Sale',
    type: 'Penthouse',
    features: ['Rooftop Terrace', '360° Views', 'Private Elevator', 'Smart Home']
  },
  {
    id: 3,
    title: 'Country Estate',
    location: 'Cotswolds, UK',
    price: '$15,200,000',
    description: 'A magnificent country estate set on 200 acres of rolling English countryside.',
    beds: 8,
    baths: 10,
    sqft: '12,000',
    yearBuilt: 1890,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    status: 'For Sale',
    type: 'Estate',
    features: ['Formal Gardens', 'Private Lake', 'Equestrian Facilities', 'Wine Cellar']
  },
  {
    id: 4,
    title: 'Modern Mansion',
    location: 'Beverly Hills, CA',
    price: '$22,000,000',
    description: 'A contemporary masterpiece in one of Beverly Hills\' most prestigious neighborhoods.',
    beds: 7,
    baths: 9,
    sqft: '15,000',
    yearBuilt: 2022,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80',
    status: 'For Sale',
    type: 'Mansion',
    features: ['Infinity Pool', 'Home Spa', 'Wine Cellar', 'Smart Home']
  },
  {
    id: 5,
    title: 'Beachfront Apartment',
    location: 'Miami, Florida',
    price: '$3,200,000',
    description: 'An exquisite beachfront apartment with direct ocean access and world-class amenities.',
    beds: 3,
    baths: 3,
    sqft: '2,800',
    yearBuilt: 2020,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    status: 'For Sale',
    type: 'Apartment',
    features: ['Ocean Views', 'Private Balcony', 'Beach Access', 'Concierge']
  },
  {
    id: 6,
    title: 'Mountain Lodge',
    location: 'Aspen, Colorado',
    price: '$9,800,000',
    description: 'A stunning mountain lodge offering unparalleled access to world-class skiing and outdoor adventures.',
    beds: 5,
    baths: 6,
    sqft: '7,200',
    yearBuilt: 2017,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    status: 'For Sale',
    type: 'Lodge',
    features: ['Ski-in/Ski-out', 'Private Spa', 'Grand Fireplace', 'Mountain Views']
  },
  {
    id: 7,
    title: 'Lakefront Estate',
    location: 'Lake Como, Italy',
    price: '€11,500,000',
    description: 'A stunning lakefront estate with breathtaking views of Lake Como and the Italian Alps.',
    beds: 6,
    baths: 7,
    sqft: '9,200',
    yearBuilt: 1920,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    status: 'For Sale',
    type: 'Estate',
    features: ['Lake Views', 'Private Dock', 'Historic Details', 'Gardens']
  },
]

const categories = [
  { label: 'All Properties', href: '/properties' },
  { label: 'Villas', href: '/properties/villas' },
  { label: 'Penthouses', href: '/properties/penthouses' },
  { label: 'Estates', href: '/properties/estates' },
  { label: 'Beachfront', href: '/properties/beachfront' },
]

const types = ['All', ...new Set(properties.map(p => p.type))]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filterType, setFilterType] = useState('All')
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)
  const [quickViewProperty, setQuickViewProperty] = useState<typeof properties[0] | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'All' || property.type === filterType
    return matchesSearch && matchesType
  })

  const openQuickView = (property: typeof properties[0]) => {
    setQuickViewProperty(property)
    setIsQuickViewOpen(true)
  }

  const closeQuickView = () => {
    setIsQuickViewOpen(false)
    setQuickViewProperty(null)
  }

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
                    Our Collection
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  Luxury <span className="font-bold text-[#C9A227]">Properties</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Discover our curated selection of the world's most exceptional residences,
                  each offering unparalleled luxury and sophistication.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-6 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <a
                  key={category.href}
                  href={category.href}
                  className={`px-5 py-2 rounded-full text-sm font-sans font-light transition-all border ${
                    category.href === '/properties'
                      ? 'bg-[#C9A227] text-white border-[#C9A227]'
                      : 'text-gray-500 border-gray-200 hover:border-[#C9A227] hover:text-[#C9A227]'
                  }`}
                >
                  {category.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties by title, location, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(!showFilters)}
                className="bg-[#C9A227] text-white px-6 py-4 rounded-full font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </motion.button>
            </div>

            {/* Filter Tags */}
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-gray-50 rounded-2xl flex flex-wrap gap-2">
                  {types.map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilterType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filterType === type
                          ? 'bg-[#C9A227] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 font-light">No properties found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                    onHoverStart={() => setHoveredProperty(property.id)}
                    onHoverEnd={() => setHoveredProperty(null)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {property.status === 'Featured' && (
                        <span className="absolute top-4 left-4 bg-[#C9A227] text-white text-xs px-3 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                      <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                        {property.type}
                      </span>
                      
                      {/* Quick View Button */}
                      <button
                        onClick={() => openQuickView(property)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm"
                      >
                        <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-charcoal px-6 py-3 rounded-full text-sm font-sans font-medium hover:bg-white transition-colors">
                          <Eye className="w-4 h-4" />
                          Quick View
                        </span>
                      </button>
                      
                      <div className="absolute bottom-4 right-4">
                        <WishlistButton property={property} />
                      </div>
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
                      
                      <motion.div 
                        className="mt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredProperty === property.id ? 1 : 0, 
                          height: hoveredProperty === property.id ? 'auto' : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-500 text-sm font-light line-clamp-2">
                          {property.description}
                        </p>
                      </motion.div>
                      
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
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {property.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {property.features.length > 3 && (
                          <span className="text-[10px] text-gray-400">+{property.features.length - 3}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href={`/properties/${property.id}`}
                          className="flex-1 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-sans font-medium text-center hover:bg-charcoal/90 transition-colors"
                        >
                          View Details
                        </a>
                        <WishlistButton property={property} variant="icon" />
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

      {/* Quick View Modal */}
      <PropertyQuickView
        property={quickViewProperty}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />
    </>
  )
}
