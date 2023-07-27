import React from 'react'
import Image from 'next/image';
import {logo} from '../assets';

const Footer = () => {
  return (
    
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src={logo} className="h-10 w-auto" alt="MHMA logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-black">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-black">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-black">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-black">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="https://mhmawebdesign.com/" className="hover:underline text-black">MHMA™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
}

export default Footer;