// components/ui/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  onToggleDark?: () => void;
  isDark?: boolean;
}

export default function Header({ onToggleDark, isDark = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-Effekt: Sobald >20px gescrollt, setze Blur & Shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/FAQ", label: "FAQ" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? "bg-background/70 backdrop-blur-md shadow-sm h-16" 
          : "bg-transparent h-20"
        }
      `}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`
            font-bold text-xl text-foreground transition-colors duration-200
            ${scrolled ? "" : "text-foreground/90"}
          `}
        >
          Focuspilot.ai
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-muted-foreground hover:text-foreground transition-colors duration-200
                ${scrolled ? "text-sm" : "text-base"} 
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Dark-Mode-Toggle */}
          {onToggleDark && (
            <button
              onClick={onToggleDark}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-md hover:bg-secondary/20 transition-colors"
            >
              {isDark ? (
                <SunIcon className="w-6 h-6 text-accent" />
              ) : (
                <MoonIcon className="w-6 h-6 text-accent" />
              )}
            </button>
          )}

          {/* Desktop-CTA-Button */}
          <button
            className={`
              hidden md:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground 
              rounded-lg shadow-md hover:bg-primary/90 transition transform active:scale-95 
              animate-pulse-slow
            `}
          >
            Early Access – 20% off
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-foreground" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile-Menu (Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground py-2 hover:bg-secondary/10 rounded transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="mx-4 mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90 transition"
            >
              Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
