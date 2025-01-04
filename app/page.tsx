'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Collections } from '@/components/home/Collections';
import { About } from '@/components/home/About';
import { Newsletter } from '@/components/shared/Newsletter';
import MarqueeDemo from '@/components/layout/Review/Review';

export default function HomePage() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      
      <Header />
      <Hero />
      <Collections />
      <About />
      <Newsletter />
      <MarqueeDemo />
      <Footer />
    </>
  );
}
