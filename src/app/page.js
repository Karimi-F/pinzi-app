"use client";

import AuthButton from "@/components/AuthButton";
import Button from "@/components/Button";
import About from "./about/page";
import Footer from "./footer/page";
import Contact from "./contact/page";
import {
  BarChart,
  BookOpen,
  ChevronRight,
  Github,
  Mail,
  Twitter,
  User,
} from "lucide-react";
import Navbar from "@/components/NavBar";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkMode";

export default function Landing() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <div className="wrapper flex justify-between items-center h-screen w-full p-3 bg-rose-50 text-black">
        <div className="w-1/2">
          <h2 className="text-6xl font-bold">Learn Mandarin the Smart Way!</h2>
          <p className="text-xl">
            Master Hanzi with intercative flashcards and track your progress
            effortlessly.
          </p>
          <div className=" flex space-x-6">
            <Button className="!w-1/4 !flex !h-11">
              Sign up Free <ChevronRight />
            </Button>
            <Button className="!bg-white !text-black !w-1/6 !border !border-gray-200">
              Login
            </Button>
          </div>
        </div>
        <div className="w-1/2 space-y-2">
          <div className="flex space-x-6 bg-white text-black w-3/5 rounded-md h-20 p-4 m-24 my-auto">
            <h1 className="text-5xl">学</h1>
            <div>
              <p>xué</p>
              <p className="font-semibold">to learn</p>
            </div>
          </div>
          <div className="flex bg-white text-black space-x-6 w-3/5 rounded-md h-20 p-4 m-24">
            <h1 className="text-5xl">习</h1>
            <div>
              <p>xí</p>
              <p className="font-semibold">to practice</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="p-4">
          <h1 className="text-center text-3xl font-bold p-8">About this App</h1>
          <p className="text-xl">
            <span className="font-bold">Welcome!</span> This is a space built
            for Mandarin learners who want to revise smarter — not harder. I
            created this flashcard web app because I was tired of tools that
            felt cluttered, overwhelming, or just didn’t work with how I
            actually learn. If you’ve ever felt like memorizing characters just
            to forget them the next week — yeah, I’ve been there. This app is
            designed to help you study Hanzi, Pinyin, and English translations
            in a way that’s clean, simple, and effective. Whether you're
            prepping for an HSK exam or just trying to remember how to say
            "apple," I hope this tool makes your learning journey a little
            smoother.
          </p>
        </div>

        <h1 className="text-center text-3xl font-bold p-8">
          Why Use Pinzi Flashcards?
        </h1>
        <div className="flex items-center">
          <div className="flex space-x-6 p-3">
            <div className="rounded-md p-6 border border-gray-300">
              <div className="rounded-full bg-rose-300 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-red-600 bg-rose 500" />
              </div>
              <h2 className="font-bold text-2xl">Learn Faster</h2>
              <p>
                Interactive flashcards with Hanzi, Pinyin, and meaning all in
                one place
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
              <p>
                Choose difficulty levels and customize your learning journey
              </p>
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
        <div className="flex justify-between border border-gray-100 bg-slate-50 text-black w-full">
          <div className="p-4 w-1/4">
            <div className="p-4">
              <h2 className="font-bold text-xl">Pinzi Flashcards</h2>
            </div>
            <div className="p-4">
              <p>The smart way to learn and master Chinese characters.</p>
            </div>
          </div>
          <div className="p-4  w-1/4">
            <div className="p-4">
              <h2 className="font-bold text-xl">Links</h2>
            </div>
            <div className="p-4 flex flex-col text-sm md:text-base">
              <Link
                href="/"
                className="cursor-pointer hover:underline text-black hover:text-red-500"
              >
                <h4>Home</h4>
              </Link>
              <Link
                href="/home"
                className="cursor-pointer hover:underline text-black hover:text-red-500"
              >
                <h4>Study</h4>
              </Link>
              <Link
                href="/rules"
                className="cursor-pointer hover:underline text-black hover:text-red-500"
              >
                <h4>Rules</h4>
              </Link>
              <Link
                href="/about"
                className="cursor-pointer hover:underline text-black hover:text-red-500"
              >
                <h4>About</h4>
              </Link>
              <Link
                href="/contact"
                className="cursor-pointer hover:underline text-black hover:text-red-500"
              >
                <h4>Contact</h4>
              </Link>
            </div>
          </div>
          <div className="p-4 w-1/4">
            <div className="p-4">
              <h2 className="font-bold text-xl">Legal</h2>
            </div>
            <div className="p-4">
              <h4 className="cursor-pointer hover:text-red-500">
                Terms of Service
              </h4>
              <h4 className="cursor-pointer hover:text-red-500">
                Privacy Policy
              </h4>
              <h4 className="cursor-pointer hover:text-red-500">
                Cookie Policy
              </h4>
            </div>
          </div>
          <div className="p-4 w-1/4">
            <div className="p-4">
              <h2 className="font-bold text-xl">Connect</h2>
            </div>

            <div className="p-4 flex text-black-50 space-x-4">
              <a
                href="https://github.com/Karimi-F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="cursor-pointer hover:text-red-500">
                  <Github />
                </h4>
              </a>
              <a
                href="https://x.com/FridahK17605437"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="cursor-pointer hover:text-red-500">
                  <Twitter />
                </h4>
              </a>
              <a
                href="mailto:fridah37karimi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="cursor-pointer hover:text-red-500">
                  <Mail />
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
