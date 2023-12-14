import Head from 'next/head';
import Image from 'next/image';

import HeroSection from '@/components/hero-section';
import Content from '@/components/content';
import Feature from '@/components/feature';
import Contact from '@/components/contact';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import Portfolio from '@/components/portfolio';
import Projects from '@/components/projects';

export default function Home() {
  return (
   
      <main>
      <HeroSection />
      <Content />
      <Testimonials />
      <Feature />
      <Projects />
      <CTA />
      <FAQ />
      {/* <Contact /> */}
    </main>
    
  );
}
