'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Youtube, Send } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const footerLinks = {
    Explore: ['Properties', 'Locations', 'Services', 'Journal'],
    Company: ['About', 'Contact', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  }

  return (
    <footer className="bg-[#111111] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="/" className="text-2xl font-serif font-bold inline-block">
              <span className="text-white">Luxury</span>
              <span className="bg-gradient-to-r from-[#C9A227] via-amber-300 to-[#C9A227] bg-clip-text text-transparent bg-[length:200%_auto] animate-gold-shimmer">
                Estate
              </span>
            </a>
            <p className="text-gray-400 text-sm font-light mt-4 leading-relaxed max-w-xs">
              Redefining luxury living through exceptional properties and unparalleled service worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A227]/20 border border-white/10 hover:border-[#C9A227]/40 flex items-center justify-center text-gray-400 hover:text-[#C9A227] transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#C9A227] font-sans font-medium mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                      className="text-gray-400 hover:text-[#C9A227] transition-colors text-sm font-light flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-[#C9A227] transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section - Full Width */}
        <motion.div 
          className="mt-16 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h4 className="text-lg font-serif font-light text-white">
                Subscribe to our <span className="text-[#C9A227]">Journal</span>
              </h4>
              <p className="text-gray-400 text-sm font-light mt-1">
                Receive curated property insights and market updates.
              </p>
            </div>
            <div className="lg:col-span-2">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-[#C9A227]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-light">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:border-[#C9A227]/50 outline-none transition-colors"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#C9A227] text-white px-8 py-3.5 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center gap-2 justify-center whitespace-nowrap disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500 font-light">
            &copy; {currentYear} Luxury Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500 font-light">
            <a href="/privacy" className="hover:text-[#C9A227] transition-colors">
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-gray-700" />
            <a href="/terms" className="hover:text-[#C9A227] transition-colors">
              Terms of Service
            </a>
            <span className="w-px h-3 bg-gray-700" />
            <a href="#" className="hover:text-[#C9A227] transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
