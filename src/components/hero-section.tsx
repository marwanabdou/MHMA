import React from "react";
import { logo, vercel, react, tailwind, nextjs } from '../assets';
import Image from 'next/image'


const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mt-6 mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white font-black font-[Wise_Sans]">THE ALL-IN-ONE COMPANY FOR SEAMLESS WEB DESIGN SOLTUTIONS</h1>
        <p className="mb-8 text-base md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">Get your website hand-coded using the latest technology and optimize your online presence.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="font-bold inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl font-medium text-center text-[#163300] bg-primary rounded-full py-2 px-4 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:bg-[#88e653]">
            Book a Call
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl font-medium text-center text-[#163300] rounded-full border border-[#163300] hover:bg-[#88e653] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            Watch video
          </a>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">Our Tech Stack</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a className="ml-1 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
           
            </a>
            <a className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
           
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
