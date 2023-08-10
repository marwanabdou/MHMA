import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { aboutuspic } from '@/assets'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section>
<div className="bg-white py-24 sm:py-32">
<h1 className="font-black text-5xl text-center mb-5 underline decoration-[#6439f5]">Why MHMA Web Design?</h1>
<p className="mb-20 mt-1 text-center text-black    text-lg">Our goal is to provide fast, simple, and affordable web design solutions to all businesses.</p>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Support</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl underline decoration-[#6439f5]">24/7</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Customer satisfaction rate</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl underline decoration-[#6439f5]">100%</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">On-time project delivery</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl underline decoration-[#6439f5]">100%</dd>
      </div>
    </dl>
  </div>
</div>


    {/* How we compare */}

    <div id="detailed-pricing" className="overflow-x-auto">
    <div className="max-w-[800px] mx-auto overflow-hidden min-w-max">
    <h1 className="font-semibold text-3xl  lg:text-center  lg:text-5xl md:text-left text-4xl mb-20">See how we compare</h1>

        <div className="grid grid-cols-4 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 ">
            <div className="flex items-center"></div>
            <div>MHMA Web Design</div>
            <div>Full-time Hire</div>
            <div>Freelance Platform</div>
        </div>
        <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16">
            <div className="text-gray-500   ">Time to hire designer</div>
            <div>
                <h1>1 day</h1>
            </div>
            <div>
            <h1>60-90 day</h1>

            </div>
            <div>
               <h1>5-30 days</h1>
            </div>
        </div>
        <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 ">
            <div className="text-gray-500   ">Hiring time and fees</div>
            <div>
                <h1>$</h1>
            </div>
            <div>
            <h1>$$</h1>

            </div>
            <div>
            <h1>$</h1>

            </div>
        </div>
        <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16">
            <div className="text-gray-500   ">Failure rate</div>
            <div>
                <h1>Very Low</h1>
            </div>
            <div>
            <h1>Low</h1>

            </div>
            <div>
            <h1>Very High</h1>

            </div>
        </div>
        <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 ">
            <div className="text-gray-500   ">Termination Fees</div>
            <div>
                <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div>
               <h1>$$$$</h1>
            </div>
            <div>
            <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </div>
        </div>

    </div>
</div>

{/* About  */}

<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
     
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#6439f5]">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Streamlining Your Web Projects</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Welcome to our web agency, where we pride ourselves on providing a better workflow for all your online needs. Our dedicated team is here to ensure your digital presence thrives with efficiency and style.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:block -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[38rem] max-w-none rounded-xl"
            src={aboutuspic}
            alt="about us"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              At our web agency, we believe in delivering top-notch solutions that stand out from the crowd. Our team is driven by a passion for creating stunning websites that capture the essence of your brand. We combine cutting-edge technology with creative expertise to craft experiences that leave a lasting impression on your audience.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-[#6439f5]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    Gone are the days of tedious manual updates. With our push-to-deploy system, your website changes go live seamlessly, ensuring your content is always up to date. Say goodbye to waiting and hello to instant updates!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-[#6439f5]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Scalability and Flexibility</strong> By harnessing the power of modern tech stacks, we build websites that are highly scalable and flexible. As your business grows, your website will seamlessly adapt to accommodate increased traffic and evolving requirements, without compromising on performance.


                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-[#6439f5]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Performance Optimization</strong> Our use of the latest tech stacks enables us to create high-performance websites that load quickly and efficiently. We optimize every aspect of your online platform, ensuring a seamless user experience and improved search engine rankings.


                  </span>
                </li>
              </ul>
             
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <p className="mt-6">
              Ready to take your web projects to the next level? Reach out to us today, and let us discuss how our web agency can help you achieve your online goals. Together, we&apos;ll create a digital presence that stands out from the rest.
Remember, a better workflow awaits you. Lets get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </section>
  )
}

export default AboutUs