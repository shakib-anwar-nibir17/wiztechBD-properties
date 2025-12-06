"use client";

import { PUBLIC_ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "bg-white rounded-[8px] flex items-center justify-between pl-8 pr-4 py-[10px] w-full",
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {/* Nav Links */}
        <div className="flex items-center gap-8 text-[18px] leading-normal">
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

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
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
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-[#434953] hover:text-primary-500 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-[8px] shadow-lg p-4 z-50">
          <div className="flex flex-col gap-4">
            {/* Mobile Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-[#434953] text-[16px] font-medium py-2 transition-colors hover:text-primary-500",
                  item.isActive && "text-primary-500 font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px bg-gray-200 my-2" />

            {/* Mobile Favourite */}
            <Link
              href="/favourites"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2"
            >
              <Heart className="w-5 h-5 text-[#434953]" strokeWidth={1.5} />
              <span className="text-[#434953] text-[16px] font-medium">
                Favourite
              </span>
            </Link>

            {/* Mobile Login Button */}
            <Link
              href={PUBLIC_ROUTES.LOGIN}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary-500 text-white text-center px-4 py-3 rounded-full text-[16px] font-semibold hover:bg-primary-600 transition-colors"
            >
              Login Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
