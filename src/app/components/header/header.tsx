import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-[brown]'>
        <div className='flex items-center space-x-2'>
        <Link href="/" className='flex intem-center space-x-2 left'>
            <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full shadow-lg" />
        </Link>
            <span className='text-white font-bold text-xl'>SG_Baker's</span>   
        </div>

        <nav className='flex space-x-4'>
            <ul>
                <Link href="/" className='text-white hover:bg-white hover:text-[brown] rounded-lg p-2'>Home</Link>
                <Link href="/about" className='text-white hover:bg-white hover:text-[brown] rounded-lg p-2'>About</Link>
                <Link href="/contact" className='text-white hover:bg-white hover:text-[brown] rounded-lg p-2'>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
