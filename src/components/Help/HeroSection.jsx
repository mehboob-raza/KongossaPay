import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-background '>
      <div className='relative h-[400px] grid place-content-center  '>
        <div className='absolute inset-0 w-full flex flex-col md:flex-row justify-between h-full ' >
          <div className='w-full h-full bg-[url(/icons/Svgs/About/about-hero-svg-left.svg)] bg-left-top bg-no-repeat bg-cover '>
          </div>
          <div className='w-full h-full bg-[url(/icons/Svgs/About/about-hero-svg-right.svg)] bg-right-bottom bg-no-repeat bg-cover '>
          </div>
        </div>
        <div className='text-white  items-center px-8  max-container'>
       
          <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold letter-spacing-[0.1em] text-white bg-clip-text  ">
            Get in touch with the Pesa team
            </h1>
            <p className='text-xl  sm:text-2xl font-md text-gray-400 leading-relaxed '>
            Our friendly team would love to hear from you.</p>
           
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HeroSection
