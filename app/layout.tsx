"use client"; // Hinzugefügt, da wir useState und useEffect verwenden

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

  useEffect(() => {
    // Stelle sicher, dass wir im Browser sind
    if (typeof window === 'undefined') return;
    
    // Prüfe, ob das Pop-up bereits geschlossen wurde
    const hasClosedPopup = localStorage.getItem("newsletterPopupClosed");
    if (hasClosedPopup) return;
    
    // Zeige das Pop-up nach 20 Sekunden
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);
    
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    // Speichere, dass das Pop-up geschlossen wurde, damit es nicht erneut erscheint
    localStorage.setItem("newsletterPopupClosed", "true");
  };

  return (
    <html lang="en" className="h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden relative flex flex-col`}>
        <Header />
        {/* Newsletter Pop-up */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
              {/* Schließen-Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              {/* Pop-up Inhalt */}
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Melde dich für unseren Newsletter an!
              </h2>
              <p className="text-gray-600 mb-4">
                Erhalte die neuesten Updates und Angebote direkt in dein Postfach.
              </p>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
                  Anmelden
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Mit deiner Anmeldung stimmst du unserer{" "}
                <Link href="/datenschutz" className="text-blue-600 hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                zu.
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