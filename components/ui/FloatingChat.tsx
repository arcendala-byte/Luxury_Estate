'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSend = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/18885550123?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const quickMessages = [
    'I\'m interested in a property',
    'I\'d like to schedule a viewing',
    'Tell me about your services',
    'I have an investment inquiry',
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-24 right-8 z-50"
        >
          {/* Chat Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow relative"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </motion.button>

          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25 }}
                className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Chat with us</h4>
                    <p className="text-xs text-white/70">We typically reply within minutes</p>
                  </div>
                </div>

                {/* Quick Messages */}
                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-400 font-light mb-2">Quick responses:</p>
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMessage(msg)}
                      className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm text-gray-600 transition-colors"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t border-gray-100 p-3 flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-charcoal placeholder:text-gray-400 focus:outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSend}
                    className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#25D366]/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* WhatsApp Link */}
                <div className="border-t border-gray-100 px-4 py-2 text-center">
                  <a
                    href="https://wa.me/18885550123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-[#25D366] transition-colors flex items-center justify-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    Or contact us directly
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
