import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/cat.jpg"
        alt="hero image bro"
        className="w-full h-50 object-cover"
        width={100}
        height={100}
      />
      <div className="py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Math One</h1>
      <p className="text-lg text-gray-600 mb-6">
        Find a bunch ogf tricks and tips for every high school math subject. These have even been called lifesavers.
      </p>
      </div>
    </div>
  );
}
