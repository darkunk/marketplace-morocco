import { useState } from 'react'
    import { SessionContextProvider } from '@supabase/auth-helpers-react'
    import { supabase } from '@/lib/supabaseClient'
    import { Toaster } from 'react-hot-toast'
    import '../styles/globals.css'

    export default function App({ Component, pageProps }) {
      return (
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
          <Toaster position="bottom-right" />
        </SessionContextProvider>
      )
    }
