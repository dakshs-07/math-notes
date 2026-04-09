import Image from "next/image";
import React from "react";

function ComingSoon() {
  return (
    <div className="fixed inset-16 z-50 flex items-center justify-center bg-white/10 backdrop-blur-xs px-10">
      {/* <Image src="/quokka.jpg" alt="quokka to go with leebit coz minsung" height={200} width={200}/> */}
      <h1 className="text-white text-5xl tracking-widest">
        Coming soon fellas hang in tight
      </h1>
    </div>
  );
}

export default ComingSoon;
