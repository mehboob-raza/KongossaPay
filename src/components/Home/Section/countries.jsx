"use client";
import { countriesArray } from "@/constants/Home";
import Image from "next/image";
import React from "react";
import Marquee from 'react-fast-marquee';

const Countries = () => {
  // Duplicate the array to create a seamless loop
  const duplicatedCountries = [...countriesArray, ...countriesArray];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="flex flex-col items-center gap-6 w-full text-center">
        <h1 className="heading">
          Our Countries
        </h1>
       
        <div className="w-full">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            className="py-4"
          >
            {duplicatedCountries.map((tabBar, index) => (
              <div
                key={index}
                className="font-medium bg-white py-4 px-8 rounded-full transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-3 text-[#4B5563] flex-shrink-0 hover:bg-blue-50 hover:shadow-lg hover:scale-105 border border-gray-100 mx-2"
              >
                <Image src={tabBar.flag} width={30} height={30} className="rounded-full" />
                <p className="text-lg font-medium">{tabBar.title}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Countries;