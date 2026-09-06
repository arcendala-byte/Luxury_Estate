'use client'

import { ReactNode } from 'react'
import { LenisProvider } from './LenisProvider'
import { ThemeProvider } from './ThemeProvider'
import { WishlistProvider } from './WishlistProvider'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <LenisProvider>
          {children}
        </LenisProvider>
      </WishlistProvider>
    </ThemeProvider>
  )
}
