'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Facebook, Twitter, Linkedin, Mail, Link2, Check } from 'lucide-react'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  propertyTitle: string
  propertyUrl: string
}

export function ShareModal({ isOpen, onClose, propertyTitle, propertyUrl }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`,
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(propertyTitle)}&url=${encodeURIComponent(propertyUrl)}`,
      color: '#000000'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(propertyUrl)}`,
      color: '#0A66C2'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(propertyTitle)}&body=${encodeURIComponent(`Check out this property: ${propertyUrl}`)}`,
      color: '#EA4335'
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-charcoal font-light">Share Property</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {shareLinks.map((platform) => {
                  const Icon = platform.icon
                  return (
                    <motion.a
                      key={platform.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-[#C9A227]/30 transition-all hover:shadow-md"
                      style={{ color: platform.color }}
                      onClick={onClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{platform.name}</span>
                    </motion.a>
                  )
                })}
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <input
                  type="text"
                  value={propertyUrl}
                  readOnly
                  className="flex-1 bg-transparent text-sm text-gray-500 font-light outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-[#C9A227] text-white rounded-lg text-sm font-medium hover:bg-[#C9A227]/90 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Link2 className="w-4 h-4" />
                      Copy Link
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
