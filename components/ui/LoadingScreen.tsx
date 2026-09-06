'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoading(false)
      return
    }

    // Show the loading screen only once per browser session (on initial open/refresh)
    const alreadyShown = sessionStorage.getItem('luxury_loading_shown') === 'true'
    if (alreadyShown) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      try {
        sessionStorage.setItem('luxury_loading_shown', 'true')
      } catch (e) {
        // ignore storage errors
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[999] bg-white flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-serif font-light"
            >
              <span className="text-charcoal">LUXURY</span>
              <span className="text-[#C9A227] ml-1">ESTATE</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="mt-6 h-0.5 bg-gray-200 max-w-xs mx-auto overflow-hidden rounded-full"
            >
              <motion.div
                className="h-full bg-[#C9A227]"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
