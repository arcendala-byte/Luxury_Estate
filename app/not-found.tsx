import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[80vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-serif font-light text-charcoal mb-4">404</div>
          <h1 className="text-4xl font-serif font-light text-charcoal mb-4">
            Page Not <span className="font-bold text-[#C9A227]">Found</span>
          </h1>
          <p className="text-gray-400 font-light text-lg mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border border-gray-200 text-charcoal px-8 py-3 rounded-full font-sans font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
