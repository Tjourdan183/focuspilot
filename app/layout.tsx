// app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Newsletter-Popup
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Dark-Mode
  const [isDark, setIsDark] = useState(false);

  // Zeige Newsletter-Popup nach 20 Sek., sofern nicht schon geschlossen
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasClosedPopup = localStorage.getItem("newsletterPopupClosed");
    if (hasClosedPopup) return;
    const timer = setTimeout(() => setShowPopup(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  // Dark-Mode: Prüfe lokale Einstellung oder OS-Präferenz
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      // Moderne Browser: OS-Präferenz prüfen
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  // Dark-Mode umschalten
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Newsletter-Popup schließen
  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("newsletterPopupClosed", "true");
  };

  // Newsletter-Formular abschicken
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Subscription failed");
      closePopup();
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-white dark:bg-black text-foreground transition-colors duration-300">
        {/* Header (enthält auch Dark-Mode-Toggle) */}
        <Header onToggleDark={toggleDarkMode} isDark={isDark} />

        {/* Newsletter-Popup */}
        {showPopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={closePopup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
          >
            <div
              className="bg-card p-6 rounded-card shadow-xl max-w-md w-full mx-4 animate-fadeIn relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                aria-label="Close newsletter popup"
              >
                ✕
              </button>

              <h2 id="newsletter-title" className="text-2xl font-semibold mb-4 text-foreground">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-4">
                Get the latest updates and exclusive offers directly in your inbox.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-border rounded-md px-4 py-2 focus:ring focus:ring-primary focus:border-primary"
                    required
                    aria-label="Email address"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="text-destructive-foreground text-sm mt-1" role="alert">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 transition disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
