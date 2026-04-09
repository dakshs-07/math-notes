import Image from 'next/image'
import React from 'react'

function Leebit() {
  return (
    <div className='fixed bottom-0 right-4 z-50'>
        <Image src="/leebit.png" alt='Leebit everywhere around teh world ofc' height={200} width={200} className='rotate-20 hover:-rotate-20 cursor-pointer transition'/>
    </div>
  )
}

export default Leebit