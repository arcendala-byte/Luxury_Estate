'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Calendar } from 'lucide-react'

interface PropertyEnquiryProps {
  propertyTitle: string
  propertyId: string
}

export function PropertyEnquiry({ propertyTitle, propertyId }: PropertyEnquiryProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In production, send to your backend
    console.log('Enquiry submitted:', {
      ...formData,
      property: propertyTitle,
      propertyId: propertyId
    })
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#C9A227]" />
        </div>
        <h4 className="text-xl font-serif text-charcoal font-light mb-2">Enquiry Sent!</h4>
        <p className="text-gray-400 font-light text-sm">
          Our team will contact you within 24 hours about {propertyTitle}.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
          <textarea
            required
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors resize-none"
            placeholder="Tell us about your interest in this property..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors appearance-none"
          >
            <option value="">Select time</option>
            <option value="morning">Morning (9AM - 12PM)</option>
            <option value="afternoon">Afternoon (12PM - 5PM)</option>
            <option value="evening">Evening (5PM - 8PM)</option>
          </select>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#C9A227] text-white px-6 py-3 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </motion.button>
    </form>
  )
}
