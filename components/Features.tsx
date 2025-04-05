import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className=' py-20 flex-col flexCenter overflow-hidden
       bg-feature-bg bg-no-repeat bg-center'>
        <div className='max-container padding-container w-full relative flex justify-end'>
          <div className='flex flex-1 lg:min-h-[900px]'>
            <Image src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'/>
          </div>

          <div className='z-20 flex flex-col w-full lg:w-[60%]'>
             <div className='relative'>
               <Image
                src="/camp.svg"
                alt='camp'
                width={50}
                height={50} 
                className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'/>
               <h2 className='bold-40 lg:bold-64 '>Our Features</h2>
             </div>
             <ul className='mt-10 grid md:grid-cols-2 gap-10 lg:gap-20 lg:mt-20'>
              {FEATURES.map((feature) => (
                <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}/>
              ))}
             </ul>
          </div>
        </div>

    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({title,icon,description}:FeatureItem) => {
  return(
    <li className='flex flex-col flex-1 w-full items-start'>
      <div className='rounded-full bg-green-50 p-4 lg:p-7'>
        <Image src={icon} alt='map' width={28} height={28} />
      </div>
      <p className='bold-20 lg:bold-32 mt-4'>{title}</p>
      <p className='regular-16 mt-4 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
  )
}

export default Features