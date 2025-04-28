import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <div className="w-full shadow-md lg:fixed">
      <nav className="flex items-center justify-between px-6 py-4">

        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </div>

     
        <ul className="hidden md:flex space-x-8 font-bold">
        <Link href="/">  <li className="hover:text-green-400 cursor-pointer">Home</li></Link>
          <li className="hover:text-green-400 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
         <Link href="/libry"><li className="hover:text-green-400 cursor-pointer">E-Libry</li></Link> 
          <li className="hover:text-green-400 cursor-pointer">Services</li>
          <li className="hover:text-green-400 cursor-pointer">Update</li>
        </ul>

        
        <Link
          href="/mid"
          className="hidden md:block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          E-Learning
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
