'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'James Anderson',
    role: 'CEO, Anderson Global',
    content: 'The Luxury Estate team provided an unparalleled experience in finding our dream home in Lake Geneva. Their attention to detail and understanding of our needs was exceptional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    property: 'Villa Mon Repos'
  },
  {
    id: 2,
    name: 'Elizabeth Chen',
    role: 'Founder, Chen & Partners',
    content: 'From the initial consultation to the final signing, the service was impeccable. They truly understand what luxury means and delivered beyond our expectations.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    rating: 5,
    property: 'Penthouse Suite'
  },
  {
    id: 3,
    name: 'Robert Williams',
    role: 'Director, Williams & Co',
    content: 'We have worked with many real estate agencies, but none compare to the professionalism and expertise of Luxury Estate. They made our international relocation seamless.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    rating: 5,
    property: 'Country Estate'
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#C9A227]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
              Testimonials
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2 className="text-4xl font-serif font-light text-charcoal">
            What Our <span className="font-bold">Clients Say</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-400 font-light">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl font-light text-gray-600 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <p className="mt-4 text-sm text-gray-400 font-light">
                - {testimonials[currentIndex].property}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2 rounded-full border border-gray-200 hover:border-[#C9A227] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </motion.button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#C9A227] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2 rounded-full border border-gray-200 hover:border-[#C9A227] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
