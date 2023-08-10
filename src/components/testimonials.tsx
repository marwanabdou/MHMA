import React from 'react';
import Image from 'next/image';



const Testimonials = () => {
    
  return (
    <section className="bg-[#190e3d] dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-10 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white dark:text-white font-black font-[Wise_Sans]">They talk about us!</h2>
        </div> 
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-black md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-black dark:text-gray-400">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Impressed by the simplicity of the process and integration.</h3>
                    <p className="my-4">&quot;We really needed to find someone to help us change the way we present our portfolio and reach our customers and MHMA was a perfect fit to solve our problems.</p>
                    <p className="my-4">Overall, the experience was extremely pleasant and easy. I would highly recommend MHMA as we will be working with them again on other upcoming projects.</p>
                    <p className="my-4">If you care for your online presence, I hands down would go with MHMA.&quot;</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Mohamed Hisham</div>
                        <div className="text-sm font-light text-black dark:text-gray-400">Head of Marketing at FICC</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-black md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-8 max-w-2xl text-black dark:text-gray-400">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Delighted to Share Our Experience with MHMA</h3>
                    <p className="my-4">&quot;We had the privilege of working with MHMA to enhance our transportation company&apos;s digital footprint, and the results have been nothing short of revolutionary. Their expertise in web design has transformed our online presence.</p>
                    <p className="my-4">For businesses placing a premium on efficiency, I wholeheartedly endorse MHMA. The simplicity and impact of their solutions have made an everlasting impression on our web design venture.&quot;</p>
                    <p className="my-4 invisible">If you care for your time, I hands down would go with this.&quot;</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Hisham Abdou</div>
                        <div className="text-sm font-light text-black dark:text-gray-400">CEO of AlSaab Transportation</div>
                    </div>
                </figcaption>    
            </figure>
           
            
        </div>
       
        </div>
  </section>
  );
};

export default Testimonials;
