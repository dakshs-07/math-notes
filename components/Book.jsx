import Link from "next/link";
import React from "react";
import { DotPattern } from "@/components/ui/dot-pattern";

function Book({ color, title, link }) {
  return (
    <div>
      <Link href={link}>
        <div className="relative w-50 h-70 mb-10 mx-2 bg-black cursor-pointer hover:-translate-2 hover:brightness-90 transition">
          <div
            className={`${color} m-2 w-full h-full flex justify-center items-center`}
          >
            <div className="absolute inset-0 w-full h-full m-1 overflow-hidden">
              <DotPattern
                width={20}
                height={20}
                cr={3}
                className="opacity-25"
              />
            </div>

            <h1 className="text-center text-xl z-10">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Book;
