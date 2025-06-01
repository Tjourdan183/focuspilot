"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out border-b ${
        scrolled
          ? "h-16 bg-white/80 backdrop-blur-sm shadow-sm"
          : "h-24 bg-white/0"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className={`font-bold transition-all duration-200 text-gray-900 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          Focuspilot.ai
        </Link>
        
        <nav className="h-full">
          <ul className="flex h-full items-center space-x-1">
            {["Features", "Pricing", "Enterprise", "Resources", "About", "Contact"].map(
              (item) => (
                <li key={item} className="h-full flex items-center">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={`h-full flex items-center px-4 transition-all duration-200 text-gray-600 hover:text-gray-900 ${
                      scrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
} 