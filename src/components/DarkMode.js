// components/DarkModeToggle.js
"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
