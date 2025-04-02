
import AllFlags from '@/components/International Transfers/Allflags'
import HeroSection from '@/components/International Transfers/HeroSection'
import VirtualCard from '@/components/International Transfers/virtualCard'
import MobileCard from '@/components/shared/mobileCard'
import StepperCard from '@/components/shared/stepperCard'
import React from 'react'

const InternationalTransfer = () => {
  return (
    <div>
      <div className=''>
        <HeroSection />
        <div className='px-4 md:px-0'>
          <VirtualCard />
        </div>
        <MobileCard />
      </div>
      <AllFlags />
      <StepperCard />
    </div>
  )
}

export default InternationalTransfer
