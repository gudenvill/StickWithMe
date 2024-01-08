'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/nav-bar';
import Hero from '@/components/hero';
import Fp from '@/components/featured';
import Footer from '@/components/footer';


export default function Home() {

  const backgroundStyle = {
    backgroundImage: 'url(/images/wallpaper.jpg)', // Direct reference to the image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // This ensures that the background covers at least the full height of the viewport
    width: '100%' // Ensures the background covers the full width
  };
  

  return (
    <div className='bg-yellow' style={backgroundStyle}>
      <Navbar/>
      <Hero />
      <Fp />
      <Footer />
    </div>
  );
}
