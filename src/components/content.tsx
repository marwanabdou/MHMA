import React from 'react'
import Image from 'next/image'
import {one, two, three} from '../assets';
import Link from 'next/link';



const Feature = () => {
  
  return (
    <div className="bg-[#f7f5f2] py-20 px-10 flex flex-col justify-center items-center">
    <h1 className="font-semibold text-5xl text-center mb-10 sm:mt-20">Getting started is easy</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {/* First Box */}
      <div className="border border-black p-4 bg-white rounded-2xl">
        <Image
          src={one} // Replace with the actual image path
          alt="Image 1"
          className="mt-2 ml-2"
        />
        <h2 className="font-semibold mt-4 text-xl ml-3">Submit a request <br/> or contact us</h2>
        <p className='mt-2 mb-2 ml-3'>Send us a request or contact us to find what suits your business best.</p>
      </div>

      {/* Second Box */}
      <div className="border border-black p-4 bg-white rounded-2xl">
        <Image
          src={two} // Replace with the actual image path
          alt="Image 2"
          className="mt-2 ml-2"
        />
        <h2 className="font-semibold mt-4 text-xl ml-3">Make revisions to <br/> your website</h2>
        <p className='mt-2 mb-2 ml-3'>If the initial version doesnt fully meet your expectations, communicate directly with a web developer and request revisions.</p>
      </div>

      {/* Third Box */}
      <div className="border border-black p-4 bg-white rounded-2xl">
        <Image
          src={three} // Replace with the actual image path
          alt="Image 3"
          className="mt-2 ml-2"
        />
        <h2 className="font-semibold mt-4 text-xl ml-3">Launch your website!</h2>
        <p className='mt-2 mb-2 ml-3'>Once you are satisfied with the final results, we will help you publish your website seamlessly.</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
    <Link href="/our-process"   className=" inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white bg-black rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300  hover:bg-[#6439f5]   transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Learn More
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
  </div>
  </div>


  );
}

export default Feature