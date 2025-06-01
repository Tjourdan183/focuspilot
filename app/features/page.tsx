"use client";                   // nur, wenn du Hooks nutzen willst
import React from "react";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      {/* Überschrift */}
      <h1 className="text-3xl font-bold text-center mt-12">🚀 Features Page Loaded 🚀</h1>

      {/* ---------- Features Section ---------- */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center">Features</h2>
          <div className="mt-12 space-y-16">
            {/* Beispiel-Feature 1 */}
            <div className="grid gap-8 items-center md:grid-cols-2">
              <div className="md:px-6">
                <h3 className="text-2xl font-bold">Task Management</h3>
                <p className="mt-3 text-gray-600">
                  Organize and prioritize your tasks efficiently.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-6 bg-white rounded-2xl shadow">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m0 6v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m4 0h3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Beispiel-Feature 2 */}
            <div className="grid gap-8 items-center md:grid-cols-2 md:flex-row-reverse">
              <div className="md:px-6">
                <h3 className="text-2xl font-bold">Focus Timer</h3>
                <p className="mt-3 text-gray-600">
                  Utilize timers to maintain deep concentration.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-6 bg-white rounded-2xl shadow">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2m2 2a9 9 0 1 0-9 9 9 9 0 0 0 9-9z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Beispiel-Feature 3 */}
            <div className="grid gap-8 items-center md:grid-cols-2">
              <div className="md:px-6">
                <h3 className="text-2xl font-bold">Analytics</h3>
                <p className="mt-3 text-gray-600">
                  Track your productivity with detailed insights.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-6 bg-white rounded-2xl shadow">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 11V3m0 8a4 4 0 0 0 4 4h5m-9 0a4 4 0 0 1-4-4H2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
