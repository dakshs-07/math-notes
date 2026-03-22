import Link from "next/link";
import React from "react";

function page() {
  const link = "hover:text-violet-300 hover:bg-violet-100 px-1";
  return (
    <div className="my-10 text-violet-300">
      <h1 className="text-5xl text-center tracking-wide py-6">Algebra 2</h1>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl my-5">TOPICS</h1>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
          <Link href="/linear-equations" className={link}>
            Linear Equations
          </Link>
        </div>
        <div>
          <h1>Quick Links</h1>
          <Link href="/">Cheatsheets</Link>
        </div>
      </div>
    </div>
  );
}

export default page;
