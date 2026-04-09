import ComingSoon from "@/components/ComingSoon";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import React from "react";

function page() {
  const link = "hover:text-violet-700 hover:bg-yellow-100/40 px-1";
  return (
    <PageWrapper
      gradient="from-yellow-100 to-indigo-300"
      fontColor="text-violet-900"
    >
      <ComingSoon/>
      <div className="my">
        <h1 className="text-5xl text-center tracking-wide py-6">Pre Calculus</h1>
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
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl my-5">QUICK LINKS</h1>
            <Link href="/" className={link}>Cheatsheets</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
