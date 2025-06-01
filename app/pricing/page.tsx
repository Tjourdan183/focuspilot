"use client";                        // Nur nötig, wenn du Hooks hier nutzen willst
import React from "react";
import Link from "next/link";      // Falls du innerhalb der Seite auf andere Routen verlinken willst

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      {/* Überschrift am Seitenanfang */}
      <h1 className="text-3xl font-bold text-center mt-12">
        🚀 Pricing Page Loaded 🚀
      </h1>

      {/* ---------- Pricing Section ---------- */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">Pricing</h2>
          <p className="mt-4 text-gray-600">
            Pick the plan that’s right for you.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="border rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-4 text-3xl font-extrabold">
                $0
                <span className="text-base font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-4 flex-1 text-left">
                <li>✓ Basic task management</li>
                <li>✓ Focus timer</li>
                <li>✗ Analytics</li>
              </ul>
              <button className="mt-8 px-6 py-3 border rounded-md font-semibold hover:bg-gray-100 transition">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 flex flex-col bg-blue-50">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="mt-4 text-3xl font-extrabold">
                $9
                <span className="text-base font-normal">/mo</span>
              </p>
              <ul className="mt-6 space-y-4 flex-1 text-left">
                <li>✓ All Free features</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Team collaboration</li>
              </ul>
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
                Start free trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-2xl p-8 flex flex-col">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-4 text-3xl font-extrabold">Custom</p>
              <ul className="mt-6 space-y-4 flex-1 text-left">
                <li>✓ Everything in Pro</li>
                <li>✓ Advanced security</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button className="mt-8 px-6 py-3 border rounded-md font-semibold hover:bg-gray-100 transition">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beispiel-Link zurück zur Startseite */}
      <div className="text-center mt-12">
        <Link href="/">
          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            ← Zurück zur Startseite
          </button>
        </Link>
      </div>
    </main>
  );
}
