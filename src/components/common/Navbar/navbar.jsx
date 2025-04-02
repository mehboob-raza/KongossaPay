"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import KongossaPay from "../../../../public/images/logo.png";
import Link from "next/link";
import { NavbarMenu } from "./navbarMenu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`px-4 sticky top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="md:max-container max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-[60px] md:h-[80px]">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={KongossaPay}
              alt="KongossaPay Logo"
              priority
              width={130}
              height={130}
              className="object-contain"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center gap-4">
            <NavbarMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
