"use client";
import React from "react";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen flex flex-col font-inter bg-white pt-24">
      <h1 className="text-3xl font-bold text-center mt-12">🚀 Resources Page Loaded 🚀</h1>

      {/* ---------- Resources Section ---------- */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold">Resources</h2>
          <p className="mt-4 text-gray-600">
            Dive deeper with our blogs, tutorials, and user stories.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Blog */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Blog</h3>
              <p className="mt-2 text-gray-600 flex-1">
                Read our latest articles on productivity tips and best practices.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                Read blog
              </a>
            </div>

            {/* Tutorials */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Tutorials</h3>
              <p className="mt-2 text-gray-600 flex-1">
                Step-by-step guides to get the most out of Focuspilot.ai.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                View tutorials
              </a>
            </div>

            {/* User Stories */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold">User Stories</h3>
              <p className="mt-2 text-gray-600 flex-1">
                Learn how others improved their workflow with Focuspilot.ai.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                See stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
