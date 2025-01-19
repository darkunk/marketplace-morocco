import Link from 'next/link'
    import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

    export default function Header() {
      const user = useUser()
      const supabase = useSupabaseClient()

      const handleSignOut = async () => {
        await supabase.auth.signOut()
      }

      return (
        <header className="bg-secondary text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Moroccan Marketplace
            </Link>
            <nav>
              {user ? (
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="hover:text-primary">
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="hover:text-primary"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link href="/login" className="hover:text-primary">
                    Login
                  </Link>
                  <Link href="/signup" className="hover:text-primary">
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </header>
      )
    }
