'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, SlidersHorizontal, DollarSign, Bed, Bath, Home, MapPin, ChevronDown } from 'lucide-react'

interface FilterOptions {
  propertyType: string
  location: string
  minPrice: string
  maxPrice: string
  bedrooms: string
  bathrooms: string
  status: string
}

interface PropertyFilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: FilterOptions) => void
}

const propertyTypes = ['All', 'Villa', 'Penthouse', 'Estate', 'Mansion', 'Apartment', 'Lodge']
const locations = ['All', 'New York', 'London', 'Dubai', 'Paris', 'Singapore', 'Sydney', 'Malibu', 'Beverly Hills', 'Aspen']
const statusOptions = ['All', 'For Sale', 'For Rent', 'Sold']

export function PropertyFilterSidebar({ isOpen, onClose, onApply }: PropertyFilterSidebarProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    propertyType: 'All',
    location: 'All',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    status: 'All'
  })

  const [expandedSections, setExpandedSections] = useState<string[]>(['propertyType', 'location', 'price'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const handleApply = () => {
    onApply(filters)
    onClose()
  }

  const handleReset = () => {
    setFilters({
      propertyType: 'All',
      location: 'All',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      status: 'All'
    })
  }

  const Section = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => {
    const isExpanded = expandedSections.includes(id)
    return (
      <div className="border-b border-gray-100 last:border-0">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-sm font-medium text-charcoal">{title}</span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pb-4"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-white shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="w-5 h-5 text-[#C9A227]" />
                <h2 className="text-xl font-serif font-light text-charcoal">Filters</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Filter Content */}
            <div className="px-6 py-4 space-y-2">
              {/* Property Type */}
              <Section title="Property Type" id="propertyType">
                <div className="flex flex-wrap gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilters({ ...filters, propertyType: type })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.propertyType === type
                          ? 'bg-[#C9A227] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </Section>

              {/* Location */}
              <Section title="Location" id="location">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </Section>

              {/* Price Range */}
              <Section title="Price Range" id="price">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={filters.minPrice}
                      onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-3 text-sm text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">Min</option>
                      <option value="500000">$500K</option>
                      <option value="1000000">$1M</option>
                      <option value="2000000">$2M</option>
                      <option value="5000000">$5M</option>
                      <option value="10000000">$10M</option>
                    </select>
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-3 text-sm text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">Max</option>
                      <option value="1000000">$1M</option>
                      <option value="2000000">$2M</option>
                      <option value="5000000">$5M</option>
                      <option value="10000000">$10M</option>
                      <option value="20000000">$20M+</option>
                    </select>
                  </div>
                </div>
              </Section>

              {/* Bedrooms & Bathrooms */}
              <Section title="Bedrooms & Bathrooms" id="beds">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-3 text-sm text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">Beds</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={filters.bathrooms}
                      onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-3 py-3 text-sm text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">Baths</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                </div>
              </Section>

              {/* Status */}
              <Section title="Status" id="status">
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilters({ ...filters, status: status })}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.status === status
                          ? 'bg-[#C9A227] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </Section>
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 text-sm font-sans font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleApply}
                className="flex-1 bg-[#C9A227] text-white px-6 py-3 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
