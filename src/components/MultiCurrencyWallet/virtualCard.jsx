import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const VirtualCard = () => {
  return (
    <Card className="w-full rounded-3xl flex items-center max-container bg-gradient-to-br from-white to-blue-50 px-0 shadow-lg border-none my-6">
      <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 px-0">
        <div className="space-y-6 w-full px-8 md:px-12 py-8">
          <span className="inline-block px-4 py-2 font-light bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
            Available currencies you can create a wallet
          </span>
          <h1 className="heading">
            Feel Local Wherever You Choose to Go
          </h1>


          <p className="text-[12px] md:text-lg text-gray-600 leading-relaxed">
            Whether you're a global traveler, an individual living abroad, or just a curious explorer, with a Multi-currency Wallet you can stay connected with people and places in crucial financial moments. Enjoy instant money transfers, fair exchange rates, and access to funds wherever you go.
          </p>
        </div>
        <div className="block w-full max-h-[460px] ">
          <div className="relative w-full h-[460px]">
            <Image
              src="/images/MultiCurrencyWallet/feel_goal.png"
              alt="Mobile Card"
              fill
              className="object-contain rounded-xl relative z-10 "
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VirtualCard;