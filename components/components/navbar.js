import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav 
      className='h-16 bg-cover bg-center flex justify-between px-3 items-center text-white' 
      style={{ backgroundImage: "url('/green2.jpg')" }}
    >
      <div className="logo font-bold text-2xl">
        <Link href="/">LinkLite.</Link>
      </div>
    </nav>
  )
}

export default Navbar
