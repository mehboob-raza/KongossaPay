import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const Transactioncard = () => {
  return (
    <Card className="w-full bg-gradient-to-br from-white to-blue-50 p-4 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-none my-6">
      <CardContent className="text-center space-y-8">
        <div className='hidden md:flex justify-center'>
          <div className="relative">
            <Image
              src="/icons/Svgs/lock.svg"
              alt="transaction-card"
              height={500}
              width={500}
              className='object-cover relative z-10 rounded-2xl'
            />
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className="heading">
            Built for your peace of mind
          </h2>
          <p className='text-gray-600 text-base md:text-lg max-w-[70ch] w-full mx-auto leading-relaxed'>
            We use 2-Factor Authentication (2FA) to implement additional layers of authentication to verify the payer's identity during a transaction. We also utilize secure communication protocols, like SSL and secure network configurations to protect transmitted data.
          </p>

          <div className='w-[80%] border-t border-gray-200 mx-auto my-12'></div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='heading'>
              Ready to Experience KongossaPay?
            </p>
            <Button className="w-[300px] cursor-pointer px-8 py-6 text-[1rem] font-medium bg-gradient-to-r from-[#0a136e] to-[#0770e6] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Start a Transfer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Transactioncard
