'use client';

import Navbar from "@/components/NavBar";
import Footer from "../footer/page";

const rules = [
  "Pinyin & Tones",
  "Hanzi & Stroke Order",
  "Sentence Structure",
  "Particles",
  "Measure Words",
  "Verb Tense Markers",
  "Negation",
  "Pronouns",
  "Question Words",
  "Numbers & Dates"
];

export default function Rules(){
    return (
        <div className="text-black bg-slate-50 min-h-screen">
            <Navbar />
            <div className="flex h-screen">
  {/* Sidebar */}
  <aside className="w-64 bg-gray-100 border-r p-4">
    <ul className="space-y-2">
  {rules.map((rule, index) => (
    <li
      key={index}
      className="cursor-pointer p-2 rounded hover:bg-gray-200"
      onClick={() => setSelected(rule)}
    >
      {rule}
    </li>
  ))}
</ul>
  </aside>

  {/* Main content area */}
  <main className="flex-1 p-6 overflow-y-scroll">
    {/* Selected rule content */}
  </main>
</div>
            <Footer />
        </div>
    )
}