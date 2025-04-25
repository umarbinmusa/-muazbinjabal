import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <div className="w-full shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </div>

     
        <ul className="hidden md:flex space-x-8 font-bold">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">
            <Link href="./About">About</Link>
          </li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
          <li className="hover:text-green-400 cursor-pointer">Mission</li>
          <li className="hover:text-green-400 cursor-pointer">Services</li>
          <li className="hover:text-green-400 cursor-pointer">Update</li>
        </ul>

        
        <Link
          href="/get-started"
          className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          E-Learning
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
