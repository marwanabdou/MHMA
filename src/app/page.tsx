import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";





export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Testimonials />
      <Feature />
      <CTA />
      <FAQ />
      
          {/* <Contact /> */}

    </main>
  );
}
