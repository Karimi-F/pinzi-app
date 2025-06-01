"use client";

import { Github, Mail, Twitter } from "lucide-react";
import { Input } from "postcss";

export default function Contact() {
  return (
    // <div className="flex justify-between border border-gray-100 bg-slate-50 text-black w-full">
    <div className="border border-gray-100 bg-slate-50 text-black w-full">
      <div>
        <h1>Get in touch</h1>
        <form>
          <h4>Send a Message</h4>
          <p>lorem</p>
          <label>Name</label>
          <input className="bg-gray-200" placeholder="First Name"/>
          <input className="bg-gray-200" placeholder="Last Name"/>
        </form>
      </div>




















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
        <div className="p-4">
          <h4 className="cursor-pointer hover:text-red-500">Home</h4>
          {/* <h4 className="cursor-pointer hover:text-red-500">Features</h4> */}
          <h4 className="cursor-pointer hover:text-red-500">About</h4>
          <h4 className="cursor-pointer hover:text-red-500">Contact</h4>
          
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
          <h4 className="cursor-pointer hover:text-red-500">Privacy Policy</h4>
          <h4 className="cursor-pointer hover:text-red-500">Cookie Policy</h4>
        </div>
      </div>
      <div className="p-4 w-1/4">
        <div className="p-4">
          <h2 className="font-bold text-xl">Connect</h2>
        </div>

        <div className="p-4 flex text-black-50 space-x-4">
          <h4 className="cursor-pointer hover:text-red-500">
            <Github />
          </h4>
          <h4 className="cursor-pointer hover:text-red-500">
            <Twitter />
          </h4>
          <h4 className="cursor-pointer hover:text-red-500">
            <Mail />
          </h4>
        </div>
      </div>
    </div>
  );
}
