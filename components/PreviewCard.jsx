import Link from 'next/link'
import React from 'react'

function PreviewCard({href, title, desc, children, preview}) {
  return (
    <div className="relative group w-fit">
      <Link href={href} className="cursor-pointer">
        {children}
      </Link>

      <div className="absolute left-15 top-full mt-2 w-72 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 rounded-2xl shadow-xl bg-white z-50">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-gray-600 py-1">{desc}</p>
        {preview && <div>{preview}</div>}
      </div>
    </div>
  );
}

export default PreviewCard