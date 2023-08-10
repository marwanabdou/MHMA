import React from 'react'
import Image from 'next/image';
import {logo} from '../assets';
import Link from 'next/link';

const Footer = () => {
  return (
  

<footer className="bg-white rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="/" className="hover:underline">MHMA Web Design™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <Link href="about-us" className="mr-4 hover:underline md:mr-6 ">About Us</Link>
        </li>
        <li>
        <Link href="/our-process" className="mr-4 hover:underline md:mr-6 ">Our Process</Link>
        </li>
        <li>
        <Link href="/book-a-call" className="mr-4 hover:underline md:mr-6 ">Contact Us</Link>

        </li>
        
    </ul>
    </div>
</footer>





  );
}

export default Footer;