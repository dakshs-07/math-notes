"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  let bgColor = "bg-white";
  if (pathname.startsWith("/math/Algebra1")) {
    bgColor = "bg-green-200";
  } else if (pathname === "/math/Algebra2") {
    bgColor = "bg-red-300";
  } else if (pathname === "/math/Geometry") {
    bgColor = "bg-blue-300";
  } else if (pathname === "/math/PreCalc") {
    bgColor = "bg-violet-200";
  } else if (pathname === "/math/Calculus") {
    bgColor = "bg-yellow-200";
  } else {
    bgColor = "bg-gray-300";
  }
  const linkstyle = "hover:underline hover:opacity-70";
  return (
    <div>
      <div className={`${bgColor} flex justify-center items-center gap-8 py-1`}>
        <Link href="/" className={linkstyle}>Home</Link>
        <Link href="/math/Algebra1" className={linkstyle}>
          Algebra 1
        </Link>
        <Link href="/math/Algebra2" className={linkstyle}>
          Algebra 2
        </Link>
        <Link href="/math/Geometry" className={linkstyle}>
          Geometry
        </Link>
        <Link href="/math/PreCalc" className={linkstyle}>
          PreCalculus
        </Link>
        <Link href="/math/Calculus" className={linkstyle}>
          Calculus
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
