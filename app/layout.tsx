import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { Navigation } from '@/components/navigation/Navigation'
import { FloatingActions } from '@/components/ui/FloatingActions'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { NewsletterPopup } from '@/components/ui/NewsletterPopup'
import { PageTransition } from '@/components/ui/PageTransition'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luxury Estate | Premium Properties Worldwide',
  description: 'Discover the finest luxury properties, estates, and investment opportunities worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-charcoal antialiased overflow-x-hidden">
        <Providers>
          <LoadingScreen />
          <Navigation />
          <ScrollProgress />
          <main className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <FloatingActions />
          <CookieConsent />
          <NewsletterPopup />
        </Providers>
      </body>
    </html>
  )
}
