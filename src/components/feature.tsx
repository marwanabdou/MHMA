import React from 'react'
import { CloudArrowDownIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import {setup, setup2} from '../assets';

const features = [
  {
    name: 'Fully Responsive.',
    description:
      'We build your website to be responsive accross all devices, including mobile phones, tablets, and desktops.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'SEO Optomized.',
    description: 'We make sure that your website is search engine optimized to perform their best in online searches to drive traffic into your website and rank higher on search engines.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Setup and Migration.',
    description: 'Upon completion of your website, we help you migrate the files into your hosting service and provide help in domain and website setup.',
    icon: CheckBadgeIcon,
  },
]

const Feature = () => {
  
  return (
    <div className="overflow-hidden bg-[#f7f5f2] py-10 sm:py-14">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
          <h2 className="mt-6 mb-10 text-6xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-none font-[Wise_Sans] text-black">A Seamless Experience!</h2>
            <p className="mt-6 text-lg leading-8 text-black">
            We steer clear of website builders and take pride in hand-coding every project. Our focus on the latest tech stacks and techniques ensures top-notch websites and SEO optimization for clients worldwide.            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-black">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#6439f5]" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <Image
          src={setup}
          alt="Website setup"
          className=""
          width={2432}
          height={1442}
        />
      </div>
    </div>
  </div>
  );
}

export default Feature