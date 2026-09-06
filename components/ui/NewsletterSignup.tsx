'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 text-[#C9A227]"
      >
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-light">Thank you for subscribing!</span>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
        required
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="bg-[#C9A227] text-white px-6 py-3 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center gap-2 justify-center disabled:opacity-50"
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
  )
}
