'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Testimonials } from '@/components/sections/Testimonials'
import { NeighborhoodGuide } from '@/components/sections/NeighborhoodGuide'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Award, Globe, Users, Clock } from 'lucide-react'
import { useRef } from 'react'

// All working images from Unsplash
const images = {
  hero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
  property1: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&q=80',
  property2: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
  property3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  property4: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
  property5: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80',
  property6: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
  property7: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80',
  cta: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const featuredCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const stats = [
    { 
      icon: Award, 
      title: 'Award-Winning', 
      description: 'Recognized for excellence in luxury real estate globally'
    },
    { 
      icon: Globe, 
      title: 'Global Presence', 
      description: 'Offices and properties in over 50 countries worldwide'
    },
    { 
      icon: Users, 
      title: 'Elite Clientele', 
      description: 'Trusted by the world\'s most discerning buyers and sellers'
    },
    { 
      icon: Clock, 
      title: '15+ Years', 
      description: 'A legacy of excellence in luxury property markets'
    },
  ]

  return (
    <>
      <Navigation />
      <main className="bg-white overflow-hidden">
        {/* Hero with Image */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ scale }}
          >
            <Image
              src={images.hero}
              alt="Luxury estate"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            <motion.div 
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </motion.div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-12 h-px bg-[#C9A227]"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.span 
                  className="text-[11px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Curated Living
                </motion.span>
              </div>
              
              <motion.h1 
                className="text-[clamp(3rem,10vw,6.5rem)] font-serif font-light leading-[0.9] text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Where
                <br />
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-amber-300 to-[#C9A227] bg-[length:200%_auto] animate-gold-shimmer">
                  Luxury
                </span>
                <br />
                Meets Home
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                An exclusive collection of the world's most exceptional residences,
                curated for those who demand the extraordinary.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.a
                  href="/properties"
                  className="bg-[#C9A227] text-white px-10 py-4 text-sm tracking-wide uppercase font-sans font-medium hover:bg-[#C9A227]/90 transition-all hover:scale-105 shadow-lg shadow-[#C9A227]/30 inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/about"
                  className="border border-white/30 px-10 py-4 text-sm tracking-wide uppercase font-sans font-medium text-white hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans font-light">
                Scroll
              </span>
              <ChevronDown className="w-5 h-5 text-white/40" />
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Replaced with descriptive cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Why Choose Us
                  </span>
                  <div className="w-8 h-px bg-[#C9A227]" />
                </div>
                <h2 className="text-4xl font-serif font-light text-charcoal">
                  The <span className="font-bold">Luxury Difference</span>
                </h2>
                <p className="text-gray-400 font-light mt-4 max-w-2xl mx-auto">
                  What sets us apart in the world of luxury real estate.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#C9A227]/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#C9A227]" />
                    </div>
                    <h3 className="text-lg font-serif text-charcoal font-light mb-2">{stat.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{stat.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-8 h-px bg-[#C9A227]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.span 
                    className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Featured
                  </motion.span>
                </div>
                <motion.h2 
                  className="text-4xl sm:text-5xl font-serif font-light text-charcoal"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Signature <span className="font-bold">Estates</span>
                </motion.h2>
              </div>
              <motion.a 
                href="/properties" 
                className="hidden md:flex items-center gap-2 text-sm text-charcoal/60 hover:text-[#C9A227] transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                View all
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </motion.div>

            {/* Featured Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Card 1: Featured Estate */}
              <motion.div 
                className="md:col-span-2 group cursor-pointer"
                variants={featuredCardVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: 'easeInOut' }
                }}
              >
                <div className="relative h-[420px] md:h-[500px] bg-gray-100 overflow-hidden rounded-2xl shadow-lg">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                      alt="Featured property"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                  
                  <motion.div 
                    className="absolute top-0 left-0 h-1 bg-[#C9A227] z-20"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="flex items-center gap-2 mb-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-sans font-medium">
                        Featured
                      </span>
                      <span className="w-6 h-px bg-[#C9A227]" />
                    </motion.div>
                    <motion.h3 
                      className="text-3xl md:text-4xl font-serif text-white font-light mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Château de Rêve
                    </motion.h3>
                    <motion.p 
                      className="text-white/60 text-sm font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Provence, France
                    </motion.p>
                    <motion.p 
                      className="text-[#C9A227] text-2xl md:text-3xl font-serif mt-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      €18,500,000
                    </motion.p>
                    <motion.p 
                      className="mt-3 text-white/70 text-sm font-light leading-relaxed max-w-md"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      A magnificent 18th-century château set on 50 acres of pristine French countryside, featuring original period details, a private vineyard, and panoramic views.
                    </motion.p>
                    
                    <motion.div
                      className="mt-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href="/properties/1"
                        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#C9A227] hover:text-white transition-colors group/link"
                        whileHover={{ x: 4 }}
                      >
                        View Property
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Card 2: Villa Mon Repos */}
              <motion.div 
                className="group cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: 'easeInOut' }
                }}
              >
                <div className="relative h-[420px] md:h-[500px] bg-gray-100 overflow-hidden rounded-2xl shadow-lg">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Image
                      src={images.property1}
                      alt="Villa Mon Repos"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h4 
                      className="text-xl md:text-2xl font-serif text-white font-light mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Villa Mon Repos
                    </motion.h4>
                    <motion.p 
                      className="text-white/60 text-sm font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Lake Geneva, Switzerland
                    </motion.p>
                    <motion.p 
                      className="text-[#C9A227] text-xl md:text-2xl font-serif mt-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      CHF 12,900,000
                    </motion.p>
                    <motion.p 
                      className="mt-2 text-white/70 text-sm font-light leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      An exceptional lakeside estate with breathtaking views of the Swiss Alps and a private dock.
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom row - 3 cards with unique images */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                { 
                  title: 'Palazzo Antico', 
                  location: 'Florence, Italy', 
                  price: '€9,200,000', 
                  image: images.property2,
                  description: 'A magnificent Renaissance palazzo in the heart of Florence with original frescoes and a private courtyard.'
                },
                { 
                  title: 'Penthouse 57', 
                  location: 'New York, USA', 
                  price: '$22,500,000', 
                  image: images.property3,
                  description: 'A stunning full-floor penthouse with 360-degree views of the Manhattan skyline and a private rooftop terrace.'
                },
                { 
                  title: 'Island Estate', 
                  location: 'Bahamas', 
                  price: '$15,800,000', 
                  image: images.property4,
                  description: 'A private island estate with pristine beaches, crystal-clear waters, and unparalleled seclusion.'
                },
              ].map((property, index) => (
                <motion.div 
                  key={index}
                  className="group cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: 'easeInOut' }
                  }}
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-xl shadow-md">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-serif text-charcoal font-light group-hover:text-[#C9A227] transition-colors">
                      {property.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-light">{property.location}</p>
                    <p className="text-[#C9A227] font-serif text-lg mt-1">{property.price}</p>
                    <p className="mt-2 text-gray-500 text-sm font-light leading-relaxed line-clamp-2">
                      {property.description}
                    </p>
                    <motion.div
                      className="mt-3 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={`/properties/${index + 2}`}
                        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#C9A227] hover:text-charcoal transition-colors group/link"
                      >
                        View Property
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Editorial Quote */}
        <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C9A227] blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C9A227] blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#C9A227]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                  Philosophy
                </span>
                <div className="w-12 h-px bg-[#C9A227]" />
              </div>
              <blockquote className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.2]">
                "Luxury is not about opulence.
                <br />
                It is about <span className="text-[#C9A227] font-bold">meaning</span>,
                <br className="hidden sm:block" />
                about the story a home tells."
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-[#C9A227]/30" />
                <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-sans">
                  The Luxury Estate Philosophy
                </p>
                <div className="w-8 h-px bg-[#C9A227]/30" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Neighborhood Guide Section */}
        <NeighborhoodGuide />

        {/* More Properties with unique images */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-8 h-px bg-[#C9A227]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                  Discover More
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Modern Mansion',
                  location: 'Beverly Hills, USA',
                  price: '$18,500,000',
                  image: images.property5,
                  description: 'A contemporary masterpiece in one of Beverly Hills\' most prestigious neighborhoods with resort-style amenities.'
                },
                {
                  title: 'Beachfront Villa',
                  location: 'Maldives',
                  price: '$14,200,000',
                  image: images.property6,
                  description: 'An exclusive private villa set on its own island with overwater suites and world-class diving.'
                },
              ].map((property, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
                >
                  <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <h4 className="text-2xl font-serif text-charcoal font-light group-hover:text-[#C9A227] transition-colors">
                      {property.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-light">{property.location}</p>
                    <p className="text-[#C9A227] font-serif text-2xl mt-2">{property.price}</p>
                    <p className="text-gray-500 text-sm font-light mt-2 leading-relaxed">
                      {property.description}
                    </p>
                    <motion.div
                      className="mt-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={`/properties/${index + 5}`}
                        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-charcoal hover:text-[#C9A227] transition-colors group/link"
                      >
                        View Property
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.cta}
              alt="Luxury lifestyle"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>
          
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"
              animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="up">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Concierge
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-serif font-light text-white leading-[1.1]">
                  A World of
                  <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-amber-300 to-[#C9A227] bg-[length:200%_auto] animate-gold-shimmer">
                    Luxury
                  </span> Awaits
                </h2>
                <p className="text-white/60 font-light leading-relaxed mt-6 max-w-md">
                  Our team of expert advisors is ready to guide you through
                  the world's most exclusive real estate opportunities.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 bg-[#C9A227] text-white px-10 py-4 text-sm tracking-wide uppercase font-sans font-medium hover:bg-[#C9A227]/90 transition-all hover:scale-105 shadow-lg shadow-[#C9A227]/30 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Speak with an Advisor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}