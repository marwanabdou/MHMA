import React from 'react'
import { vercel } from '@/assets'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Our work
      </h2>
      <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Crafted with skill and care to help our clients grow their business!
      </p>
    </div>

    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    <div className="space-y-4 text-left">
       <Image  src={vercel} alt="vercel" />
       <span
          className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Microsoft Corp.
        </span>
        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Official website
        </h3>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          role="button">
          Live preview
          
        </a>
      </div>

      <div className="space-y-4 text-left">
       <Image src={vercel} alt="vercel" />
       <span
          className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Microsoft Corp.
        </span>
        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Official website
        </h3>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          role="button">
          Live preview
          
        </a>
      </div>

      <div className="space-y-4 text-left">
       <Image src={vercel} alt="vercel" />
       <span
          className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Microsoft Corp.
        </span>
        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
          Official website
        </h3>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          Flowbite helps you connect with friends, family and communities of people who share your interests.
        </p>
        <a href="#" title=""
          className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          role="button">
          Live preview
          
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Portfolio