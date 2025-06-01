// components/ui/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) throw new Error('Subscription failed');
      
      setShowModal(false);
      setEmail("");
    } catch (error) {
      console.error('Subscription error:', error);
      // Here you could set an error state and show it to the user
    }
  };

  return (
    <>
      {/* ─── HEADER-BAR ─────────────────────────────────────────────────── */}
      <header
        className={`
          fixed top-8 left-1/2 transform -translate-x-1/2 
          w-[95%] max-w-6xl mx-auto z-50
        `}
      >
        <div
          className={`
            bg-white rounded-full h-16 flex items-center justify-between px-8
            transition-all duration-300 ease-in-out
            ${scrolled ? "shadow-lg" : "shadow-none"}
          `}
        >
          {/* ─── 1. Logo (links) ─────────────────────── */}
          <Link
            href="/"
            className={`
              font-bold transition-all duration-300 ease-in-out text-gray-900
              ${scrolled ? "text-xl" : "text-xl"}
            `}
          >
            Focuspilot.ai
          </Link>

          {/* ─── 2. Navigation (mitte, nur Desktop) ── */}
          <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {[
              { href: "/features", label: "Features" },
              { href: "/pricing", label: "Pricing" },
              { href: "/enterprise", label: "Enterprise" },
              { href: "/resources", label: "Resources" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition-all duration-300 ease-in-out
                  ${
                    scrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-2 py-1 rounded text-sm"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-200 px-2 py-1 rounded text-base"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden mr-4"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* ─── 3. „Early Access“-Button (rechts) ─── */}
          <div className="flex items-center">
            {/* Button für ≥ md */}
            <button
              onClick={() => setShowModal(true)}
              className="
                hidden md:inline-block 
                px-4 py-2 bg-blue-600 text-white font-semibold rounded-md 
                hover:bg-blue-700 transition animate-pulse
              "
              aria-label="Get Early Access"
            >
              Early Access – 20% off
            </button>

            {/* Button für < md (sichtbar, wenn Navigation versteckt ist) */}
            <button
              onClick={() => setShowModal(true)}
              className="
                md:hidden 
                px-3 py-2 bg-blue-600 text-white font-semibold rounded-md 
                hover:bg-blue-700 transition animate-pulse
              "
              aria-label="Get Early Access"
            >
              Early Access
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white rounded-lg shadow-lg p-4 mt-2">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/enterprise", label: "Enterprise" },
                { href: "/resources", label: "Resources" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      {/* ────────────────────────────────────────────────────────────────── */}

      {/* ─── EARLY-ACCESS-MODAL ──────────────────────────────────────────── */}
      {showModal && (
        <div
          className="
            fixed inset-0 flex items-center justify-center 
            bg-black/50 z-50
          "
          onClick={() => setShowModal(false)}
        >
          <div
            className="
              bg-white rounded-xl shadow-xl 
              w-full max-w-md p-6 mx-4 
              relative
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Schließen-Kreuz */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center">
              Get Early Access
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Enter your email to receive 20% off your first month:
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-2 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
                aria-label="Email address"
              />
              <button
                type="submit"
                className="
                  w-full px-4 py-2 bg-blue-600 text-white 
                  font-semibold rounded-md hover:bg-blue-700 transition
                "
              >
                Get Early Access Now
              </button>
            </form>
          </div>
        </div>
      )}
      {/* ────────────────────────────────────────────────────────────────── */}
    </>
  );
}
