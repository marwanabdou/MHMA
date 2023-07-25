import { contact, email, revision, launch } from '../assets';
import Image from 'next/image'

const features = [
  {
    name: '1. Contact Us',
    description:'Reach out to our web development experts to discuss your project needs and requirements.',
    icon: contact,
  },
  {
    name: '2. Submit your request',
    description:
      'Submit your project details, and our skilled web developer will be dedicated to bringing your vision to life.',
    icon: email,
  },
  {
    name: '3. Make revisions',
    description:
      'If the initial version doesnt fully meet your expectations, no worries! Communicate directly with your assigned web developer and request revisions.',
    icon: revision,
  },
  {
    name: '4. Launch your website',
    description:
      'Once you are satisfied with the final results, we will help you publish your website seamlessly.',
    icon: launch,
  },
]


const Content = () => {
  return (
    <div className="bg-[#163300] py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-semibold leading-7 text-7xl text-center mb-20 text-[#9FE870]">How It Works</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Fix Your Online Presence, Guaranteed
        </p>
        <p className="mt-6 text-xl leading-8 text-white">
        Elevate your web presence effortlessly with our expert web design and development services. We take care of all your creative needs, ensuring a seamless and visually stunning online experience for your users.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-2xl font-semibold leading-7 text-[#9FE870]">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                <Image src={feature.icon} alt={feature.name} className="h-45 w-45 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 leading-7 text-lg text-white">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>

  );
};

export default Content;
