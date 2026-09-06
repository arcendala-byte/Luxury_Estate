'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Mail } from 'lucide-react'

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  useEffect(() => {
    // Only show popup for signed-in users and only once per session.
    if (typeof window === 'undefined') return

    const canShow = sessionStorage.getItem('luxury_show_newsletter') === 'true'
    const alreadyShown = sessionStorage.getItem('newsletter_shown') === 'true'

    if (!hasBeenShown && canShow && !alreadyShown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setHasBeenShown(true)
        sessionStorage.setItem('newsletter_shown', 'true')
        // Once shown, don't show again this session
        sessionStorage.removeItem('luxury_show_newsletter')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [hasBeenShown])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  if (isSubscribed) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h3 className="text-xl font-serif text-charcoal font-light mb-2">You're Subscribed!</h3>
              <p className="text-gray-400 text-sm font-light">
                Thank you for subscribing to our newsletter.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#C9A227]" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal font-light mb-2">
                Luxury Insights
              </h3>
              <p className="text-gray-400 text-sm font-light mb-6">
                Subscribe to receive exclusive property updates, market insights, and luxury living inspiration.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder:text-gray-400 focus:border-[#C9A227]/50 outline-none transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#C9A227] text-white px-6 py-3 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
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
              <p className="text-xs text-gray-400 text-center font-light">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
