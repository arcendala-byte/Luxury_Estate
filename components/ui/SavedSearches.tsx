'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Plus, X, Search, MapPin, Home, DollarSign, Clock } from 'lucide-react'

interface SavedSearch {
  id: string
  name: string
  filters: {
    type?: string
    location?: string
    minPrice?: string
    maxPrice?: string
    bedrooms?: string
  }
  createdAt: string
  frequency: 'daily' | 'weekly' | 'monthly'
}

export function SavedSearches() {
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([])
  const [showModal, setShowModal] = useState(false)
  const [newSearchName, setNewSearchName] = useState('')
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly')
  const [searchFilters, setSearchFilters] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  })

  useEffect(() => {
    // Load saved searches from localStorage
    const saved = localStorage.getItem('savedSearches')
    if (saved) {
      try {
        setSavedSearches(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading saved searches:', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('savedSearches', JSON.stringify(savedSearches))
  }, [savedSearches])

  const saveSearch = () => {
    if (!newSearchName.trim()) return

    const newSearch: SavedSearch = {
      id: Date.now().toString(),
      name: newSearchName,
      filters: searchFilters,
      createdAt: new Date().toISOString(),
      frequency
    }

    setSavedSearches([newSearch, ...savedSearches])
    setShowModal(false)
    setNewSearchName('')
    setSearchFilters({
      type: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    })
  }

  const deleteSearch = (id: string) => {
    setSavedSearches(savedSearches.filter(s => s.id !== id))
  }

  const getFrequencyLabel = (freq: string) => {
    return freq.charAt(0).toUpperCase() + freq.slice(1)
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
            <Bell className="w-5 h-5 text-[#C9A227]" />
          </div>
          <h3 className="text-xl font-serif text-charcoal font-light">Saved Searches</h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#C9A227] text-white rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Alert
        </motion.button>
      </div>

      {savedSearches.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-sm font-light">No saved searches yet</p>
          <p className="text-xs font-light">Create alerts for new properties matching your criteria</p>
        </div>
      ) : (
        <div className="space-y-3">
          {savedSearches.map((search) => (
            <motion.div
              key={search.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div>
                <h4 className="font-medium text-charcoal text-sm">{search.name}</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {search.filters.type && (
                    <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full">
                      <Home className="w-3 h-3 inline mr-1" />
                      {search.filters.type}
                    </span>
                  )}
                  {search.filters.location && (
                    <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {search.filters.location}
                    </span>
                  )}
                  {search.filters.minPrice && (
                    <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full">
                      <DollarSign className="w-3 h-3 inline mr-1" />
                      {search.filters.minPrice} - {search.filters.maxPrice || 'Any'}
                    </span>
                  )}
                  <span className="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {getFrequencyLabel(search.frequency)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => deleteSearch(search.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded-full transition-all"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Create Alert Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif text-charcoal font-light">Create Alert</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Alert Name</label>
                    <input
                      type="text"
                      value={newSearchName}
                      onChange={(e) => setNewSearchName(e.target.value)}
                      placeholder="e.g., Luxury Villas in Dubai"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                    <select
                      value={searchFilters.type}
                      onChange={(e) => setSearchFilters({ ...searchFilters, type: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">All Types</option>
                      <option value="Villa">Villa</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Estate">Estate</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Mansion">Mansion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                    <select
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="">All Locations</option>
                      <option value="New York">New York</option>
                      <option value="London">London</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Paris">Paris</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Sydney">Sydney</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Min Price</label>
                      <select
                        value={searchFilters.minPrice}
                        onChange={(e) => setSearchFilters({ ...searchFilters, minPrice: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                      >
                        <option value="">Any</option>
                        <option value="500000">$500K</option>
                        <option value="1000000">$1M</option>
                        <option value="2000000">$2M</option>
                        <option value="5000000">$5M</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Max Price</label>
                      <select
                        value={searchFilters.maxPrice}
                        onChange={(e) => setSearchFilters({ ...searchFilters, maxPrice: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                      >
                        <option value="">Any</option>
                        <option value="1000000">$1M</option>
                        <option value="2000000">$2M</option>
                        <option value="5000000">$5M</option>
                        <option value="10000000">$10M</option>
                        <option value="20000000">$20M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Alert Frequency</label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly' | 'monthly')}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={saveSearch}
                    className="w-full bg-[#C9A227] text-white px-6 py-3 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                  >
                    Save Alert
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
