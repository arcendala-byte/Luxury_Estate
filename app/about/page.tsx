'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Sparkles } from 'lucide-react'

const images = {
  hero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
  team1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  team2: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  team3: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  story: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
}

const teamMembers = [
  { 
    name: 'Sarah Johnson', 
    role: 'CEO & Founder', 
    image: images.team1,
    bio: 'With over 15 years of luxury real estate experience, Sarah has built a global network of the world\'s most exclusive properties.',
    expertise: ['Luxury Sales', 'Global Strategy']
  },
  { 
    name: 'Michael Chen', 
    role: 'Head of Luxury Sales', 
    image: images.team2,
    bio: 'A specialist in ultra-premium properties, Michael has facilitated some of the world\'s most high-value real estate transactions.',
    expertise: ['Ultra-Premium Properties', 'Investment']
  },
  { 
    name: 'Emma Williams', 
    role: 'Property Specialist', 
    image: images.team3,
    bio: 'Passionate about architectural design and lifestyle curation, Emma helps clients find properties that perfectly match their vision.',
    expertise: ['Architecture', 'Design']
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.hero}
              alt="Luxury lifestyle"
              fill
              className="object-cover opacity-10"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    About Us
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-charcoal leading-[1.1]">
                  The Art of
                  <br />
                  <span className="font-bold text-[#C9A227]">Luxury Living</span>
                </h1>
                <p className="text-lg text-gray-500 font-light leading-relaxed mt-6">
                  We are a premier luxury real estate agency dedicated to connecting
                  discerning clients with extraordinary properties worldwide.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-px bg-[#C9A227]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                      Our Story
                    </span>
                  </div>
                  <h2 className="text-4xl font-serif font-light text-charcoal mb-6">
                    A Legacy of <span className="font-bold">Excellence</span>
                  </h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4">
                    Founded in 2008, Luxury Estate has grown from a boutique agency
                    into a global leader in luxury real estate, with a presence in
                    over 50 countries worldwide.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed mb-4">
                    Our commitment to excellence, integrity, and personalized service
                    has earned us the trust of the world's most discerning clients.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Today, we continue to redefine luxury living by curating the
                    world's most exceptional properties and delivering an
                    unparalleled client experience.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={images.story}
                    alt="Luxury estate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Our Purpose
                  </span>
                  <div className="w-8 h-px bg-[#C9A227]" />
                </div>
                <h2 className="text-4xl font-serif font-light text-charcoal">
                  Mission & <span className="font-bold">Vision</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="left" delay={0.2}>
                <motion.div 
                  className="bg-white rounded-2xl p-10 border border-gray-100 hover:border-[#C9A227]/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-4">Our Mission</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    To provide an unparalleled luxury real estate experience by
                    connecting clients with exceptional properties while delivering
                    white-glove service and expert guidance.
                  </p>
                </motion.div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={0.3}>
                <motion.div 
                  className="bg-white rounded-2xl p-10 border border-gray-100 hover:border-[#C9A227]/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-4">Our Vision</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    To become the world's most trusted luxury real estate brand,
                    known for our commitment to excellence, integrity, and the
                    art of living well.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Our Team
                  </span>
                  <div className="w-8 h-px bg-[#C9A227]" />
                </div>
                <h2 className="text-4xl font-serif font-light text-charcoal">
                  Meet the <span className="font-bold">Experts</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A227]/30 transition-all shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-charcoal group-hover:text-[#C9A227] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#C9A227] text-sm font-medium mt-1">{member.role}</p>
                    <p className="text-gray-400 text-sm font-light mt-2">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Image */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={images.office}
            alt="Luxury office"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <ScrollReveal direction="up">
              <div className="text-center text-white">
                <h3 className="text-3xl font-serif font-light">Our Global Headquarters</h3>
                <p className="text-white/60 font-light mt-2">New York • London • Dubai • Singapore</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Statistics */}
        <section className="py-24 bg-[#111111] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Our Impact
                  </span>
                  <div className="w-8 h-px bg-[#C9A227]" />
                </div>
                <h2 className="text-4xl font-serif font-light text-white">
                  By the <span className="font-bold text-[#C9A227]">Numbers</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter target={500} label="Properties Sold" suffix="+" />
              <AnimatedCounter target={50} label="Countries Worldwide" suffix="+" />
              <AnimatedCounter target={1000} label="Happy Clients" suffix="+" />
              <AnimatedCounter target={15} label="Years of Excellence" suffix="+" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}