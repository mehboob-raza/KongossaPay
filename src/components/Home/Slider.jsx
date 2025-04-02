"use client"

import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"

import Link from "next/link";



export default function Slider({ api, setApi }) {
  return (
    <Carousel
      setApi={setApi}
      className="w-full max-w-[100vw]"
      plugins={[]} // Add plugins property
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        <CarouselItem className="basis-4/4 sm:basis-4/4 sm:basis-1/2 flex-grow-0 flex-shrink-0 h-[370px]">
          <Link href="/" >
            <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/smilling-man.png)] bg-no-repeat bg-cover p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-regular text-[0.75rem] relative">
                <p>Helpful and timely. Intersects the global financial ecosystem in such a way that individuals get a chance to manage and utilize their currencies, no matter the country. Helped me settle down in a new country with minimal hassles. Thank you Pesapeer.</p>
                <p className="font-regular text-[0.8rem]">
                  Ugonna Onyema, Nigeria
                </p>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className=" basis-4/4 sm:basis-1/2 flex-grow-0 flex-shrink-0 h-[370px]">
          <Link href="/" >
            <div className="w-full h-full gap-4 flex flex-col">
              <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/testimonial-2.png)] bg-no-repeat bg-cover p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-medium text-[0.85rem] relative">
                  <div className="w-full ">
                    <p>KongossaPay!</p>
                    <p> This app is such a breeze to use! Customer service via instagram dm is also highly responsive. Definitely a must have to send money with.</p>
                  </div>
                  <p className="font-regular text-[0.8rem]">
                    Tomisco, Cameroon
                  </p>
                </div>
              </div>
              <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/testimonial-5.png)] bg-no-repeat bg-cover p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-medium text-[0.85rem] relative">
                  <p>Sending and receiving money to and from Nigeria just got easier.</p>
                  <p className="font-regular text-[0.8rem]">
                    Thelma, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className="basis-4/4 sm:basis-1/2 flex-grow-0 flex-shrink-0 h-[370px]">
          <Link href="/" >
          <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/testimonial-3.png)] bg-no-repeat bg-cover p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-regular text-[0.75rem] relative">
                <div className="w-full ">
                  <p>KongossaPay!</p>
                  <p> This app is such a breeze to use! Customer service via instagram dm is also highly responsive. Definitely a must have to send money with.</p>
                </div>
                <p className="font-regular text-[0.8rem]">
                  Ewurabena, Ghana
                </p>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem className=" basis-4/4 sm:basis-1/2 flex-grow-0 flex-shrink-0 h-[370px]">
          <Link href="/" >
            <div className="w-full h-full gap-4 flex flex-col">
              <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/testimonial-9.png)] bg-no-repeat bg-cover p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-medium text-[0.85rem] relative">
                  <p>Have been using different money transfer platforms before coming across pesapeer. None of them has been as fast as this, and none of them can stand pesapeer even with their rate.</p>
                  <p className="font-regular text-[0.8rem]">
                    Ugonna Onyema, Nigeria
                  </p>
                </div>
              </div>
              <div className="rounded-2xl shadow-xl w-full h-full bg-[url(/images/Home/testimonial-7.png)] bg-no-repeat bg-cover p-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="flex flex-col justify-end items-start gap-4 w-full h-full text-white font-medium text-[0.85rem] relative">
                  <p>Helpful and timely. Intersects the global financial ecosystem in such a way that individuals get a chance to manage and utilize their currencies, no matter the country. Helped me settle down in a new country with minimal hassles. Thank you Pesapeer.</p>
                  <p className="font-regular text-[0.8rem]">
                    Chioma, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}