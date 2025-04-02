import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-background  '>
      <div className='relative h-[600px]'>
        <div className=' w-full flex flex-col md:flex-row justify-between h-full ' >
          <div className='w-full h-full bg-[url(/icons/Svgs/About/about-hero-svg-left.svg)] bg-left-top bg-no-repeat bg-cover '>
          </div>
          <div className='w-full h-full bg-[url(/icons/Svgs/About/about-hero-svg-right.svg)] bg-right-bottom bg-no-repeat bg-cover '>
          </div>
        </div>
        <div className='text-white absolute inset-0 max-container grid grid-cols-1 md:grid-cols-2 items-center px-8'>
          <div className=' '>
            <h1>
              We’re a digital
              Cross-border financial service provider for people who dare to go further
            </h1>
            <p>
              A woman smiling while holding a phone
              A man smiling while holding a phone.
              We’re a digital
              Cross-border financial service provider for people who dare to go further
              The decision to explore opportunities beyond borders is not an easy one as it often involves leaving behind loved ones, familiar places, and a way of life that has been nurtured over time.</p>
            <p>Yet, we believe that this decision is also a testament to the strength and courage of these individuals who Dare to go further for their dreams and the opportunity to explore new possibilities for a better life for themselves and their loved ones.</p>
          </div>
          <div>
            <div className="relative w-full h-[300px] bg-[url('/icons/About/Svgs/door-mask-v1.svg')] z-10 bg-cover bg-no-repeat flex justify-center items-center">
              {/* Main Image inside the SVG Mask */}
              <div className="w-full  h-full absolute inset-0 overflow-hidden rounded-[30px] z-50">
                <Image
                  src="/images/About/woman-holding-phone.jpeg" // Replace with actual path
                  fill
                  className="object-cover skew-6"
                  alt="Woman Holding Phone"
                />
              </div>

              {/* Overlay Image - Smaller Positioned Image */}
              <div className="absolute bottom-5 right-5 w-[150px] h-[200px] rounded-[20px] overflow-hidden shadow-md border-4 border-black">
                {/* <Image
          src="/images/About/smiling-man.jpeg" // Replace with actual path
          fill
          className="object-cover"
          alt="Smiling Man"
        /> */}
              </div>
            </div>

          </div>

        </div>
      </div>



    </div>


  )
}

export default HeroSection
