'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Loader2 } from 'lucide-react'

interface PropertyData {
  title: string
  location: string
  price: string
  description: string
  beds: number
  baths: number
  sqft: string
  yearBuilt: number
  features: string[]
  images: string[]
  agent: {
    name: string
    email: string
    phone: string
  }
}

interface PDFBrochureProps {
  property: PropertyData
}

export function PDFBrochure({ property }: PDFBrochureProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      // In production, this would call your API to generate PDF
      // For now, we'll simulate with a download
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Create a simple text brochure
      const brochureContent = `
LUXURY ESTATE - PROPERTY BROCHURE
================================

${property.title}
${property.location}
${property.price}

DESCRIPTION
-----------
${property.description}

SPECIFICATIONS
--------------
Bedrooms: ${property.beds}
Bathrooms: ${property.baths}
Square Feet: ${property.sqft}
Year Built: ${property.yearBuilt}

FEATURES
--------
${property.features.map(f => `• ${f}`).join('\n')}

CONTACT
-------
Agent: ${property.agent.name}
Email: ${property.agent.email}
Phone: ${property.agent.phone}

Generated: ${new Date().toLocaleDateString()}
      `
      
      // Create download
      const blob = new Blob([brochureContent], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${property.title.replace(/\s+/g, '-')}-brochure.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={generatePDF}
      disabled={isGenerating}
      className="flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-sans font-medium hover:bg-charcoal/90 transition-colors disabled:opacity-50"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <FileText className="w-4 h-4" />
          Download Brochure
        </>
      )}
    </motion.button>
  )
}
