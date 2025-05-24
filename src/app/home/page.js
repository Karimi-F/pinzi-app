// src/app/page.js or wherever you're using useSession
'use client';

import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className='bg-rose-50 text-black'>
      
      {session ? <p>Welcome, {session.user.name}</p> : <p>Please log in</p>}

    </div>
  );
}
