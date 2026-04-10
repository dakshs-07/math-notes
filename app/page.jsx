import Book from "@/components/Book";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full h-[30vh] overflow-hidden">
        <Image
          src="/math1.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full h-auto"
          loading="eager"
        />
      </div>
      <div className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Math One</h1>
        <p className="text-lg text-gray-600 mb-6">
          Find a bunch ogf tricks and tips for every high school math subject.
          These have even been called lifesavers.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-5 px-20">
        <Book color="bg-amber-100" title="Algebra 1" link="/math/Algebra1" />
        <Book color="bg-purple-100" title="Algebra 2" link="/math/Algebra2" />
        <Book color="bg-teal-100" title="Geometry" link="/math/Geometry" />
        <Book
          color="bg-blue-100"
          title="PreCalculus"
          link="/math/PreCalculus"
        />
        <Book color="bg-pink-100" title="Calculus" link="/math/Calculus" />
      </div>
    </div>
  );
}
