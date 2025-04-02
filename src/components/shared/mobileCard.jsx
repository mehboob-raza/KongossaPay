import Image from 'next/image'
import React from 'react'

const MobileCard = () => {
  return (
    <div className='max-w-7xl mx-auto mb-12'>
      <div className='w-full space-y-8 flex flex-col sm:flex-row items-start justify-between gap-8 px-8 py-10 sm:py-20'>
        <div className='w-full flex flex-col items-center justify-between'>
          <div className='relative w-full h-[600px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#dcded2] pt-24 pr-12'>
            <Image src="/images/MultiCurrencyWallet/mobile-in-hand.png" fill className="object-cover pt-8 pr-12" />
          </div>
        </div>
        <div className=' rounded-2xl overflow-hidden'>
          <div className='py-4 md:py-8 md:p-6 transition-all duration-300'>
            <h1 className='heading mb-4'>Keep Tabs on Your International Transfers</h1>
            <p className="text-[12px] md:text-xl text-gray-600 leading-relaxed">Stay in the loop with notifications and alerts that keep you updated on the whereabouts of your funds. Conveniently track and monitor the progress of your transfers every step of the way.</p>
          </div>
          <div className='w-[90%] mx-auto border-t border-gray-200 my-4'></div>
          <div className='py-4 md:py-8 md:p-6 transition-all duration-300'>
            <h2 className='heading2 mb-4'>Keep Tabs on Your International Transfers</h2>
            <p className="text-[12px] md:text-xl text-gray-600 leading-relaxed">Stay in the loop with notifications and alerts that keep you updated on the whereabouts of your funds. Conveniently track and monitor the progress of your transfers every step of the way.</p>
          </div>
        </div>
      </div>


      <div className='w-full space-y-8 flex flex-col sm:flex-row items-center justify-between gap-8 px-8'>

        <div className=' rounded-2xl overflow-hidden'>
          <div className='py-4 md:py-8 md:p-6 transition-all duration-300'>
            <h2 className='heading2 mb-4'>Keep Tabs on Your International Transfers</h2>
            <p className="text-[12px] md:text-xl text-gray-600 leading-relaxed">Stay in the loop with notifications and alerts that keep you updated on the whereabouts of your funds. Conveniently track and monitor the progress of your transfers every step of the way.</p>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-between'>
          <div className='relative w-full h-[600px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#dcded2] pt-24 pr-12'>
            <Image src="/images/MultiCurrencyWallet/mobile-screen.png" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileCard
