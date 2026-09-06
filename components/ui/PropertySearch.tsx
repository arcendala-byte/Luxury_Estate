'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, SlidersHorizontal, MapPin, Home, DollarSign, Bed, Bath } from 'lucide-react'

interface SearchFilters {
  type: string
  location: string
  minPrice: string
  maxPrice: string
  bedrooms: string
  bathrooms: string
}

interface PropertySearchProps {
  onSearch?: (filters: SearchFilters) => void
  className?: string
}

const propertyTypes = ['All', 'Villa', 'Penthouse', 'Estate', 'Mansion', 'Apartment', 'Lodge']
const locations = ['All', 'New York', 'London', 'Dubai', 'Paris', 'Singapore', 'Sydney', 'Malibu', 'Beverly Hills', 'Aspen']

export function PropertySearch({ onSearch, className = '' }: PropertySearchProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  })
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters)
    }
    // Build query string for URL
    const params = new URLSearchParams()
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value)
    })
    window.location.href = `/search?${params.toString()}`
  }

  const clearFilters = () => {
    setFilters({
      type: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: ''
    })
  }

  const hasFilters = Object.values(filters).some(v => v !== '')

  return (
    <div className={`w-full ${className}`}>
      <div className={`glass rounded-2xl p-3 transition-all duration-300 ${
        isFocused ? 'ring-2 ring-[#C9A227]/30 shadow-lg shadow-[#C9A227]/10' : ''
      }`}>
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="w-full bg-white/50 border border-gray-200/50 rounded-xl pl-12 pr-4 py-3.5 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          {/* Quick Filter - Property Type */}
          <div className="relative min-w-[140px]">
            <select
              className="w-full bg-white/50 border border-gray-200/50 rounded-xl px-4 py-3.5 text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">All Types</option>
              {propertyTypes.filter(t => t !== 'All').map((type) => (
                <option key={type} value={type.toLowerCase()}>{type}</option>
              ))}
            </select>
            <Home className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="px-4 py-3.5 rounded-xl border border-gray-200/50 hover:border-[#C9A227]/30 hover:bg-[#C9A227]/5 transition-all flex items-center gap-2 whitespace-nowrap text-sm text-gray-600"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
              {hasFilters && (
                <span className="w-2 h-2 bg-[#C9A227] rounded-full" />
              )}
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="bg-[#C9A227] text-white px-6 py-3.5 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 glass rounded-2xl p-4 border border-gray-100/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Price Range */}
                <div>
                  <label className="text-xs text-gray-500 font-light block mb-1.5">Min Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      className="w-full bg-white/50 border border-gray-200/50 rounded-lg pl-8 pr-3 py-2.5 text-sm text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    >
                      <option value="">Any</option>
                      <option value="500000">$500K</option>
                      <option value="1000000">$1M</option>
                      <option value="2000000">$2M</option>
                      <option value="5000000">$5M</option>
                      <option value="10000000">$10M</option>
                      <option value="20000000">$20M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-light block mb-1.5">Max Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      className="w-full bg-white/50 border border-gray-200/50 rounded-lg pl-8 pr-3 py-2.5 text-sm text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    >
                      <option value="">Any</option>
                      <option value="1000000">$1M</option>
                      <option value="2000000">$2M</option>
                      <option value="5000000">$5M</option>
                      <option value="10000000">$10M</option>
                      <option value="20000000">$20M</option>
                      <option value="50000000">$50M+</option>
                    </select>
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="text-xs text-gray-500 font-light block mb-1.5">Bedrooms</label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      className="w-full bg-white/50 border border-gray-200/50 rounded-lg pl-8 pr-3 py-2.5 text-sm text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="text-xs text-gray-500 font-light block mb-1.5">Bathrooms</label>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      className="w-full bg-white/50 border border-gray-200/50 rounded-lg pl-8 pr-3 py-2.5 text-sm text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
                      value={filters.bathrooms}
                      onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setShowAdvanced(false)}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
