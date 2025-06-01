"use client";
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white font-inter pt-24">
      <h1 className="text-3xl font-bold text-center mt-20">🚀 Home Page Loaded 🚀</h1>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Willkommen bei Focuspilot.ai
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dies ist ein Platzhaltertext, um sicherzustellen, dass die Seite
            lang genug ist, damit du scrollen kannst und die Sticky Navigation
            testen kannst. Scrolle einfach nach unten, um zu sehen, wie sich der
            Header verändert.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Warum Focuspilot?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Unsere Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </section>

        <div className="h-96 bg-gray-100 mt-10 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Platzhalter-Bereich für mehr Höhe</p>
        </div>
      </div>
    </main>
  );
}