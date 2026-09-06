'use client'

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { createContext, useContext, ReactNode, useEffect } from 'react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create the client if we have the required environment variables
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

const SupabaseContext = createContext<SupabaseClient | null>(null)

export function SupabaseProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!supabase || typeof window === 'undefined') return

    // Initialize session storage flags if there's an active session
    ;(async () => {
      try {
        // v2: getSession may exist; guard access
        // @ts-ignore
        const sessionRes = await supabase.auth.getSession?.()
        const session = sessionRes?.data?.session
        if (session?.user) {
          sessionStorage.setItem('luxury_user_logged_in', 'true')
          // allow newsletter to be shown once after sign-in
          sessionStorage.setItem('luxury_show_newsletter', 'true')
        }
      } catch (e) {
        // ignore
      }
    })()

    // Listen for auth state changes to toggle session flags
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        sessionStorage.setItem('luxury_user_logged_in', 'true')
        sessionStorage.setItem('luxury_show_newsletter', 'true')
      } else if (event === 'SIGNED_OUT') {
        sessionStorage.removeItem('luxury_user_logged_in')
        sessionStorage.removeItem('luxury_show_newsletter')
        sessionStorage.removeItem('newsletter_shown')
      }
    })

    return () => {
      try {
        // unsubscribe when unmounting
        data?.subscription?.unsubscribe?.()
      } catch (e) {
        // ignore
      }
    }
  }, [])

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  )
}

export function useSupabase() {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}
