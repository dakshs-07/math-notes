import Link from 'next/link';
import React from 'react'

function Book({color, title, link}) {
  return (
    <div>
      <Link href={link}>
        <div className="w-50 h-70 my-5 mx-2 bg-black cursor-pointer hover:translate-1">
          <div
            className={`${color} m-2 w-full h-full flex justify-center items-center`}
          >
            <h1 className="text-center text-xl">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Book