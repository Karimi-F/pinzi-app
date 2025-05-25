// src/components/AuthButton.js
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className="p-2 bg-red-500 text-white rounded"
    >
      Sign out
    </button>
  ) : (
    <button
      onClick={() => signIn("google")}
      className="p-2 bg-red-500 text-white rounded"
    >
      Sign up with Google
    </button>
  );
}
