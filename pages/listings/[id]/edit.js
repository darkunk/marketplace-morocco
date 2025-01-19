import { useState, useEffect } from 'react'
    import { useRouter } from 'next/router'
    import { supabase } from '@/lib/supabaseClient'
    import { useUser } from '@supabase/auth-helpers-react'
    import Image from 'next/image'

    export default function EditListing() {
      const router = useRouter()
      const { id } = router.query
      const [listing, setListing] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const user = useUser()

      // Fetch listing data
      useEffect(() => {
        const fetchListing = async () => {
          if (id) {
            const { data, error } = await supabase
              .from('listings')
              .select('*')
              .eq('id', id)
              .single()

            if (error) {
              setError(error.message)
            } else {
              setListing(data)
            }
            setLoading(false)
          }
        }

        fetchListing()
      }, [id])

      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase
          .from('listings')
          .update(listing)
          .eq('id', id)

        if (error) {
          setError(error.message)
        } else {
          router.push(`/listings/${id}`)
        }
        setLoading(false)
      }

      if (loading) return <div>Loading...</div>
      if (error) return <div>Error: {error}</div>

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Edit Listing</h1>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            {/* Form fields similar to new listing form */}
            {/* Add existing images management */}
            {/* Add status update options */}
          </form>
        </div>
      )
    }
