import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const TransactionStoryCard = () => {
  return (
    <Card className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-10 rounded-3xl flex items-center shadow-xl my-6 border-none">
      <CardContent className="w-full flex flex-col md:flex-row items-center justify-between ">
        <div className="max-w-lg space-y-6">
          <h1 className="heading3 ">
            Every transaction is a story
          </h1>
          <p className="heading -mt-8">
            — what is yours?
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              When it comes to global money transfers, every transaction becomes more than just a monetary exchange: It becomes an opportunity to strengthen connections and nurture ties with the people and places that have shaped us.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              And that is why global money transfers should offer the same seamless, cheap, and familiar experience as sending money within the same country, removing the mental gymnastics of how to get money across.
            </p>
          </div>
        </div>
        <div className="hidden md:block overflow-hidden pt-4 max-h-[560px]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <Image 
              src="/images/Home/mobile-card.png" 
              alt="Mobile Card" 
              width={500} 
              height={700} 
              className="object-cover rounded-xl shadow-lg relative z-10 hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionStoryCard;