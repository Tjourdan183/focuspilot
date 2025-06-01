"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-8 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl mx-auto z-50
      `}
    >
      <div
        className={`
          bg-white rounded-full h-16 flex items-center justify-between px-8
          transition-all duration-300 ease-in-out
          ${scrolled ? 'shadow-lg' : 'shadow-none'}
        `}
      >
        {/* Logo on the left */}
        <Link
          href="/"
          className={`
            font-bold transition-all duration-300 ease-in-out text-gray-900
            ${scrolled ? 'text-xl' : 'text-xl'}
          `}
        >
          Focuspilot.ai
        </Link>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {[
            { href: '/features', label: 'Features' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/enterprise', label: 'Enterprise' },
            { href: '/resources', label: 'Resources' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                transition-all duration-300 ease-in-out
                ${scrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-2 py-1 rounded text-sm' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-2 py-1 rounded text-base'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}