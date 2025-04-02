import QRCodeGenerator from '@/components/transfer-payment-button/QRCodeGenerator'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Support = () => {
  return (
    <section className="pl-8 md:pl-20 bg-gradient-to-br from-white to-blue-50 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-[500px]">
        <div className="flex flex-col justify-center items-start gap-6 w-[40%]">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
            Ready to
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-800">
            Experience KongossaPay?
          </h1>
          <QRCodeGenerator />
        </div>
        <div className='pt-6 w-full h-full md:w-[60%] z-10'>
          <div className="relative h-full w-full md:w-[100%]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <Image 
              src="/images/Home/experience-card.png" 
              alt="support_logo" 
              fill 
              className='object-cover relative z-10 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300' 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support