'use client'

import { motion } from 'framer-motion'
import { Search, ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background with subtle gold accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#C9A227]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#C9A227]/[0.02] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase font-sans font-semibold">
              Premier Luxury Real Estate
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-charcoal"
          >
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-[#C9A227] via-amber-400 to-[#C9A227] bg-clip-text text-transparent bg-[length:200%_auto] animate-gold-shimmer">
              Dream Estate
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mt-6 mb-12"
          >
            Experience unparalleled luxury living with our curated collection of
            the world's most exceptional properties and estates.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search luxury properties..."
                className="w-full bg-white border border-gray-200 rounded-full pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors shadow-sm"
              />
            </div>
            <button className="bg-[#C9A227] text-white px-8 py-4 rounded-full font-sans font-semibold hover:bg-[#C9A227]/90 transition-all hover:scale-105 whitespace-nowrap shadow-lg shadow-[#C9A227]/25">
              Search
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200"
          >
            {[
              { number: '500+', label: 'Properties' },
              { number: '50+', label: 'Countries' },
              { number: '1,000+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-charcoal">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <ChevronDown className="w-4 h-4 text-[#C9A227] mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
