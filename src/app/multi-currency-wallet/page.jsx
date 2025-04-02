import HeroSection from '@/components/MultiCurrencyWallet/HeroSection'
import VirtualCard from '@/components/MultiCurrencyWallet/virtualCard'
import MobileCard from '@/components/shared/mobileCard'
import StepperCard from '@/components/shared/stepperCard'
import React from 'react'

const MultiCurrencyWallet = () => {
  return (
    <div>
      <div className=''>
        <HeroSection />
        <div className='px-4 md:px-0'>
          <VirtualCard />
        </div>
        <MobileCard />
      </div>
      <StepperCard />
    </div>
  )
}

export default MultiCurrencyWallet
