"use client"

import React, { useCallback } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Dynamically import the Slider component with SSR disabled
const Slider = dynamic(() => import("../Slider"), { ssr: false });

const FreeTools = () => {
  const [api, setApi] = useState(null);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="py-16 sm:py-28 max-lg:px-6">
      <div className="max-container">
        <div className="">
          <div className="space-y-4">
            <h1 className="heading">
              Let's make money moves
            </h1>
          </div>
          <div className="flex justify-between items-start  gap-6">
            <p className="text-gray-600 font-normal text-lg leading-[30px] max-w-[30ch]">
              Join thousands of users who trust KongossaPay for fast, secure, and free international transfers.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-blue-200 hover:bg-blue-300 transition-all duration-300 w-12 h-12 group cursor-pointer"
                onClick={handlePrevious}
              >
                <ArrowLeft className="w-5 h-5 text-blue-900" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-blue-200 hover:bg-blue-300 transition-all duration-300 w-12 h-12 group cursor-pointer"
                onClick={handleNext}
              >
                <ArrowRight className="w-5 h-5 text-blue-900" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:pb-6">
          <Slider api={api} setApi={setApi} />
        </div>
      </div>
    </section>
  );
};

export default FreeTools;