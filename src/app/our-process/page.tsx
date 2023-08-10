import React from 'react'
import Image from 'next/image'
import {  search, onboarding, develop, launching, content, support } from '@/assets';

const OurProcess = () => {
  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<div className="text-center mb-20 mt-5">
  <h1 className="font-semibold text-5xl mb-3">Our Process</h1>
  <hr className="border-[#6439f5] border-t-4 w-2/12 mx-auto rounded-full mb-10" />
  <p className="mt-1 text-gray-600 dark:text-gray-400">The outcome of a project&apos;s success relies heavily on the forward-moving procedure it follows. A steady approach yields reliable outcomes, excellence, and the expansion of business. Although each project we undertake has its distinct result, we adhere to a uniform procedure to guarantee optimal outcomes. When collaborating with MHMA, we will guide you through every stage of your website development, explaining each phase as we advance.</p>

</div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={search} alt="search"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          1. Discovery
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        When you make contact with MHMA, your initial conversation will be with an assigned developer. Our objective is to actively listen and gain a comprehensive understanding of your company, enabling us to propose the most suitable resolution. We will engage in inquiries while documenting the discussion.
        </p>
      </div>
     
    </a>

    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={onboarding} alt="onboarding"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          2. Onboarding
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        After the initial discovery call, we usually hold another meeting to further discuss the specifications and preferences of our client. Ath this meeting, we will learn more about your business, your customers, your brand and your design preferences. By the end of the meeting, we will have a plan in place for content, development, and maintenance.
        </p>
      </div>
     
    </a>

    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={content} alt="content"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          3. Content Development
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        Content is essential to strong digital marketing. It educates your visitors and converts them into paying customers. This stage is dedicated to refining your content to captivate new leads, drawing them to your website.
        </p>
      </div>
     
    </a>

    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={develop} alt="develop"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          4. Design Development
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        After your content is prepared, your project enters the design stage, where we fashion the overarching identity and appearance of your website. Subsequently, we develop the functionality and features of your website using cutting-edge tech stacks optimized for search engine visibility, ensuring a favorable user experience and enhancing your online presence. 
        </p>
      </div>
     
    </a>

    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={launching} alt="launching"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          5. Launch
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        This is the most thrilling phase! Your website is ready for its grand debut to the world. A dedicated developer will be assigned to facilitate the migration and hosting of your website, ensuring a seamless operation from inception to completion.
        </p>
      </div>
     
    </a>

    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href="#">
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full h-96 object-contain rounded-xl" src={support} alt="support"/>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          6. Support and Maintenance
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">
        While your new website is live, your business evolves constantly, primarily through growth. Our team is on standby, prepared to implement alterations as per your needs. We present website hosting packages featuring monthly upkeep and development allocation. A committed support unit collaborates with you on updates, maintenance, and training. 
        </p>
      </div>
     
    </a>
  </div>

  
</div>

)
}

export default OurProcess