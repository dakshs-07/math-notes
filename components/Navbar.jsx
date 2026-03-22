import Link from 'next/link'
import React from 'react'

function Navbar() {
    const linkstyle = "hover:underline hover:opacity-70"
  return (
    <div>
        <div className='bg-amber-400 flex justify-center items-center gap-8 py-1'>
            <Link href="/math/Algebra1" className={linkstyle}>Algebra 1</Link>
            <Link href="/math/Algebra2" className={linkstyle}>Algebra 2</Link>
            <Link href="/math/Geometry" className={linkstyle}>Geometry</Link>
            <Link href="/math/PreCalc" className={linkstyle}>PreCalculus</Link>
        </div>
    </div>
  )
}

export default Navbar