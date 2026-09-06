'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, MapPin, Ruler, Calendar, TrendingUp, DollarSign, ArrowRight } from 'lucide-react'

export function PropertyValuation() {
  const [propertyType, setPropertyType] = useState('Villa')
  const [location, setLocation] = useState('')
  const [size, setSize] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [yearBuilt, setYearBuilt] = useState('')
  const [valuation, setValuation] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)
    // Simulate API call
    setTimeout(() => {
      // Simple valuation logic - in production this would use real data
      const basePrice = {
        Villa: 1200000,
        Penthouse: 1500000,
        Estate: 2000000,
        Apartment: 800000,
        Mansion: 3000000
      }
      
      const locationMultiplier = {
        'New York': 2.5,
        'London': 2.3,
        'Dubai': 2.0,
        'Paris': 2.4,
        'Singapore': 2.2,
        'Sydney': 1.8,
        'Malibu': 3.0,
        'Beverly Hills': 3.5
      }

      const base = basePrice[propertyType as keyof typeof basePrice] || 1000000
      const locMultiplier = locationMultiplier[location as keyof typeof locationMultiplier] || 1.0
      const sizeValue = parseInt(size) || 2000
      const bedValue = parseInt(bedrooms) || 4
      const yearValue = parseInt(yearBuilt) || 2020

      // Calculate valuation
      const sizeFactor = sizeValue / 2000
      const bedFactor = bedValue / 4
      const yearFactor = 1 + (2024 - yearValue) * 0.01

      const estimatedValue = base * locMultiplier * sizeFactor * bedFactor * yearFactor
      setValuation(Math.round(estimatedValue / 100000) * 100000)
      setIsCalculating(false)
    }, 1500)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const propertyTypes = ['Villa', 'Penthouse', 'Estate', 'Apartment', 'Mansion']
  const locations = ['New York', 'London', 'Dubai', 'Paris', 'Singapore', 'Sydney', 'Malibu', 'Beverly Hills']

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-[#C9A227]" />
        </div>
        <h3 className="text-xl font-serif text-charcoal font-light">Property Valuation</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    propertyType === type
                      ? 'bg-[#C9A227] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
              >
                <option value="">Select location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Size (sqft)</label>
            <div className="relative">
              <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="e.g., 2500"
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Bedrooms</label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  placeholder="e.g., 4"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Year Built</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="number"
                  value={yearBuilt}
                  onChange={(e) => setYearBuilt(e.target.value)}
                  placeholder="e.g., 2020"
                  className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            disabled={!location || !size || !bedrooms || !yearBuilt}
            className="w-full bg-[#C9A227] text-white px-6 py-3 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Calculating...
              </span>
            ) : (
              'Estimate Value'
            )}
          </motion.button>
        </div>

        <div className="bg-gray-50/50 rounded-xl p-6 flex flex-col justify-center items-center min-h-[200px]">
          {valuation ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center w-full"
            >
              <p className="text-sm text-gray-400 font-light">Estimated Property Value</p>
              <p className="text-4xl font-serif text-[#C9A227] font-bold mt-2">
                {formatCurrency(valuation)}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400 font-light">Price per sqft</p>
                  <p className="font-medium text-charcoal">
                    {formatCurrency(valuation / parseInt(size) || 0)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-light">Market Confidence</p>
                  <p className="font-medium text-charcoal">High</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 text-[#C9A227] text-sm font-medium flex items-center gap-2 justify-center hover:gap-3 transition-all"
              >
                Request Full Report
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ) : (
            <div className="text-center text-gray-400">
              <DollarSign className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-light">Fill in the details to get an instant property valuation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
