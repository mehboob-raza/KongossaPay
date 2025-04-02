import CurrencyCard from "@/components/shared/currencyCard";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/Home/Section/why_choose_us";
import Image from "next/image";
import React from "react";
import QRCodeGenerator from "@/components/transfer-payment-button/QRCodeGenerator";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 justify-center text-center pt-16 sm:pt-28">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/Home/herosectionImg.png')] bg-cover bg-center opacity-5"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl sm:text-8xl tracking-wide font-ultralight letter-spacing-[0.1em] bg-gradient-to-r from-[#0a136e] to-[#0770e6] bg-clip-text text-transparent">
            Welcome to
          </h1>
          <h1 className="text-4xl sm:text-8xl font-bold text-gray-900">
            KongossaPay
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4 text-regular">
            Your fast and secure solution for international money transfers. Send, receive, spend and convert with ease.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <QRCodeGenerator />
          </div>
        </div>

        {/* Hero Image (Mobile UI Preview) */}
        <div className="relative sm:mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
            <Image
              src="/images/Home/mobile.png"
              alt="hero section"
              width={1000}
              height={800}
              className="object-cover drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 -mb-4"
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />

      {/* <CurrencyCard /> */}
    </>
  );
};

export default HeroSection;
