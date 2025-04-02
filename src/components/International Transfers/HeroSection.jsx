import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import MoneyTransfer from "../shared/MoneyTransfer";
import CurrencyCard from "../shared/currencyCard";
import QRCodeGenerator from "../transfer-payment-button/QRCodeGenerator";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 justify-center text-center py-16 sm:py-28">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/Home/herosectionImg.png')] bg-cover bg-center opacity-5"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="heading2">
            Move Funds
          </h1>
          <h1 className="heading">
            Across Borders with Ease
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4 text-regular">
            Make free transfers or payments abroad without mental gymnastics. Send international transfers in over 30 currencies, within minutes.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <QRCodeGenerator />
          </div>
        </div>

      </section>
      <div className='px-4 md:px-0'>
        <CurrencyCard />
      </div>

    </>
  );
};

export default HeroSection;
