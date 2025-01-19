import { useState, useEffect } from 'react'
    import { useUser } from '@supabase/auth-helpers-react'
    import { supabase } from '@/lib/supabaseClient'
    import Link from 'next/link'
    import ListingCard from '@/components/ListingCard'

    export default function Dashboard() {
      const user = useUser()
      const [listings, setListings] = useState([])
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchUserListings = async () => {
          if (user) {
            const { data, error } = await supabase
              .from('listings')
              .select('*')
              .eq('user_id', user.id)
              .order('created_at', { ascending: false })

            if (!error) setListings(data)
            setLoading(false)
          }
        }

        fetchUserListings()
      }, [user])

      if (!user) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl mb-4">Please login to access dashboard</h2>
              <Link
                href="/login"
                className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary"
              >
                Login
              </Link>
            </div>
          </div>
        )
      }

      return (
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Your Listings</h1>
            <Link
              href="/listings/new"
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary"
            >
              Create New Listing
            </Link>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} isOwner />
              ))}
            </div>
          )}
        </div>
      )
    }
