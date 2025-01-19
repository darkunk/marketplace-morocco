import { useState } from 'react'
    import { useRouter } from 'next/router'
    import { supabase } from '@/lib/supabaseClient'
    import Link from 'next/link'

    export default function Signup() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)
      const router = useRouter()

      const handleSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) {
          setError(error.message)
        } else {
          router.push('/')
        }
        setLoading(false)
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors"
              >
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      )
    }
