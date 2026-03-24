import PageWrapper from "@/components/PageWrapper";
import PreviewCard from "@/components/PreviewCard";
import Link from "next/link";
import React from "react";

function page() {
  const link = "hover:text-emrald-300 hover:bg-emrald-400 px-1";
  return (
    <PageWrapper
      gradient="from-emrald-100 to-teal-200"
      fontColor="text-emrald-900"
    >
      <div>
        <h1 className="text-5xl text-center tracking-wide py-6">Algebra 1</h1>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl my-5">TOPICS</h1>
            <PreviewCard href="/linear-equation" title="Linear Equations" desc="Solve, graph and see how to find the values" preview={<img src="/file.svg" />}><span className={link}>Linear Preview</span></PreviewCard>
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
