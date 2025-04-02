import React from 'react';
import Image from 'next/image';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gradient-to-br from-white via-orange-50 to-purple-50 min-h-[40vh] md:min-h-[60vh] py-5 md:py-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/logo.png" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-blue-50 to-transparent"></div>

      <div className="relative text-center max-w-4xl px-6 animate-fade-in flex flex-col gap-[2vh] items-center">
        <h1 className="text-3xl mt-3 md:mt-0 md:text-6xl font-bold bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-lg mb-6 text-gray-600">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-[#0a136e] to-[#0770e6] rounded-full blur-md opacity-20 animate-floating"></div>
      <div className="absolute bottom-16 right-16 w-16 h-16 bg-gradient-to-r from-[#0a136e] to-[#0770e6] rounded-full blur-md opacity-30 animate-floating-reverse"></div>
      <div className="absolute top-10 right-1/4 w-16 h-16 bg-transparent border-2 border-[#0a136e] opacity-50 animate-rotate"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-transparent border-2 border-[#0770e6] opacity-50 animate-rotate-reverse"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 border-2 border-dashed border-[#0a136e] rounded-full opacity-40 animate-expand"></div>
        <div className="w-40 h-40 border-2 border-dashed border-[#0770e6] rounded-full opacity-30 animate-expand-reverse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
