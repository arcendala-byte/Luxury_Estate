'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building, TrendingUp, Shield, Award, Star, Globe } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Property Acquisition',
    description: 'Expert guidance in identifying and acquiring the world\'s most exceptional properties, tailored to your unique vision and requirements. Our team provides exclusive access to off-market listings and private sales.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: Building,
    features: ['Off-Market Access', 'Private Sales', 'Due Diligence', 'Negotiation']
  },
  {
    id: 2,
    title: 'Investment Advisory',
    description: 'Strategic investment insights and market analysis to help you build a portfolio of high-value properties with exceptional returns. We provide comprehensive market intelligence and investment strategies.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    icon: TrendingUp,
    features: ['Market Analysis', 'Portfolio Strategy', 'Risk Assessment', 'ROI Optimization']
  },
  {
    id: 3,
    title: 'Property Management',
    description: 'Comprehensive property management services ensuring your luxury assets are maintained to the highest standards of excellence. From maintenance to tenant relations, we handle every detail.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    icon: Shield,
    features: ['Maintenance', 'Tenant Relations', 'Financial Management', 'Concierge Services']
  },
  {
    id: 4,
    title: 'Valuation Services',
    description: 'Accurate and comprehensive property valuations conducted by industry experts with deep knowledge of luxury real estate markets. Our valuations are trusted by financial institutions worldwide.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    icon: Award,
    features: ['Market Analysis', 'Comparative Assessment', 'Investment Valuation', 'Expert Testimony']
  },
  {
    id: 5,
    title: 'Concierge Services',
    description: 'White-glove concierge services including interior design, renovation, and lifestyle management to enhance your luxury living experience. We curate every aspect of your lifestyle.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    icon: Star,
    features: ['Interior Design', 'Renovation', 'Lifestyle Management', 'Private Events']
  },
  {
    id: 6,
    title: 'Global Relocation',
    description: 'Seamless relocation services for international clients, ensuring a smooth transition to your new luxury residence anywhere in the world. We handle every aspect of your move.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: Globe,
    features: ['International Moving', 'Settlement Services', 'School Placement', 'Cultural Integration']
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Our Services
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  White-Glove
                  <br />
                  <span className="font-bold text-[#C9A227]">Concierge</span>
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Comprehensive luxury real estate services designed to exceed
                  the expectations of the world's most discerning clients.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#C9A227]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 font-light text-sm mt-2 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.features.map((feature) => (
                          <span key={feature} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href="/contact"
                        className="mt-4 inline-block text-[#C9A227] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
