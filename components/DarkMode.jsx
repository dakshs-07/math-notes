"use client";

import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button onClick={() => setDark(!dark)} className="cursor-pointer p-2">
      <Moon size={30} />
    </button>
  );
}

export default DarkMode;
