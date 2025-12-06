"use client";

import { PUBLIC_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { Heart, Menu } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Logo } from "./logo";

interface NavbarProps {
  className?: string;
}

// Navigation items
const navItems = [
  { label: "Buy", href: "/buy", isActive: true },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Mortgage Calculator", href: "/mortgage-calculator" },
];

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "bg-white rounded-[8px] flex items-center justify-between px-2 xs:px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-[10px] w-full relative",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Nav Links - Centered */}
      <div className="hidden lg:flex items-center gap-8 text-[18px] leading-normal absolute left-1/2 -translate-x-1/2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "text-[#434953] font-medium transition-colors hover:text-primary-500",
              item.isActive && "text-primary-500 font-semibold"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop Right Side Actions */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Favourite Button */}
        <Link
          href="/favourites"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Heart className="w-6 h-6 text-[#434953]" strokeWidth={1.5} />
          <span className="text-[#434953] text-[16px] font-medium tracking-[-0.8px]">
            Favourite
          </span>
        </Link>

        {/* Login Button */}
        <Link
          href={PUBLIC_ROUTES.LOGIN}
          className="bg-primary-500 text-white px-4 py-3 rounded-full text-[16px] font-semibold tracking-[-0.8px] hover:bg-primary-600 transition-colors"
        >
          Login Now
        </Link>
      </div>

      {/* Mobile Actions + Menu */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Mobile Favourite - Icon Only */}
        <Link
          href="/favourites"
          className="p-2 hover:opacity-80 transition-opacity"
          aria-label="Favourites"
        >
          <Heart className="w-6 h-6 text-[#434953]" strokeWidth={1.5} />
        </Link>

        {/* Mobile Login Button - Short Form */}
        <Link
          href={PUBLIC_ROUTES.LOGIN}
          className="bg-primary-500 text-white px-3 py-2 rounded-full text-[14px] font-semibold hover:bg-primary-600 transition-colors"
        >
          Login
        </Link>

        {/* Mobile Menu - Drawer */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button
              className="p-2 text-[#434953] hover:text-primary-500 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-full bg-white">
            <DrawerHeader className="border-b border-gray-100">
              <DrawerTitle className="text-left">
                <Logo />
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col p-6 gap-2">
              {/* Mobile Nav Links */}
              {navItems.map((item) => (
                <DrawerClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[#434953] text-[16px] font-medium py-3 px-4 rounded-lg transition-colors hover:bg-gray-50 hover:text-primary-500",
                      item.isActive &&
                        "text-primary-500 font-semibold bg-primary-50"
                    )}
                  >
                    {item.label}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};
