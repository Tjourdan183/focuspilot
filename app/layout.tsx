// app/layout.tsx
"use client"; // nötig, weil wir in diesem Layout useState/useEffect verwenden

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState, useEffect } from "react";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasClosedPopup = localStorage.getItem("newsletterPopupClosed");
    if (hasClosedPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("newsletterPopupClosed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Subscription failed');

      closePopup();
      setEmail("");
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <html lang="en" className="h-screen">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased 
          min-h-screen overflow-x-hidden relative flex flex-col
        `}
      >
        <Header />

        {showPopup && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closePopup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close newsletter popup"
              >
                ✕
              </button>

              <h2 id="newsletter-title" className="text-2xl font-bold mb-4 text-gray-800">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Get the latest updates and offers directly in your inbox.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full border border-gray-300 rounded px-4 py-2 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                    "
                    required
                    aria-label="Email address"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="
                    bg-blue-600 text-white rounded px-4 py-2 
                    hover:bg-blue-700 transition disabled:opacity-50
                  "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        )}

        <main className="flex-1 pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
