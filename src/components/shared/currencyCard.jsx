import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import MobileCard from './mobileCard';
import MoneyTransfer from './MoneyTransfer';

const CurrencyCard = () => {
  return (
    <Card className="w-full rounded-3xl flex items-center max-container backdrop-blur-md bg-white/10 px-0 shadow-lg border-none my-6 min-h-[680px]">
      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 px-0">
        <div className=" w-full px-8 ">

          <h1 className="heading">
            No Fees.
          </h1>
          <h1 className="heading2">
            One World.
          </h1>
          <span className="text-lg text-gray-600 leading-relaxed">
            Need to send money across the world? Do it with KongossaPay. Relocating? Get started with KongossaPay.
          </span>
          <span className="inline-block text-lg text-gray-600 leading-relaxed">
            You'll enjoy <span className='font-bold'>$0 fees on every transfer - no hidden costs or surprises.</span>
          </span>



        </div>
        <div className="block w-full h-[600px] ">
          <div className="relative w-full h-full -mt-40 z-10">
            <Image
              src="/images/Home/angle.png"
              alt="Mobile Card"
              fill
              className="object-cover rounded-xl relative z-10 "
            />

            <div className="absolute top-36 left-0 w-full h-[460px] z-50 py-8">
              <MoneyTransfer />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyCard;