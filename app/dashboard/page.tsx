'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { SavedSearches } from '@/components/ui/SavedSearches'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { Heart, Bell, Clock, TrendingUp, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    { label: 'Saved Properties', value: 8, icon: Heart, color: 'text-[#C9A227]' },
    { label: 'Active Alerts', value: 3, icon: Bell, color: 'text-[#C9A227]' },
    { label: 'Recent Views', value: 12, icon: Clock, color: 'text-[#C9A227]' },
    { label: 'Portfolio Value', value: '$45.2M', icon: TrendingUp, color: 'text-[#C9A227]' },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#C9A227]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                  Dashboard
                </span>
              </div>
              <h1 className="text-4xl font-serif font-light text-charcoal">
                Welcome <span className="font-bold">Back</span>
              </h1>
              <p className="text-gray-400 font-light mt-2">
                Manage your saved properties, alerts, and preferences.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 font-light">{stat.label}</p>
                      <p className="text-2xl font-serif text-charcoal mt-1">{stat.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Saved Searches */}
            <ScrollReveal direction="left">
              <SavedSearches />
            </ScrollReveal>

            {/* Quick Actions */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-serif text-charcoal font-light mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/properties"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Browse Properties</p>
                        <p className="text-xs text-gray-400">Find your dream luxury estate</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A227] transition-colors" />
                  </a>

                  <a
                    href="/wishlist"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">View Wishlist</p>
                        <p className="text-xs text-gray-400">Your saved properties</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A227] transition-colors" />
                  </a>

                  <a
                    href="/compare"
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#C9A227]" />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Compare Properties</p>
                        <p className="text-xs text-gray-400">Side by side comparison</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A227] transition-colors" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
