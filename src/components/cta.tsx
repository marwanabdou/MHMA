import React from 'react'
import Link from 'next/link'


const CTA = () => {
  return (
    <section className="bg-[#6439f5]  py-10">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className=" text-center mb-6 text-5xl lg:text-7xl  font-medium   text-white  mb-15">Take your business to the next level</h1>
            <p className="mb-12  text-white  text-2xl">Ready to Elevate Your Online Presence? Contact Us Today!</p>
            <Link href="/book-a-call" className="mr-4 inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white bg-black rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300  hover:border-2 border-black    mr-3   transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Book a Call
            <svg className="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
          <a href="mailto:info@mhmawebdesign.com?subject=Quote%20Request&body=--%20PLEASE%20PROVIDE%20A%20BRIEF%20DESCRIPTION%20OF%20YOUR%20PROJECT%20BELOW%20THIS%20LINE%20--" target="_blank" className="border border-white rounded-xl text-white inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center    py-2 px-4 focus:ring-4 focus:ring-primary-300 ">
            Get a Quote
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>         </div>
    </div>
</section>
  )
}

export default CTA