'use client';

import AuthButton from "@/components/AuthButton";

export default function Landing() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pinzi App</h1>
      <AuthButton />
    </main>
  );
}
