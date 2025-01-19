import { useRouter } from 'next/router'
    import { useEffect, useState } from 'react'
    import { supabase } from '@/lib/supabaseClient'
    import { useUser } from '@supabase/auth-helpers-react'
    import Image from 'next/image'
    import Link from 'next/link'

    export default function ListingDetail() {
      const router = useRouter()
      const { id } = router.query
      const [listing, setListing] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
      const user = useUser()

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

      if (loading) return <div>Loading...</div>
      if (error) return <div>Error: {error}</div>

      return (
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <div>
              <div className="relative h-96 mb-4">
                <Image
                  src={listing.images[0]}
                  alt={listing.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {listing.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-20">
                    <Image
                      src={image}
                      alt={`Listing image ${index + 2}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-primary">
                  {listing.price} MAD
                </span>
                <span className="text-sm text-gray-500">
                  Condition: {listing.condition}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{listing.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500">Category</span>
                    <p className="font-medium">{listing.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Status</span>
                    <p className="font-medium">{listing.status}</p>
                  </div>
                </div>
              </div>

              {user?.id === listing.user_id && (
                <div className="flex gap-4">
                  <Link
                    href={`/listings/${listing.id}/edit`}
                    className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary"
                  >
                    Edit Listing
                  </Link>
                  <button
                    onClick={() => handleDelete(listing.id)}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete Listing
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
