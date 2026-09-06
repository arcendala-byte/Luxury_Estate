'use client'

import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Send, Building, Users } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-[#C9A227]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                    Get in Touch
                  </span>
                  <div className="w-12 h-px bg-[#C9A227]" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-charcoal leading-[1.1]">
                  <span className="font-bold">Contact</span> Us
                </h1>
                <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto">
                  Connect with our luxury real estate experts for personalized assistance
                  and exclusive property insights.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ScrollReveal direction="left">
                  <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-serif text-charcoal mb-6">Send a Message</h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                          <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors">
                            <option>Property Inquiry</option>
                            <option>Investment Advice</option>
                            <option>Property Valuation</option>
                            <option>General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          rows={4}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors resize-none"
                          placeholder="Tell us about your luxury property needs, investment goals, or any questions you have..."
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#C9A227] text-white px-8 py-4 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <ScrollReveal direction="right">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-serif text-charcoal mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                          <Building className="w-5 h-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Headquarters</h4>
                          <p className="text-gray-500 font-light text-sm">123 Park Avenue<br />New York, NY 10022</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                          <Phone className="w-5 h-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Phone</h4>
                          <p className="text-gray-500 font-light text-sm">+1 (888) 555-0123</p>
                          <p className="text-gray-400 font-light text-xs">Available 24/7</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                          <Mail className="w-5 h-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Email</h4>
                          <p className="text-gray-500 font-light text-sm">info@luxury-estate.com</p>
                          <p className="text-gray-400 font-light text-xs">Response within 2 hours</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4 group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227]/20 transition-colors">
                          <Clock className="w-5 h-5 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">Office Hours</h4>
                          <p className="text-gray-500 font-light text-sm">Mon-Fri: 9:00 AM - 8:00 PM<br />Sat-Sun: 10:00 AM - 6:00 PM</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Map */}
                <ScrollReveal direction="right" delay={0.2}>
                  <motion.div 
                    className="relative h-64 rounded-2xl overflow-hidden border border-gray-100"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80"
                      alt="Map"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-charcoal font-medium flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#C9A227]" />
                          Find Us
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
