"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {
  const router = useRouter();
  const handleNavigateToDashboard = () => {
       router.push("/dashboard")
  }

  return (
    <div>
      <h2 className='text-4xl'>Home Page</h2>
      <button onClick={handleNavigateToDashboard}>Dashboard</button>
    </div>

  );
};

export default HomePage;