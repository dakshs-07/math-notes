import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="relative">
      <div className="w-full h-[30vh] overflow-hidden">
        <Image
          src="/math1.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <PageWrapper
        gradient="from-white to-pink-100"
        fontColor="text-black"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl tracking-wide py-10">ABOUT</h1>
          <p className="text-center max-w-[400px] text-lg">
            This website was made to give fella students all the formulas, tips and
            tricks i have learned over the years that just made math so simple
            and easy. If you would like to suggest any content or corrections,
            feel free to email!
          </p>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
