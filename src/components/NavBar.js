'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 px-6 py-4 bg-white shadow-md text-black">
        {/* <nav className="sticky top-0 z-50  > */}
      <h1 className="text-2xl font-bold">
        <Link href="/"><span className="text-red-600">汉字</span> Flashcards</Link>
            
          </h1>
      <div className="text-xl font-bold text-red-500">
        
      </div>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/" className="hover:underline text-black hover:text-red-500">Home</Link>
        <Link href="/home" className="hover:underline text-black hover:text-red-500">Study</Link>
        <Link href="/rules" className="hover:underline text-black hover:text-red-500">Rules</Link>
        <Link href="/about" className="hover:underline text-black hover:text-red-500">About</Link>
        <Link href="/contact" className="hover:underline text-black hover:text-red-500">Contact</Link>

        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}
