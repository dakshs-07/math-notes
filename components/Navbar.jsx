import Link from 'next/link'
import React from 'react'

function Navbar() {
    const linkstyle = "hover:underline hover:opacity-70"
  return (
    <div>
        <div className='bg-amber-400 flex justify-center items-center gap-8'>
            <Link href="/" className={linkstyle}>Algbera 1</Link>
            <Link href="/" className={linkstyle}>Algebra 2</Link>
            <Link href="/" className={linkstyle}>Geometry</Link>
            <Link href="/" className={linkstyle}>PreCalculus</Link>
        </div>
    </div>
  )
}

export default Navbar