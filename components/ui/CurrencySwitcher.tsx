'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, ChevronDown } from 'lucide-react'

interface Currency {
  code: string
  symbol: string
  label: string
  rate: number
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', label: 'US Dollar', rate: 1 },
  { code: 'EUR', symbol: '€', label: 'Euro', rate: 0.92 },
  { code: 'GBP', symbol: '£', label: 'British Pound', rate: 0.79 },
  { code: 'CHF', symbol: 'CHF', label: 'Swiss Franc', rate: 0.88 },
  { code: 'AED', symbol: 'د.إ', label: 'UAE Dirham', rate: 3.67 },
  { code: 'SGD', symbol: 'S$', label: 'Singapore Dollar', rate: 1.34 },
]

interface CurrencySwitcherProps {
  onCurrencyChange?: (currency: Currency) => void
}

export function CurrencySwitcher({ onCurrencyChange }: CurrencySwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0])

  useEffect(() => {
    const savedCurrency = localStorage.getItem('luxury_currency')
    if (savedCurrency) {
      const found = currencies.find(c => c.code === savedCurrency)
      if (found) setSelectedCurrency(found)
    }
  }, [])

  const handleSelect = (currency: Currency) => {
    setSelectedCurrency(currency)
    localStorage.setItem('luxury_currency', currency.code)
    setIsOpen(false)
    if (onCurrencyChange) onCurrencyChange(currency)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors text-sm text-charcoal/70"
      >
        <span>{selectedCurrency.symbol}</span>
        <span className="font-light">{selectedCurrency.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-1.5">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => handleSelect(currency)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#C9A227]/5 transition-all text-left ${
                    selectedCurrency.code === currency.code ? 'bg-[#C9A227]/10' : ''
                  }`}
                >
                  <span className="text-lg w-8 text-center">{currency.symbol}</span>
                  <div>
                    <div className="text-sm font-medium text-charcoal">{currency.code}</div>
                    <div className="text-xs text-gray-400 font-light">{currency.label}</div>
                  </div>
                  {selectedCurrency.code === currency.code && (
                    <span className="ml-auto w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
