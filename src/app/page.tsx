// import Image from "next/image";
'use client'

import { useEffect, useState } from 'react';
import Home from '../pages/home/Home'
import Loader from '@/components/loader/Loader';

export default function HomeContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);



    if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Home />
    </div>
  );
}
