"use client";

import Navbar from "@/components/NavBar";
import Footer from "../footer/page";
import { useState } from "react";

const rules = [
  "Pinyin",
  "Tones",
  "Hanzi & Stroke Order",
  "Sentence Structure",
  "Particles",
  "Measure Words",
  "Verb Tense Markers",
  "Negation",
  "Pronouns",
  "Question Words",
  "Numbers & Dates",
];

const ruleContent = {
  Pinyin:(
    <div>
        <h4>What is Pinyin? </h4>
        <p>Pinyin is the Romanized spelling system used to represent Mandarin pronunciation using the Latin alphabet.
It's made up of initials (consonants), finals (vowel sounds), and tones.</p>
<h4> Pinyin Rules</h4>
<p>1. Pinyin syllables = Initial + Final + Tone
<span>Examples:</span>

mā = m (initial) + a (final) + 1st tone

xiè = x + ie + 4th tone</p>
         </div>

  ),
    Tones: "Let's call them vowels",
};

export default function Rules() {
  const [selected, setSelected] = useState("Pinyin");
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
          <h1 className="text-2xl font-bold mb-4">{selected}</h1>
          <p className="text-lg">{ruleContent[selected]}</p>
          {/* Selected rule content */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
