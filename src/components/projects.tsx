import React from "react";
import { a1, b1, c1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="bg-white antialiased">
      <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 sm:py-16 lg:py-10">
      <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-semibold text-5xl text-center sm:mt-20">
        Our Work
      </h2>
      <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Crafted with skill and care to help our clients grow their business!
      </p>
    </div>

        <div className="grid grid-cols-1 mt-12 text-center gap-8 sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4 text-left">
            <Image src={c1} alt="vercel" />
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              In-progress
            </span>
            <span className="ml-3 bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              Architectural Firm
            </span>
            <h3 className="text-2xl font-semibold leading-tight text-gray-900">
            Three Studios NYC
            </h3>
            <a
              href="https://sample-threestudio.vercel.app/"
              title=""
              className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              role="button">
              Live Preview
            </a>
          </div>

          <div className="space-y-4 text-left">
            <Image src={a1} alt="vercel" />
            
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              In-progress
            </span>
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ml-3">
              IT Services
            </span>
            
            <h3 className="text-2xl font-bold leading-tight text-gray-900">
            Devoodo IT Services
            </h3>

            <a
              href="https://devoodo.vercel.app/"
              title=""
              className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              role="button">
              Live Preview
            </a>
          </div>

          <div className="space-y-4 text-left">
            <Image src={b1} alt="vercel" />
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
              Construction Firm
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900">
             First Construction Co.
            </h3>

            <a
              href="https://firstconstruction.vercel.app/"
              title=""
              className="inline-flex justify-center items-center py-3 px-5 text-base md:text-lg lg:text-xl  text-center text-white  rounded-xl py-2 px-4 focus:ring-4 focus:ring-primary-300 bg-[#6439f5]  transition-all duration-300 translate-x-[-4px] translate-y-[-4px] hover:rounded-md shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              role="button">
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;