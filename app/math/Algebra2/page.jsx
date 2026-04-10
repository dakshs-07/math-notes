import PageWrapper from "@/components/PageWrapper";
import PreviewCard from "@/components/PreviewCard";
import Link from "next/link";
import React from "react";

function page() {
  const link = "hover:text-pink-700 hover:bg-pink-100 px-1 dark:text-gray-200 hover:dark:text-black transition";
  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-")
  const basePath = "/math/Algebra2"
  const topics = [
    "Quadratics",
    "Trigonometry",
    "Exponential Functions",
    "Rational Functions",
    "Radical Functions"
  ]
  return (
    <PageWrapper gradient="from-rose-100 to-stone-300 dark:from-slate-500" fontColor="text-rose-900">
      <div>
        <h1 className="text-5xl text-center tracking-wide py-6 dark:text-white">Algebra 2</h1>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl my-5 dark:text-black">TOPICS</h1>
            {topics.map((topic) => (
              <Link href={`${basePath}/${slugify(topic)}`} key={topic}>
                <PreviewCard title={topic} preview={<img src="/file.svg" />}>
                  <span className={link}>{topic}</span>
                </PreviewCard>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl my-5 dark:text-black">QUICK LINKS</h1>
            <Link href="/" className={link}>
              Cheatsheets
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default page;
