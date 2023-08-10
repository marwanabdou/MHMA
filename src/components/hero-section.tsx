import React from "react";
import { logo, react, tailwind, nextjs } from '../assets';
import Image from 'next/image'
import Link from 'next/link'



const HeroSection = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mt-6 mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900  font-black font-[Wise_Sans]">THE ALL-IN-ONE COMPANY FOR SEAMLESS WEB DESIGN SOLTUTIONS</h1>
        <p className="mb-8 text-base md:text-lg lg:text-xl font-normal text-gray-500 ">Get your website hand-coded using the latest technology and optimize your online presence.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* <a href="#" className=" inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white bg-black rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:bg-[#6439f5]  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"> */}
          <Link href="/book-a-call" className=" inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300  bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Book a Call
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
          <a href="mailto:info@mhmawebdesign.com?subject=Quote%20Request&body=--%20PLEASE%20PROVIDE%20A%20BRIEF%20DESCRIPTION%20OF%20YOUR%20PROJECT%20BELOW%20THIS%20LINE%20--" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl text-center text-black py-2 px-4 focus:ring-4 focus:ring-primary-300">
            Get a Quote
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a> 
         
        </div>
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
          OUR TECH STACK
        </h2>
       
      </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
