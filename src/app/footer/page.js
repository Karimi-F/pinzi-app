"use client";

import DarkModeToggle from "@/components/DarkMode";

export default function Footer() {
  return (
    <div className="bg-slate-50 text-gray-400 text-center p-8">
      <p>
        &copy;{new Date().getFullYear()} Pinzi Flashcards. All rights reserved.
      </p>
    </div>
  );
}
