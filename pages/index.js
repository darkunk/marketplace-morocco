import Link from 'next/link'
    import Image from 'next/image'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import {
      faFemale,
      faMale,
      faLaptop,
      faGamepad,
      faCampground,
      faHome,
      faChild,
      faFutbol,
      faHandsHelping,
      faBriefcase,
      faHiking,
      faTools,
      faBook,
      faEllipsisH
    } from '@fortawesome/free-solid-svg-icons'

    export default function HomePage() {
      const categories = [
        { name: 'Women', icon: faFemale },
        { name: 'Men', icon: faMale },
        { name: 'Electronics', icon: faLaptop },
        { name: 'Gaming', icon: faGamepad },
        { name: 'Camping', icon: faCampground },
        { name: 'Home', icon: faHome },
        { name: 'Kids', icon: faChild },
        { name: 'Sports', icon: faFutbol },
        { name: 'Handmade', icon: faHandsHelping },
        { name: 'Office', icon: faBriefcase },
        { name: 'Outdoor', icon: faHiking },
        { name: 'Tools', icon: faTools },
        { name: 'Books', icon: faBook },
        { name: 'View All', icon: faEllipsisH }
      ]

      return (
        <div className="min-h-screen flex flex-col">
          {/* Wide Menu */}
          <header className="bg-[#252b60] px-10 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/assets/logo.png"
                    alt="Marketplace Logo"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex-grow mx-8">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder-white/50 focus:outline-none"
                />
              </div>

              {/* Right Side Icons */}
              <div className="flex items-center space-x-6">
                <Link href="/login" className="text-white hover:text-gray-300">
                  Login
                </Link>
                <Link href="/signup" className="text-white hover:text-gray-300">
                  Sign Up
                </Link>
                <button className="text-white hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="text-white hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                <button className="bg-white text-[#252b60] px-6 py-2 rounded hover:bg-gray-100">
                  Sell
                </button>
              </div>
            </div>
          </header>

          {/* Categories Section */}
          <main className="flex-grow bg-gray-50">
            <div className="w-full px-8 py-4 bg-white shadow-sm">
              <div className="flex items-center justify-between space-x-6 overflow-x-auto no-scrollbar">
                {categories.map((category, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px]">
                    <FontAwesomeIcon 
                      icon={category.icon} 
                      className="w-6 h-6 text-[#252b60] hover:text-[#252b60]/80"
                    />
                    <span className="text-sm text-gray-600">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      )
    }
