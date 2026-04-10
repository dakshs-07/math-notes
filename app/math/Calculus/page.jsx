import ComingSoon from "@/components/ComingSoon";
import PageWrapper from "@/components/PageWrapper";
import PreviewCard from "@/components/PreviewCard";
import Link from "next/link";
import React from "react";

function page() {
  const link = "hover:text-black hover:bg-white dark:text-gray-200 dark:hover:text-black px-1 transition";
  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");
  const basePath = "/math/Calculus";
  const topics = ["Functions", "Limits", "Continuity"];
  return (
    <PageWrapper
      gradient="from-emerald-100 to-stone-200 dark:from-emerald-600 dark:to-slate-300"
      fontColor="text-stone-800"
    >
      <ComingSoon />
      <div>
        <h1 className="text-5xl text-center tracking-wide py-6 dark:text-white">Calculus</h1>
        <div className="flex justify-around">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl my-5">TOPICS</h1>
            {topics.map((topic) => (
              <Link href={`${basePath}/${slugify(topic)}`} key={topic}>
                <PreviewCard title={topic} preview={<img src="/file.svg" />}>
                  <span className={link}>{topic}</span>
                </PreviewCard>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl my-5">QUICK LINKS</h1>
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
