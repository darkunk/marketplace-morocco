import { useState } from 'react'
    import { supabase } from '@/lib/supabaseClient'
    import { useRouter } from 'next/router'

    export default function ListingActions({ listingId, isOwner }) {
      const router = useRouter()
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)

      const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
          setLoading(true)
          setError(null)

          const { error } = await supabase
            .from('listings')
            .delete()
            .eq('id', listingId)

          if (error) {
            setError(error.message)
          } else {
            router.push('/dashboard')
          }
          setLoading(false)
        }
      }

      if (!isOwner) return null

      return (
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => router.push(`/listings/${listingId}/edit`)}
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary"
          >
            Edit Listing
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete Listing'}
          </button>
        </div>
      )
    }
