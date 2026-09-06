'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Heart } from 'lucide-react'
import { useWishlist } from '@/components/providers/WishlistProvider'
import { CurrencySwitcher } from '@/components/ui/CurrencySwitcher'

interface NavItem {
  label: string
  href?: string
  items?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Properties',
    items: [
      { label: 'All Properties', href: '/properties' },
      { label: 'Villas', href: '/properties/villas' },
      { label: 'Penthouses', href: '/properties/penthouses' },
      { label: 'Estates', href: '/properties/estates' },
      { label: 'Beachfront', href: '/properties/beachfront' },
    ]
  },
  {
    label: 'Locations',
    items: [
      { label: 'New York', href: '/locations' },
      { label: 'London', href: '/locations' },
      { label: 'Dubai', href: '/locations' },
      { label: 'Paris', href: '/locations' },
      { label: 'Singapore', href: '/locations' },
      { label: 'Sydney', href: '/locations' },
    ]
  },
  {
    label: 'Services',
    items: [
      { label: 'Property Acquisition', href: '/services' },
      { label: 'Investment Advisory', href: '/services' },
      { label: 'Property Management', href: '/services' },
      { label: 'Valuation', href: '/services' },
      { label: 'Concierge', href: '/services' },
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Journal', href: '/blog' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Contact', href: '/contact' },
    ]
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  let wishlistCount = 0
  try {
    const wishlistContext = useWishlist()
    wishlistCount = wishlistContext.wishlistCount
  } catch (error) {
    wishlistCount = 0
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-100/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-xl md:text-2xl tracking-[0.15em] font-serif font-light hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <span className="text-charcoal">LUXURY</span>
            <span className="text-[#C9A227] ml-1">ESTATE</span>
          </a>

          {/* Desktop Navigation - Clean with dropdowns only */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 rounded-full text-sm font-sans font-light transition-colors flex items-center gap-1 ${
                    activeDropdown === item.label
                      ? 'text-[#C9A227] bg-[#C9A227]/5'
                      : 'text-charcoal/70 hover:text-[#C9A227] hover:bg-[#C9A227]/5'
                  }`}
                  onClick={() => handleMouseEnter(item.label)}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2.5 rounded-xl hover:bg-[#C9A227]/5 transition-all text-sm font-sans text-charcoal/70 hover:text-[#C9A227]"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <CurrencySwitcher />
            <a
              href="/wishlist"
              className="p-2 rounded-full hover:bg-[#C9A227]/5 transition-colors relative"
            >
              <Heart className="w-5 h-5 text-charcoal/60 hover:text-[#C9A227] transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C9A227] text-white text-[8px] rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </a>
            <a
              href="/contact"
              className="bg-[#C9A227] text-white px-6 py-2 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-all hover:scale-105 shadow-lg shadow-[#C9A227]/25"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-charcoal" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100"
          >
            <div className="px-4 py-6 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0">
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-serif font-light text-charcoal/80 hover:text-[#C9A227] transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      mobileActiveDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-1 pl-4">
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              className="block py-2.5 text-base text-gray-500 hover:text-[#C9A227] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <CurrencySwitcher />
                  <a
                    href="/wishlist"
                    className="flex items-center gap-2 text-charcoal/60 hover:text-[#C9A227] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Wishlist</span>
                    {wishlistCount > 0 && (
                      <span className="bg-[#C9A227] text-white text-xs px-2 py-0.5 rounded-full">
                        {wishlistCount}
                      </span>
                    )}
                  </a>
                </div>
                <a
                  href="/contact"
                  className="block w-full bg-[#C9A227] text-white px-6 py-3 rounded-full text-center font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
