import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const linkhover = "hover:underline hover:text-amber-200";
  return (
    <div className="bg-black text-white py-5">
      <div className="flex justify-around max-h-[330px] py-1">
        <Image src="/star.png" alt="logo" width={200} height={200} />
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className={linkhover}>Algebra 1</Link>
          <Link href="/" className={linkhover}>Algebra 2</Link>
          <Link href="/" className={linkhover}>Geometry</Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="/" className={linkhover}>Algebra 1</Link>
          <Link href="/" className={linkhover}>Algebra 2</Link>
          <Link href="/" className={linkhover}>Geometry</Link>
          <Link href="/math/PreCalc" className={linkhover}>Pre Calculus</Link>
        </div>
      </div>
      <p className="text-sm text-center mt-3">Math Notes CC 2026</p>
    </div>
  );
}

export default Footer