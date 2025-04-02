import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const VirtualCard = () => {
  return (
    <Card className="w-full rounded-3xl flex items-center max-container bg-gradient-to-br from-white to-blue-50 px-0 shadow-lg border-none my-6">
      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 px-0">
        <div className="space-y-6 w-full md:w-[55%] px-8 md:px-12 py-8">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            COMING SOON
          </span>
          <h1 className="heading">
            Virtual cards
          </h1>
          <h2 className="heading2 -mt-4">
            for a cashless world.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed -mt-4">
            With the KongossaPay debit cards, you can effortlessly navigate the global landscape and embrace new experiences without the hassle of currency exchange. The KongossaPay debit card is more than just a financial tool — it's a bridge that keeps you close to the worlds you care most about.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] max-h-[560px] flex justify-center items-center">
          <div className="relative">
            <Image 
              src="/images/Home/atm-card.png" 
              alt="Mobile Card" 
              width={400} 
              height={400} 
              className="object-cover rounded-xl relative z-10 hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualCard;