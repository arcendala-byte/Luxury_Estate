'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Check } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: string
  type: string
  image: string
}

interface PropertyComparisonProps {
  properties: Property[]
  maxCompare?: number
}

export function PropertyComparison({ properties, maxCompare = 3 }: PropertyComparisonProps) {
  const [selected, setSelected] = useState<Property[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCompare = (property: Property) => {
    if (selected.length < maxCompare && !selected.find(p => p.id === property.id)) {
      setSelected([...selected, property])
    }
  }

  const removeFromCompare = (id: number) => {
    setSelected(selected.filter(p => p.id !== id))
  }

  const clearAll = () => {
    setSelected([])
  }

  const isSelected = (id: number) => selected.some(p => p.id === id)

  const comparisonKeys = [
    { key: 'price', label: 'Price' },
    { key: 'beds', label: 'Bedrooms' },
    { key: 'baths', label: 'Bathrooms' },
    { key: 'sqft', label: 'Square Feet' },
    { key: 'type', label: 'Type' },
  ]

  return (
    <div className="relative">
      {/* Compare Bar - Fixed at bottom */}
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-charcoal">
                    Compare ({selected.length}/{maxCompare})
                  </span>
                  <div className="flex items-center gap-2">
                    {selected.map((property) => (
                      <motion.div
                        key={property.id}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm"
                      >
                        <span className="text-charcoal font-light truncate max-w-[100px]">
                          {property.title}
                        </span>
                        <button
                          onClick={() => removeFromCompare(property.id)}
                          className="hover:text-red-500 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={clearAll}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Clear all
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#C9A227] text-white px-6 py-2 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                  >
                    {isOpen ? 'Close Comparison' : 'View Comparison'}
                  </button>
                </div>
              </div>

              {/* Comparison Panel */}
              <AnimatePresence>
                {isOpen && selected.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-100 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Features column */}
                        <div className="space-y-4">
                          <h4 className="font-serif text-charcoal font-light">Features</h4>
                          {comparisonKeys.map(({ label }) => (
                            <div key={label} className="text-sm text-gray-400 font-light py-2">
                              {label}
                            </div>
                          ))}
                        </div>

                        {/* Property columns */}
                        {selected.map((property) => (
                          <div key={property.id} className="space-y-4">
                            <h4 className="font-serif text-charcoal font-light truncate">
                              {property.title}
                            </h4>
                            {comparisonKeys.map(({ key }) => (
                              <div key={key} className="text-sm text-gray-600 font-light py-2">
                                {property[key as keyof Property] || '-'}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Button on Property Cards */}
      {properties.map((property) => (
        <button
          key={property.id}
          onClick={() => addToCompare(property)}
          disabled={isSelected(property.id)}
          className={`text-xs font-sans transition-colors ${
            isSelected(property.id)
              ? 'text-[#C9A227] cursor-default'
              : selected.length < maxCompare
              ? 'text-gray-400 hover:text-[#C9A227]'
              : 'text-gray-300 cursor-not-allowed'
          }`}
        >
          {isSelected(property.id) ? (
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Added
            </span>
          ) : selected.length < maxCompare ? (
            <span className="flex items-center gap-1">
              <Plus className="w-3 h-3" /> Compare
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Minus className="w-3 h-3" /> Max reached
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
