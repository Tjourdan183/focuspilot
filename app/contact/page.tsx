"use client";
import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      <h1 className="text-3xl font-bold text-center mt-12">🚀 Contact Page Loaded 🚀</h1>

      {/* ---------- Contact Section ---------- */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-center">
            Hast du Fragen oder Feedback? Schreib uns eine Nachricht:
          </p>

          <form className="mt-8 space-y-6 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Dein Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="deine@e-mail.de"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Deine Nachricht…"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Absenden
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
