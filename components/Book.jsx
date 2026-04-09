import Link from "next/link";
import React from "react";

function Book({ color, title, link }) {
  return (
    <div>
      <Link href={link}>
        <div className="w-50 h-70 mb-10 mx-2 bg-black cursor-pointer hover:-translate-2 hover:brightness-90 transition">
          <div
            className={`${color} m-2 w-full h-full flex justify-center items-center`}
          >
            <h1 className="text-center text-xl z-10">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Book;
