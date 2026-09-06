import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function PrivacyPage() {
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
                Privacy <span className="font-bold">Policy</span>
              </h1>
              <p className="text-gray-500 font-light mt-4">
                Last updated: June 2026
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8 text-gray-600 font-light leading-relaxed">
            <ScrollReveal direction="up" delay={0.1}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">1. Introduction</h2>
                <p>
                  Luxury Estate ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Property preferences and search history</li>
                  <li>Device and browser information</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Match you with luxury properties</li>
                  <li>Communicate with you about properties and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal data. However, no method of transmission 
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">5. Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.6}>
              <div>
                <h2 className="text-2xl font-serif text-charcoal font-light mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <p className="mt-3 text-charcoal">
                  Email: privacy@luxury-estate.com<br />
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
