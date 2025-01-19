import Image from 'next/image'
    import Link from 'next/link'

    export default function ListingCard({ listing, isOwner = false }) {
      return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <Image
              src={listing.images[0] || '/placeholder.jpg'}
              alt={listing.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{listing.title}</h3>
            <p className="text-gray-600">{listing.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-primary font-bold">{listing.price} MAD</span>
              <Link
                href={`/listings/${listing.id}`}
                className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
              >
                {isOwner ? 'Manage' : 'View'}
              </Link>
            </div>
          </div>
        </div>
      )
    }
