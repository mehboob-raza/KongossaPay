import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const UnlockWorld = () => {
  return (
    <Card className="w-full rounded-3xl flex items-center max-container bg-gradient-to-br from-white to-blue-50 px-0 shadow-lg border-none my-6">
      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 px-0">
        <div className="space-y-6 w-full md:w-[55%] px-8 md:px-12 py-8">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            COMING SOON
          </span>
          <h1 className="text-3xl sm:text-4xl w-full whitespace-pre-wrap md:max-w-[20ch] font-bold leading-tight bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent ">
          Unlock the World with a Multi-currency Wallet
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
          Imagine exploring new destinations, immersing in vibrant cultures, and living like a local. With the KongossaPay debit cards, you can effortlessly navigate the global landscape, embracing new experiences, all while staying connected to the people and places dear to your heart.
          </p>
        </div>
        <div className="block w-[40%] max-h-[460px] p-8">
          <div className="relative">
            <Image 
              src="/images/MultiCurrencyWallet/unlock-the-world.png" 
              alt="Mobile Card" 
              width={600} 
              height={600} 
              className="object-cover rounded-xl relative z-10 shadow-xl hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnlockWorld;