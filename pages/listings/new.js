import { useState, useEffect } from 'react'
    import { useRouter } from 'next/router'
    import { supabase } from '@/lib/supabaseClient'
    import { useUser } from '@supabase/auth-helpers-react'
    import Image from 'next/image'
    import { toast } from 'react-hot-toast'

    const NewListingPage = () => {
      const user = useUser()
      const router = useRouter()

      // State management
      const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        condition: 'new',
        color: '',
        location: 'Casablanca',
        images: []
      })
      const [loading, setLoading] = useState(false)
      const [uploading, setUploading] = useState(false)
      const [sellerInfo, setSellerInfo] = useState(null)

      // ... (keep all existing component logic)

      return (
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>

          {/* ... (keep all existing JSX) */}
        </div>
      )
    }

    export default NewListingPage
