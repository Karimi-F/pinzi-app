"use client";

import Button from "@/components/Button";
import Navbar from "@/components/NavBar";
import {
  ChevronRight,
  BookOpen,
  BarChart,
  User,
  CircleUserRound,
} from "lucide-react";
import Footer from "../footer/page";
import DarkModeToggle from "@/components/DarkMode";

export default function About() {
  return (
    <div className="bg-white text-black h-screen">
      <Navbar />
      <div className="p-4">
        <h1 className="text-center text-3xl font-bold p-8">About this App</h1>
        <p className="text-xl">
          <span className="font-bold">Welcome!</span> This is a space built for
          Mandarin learners who want to revise smarter — not harder. I created
          this flashcard web app because I was tired of tools that felt
          cluttered, overwhelming, or just didn’t work with how I actually
          learn. If you’ve ever felt like memorizing characters just to forget
          them the next week — yeah, I’ve been there. This app is designed to
          help you study Hanzi, Pinyin, and English translations in a way that’s
          clean, simple, and effective. Whether you're prepping for an HSK exam
          or just trying to remember how to say "apple," I hope this tool makes
          your learning journey a little smoother.
        </p>
      </div>

      <h1 className="text-center text-3xl font-bold p-8">
        Why Use Pinzi Flashcards?
      </h1>
      <div className="flex items-center">
        <div className="flex space-x-6 p-3">
          <div className="rounded-md p-6 border border-gray-300">
            <div className="rounded-full bg-rose-300 w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-red-600 bg-rose-500" />
            </div>
            <h2 className="font-bold text-2xl">Learn Faster</h2>
            <p>
              Interactive flashcards with Hanzi, Pinyin, and meaning all in one
              place
            </p>
          </div>
          <div className="rounded-md p-6 border border-gray-300">
            <div className="rounded-full bg-rose-300 w-12 h-12 flex items-center justify-center mb-4">
              <BarChart className="h-6 w-6 text-red-600 bg-rose 500" />
            </div>
            <h2 className="font-bold text-2xl">Track Progress</h2>
            <p>Save your progress and review cards you find challenging.</p>
          </div>
          <div className="rounded-md p-6 border border-gray-300">
            <div className="rounded-full bg-rose-300 w-12 h-12 flex items-center justify-center mb-4">
              <User className="h-6 w-6 text-red-600 bg-rose 500" />
            </div>

            <h2 className="font-bold text-2xl">Personalized Experience</h2>
            <p>Choose difficulty levels and customize your learning journey</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6 bg-slate-50 m-4 p-4">
        <h1 className="text-3xl font-bold">Ready to start learning?</h1>
        <p className="text-2xl">
          Join thousands of learners mastering Mandarin with our flashcard
          system.
        </p>
        <Button className="">Get Started Now</Button>
      </div>
      <Footer />
    </div>
  );
}
