import { stepsData } from '@/constants/Home'
import Image from 'next/image'
import React from 'react'

const StepperCard = () => {
  return (
    <div className='bg-black/50 w-full '>
        <div className='max-container py-6 sm:py-20 px-6'>
      <h1 className='heading w-full sm:max-w-[20ch] py-8'>
      Requesting a Multi-currency Wallet is Easy</h1>
      <div className='flex flex-col md:flex-row items-center justify-between md:space-y-0 px-0 gap-8'>
<div className='bg-[#F9FAFB] w-full  h-[600px] max-w-[500px] px-8 md:px-12 pt-10 rounded-lg overflow-hidden '>
    <div className='relative w-full h-[700px] '>
        <Image src='/images/MultiCurrencyWallet/stepper-mobile.png' alt='Mobile Card' fill className='object-cover rounded-xl relative z-10 hover:scale-105 transition-transform duration-300' />
    </div>
    </div>
    <div className="flex flex-col items-start justify-center h-full w-full px-6"> 
      
        <div className="pt-4 pl-2">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`relative pl-10 h-28 my-8 ${index > 0 ? 'mt-6' : ''} ${
                index < stepsData.length - 1
                  ? 'before:absolute before:content-[""] before:w-2 before:h-[calc(100%+30px)] before:top-1 before:left-0 before:border-l-2 before:border-white before:border-dashed'
                  : ''
              } after:absolute after:content-[''] after:h-5 after:w-5 after:-left-2 after:top-1 after:rounded-full after:bg-black after:border-2 after:border-white after:ring-8 after:ring-white`}
            >
              <h1 className="text-white text-xl font-bold ">{step.title}</h1>
              <p className="text-white font-regular  text-[1rem]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>

  )
}

export default StepperCard
