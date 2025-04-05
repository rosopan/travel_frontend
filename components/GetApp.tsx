import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex flex-col flex-1 w-full gap-10 justify-center items-start'>
          <h4 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h4>
          <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
          
          <div className='flex flex-col gap-3 w-full lg:flex-row lg:gap-5'>
            <Button 
            type="button"
            title="App Store"
            icon="/apple.svg"
            variant="btn_white"
            full />

            <Button 
            type="button"
            title="Play Store"
            icon="/android.svg"
            variant="btn_dark_green_outline"
            full />
          </div>
        </div>
        <div className='flex flex-1 justify-end items-center'> 
           <Image src="/phones.png" alt='phones' width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp