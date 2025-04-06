"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import wallet from "../../../../public/icons/Svgs/wallet.svg"
import transfers from "../../../../public/icons/Svgs/transfers.svg"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const components = [
  {
    key: 1,
    title: "Multi-currency Wallet",
    href: "/multi-currency-wallet",
    description: "Unlock the world with each wallet.",
    icon: wallet,
  },
  {
    key: 2,
    title: "International Transfers",
    href: "/international-transfer",
    description: "Move funds across borders with ease.",
    icon: transfers,
  },
]

export function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-2 md:w-[400px] lg:w-[400px] lg:grid-cols-1 
                  bg-gradient-to-br from-[#ffffff80] via-[#ffffff40] to-[#ffffff20] 
                  backdrop-blur-xl 
                  rounded-xl overflow-hidden
                  shadow-[0_8px_32px_0_rgba(251,140,74,0.1)]
                  border border-white/50">
                  <div className="flex flex-col gap-2">
                    {components.map((component) => (
                      <Link href={component.href} key={component.key}>
                        <div className="flex flex-row items-center gap-4 p-3 
                          rounded-lg 
                          transition-all duration-300 
                          hover:bg-gradient-to-r hover:from-[#0a136e]/10 hover:to-[#0770e6]/10
                          hover:border-[#0a136e]/20
                          group">
                          <Image
                            src={component.icon}
                            alt="Logo"
                            priority
                            width={24}
                            height={24}
                            className="object-contain transition-transform group-hover:scale-110"
                          />
                          <div className="w-full flex items-start justify-start flex-col">
                            <p className="font-semibold text-[#0a136e]
                              group-hover:text-[#0a136e] 
                              transition-colors">
                              {component.title}
                            </p>
                            <p className="text-gray-200 text-sm 
                              group-hover:text-gray-100 
                              transition-colors">
                              {component.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faqs" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold">
                  FAQs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/help" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold">
                  Help
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/auth-form" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold">
                  Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl">
            <div className="p-4 space-y-4">
              {/* Products Dropdown */}
              <div className="space-y-3">
                <h3 className="text-[#0a136e] font-semibold">Products</h3>
                {components.map((component) => (
                  <Link
                    href={component.href}
                    key={component.key}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                      <Image
                        src={component.icon}
                        alt="Logo"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{component.title}</p>
                        <p className="text-sm text-gray-600">{component.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Navigation Links */}
              <div className="space-y-2 pt-2 border-t">
                <Link
                  href="/about-us"
                  onClick={() => setIsOpen(false)}
                  className="block p-2 text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold"
                >
                  About Us
                </Link>
                <Link
                  href="/faqs"
                  onClick={() => setIsOpen(false)}
                  className="block p-2 text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold"
                >
                  FAQs
                </Link>
                <Link
                  href="/help"
                  onClick={() => setIsOpen(false)}
                  className="block p-2 text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold"
                >
                  Help
                </Link>
                <Link
                  href="/auth-form"
                  onClick={() => setIsOpen(false)}
                  className="block p-2 text-[#0a136e] hover:text-[#0770e6] transition-colors duration-300 font-semibold"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const ListItem = React.forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
