import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const linkhover = "hover:text-amber-200 font-montserrat tracking-wide";
  return (
    <div className="bg-black text-white py-5">
      <div className="flex justify-around max-h-82.5 py-1">
        <Link href="/">
          <Image src="/star.png" alt="logo" width={200} height={200} className='hover:brightness-150'/>
        </Link>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link href="/" className={linkhover}>
            Home
          </Link>
          <Link href="/about" className={linkhover}>
            About
          </Link>
          <Link href="/contact" className={linkhover}>
            Contact
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <Link href="/math/Algebra1" className={linkhover}>
            Algebra 1
          </Link>
          <Link href="/math/Algebra2" className={linkhover}>
            Algebra 2
          </Link>
          <Link href="/math/Geometry" className={linkhover}>
            Geometry
          </Link>
          <Link href="/math/PreCalc" className={linkhover}>
            Pre Calculus
          </Link>
          <Link href="/math/Calculus" className={linkhover}>
          Calculus</Link>
        </div>
      </div>
      <p className="text-sm text-center mt-3 text-gray-300">Math Notes CC 2026</p>
    </div>
  );
}

export default Footer