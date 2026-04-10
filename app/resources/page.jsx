import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <div className="w-full h-[30vh] overflow-hidden">
        <Image
          src="/math1.jpg"
          alt="math banner imahe"
          height={1200}
          width={600}
          className="w-full h-auto"
          loading="eager"
        />
      </div>
      <PageWrapper gradient="from-white to-slate-100" fontColor="text-black">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl tracking-wide py-10">RESOURCES</h1>
          <p className="text-center max-w-100 text-lg">
            A list of resources available online to help deepen your
            understanding of math concepts. Feel free to suggest more through
            the{" "}
            <a href="/contact" className="underline text-blue-400">
              Contact Form
            </a>
          </p>
        </div>
        <div>
          <div>
            <ul>
              Practicing for the SAT:
              <li>
                Learn how to utilize full potential of desmos. Look up any
                youtube tutorial on full guide to desmos for sat.
                www.learnsatmath.com is a good one.
              </li>
              <li>
                Know how to use the formula sheet. You dont need to have it
                memorized at all, but know what variables mean and what are the
                formulas about.
              </li>
              <li>Take as many practice tests on Bluebook</li>
              <li>
                No negative marking on the SAT means that you should be spending
                the last 2 mins taking guess on teh questions you dont know how
                to do. DO NOT I repeat do not leave any question unattempted.
                Guessing does no harm at all. Test your luck.
              </li>
            </ul>
            <ul></ul>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
