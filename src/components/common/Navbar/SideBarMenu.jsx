"use client";

import React, { useState } from 'react';
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { Sling as Hamburger } from 'hamburger-react';
import { AccordionDemo } from './AccordionData';


export const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger toggled={isOpen} toggle={handleToggle} size={18} color='#4B5563'/>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-full px-4 fixed top-[64px] left-0 z-40 bg-white">
          <div className="flex flex-col h-full w-full">
            <div className="flex-grow h-auto overflow-auto">
              <AccordionDemo handleToggle={handleToggle}/>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};