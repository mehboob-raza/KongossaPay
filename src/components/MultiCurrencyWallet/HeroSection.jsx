import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import QRCodeGenerator from "../transfer-payment-button/QRCodeGenerator";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 justify-center text-center py-16 sm:py-28">
      <div className="absolute inset-0 bg-[url('/images/Home/herosectionImg.png')] bg-cover bg-center opacity-5"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="heading2">
          Unlock the world with a
        </h1>
        <h1 className="heading">
          Multi-currency wallet
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-4 text-regular">
          Imagine a world without borders. A world where managing multiple currencies is effortless — securely hold, send, and receive money in various currencies, all within a single wallet.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <QRCodeGenerator />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
