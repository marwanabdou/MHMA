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

export default function Home() {
  return (
    <>
      <Head>
        <title>MHMA Web Design</title>
        <meta name="description" content="Transforming your digital presence with innovative web design solutions. We craft stunning and user-friendly websites that captivate your audience and drive results. Contact us to elevate your online brand today." />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more meta tags here */}
      </Head>
      <main>
      <HeroSection />
      <Content />
      <Testimonials />
      <Feature />
      <CTA />
      <FAQ />
      {/* <Contact /> */}
    </main>
    </>
  );
}
