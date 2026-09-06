import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-[#C9A227]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] font-sans font-medium">
                  Legal
                </span>
                <div className="w-12 h-px bg-[#C9A227]" />
              </div>
              <h1 className="text-4xl font-serif font-light text-charcoal">
                Terms of <span className="font-bold">Service</span>
              </h1>
              <p className="text-gray-500 font-light mt-4">
                Last updated: June 2026
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <ScrollReveal direction="up" delay={0.1}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">1. Acceptance of Terms</h2>
                <p>
                  By using our website and services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">2. Intellectual Property</h2>
                <p>
                  All content on this website, including text, images, logos, and designs, is the property of 
                  Luxury Estate and is protected by copyright and intellectual property laws.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">3. Property Listings</h2>
                <p className="mb-3">
                  Property listings on our website are provided for informational purposes only. We strive to ensure 
                  the accuracy of all listings but do not guarantee their completeness or accuracy.
                </p>
                <p>
                  All property details, including prices and availability, are subject to change without notice.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">4. User Accounts</h2>
                <p className="mb-3">When you create an account, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">5. Limitation of Liability</h2>
                <p>
                  Luxury Estate is not liable for any damages arising from the use of our website or services. 
                  All services are provided "as is" without warranties of any kind.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">6. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <p className="mt-3 text-charcoal">
                  Email: legal@luxury-estate.com<br />
                  Phone: +1 (888) 555-0123
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
