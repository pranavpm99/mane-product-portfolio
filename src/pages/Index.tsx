
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import CaseStudies from '@/components/CaseStudies';
import Articles from '@/components/Articles';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Articles />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
