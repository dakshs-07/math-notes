import Link from 'next/link'
import React from 'react'
import {Moon} from 'lucide-react';

function TopBar() {
  return (
    <div>
      <div className="flex justify-center items-center gap-6 text-sm bg-black h-7 text-white">
        <Link href="/">Formula Sheets</Link>
        <Link href="/">Feedback</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <div className='absolute right-0'>
            <Moon size={20}/>
        </div>
      </div>
    </div>
  );
}

export default TopBar