"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import wallet from "../../../../public/icons/Svgs/wallet.svg";
import transfers from "../../../../public/icons/Svgs/transfers.svg";
import dollar from "../../../../public/icons/Svgs/dollar.svg";

const components = [
  {
    key: 1,
    title: "Multi-currency Wallet",
    href: "/",
    description: "Unlock the world with each wallet.",
    icon: wallet,
  },
  {
    key: 2,
    title: "International Transfers",
    href: "/",
    description: "Move funds across borders with ease.",
    icon: transfers,
  },
];

export function AccordionDemo({ handleToggle }) {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col">
      {/* PRODUCTS SECTION */}
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold text-lg text-gray-900">Products</AccordionTrigger>
        <AccordionContent className="px-4">
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-1 bg-white border border-gray-100 rounded-xl shadow-sm">
            <div className="flex flex-col gap-6">
              {components.map((component) => (
                <div
                  key={component.key}
                  className="flex flex-row items-center gap-6 hover:bg-blue-50 p-3 rounded-lg transition-colors cursor-pointer"
                  onClick={handleToggle}
                >
                  <Image
                    src={component.icon}
                    alt="Icon"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <div className="w-full flex flex-col">
                    <p className="font-semibold text-gray-900 hover:text-blue-600">{component.title}</p>
                    <p className="text-gray-600 text-sm">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* COMPANY SECTION */}
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-lg">Company</AccordionTrigger>
        <AccordionContent className="px-4">
          <ul
            className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[500px] border border-gray-300 rounded-md"
            onClick={handleToggle}
          >
            <div className="flex flex-row items-center gap-6">
              <Image
                src={dollar}
                alt="Dollar Icon"
                width={24}
                height={24}
                className="size-6 object-contain"
              />
              <div className="w-full flex flex-col">
                <p className="font-bold text-gray-900 hover:text-blue-500">About KongossaPay</p>
                <p className="text-gray-600 text-sm">Read about the humans behind KongossaPay.</p>
              </div>
            </div>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* RESOURCES SECTION */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-lg">Resources</AccordionTrigger>
        <AccordionContent className="px-4">
          <ul
            className="grid w-[300px] gap-3 p-4 md:w-[500px] lg:w-[500px] border border-gray-300 rounded-md"
            onClick={handleToggle}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between w-full">
                <a href="#" className="text-gray-900 font-medium hover:underline">
                  FAQs
                </a>
                <a href="#" className="text-gray-900 font-medium hover:underline">
                  Blog
                </a>
              </div>
              <a href="#" className="text-gray-900 font-medium hover:underline">
                KongossaPay Support
              </a>
            </div>

            {/* Recent Article */}
            <div className="mt-6 border-t pt-4">
              <h4 className="text-gray-500 text-xs uppercase font-semibold">Recent Article</h4>
              <p className="text-gray-900 font-bold mt-1">
                What Are The Hidden Fees in Money Transfers to India from Canada
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Uncover the hidden fees in money transfers to India from Canada...
              </p>
            </div>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* HELP SECTION */}
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold text-lg">Help</AccordionTrigger>
        <AccordionContent className="px-4">
          <ul className="grid gap-3 p-4 border border-gray-300 rounded-md">
            <a href="/docs" className="text-gray-900 font-medium hover:underline">
              Help Center
            </a>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
