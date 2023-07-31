import React from 'react';
import Image from 'next/image';



const Testimonials = () => {
    
  return (
    <section className="bg-[#190e3d] dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-10 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white dark:text-white font-black font-[Wise_Sans]">They talk about us</h2>
        </div> 
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-black md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-black dark:text-gray-400">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Speechless with how easy this was to integrate</h3>
                    <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, Im speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                    <p className="my-4">Flowbite has code in one place and I am not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                    <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm font-light text-black dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-black md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-black dark:text-gray-400">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Speechless with how easy this was to integrate</h3>
                    <p className="my-4">&quot;I recently got my hands on Flowbite Pro, and holy crap, Im speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.</p>
                    <p className="my-4">Flowbite has code in one place and Im not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.</p>
                    <p className="my-4">If you care for your time, I hands down would go with this.&quot;</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm font-light text-black dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
           
            
        </div>
       
        </div>
  </section>
  );
};

export default Testimonials;
