'use client'

import { useParams } from 'next/navigation'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { WishlistButton } from '@/components/ui/WishlistButton'
import { ShareProperty } from '@/components/ui/ShareProperty'
import { VirtualTour } from '@/components/ui/VirtualTour'
import { MortgageCalculator } from '@/components/ui/MortgageCalculator'
import { PDFBrochure } from '@/components/ui/PDFBrochure'
import { PropertyEnquiry } from '@/components/ui/PropertyEnquiry'
import { PropertyStatusBadge } from '@/components/ui/PropertyStatusBadge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bed, Bath, Square, Calendar, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const propertyData = {
  id: 1,
  title: 'Villa Mon Repos',
  location: 'Lake Geneva, Switzerland',
  price: 'CHF 12,900,000',
  fullDescription: 'Set on 5 acres of pristine waterfront property, Villa Mon Repos represents the pinnacle of alpine luxury. The residence features 6 spacious bedrooms, each with en-suite bathrooms and stunning lake views.',
  beds: 6,
  baths: 8,
  sqft: '8,500',
  yearBuilt: 2020,
  images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
  ],
  features: ['Private Dock', 'Alpine Views', 'Wine Cellar', 'Home Theater', 'Infinity Pool', 'Spa'],
  amenities: ['24/7 Security', 'Concierge Service', 'Private Chef', 'Housekeeping'],
  nearby: [
    { type: 'Schools', name: 'International School of Geneva', distance: '3.2 km' },
    { type: 'Hospitals', name: 'Clinique de Genolier', distance: '5.8 km' },
    { type: 'Shopping', name: 'Rue du Rhône Luxury District', distance: '4.5 km' },
    { type: 'Transport', name: 'Geneva International Airport', distance: '12 km' },
  ],
  agent: {
    name: 'Sarah Johnson',
    title: 'Luxury Property Specialist',
    email: 'sarah@luxury-estate.com',
    phone: '+41 79 123 4567',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    experience: '15+ years',
    languages: ['English', 'French', 'German']
  }
}

export default function PropertyDetailPage() {
  const params = useParams()
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % propertyData.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + propertyData.images.length) % propertyData.images.length)
  }

  const propertyForWishlist = {
    id: propertyData.id,
    title: propertyData.title,
    location: propertyData.location,
    price: propertyData.price,
    beds: propertyData.beds,
    baths: propertyData.baths,
    sqft: propertyData.sqft,
    image: propertyData.images[0],
    type: 'Villa'
  }

  const pdfPropertyData = {
    title: propertyData.title,
    location: propertyData.location,
    price: propertyData.price,
    description: propertyData.fullDescription,
    beds: propertyData.beds,
    baths: propertyData.baths,
    sqft: propertyData.sqft,
    yearBuilt: propertyData.yearBuilt,
    features: propertyData.features,
    images: propertyData.images,
    agent: {
      name: propertyData.agent.name,
      email: propertyData.agent.email,
      phone: propertyData.agent.phone
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-20 bg-white overflow-hidden">
        <section className="relative">
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <Image
              src={propertyData.images[currentImage]}
              alt={propertyData.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {propertyData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="absolute top-8 right-8 flex gap-3">
              <WishlistButton property={propertyForWishlist} variant="icon" />
              <ShareProperty 
                propertyTitle={propertyData.title}
                propertyUrl={`https://luxury-estate.com/properties/${params.id}`}
              />
            </div>

            <div className="absolute top-8 left-8">
              <PropertyStatusBadge status="for-sale" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ScrollReveal direction="up">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#C9A227] text-sm font-medium">For Sale</span>
                    <span className="w-px h-4 bg-gray-300" />
                    <span className="text-gray-400 text-sm font-light">ID: {params.id}</span>
                  </div>
                  <h1 className="text-4xl font-serif font-light text-charcoal">{propertyData.title}</h1>
                  <p className="text-gray-500 font-light flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4" />
                    {propertyData.location}
                  </p>
                  <p className="text-3xl font-serif text-[#C9A227] mt-4">{propertyData.price}</p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <div className="mt-8 flex flex-wrap gap-6 p-6 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Bed className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{propertyData.beds}</p>
                        <p className="text-xs text-gray-400 font-light">Bedrooms</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bath className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{propertyData.baths}</p>
                        <p className="text-xs text-gray-400 font-light">Bathrooms</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Square className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{propertyData.sqft}</p>
                        <p className="text-xs text-gray-400 font-light">Square Feet</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#C9A227]" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{propertyData.yearBuilt}</p>
                        <p className="text-xs text-gray-400 font-light">Year Built</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Description</h2>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {propertyData.fullDescription}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Features & Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-charcoal mb-3">Features</h3>
                        <ul className="space-y-2">
                          {propertyData.features.map((feature, index) => (
                            <li key={index} className="text-gray-500 text-sm font-light flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-charcoal mb-3">Amenities</h3>
                        <ul className="space-y-2">
                          {propertyData.amenities.map((amenity, index) => (
                            <li key={index} className="text-gray-500 text-sm font-light flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" />
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.5}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Nearby</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {propertyData.nearby.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                          <div>
                            <p className="text-sm font-medium text-charcoal">{item.type}</p>
                            <p className="text-xs text-gray-400 font-light">{item.name}</p>
                          </div>
                          <span className="text-xs text-[#C9A227]">{item.distance}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.6}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Virtual Tour</h2>
                    <VirtualTour images={propertyData.images} title={propertyData.title} />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.65}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Property Brochure</h2>
                    <PDFBrochure property={pdfPropertyData} />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.7}>
                  <div className="mt-10">
                    <h2 className="text-2xl font-serif text-charcoal font-light mb-4">Mortgage Calculator</h2>
                    <MortgageCalculator />
                  </div>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-1">
                <ScrollReveal direction="right">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-24">
                    <h2 className="text-sm font-medium text-charcoal mb-4">Property Specialist</h2>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={propertyData.agent.image}
                          alt={propertyData.agent.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{propertyData.agent.name}</p>
                        <p className="text-sm text-gray-400 font-light">{propertyData.agent.title}</p>
                        <p className="text-xs text-gray-400 font-light">{propertyData.agent.experience}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-1">
                      {propertyData.agent.languages.map((lang) => (
                        <span key={lang} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{lang}</span>
                      ))}
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <motion.a
                        href={`mailto:${propertyData.agent.email}`}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-2 w-full bg-[#C9A227] text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-[#C9A227]/90 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Email Agent
                      </motion.a>
                      <motion.a
                        href={`tel:${propertyData.agent.phone}`}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center justify-center gap-2 w-full border border-gray-200 text-charcoal px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Agent
                      </motion.a>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className="w-full bg-charcoal text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-charcoal/90 transition-colors"
                      >
                        Schedule Viewing
                      </motion.button>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h2 className="text-sm font-medium text-charcoal mb-4">Interested in this property?</h2>
                    <PropertyEnquiry 
                      propertyTitle={propertyData.title}
                      propertyId={params.id as string}
                    />
                  </div>
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
