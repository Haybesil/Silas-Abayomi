'use client'

import React, { useEffect, useState } from 'react';
import "./style.css";

export default function Loader() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);  

  if (!showLogo) {
    return null; 
  }

  return (
    <div className="logo-container bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 ">
      {/* <img src="/images/Assured-BID-Logo.svg" alt="Logo" className="blink" /> */}
      <h1 className='text-3xl font-bold text-white blink'>Silas Abayomi</h1>
    </div>
  );
}

