"use client";
import React from "react";

export default function EnterprisePage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      <h1 className="text-3xl font-bold text-center mt-12">🚀 Enterprise Page Loaded 🚀</h1>

      {/* ---------- Enterprise Section ---------- */}
      <section id="enterprise" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center">Enterprise Solutions</h2>
          <p className="mt-4 text-gray-600 text-center">
            Individuelle Unternehmenslösungen für große Teams.
          </p>

          <div className="mt-12 space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold">Dedicated Support</h3>
              <p className="mt-2 text-gray-600">
                Persönlicher Ansprechpartner für deinen gesamten Enterprise-Account.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold">Custom SLAs</h3>
              <p className="mt-2 text-gray-600">
                Maßgeschneiderte Service-Level-Agreements, abgestimmt auf deine Geschäftsprozesse.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold">Advanced Security</h3>
              <p className="mt-2 text-gray-600">
                Enterprise-Grade Sicherheitsfeatures, Single Sign-On und Audit-Logs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
