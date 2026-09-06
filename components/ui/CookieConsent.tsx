'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield, Settings } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setPreferences(allPreferences)
    saveConsent(allPreferences)
  }

  const acceptEssential = () => {
    const essentialPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setPreferences(essentialPreferences)
    saveConsent(essentialPreferences)
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookie_consent', JSON.stringify({
      accepted: true,
      preferences: prefs,
      date: new Date().toISOString()
    }))
    setIsVisible(false)
    setShowSettings(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-2xl border border-gray-100/50 rounded-2xl shadow-2xl p-6 md:p-8">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h4 className="text-lg font-serif text-charcoal font-light">Cookie Preferences</h4>
                </div>
                <p className="text-sm text-gray-500 font-light">
                  We use cookies to enhance your experience and analyze our traffic. 
                  By continuing, you agree to our use of cookies.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors font-light"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={acceptEssential}
                  className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-sans font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Essential Only
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={acceptAll}
                  className="bg-[#C9A227] text-white px-6 py-2.5 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors shadow-lg shadow-[#C9A227]/25"
                >
                  Accept All
                </motion.button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h4 className="text-lg font-serif text-charcoal font-light">Privacy Settings</h4>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-charcoal">Necessary Cookies</p>
                    <p className="text-xs text-gray-400 font-light">Always active</p>
                  </div>
                  <span className="text-xs text-[#C9A227] font-medium">Required</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-charcoal">Analytics Cookies</p>
                    <p className="text-xs text-gray-400 font-light">Help us improve our website</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A227]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-charcoal">Marketing Cookies</p>
                    <p className="text-xs text-gray-400 font-light">Personalize your experience</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A227]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-charcoal">Preference Cookies</p>
                    <p className="text-xs text-gray-400 font-light">Remember your settings</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C9A227]"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-sans font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={savePreferences}
                  className="bg-[#C9A227] text-white px-6 py-2.5 rounded-full text-sm font-sans font-medium hover:bg-[#C9A227]/90 transition-colors shadow-lg shadow-[#C9A227]/25"
                >
                  Save Preferences
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
