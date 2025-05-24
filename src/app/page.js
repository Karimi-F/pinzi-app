"use client";

import AuthButton from "@/components/AuthButton";
import Button from "@/components/Button";
import About from "./about/page";
import Footer from "./footer/page";
import Contact from "./contact/page";
import { ChevronRight } from "lucide-react";

export default function Landing() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md text-black px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">汉字</span> Flashcards
          </h1>
          <div className="flex justify-end space-x-8">
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer hover:text-red-600">Features</li>
              <li className="cursor-pointer hover:text-red-600">About</li>
              <li className="cursor-pointer hover:text-red-600">Contact</li>
              <li className="cursor-pointer hover:text-red-600">Login</li>
            </ul>

            <AuthButton />
          </div>
        </div>
      </nav>
      {/* <main className="flex flex-col justify-center min-h-screen">
      

      <div className="flex justify-center mt-12">
        <AuthButton />
      </div>
    </main> */}
      <div className="wrapper flex justify-between items-center h-screen w-full p-3 bg-rose-50 text-black">
        <div className="w-1/2">
          <h2 className="text-6xl font-bold">Learn Mandarin the Smart Way!</h2>
          <p className="text-xl">
            Master Hanzi with intercative flashcards and track your progress
            effortlessly.
          </p>
          <div className=" flex space-x-6">
            <Button className="!w-1/4 !flex !h-11">Sign up Free <ChevronRight/></Button>
            <Button className="!bg-white !text-black !w-1/6 !border !border-gray-200">Login</Button>
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
      <About />
      <Contact />
      </div>
      
      <Footer />
    </>
  );
}
