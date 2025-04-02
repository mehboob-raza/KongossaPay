"use client";

import { Button } from "@/components/ui/button";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import { Canada, Country, Nigeria, UK } from "@/constants/Home";
const AllFlags = () => {
  const [selectedTab, setSelectedTab] = useState(Country[0].link);
  const [displayedTools, setDisplayedTools] = useState(Canada);
  const handleTabClick = (tab) => {
    setSelectedTab(tab.link);
  };
  useEffect(() => {
    console.log(selectedTab);

    switch (selectedTab) {
      case "canada":
        setDisplayedTools(Canada);
        break;
      case "uk":
        setDisplayedTools(UK);
        break;
      case "nigeria":
        setDisplayedTools(Nigeria);
        break;

      default:
        setDisplayedTools(Canada);
    }
  }, [selectedTab]);

  return (
    <section className="max-container">
      <div className="flex flex-col gap-6 w-full items-center py-14 md:py-24 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12">
          <div className="w-full flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h1 className="heading text-4xl md:text-5xl bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
                Sending money
              </h1>
              <h1 className="heading text-4xl md:text-5xl bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
                across borders?
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Look no further! Our international money transfer service offers swift, secure, and seamless transactions. With competitive rates and reliable service, we ensure your funds reach their destination promptly. Say goodbye to worries and hello to hassle-free transfers!
            </p>
          </div>
          <div className="relative w-full h-[300px] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/MultiCurrencyWallet/flag.png" 
              alt="flag" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex space-x-2 sm:space-x-4 p-2 max-w-full overflow-y-auto scrollbar-hide py-10 md:pt-20">
          {Country.map((tabBar, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(tabBar)}
              className={`${
                selectedTab === tabBar.link
                  ? "bg-gradient-to-r from-[#0a136e] to-[#0770e6] text-white shadow-lg shadow-blue-200"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              } px-3 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 flex-shrink-0`}
            >
              <p className="text-[10px] md:text-sm font-medium">{tabBar.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 w-full gap-6 mt-1 md:gap-8 md:px-24">
          {displayedTools.map((card, index) => (
            <Link key={index} href={card.link}>
              <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="rounded-full md:size-12 size-8 p-2 relative bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={card.flag} 
                    alt={`${card.name} flag`} 
                    fill 
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-[10px] md:text-sm">
                  {card.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFlags;